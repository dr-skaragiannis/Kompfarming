import { useEffect, useRef, useState } from "react";
import type { Lang } from "./data/content";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ArticlePage from "./components/ArticlePage";
import Home from "./pages/Home";
import { AboutPage, ContactPage, KnowledgePage, ProductsPage, ServicesPage } from "./pages/Pages";
import { useSeo } from "./hooks/useSeo";
import { MPA, parseLocation, routePath, type Route } from "./router";

function initialLang(): Lang {
  if (typeof window === "undefined") return "el";
  const loc = parseLocation();
  if (loc.lang) return loc.lang; // multi-page: language comes from the URL folder
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q === "en" || q === "el") return q;
  return (localStorage.getItem("kf-lang") as Lang) || "el";
}

export default function App({ initialRoute, initialLang: initLang }: { initialRoute?: Route; initialLang?: Lang }) {
  const [lang, setLangState] = useState<Lang>(() => initLang ?? initialLang());
  const [route, setRoute] = useState<Route>(() => initialRoute ?? parseLocation().route);
  const firstRender = useRef(true);

  useSeo(route, lang);

  // Language switching: in multi-page mode navigate to the sibling page; otherwise switch state
  const setLang = (l: Lang) => {
    if (MPA) {
      window.location.href = routePath(route, l);
      return;
    }
    setLangState(l);
  };

  useEffect(() => {
    if (!MPA) localStorage.setItem("kf-lang", lang);
  }, [lang]);

  // Hash routing (single-file build only)
  useEffect(() => {
    if (MPA) return;
    const onHash = () => setRoute(parseLocation().route);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [route.page, route.page === "article" ? route.slug : ""]);

  const key = route.page === "article" ? `article-${route.slug}` : route.page;

  return (
    <div className="min-h-screen bg-paper">
      <Nav lang={lang} setLang={setLang} langHref={MPA ? (l) => routePath(route, l) : undefined} />
      <main key={key}>
        {route.page === "article" && <ArticlePage slug={route.slug} lang={lang} />}
        {route.page === "home" && <Home lang={lang} />}
        {route.page === "products" && <ProductsPage lang={lang} />}
        {route.page === "services" && <ServicesPage lang={lang} />}
        {route.page === "about" && <AboutPage lang={lang} />}
        {route.page === "knowledge" && <KnowledgePage lang={lang} />}
        {route.page === "contact" && <ContactPage lang={lang} />}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
