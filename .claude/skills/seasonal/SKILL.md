---
name: seasonal
description: Seasonal content update for darthvid.com. Swaps the "is into" (formerly "currently into") cards, links, projects and stack icons by editing the JSON data, decides per card between a self-hosted video loop and the YouTube still/deferred player, and picks a loop start frame. Use when the user asks to add, remove or swap what's on the homepage.
---

# Seasonal content update

Content changes are **JSON edits only** (`CLAUDE.md`, "Content is data-driven"). If a request can't be done in JSON, stop and say what code change it would take before writing any: the site's rule is minimal code and no new deps.

## Where each thing lives

| On the page                  | File and key                                             |
| ---------------------------- | -------------------------------------------------------- |
| is into (the cards)          | `src/lib/data/cache.json` (an array)                     |
| is at                        | `content.json` `links`                                   |
| builds (pet projects, sites) | `content.json` `projects`                                |
| plays with (current stack)   | `content.json` `toybox`, icon in `static/assets/images/` |
| wants to play (next to try)  | `content.json` `shelf`, same icons                       |

Headings are the ones on the page since 2026-11-17 (`is into` in `Deck.svelte`, the rest in `+page.svelte`); the user chose this slightly clunky verb-phrase voice on purpose, so don't polish them.

Icons are self-hosted: download the project's official logo (SVG preferred) into `static/assets/images/`, refer to it as `assets/images/<file>`. Strip its metadata first (**Image hygiene** in CLAUDE.md: `python3 -I scripts/img-clean.py --strip <file>`). Unused icons already sit in that folder; leave them unless asked.

## An "is into" card

Fields: `title`, `url` (opened on double-click), `date` (the item's release date or first airing's start–end, not when the user got into it; `17 Jan 2025` style, with a note like `(early access)` for an early release; see **Sourcing**), `added` (today), optional `ref` (the announcement) and `hashtag` list. The array is ordered by the user's current interest (first = what interests them most now), not by `added` or date: put a new card where they say, ask if they didn't, and never move other cards without their explicit approval.

Background, decide per card in this order (the video is the first official trailer or PV, and the image the first-release key visual, per **Sourcing**):

