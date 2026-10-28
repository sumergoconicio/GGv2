# Glyphs & Graphs

The files behind [Naveen Srivatsav's blog and portfolio](https://glyphsandgraphs.com).

Built with React and the VLAK design system. Essays and the Antarctic photoblog are Markdown files in `content/`. Images and documents are in `public/`.

## Run locally

Install dependencies with `npm ci`, then start the site with `npm run dev`. Run `npm run build` to generate the static site in `dist/client`.

## Deploy

Cloudflare Pages builds GitHub `main` automatically with `npm ci && npm run build` and publishes `dist/client`. See [AGENTS.md](AGENTS.md) for the site and publishing guide, and [docs/DEPLOY.md](docs/DEPLOY.md) for the verified deployment setup.
