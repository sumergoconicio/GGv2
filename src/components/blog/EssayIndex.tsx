// Module: EssayIndex.tsx. Render the complete or category-filtered essay archive.
import { Link } from "@tanstack/react-router";
import {
  essayCategories,
  essayYears,
  formatDate,
  welcomePost,
  type EssayCategory,
} from "@/lib/archive";

/** Keep the original year groups while narrowing the index to one category. */
export function EssayIndex({ category }: { category?: EssayCategory }) {
  const groups = essayYears(category?.slug);
  const pinnedPost =
    !category || welcomePost?.categorySlug === category.slug ? welcomePost : undefined;
  return (
    <section className="grid lg:grid-cols-12">
      <aside className="j-meta border-b border-hairline py-10 lg:col-span-3 lg:border-b-0 lg:pr-[var(--j-cell)] lg:pt-16">
        {category ? (
          <>
            <p className="j-caps">Category</p>
            <h1 className="j-entry-title mt-3">{category.name}</h1>
          </>
        ) : (
          <h1 className="j-caps">Archive</h1>
        )}
        <p className="mt-5 max-w-[34ch]">
          {category
            ? `${category.count} ${category.count === 1 ? "post" : "posts"} in this category.`
            : "Writing on systems, design, science, culture and everything in between."}
        </p>
        {category && (
          <Link to="/blog" className="j-link mt-5 inline-block">
            ← All writing
          </Link>
        )}
        <nav aria-label="Essay years" className="mt-8">
          <p className="j-caps mb-3">Years</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:block lg:space-y-2">
            {groups.map(({ year }) => (
              <li key={year}>
                <a className="j-link j-meta-nav" href={`#year-${year}`}>
                  {year}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Essay categories" className="mt-10">
          <p className="j-caps mb-3">Categories</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {essayCategories.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/blog/category/$category"
                  params={{ category: item.slug }}
                  aria-current={category?.slug === item.slug ? "page" : undefined}
                  className={
                    category?.slug === item.slug ? "j-meta-nav text-active" : "j-link j-meta-nav"
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="min-w-0 lg:col-span-9 lg:border-l lg:border-hairline">
        {pinnedPost && (
          <article className="border-b border-hairline bg-[var(--j-field)] px-6 py-10 lg:px-[var(--j-cell)] lg:py-16">
            <p className="j-caps">Welcome</p>
            <h2 className="j-entry-title mt-4">
              <Link
                to="/blog/$slug"
                params={{ slug: pinnedPost.slug }}
                className="italic hover:text-active"
              >
                {pinnedPost.title}
              </Link>
            </h2>
            <p className="mt-6 max-w-[68ch]">
              <Link to="/blog/$slug" params={{ slug: pinnedPost.slug }} className="j-link">
                {pinnedPost.description}
              </Link>
            </p>
          </article>
        )}
        {groups.map(({ year, posts }) => (
          <section
            id={`year-${year}`}
            key={year}
            aria-labelledby={`heading-${year}`}
            className="border-b border-hairline"
          >
            <div className="grid border-b border-hairline px-6 py-5 lg:grid-cols-[1fr_auto] lg:px-[var(--j-cell)]">
              <h2 id={`heading-${year}`} className="j-year">
                {year}
              </h2>
              <p className="j-meta-small self-end text-muted-foreground">
                {posts.length} {posts.length === 1 ? "post" : "posts"}
              </p>
            </div>
            <div className="divide-y divide-hairline">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="grid gap-6 px-6 py-8 md:grid-cols-[8rem_minmax(0,1fr)] lg:px-[var(--j-cell)]"
                >
                  {post.cover ? (
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="relative block aspect-[4/3] overflow-hidden md:aspect-auto"
                    >
                      <img
                        src={post.cover}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </Link>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                  <div>
                    <p className="j-caps text-muted-foreground">
                      {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
                      {post.category && post.categorySlug && (
                        <>
                          {post.date && " · "}
                          <Link
                            to="/blog/category/$category"
                            params={{ category: post.categorySlug }}
                            className="break-words underline decoration-1 underline-offset-4 hover:text-active"
                          >
                            {post.category}
                          </Link>
                        </>
                      )}
                    </p>
                    <h3 className="j-entry-title mt-2">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="hover:text-active"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 max-w-[68ch]">{post.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
