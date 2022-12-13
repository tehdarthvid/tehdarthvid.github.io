# homepage

Just the source for my homepage. Hosted on GitHub Pages.

This `dev` branch is the _main branch_ . `master` is where the static site is hosted at GitHub Pages and is auto-generated from this branch.

Currently implemented in SvelteKit using npm.

!!DOCUMENTATION TO BE UPDATED!!

## Automation

![GitHub Pages Deploy](https://github.com/tehdarthvid/tehdarthvid.github.io/workflows/GitHub%20Pages%20Deploy/badge.svg)

`.github/workflows/pages.yml` is a GitHub Action triggered by pushes to `dev` branch (except if the push is just README.md). The action does the following:

1. checks-our the `dev` branch
1. builds the `dev` branch
1. clones `master` branch
1. removes all local `master` content (to handle files possibly removed in the new build), keeping current git `master` branch state
1. puts artifacts from the `dev` build into the local `master`
1. commits and pushes `master`

After pushing to `master`, a _GitHub Pages Deploy_ action is triggered that processes these files and serves it to your GitHub Page.

## Learnings

Ran into quite a few hoops to get this working:

1. user pages _has_ to use `<username>.github.io` as the repo name
1. user pages are built from the `master` branch root
1. it doesnt have to be .md files
1. having `index.html` and `README.md` causes problems
1. you need a `CNAME` file with your desired domain if you'll use a custom domain
1. custom domains has to be an apex or subdomain, not a sub resource
1. if you use a `CNAME` file, you can't have the same CNAME in another repo in GitHub
1. GitHub Actions can run shell scripts. This may actually be more portable.
1. At any error exit code the script will terminate and no longer proceed
1. pushing to `master` with `GITHUB_TOKEN` from a workflow supposedly won't trigger GitHub Pages to build, so you'll need to generate a _personal access token_ and use that for the git push to `master` to trigger the page build
