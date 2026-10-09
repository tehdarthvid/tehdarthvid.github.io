# homepage

Just the source for my homepage. Hosted on GitHub Pages.

This `dev` branch is the _main branch_ for development. `host-me` is where the static site is hosted at GitHub Pages and is auto-generated from this branch by the workflow below.

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
```

## Automation

![GitHub Pages Deploy](https://github.com/tehdarthvid/tehdarthvid.github.io/workflows/GitHub%20Pages%20Deploy/badge.svg)

`.github/workflows/pages.yml` is a GitHub Action triggered by pushes to the `dev` and `main` branches (except if the push only touches `README.md` or `CHANGELOG.md`). The action does the following:

1. checks out the pushed branch
1. installs dependencies and builds the site into `build/`
1. runs the Playwright tests against the build
1. clones the `host-me` branch
1. removes all local `host-me` content (to handle files possibly removed in the new build), keeping the `.git` folder
1. copies the contents of `build/` into the local `host-me` checkout
1. commits and force-pushes `host-me` (`--force-with-lease`)

After pushing to `host-me`, a _GitHub Pages Deploy_ action is triggered that processes these files and serves them to your GitHub Page.

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
