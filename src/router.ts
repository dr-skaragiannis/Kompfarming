import type { Lang } from "./data/content";

export type Page = "home" | "products" | "services" | "about" | "knowledge" | "contact";
export type Route = { page: Page } | { page: "article"; slug: string };

export const SITE = "https://kompfarming.gr";
export const pages: Page[] = ["home", "products", "services", "about", "knowledge", "contact"];

/** Multi-page mode: real .html files per route (set VITE_MPA=1 at build time). */
export const MPA = import.meta.env.VITE_MPA === "1";

export function parseTarget(target: string): Route {
  if (target.startsWith("article/")) return { page: "article", slug: target.slice(8) };
  if ((pages as string[]).includes(target)) return { page: target as Page };
  return { page: "home" };
}

/** File name of a route inside its language folder, e.g. "products.html". */
export function routeFile(route: Route): string {
  if (route.page === "article") return `article-${route.slug}.html`;
  return route.page === "home" ? "index.html" : `${route.page}.html`;
}

/** Root-relative output file of a page, e.g. "/en/products.html" (home → ".../index.html"). */
export function routeOutFile(route: Route, lang: Lang): string {
  return `/${lang === "en" ? "en/" : ""}${routeFile(route)}`;
}

/** Root-relative URL of a page, e.g. "/en/products.html" (home → "/" or "/en/"). */
export function routePath(route: Route, lang: Lang): string {
  const f = routeOutFile(route, lang);
  return f.endsWith("/index.html") ? f.slice(0, -"index.html".length) : f;
}

/** Build an href for use in <a>. */
export function to(target: string | Route, lang: Lang): string {
  const route = typeof target === "string" ? parseTarget(target) : target;
  if (MPA) return routePath(route, lang);
  if (route.page === "article") return `#/article/${route.slug}`;
  return route.page === "home" ? "#/" : `#/${route.page}`;
}

/** Absolute canonical URL for SEO. */
export function routeUrl(route: Route, lang: Lang): string {
  if (MPA) return SITE + routePath(route, lang);
  const hash = route.page === "article" ? `#/article/${route.slug}` : route.page === "home" ? "" : `#/${route.page}`;
  const q = lang === "en" ? "?lang=en" : "";
  return `${SITE}/${q}${hash}`;
}

/** Parse the current browser location into a route (+ lang in MPA mode). */
export function parseLocation(): { route: Route; lang?: Lang } {
  if (typeof window === "undefined") return { route: { page: "home" } };

  if (MPA) {
    let p = window.location.pathname.replace(/^\/+/, "");
    let lang: Lang = "el";
    if (p === "en" || p.startsWith("en/")) {
      lang = "en";
      p = p.slice(2).replace(/^\/+/, "");
    }
    p = p.replace(/\.html$/, "");
    if (p === "" || p === "index") return { route: { page: "home" }, lang };
    if (p.startsWith("article-")) return { route: { page: "article", slug: p.slice(8) }, lang };
    if ((pages as string[]).includes(p)) return { route: { page: p as Page }, lang };
    return { route: { page: "home" }, lang };
  }

  const h = window.location.hash.replace(/^#\/?/, "").replace(/^#/, "").replace(/\/$/, "");
  return { route: parseTarget(h) };
}
