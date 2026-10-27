import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, works, type Category } from "@/lib/content";
import { Figure } from "@/components/site/Figure";

type Search = { cat?: Category };

export const Route = createFileRoute("/works/")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const c = s.cat as Category | undefined;
    return c && (categories as readonly string[]).includes(c) ? { cat: c } : {};
  },
  head: () => ({
    meta: [
      { title: "Works — Jeanne Lupton" },
      { name: "description", content: "All works by Jeanne Lupton, filterable by buildings, houses, interiors and others." },
      { property: "og:title", content: "Works — Jeanne Lupton" },
      { property: "og:description", content: "Buildings, houses, interiors and others." },
    ],
  }),
  component: Works,
});

function Works() {
  const { cat } = Route.useSearch();
  const list = cat ? works.filter((w) => w.category === cat) : works;
  const filters: { label: string; cat?: Category }[] = [{ label: "All works" }, ...categories.map((c) => ({ label: c, cat: c }))];

  return (
    <section className="grid lg:grid-cols-12">
      <div className="py-8 lg:col-span-3 lg:py-16 lg:pl-[clamp(0px,4vw,72px)] 2xl:col-span-2">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:block lg:space-y-3">
          {filters.map((f) => {
            const active = f.cat === cat;
            return (
              <li key={f.label}>
                <Link
                  to="/works"
                  search={f.cat ? { cat: f.cat } : {}}
                  className={`j-caps text-[0.9375rem] transition-colors hover:text-active ${active ? "text-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {f.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid gap-x-[var(--j-cell)] gap-y-12 border-hairline pb-12 pt-2 sm:grid-cols-2 lg:col-span-9 lg:border-l lg:py-10 lg:pl-[var(--j-cell)] xl:grid-cols-3 2xl:col-span-10">
        {list.map((w) => (
          <Link key={w.slug} to="/works/$slug" params={{ slug: w.slug }} className="group block">
            <Figure img={w.cover} caption={w.title} ratio="4 / 5" />
          </Link>
        ))}
        {list.length === 0 && <p className="text-muted-foreground">No works in this category yet.</p>}
      </div>
    </section>
  );
}
