# Glyphs & Graphs

The files behind [Naveen Srivatsav's blog and portfolio](https://glyphsandgraphs.com).

Built with React and the VLAK design system. Essays and the Antarctic photoblog are Markdown files in `content/`. Images and documents are in `public/`.

## Run locally

Install dependencies with `npm ci`, then start the site with `npm run dev`. Run `npm run build` to generate the static site in `dist/client`.

## Deploy

`wrangler.jsonc` configures the static site for Cloudflare Workers. Build the site, then deploy with `npx wrangler deploy`.
