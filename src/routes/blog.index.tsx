// Module: blog.index.tsx. Show the pinned welcome note and the complete essay archive.
import { createFileRoute } from "@tanstack/react-router";
import { EssayIndex } from "@/components/blog/EssayIndex";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Essays — Glyphs & Graphs" },
      {
        name: "description",
        content:
          "Essays and observations by Naveen Srivatsav, arranged in their original archive years.",
      },
      { property: "og:title", content: "Essays — Glyphs & Graphs" },
    ],
  }),
  component: EssayIndex,
});
