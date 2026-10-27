// Module: works.$slug.tsx. Show the Antarctica project at its Work slug.
import { createFileRoute, notFound } from "@tanstack/react-router";
import { JourneyLanding } from "@/components/blog/JourneyLanding";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    if (params.slug !== "iae2017") throw notFound();
  },
  head: ({ params }) =>
    params.slug === "iae2017"
      ? {
          meta: [
            { title: "International Antarctic Expedition 2017 — Glyphs & Graphs" },
            {
              name: "description",
              content: "Naveen Srivatsav's 2017 journey to Antarctica, told in eight parts.",
            },
            {
              property: "og:title",
              content: "International Antarctic Expedition 2017 — Glyphs & Graphs",
            },
          ],
          links: [{ rel: "canonical", href: "https://glyphsandgraphs.com/works/iae2017" }],
        }
      : {
          meta: [
            { title: "Work not found — Glyphs & Graphs" },
            { name: "robots", content: "noindex" },
          ],
        },
  component: JourneyLanding,
});
