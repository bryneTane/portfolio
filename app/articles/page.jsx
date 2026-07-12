import Link from "next/link";
import Header from "../../src/components/header";
import { getAllArticles } from "../../src/lib/articles";

export const metadata = {
  title: "Articles",
  description:
    "Writing on web engineering, system architecture, and the practice of shipping software.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Articles | Friedrich Tane",
    description:
      "Writing on web engineering, system architecture, and the practice of shipping software.",
    url: "/articles",
    type: "website",
  },
};

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ArticlesIndexPage() {
  const articles = getAllArticles();

  return (
    <div className="App">
      <Header />
      <section
        className="section"
        style={{ minHeight: "100vh", paddingTop: "120px" }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="section-title">ARTICLES</h1>
          <p className="section-subtitle">
            Notes on engineering, architecture, and shipping.
          </p>

          {articles.length === 0 ? (
            <div className="terminal-block">
              <div className="prompt">ls content/articles/</div>
              <div className="output" style={{ marginTop: "8px" }}>
                No articles yet. Drop an .mdx file in{" "}
                <code>content/articles/</code>.
              </div>
            </div>
          ) : (
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: "20px",
              }}
            >
              {articles.map((a) => {
                const isExplainer = a.tags?.includes("explainer");
                const visibleTags =
                  a.tags?.filter((t) => t !== "explainer") ?? [];
                return (
                  <li key={a.slug}>
                    <Link
                      href={`/articles/${a.slug}`}
                      className={
                        isExplainer ? "article-card-explainer" : "terminal-block"
                      }
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {(a.draft || isExplainer) && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                            marginBottom: "14px",
                          }}
                        >
                          {a.draft && (
                            <span className="article-draft-badge">Draft</span>
                          )}
                          {isExplainer && (
                            <span
                              className="article-card-badge"
                              style={{ marginBottom: 0 }}
                            >
                              Explainer
                            </span>
                          )}
                        </div>
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          gap: "16px",
                          marginBottom: "8px",
                        }}
                      >
                        <h2
                          style={{
                            color: isExplainer
                              ? "var(--fa-text)"
                              : "var(--term-orange)",
                            fontSize: "18px",
                            margin: 0,
                            minWidth: 0,
                            lineHeight: 1.3,
                          }}
                        >
                          {a.title}
                        </h2>
                        {a.date && (
                          <time
                            dateTime={a.date}
                            style={{
                              color: isExplainer
                                ? "var(--fa-dim)"
                                : "var(--term-text-dim)",
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {formatDate(a.date)}
                          </time>
                        )}
                      </div>
                      {a.description && (
                        <p
                          style={{
                            color: isExplainer
                              ? "var(--fa-text)"
                              : "var(--term-text)",
                            opacity: isExplainer ? 0.85 : 1,
                            fontSize: "13px",
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {a.description}
                        </p>
                      )}
                      {visibleTags.length > 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                            marginTop: "12px",
                          }}
                        >
                          {visibleTags.map((t) => (
                            <span
                              key={t}
                              className={
                                isExplainer ? "article-card-tag-fa" : "tag"
                              }
                              style={{ fontSize: "10px", padding: "3px 8px" }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
