# API Explorer (Next.js App Router) — GitHub Markdown CMS

This is a production-ready **SEO-first API discovery platform** where each API is a Markdown file with validated frontmatter.

## Content model

Content is stored in-repo (and can be edited via GitHub commits):

- `content/apis/[slug]/page.md`
- `content/apis/[slug]/openapi.(json|yaml|yml)` (optional; used for API docs section)
- `content/categories/[category].md`
- `content/top-lists/[slug].md` (optional / curated)

### API frontmatter schema (`content/apis/*.md`)

Required fields (validated with Zod at build/runtime):

- `title`
- `product_name`
- `category`
- `primary_keyword`
- `secondary_keywords` (array)
- `description`
- `pricing_free_tier` (boolean)
- `pricing_starting_from`
- `pricing_notes`
- `auth_type` (`api_key` | `oauth2` | `basic` | `bearer` | `session_cookie` | `none`)
- `rate_limits`
- `docs_url` (url)
- `pricing_url` (url)
- `alternatives` (array)
- `last_verified_date`
- `faq` (optional array of `{ q, a }`)

## Routes

- **API detail**: `/api-hub/[slug]`
- **Category**: `/api-hub/category/[category]`
- **Top X page**: `/api-hub/[category]/top-[x]-apis`
  - Implemented internally at `/api-hub/[category]/top/[x]` with a rewrite for the clean SEO URL (see `next.config.ts`).

## SEO features

- Dynamic metadata (`generateMetadata`)
- JSON-LD:
  - Breadcrumbs
  - `WebAPI`
  - `FAQPage` (when FAQ exists)
  - `ItemList` (category + top pages)
- `app/sitemap.ts` → `/sitemap.xml`
- `app/robots.ts` → `/robots.txt`

## ISR + webhook revalidation

All content pages use ISR (`export const revalidate = 3600`).

For **on-demand revalidation** (e.g. on GitHub commits), call:

- `POST /api/revalidate`

Provide the secret via:

- Header: `x-revalidate-secret: <secret>`
  - OR query param: `?secret=<secret>`

Body example:

```json
{
  "paths": ["/api-hub", "/api-hub/openai", "/api-hub/category/ai"],
  "tags": ["content", "apis", "categories"]
}
```

Environment variables:

- `REVALIDATE_SECRET`: required for `/api/revalidate`
- `NEXT_PUBLIC_SITE_URL`: used for canonical URLs and sitemap base

## CSV import (generate Markdown files)

To generate `content/apis/*.md` from a CSV:

```bash
npm run import:apis:csv -- ./data/apis.csv
```

See `scripts/import-apis-from-csv.ts` for expected columns.

## Dev

```bash
npm run dev
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
