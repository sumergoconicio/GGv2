import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { posts, works, formatDate } from "@/lib/content";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    const w = works
      .filter((x) => `${x.title} ${x.category} ${x.summary}`.toLowerCase().includes(term))
      .map((x) => ({ key: `w-${x.slug}`, kind: "Work", title: x.title, meta: x.category, to: "/works/$slug" as const, slug: x.slug }));
    const p = posts
      .filter((x) => `${x.title} ${x.excerpt}`.toLowerCase().includes(term))
      .map((x) => ({ key: `p-${x.slug}`, kind: "Story", title: x.title, meta: formatDate(x.date), to: "/blog/$slug" as const, slug: x.slug }));
    return [...w, ...p];
  }, [q]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Search" className="fixed inset-0 z-[300] overflow-y-auto bg-paper">
      <div className="j-frame flex min-h-full flex-col">
        <div className="flex justify-end py-8">
          <button type="button" onClick={onClose} aria-label="Close search" className="grid size-11 place-items-center text-3xl font-semibold leading-none hover:text-active">
            ×
          </button>
        </div>
        <form
          className="mt-[18vh]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="site-search" className="sr-only">Search works and stories</label>
          <input
            ref={inputRef}
            id="site-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type and hit enter"
            autoComplete="off"
            className="w-full border-b border-ink bg-transparent pb-4 text-center font-display text-[clamp(2.25rem,6vw,4.5rem)] font-normal outline-none placeholder:text-muted-foreground"
          />
        </form>
        <ul className="mx-auto mt-10 w-full max-w-3xl divide-y divide-hairline pb-20">
          {q && results.length === 0 && <li className="py-4 text-center text-muted-foreground">Nothing found for “{q}”.</li>}
          {results.map((r) => (
            <li key={r.key}>
              <Link to={r.to} params={{ slug: r.slug }} onClick={onClose} className="grid grid-cols-[6rem_minmax(0,1fr)_auto] items-baseline gap-4 py-4 hover:text-active">
                <span className="j-caps text-muted-foreground">{r.kind}</span>
                <span className="truncate font-display text-xl font-semibold">{r.title}</span>
                <span className="text-sm text-muted-foreground">{r.meta}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
