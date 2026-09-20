# KOMP Farming — build guide

Two output modes share the same React source.

## 1. Multi-page website (recommended for kompfarming.gr)

```bash
node scripts/build-pages.mjs
```

Produces `dist/` with **18 pre-rendered HTML pages** (Greek at the root, English under `/en/`)
plus one shared bundle in `dist/assets/` (JS, CSS with embedded fonts, hashed images):

| Greek | English |
|---|---|
| `index.html` | `en/index.html` |
| `products.html` | `en/products.html` |
| `services.html` | `en/services.html` |
| `about.html` | `en/about.html` |
| `knowledge.html` | `en/knowledge.html` |
| `contact.html` | `en/contact.html` |
| `article-ospria-diatrofi.html` | `en/article-ospria-diatrofi.html` |
| `article-vikos.html` | `en/article-vikos.html` |
| `article-meiosi-kostous.html` | `en/article-meiosi-kostous.html` |

Each page ships with its own `<title>`, description, canonical, hreflang, Open Graph /
Twitter tags and JSON-LD, and the full markup is pre-rendered (React hydrates on load).
`sitemap.xml`, `robots.txt`, `og-image.jpg`, icons and `site.webmanifest` are copied alongside.

Deploy the contents of `dist/` to the web root of the server.

## 2. Single self-contained file

```bash
npm run build
```

Produces one `dist/index.html` with everything (JS, CSS, fonts, images) inlined, using
hash-based routing (`#/products`, …). Handy for previewing offline or e-mailing.

## Notes

- `scripts/restore-assets.sh` regenerates derived binaries (embedded fonts CSS, PNG icons,
  1200×630 OG image). It runs automatically inside `build-pages.mjs`; run it manually before
  `npm run build` if `src/assets/fonts.css` is missing.
- Source photos live in `public/images/` and are imported through `src/assets/images.ts`.
- `vite.pages.config.ts` holds the multi-page configuration; `vite.config.ts` is untouched.
