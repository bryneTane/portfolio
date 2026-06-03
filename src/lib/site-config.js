/**
 * Single source of truth for personal-identity values used across the site:
 * name, role, employer, location, links, SEO keywords, OG image colors.
 *
 * Change a value here, redeploy, and every place that references it picks
 * up the new value: <title>, descriptions, OG images, JSON-LD, sitemap,
 * robots. Avoids hunting down hardcoded strings in 7 files.
 *
 * Pure data only - importable from both client and server (no fs, env, etc.
 * beyond NEXT_PUBLIC_*).
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ftane.com";

// "ftane.com" extracted from the SITE_URL for OG image footers, etc.
export const SITE_DOMAIN = SITE_URL.replace(/^https?:\/\//, "").replace(
  /\/$/,
  "",
);

// Person
export const name = "Friedrich Tane";

// Role
export const role = "Software Engineer";
export const roleQualifier = "Full Stack"; // displayed split-line in OG
export const jobTitle = `${roleQualifier} ${role}`; // "Full Stack Software Engineer"

// Current employer - the "change company" knob lives here
export const currentCompany = "TheFork";
export const currentCompanyHandle = `@${currentCompany}`;

// Location
export const city = "Paris";
export const country = "France";
export const countryCode = "FR";
export const location = `${city}, ${country}`;

// Composed strings used in OG image footer ("Paris, France · @TheFork")
export const locationLine = `${location} · ${currentCompanyHandle}`;

// Bio / tagline (used in <meta description>, JSON-LD, etc.)
export const shortBio = `${roleQualifier} software engineer based in ${city}. Works on customer-facing platforms at scale.`;
export const tagline =
  "Portfolio, projects, and articles on web engineering, architecture, and shipping products.";

// Articles section
export const articlesTagline =
  "Notes on engineering, architecture, and shipping.";

// Social / identity (used in Person JSON-LD `sameAs`)
export const sameAs = [
  "https://github.com/bryneTane",
  "https://www.linkedin.com/in/bryne-tane",
];

// Topics Google's knowledge graph uses for entity disambiguation
export const knowsAbout = [
  "Full Stack Engineering",
  "React",
  "Node.js",
  "TypeScript",
  "GraphQL",
  "PostgreSQL",
  "Microservices",
  "Frontend Performance",
];

// SEO keywords on the root <meta keywords>
export const keywords = [
  name,
  role,
  roleQualifier,
  "React",
  "Node.js",
  "TypeScript",
  city,
  "Portfolio",
];

// Composed defaults
export const siteTitle = `${name} | ${jobTitle}`;

// OG image palettes (kept here so brand colors stay consistent if you
// theme the site differently later)
export const ogColors = {
  bg: "#0a0a0a",
  accent: "#f68b48",
  text: "#c9d1d9",
  dim: "#6e6e6e",
};

export const ogColorsExplainer = {
  bg: "#1f1812",
  accent: "#fb923c",
  text: "#f5ead8",
  dim: "#a59986",
};

// Convenience aggregate (handy when something wants the whole object)
const siteConfig = {
  SITE_URL,
  SITE_DOMAIN,
  name,
  role,
  roleQualifier,
  jobTitle,
  currentCompany,
  currentCompanyHandle,
  city,
  country,
  countryCode,
  location,
  locationLine,
  shortBio,
  tagline,
  articlesTagline,
  sameAs,
  knowsAbout,
  keywords,
  siteTitle,
  ogColors,
  ogColorsExplainer,
};

export default siteConfig;
