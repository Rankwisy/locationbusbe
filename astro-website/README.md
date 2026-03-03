# LocationBus - Astro SSR Website

Server-side rendered (SSR) website for LocationBus, optimized for SEO and AEO (AI Engine Optimization).

## Features

- **Full SSR** – All pages rendered server-side; no client-side hydration for critical content
- **SEO Optimized** – Meta tags, Open Graph, canonical URLs, semantic HTML (H1/H2/H3)
- **JSON-LD Structured Data** – Organization, WebSite, LocalBusiness, FAQPage, Service schemas
- **Core Web Vitals** – Minimal CSS, no blocking resources, fast LCP
- **AEO Ready** – llms.txt for AI search engines (ChatGPT, Perplexity, Claude)
- **Crawlable** – Content in initial HTML; works without JavaScript

## Development

```bash
pnpm install
pnpm dev
```

## Build & Preview

```bash
pnpm build
pnpm preview
```

## Deployment

The site uses `@astrojs/node` in standalone mode. Deploy the `dist/` folder to any Node.js host (Vercel, Railway, Render, etc.).

## Pages & URLs

| Page | URL |
|------|-----|
| Home | `/` |
| Services | `/services/` |
| Airport Transfer | `/services/transfert-aeroport/` |
| Bus Transfer | `/services/transfert-bus/` |
| Europe Travel | `/services/voyage-europe/` |
| About | `/about/` |
| Contact | `/contact/` |

## SEO Files

- `/llms.txt` – AI crawler guide (ChatGPT, Perplexity)
- `/robots.txt` – Search engine crawler instructions
- `/sitemap-index.xml` – Sitemap (generated at build)
