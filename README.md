# homepage

Just the source for my homepage. Hosted on GitHub Pages.

## Automation

This is setup so that commits to `dev` branch`triggers a GitHub Action that runs a script in`/bin`. The script:

1. builds the `dev` branch
1. clones `master` branch
1. cleans all contents, but keeping current git `master` branch state
1. puts artifacts from the `dev` build into the `master`
1. commits and pushes `master`

## Learnings

Ran into quite a few hoops to get this working:

1. user pages _has_ to use `<username>.github.io` as the repo name
1. user pages are built from the `master` branch root
1. it doesnt have to be .md files
1. having `index.html` and `README.md` causes problems
1. you need a `CNAME` file with your desired domain if you'll use a custom domain
1. custom domains has to be an apex or subdomain, not a sub resource
1. if you use a `CNAME` file, you can't have the same CNAME in another repo in GitHub
1. GitHub Actions can run shell scripts
1. At any error exit code the script will terminate and no longer proceed
1. pushing to `master` with `GITHUB_TOKEN` from a workflow supposedly won't trigger GitHub Pages to build, so you'll need to generate a _personal access token_ and use that for the git push to `master` to trigger the page build
