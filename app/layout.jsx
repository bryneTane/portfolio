import "../src/index.css";
import "../src/App.css";
import { ThemeProvider } from "../src/context/ThemeContext";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://friedrichtane.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Friedrich Tane | Full Stack Software Engineer",
    template: "%s | Friedrich Tane",
  },
  description:
    "Friedrich Tane is a full stack software engineer based in Paris. Portfolio, projects, and articles on web engineering, architecture, and shipping products.",
  keywords: [
    "Friedrich Tane",
    "Software Engineer",
    "Full Stack",
    "React",
    "Node.js",
    "TypeScript",
    "Paris",
    "Portfolio",
  ],
  authors: [{ name: "Friedrich Tane" }],
  creator: "Friedrich Tane",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Friedrich Tane",
    title: "Friedrich Tane | Full Stack Software Engineer",
    description:
      "Portfolio, projects, and articles on web engineering, architecture, and shipping products.",
    images: [{ url: "/ft.jpg", width: 1200, height: 630, alt: "Friedrich Tane" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Friedrich Tane | Full Stack Software Engineer",
    description:
      "Portfolio, projects, and articles on web engineering, architecture, and shipping products.",
    images: ["/ft.jpg"],
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
