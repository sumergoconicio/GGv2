<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules
- The VLAK design system is vendored in full under `vendor/vlak-react` and `vendor/vlak` (published npm tarballs, v0.5.0) and installed via `file:` deps — keeps the whole package self-contained; upgrade by replacing those folders with newer tarballs.
- VLAK's stylesheet is linked before `src/styles.css` in `__root.tsx`; `src/styles.css` only maps VLAK tokens into Tailwind and must never redefine VLAK token names (`--bg`, `--text`, `--accent`, `--radius`) — unlayered rules would override the system.
- Pages use the 12-column frame in `src/components/site/PageGrid.tsx` (rail 3 / main 7 / aside 2) — one grid keeps every hairline aligned.
- Site content (works, posts) lives in `src/lib/content.ts` as static data — no backend yet.
