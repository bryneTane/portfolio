import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

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

export function getAllArticleSlugs() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllArticles({ includeDrafts = false } = {}) {
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
