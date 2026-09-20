#!/usr/bin/env node
/**
 * Multi-page build:
 *   1. Client build (shared JS/CSS/images/fonts in dist/assets)
 *   2. SSR build of src/entry-server.tsx
 *   3. Pre-render every route × language into its own HTML file
 *   4. Generate sitemap.xml with the real page URLs
 *
 * Usage:  node scripts/build-pages.mjs
 */
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");
const dist = join(root, "dist");
const ssrDir = join(root, ".ssr-tmp");
const SITE = "https://kompfarming.gr";
const env = { ...process.env, VITE_MPA: "1" };
const run = (cmd) => execSync(cmd, { cwd: root, stdio: "inherit", env });

// Make sure binary assets exist (fonts/icons) before building
if (existsSync(join(root, "scripts/restore-assets.sh"))) {
  try {
    run("bash scripts/restore-assets.sh");
  } catch {
    /* non-fatal */
  }
}

console.log("\n▶ 1/3 Client build");
run("npx vite build --config vite.pages.config.ts");

console.log("\n▶ 2/3 SSR build");
run("npx vite build --config vite.pages.config.ts --ssr src/entry-server.tsx");

console.log("\n▶ 3/3 Pre-rendering pages");
const { render, routes, langs } = await import(pathToFileURL(join(ssrDir, "entry-server.mjs")).href);
const template = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const pageUrl = (path) => SITE + path;

function buildPage(route, lang) {
  const { html, seo, path, file: outFile } = render(route, lang);
  const other = lang === "el" ? "en" : "el";
  const otherPath = render(route, other).path;
  const urlEl = pageUrl(lang === "el" ? path : otherPath);
  const urlEn = pageUrl(lang === "en" ? path : otherPath);

  let out = template;

  // <html lang>
  out = out.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
  // Title & description
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`);
  out = out.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${esc(seo.desc)}$2`);
  // Canonical + hreflang
  out = out.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${seo.url}" />`);
  out = out.replace(/<link rel="alternate" hreflang="el" href="[^"]*" \/>/, `<link rel="alternate" hreflang="el" href="${urlEl}" />`);
  out = out.replace(/<link rel="alternate" hreflang="en" href="[^"]*" \/>/, `<link rel="alternate" hreflang="en" href="${urlEn}" />`);
  out = out.replace(/<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/, `<link rel="alternate" hreflang="x-default" href="${urlEl}" />`);
  // Open Graph / Twitter
  const setProp = (prop, val) =>
    (out = out.replace(new RegExp(`(<meta property="${prop}" content=")[^"]*(")`), `$1${esc(val)}$2`));
  const setName = (name, val) =>
    (out = out.replace(new RegExp(`(<meta\\s+name="${name}"\\s+content=")[^"]*(")`), `$1${esc(val)}$2`));
  setProp("og:type", seo.type);
  setProp("og:url", seo.url);
  setProp("og:title", seo.title);
  setProp("og:description", seo.desc);
  setProp("og:locale", lang === "el" ? "el_GR" : "en_US");
  setProp("og:locale:alternate", lang === "el" ? "en_US" : "el_GR");
  setName("twitter:title", seo.title);
  setName("twitter:description", seo.desc);
  // Rewrite hash URLs inside the static JSON-LD (breadcrumbs) to real pages
  out = out.replace(/https:\/\/kompfarming\.gr\/#\/article\/([a-z0-9-]+)/g, `${SITE}/article-$1.html`);
  out = out.replace(/https:\/\/kompfarming\.gr\/#\/([a-z]+)/g, `${SITE}/$1.html`);
  // Per-page Article JSON-LD
  if (seo.jsonLd) {
    out = out.replace(
      "</head>",
      `    <script type="application/ld+json" id="kf-route-jsonld">${JSON.stringify(seo.jsonLd)}</script>\n  </head>`,
    );
  }
  // Pre-rendered markup
  out = out.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const file = join(dist, outFile);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, out);
  return { path, file: outFile, url: seo.url, urlEl, urlEn, route };
}

const written = [];
for (const route of routes) for (const lang of langs) written.push(buildPage(route, lang));

// Sitemap with real URLs + hreflang alternates
const today = new Date().toISOString().slice(0, 10);
const prio = (r) => (r.page === "home" ? "1.0" : r.page === "article" ? "0.6" : r.page === "about" ? "0.7" : "0.9");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${written
  .map(
    (p) => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${prio(p.route)}</priority>
    <xhtml:link rel="alternate" hreflang="el" href="${p.urlEl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${p.urlEn}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${p.urlEl}"/>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);

rmSync(ssrDir, { recursive: true, force: true });
// Raw originals from public/images are already emitted as hashed assets — drop the duplicates
rmSync(join(dist, "images"), { recursive: true, force: true });

console.log(`\n✔ Generated ${written.length} pages:`);
for (const p of written) console.log("   dist" + p.file + "  →  " + p.url);
