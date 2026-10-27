// Module: archive.ts. Read generated static essay and travel metadata and lazy post bodies.
import records from "../generated/archive-index.json";

export type PostKind = "essay" | "travel";

export type PostSummary = {
  kind: PostKind;
  slug: string;
  title: string;
  date: string | null;
  archiveYear: number | null;
  pinned: boolean;
  category: string | null;
  categorySlug: string | null;
  tags: string[];
  description: string;
  cover: string | null;
  series: string | null;
  order: number | null;
  href: string;
  bodyFile: string;
  source: string | null;
  readingMinutes: number;
};

export type FullPost = PostSummary & { body: string };

const posts = records as PostSummary[];
const bodies = import.meta.glob<{ body: string }>("../generated/bodies/*.json", {
  import: "default",
});

export const essays = posts.filter((post) => post.kind === "essay");
export const datedEssays = essays.filter((post) => !post.pinned);
export const welcomePost = essays.find((post) => post.pinned);
export type EssayCategory = { slug: string; name: string; count: number };
export const essayCategories: EssayCategory[] = [
  ...new Map(
    essays
      .filter((post) => post.category && post.categorySlug)
      .map((post) => [post.categorySlug!, post.category!] as const),
  ),
]
  .map(([slug, name]) => ({
    slug,
    name,
    count: essays.filter((post) => post.categorySlug === slug).length,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));
export const travelPosts = posts
  .filter((post) => post.kind === "travel")
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

/** Find one post by kind and slug, loading its Markdown body only when needed. */
export async function getPost(kind: PostKind, slug: string): Promise<FullPost | undefined> {
  const summary = posts.find((post) => post.kind === kind && post.slug === slug);
  if (!summary) return undefined;
  const loader = bodies[`../generated/bodies/${summary.bodyFile}`];
  if (!loader) throw new Error(`Missing generated content for ${kind}/${slug}`);
  const content = await loader();
  return { ...summary, body: content.body };
}

/** Render an ISO date for the archive; pinned posts have no public date. */
export function formatDate(date: string | null): string {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date + "T12:00:00Z"));
}

/** Group dated essays under their original archive year, newest group first. */
export function essayYears(categorySlug?: string): Array<{ year: number; posts: PostSummary[] }> {
  const filtered = categorySlug
    ? datedEssays.filter((post) => post.categorySlug === categorySlug)
    : datedEssays;
  const years = [
    ...new Set(
      filtered.map((post) => post.archiveYear).filter((year): year is number => year != null),
    ),
  ].sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    posts: filtered.filter((post) => post.archiveYear === year),
  }));
}
