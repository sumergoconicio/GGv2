// Module: index.tsx. Lead readers into the static archive.
import { createFileRoute, Link } from "@tanstack/react-router";
import { datedEssays, formatDate } from "@/lib/archive";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glyphs & Graphs — Naveen Srivatsav" },
      { name: "description", content: "Hypertext wordplay by Naveen Srivatsav." },
      { property: "og:title", content: "Glyphs & Graphs" },
      {
        property: "og:description",
        content: "Hypertext wordplay by Naveen Srivatsav.",
      },
    ],
  }),
  component: Home,
});

/** Introduce current work, invite contact, and surface the five newest essays. */
function Home() {
  const recent = datedEssays.slice(0, 5);
  return (
    <>
      <section
        aria-labelledby="home-hero-title"
        className="grid border-b border-hairline lg:grid-cols-12"
      >
        <div className="border-b border-hairline py-10 lg:col-span-3 lg:border-b-0 lg:pr-[var(--j-cell)] lg:py-16">
          <p className="j-caps">Naveen Srivatsav</p>
          <p className="j-kicker mt-3 max-w-[22ch]">
            Thinker.
            <br />
            Writer.
            <br />
            Designer.
          </p>
        </div>
        <div className="py-10 lg:col-span-9 lg:border-l lg:border-hairline lg:px-[var(--j-cell)] lg:py-16">
          <h1 id="home-hero-title" className="mb-8 max-w-[14ch]">
            Complexity is my <span className="j-playground">playground.</span>
          </h1>
          <p className="j-lead max-w-[55ch]">
            I’m building tools and strategies to explore it—and sharing what I learn along the way.
          </p>
          <nav aria-label="Explore the site" className="mt-10 flex flex-col items-start gap-4">
            <button
              type="button"
              onClick={() => {
                const destination = [
                  "https://",
                  "contact",
                  ".",
                  "glyphsandgraphs",
                  ".",
                  "com",
                ].join("");
                window.open(destination, "_blank", "noopener,noreferrer");
              }}
              className="j-link j-callout cursor-pointer text-left"
            >
              Let’s collaborate on exciting ideas →
            </button>
            <Link to="/works" className="j-link j-meta">
              See what I’m building →
            </Link>
          </nav>
        </div>
      </section>
      <section className="grid lg:grid-cols-12">
        <div className="j-meta py-8 lg:col-span-3 lg:pr-[var(--j-cell)]">
          <h2 className="j-caps">Recent writings</h2>
          <Link to="/blog" className="j-link j-meta-nav mt-5 inline-block">
            Browse by year →
          </Link>
        </div>
        <div className="divide-y divide-hairline lg:col-span-9 lg:border-l lg:border-hairline">
          {recent.map((post) => (
            <article
              key={post.slug}
              className="j-recent-entry grid gap-3 py-8 lg:grid-cols-[8rem_minmax(0,1fr)] lg:items-center lg:gap-x-8 lg:gap-y-0 lg:px-[var(--j-cell)]"
            >
              <time dateTime={post.date || undefined} className="j-caps text-muted-foreground">
                {formatDate(post.date)}
              </time>
              <h3 className="j-entry-title">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-active">
                  {post.title}
                </Link>
              </h3>
              <p className="max-w-[68ch] lg:col-start-2 lg:mt-5">{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
