import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: { dark: "github-dark-dimmed", light: "github-light" },
  keepBackground: false,
  defaultLang: "plaintext",
};

const mdxComponents = {
  table: (props) => (
    <div className="article-prose-table-wrap">
      <table {...props} />
    </div>
  ),
};
import Header from "../../../src/components/header";
import {
  getPublishedArticleSlugs,
  getArticleBySlug,
} from "../../../src/lib/articles";
import { SITE_URL, name as authorName } from "../../../src/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const url = `/articles/${article.slug}`;
  const og = {
    type: "article",
    title: article.title,
    description: article.description,
    url,
    publishedTime: article.date ?? undefined,
    tags: article.tags,
  };
  const tw = {
    card: "summary_large_image",
    title: article.title,
    description: article.description,
  };
  // Only set images explicitly when a manual cover is provided; otherwise
  // let Next auto-inject the per-route opengraph-image.jsx output.
  if (article.cover) {
    og.images = [{ url: article.cover }];
    tw.images = [article.cover];
  }
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: og,
    twitter: tw,
  };
}

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleUrl = `${SITE_URL}/articles/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date ?? undefined,
    author: {
      "@type": "Person",
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: authorName,
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    keywords: article.tags?.join(", "),
    image: article.cover ? article.cover : `${articleUrl}/opengraph-image`,
    inLanguage: "en",
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: `${SITE_URL}/articles`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <div className="App">
      <Header />
      <article
        className="section"
        style={{ minHeight: "100vh", paddingTop: "120px" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbsJsonLd),
          }}
        />
        <div className="container" style={{ maxWidth: "760px" }}>
          <div style={{ marginBottom: "24px" }}>
            <Link
              href="/articles"
              style={{
                color: "var(--term-text-dim)",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              ← all articles
            </Link>
          </div>

          <header style={{ marginBottom: "40px" }}>
            {article.draft && (
              <div style={{ marginBottom: "16px" }}>
                <span className="article-draft-badge">Draft (dev only)</span>
              </div>
            )}
            <h1
              style={{
                color: "var(--term-orange)",
                fontSize: "32px",
                lineHeight: 1.2,
                marginBottom: "12px",
              }}
            >
              {article.title}
            </h1>
            {article.date && (
              <time
                dateTime={article.date}
                style={{ color: "var(--term-text-dim)", fontSize: "13px" }}
              >
                {formatDate(article.date)}
              </time>
            )}
            {article.tags?.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginTop: "16px",
                }}
              >
                {article.tags.map((t) => (
                  <span key={t} className="tag" style={{ fontSize: "10px" }}>
                    {t}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="article-prose">
            <MDXRemote
              source={article.content}
              components={mdxComponents}
              options={{
                // Personal blog: every article is authored by me, so the
                // default `blockJS: true` (which strips JSX attribute
                // expressions like `style={{...}}`) is unnecessary
                // hardening. Disabling it lets inline JSX visuals render.
                blockJS: false,
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, prettyCodeOptions],
                  ],
                },
              }}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
