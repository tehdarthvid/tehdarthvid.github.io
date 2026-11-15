# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Site purpose & design philosophy

- The owner's personal site (https://darthvid.com/): current interests, current work and study, and the current tech stack, plus links to related sites and pet projects.
- Content is seasonal and changes often, so content updates must stay easy (edit the JSON in `src/lib/data/`, not components).
- Looks flashy, but stays simple, straightforward and fast to load. The code should show that simplicity too: prefer plain CSS, minimal dependencies and minimal abstractions.
- Stays on GitHub Pages by choice (the sibling `dna-svelte` uses Firebase); don't propose moving hosts.
- `Card.svelte` is shared with `dna-svelte`, and this copy is the reference. `dna-svelte` is the experimental testbed: complexity added there for experiments must not leak into this site without flagging it.

## Commands

- `npm install` — install dependencies (uses `package-lock.json`).
- `npm run dev` — Vite dev server.
- `npm run build` — static prerender into `build/` (adapter-static; every route is prerendered).
- `npm run preview` — serve `build/` on port 4173.
- `npm test` — Playwright. Its `webServer` runs `npm run build && npm run preview` first, so no separate server is needed. Run `npx playwright install` once per machine (CI installs only Chromium, which is all the tests use).
- Single test: `npx playwright test tests/test.js -g "has title and header"`.
- `npm run check` — `svelte-kit sync` + `svelte-check` against `jsconfig.json` (`checkJs`, `strict`; no TypeScript, types are JSDoc). Run it without `--tsconfig`: passing the flag fails to resolve `$app/tsconfig`. Global type additions go in `src/app.d.ts`.
- `npm run lint` — Prettier `--check` plus ESLint. `npm run format` writes Prettier fixes.
- There is no local deploy script. Deployment goes through CI only (see Deployment).

Build-time env: `Footer.svelte` and `Analytics.svelte` import `PUBLIC_GITHUB_SHA` and `PUBLIC_GA_TRACKING_ID` from `$app/env/public` (SvelteKit 3 API; the variables are declared with `defineEnvVars` in `src/env.js`). CI sets them from `GITHUB_SHA` and the `PUBLIC_GA_TRACKING_ID` repo secret. Both are optional: the SHA defaults to `dev`, and an empty GA ID makes `Analytics.svelte` skip GA entirely. For a local build, set them in `.env` or the shell.

## Architecture

SvelteKit (Svelte 5) + `@sveltejs/adapter-static`, deployed as a static site to GitHub user pages (`tehdarthvid.github.io`, `static/CNAME`). `src/routes/+layout.js` sets `prerender = true`, so all output is static HTML.

**Content is data-driven.** Most of the site's text and links live in JSON, not in components:

