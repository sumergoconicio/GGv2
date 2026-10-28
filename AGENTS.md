# Glyphs & Graphs: agent primer

This is Naveen Srivatsav's public, static portfolio and writing site at `glyphsandgraphs.com`. Read this file before editing. The repository is the publishing system: Markdown and site code are reviewed in Git, GitHub holds the source, and Cloudflare Pages builds the static site. There is no CMS database or author login.

## Product and editorial intent

- The home page establishes Naveen as a thinker, writer, and designer. It leads with an invitation to collaborate, then points to Work and five recent writings.
- Work is a curated portfolio of projects, research, and publications. The Blog is a year-grouped archive of writing of varied lengths. The Antarctic photoblog is a Work project at `/works/iae2017`, not a top-level Travel section.
- Keep the voice personal, precise, and curious. Avoid generic marketing copy, invented claims, and changing the author's words without a request.
- Preserve the established page rhythm: strong condensed headings, generous space, narrow reading columns, fine rules, visible grid, restrained color, and accessible navigation. Keep the layout responsive.

## Where things live

| Need | Source of truth |
| --- | --- |
| Site name, author, tagline, canonical URL | `src/lib/content.ts` |
| Home hero and five recent posts | `src/routes/index.tsx` |
| Header, footer, theme control, search | `src/components/site/` |
| Shared 12-column rail/main/aside frame | `src/components/site/PageGrid.tsx` |
| Blog index and pinned welcome card | `src/components/blog/EssayIndex.tsx` |
| Blog posts, grouped by original archive year | `content/essais/<year>/*.md` |
| Pinned welcome note | `content/essais/welcome.md` |
| Antarctic chapters, in reading order | `content/travel/antarctica-2017/*.md` |
| Work project copy and year groups | `src/routes/works.index.tsx` |
| Work publication metadata and URLs | `src/lib/publications.ts` |
| Post metadata, grouping, and body loading | `src/lib/archive.ts` |
| Markdown renderer and image gallery | `src/components/blog/PostBody.tsx` |
| Static content, RSS, and sitemap generator | `scripts/build-content.mjs` |
| Prerender route list | `vite.config.ts` |
| Deployment settings and release checks | `docs/DEPLOY.md` |

Routes are TanStack Start file routes under `src/routes/`. `src/routes/__root.tsx` defines the app shell and stylesheet order. `src/routes/blog.$slug.tsx` renders a writing entry; `src/routes/works.iae2017.$slug.tsx` renders an Antarctic chapter. Do not hand-edit `src/routeTree.gen.ts`.

## Design system contract

VLAK v0.5.0 is vendored as complete local packages in `vendor/vlak` and `vendor/vlak-react`, installed through `file:` dependencies. Its default CSS tokens are in `vendor/vlak/css/tokens.css` and the React package CSS is `vendor/vlak-react/dist/vlak-react.css`. Treat the vendored files as upstream packages when changing the site; upgrade them deliberately as packages.

The stylesheet order in `src/routes/__root.tsx` is `src/layers.css`, VLAK React CSS, `src/styles.css`, then `src/color-themes.css`. `src/styles.css` maps VLAK tokens to Tailwind names and adds the editorial layout, type, rules, prose, and component styles. **Do not redefine VLAK token names in `src/styles.css`.** Site-specific Paper/Ink palette overrides belong in `src/color-themes.css`, which loads last. Theme selection is handled by `src/components/site/ThemeToggle.tsx` and persisted in browser local storage.

Current palette: Paper has an off-white `#ece9e0` background, navy `#203854` body text, and muted blue `#496174` headings. Ink reverses to a navy background and off-white text. Use the existing tokens for dividers, fields, links, and controls; check both themes after a visual change. Headings use IBM Plex Sans Condensed; body copy uses the configured sans-serif stack.

Use `PageGrid` for pages with a rail, reading area, and optional aside. It provides a 12-column desktop frame and a stacked small-screen layout. Keep reading text near the existing `68ch` measure. Respect semantic headings, descriptive links, image alt text, keyboard operation, and adequate color contrast. Do not add another unrelated page grid or duplicate a section title already present in the header.

