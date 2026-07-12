import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

// In dev, we include draft articles by default so they can be previewed
// locally with `npm run dev`. In prod, they are excluded from the list,
// the sitemap, and — crucially — from generateStaticParams, so any
// direct URL to a draft slug returns 404 (dynamicParams=false on the
// article route). Set `draft: true` in an article's frontmatter to hide it.
const isDev = process.env.NODE_ENV !== "production";

function readArticleFile(slug) {
  const fullPath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ? new Date(data.date).toISOString() : null,
    tags: data.tags ?? [],
    cover: data.cover ?? null,
    draft: Boolean(data.draft),
    content,
  };
}

// Returns every .mdx file's slug, including drafts. Use for tooling only.
// For anything user-facing (list pages, sitemap, generateStaticParams),
// use getPublishedArticleSlugs() so drafts get hidden in production.
export function getAllArticleSlugs() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

// Slugs that should be publicly reachable. Filters drafts in production.
export function getPublishedArticleSlugs() {
  return getAllArticles().map((a) => a.slug);
}

export function getAllArticles({ includeDrafts = isDev } = {}) {
  return getAllArticleSlugs()
    .map((slug) => readArticleFile(slug))
    .filter(Boolean)
    .filter((a) => includeDrafts || !a.draft)
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return b.date.localeCompare(a.date);
    });
}

export function getArticleBySlug(slug) {
  return readArticleFile(slug);
}
