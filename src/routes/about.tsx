import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/content";
import { Figure } from "@/components/site/Figure";
import { PageGrid } from "@/components/site/PageGrid";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jeanne Lupton" },
      { name: "description", content: "Jeanne Lupton photographs architecture for the people who build it." },
      { property: "og:title", content: "About Jeanne Lupton" },
      { property: "og:description", content: "An architectural photographer working across Europe from Rotterdam." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageGrid last>
      <div className="py-10 lg:px-[var(--j-cell)]">
        <Figure img={images.portrait} eager />
        <div className="j-prose mx-auto mt-14 lg:mt-20">
          <h1 className="mb-8 text-[2rem]">About Jeanne</h1>
          <p>
            I photograph architecture for the people who build it. Most of my work is commissioned by
            architects and museums who want their buildings shown the way they were drawn: calm, exact and
            a little empty.
          </p>
          <p>
            I studied architecture in Delft before I picked up a camera seriously. That training still
            shapes every frame. I look for the grid first, then the light, then the one thing that breaks
            them both.
          </p>
          <p>
            When I am not on a commission I travel slowly, walk a lot and photograph houses that nobody asked
            me to. Some of those end up here, in the journal.
          </p>
          <p>I hope you enjoy the work as much as I enjoyed making it.</p>
        </div>
        <div className="j-prose mx-auto mt-12 text-right">
          <p className="font-script text-6xl leading-none">Jeanne L.</p>
          <p className="mt-2 font-semibold italic">09.09.2026 — Rotterdam</p>
        </div>
      </div>
    </PageGrid>
  );
}
