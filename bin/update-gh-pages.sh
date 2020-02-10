#!/usr/bin/env bash

# References:
# https://www.innoq.com/en/blog/github-actions-automation/
# https://medium.com/swlh/deploying-react-apps-to-github-pages-on-master-branch-creating-a-user-site-bc96c2a37dc8
# https://hackernoon.com/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b 

set -eu

repo_uri="https://x-access-token:${DEPLOY_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
remote_name="origin"
main_branch="master"
target_branch="master"
build_dir="public"

cd "$GITHUB_WORKSPACE"

echo [Step 1] Build dev branch
git config user.name "$GITHUB_ACTOR"
git config user.email "${GITHUB_ACTOR}@bots.github.com"
npm install
npm run build
rm -rf .git/

echo [Step 2] Clone master branch at temp/ and erase contents
git clone -b master --single-branch https://github.com/tehdarthvid/tehdarthvid.github.io.git temp
rm -rf temp/*

echo [Step 3] Commit new artifacts to cleaned master branch
cp -r "$build_dir"/. temp/
#cp README.md temp/
cd temp
git config user.name "$GITHUB_ACTOR"
git config user.email "${GITHUB_ACTOR}@bots.github.com"
git add .
git commit -m "updating from ${GITHUB_SHA}"

echo [Step 4] Push new artifacts to master branch for GitHub Pages rendering
if [ $? -ne 0 ]; then
    echo "nothing to commit"
    exit 0
fi
git remote set-url "$remote_name" "$repo_uri" # includes access token
git push --force-with-lease "$remote_name" "$target_branch"

