/**
 * Server entry used by scripts/build-pages.mjs to pre-render every route
 * into its own static HTML file (multi-page build).
 */
import { renderToString } from "react-dom/server";
import App from "./App";
import { articles, type Lang } from "./data/content";
import { getSeo, type SeoData } from "./hooks/useSeo";
import { pages, routeOutFile, routePath, type Route } from "./router";

export const langs: Lang[] = ["el", "en"];

export const routes: Route[] = [
  ...pages.map((page) => ({ page }) as Route),
  ...articles.map((a) => ({ page: "article", slug: a.slug }) as Route),
];

export function render(route: Route, lang: Lang): { html: string; seo: SeoData; path: string; file: string } {
  const html = renderToString(<App initialRoute={route} initialLang={lang} />);
  return { html, seo: getSeo(route, lang), path: routePath(route, lang), file: routeOutFile(route, lang) };
}

export { routePath, routeOutFile };
