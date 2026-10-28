// Module: SiteHeader.tsx. Navigate the static Glyphs & Graphs sections.
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@noorddev/vlak-react";
import { site } from "@/lib/content";
import { SearchOverlay } from "./SearchOverlay";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Home", exact: true },
  { to: "/works", label: "Work", exact: false },
  { to: "/blog", label: "Blog", exact: false },
  { to: "/about", label: "About", exact: false },
] as const;

/** Render the site identity, primary navigation, theme toggle, and search. */
export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-between gap-4 py-5 md:py-7">
        <p className="min-w-0 truncate text-base">{site.tagline}</p>
        <div className="flex shrink-0 items-center gap-6">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="j-caps transition-colors hover:text-active"
          >
            Search
          </button>
        </div>
      </div>
      <div className="j-rule grid border-b border-hairline lg:grid-cols-12">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-8 py-7 lg:col-span-7 lg:flex-col lg:items-start lg:border-r lg:border-hairline lg:py-9 lg:pr-8">
          <Link to="/" className="min-w-0">
            <span className="block font-display text-[2rem] font-semibold leading-none tracking-tight md:text-[2.5rem] 2xl:text-[2.75rem]">
              {site.name}
            </span>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? "Close" : "Menu"}
          </Button>
          <div className="w-full lg:mt-auto">
            <ThemeToggle />
          </div>
        </div>
        <div
          id="site-nav"
          className={`${menuOpen ? "grid" : "hidden"} grid-cols-2 gap-6 border-t border-hairline py-7 lg:col-span-5 lg:grid lg:border-t-0 lg:py-9 lg:pl-[clamp(24px,4vw,72px)]`}
        >
          <nav aria-label="Main">
            <ul className="space-y-1.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.exact }}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-xl font-semibold transition-colors hover:text-active"
                    activeProps={{ className: "text-active" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col items-start gap-2 justify-self-end pr-2 text-[0.9375rem] lg:justify-self-auto lg:pl-[40%]">
            <button
              type="button"
              aria-label="Say hello by email"
              onClick={() => {
                const address = ["hello", "glyphsandgraphs", "com"];
                window.location.href = `mailto:${address[0]}@${address[1]}.${address[2]}`;
              }}
              className="text-left transition-colors hover:text-active"
            >
              Say hello!
            </button>
            <a
              href="https://www.linkedin.com/in/naveensrivatsav/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-active"
            >
              LinkedIn
            </a>
            <a href="/rss.xml" className="transition-colors hover:text-active">
              RSS feed
            </a>
          </div>
        </div>
      </div>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
