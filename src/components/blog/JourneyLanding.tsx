// Module: JourneyLanding.tsx. Present the Antarctica photoblog in narrative order.
import { Link } from "@tanstack/react-router";
import { formatDate, travelPosts } from "@/lib/archive";

/** Render the original eight-part journey in reading order. */
export function JourneyLanding() {
  const firstPart = travelPosts[0];
  return (
    <>
      <section className="grid border-b border-hairline lg:grid-cols-12">
        <div className="border-b border-hairline py-10 lg:col-span-3 lg:border-b-0 lg:pr-[var(--j-cell)] lg:py-16">
          <p className="j-caps">Expedition</p>
          <p className="mt-3 font-display text-3xl font-semibold">2017</p>
          <p className="mt-5 max-w-[34ch]">
            A journey to the seventh continent, told in eight parts.
          </p>
        </div>
        <div className="py-10 lg:col-span-9 lg:border-l lg:border-hairline lg:px-[var(--j-cell)] lg:py-16">
          <h1 className="text-[clamp(2.25rem,4vw,4rem)]">
            International Antarctic Expedition 2017
          </h1>
          {firstPart && (
            <Link
              to="/works/iae2017/$slug"
              params={{ slug: firstPart.slug }}
              className="j-link mt-8 inline-block"
            >
              Read the photoblog →
            </Link>
          )}
        </div>
      </section>
      <section className="grid lg:grid-cols-12" aria-label="Journey chapters">
        <div className="py-10 lg:col-span-3 lg:pr-[var(--j-cell)] lg:py-16">
          <h2 className="text-[2rem]">The chapters</h2>
        </div>
        <div className="divide-y divide-hairline lg:col-span-9 lg:border-l lg:border-hairline">
          {travelPosts.map((post, index) => (
            <article
              key={post.slug}
              className="grid gap-6 px-6 py-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:px-[var(--j-cell)] lg:py-10"
            >
              {post.cover && (
                <Link
                  to="/works/iae2017/$slug"
                  params={{ slug: post.slug }}
                  className="block overflow-hidden"
                >
                  <img
                    src={post.cover}
                    alt=""
                    loading={index === 0 ? "eager" : "lazy"}
                    className="aspect-[3/2] w-full object-cover"
                  />
                </Link>
              )}
              <div>
                <p className="j-caps text-muted-foreground">
                  Part {index + 1}
                  {post.date ? (
                    <>
                      {" "}
                      · <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </>
                  ) : post.slug === "antarctica-in-images" ? (
                    " · Photo essay"
                  ) : (
                    ""
                  )}
                </p>
                <h2 className="mt-3 text-[1.9rem]">
                  <Link
                    to="/works/iae2017/$slug"
                    params={{ slug: post.slug }}
                    className="hover:text-active"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-6">{post.description}</p>
                <Link
                  to="/works/iae2017/$slug"
                  params={{ slug: post.slug }}
                  className="j-link mt-5 inline-block"
                >
                  Read this part
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
