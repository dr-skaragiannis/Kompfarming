import { ui, type Lang } from "../data/content";
import { Container, SectionHeader } from "./ui";
import { cn } from "../utils/cn";

export default function Services({ lang, hideHeader }: { lang: Lang; hideHeader?: boolean }) {
  const t = ui.services;
  return (
    <section id="services" className={cn("scroll-mt-20 py-16 md:py-24", !hideHeader && "border-t border-line/70 bg-paper-2/50")}>
      <Container>
        {hideHeader ? (
          <p className="max-w-2xl text-lg leading-relaxed text-ink-2">{t.sub[lang]}</p>
        ) : (
          <SectionHeader eyebrow={t.eyebrow[lang]} title={t.title[lang]} sub={t.sub[lang]} />
        )}

        <div className="mt-12 space-y-6">
          {t.items.map((s, i) => (
            <article
              key={s.num}
              className={cn(
                "grid overflow-hidden rounded-3xl border border-line/80 bg-paper lg:grid-cols-2",
              )}
            >
              <div className={cn("relative min-h-[260px] lg:min-h-[420px]", i % 2 === 1 && "lg:order-2")}>
                <img src={s.image} alt={s.title[lang]} className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                <div>
                  <span className="font-display text-sm text-ochre-2">{s.num}</span>
                  <h3 className="font-display mt-3 text-3xl text-ink md:text-4xl">{s.title[lang]}</h3>
                  <p className="mt-5 leading-relaxed text-ink-2">{s.desc[lang]}</p>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {s.list[lang].map((li) => (
                    <li
                      key={li}
                      className="rounded-full border border-line bg-paper-2/60 px-3 py-1 text-sm text-ink-2"
                    >
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
