// Module: vite.config.ts. Prerender every public route as static HTML.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import posts from "./src/generated/archive-index.json";

const categories = [
  ...new Set(
    posts
      .filter((post) => post.kind === "essay")
      .map((post) => post.categorySlug)
      .filter(Boolean),
  ),
];
const routes = [
  "/",
  "/about",
  "/blog",
  "/works/iae2017",
  "/works",
  ...categories.map((slug) => `/blog/category/${slug}`),
  ...posts.map((post) => post.href),
];

export default defineConfig({
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    pages: routes.map((path) => ({ path })),
    prerender: { enabled: true, crawlLinks: false, concurrency: 4 },
  },
});
