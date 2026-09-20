import { to } from "../router";
import { useEffect } from "react";
import { articles, ui, type Lang } from "../data/content";
import { Arrow, Container } from "./ui";
import Knowledge from "./Knowledge";

export default function ArticlePage({ slug, lang }: { slug: string; lang: Lang }) {
  const a = articles.find((x) => x.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!a) {
    return (
      <Container className="py-32 text-center">
        <h1 className="font-display text-4xl">404</h1>
        <a href={to("home", lang)} className="mt-4 inline-block text-ink-2 underline">
          Home
        </a>
      </Container>
    );
  }

  return (
    <>
      <article className="pt-10 pb-20 md:pt-16">
        <Container>
          <a
            href={to("knowledge", lang)}
            className="inline-flex items-center gap-2 text-sm text-ink-3 transition hover:text-ink"
          >
            <Arrow className="rotate-180" /> {ui.knowledge.back[lang]}
          </a>
          <div className="mt-8 max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-ochre-2">{a.tag[lang]}</span>
            <h1 className="font-display mt-4 text-4xl leading-[1.05] text-ink md:text-6xl">{a.title[lang]}</h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">{a.excerpt[lang]}</p>
            {a.author && <p className="mt-4 text-sm text-ink-3">{a.author[lang]}</p>}
          </div>

          <figure className="mt-12 overflow-hidden rounded-3xl border border-line/70">
            <img src={a.image} alt={a.title[lang]} className="h-[40vw] max-h-[520px] min-h-[220px] w-full object-cover" loading="lazy" decoding="async" />
          </figure>

          <div className="prose-kf mx-auto mt-14 max-w-3xl">
            {a.body[lang].map((b, i) => {
              if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
              if (b.type === "ul")
                return (
                  <ul key={i}>
                    {b.items?.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{b.text}</p>;
            })}
          </div>
        </Container>
      </article>
      <Knowledge lang={lang} exclude={slug} />
    </>
  );
}
