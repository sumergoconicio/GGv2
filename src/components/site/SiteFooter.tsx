// Module: SiteFooter.tsx. Show recent essays and site attribution.
import { Link } from "@tanstack/react-router";
import { datedEssays, formatDate } from "@/lib/archive";
import { site } from "@/lib/content";

/** Render three recent essays and a compact footer. */
export function SiteFooter() {
  return (
    <footer>
      <div className="j-rule grid border-b border-hairline lg:grid-cols-12">
        <div className="hidden border-r border-hairline lg:col-span-2 lg:block" />
        <div className="py-12 lg:col-span-10 lg:px-[clamp(24px,4vw,72px)] lg:py-16">
          <p className="j-caps">Recent essays</p>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {datedEssays.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="font-display text-lg font-semibold hover:text-active"
                >
                  {post.title}
                </Link>
                <p className="mt-1 text-sm tracking-[0.08em] text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.author} · {site.name}
        </p>
        <p className="text-muted-foreground">
          Built with{" "}
          <a
            href="https://vlak.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-active"
          >
            VLAK
          </a>
        </p>
      </div>
    </footer>
  );
}
