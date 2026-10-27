import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getWork, works } from "@/lib/content";
import { Figure } from "@/components/site/Figure";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const work = getWork(params.slug);
    if (!work) throw notFound();
    return { work };
  },
  head: ({ loaderData }) => {
    const w = loaderData?.work;
    if (!w) return { meta: [{ title: "Work not found — Jeanne Lupton" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${w.title} — Jeanne Lupton` },
        { name: "description", content: w.summary },
        { property: "og:title", content: `${w.title} — Jeanne Lupton` },
        { property: "og:description", content: w.summary },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="py-24">
      <p>That work doesn't exist.</p>
      <Link to="/works" className="j-link mt-4 inline-block">Back to works</Link>
    </div>
  ),
  component: WorkPage,
});

function WorkPage() {
  const { work } = Route.useLoaderData();
  const idx = works.findIndex((w) => w.slug === work.slug);
  const next = works[(idx + 1) % works.length]!;

  return (
    <section className="grid lg:grid-cols-12">
      <div className="lg:col-span-3" />
      <div className="min-w-0 border-hairline lg:col-span-9 lg:border-l">
        <div className="grid border-b border-hairline xl:grid-cols-9">
          <div className="py-10 lg:px-[var(--j-cell)] lg:py-16 xl:col-span-7 xl:border-r xl:border-hairline xl:pl-[clamp(24px,6vw,120px)]">
            <h1 className="text-[2rem]">{work.title}</h1>
            <p className="mt-6 max-w-[68ch]">{work.summary}</p>
          </div>
          <dl className="grid grid-cols-3 gap-4 pb-10 text-[0.9375rem] lg:px-[var(--j-cell)] xl:col-span-2 xl:block xl:space-y-5 xl:py-16">
            <div><dt className="text-muted-foreground">Category</dt><dd className="font-semibold">{work.category}</dd></div>
            <div><dt className="text-muted-foreground">Location</dt><dd className="font-semibold">{work.location}</dd></div>
            <div><dt className="text-muted-foreground">Year</dt><dd className="font-semibold">{work.year}</dd></div>
          </dl>
        </div>
        <div className="grid gap-10 py-10 lg:pl-[var(--j-cell)]">
          <Figure img={work.cover} eager />
          {work.gallery.map((g, i) => (
            <Figure key={i} img={g} />
          ))}
        </div>
        <div className="flex items-baseline justify-between gap-4 border-t border-hairline py-8 lg:pl-[var(--j-cell)]">
          <Link to="/works" className="j-link">All works</Link>
          <Link to="/works/$slug" params={{ slug: next.slug }} className="text-right">
            <span className="j-caps block text-muted-foreground">Next</span>
            <span className="font-display text-xl font-semibold hover:text-active">{next.title}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
