import { getAllArticles } from "../src/lib/articles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://friedrichtane.com";

export default function sitemap() {
  const articles = getAllArticles().map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articles,
  ];
}
