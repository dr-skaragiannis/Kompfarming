import { to } from "../router";
import { articles, ui, type Lang } from "../data/content";
import { Arrow, Container, SectionHeader } from "./ui";

export default function Knowledge({ lang, exclude, hideHeader }: { lang: Lang; exclude?: string; hideHeader?: boolean }) {
  const t = ui.knowledge;
  const list = articles.filter((a) => a.slug !== exclude);
  return (
    <section
      id="knowledge"
      className={
        hideHeader ? "py-16 md:py-24" : "scroll-mt-20 border-t border-line/70 bg-paper-2/50 py-20 md:py-28"
      }
    >
      <Container>
        {hideHeader ? (
          <p className="max-w-2xl text-lg leading-relaxed text-ink-2">{t.sub[lang]}</p>
        ) : (
          <SectionHeader eyebrow={t.eyebrow[lang]} title={exclude ? t.more[lang] : t.title[lang]} sub={exclude ? undefined : t.sub[lang]} />
        )}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {list.map((a) => (
            <a
              key={a.slug}
              href={to(`article/${a.slug}`, lang)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line/80 bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-ochre/50"
            >
              <div className="overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title[lang]}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-ochre-2">{a.tag[lang]}</span>
                <h3 className="font-display mt-3 text-2xl leading-tight text-ink">{a.title[lang]}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-2">{a.excerpt[lang]}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  {t.read[lang]}
                  <Arrow className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
