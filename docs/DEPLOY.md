# Deploying Glyphs & Graphs

This is a public runbook. It contains no credentials. The setup below was checked in the Cloudflare Pages dashboard on 28 October 2026; verify the dashboard again before changing deployment settings.

## Current connection

| Setting | Value |
| --- | --- |
| Platform | Cloudflare Pages |
| Pages project | `ggv2` |
| Source repository | `sumergoconicio/GGv2` on GitHub |
| Production branch | `main` |
| Automatic deployments | Enabled |
| Build command | `npm ci && npm run build` |
| Build output directory | `dist/client` |
| Root directory | Repository root |
| Build system | Version 3 |
| Build cache | Disabled |
| Build variable | `SKIP_DEPENDENCY_INSTALL=1` (non-secret text setting) |
| Pages hostname | `ggv2-aag.pages.dev` |

The active custom domains are `glyphsandgraphs.com`, `www.glyphsandgraphs.com`, and `blog.glytch.space`; Cloudflare shows SSL enabled for each. The separate older `glyphsandgraphs` Pages project is not this site's deployment target.

The dashboard path is **Workers & Pages → ggv2**. Its **Settings → Build** panel holds the Git connection, command, output path, and branch control. **Custom domains** shows domain status. **Deployments** shows build results and the production commit. GitHub source authorization is managed through the Cloudflare GitHub app installation; change repository access only when necessary.

## What a push does

1. Local source and Markdown changes have no effect on the public site.
2. A push to GitHub `main` starts a Cloudflare Pages build automatically.
3. Cloudflare installs dependencies with `npm ci`, runs `npm run build`, and publishes `dist/client` after a successful build.
4. `npm run build` first runs `scripts/build-content.mjs`, then Vite prerenders the listed routes. The generator writes the post index, post bodies, RSS feed, and sitemap. The build is static; there is no production CMS server or database migration.
5. The active Pages deployment serves the custom domains. Check the production commit and status in **Deployments** before calling the release live.

`wrangler.jsonc` declares the `dist/client` assets directory for Wrangler workflows. The connected GitHub Pages project uses the dashboard build configuration above. Do not mistake the local `npm run dev` server or a preview URL for the production deployment.

## Routine publishing checklist

- Edit a post in `content/essais/<year>/` or the site code. Follow the frontmatter and image guidance in `AGENTS.md`.
- Run `npm run build` locally. Review the changed page, Paper and Ink themes, links, and generated RSS/sitemap when relevant.
- Review `git diff` and `git status`, especially generated content and new media. Commit and push the approved batch to `main` when the user wants it published.
- In Cloudflare **Deployments**, wait for a successful production build of that exact Git commit.
- Open `https://glyphsandgraphs.com/`, a changed route, and the other custom domains when domain behavior matters. Allow for cache propagation before diagnosing a mismatch.

## If a deployment fails or looks stale

- Read the failed build log in **Workers & Pages → ggv2 → Deployments**. Reproduce with `npm ci && npm run build` locally.
- Confirm that the Pages project still points to `sumergoconicio/GGv2`, production branch `main`, the current build command, and `dist/client` output.
- Check whether the generated archive index includes the new post, whether its slug is unique, and whether its route was prerendered. `npm run content:build` updates generated files before local `npm run dev`.
- Compare the dashboard's production commit with GitHub `main`. If the commit differs, investigate GitHub app access, build status, and branch control before touching DNS.
- If the production commit is correct but a domain differs, inspect **Custom domains** and the domain's DNS/cache settings. The Pages hostname can help separate deployment issues from domain issues.
- For a bad release, use a previously known good deployment or a reviewed Git revert. Verify the restored public routes. Do not delete the Pages project or custom domains as a troubleshooting shortcut.

## Security boundary

The repo and these docs are public. `.env`, `.dev.vars`, local Wrangler state, and `dist/` are gitignored. Do not put GitHub or Cloudflare tokens, private files, account recovery data, or secret values in commits, docs, build logs, or browser URLs. If future functionality requires a secret or server-side behavior, design that change explicitly and store credentials in Cloudflare's secret controls, never in the static client bundle.
