---
name: seasonal
description: Seasonal content update for darthvid.com. Swaps the "currently into" cards, links, projects and stack icons by editing the JSON data, decides per card between a self-hosted video loop and the YouTube still/deferred player, and picks a loop start frame. Use when the user asks to add, remove or swap what's on the homepage.
---

# Seasonal content update

Content changes are **JSON edits only** (`CLAUDE.md`, "Content is data-driven"). If a request can't be done in JSON, stop and say what code change it would take before writing any: the site's rule is minimal code and no new deps.

## Where each thing lives

| On the page                      | File and key                                             |
| -------------------------------- | -------------------------------------------------------- |
| "currently into" cards           | `src/lib/data/cache.json` (an array)                     |
| is at                            | `content.json` `links`                                   |
| dabbles in (pet projects, sites) | `content.json` `projects`                                |
| plays with (current stack)       | `content.json` `toybox`, icon in `static/assets/images/` |
| wants to play (next to try)      | `content.json` `shelf`, same icons                       |

Icons are self-hosted: download the project's official logo (SVG preferred) into `static/assets/images/`, refer to it as `assets/images/<file>`. Unused icons already sit in that folder; leave them unless asked.

## A "currently into" card

Fields: `title`, `url` (opened on double-click), `date` (the item's release date or first airing's start–end, not when the user got into it; `17 Jan 2025` style), `added` (today), optional `ref` (the announcement) and `hashtag` list. The array is ordered by the user's current interest (first = what interests them most now), not by `added` or date: put a new card where they say, ask if they didn't, and never move other cards without their explicit approval.

Background, decide per card in this order:

1. **Official direct video exists** (a Steam store trailer, or an MP4/HLS file on the publisher's own site or CDN): add `"clip": { "src": "steam:<appid>" | "<https url>", "start": <s> }`, and keep a `ytVideoID` as well if there's an official YouTube trailer, as the fallback when the loop can't be built. Find direct URLs in the official page's source or network requests; Steam app ids are in the store URL.
2. **Video only on YouTube:** `ytVideoID` only (still frame first, deferred muted player). Never yt-dlp or any YouTube downloader (ToS; see CLAUDE.md).
3. **No video:** `imgURL` (official key art). CSP `img-src` allows any `https:` host (set in `vite.config.js`), so no CSP change. A plain `http:` image URL would be blocked.

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

## Checks, commit

1. `npm run lint`, `npm run check`, `npm test`. Tests read `cache.json` and `content.json`, so card counts and links follow the data; the loop tests run only when loops were built (step above). If you changed `name` or `welcome_msg`, update `tests/test.js` too.
2. Commit and push `claude-experiments`: CI builds, cuts the loops (cache key is the hash of `cache.json` + `clips.js`, so any edit recuts) and tests, but doesn't deploy. In that run's summary, check `N of N video loops built`; a missing loop means its card fell back to YouTube or the image.
3. Going live is the `deploy` skill, with the user's approval.

## Report

What changed per section, each card's background choice and why (loop source, or why YouTube only), the loop start and the sheet, and the CI result. Link the live site as `[darthvid.com](https://darthvid.com)` only after a deploy.
