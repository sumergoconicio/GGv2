// Module: works.iae2017.$slug.tsx. Render one part of the static Antarctica journal.
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { formatDate, getPost, travelPosts } from "@/lib/archive";
import { PageGrid } from "@/components/site/PageGrid";
import { PostBody } from "@/components/blog/PostBody";

export const Route = createFileRoute("/works/iae2017/$slug")({
  loader: async ({ params }) => {
    const post = await getPost("travel", params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post)
      return {
        meta: [
          { title: "Journey not found — Glyphs & Graphs" },
          { name: "robots", content: "noindex" },
        ],
      };
    return {
      meta: [
        { title: `${post.title} — Glyphs & Graphs` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        ...(post.cover
          ? [{ property: "og:image", content: `https://glyphsandgraphs.com${post.cover}` }]
          : []),
      ],
      links: [{ rel: "canonical", href: `https://glyphsandgraphs.com/works/iae2017/${post.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="py-24">
      <p>That part of the journey is unavailable.</p>
      <Link to="/works/$slug" params={{ slug: "iae2017" }} className="j-link">
        Back to Antarctica
      </Link>
    </div>
  ),
  component: TravelPage,
});

/** Render an Antarctica part with its position in the series and adjacent parts. */
function TravelPage() {
  const { post } = Route.useLoaderData();
  const index = travelPosts.findIndex((item) => item.slug === post.slug);
  const previous = travelPosts[index - 1];
  const next = travelPosts[index + 1];
  return (
    <PageGrid
      last
      rail={
        <div className="py-10 lg:py-16 lg:text-right">
          <Link to="/works/$slug" params={{ slug: "iae2017" }} className="j-caps hover:text-active">
            Antarctica 2017
          </Link>
          <p className="mt-3 font-display text-3xl font-semibold">
            Part {index + 1} of {travelPosts.length}
          </p>
        </div>
      }
      aside={
        <div className="py-8 text-sm lg:pl-[var(--j-cell)] xl:sticky xl:top-8 xl:py-16">
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
          <p className="mt-2">{post.readingMinutes} min read</p>
        </div>
      }
    >
      <article className="px-0 py-10 lg:px-[var(--j-cell)] lg:py-16">
        <header className="mx-auto mb-12 max-w-[68ch]">
          <h1 className="text-[clamp(2.25rem,4vw,4rem)]">{post.title}</h1>
        </header>
        <PostBody body={post.body} />
        <nav
          aria-label="Journey chapters"
          className="j-prose mx-auto mt-16 grid gap-6 border-t border-hairline pt-8 sm:grid-cols-2"
        >
          <div>
            {previous && (
              <Link to="/works/iae2017/$slug" params={{ slug: previous.slug }} className="j-link">
                ← {previous.title}
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link to="/works/iae2017/$slug" params={{ slug: next.slug }} className="j-link">
                {next.title} →
              </Link>
            )}
          </div>
        </nav>
      </article>
    </PageGrid>
  );
}
