import { ImageResponse } from "next/og";
import {
  getPublishedArticleSlugs,
  getArticleBySlug,
} from "../../../src/lib/articles";
import {
  name,
  ogColors,
  ogColorsExplainer,
  SITE_DOMAIN,
} from "../../../src/lib/site-config";

export const alt = `Article on ${SITE_DOMAIN}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPublishedArticleSlugs().map((slug) => ({ slug }));
}

const TECH = {
  ...ogColors,
  label: "~/articles",
  badge: null,
};

const EXPLAINER = {
  ...ogColorsExplainer,
  label: "~/articles",
  badge: "EXPLAINER",
};

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Image({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const title = article?.title ?? "Article";
  const description = article?.description ?? "";
  const date = formatDate(article?.date);
  const isExplainer = article?.tags?.includes("explainer");
  const palette = isExplainer ? EXPLAINER : TECH;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: palette.bg,
        color: palette.text,
        padding: "72px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: palette.accent,
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        <div style={{ display: "flex" }}>{palette.label}</div>
        {palette.badge && (
          <div
            style={{
              display: "flex",
              background: palette.text,
              color: palette.bg,
              fontSize: 18,
              padding: "6px 14px",
              letterSpacing: "0.12em",
              fontWeight: 800,
            }}
          >
            {palette.badge}
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            color: palette.accent,
            fontSize: title.length > 60 ? 56 : 72,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: 1040,
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              display: "flex",
              color: palette.text,
              opacity: 0.85,
              fontSize: 26,
              lineHeight: 1.35,
              maxWidth: 1040,
            }}
          >
            {description.length > 180
              ? description.slice(0, 177) + "..."
              : description}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: palette.dim,
          fontSize: 22,
        }}
      >
        <div style={{ display: "flex" }}>
          {date ? `${date} · by ${name}` : `by ${name}`}
        </div>
        <div style={{ display: "flex", color: palette.accent }}>
          {SITE_DOMAIN}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
