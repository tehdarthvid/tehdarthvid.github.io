#!/usr/bin/env bash

# Getting this working:
# https://www.innoq.com/en/blog/github-actions-automation/
# https://medium.com/swlh/deploying-react-apps-to-github-pages-on-master-branch-creating-a-user-site-bc96c2a37dc8
# https://hackernoon.com/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b 

set -eu

repo_uri="https://x-access-token:${DEPLOY_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
remote_name="origin"
main_branch="master"
target_branch="gh-pages"
build_dir="docs"

cd "$GITHUB_WORKSPACE"

git config user.name "$GITHUB_ACTOR"
git config user.email "${GITHUB_ACTOR}@bots.github.com"

#git checkout "master"
#git checkout --orphan "$target_branch"
#git rebase "${remote_name}/${main_branch}"

npm install
#npm run build


#rm -rf "$build_dir"
#mv public "$build_dir"
#git add "$build_dir"

#git commit -m "updated GitHub Pages"
#if [ $? -ne 0 ]; then
#    echo "nothing to commit"
#    exit 0
#fi

git remote set-url "$remote_name" "$repo_uri" # includes access token
#git push --force-with-lease "$remote_name" "$target_branch"

npm run deploy