## Publish a new Blog post

1. Ask for the draft Markdown and any missing title, publication date, category, cover image, and image attribution. Edit the author's wording only as requested. Do not invent dates, sources, or rights.
2. Create `content/essais/<archiveYear>/<slug>.md`. Preserve the yearwise clusters. Use a unique lowercase hyphenated slug; it becomes `/blog/<slug>`. The generator rejects duplicate slugs across all posts.
3. Add YAML frontmatter like this, followed by a blank line and the Markdown body:

   ```yaml
   ---
   kind: "essay"
   slug: "example-post"
   title: "Example post"
   date: "2026-10-28"
   archiveYear: 2026
   pinned: false
   category: "Observations"
   tags: ["design", "systems"]
   description: "A complete, concise teaser sentence for indexes and metadata."
   cover: "/images/example-post.webp"
   ---
   ```

   `kind`, `slug`, `title`, and `description` are required. A regular Blog post also needs a `YYYY-MM-DD` date and integer `archiveYear`. Use `cover: null` when there is no cover. `category` controls the category link and index; choose an existing category when appropriate. `tags` are optional metadata. `description` appears in listings, metadata, and RSS; keep it a complete sentence, not a cut-off fragment. The full article renders the Markdown body separately.
4. Put new image files under `public/images/` and reference them as `/images/name.ext` in Markdown. Add meaningful alt text. The article renderer opens images from the same article in a lightbox with a thumbnail strip. Verify source, permission, and any needed credit before publishing an image. Historic imported media is under `public/archive/media/`; do not assume its licensing is established.
5. Run `npm run content:build` before local development or run `npm run build`, which runs it automatically. This regenerates the tracked `src/generated/archive-index.json`, `src/generated/bodies/`, `public/rss.xml`, and `public/sitemap.xml`. Never edit those outputs by hand. Check that `/blog/<slug>` renders, the year and category index links work, and the teaser and images look right.
6. Build and review locally, then commit the Markdown, assets, and generated files together. Publishing happens when the approved changes reach `main` and Cloudflare's build succeeds. Follow the user's current preference about when to commit or push; batch changes when requested.

`content/essais/welcome.md` is special: it is pinned above the year groups, has no public date, and is excluded from the RSS feed. Do not use a future date to pin a normal post. The home page reads the first five dated posts from the generated index.

## Work and Antarctic content

Edit project descriptions and year placement in `src/routes/works.index.tsx`. Add linked publications to `src/lib/publications.ts`, with a clear title, institution, year, accurate blurb, action label, and verified public URL. Work entries should read as portfolio projects, not as a generic link list. Local PDFs belong in `public/publications/`; the Work page opens them in an in-page reader. Avoid publishing confidential documents.

Antarctic chapters are `kind: "travel"` Markdown files in `content/travel/antarctica-2017/`. They need a unique `slug`, title, description, integer `order`, and usually `series: "antarctica-2017"`; `order` determines the chapter sequence. Their public paths are `/works/iae2017/<slug>`. The project landing page is `src/components/blog/JourneyLanding.tsx`. Keep the Work project title and path aligned; there is no `/travel` route to maintain.

## Local check and release

From the repo root, install with `npm ci` and run `npm run content:build` followed by `npm run dev` for a preview. Run `npm run build` before a release; it produces static files in `dist/client`. Check Paper and Ink, a post page, the Blog year/category links, Work, images, and any changed external links. `npm run lint` and `npm run test` are available when a change warrants them.

See `docs/DEPLOY.md` for the current Cloudflare Pages connection, domains, troubleshooting, and the boundary between local edits, GitHub pushes, and production. This repository is public. Do not put tokens, `.env` contents, credentials, private source documents, or private contact data in this file, Markdown content, Git history, or deployment documentation. Keep secrets in approved local or Cloudflare secret stores.