1. **Official direct video exists** (a Steam store trailer, or an MP4/HLS file on the publisher's own site or CDN): add `"clip": { "src": "steam:<appid>" | "<https url>", "start": <s> }`, and keep a `ytVideoID` as well if there's an official YouTube trailer, as the fallback when the loop can't be built. Find direct URLs in the official page's source or network requests; Steam app ids are in the store URL. `steam:<appid>` takes Steam's first _listed_ trailer (`movies[0]`), which is the store's display order, not necessarily the first one released; if it isn't the first, put that movie's `hls_h264` URL in `src` instead.
2. **Video only on YouTube:** `ytVideoID` only (still frame first, deferred muted player). Never yt-dlp or any YouTube downloader (ToS; see CLAUDE.md).
3. **No video:** `imgURL` (official key art, hotlinked, so prefer the rights holder's own host; a fan-wiki or re-upload host is a **Sourcing** flag). CSP `img-src` allows any `https:` host (set in `vite.config.js`), so no CSP change. A plain `http:` image URL would be blocked.

### Picking the loop start

The loop is the 6 s after `start`, cropped to 480x640 (portrait center crop of a usually 16:9 source, so the sides are lost). In a scratch folder, with ffmpeg (preinstalled in cloud sessions):

```sh
# url: the direct URL, or for steam:<id> the same trailer scripts/clips.js uses:
# url=$(curl -s -m 20 "https://store.steampowered.com/api/appdetails?appids=$id&filters=movies" \
#   | jq -r ".\"$id\".data.movies[0].hls_h264")
# (~7 s per frame over HLS)
for t in 0 10 20 30 45 60 75 90; do
  ffmpeg -v error -y -i "$url" -ss $t -frames:v 1 \
    -vf scale=480:640:force_original_aspect_ratio=increase,crop=480:640 f_$(printf %03d $t).jpg
done
ffmpeg -v error -y -pattern_type glob -i 'f_*.jpg' -vf scale=240:320,tile=8x1 sheet.jpg
```

(`-ss` after `-i`, as in `clips.js`: input seeking breaks Steam's HLS.) Look at `sheet.jpg` and prefer motion that reads in a narrow crop: gameplay or action, bright, the subject centered. Avoid dark cutscenes, logos, text, UI-heavy menus and dialogue screens. Check the 6 s doesn't cut to a black or title card (pull frames at `t+3` and `t+5`). Copy the sheet to `/mnt/project-files/video-loops/` and show it to the user with your pick and the runner-up, saying it's your judgment.

Then build it for real: `node scripts/clips.js` writes `src/lib/clips/` (gitignored). Check the printed size, about 0.5 MB or less per loop, and look at the poster `.webp`.

## Sourcing

The cards are a small historical record, so each fact and each piece of media should come from the **first** release and from a source you can name. Say in the report where each date, image and video came from, and mark anything that is your own inference.

**Which sources to trust**, best first:

1. **Primary:** the rights holder's own pages and accounts (publisher, studio, network, developer, author), their press releases, store pages they control (Steam's release date and "Early Access" label), and Wayback Machine snapshots of those pages (good for launch-day images and the original announced date).
2. **Catalogues with provenance:** national library and ISBN records, film archives (AFI Catalog, BFI), ISFDB (books; records which edition and printing), Discogs (music; catalogue numbers), MobyGames (game releases per platform and region). Community-edited, but each entry shows its evidence.
3. **Established press:** trade and news outlets with editors and dated articles (e.g. Variety, Anime News Network, Famitsu, Eurogamer). Good for dates and announcements.
4. **Wikipedia and fan wikis:** a pointer to their cited sources, not the source itself. Fan-wiki image hosts (e.g. Fandom's `static.wikia.nocookie.net`) re-upload art without provenance; use them only to identify an image, then find it from (1)-(3).

**Flag, don't use silently:** wallpaper and "HD poster" sites, Pinterest and other re-upload hubs, SEO content farms, and anything that looks AI-generated. Signs of AI images: "remastered" or upscaled posters, garbled or too-clean lettering, details that don't match the known art, a C2PA manifest that says generative AI. Signs of AI text: generic phrasing, no byline or date, dates that disagree with primary sources. Check where an image first appeared with a reverse image search (TinEye, Google Lens) when its origin is unclear. If only a sketchy source has it, say so and ask before using it.

**First image:** the earliest image of the item's first release (the first-run poster in its home country, a teaser poster if it came first; the first edition's published cover; the launch-day screenshot or key visual for software and games). A textless version of that same art is fine (common for anime key visuals). Newer, prettier or remastered art doesn't qualify; if no first-release image can be found, say what you used instead and why.

**First video:** the first official trailer or PV from the rights holder's own channel in the home region, including a teaser or announcement that came before "PV1". Re-uploads by other channels don't count. Compare upload dates on the official channel, and say when you couldn't confirm a video was the first.

**Dates:** the item's release date, not when the user got into it: v1, early access, or first launch in its home country or region (e.g. the Japanese broadcast for anime, the original publication for a book). A TV series or other fixed run is the first airing's start and end. If the first release was early or limited, add a lowercase note in parentheses after the date: `(preview)`, `(early access)`, `(beta)`, `(pre-release)`. Use only the precision you can source: `24 Feb 2025`, `Oct 1995` or just `1976`, never a guessed day or month. When sources disagree, prefer (1) over the others and mention the disagreement.

## Checks, commit

1. `npm run lint`, `npm run check`, `npm test`. Tests read `cache.json` and `content.json`, so card counts and links follow the data; the loop tests run only when loops were built (step above). If you changed `name` or `welcome_msg`, update `tests/test.js` too.
2. Commit (no `Claude-Session:` trailer or other Claude session or project link: **Commit attribution** in CLAUDE.md) and push `claude-experiments` (`git pull` first, other threads may have pushed): CI builds, cuts the loops (cache key is the hash of `cache.json` + `clips.js`, so any edit recuts) and tests, but doesn't deploy. In that run's summary, check `N of N video loops built`; a missing loop means its card fell back to YouTube or the image.
3. Going live is the `deploy` skill, with the user's approval.

## Report

What changed per section, where each card sits and why (the user's order), the sources for each date, video and image (flag sketchy, AI-looking or unconfirmed ones), each card's background choice and why (loop source, or why YouTube only), the loop start and the sheet, and the CI result. Link the live site as `[darthvid.com](https://darthvid.com)` only after a deploy.
