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
          <p className="mt-3 max-w-[22ch] font-display text-2xl font-semibold leading-tight">
            Founder. Designer. Writer.
          </p>
        </div>
        <div className="py-10 lg:col-span-9 lg:border-l lg:border-hairline lg:px-[var(--j-cell)] lg:py-16">
          <h1
            id="home-hero-title"
            className="mb-8 max-w-[12ch] text-[clamp(3.6rem,8vw,8.5rem)] leading-[0.94] tracking-[-0.045em]"
          >
            Complexity is a playground.
          </h1>
          <p className="max-w-[55ch] text-[clamp(1.1rem,1.6vw,1.4rem)] leading-relaxed">
            I’m building tools and strategies to explore it—and sharing what I learn along the way.
          </p>
          <nav aria-label="Explore the site" className="mt-10 flex flex-col items-start gap-4">
            <Link to="/works" className="j-link font-display text-[clamp(1.5rem,2.5vw,2.25rem)]">
              See what I’m building →
            </Link>
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
                window.location.assign(destination);
              }}
              className="j-link cursor-pointer text-left"
            >
              Let’s collaborate on exciting ideas →
            </button>
            <Link to="/blog" className="j-link">
              Read my writings →
            </Link>
          </nav>
        </div>
      </section>
      <section className="grid lg:grid-cols-12">
        <div className="py-10 lg:col-span-3 lg:pr-[var(--j-cell)] lg:py-16">
          <p className="j-caps">Recent writing</p>
          <h2 className="mt-3 text-[2rem]">Essays</h2>
          <Link to="/blog" className="j-link mt-5 inline-block">
            Browse the years →
          </Link>
        </div>
        <div className="divide-y divide-hairline lg:col-span-9 lg:border-l lg:border-hairline">
          {recent.map((post) => (
            <article
              key={post.slug}
              className="grid gap-3 py-8 lg:grid-cols-[8rem_minmax(0,1fr)] lg:items-baseline lg:gap-8 lg:px-[var(--j-cell)]"
            >
              <time dateTime={post.date || undefined} className="j-caps text-muted-foreground">
                {formatDate(post.date)}
              </time>
              <div>
                <h3 className="text-[1.75rem]">
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-active">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 max-w-[68ch]">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
