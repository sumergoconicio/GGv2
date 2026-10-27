import { createFileRoute, Link } from "@tanstack/react-router";
import { works } from "@/lib/content";
import { Figure } from "@/components/site/Figure";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeanne Lupton — Architectural photographer" },
      { name: "description", content: "Featured works by Jeanne Lupton: buildings, houses and interiors photographed in quiet light." },
      { property: "og:title", content: "Jeanne Lupton — Architectural photographer" },
      { property: "og:description", content: "Featured works: buildings, houses and interiors photographed in quiet light." },
    ],
  }),
  component: Home,
});

function WorkTile({ i, ratio, eager }: { i: number; ratio?: string; eager?: boolean }) {
  const w = works[i];
  return (
    <Link to="/works/$slug" params={{ slug: w.slug }} className="group block">
      <Figure img={w.cover} caption={w.title} ratio={ratio} eager={eager} />
    </Link>
  );
}

function Home() {
  return (
    <section className="grid lg:grid-cols-12">
      <div className="lg:col-span-4 2xl:col-span-3">
        <div className="border-b border-hairline py-10 lg:py-16 lg:pl-[clamp(0px,5vw,120px)] lg:pr-[var(--j-cell)]">
          <h1 className="text-[1.75rem]">Featured works</h1>
          <p className="mt-5 max-w-[34ch]">
            Buildings, houses and interiors photographed in flat, patient light. Commissions for architects,
            museums and the occasional quiet house.
          </p>
          <p className="mt-5 max-w-[34ch]">
            Based in Rotterdam, working across Europe since 2016.
          </p>
          <Link to="/works" className="j-link mt-7 inline-block">View more works</Link>
        </div>
      </div>

      <div className="grid gap-y-10 border-hairline py-10 lg:col-span-8 lg:border-l lg:pl-[var(--j-cell)] 2xl:col-span-9">
        <WorkTile i={0} eager />
        <div className="grid gap-x-[var(--j-cell)] gap-y-10 md:grid-cols-[2fr_1fr]">
          <WorkTile i={1} ratio="3 / 2.6" />
          <WorkTile i={2} ratio="1 / 1.85" />
        </div>
        <div className="grid gap-x-[var(--j-cell)] gap-y-10 md:grid-cols-3">
          <WorkTile i={4} ratio="2 / 3" />
          <WorkTile i={3} ratio="2 / 3" />
          <WorkTile i={5} ratio="2 / 3" />
        </div>
      </div>
    </section>
  );
}
