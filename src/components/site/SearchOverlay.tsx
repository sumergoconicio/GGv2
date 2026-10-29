// Module: SearchOverlay.tsx. Search the generated static essay and travel index.
import { useEffect, useMemo, useRef, useState } from "react";
import { essays, formatDate, travelPosts } from "@/lib/archive";

/** Search titles, descriptions, and categories without a server or search service. */
export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return [...essays, ...travelPosts]
      .filter((post) =>
        `${post.title} ${post.description} ${post.category || ""} ${post.archiveYear || ""}`
          .toLowerCase()
          .includes(term),
      )
      .slice(0, 30);
  }, [query]);
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search writing"
      className="j-meta fixed inset-0 z-[300] overflow-y-auto bg-paper"
    >
      <div className="j-frame flex min-h-full flex-col">
        <div className="flex justify-end py-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="grid size-11 place-items-center j-control-icon font-semibold leading-none hover:text-active"
          >
            ×
          </button>
        </div>
        <form className="mt-[18vh]" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="site-search" className="sr-only">
            Search essays and travel writing
          </label>
          <input
            ref={inputRef}
            id="site-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the archive"
            autoComplete="off"
            className="w-full border-b border-ink bg-transparent pb-4 text-center j-search-input font-normal outline-none placeholder:text-muted-foreground"
          />
        </form>
        <ul className="mx-auto mt-10 w-full max-w-3xl divide-y divide-hairline pb-20">
          {query && results.length === 0 && (
            <li className="py-4 text-center text-muted-foreground">Nothing found for “{query}”.</li>
          )}
          {results.map((post) => (
            <li key={post.href}>
              <a
                href={post.href}
                onClick={onClose}
                className="grid grid-cols-[6rem_minmax(0,1fr)_auto] items-baseline gap-4 py-4 hover:text-active"
              >
                <span className="j-caps text-muted-foreground">
                  {post.kind === "travel" ? "Travel" : "Essay"}
                </span>
                <span className="truncate j-search-title">{post.title}</span>
                <span className="j-meta-small text-muted-foreground">{formatDate(post.date)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
