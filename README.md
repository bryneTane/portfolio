# Portfolio

Personal site of Friedrich Tane. Built with [Next.js](https://nextjs.org) (App Router) and MDX for articles.

## Stack

- Next.js 15 (App Router, React Server Components)
- MDX for articles, with `gray-matter` frontmatter and `next-mdx-remote`
- Plain global CSS (terminal-inspired theme), no UI framework

## Project layout

```
app/
  layout.jsx           Root layout, global metadata, ThemeProvider
  page.jsx             Home page (portfolio sections)
  articles/
    page.jsx           Articles index
    [slug]/page.jsx    Article detail (statically generated)
  sitemap.js           /sitemap.xml
  robots.js            /robots.txt
content/
  articles/*.mdx       Article source files
src/
  components/          Portfolio sections (client/server mix)
  context/             ThemeContext provider
  lib/articles.js      MDX loader (fs + gray-matter)
public/                Static assets (images, favicon)
```

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Writing articles

Drop a new `.mdx` file in `content/articles/`. Frontmatter:

```mdx
---
title: "My article"
description: "One-line summary used for SEO and Open Graph."
date: "2026-05-24"
tags: ["nextjs", "engineering"]
draft: false
---

Markdown body with optional JSX...
```

The article appears automatically on `/articles` and `/articles/<slug>`, and is included in the sitemap.

**Drafts.** Set `draft: true` in the frontmatter to hide an article from production:

- Excluded from the `/articles` list, the "latest articles" widget on the home page, and the sitemap.
- Excluded from `generateStaticParams`, so no HTML gets built for it and the direct URL `/articles/<slug>` returns 404.
- Still visible in `npm run dev`, where drafts are included by default so you can preview them locally before flipping the flag.

Flip `draft: true` → `draft: false` (or remove the field) and redeploy to publish.

## Deployment

Designed for Vercel or any Node host. Set `NEXT_PUBLIC_SITE_URL` to the canonical site URL (used for absolute metadata, OG URLs, sitemap entries).
