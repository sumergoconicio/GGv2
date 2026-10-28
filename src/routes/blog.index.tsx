// Module: blog.index.tsx. Show the pinned welcome note and the complete essay archive.
import { createFileRoute } from "@tanstack/react-router";
import { EssayIndex } from "@/components/blog/EssayIndex";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Glyphs & Graphs" },
      {
        name: "description",
        content:
          "Writing on systems, design, science, culture and everything in between.",
      },
      { property: "og:title", content: "Blog — Glyphs & Graphs" },
    ],
  }),
  component: EssayIndex,
});
