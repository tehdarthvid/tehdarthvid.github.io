# homepage

Just the source for my homepage. Hosted on GitHub Pages.

The `dev` branch is the _main branch_ for development. Pushing to `dev` (or `main`) builds, tests and deploys the site to GitHub Pages through the workflow below.

Currently implemented in SvelteKit (Svelte 5) using npm, with a static build via `@sveltejs/adapter-static`.

## Development

```sh
npm install        # install dependencies
npm run dev        # Vite dev server
npm run build      # static prerender into build/
npm run preview    # serve build/ on port 4173
npm test           # Playwright end-to-end tests (builds and previews first)
npm run lint       # Prettier check + ESLint
npm run format     # Prettier write
npm run check      # svelte-check (types via JSDoc)
```

The build reads two public env vars (set them in `.env` or the shell for a local build):

- `PUBLIC_GITHUB_SHA`: commit SHA shown in the footer
- `PUBLIC_GA_TRACKING_ID`: Google Analytics measurement ID. Analytics is skipped when empty.

## Automation

![GitHub Pages Deploy](https://github.com/tehdarthvid/tehdarthvid.github.io/workflows/GitHub%20Pages%20Deploy/badge.svg)

`.github/workflows/pages.yml` is a GitHub Action triggered by pushes to the `dev`, `main` and `claude-experiments` branches (except if the push only touches `README.md` or `CHANGELOG.md`). It has two jobs:

**build** (all three branches)

1. checks out the pushed branch
1. installs dependencies (`npm ci`) and Chromium for Playwright
1. runs the Playwright tests, which first build the site into `build/` and preview it
1. uploads `build/` as the Pages artifact

**deploy** (`dev` and `main` only)

1. publishes the artifact to the `github-pages` environment with `actions/deploy-pages`

Pushes to `claude-experiments` build and test but do not deploy.

Repo settings this relies on:

- Pages source is set to "GitHub Actions"
- the custom domain is configured in the Pages settings
- the `github-pages` environment allows `dev` and `main` as deployment branches
- the `PUBLIC_GA_TRACKING_ID` repo secret holds the Google Analytics ID

## Learnings

Ran into quite a few hoops to get this working:

1. user pages _has_ to use `<username>.github.io` as the repo name
1. user pages are built from the root of the branch set as the Pages source. This repo publishes from `host-me`, so that is the branch the Pages source setting must point to (not `master`)
1. it doesnt have to be .md files
1. having `index.html` and `README.md` causes problems
1. you need a `CNAME` file with your desired domain if you'll use a custom domain
1. custom domains has to be an apex or subdomain, not a sub resource
1. if you use a `CNAME` file, you can't have the same CNAME in another repo in GitHub
1. GitHub Actions can run shell scripts. This may actually be more portable.
1. At any error exit code the script will terminate and no longer proceed
1. pushing to `host-me` with `GITHUB_TOKEN` from a workflow supposedly won't trigger GitHub Pages to build, so you'll need to generate a _personal access token_ (stored as the `PERSONAL_ACCESS_TOKEN` secret) and use that for the git push to `host-me` to trigger the page build