- `src/lib/data/content.json` drives the homepage (`src/routes/+page.svelte`, `src/routes/Header.svelte`): `name`, `welcome_msg`, `links`, `projects`.
- `src/lib/data/cache.json` is the "currently into" card list. `src/lib/views/Deck.svelte` imports it directly and renders each entry with `src/lib/components/Card.svelte`. Cards support `ytVideoID`, `vidURL`, or `imgURL` backgrounds. `Card.svelte` must stay byte-identical to the one in the sibling `dna-svelte` repo (this repo's copy is the reference). Site-specific behavior goes in each site's `Deck.svelte`: here Deck passes `onopen` to open the card's `url` in a new tab on double-click; dna's Deck opens a modal instead.
- **YouTube cards** show the video's still frame (`i.ytimg.com/vi_webp/<id>/hqdefault.webp`) first. The muted autoplay player (`www.youtube-nocookie.com`, the only YouTube host in the CSP) is added only after the page's `load` event and once the card is near the viewport, and stays at `opacity: 0` until its iframe loads. With data saver (`navigator.connection.saveData`) or `prefers-reduced-motion: reduce`, the still frame stays and no player loads. Playwright tests cover all three paths.
- **Video loops** (no media in git): a card can add `"clip": { "src", "start" }` (a direct MP4/HLS URL or `steam:<appid>` for the app's first Steam trailer; start in seconds). `scripts/clips.js` (needs ffmpeg) cuts a 6 s, muted, 480x640 H.264 loop and a WebP poster into the gitignored `src/lib/clips/`, named by `clipName()` in `src/lib/clip-name.js`. `Deck.svelte` picks them up with `import.meta.glob`, so Vite emits them content-hashed under `_app/immutable/assets/`, and plays the loop instead of the card's `ytVideoID` (same deferred-load, Save-Data and reduced-motion rules, poster as the still frame). A card whose loop is missing (fresh checkout, ffmpeg absent, source gone) keeps its YouTube player. Don't use yt-dlp: YouTube's ToS forbids it and runners get bot-blocked. Cards that exist only on YouTube stay on the YouTube player. CSP `media-src` is `'self'`. The loop tests skip when no loops were built.
- Editing a link, project, or card usually means editing these JSON files, not Svelte code.

**Routes.** `/` is the homepage. `/1rm` is a standalone 1RM calculator in `src/routes/1rm/+page.svelte`. `/dice` is a standalone dice roller in `src/routes/dice/+page.svelte` (CSS 3D cubes, default 2 dice, max 20). Both are self-contained runes components.

**Shared shell.** `src/routes/+layout.svelte` wraps every page with `Header`, `Analytics`, `main`, and `Footer`. `Analytics.svelte` injects the gtag script and `dataLayer` setup.

**Fonts** are self-hosted from Fontsource packages (`@fontsource/source-code-pro`, `@fontsource/noto-sans-jp`, weight 400), imported in `+layout.svelte`: the Latin Source Code Pro face is preloaded, and Noto Sans JP's CSS (~120 unicode-range subsets) is imported after hydration so it doesn't block render. `vite.config.js` keeps `.woff`/`.woff2` out of asset inlining, because the CSP has no `data:` font source. Don't add Google Fonts links back; a Playwright test checks that fonts come only from the site's own host.

**Tests** (`tests/test.js`) are Playwright end-to-end checks against the built homepage. They assert on the Japanese welcome text and on content from `content.json`, so if you change those strings, update the tests too.

## Deployment

`.github/workflows/pages.yml` runs on pushes to `dev`, `main`, and `claude-experiments`.

- **build job** (all three branches): `npm ci` → `npx playwright install chromium` → `npm run test` (Playwright's `webServer` runs the one `npm run build`, and that `build/` is what gets deployed) → `actions/upload-pages-artifact`. Env: `PUBLIC_GA_TRACKING_ID` from the repo secret, `PUBLIC_GITHUB_SHA` from `GITHUB_SHA`.
- The build job restores `src/lib/clips` from `actions/cache` (key: hash of `cache.json` + `scripts/clips.js`); on a miss it apt-installs ffmpeg (continue-on-error) and runs `node scripts/clips.js`, which only remakes changed loops and never fails the build. Cache entries unused for ~7 days are evicted, so a loop whose source has since disappeared falls back to YouTube.
- **deploy job** (`dev` and `main` only): `actions/deploy-pages` to the `github-pages` environment. Pushing `claude-experiments` builds and tests but does not deploy.
- **check-ga job** (after deploy): fetches the live page (retrying until it shows the deployed commit, up to ~10 min) and looks for the gtag script with the secret's ID. If it's missing, it emits a warning and opens (or comments on) one `GA missing on live site` issue; when GA is back it closes that issue. It never fails the run for missing GA. Permissions: `issues: write` only, via `GITHUB_TOKEN`.
- Actions are pinned to full commit SHAs (version in a trailing comment); `.github/dependabot.yml` proposes updates as PRs against `claude-experiments`, which is this repo's default branch.
- GitHub Pages can't set response headers (it serves everything with `cache-control: max-age=600` and no HSTS on the custom domain). The only security header is the CSP `<meta>` in `src/app.html`; other headers are not set as `<meta>` because browsers ignore them there. Keep dev-only hosts (`localhost`, `ws:`) out of the CSP: `'self'` already covers Vite's dev server and HMR socket.
- Runners are pinned to `ubuntu-24.04` and the job has timeouts. Playwright is installed without `--with-deps` on purpose: the Ubuntu apt mirrors were unresolvable from GitHub runners (2026-11-11) and hung the job.
- Repo settings this depends on: Pages source is "GitHub Actions"; the custom domain (`darthvid.com`) is set in Pages settings (not via `static/CNAME`); the `github-pages` environment must list `dev` and `main` as allowed deployment branches, or the deploy job is rejected.
- Claude-only files (`CLAUDE.md` anywhere, `.claude/`) live only on `claude-experiments` and never go to `dev`/`main`: a deploy merges `claude-experiments` into `dev` with those paths removed (see the `deploy` skill). So `dev` is never a fast-forward and is never merged back into `claude-experiments`. The workflow ignores pushes that only change these paths.
- The old `host-me` branch and `PERSONAL_ACCESS_TOKEN` secret are gone. The README still describes the old flow and is outdated; trust the workflow.

## Style

Prettier: tabs, single quotes, no trailing commas, printWidth 100, Svelte files use `prettier-plugin-svelte`.
