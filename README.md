# Glyphs & Graphs

A static React journal built with the complete vendored VLAK design system. The public site is intended for [glyphsandgraphs.com](https://glyphsandgraphs.com). Essays, About, and Work with the International Antarctic Expedition 2017 are generated as static pages.

## Run locally

Use Node.js and npm. Install dependencies with `npm ci`, then run `npm run dev`. Run `npm run build` to regenerate the archive index, RSS feed, sitemap, and prerendered site in `dist/client`. Use `npx wrangler dev --local` to preview the same static assets Cloudflare will serve.

## Publish writing

Add a Markdown file under `content/essais/YYYY/`. Use an existing essay as a frontmatter template. Set `kind: essay`, a unique `slug`, `title`, `date` in `YYYY-MM-DD` form, `archiveYear`, and a short `description`. The year folder and `archiveYear` keep the index grouped by year. The `date` controls chronology within that group. The `category` field creates a linked, static index at `/blog/category/<category-slug>`. Add images under `public/` and refer to them with absolute site paths such as `/images/photo.jpg`. `npm run build` checks metadata and includes the post automatically.

The welcome note is `content/essais/welcome.md`. Its `pinned: true` field keeps it above every year group without a fictional 2031 publication date. Antarctica entries live under `content/travel/antarctica-2017/`, ordered by each entry's `order` field. Their calendar dates are unknown in the source archive and are left blank.

Work features AskClaire, the 2025 BII Climate Risk Management Toolkit, International Antarctic Expedition 2017 at `/works/iae2017`, and individual year-grouped work entries including the 2014 thesis. Antarctica chapters live at `/works/iae2017/<chapter-slug>`. About uses `public/images/my-notion-face-transparent.png`.

## Archive provenance

The Squarespace backup was imported with `scripts/import_archive.py`. It produced 72 essays, eight Antarctica entries, and 571 locally served images. `content/import-report.json` records the source file for every entry and ten differences between the archive folder year and Squarespace publication date. The original archive remains untouched. The importer requires Python with `lxml`; its two arguments are the backup root and this repository root. Running it again overwrites imported Markdown, so edit a separate draft first if you plan to reimport.

The original design request and Lovable instructions are preserved in [the design brief](docs/original-design-brief.md). The full published VLAK 0.5.0 packages remain under `vendor/vlak` and `vendor/vlak-react`.

## Cloudflare deployment

`wrangler.jsonc` points Cloudflare Workers Static Assets to `dist/client`. Build with `npm ci` and `npm run build`, then deploy with `npx wrangler deploy`. The configuration includes no Worker server script. DNS for `glyphsandgraphs.com` and the Cloudflare account must be connected before public launch. Nothing in this repository automatically deploys or changes DNS.

Before publishing, review the imported writing and the ten date discrepancies in `content/import-report.json`. The generated RSS feed is `/rss.xml`; the sitemap is `/sitemap.xml`.
