import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@noorddev/vlak-react";
import { site } from "@/lib/content";
import { SearchOverlay } from "./SearchOverlay";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About", exact: false },
  { to: "/works", label: "Works", exact: false },
  { to: "/blog", label: "Blog", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between gap-4 py-5 md:py-7">
        <p className="min-w-0 truncate text-base">{site.tagline}</p>
        <div className="flex shrink-0 items-center gap-6">
          <ThemeToggle />
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
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 py-7 lg:col-span-7 lg:block lg:border-r lg:border-hairline lg:py-9 lg:pr-8">
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
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </Button>
        </div>

        <div
          id="site-nav"
          className={`${menuOpen ? "grid" : "hidden"} grid-cols-2 gap-6 border-t border-hairline py-7 lg:col-span-5 lg:grid lg:border-t-0 lg:py-9 lg:pl-[clamp(24px,4vw,72px)]`}
        >
          <nav aria-label="Main">
            <ul className="space-y-1.5">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    activeOptions={{ exact: n.exact }}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-xl font-semibold transition-colors hover:text-active"
                    activeProps={{ className: "text-active" }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="space-y-1 justify-self-end pr-2 text-[0.9375rem] lg:justify-self-auto lg:pl-[40%]">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-active">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
