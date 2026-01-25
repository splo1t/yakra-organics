# Yakra.lk (Frontend-only)

A sleek, premium, e-commerce-style frontend for **Yakra.lk** (Yakra Organics + Yakra Glamp).

## Tech

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev
```

## Update brand images (easy swap)

- Hero image path is configured in: `src/data/siteConfig.ts` (`heroImage`)
- Replace the file in `public/media/` and update the filename in `siteConfig.ts`.

## Product data (no database yet)

All products are stored in code:

- `src/data/products.ts`

Each product includes:

- `id`, `slug`, `name`, `category`
- `tags` (used for search)
- `shortDescription`, `description`
- `images` (paths under `public/`)
- `priceLkr` (optional)
- `usage`, `storage`, `shelfLife`

To add images, place files under `public/products/<slug>/...` and reference them in `images`.

## Pages

- `/` Home
- `/organics` Product listing + search
- `/organics/[slug]` Dynamic product page (generated from code data)
- `/glamp` Coming soon
- `/about` About
- `/contact` Contact + inquiry form
