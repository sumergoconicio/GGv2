import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { formatDate, getPost, posts, site } from "@/lib/content";
import { PageGrid } from "@/components/site/PageGrid";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Story not found — Jeanne Lupton" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.title} — Jeanne Lupton` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="py-24">
      <p>That story doesn't exist.</p>
      <Link to="/blog" className="j-link mt-4 inline-block">Back to the journal</Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const i = posts.findIndex((p) => p.slug === post.slug);
  const prev = posts[i + 1];
  const next = posts[i - 1];
  const [first, ...rest] = post.body;

  return (
    <PageGrid
      last
      rail={
        <div className="pt-10 lg:pt-16 lg:text-right">
          <time dateTime={post.date} className="font-display text-2xl font-semibold tracking-wide">{formatDate(post.date)}</time>
        </div>
      }
      aside={
        <dl className="flex gap-10 pb-10 text-[0.9375rem] lg:pl-[var(--j-cell)] xl:sticky xl:top-8 xl:flex-col xl:gap-6 xl:pt-16">
          <div><dt>Story by</dt><dd className="font-semibold">{site.name}</dd></div>
          <div><dt>Category</dt><dd className="font-semibold">{post.category}</dd></div>
          <div><dt>Discussion</dt><dd className="font-semibold">{post.comments} comments</dd></div>
        </dl>
      }
    >
      <article className="py-10 lg:px-[var(--j-cell)]">
        <img src={post.cover.src} alt={post.cover.alt} width={post.cover.w} height={post.cover.h} className="max-h-[80vh] w-full object-cover" />
        <div className="j-prose mx-auto mt-14">
          <h1 className="mb-8 text-[2.25rem]">{post.title}</h1>
          <p>{first}</p>
          {post.quote && <blockquote>{post.quote}</blockquote>}
          {rest.map((para, k) => <p key={k}>{para}</p>)}
        </div>
      </article>
      <nav aria-label="More stories" className="grid grid-cols-2 gap-6 border-t border-hairline py-8 lg:px-[var(--j-cell)]">
        {prev ? (
          <Link to="/blog/$slug" params={{ slug: prev.slug }} className="group flex min-w-0 items-center gap-5">
            <img src={prev.cover.src} alt="" className="size-20 shrink-0 object-cover" loading="lazy" />
            <span className="min-w-0">
              <span className="j-caps block text-muted-foreground">Previous</span>
              <span className="block truncate font-display text-xl font-semibold group-hover:text-active">{prev.title}</span>
            </span>
          </Link>
        ) : <span />}
        {next ? (
          <Link to="/blog/$slug" params={{ slug: next.slug }} className="group flex min-w-0 items-center justify-end gap-5 text-right">
            <span className="min-w-0">
              <span className="j-caps block text-muted-foreground">Next</span>
              <span className="block truncate font-display text-xl font-semibold group-hover:text-active">{next.title}</span>
            </span>
            <img src={next.cover.src} alt="" className="size-20 shrink-0 object-cover" loading="lazy" />
          </Link>
        ) : <span />}
      </nav>
    </PageGrid>
  );
}
