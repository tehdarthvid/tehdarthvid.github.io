# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — install dependencies (uses `package-lock.json`).
- `npm run dev` — Vite dev server.
- `npm run build` — static prerender into `build/` (adapter-static; every route is prerendered).
- `npm run preview` — serve `build/` on port 4173.
- `npm test` — Playwright. Its `webServer` runs `npm run build && npm run preview` first, so no separate server is needed. Run `npx playwright install` once per machine (CI installs only Chromium, which is all the tests use).
- Single test: `npx playwright test tests/test.js -g "has title and header"`.
- `npm run lint` — Prettier `--check` plus ESLint. `npm run format` writes Prettier fixes.
- There is no local deploy script. Deployment goes through CI only (see Deployment).

Build-time env: `Footer.svelte` and `Analytics.svelte` import `PUBLIC_GITHUB_SHA` and `PUBLIC_GA_TRACKING_ID` from `$app/env/public` (SvelteKit 3 API; the variables are declared with `defineEnvVars` in `src/env.js`). CI sets them from `GITHUB_SHA` and the `PUBLIC_GA_TRACKING_ID` repo secret. For a local build, set them in `.env` or the shell. `Analytics.svelte` skips GA entirely when the ID is empty. I haven't verified what happens when `PUBLIC_GITHUB_SHA` is missing.

## Architecture

SvelteKit (Svelte 5) + `@sveltejs/adapter-static`, deployed as a static site to GitHub user pages (`tehdarthvid.github.io`, `static/CNAME`). `src/routes/+layout.js` sets `prerender = true`, so all output is static HTML.

**Content is data-driven.** Most of the site's text and links live in JSON, not in components:

- `src/lib/data/content.json` drives the homepage (`src/routes/+page.svelte`, `src/routes/Header.svelte`): `name`, `welcome_msg`, `links`, `projects`.
- `src/lib/data/cache.json` is the "currently into" card list. `src/lib/views/Deck.svelte` imports it directly and renders each entry with `src/lib/components/Card.svelte`. Cards support `ytVideoID`, `vidURL`, or `imgURL` backgrounds.
- Editing a link, project, or card usually means editing these JSON files, not Svelte code.

**Routes.** `/` is the homepage. `/1rm` is a standalone 1RM calculator in `src/routes/1rm/+page.svelte`. `/dice` is a standalone dice roller in `src/routes/dice/+page.svelte` (CSS 3D cubes, default 2 dice, max 20). Both are self-contained runes components.

**Shared shell.** `src/routes/+layout.svelte` wraps every page with `Header`, `Analytics`, `main`, and `Footer`. `Analytics.svelte` injects the gtag script and `dataLayer` setup.

**Tests** (`tests/test.js`) are Playwright end-to-end checks against the built homepage. They assert on the Japanese welcome text and on content from `content.json`, so if you change those strings, update the tests too.

## Deployment

`.github/workflows/pages.yml` runs on pushes to `dev`, `main`, and `claude-experiments`.

- **build job** (all three branches): `npm ci` → `npx playwright install chromium` → `npm run test` (Playwright's `webServer` runs the one `npm run build`, and that `build/` is what gets deployed) → `actions/upload-pages-artifact`. Env: `PUBLIC_GA_TRACKING_ID` from the repo secret, `PUBLIC_GITHUB_SHA` from `GITHUB_SHA`.
- **deploy job** (`dev` and `main` only): `actions/deploy-pages` to the `github-pages` environment. Pushing `claude-experiments` builds and tests but does not deploy.
- Runners are pinned to `ubuntu-24.04` and the job has timeouts. Playwright is installed without `--with-deps` on purpose: the Ubuntu apt mirrors were unresolvable from GitHub runners (2026-11-11) and hung the job.
- Repo settings this depends on: Pages source is "GitHub Actions"; the custom domain (`darthvid.com`) is set in Pages settings (not via `static/CNAME`); the `github-pages` environment must list `dev` and `main` as allowed deployment branches, or the deploy job is rejected.
- The old `host-me` branch and `PERSONAL_ACCESS_TOKEN` secret are gone. The README still describes the old flow and is outdated; trust the workflow.

## Style

Prettier: tabs, single quotes, no trailing commas, printWidth 100, Svelte files use `prettier-plugin-svelte`.
