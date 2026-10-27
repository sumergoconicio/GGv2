import { createFileRoute, Link } from "@tanstack/react-router";
import { formatDate, posts, site } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Jeanne Lupton" },
      { name: "description", content: "Notes from the studio, travel and life behind the camera." },
      { property: "og:title", content: "Journal — Jeanne Lupton" },
      { property: "og:description", content: "Notes from the studio, travel and life behind the camera." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div>
      {posts.map((p, i) => (
        <article key={p.slug} className={`grid lg:grid-cols-12 ${i < posts.length - 1 ? "border-b border-hairline" : ""}`}>
          <div className="pt-10 lg:col-span-3 lg:pr-[clamp(24px,4vw,72px)] lg:pt-16 lg:text-right">
            <time dateTime={p.date} className="font-display text-2xl font-semibold tracking-wide">{formatDate(p.date)}</time>
          </div>
          <div className="grid min-w-0 gap-8 py-8 lg:col-span-9 lg:border-l lg:border-hairline lg:p-[var(--j-cell)] md:grid-cols-2 xl:col-span-7 xl:border-r">
            <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block overflow-hidden">
              <img
                src={p.cover.src}
                alt={p.cover.alt}
                width={p.cover.w}
                height={p.cover.h}
                loading={i === 0 ? "eager" : "lazy"}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </Link>
            <div className="md:pt-10">
              <h2 className="text-[1.75rem]">
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-active">{p.title}</Link>
              </h2>
              <p className="mt-5">{p.excerpt}</p>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="j-link mt-6 inline-block">Read more</Link>
            </div>
          </div>
          <dl className="flex gap-10 pb-10 text-[0.9375rem] lg:col-span-9 lg:col-start-4 lg:pl-[var(--j-cell)] xl:col-span-2 xl:col-start-auto xl:flex-col xl:justify-end xl:gap-6 xl:pb-16">
            <div><dt>Story by</dt><dd className="font-semibold">{site.name}</dd></div>
            <div><dt>Discussion</dt><dd className="font-semibold">{p.comments} comments</dd></div>
          </dl>
        </article>
      ))}
    </div>
  );
}
