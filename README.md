# 8-bit-swag

Minimal Agility-powered commerce site.

## Setup
1. Copy .env.example to .env and fill keys.
2. npm run dev

## Agility Setup

1. In Agility (`c79e58c2-u`), import `components.json` from this repo (Models, Containers, Components).
2. Create some `products` items; ensure slugs and images are set.
3. (Optional) Create `productCategories` and `sizes` list items.

## Environment

Copy `.env.example` to `.env` and set:

```
AGILITY_GUID=c79e58c2-u
AGILITY_API_FETCH_KEY=xxxxx
AGILITY_API_PREVIEW_KEY=xxxxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Run

```
npm run dev
```

- Products listing: `/products`
- Product details: `/products/[slug]`
- Cart: `/cart`

## Notes

- Uses `@agility/nextjs` for fetching. Caching and preview can be extended in `src/middleware.ts` and `src/lib/cms/client.ts`.
- Revalidate tags via `POST /api/revalidate` with `{ "tag": "<tag>" }`.
