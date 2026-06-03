import { ImageResponse } from "next/og";
import {
  name,
  role,
  roleQualifier,
  locationLine,
  ogColors,
  SITE_DOMAIN,
  siteTitle,
} from "../src/lib/site-config";

export const alt = siteTitle;
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
        ~/ {name.toUpperCase()}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            display: "flex",
            color: ORANGE,
            fontSize: 90,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {roleQualifier}
        </div>
        <div
          style={{
            display: "flex",
            color: TEXT,
            fontSize: 90,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {role}
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
        <div style={{ display: "flex" }}>{locationLine}</div>
        <div style={{ display: "flex", color: ORANGE }}>{SITE_DOMAIN}</div>
      </div>
    </div>,
    { ...size },
  );
}
