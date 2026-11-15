// Makes the "currently into" video loops. For each card in cache.json with a `clip`, cuts a
// short, muted, 480x640 H.264 loop and a WebP poster into src/lib/clips/ (gitignored, so no
// media is committed). Deck.svelte picks them up at build time; a card without its loop keeps
// its YouTube player. Needs ffmpeg. Never fails the build: a loop that can't be made is skipped
// with a warning.
//
// clip.src is a direct video URL (MP4 or HLS), or `steam:<appid>` for the app's first Steam
// store trailer. clip.start is in seconds.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { clipName } from '../src/lib/clip-name.js';

const DIR = fileURLToPath(new URL('../src/lib/clips/', import.meta.url));
const SECONDS = 6;
const FRAME = 'scale=480:640:force_original_aspect_ratio=increase,crop=480:640';
// input options: read only over https (no local files), from `start`
/** @param {number} start */
const input = (start) => ['-protocol_whitelist', 'https,tls,tcp,crypto', '-ss', String(start)];
const VIDEO = [
	['-t', SECONDS, '-an', '-vf', `${FRAME},fps=30`, '-c:v', 'libx264', '-profile:v', 'high'],
	['-preset', 'slow', '-crf', '28', '-pix_fmt', 'yuv420p', '-movflags', '+faststart']
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

for (const card of cards) {
	if (!card.clip) continue;
	const name = clipName(card);
	const { src, start = 0 } = card.clip;
	// a loop is remade only when its source, timing or encoding changes
	const stamp = JSON.stringify({ src, start, VIDEO, POSTER });
	const stampFile = `${DIR}${name}.json`;
	keep.add(name);
	if (existsSync(stampFile) && readFileSync(stampFile, 'utf-8') === stamp) {
		console.log(`${name}: up to date`);
		continue;
	}
	try {
		const url = await resolve(src);
		ffmpeg([...input(start), '-i', url, ...VIDEO, `${DIR}${name}.mp4`]);
		ffmpeg([...input(start), '-i', url, ...POSTER, `${DIR}${name}.webp`]);
		writeFileSync(stampFile, stamp);
		console.log(`${name}: made`);
	} catch (e) {
		keep.delete(name);
		console.warn(`::warning::${name}: no loop, card keeps its fallback (${e})`);
	}
}

// drop loops whose card is gone or failed
for (const file of readdirSync(DIR)) {
	if (!keep.has(file.replace(/\.\w+$/, ''))) rmSync(`${DIR}${file}`);
}
