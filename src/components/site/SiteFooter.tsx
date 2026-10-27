import { Link } from "@tanstack/react-router";
import { posts, formatDate, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-0">
      <div className="j-rule grid border-b border-hairline lg:grid-cols-12">
        <div className="hidden border-r border-hairline lg:col-span-2 lg:block" />
        <div className="py-12 lg:col-span-10 lg:px-[clamp(24px,4vw,72px)] lg:py-16">
          <p className="j-caps">Recent posts</p>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <li key={p.slug}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="font-display text-lg font-semibold hover:text-active">
                  {p.title}
                </Link>
                <p className="mt-1 text-sm tracking-[0.08em] text-muted-foreground">{formatDate(p.date)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="text-muted-foreground">Built on the VLAK design system</p>
      </div>
    </footer>
  );
}
