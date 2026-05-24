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
import { getAllArticleSlugs, getArticleBySlug } from "../../../src/lib/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const url = `/articles/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      publishedTime: article.date ?? undefined,
      tags: article.tags,
      images: article.cover ? [{ url: article.cover }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: article.cover ? [article.cover] : undefined,
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date ?? undefined,
    author: { "@type": "Person", name: "Friedrich Tane" },
    keywords: article.tags?.join(", "),
    image: article.cover ?? undefined,
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
