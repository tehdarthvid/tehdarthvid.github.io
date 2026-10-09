# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — install dependencies (uses `package-lock.json`).
- `npm run dev` — Vite dev server.
- `npm run build` — static prerender into `build/` (adapter-static; every route is prerendered).
- `npm run preview` — serve `build/` on port 4173.
- `npm test` — Playwright. Its `webServer` runs `npm run build && npm run preview` first, so no separate server is needed. Run `npx playwright install` once per machine.
- Single test: `npx playwright test tests/test.js -g "has title and header"`.
- `npm run lint` — Prettier `--check` plus ESLint. `npm run format` writes Prettier fixes.
- `npm run deploy` is stale (`gh-pages -d public`, but output is `build/`). Don't use it; deployment goes through CI.

Build-time env: `Footer.svelte` and `Analytics.svelte` import `PUBLIC_GITHUB_SHA` and `PUBLIC_GA_TRACKING_ID` from `$env/static/public`. CI sets them from `GITHUB_SHA` and a repo secret. For a local build you'll need matching values in `.env` or the shell. I haven't verified what happens when they're missing.

## Architecture

SvelteKit (Svelte 5) + `@sveltejs/adapter-static`, deployed as a static site to GitHub user pages (`tehdarthvid.github.io`, `static/CNAME`). `src/routes/+layout.js` sets `prerender = true`, so all output is static HTML.

**Content is data-driven.** Most of the site's text and links live in JSON, not in components:
- `src/lib/data/content.json` drives the homepage (`src/routes/+page.svelte`, `src/routes/Header.svelte`): `name`, `welcome_msg`, `links`, `projects`.
- `src/lib/data/cache.json` is the "currently into" card list. It flows `deckStore.js` → `actions.js` → `src/lib/views/Deck.svelte` → `src/lib/components/Card.svelte`. `actions.js` has a commented-out remote `fetch`, so the list is currently a static import. Cards support `ytVideoID`, `vidURL`, or `imgURL` backgrounds.
- Editing a link, project, or card usually means editing these JSON files, not Svelte code.

**Routes.** `/` is the homepage. `/1rm` is a standalone 1RM calculator in `src/routes/1rm/+page.svelte`. It is self-contained, with reactive `$:` formulas.

**Shared shell.** `src/routes/+layout.svelte` wraps every page with `Header`, `Analytics`, `main`, and `Footer`. `Analytics.svelte` injects the gtag script and `dataLayer` setup.

**Tests** (`tests/test.js`) are Playwright end-to-end checks against the built homepage. They assert on the Japanese welcome text and on content from `content.json`, so if you change those strings, update the tests too.

## Deployment

`.github/workflows/pages.yml` runs on pushes to `dev` (and `main`) and does: `npm install && npm run build` → `npm run test` (Playwright) → copy `build/` into the `host-me` branch, force-push it with `PERSONAL_ACCESS_TOKEN`. The README says `master` is the hosting branch, but the workflow's `DEST_BRANCH` is `host-me`. Trust the workflow. The README is marked as outdated.

## Style

Prettier: tabs, single quotes, no trailing commas, printWidth 100, Svelte files use `prettier-plugin-svelte`.
