---
name: deploy
description: Deploy this site to darthvid.com. Verifies on claude-experiments, pushes it for a CI check, then (after confirmation) merges into dev, pushes, and checks the live site. Use when the user asks to deploy, ship, or publish changes.
---

# Deploy darthvid.com

Deployment is CI-only (`.github/workflows/pages.yml`). Pushing `dev` or `main` deploys live. Pushing `claude-experiments` only builds and tests. There is no local deploy script.

## Rules

- Work happens on `claude-experiments`. `dev` is only touched to deploy.
- Never push `dev` or `main` unless the user has asked for a deploy. Confirm before step 5 even if they asked to "deploy" earlier in the session, unless they said to go all the way.
- Push over SSH with whatever key the user normally uses for GitHub. If a plain `git push origin <branch>` is rejected for auth, check memory or ask for the key.
- Do not add `--with-deps` to `npx playwright install` in the workflow: Ubuntu apt mirrors hang on GitHub runners.
- Do not push with failing checks. Report failures with the output.

## Steps

1. **Preflight.** `git branch --show-current` must be `claude-experiments` (switch if not). `git status` must be clean; if not, ask whether to commit.
2. **Local checks.** `npm run lint`, `npm run check`, `npm test` (Playwright builds and serves on its own; needs `PUBLIC_GA_TRACKING_ID` / `PUBLIC_GITHUB_SHA` only if the build complains, see CLAUDE.md). If every Playwright test fails with `ERR_CONNECTION_REFUSED` on port 4173, the preview server wasn't up yet: rerun once before treating it as a real failure (seen once, cause unknown).
3. **Push `claude-experiments`** and watch CI:
   `gh run watch $(gh run list --branch claude-experiments --limit 1 --json databaseId -q '.[0].databaseId') --exit-status`
   Wait a few seconds after the push so the new run exists. Expect build to pass and deploy to be skipped. A Node.js 20 deprecation annotation from `upload-artifact` is known and harmless.
4. **Ask the user to confirm the deploy**, saying what commits will go live (`git log dev..claude-experiments --oneline`).
5. **Merge into `dev` and push.** `git checkout dev && git merge claude-experiments`. It is normally a fast-forward. If `dev` has diverged (e.g. a merge commit such as af78869), do not force anything: show the situation and ask. Push `dev`, then `git checkout claude-experiments`.
6. **Watch the deploy** the same way on `--branch dev`. Both the build and deploy jobs must succeed.
7. **Verify live.** Always pass a timeout: `curl -s -m 20 https://darthvid.com` (a bare `curl` once hung for 2 minutes). Grep the footer for the deployed commit SHA, e.g. `... | grep -o "$(git rev-parse HEAD)"`, since JS-only changes don't show up in the HTML. Allow a short delay if it is not there yet.
8. Report the commit range deployed and the result. Mention that `dev` and `claude-experiments` are in sync. Write the site as a clickable markdown link, `[darthvid.com](https://darthvid.com)`, so the user can open the live site in one click.

## Repo settings this relies on

Pages source is "GitHub Actions". The `github-pages` environment must allow `dev` and `main` as deployment branches or the deploy job is rejected. The custom domain is set in Pages settings, not via `static/CNAME`.
