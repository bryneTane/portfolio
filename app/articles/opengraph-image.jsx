import { ImageResponse } from "next/og";
import {
  name,
  articlesTagline,
  ogColors,
  SITE_DOMAIN,
} from "../../src/lib/site-config";

export const alt = `Articles by ${name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = ogColors.bg;
const ORANGE = ogColors.accent;
const TEXT = ogColors.text;
const DIM = ogColors.dim;

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: BG,
        color: TEXT,
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
          color: ORANGE,
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        ~/articles
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            display: "flex",
            color: TEXT,
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          Articles
        </div>
        <div
          style={{
            display: "flex",
            color: DIM,
            fontSize: 30,
            lineHeight: 1.3,
            maxWidth: 900,
          }}
        >
          {articlesTagline}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: DIM,
          fontSize: 24,
        }}
      >
        <div style={{ display: "flex" }}>by {name}</div>
        <div style={{ display: "flex", color: ORANGE }}>{SITE_DOMAIN}</div>
      </div>
    </div>,
    { ...size },
  );
}
