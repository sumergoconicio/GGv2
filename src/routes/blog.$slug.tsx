// Module: blog.$slug.tsx. Render one static Markdown essay with archive context.
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { datedEssays, formatDate, getPost } from "@/lib/archive";
import { PageGrid } from "@/components/site/PageGrid";
import { PostBody } from "@/components/blog/PostBody";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPost("essay", params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post)
      return {
        meta: [
          { title: "Essay not found — Glyphs & Graphs" },
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
      links: [{ rel: "canonical", href: `https://glyphsandgraphs.com/blog/${post.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="py-24">
      <p>That essay is not in the archive.</p>
      <Link to="/blog" className="j-link">
        Back to essays
      </Link>
    </div>
  ),
  component: EssayPage,
});

/** Render the essay, original archive year, and chronological neighbors. */
function EssayPage() {
  const { post } = Route.useLoaderData();
  const index = datedEssays.findIndex((item) => item.slug === post.slug);
  const previous = index >= 0 ? datedEssays[index + 1] : undefined;
  const next = index > 0 ? datedEssays[index - 1] : undefined;
  return (
    <PageGrid
      last
      rail={
        <div className="py-10 lg:py-16 lg:text-right">
          <Link to="/blog" className="j-caps hover:text-active">
            Essays
          </Link>
          {post.archiveYear && (
            <p className="mt-3 font-display text-3xl font-semibold">{post.archiveYear}</p>
          )}
        </div>
      }
      aside={
        <div className="py-8 text-sm lg:pl-[var(--j-cell)] xl:sticky xl:top-8 xl:py-16">
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
          <p className="mt-2">{post.readingMinutes} min read</p>
          {post.category && post.categorySlug && (
            <p className="mt-5 j-caps">
              <Link
                to="/blog/category/$category"
                params={{ category: post.categorySlug }}
                className="break-words underline decoration-1 underline-offset-4 hover:text-active"
              >
                {post.category}
              </Link>
            </p>
          )}
        </div>
      }
    >
      <article className="px-0 py-10 lg:px-[var(--j-cell)] lg:py-16">
        <header className="mx-auto mb-12 max-w-[68ch]">
          {post.pinned && <p className="j-caps">Welcome</p>}
          <h1 className="text-[clamp(2.25rem,4vw,4rem)]">{post.title}</h1>
        </header>
        <PostBody body={post.body} />
        {(previous || next) && (
          <nav
            aria-label="More essays"
            className="j-prose mx-auto mt-16 grid gap-6 border-t border-hairline pt-8 sm:grid-cols-2"
          >
            <div>
              {previous && (
                <Link to="/blog/$slug" params={{ slug: previous.slug }} className="j-link">
                  ← {previous.title}
                </Link>
              )}
            </div>
            <div className="text-right">
              {next && (
                <Link to="/blog/$slug" params={{ slug: next.slug }} className="j-link">
                  {next.title} →
                </Link>
              )}
            </div>
          </nav>
        )}
      </article>
    </PageGrid>
  );
}
