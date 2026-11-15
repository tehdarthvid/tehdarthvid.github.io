// Makes the "currently into" video loops. For each card in cache.json with a `clip`, cuts a
// short, muted, 480x640 H.264 loop and a WebP poster into src/lib/clips/ (gitignored, so no
// media is committed). Deck.svelte picks them up at build time; a card without its loop keeps
// its YouTube player. Needs ffmpeg. Never fails the build: a loop that can't be made is skipped
// with a warning.
//
// clip.src is a direct video URL (MP4 or HLS), or `steam:<appid>` for the app's first Steam
// store trailer. clip.start is in seconds.
import { execFileSync } from 'node:child_process';
import {
	appendFileSync,
	existsSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	statSync,
	writeFileSync
} from 'node:fs';
import { fileURLToPath } from 'node:url';
import { clipName } from '../src/lib/clip-name.js';

const DIR = fileURLToPath(new URL('../src/lib/clips/', import.meta.url));
const SECONDS = 6;
const FRAME = 'scale=480:640:force_original_aspect_ratio=increase,crop=480:640';
// read the source only over https (no local files)
const INPUT = ['-protocol_whitelist', 'https,tls,tcp,crypto'];
// `-ss` goes after `-i` (decode up to `start`): seeking the input breaks Steam's fMP4 HLS
// streams in ffmpeg 6 (CI got empty clips)
const VIDEO = [
	['-t', SECONDS, '-an', '-vf', `${FRAME},fps=30`, '-c:v', 'libx264', '-profile:v', 'high'],
	['-preset', 'slow', '-crf', '28', '-pix_fmt', 'yuv420p', '-movflags', '+faststart']
].flat();
// counts the video frames a clip really has
const PROBE = [
	['-v', 'error', '-count_frames', '-select_streams', 'v:0'],
	['-show_entries', 'stream=nb_read_frames', '-of', 'csv=p=0']
].flat();
const POSTER = ['-frames:v', '1', '-vf', FRAME, '-c:v', 'libwebp', '-quality', '68'];

/** @param {string} src */
async function resolve(src) {
	// Steam's appdetails API is undocumented, so trailer URLs are looked up on every run
	const steam = /^steam:(\d+)$/.exec(src);
	if (!steam) return src;
	const id = steam[1];
	const res = await fetch(
		`https://store.steampowered.com/api/appdetails?appids=${id}&filters=movies`
	);
	const url = (await res.json())?.[id]?.data?.movies?.[0]?.hls_h264;
	if (!url) throw new Error(`no Steam trailer for app ${id}`);
	return url;
}

/** @param {(string | number)[]} args */
const ffmpeg = (args) => execFileSync('ffmpeg', ['-v', 'error', '-y', ...args.map(String)]);

/** @type {{ title: string, clip?: { src: string, start?: number } }[]} */
const cards = JSON.parse(
	readFileSync(new URL('../src/lib/data/cache.json', import.meta.url), 'utf-8')
);
mkdirSync(DIR, { recursive: true });
const keep = new Set();
const total = cards.filter((c) => c.clip).length;

for (const card of cards) {
	if (!card.clip) continue;
	const name = clipName(card);
	const { src, start = 0 } = card.clip;
	// a loop is remade only when its source, timing or encoding changes
	const stamp = JSON.stringify({ src, start, INPUT, VIDEO, POSTER });
	const stampFile = `${DIR}${name}.json`;
	keep.add(name);
	if (existsSync(stampFile) && readFileSync(stampFile, 'utf-8') === stamp) {
		console.log(`${name}: up to date`);
		continue;
	}
	try {
		const url = await resolve(src);
		const mp4 = `${DIR}${name}.mp4`;
		ffmpeg([...INPUT, '-i', url, '-ss', start, ...VIDEO, mp4]);
		ffmpeg(['-i', mp4, ...POSTER, `${DIR}${name}.webp`]);
		// ffmpeg can "succeed" with an empty clip, so check what came out
		const frames = Number(execFileSync('ffprobe', [...PROBE, mp4]));
		if (!(frames >= (SECONDS - 0.5) * 30)) throw new Error(`clip has ${frames} frames`);
		writeFileSync(stampFile, stamp);
		console.log(`${name}: made`);
	} catch (e) {
		keep.delete(name);
		for (const ext of ['mp4', 'webp', 'json']) rmSync(`${DIR}${name}.${ext}`, { force: true });
		console.warn(`::warning::${name}: no loop, card keeps its fallback (${e})`);
	}
}

// "X of N" with sizes, in the run's summary on GitHub
const report = [`${keep.size} of ${total} video loops built`, ''];
for (const name of keep) {
	const kb = (/** @type {string} */ ext) =>
		Math.round(statSync(`${DIR}${name}.${ext}`).size / 1024);
	report.push(`- ${name}: ${kb('mp4')} KB loop, ${kb('webp')} KB poster`);
}
console.log(report.join('\n'));
if (process.env.GITHUB_STEP_SUMMARY)
	appendFileSync(process.env.GITHUB_STEP_SUMMARY, report.join('\n') + '\n');

// drop loops whose card is gone or failed
for (const file of readdirSync(DIR)) {
	if (!keep.has(file.replace(/\.\w+$/, ''))) rmSync(`${DIR}${file}`);
}
