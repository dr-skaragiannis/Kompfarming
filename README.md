# KOMP Farming

Corporate / farm website for [KOMP Farming](https://kompfarming.gr) — Kostas Brellas, Agios Konstantinos, Farsala, Thessaly, Greece.

`KOMP Farming` (Καρποί Γης / "Fruits of the Earth") grows, harvests and sells clean seed and legumes from the dry-farmed fields of the Farsala plain: **Farsala lentils, wheat, vetch, chickpeas, barley, oats, clover and rapeseed**. Services include combine harvesting (θεριζοαλωνισμοί) and full crop-cycle contract farming, using Fendt and Amazone equipment.

## Stack

- React 19 + TypeScript
- Vite (single-file mode) + Vite multi-page build
- Tailwind CSS 4
- Bilingual content layer (`el` / `en`) with typed data in `src/data/content.ts`

## Pages

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

Each page is fully pre-rendered with per-page `<title>`, meta description, canonical, hreflang, Open Graph / Twitter tags and JSON-LD. React hydrates on load.

## Development

```bash
npm install
npm run dev
```

## Build

Two output modes share the same React source (see `BUILD.md`):

- **Multi-page** (recommended for production, `kompfarming.gr`):

  ```bash
  node scripts/build-pages.mjs
  ```

  Produces `dist/` with 18 pre-rendered HTML pages plus one shared bundle, and copies `sitemap.xml`, `robots.txt`, `og-image.jpg`, icons and `site.webmanifest` alongside.

- **Single self-contained file** (offline preview / e-mailing):

  ```bash
  npm run build
  ```

  Produces one `dist/index.html` with everything inlined, using hash-based routing.

## Contact

Kostas Brellas · Agios Konstantinos, Farsala 40300 · +30 6977 594 071 · kos.brellas@gmail.com

[Facebook](https://www.facebook.com/pages/Kompfarming-%CE%9A%CE%B1%CF%81%CF%80%CE%BF%CE%AF-%CE%93%CE%AE%CF%82/361130017379958) · [YouTube](https://www.youtube.com/channel/UCxhszoUanLRcnHObij9w_Bw) · [LinkedIn](https://www.linkedin.com/in/kostas-brellas-195a1b112/)