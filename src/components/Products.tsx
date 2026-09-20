import { to } from "../router";
import { ui, type Lang } from "../data/content";
import { Arrow, Button, Container, SectionHeader } from "./ui";

const icons = [
  // lentil
  <svg key="l" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round">
    <ellipse cx="20" cy="20" rx="12" ry="8" /><path d="M11 20c3-3 15-3 18 0" />
  </svg>,
  // wheat
  <svg key="w" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 34V12M20 16c-4 0-6-3-6-6 4 0 6 3 6 6zm0 0c4 0 6-3 6-6-4 0-6 3-6 6zm0 6c-4 0-6-3-6-6 4 0 6 3 6 6zm0 0c4 0 6-3 6-6-4 0-6 3-6 6zm0 6c-4 0-6-3-6-6 4 0 6 3 6 6zm0 0c4 0 6-3 6-6-4 0-6 3-6 6z" />
  </svg>,
  // vetch
  <svg key="v" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 34c0-10 2-18 10-24M20 34c0-8-3-14-10-18" /><path d="M14 22c0-4 3-6 6-6 0 4-3 6-6 6zM26 18c0-4 3-6 6-6 0 4-3 6-6 6zM24 26c0-4 3-6 6-6 0 4-3 6-6 6z" />
  </svg>,
  // chickpea
  <svg key="c" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round">
    <path d="M13 20a8 8 0 0 1 8-8h1a7 7 0 0 1 7 7v2a8 8 0 0 1-16 0z" /><path d="M21 12v-3" />
  </svg>,
  // barley
  <svg key="b" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 34V8M20 12l-6-4M20 12l6-4M20 18l-6-4M20 18l6-4M20 24l-6-4M20 24l6-4M20 30l-6-4M20 30l6-4" />
  </svg>,
  // oats
  <svg key="o" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 34V10" /><ellipse cx="13" cy="16" rx="2.5" ry="4" transform="rotate(-30 13 16)" /><ellipse cx="27" cy="18" rx="2.5" ry="4" transform="rotate(30 27 18)" /><ellipse cx="14" cy="25" rx="2.5" ry="4" transform="rotate(-30 14 25)" /><ellipse cx="26" cy="27" rx="2.5" ry="4" transform="rotate(30 26 27)" />
  </svg>,
];

export default function Products({ lang, hideHeader }: { lang: Lang; hideHeader?: boolean }) {
  const t = ui.products;
  return (
    <section id="products" className="scroll-mt-20 py-16 md:py-24">
      <Container>
        {hideHeader ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-lg leading-relaxed text-ink-2">{t.sub[lang]}</p>
            <Button href={to("contact", lang)} variant="secondary" className="shrink-0">
              {ui.nav.cta[lang]} <Arrow />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow={t.eyebrow[lang]} title={t.title[lang]} sub={t.sub[lang]} />
            <Button href={to("contact", lang)} variant="secondary" className="shrink-0">
              {ui.nav.cta[lang]} <Arrow />
            </Button>
          </div>
        )}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((p, i) => (
            <article
              key={p.latin}
              className="group relative flex flex-col rounded-2xl border border-line/80 bg-paper-2/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ochre/50 hover:bg-paper-2/80 md:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ochre-soft text-ochre-2 transition group-hover:bg-ochre group-hover:text-paper">
                  <span className="h-8 w-8">{icons[i]}</span>
                </div>
                <span className="text-xs italic text-ink-3">{p.latin}</span>
              </div>
              <h3 className="font-display mt-6 text-2xl text-ink">{p.name[lang]}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{p.desc[lang]}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
