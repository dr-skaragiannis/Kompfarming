import { useEffect } from "react";
import { articles, type Lang } from "../data/content";
import { routeUrl, SITE, type Route } from "../router";

const OG_IMAGE = `${SITE}/og-image.jpg`;

export interface SeoData {
  title: string;
  desc: string;
  url: string;
  type: "website" | "article";
  jsonLd: object | null;
}

const meta: Record<string, Record<Lang, { title: string; desc: string }>> = {
  home: {
    el: {
      title: "KOMP Farming — Φακές Φαρσάλων, Όσπρια, Σιτηρά & Θεριζοαλωνισμοί | Κώστας Μπρέλλας",
      desc: "KOMP Farming – Κώστας Μπρέλλας, Άγιος Κωνσταντίνος Φαρσάλων. Φακές Φαρσάλων, σιτάρι, βίκος, ρεβίθια, κριθάρι, βρώμη. Θεριζοαλωνισμοί, ανάληψη καλλιέργειας και πώληση καθαρού σπόρου.",
    },
    en: {
      title: "KOMP Farming — Farsala Lentils, Pulses, Cereals & Harvesting | Kostas Brellas",
      desc: "KOMP Farming – Kostas Brellas, Agios Konstantinos, Farsala, Greece. Farsala lentils, wheat, vetch, chickpeas, barley, oats. Combine harvesting, contract farming and clean seed sales.",
    },
  },
  products: {
    el: {
      title: "Προϊόντα — Φακές Φαρσάλων, Σιτάρι, Βίκος, Ρεβίθια, Κριθάρι, Βρώμη | KOMP Farming",
      desc: "Πώληση καθαρού σπόρου και οσπρίων απευθείας από τον παραγωγό στα Φάρσαλα: φακές Φαρσάλων, σιτάρι, βίκος, ρεβίθια, κριθάρι και βρώμη.",
    },
    en: {
      title: "Products — Farsala Lentils, Wheat, Vetch, Chickpeas, Barley, Oats | KOMP Farming",
      desc: "Clean seed and pulses direct from the grower in Farsala, Thessaly: Farsala lentils, wheat, vetch, chickpeas, barley and oats.",
    },
  },
  services: {
    el: {
      title: "Θεριζοαλωνισμοί & Ανάληψη Καλλιέργειας στα Φάρσαλα | KOMP Farming",
      desc: "Θεριζοαλωνιστικές εργασίες (σιτάρι, κριθάρι, βίκος, φακή, ρεβίθια, τριφύλλι), ανάληψη κύκλου καλλιέργειας και πώληση σπόρου με εξοπλισμό Fendt & Amazone.",
    },
    en: {
      title: "Combine Harvesting & Contract Farming in Farsala | KOMP Farming",
      desc: "Harvesting services (wheat, barley, vetch, lentils, chickpeas, clover), full cultivation cycle and seed sales with Fendt & Amazone equipment.",
    },
  },
  about: {
    el: {
      title: "Κώστας Μπρέλλας — Σχετικά με το KOMP Farming, Άγιος Κωνσταντίνος Φαρσάλων",
      desc: "Ο Κώστας Μπρέλλας διευθύνει το KOMP Farming από το 2011. Πρόεδρος του Α.Σ. Δημητριακών & Οσπρίων Αγίου Κωνσταντίνου Φαρσάλων, με 19+ χρόνια εμπειρίας στη θεριζοαλωνιστική.",
    },
    en: {
      title: "Kostas Brellas — About KOMP Farming, Agios Konstantinos, Farsala",
      desc: "Kostas Brellas has run KOMP Farming since 2011. President of the Cereals & Pulses Cooperative of Agios Konstantinos, Farsala, with 19+ years as a combine operator.",
    },
  },
  knowledge: {
    el: {
      title: "Γνώση — Όσπρια & Διατροφή, Καλλιέργεια Βίκου, Κόστος Σιτηρών | KOMP Farming",
      desc: "Άρθρα από το χωράφι: διατροφική αξία οσπρίων, οδηγός καλλιέργειας βίκου και μέτρα μείωσης κόστους παραγωγής σιτηρών.",
    },
    en: {
      title: "Knowledge — Pulses & Nutrition, Growing Vetch, Cereal Costs | KOMP Farming",
      desc: "Field notes: nutritional value of pulses, a vetch cultivation guide and measures to reduce cereal production costs.",
    },
  },
  contact: {
    el: {
      title: "Επικοινωνία — KOMP Farming, Άγιος Κωνσταντίνος Φαρσάλων, Τηλ. 6977 594 071",
      desc: "Επικοινωνήστε με τον Κώστα Μπρέλλα για θεριζοαλωνισμό, ανάληψη καλλιέργειας ή αγορά σπόρου. Άγιος Κωνσταντίνος, Φάρσαλα 40300.",
    },
    en: {
      title: "Contact — KOMP Farming, Agios Konstantinos, Farsala, +30 6977 594 071",
      desc: "Contact Kostas Brellas for harvesting, contract farming or seed purchases. Agios Konstantinos, Farsala 40300, Thessaly, Greece.",
    },
  },
};

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) {
    const isLink = selector.startsWith("link");
    el = document.createElement(isLink ? "link" : "meta");
    const m = selector.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/);
    if (m) el.setAttribute(m[1], m[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function getSeo(route: Route, lang: Lang): SeoData {
  const url = routeUrl(route, lang);
  if (route.page === "article") {
    const a = articles.find((x) => x.slug === route.slug);
    const title = a ? `${a.title[lang]} | KOMP Farming` : "KOMP Farming";
    const desc = a ? a.excerpt[lang] : meta.home[lang].desc;
    const jsonLd = a
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title[lang],
          description: a.excerpt[lang],
          image: OG_IMAGE,
          inLanguage: lang,
          author: a.author
            ? { "@type": "Person", name: a.author[lang].split(" · ")[0] }
            : { "@type": "Organization", name: "KOMP Farming" },
          publisher: {
            "@type": "Organization",
            name: "KOMP Farming",
            logo: { "@type": "ImageObject", url: `${SITE}/icon-512.png` },
          },
          mainEntityOfPage: url,
          articleSection: a.tag[lang],
        }
      : null;
    return { title, desc, url, type: "article", jsonLd };
  }
  const m = meta[route.page] ?? meta.home;
  return { title: m[lang].title, desc: m[lang].desc, url, type: "website", jsonLd: null };
}

export function useSeo(route: Route, lang: Lang) {
  const slug = route.page === "article" ? route.slug : "";
  useEffect(() => {
    const { title, desc, url, type, jsonLd } = getSeo(route, lang);

    document.title = title;
    document.documentElement.lang = lang;
    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:locale"]', "content", lang === "el" ? "el_GR" : "en_US");
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", desc);
    setMeta('link[rel="canonical"]', "href", url);

    const id = "kf-route-jsonld";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.page, slug, lang]);
}
