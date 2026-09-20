import { ui, type Lang } from "../data/content";
import PageHero from "../components/PageHero";
import Products from "../components/Products";
import Services from "../components/Services";
import Tech from "../components/Tech";
import About from "../components/About";
import Knowledge from "../components/Knowledge";
import Contact from "../components/Contact";

export function ProductsPage({ lang }: { lang: Lang }) {
  const p = ui.pages.products;
  return (
    <>
      <PageHero eyebrow="KOMP Farming" title={p.title[lang]} sub={p.sub[lang]} image={p.image} />
      <Products lang={lang} hideHeader />
    </>
  );
}

export function ServicesPage({ lang }: { lang: Lang }) {
  const p = ui.pages.services;
  return (
    <>
      <PageHero eyebrow="KOMP Farming" title={p.title[lang]} sub={p.sub[lang]} image={p.image} />
      <Services lang={lang} hideHeader />
      <Tech lang={lang} />
    </>
  );
}

export function AboutPage({ lang }: { lang: Lang }) {
  const p = ui.pages.about;
  return (
    <>
      <PageHero eyebrow="KOMP Farming" title={p.title[lang]} sub={p.sub[lang]} image={p.image} />
      <About lang={lang} />
    </>
  );
}

export function KnowledgePage({ lang }: { lang: Lang }) {
  const p = ui.pages.knowledge;
  return (
    <>
      <PageHero eyebrow="KOMP Farming" title={p.title[lang]} sub={p.sub[lang]} image={p.image} />
      <Knowledge lang={lang} hideHeader />
    </>
  );
}

export function ContactPage({ lang }: { lang: Lang }) {
  const p = ui.pages.contact;
  return (
    <>
      <PageHero eyebrow="KOMP Farming" title={p.title[lang]} sub={p.sub[lang]} />
      <Contact lang={lang} />
    </>
  );
}
