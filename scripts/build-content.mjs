// Module: build-content.mjs. Generate the static post index, bodies, RSS, and sitemap.
import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import matter from "gray-matter";

const root = process.cwd();
const contentRoot = path.join(root, "content");
const generatedRoot = path.join(root, "src", "generated");
const bodiesRoot = path.join(generatedRoot, "bodies");
const siteUrl = "https://glyphsandgraphs.com";

/** Read Markdown paths below a content directory and return a sorted array. */
async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    const location = path.join(directory, entry.name);
    if (entry.isDirectory()) paths.push(...(await markdownFiles(location)));
    else if (entry.name.endsWith(".md")) paths.push(location);
  }
  return paths.sort();
}

/** Assert an imported or authored post has the fields required by the site. */
function validatePost(data, file, slugs) {
  const required = ["kind", "slug", "title", "description"];
  for (const key of required) {
    if (typeof data[key] !== "string" || !data[key].trim()) {
      throw new Error(`${file}: ${key} is required`);
    }
  }
  if (!["essay", "travel"].includes(data.kind)) throw new Error(`${file}: unknown kind`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug)) throw new Error(`${file}: invalid slug`);
  if (slugs.has(data.slug)) throw new Error(`${file}: duplicate slug ${data.slug}`);
  slugs.add(data.slug);
  if (data.kind === "essay" && !data.pinned && !/^\d{4}-\d{2}-\d{2}$/.test(data.date || "")) {
    throw new Error(`${file}: date must be YYYY-MM-DD`);
  }
  if (data.kind === "essay" && !data.pinned && !Number.isInteger(data.archiveYear)) {
    throw new Error(`${file}: essays need archiveYear`);
  }
  if (data.kind === "travel" && !Number.isInteger(data.order)) {
    throw new Error(`${file}: travel posts need order`);
  }
}

/** Escape XML text and attributes for the generated RSS feed. */
function xml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/** Turn a post metadata record into its public path. */
function href(post) {
  return post.kind === "travel" ? `/works/iae2017/${post.slug}` : `/blog/${post.slug}`;
}

/** Give each essay category a stable, readable route segment. */
function categorySlug(name) {
  return name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replaceAll("&", " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Build the content index and one lazy-loadable JSON body per post. */
async function build() {
  const files = await markdownFiles(contentRoot);
  const slugs = new Set();
  const categoryNames = new Map();
  const posts = [];
  await mkdir(bodiesRoot, { recursive: true });
  for (const file of files) {
    const raw = await readFile(file, "utf8");
    const parsed = matter(raw);
    const data = parsed.data;
    validatePost(data, file, slugs);
    const category = data.kind === "essay" ? String(data.category || "Essays").trim() : null;
    const categoryPath = category ? categorySlug(category) : null;
    if (category && !categoryPath) throw new Error(`${file}: category has no valid URL slug`);
    if (categoryPath) {
      const existing = categoryNames.get(categoryPath);
      if (existing && existing !== category) {
        throw new Error(`${file}: category URL conflicts with ${existing}`);
      }
      categoryNames.set(categoryPath, category);
    }
    const bodyFile = `${data.kind}-${data.slug}.json`;
    await writeFile(
      path.join(bodiesRoot, bodyFile),
      JSON.stringify({ body: parsed.content }) + "\n",
    );
    posts.push({
      kind: data.kind,
      slug: data.slug,
      title: data.title,
      date: data.date || null,
      archiveYear: data.archiveYear ?? null,
      pinned: Boolean(data.pinned),
      category,
      categorySlug: categoryPath,
      tags: data.tags || [],
      description: data.description,
      cover: data.cover || null,
      series: data.series || null,
      order: data.order ?? null,
      href: href(data),
      bodyFile,
      source: data.source || null,
      readingMinutes: Math.max(1, Math.round(parsed.content.split(/\s+/).length / 220)),
    });
  }
  posts.sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    if (a.kind !== b.kind) return a.kind === "essay" ? -1 : 1;
    if (a.kind === "travel") return (a.order ?? 0) - (b.order ?? 0);
    if (a.archiveYear !== b.archiveYear) return (b.archiveYear ?? 0) - (a.archiveYear ?? 0);
    return (b.date || "").localeCompare(a.date || "");
  });
  await writeFile(
    path.join(generatedRoot, "archive-index.json"),
    JSON.stringify(posts, null, 2) + "\n",
  );
  const published = posts
    .filter((post) => !post.pinned && post.date)
    .sort((a, b) => b.date.localeCompare(a.date));
  const rss = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0"><channel>',
    "<title>Glyphs &amp; Graphs</title>",
    `<link>${siteUrl}</link>`,
    "<description>Essays and journeys by Naveen Srivatsav.</description>",
    ...published.map((post) =>
      [
        "<item>",
        `<title>${xml(post.title)}</title>`,
        `<link>${siteUrl}${xml(post.href)}</link>`,
        `<guid>${siteUrl}${xml(post.href)}</guid>`,
        `<pubDate>${new Date(post.date + "T12:00:00Z").toUTCString()}</pubDate>`,
        `<description>${xml(post.description)}</description>`,
        "</item>",
      ].join(""),
    ),
    "</channel></rss>",
  ].join("\n");
  await writeFile(path.join(root, "public", "rss.xml"), rss + "\n");
  const categoryPaths = [...categoryNames.keys()].map((slug) => `/blog/category/${slug}`);
  const paths = [
    "/",
    "/about",
    "/blog",
    "/works/iae2017",
    "/works",
    ...categoryPaths,
    ...posts.map((post) => post.href),
  ];
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((route) => `<url><loc>${xml(siteUrl + route)}</loc></url>`),
    "</urlset>",
  ].join("\n");
  await writeFile(path.join(root, "public", "sitemap.xml"), sitemap + "\n");
  console.log(`Generated ${posts.length} posts, ${published.length} RSS entries.`);
}

await build();
