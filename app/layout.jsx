import "../src/index.css";
import "../src/App.css";
import { ThemeProvider } from "../src/context/ThemeContext";
import {
  SITE_URL,
  name,
  shortBio,
  tagline,
  siteTitle,
  keywords,
} from "../src/lib/site-config";

const description = `${shortBio} ${tagline}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: `%s | ${name}`,
  },
  description,
  keywords,
  authors: [{ name }],
  creator: name,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: name,
    locale: "en_US",
    title: siteTitle,
    description: tagline,
    // OG image generated at build time by app/opengraph-image.jsx,
    // overridden per-route by app/<route>/opengraph-image.jsx.
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: tagline,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-ft.png",
  },
  manifest: "/manifest.json",
  alternates: { canonical: SITE_URL },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const themeBootstrap = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var isDark = saved ? saved === 'dark' : false;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
