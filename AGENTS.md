## Architecture rules
- The VLAK design system is vendored in full under `vendor/vlak-react` and `vendor/vlak` (published npm tarballs, v0.5.0) and installed via `file:` deps — keeps the whole package self-contained; upgrade by replacing those folders with newer tarballs.
- VLAK's stylesheet is linked before `src/styles.css` in `__root.tsx`; `src/styles.css` only maps VLAK tokens into Tailwind and must never redefine VLAK token names (`--bg`, `--text`, `--accent`, `--radius`) — unlayered rules would override the system.
- Pages use the 12-column frame in `src/components/site/PageGrid.tsx` (rail 3 / main 7 / aside 2) — one grid keeps every hairline aligned.
- Essay and travel content lives in `content/` as Markdown. `npm run content:build` generates the static index, RSS feed, and sitemap. Work presents AskClaire, the BII toolkit, and International Antarctic Expedition 2017 with individual research and publication entries in year groups.
