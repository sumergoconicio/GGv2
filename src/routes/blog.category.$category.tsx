// Module: blog.category.$category.tsx. Show a static essay index for one category.
import { createFileRoute, notFound } from "@tanstack/react-router";
import { EssayIndex } from "@/components/blog/EssayIndex";
import { essayCategories } from "@/lib/archive";

export const Route = createFileRoute("/blog/category/$category")({
  loader: ({ params }) => {
    const category = essayCategories.find((item) => item.slug === params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const category = loaderData?.category;
    if (!category) return { meta: [{ title: "Category not found — Glyphs & Graphs" }] };
    return {
      meta: [
        { title: `${category.name} — Glyphs & Graphs` },
        {
          name: "description",
          content: `${category.count} ${category.count === 1 ? "essay" : "essays"} in ${category.name} by Naveen Srivatsav.`,
        },
        { property: "og:title", content: `${category.name} — Glyphs & Graphs` },
      ],
      links: [
        { rel: "canonical", href: `https://glyphsandgraphs.com/blog/category/${category.slug}` },
      ],
    };
  },
  component: CategoryPage,
});

/** Render only essays in the requested archive category. */
function CategoryPage() {
  const { category } = Route.useLoaderData();
  return <EssayIndex category={category} />;
}
