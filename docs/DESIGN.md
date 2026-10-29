# Glyphs & Graphs design system

This branch consolidates the type system and mango accent. The four roles below apply across the entire site.

## Four type roles

| Role | Typeface | Weight | Use |
| --- | --- | --- | --- |
| Display | MuseoModerno | 500 | Site wordmark and homepage hero; upright mango ampersand |
| Headings | IBM Plex Sans Condensed | 700 | Page, article and project titles; reading headings |
| Body | IBM Plex Sans | 400 | Introductory copy, summaries and article prose |
| Meta | IBM Plex Serif | 500; strapline 600; theme switch and footer 400 | Archive labels, years, categories, dates, captions, controls and the entire footer |

These are semantic roles. Meta uses IBM Plex Serif 500 across its standard sizes. The Thinker. Writer. Designer. strapline uses 600. The theme switch reads paper // ink in plain lowercase at regular weight (400), without small caps. Numbered year dividers use Meta at the h5 scale step. Labels such as Archive, Years, Categories and Recent writings use the same `.j-caps` treatment, regardless of their HTML element.

Fonts are served locally from `public/fonts/site/`, with their SIL Open Font Licenses. The vendored VLAK packages remain upstream dependencies.

## Type scale

Base: 16px. Ratio: 1.25 (major third). Body line height: 1.618. Heading line height: 1.15, with -0.022em letter spacing. Headings have 0.65em of space below them; Meta labels have 0.75rem. These gaps are shared tokens, including when a label uses a heading element.

| Step | rem | Approximate px |
| --- | --- | --- |
| h1 | 3.815 | 61.04 |
| h2 | 3.052 | 48.83 |
| h3 | 2.441 | 39.06 |
| h4 | 1.953 | 31.25 |
| h5 | 1.563 | 25.01 |
| h6 / lead | 1.25 | 20 |
| Body / navigation | 1 | 16 |
| Small / labels | 0.8 | 12.8 |
| Tiny (reserved) | 0.64 | 10.24 |

Below 768px, page h1/h2/h3 move down one step and the logo uses h4. Cards use h4 consistently across Home, Blog, Work and the Antarctic chapter index. Prose headings use smaller steps within the same scale. Reading measure remains 68ch.

`src/typography.css` owns the roles and scale. `src/styles.css` maps the roles to Tailwind font utilities and provides layout/prose rules. Use semantic classes such as `.j-caps`, `.j-year`, `.j-meta-nav` and `.j-entry-title`; avoid per-page font families and arbitrary heading sizes.

## Colour and interaction

- Ink navy: `#203854`.
- Paper: `#ECE9E0`.
- Sole splash accent: mango `#FBAC4D`.
- The logo ampersand and the hero word playground use mango text, without a background highlight. The top rule remains a single solid colour.
- Link hover and keyboard focus change the text colour to mango, without a block highlight.
- The selected navigation item receives a mango underline.
- Mango text has 6.33:1 contrast against Ink and 1.56:1 against Paper. Mango hover text on Paper follows the author's explicit visual preference; resting text retains the existing readable palette.

`src/color-themes.css` owns palette tokens. Preserve the existing Ink and Paper surfaces. The dot grid scrolls with the page; nearby dots grow and blend toward mango while remaining translucent. Pointer reactions respect reduced-motion preferences.

## Footer

The footer uses regular-weight IBM Plex Serif 400 at the small-text scale step (0.8rem / 12.8px) throughout, including its links. One closing footer contains the Creative Commons symbol, current year and author, Written with love from Utrecht, Netherlands., and the VLAK design-system credit. Recent essays and the secondary metadata strip have been removed. The visible up-arrow Back to top link targets the focusable site header on every page.

## Review and release

Body typography is locked to IBM Plex Sans 400. The temporary font and colour comparison controls have been removed. Review Home, Work, Blog, an article, and the footer in Paper and Ink before publishing.
