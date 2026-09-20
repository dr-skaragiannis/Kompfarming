import { to } from "../router";
import { useEffect, useState } from "react";
import { contact, ui, type Lang } from "../data/content";
import { Button, Container } from "./ui";
import { cn } from "../utils/cn";

export function Logo({ className, light, lang = "el" }: { className?: string; light?: boolean; lang?: Lang }) {
  return (
    <a href={to("home", lang)} className={cn("flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 transition-colors duration-500" aria-hidden>
        <circle cx="16" cy="16" r="16" fill={light ? "#f4f0e6" : "#1d1b17"} className="transition-colors duration-500" />
        <path
          d="M16 26V10M16 14c-3 0-5-2-5-5 3 0 5 2 5 5zm0 0c3 0 5-2 5-5-3 0-5 2-5 5zm0 5c-3 0-5-2-5-5 3 0 5 2 5 5zm0 0c3 0 5-2 5-5-3 0-5 2-5 5z"
          stroke={light ? "#1d1b17" : "#f4f0e6"}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="transition-colors duration-500"
        />
      </svg>
      <span className={cn("font-display text-xl tracking-tight transition-colors duration-500", light ? "text-paper" : "text-ink")}>
        KOMP <span className={cn("italic", light ? "text-paper-3/70" : "text-ink-3")}>Farming</span>
      </span>
    </a>
  );
}

export default function Nav({
  lang,
  setLang,
  langHref,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  langHref?: (l: Lang) => string;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { href: to("products", lang), label: ui.nav.products[lang] },
    { href: to("services", lang), label: ui.nav.services[lang] },
    { href: to("knowledge", lang), label: ui.nav.knowledge[lang] },
    { href: to("about", lang), label: ui.nav.about[lang] },
    { href: to("contact", lang), label: ui.nav.contact[lang] },
  ];

  const dark = scrolled || open;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          dark
            ? "bg-ink/95 text-paper shadow-[0_1px_0_rgba(244,240,230,0.08),0_10px_30px_-10px_rgba(0,0,0,0.4)] backdrop-blur-md"
            : "bg-transparent text-ink",
        )}
      >
        <Container
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled ? "h-14" : "h-16 md:h-[72px]",
          )}
        >
          <div className={cn("origin-left transition-transform duration-500", scrolled && "scale-90")}>
            <Logo light={dark} lang={lang} />
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-3.5 py-2 transition-all duration-300",
                  scrolled ? "text-[13px]" : "text-sm",
                  dark ? "text-paper-3/80 hover:bg-paper/10 hover:text-paper" : "text-ink-2 hover:bg-ink/5 hover:text-ink",
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LangToggle lang={lang} setLang={setLang} dark={dark} langHref={langHref} />
            <Button
              href={to("contact", lang)}
              variant={dark ? "light" : "primary"}
              className={cn("transition-all duration-500", scrolled && "px-4 py-2 text-[13px]")}
            >
              {ui.nav.cta[lang]}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LangToggle lang={lang} setLang={setLang} dark={dark} langHref={langHref} />
            <button
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-full transition",
                dark ? "hover:bg-paper/10" : "hover:bg-ink/5",
              )}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[1.5px] w-full bg-current transition-all duration-300",
                    open && "top-1/2 -translate-y-1/2 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-all duration-300",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-all duration-300",
                    open && "bottom-1/2 translate-y-1/2 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink text-paper transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-ochre/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-olive/25 blur-3xl" />

        <Container className="relative flex flex-1 flex-col pt-24 pb-10">
          <nav className="flex flex-col">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                className={cn(
                  "font-display flex items-center justify-between border-b border-paper/10 py-4 text-4xl text-paper transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                {l.label}
                <span className="text-ochre">→</span>
              </a>
            ))}
          </nav>

          <div
            className={cn(
              "mt-auto transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
            style={{ transitionDelay: open ? "450ms" : "0ms" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-ochre">{ui.nav.contact[lang]}</p>
            <a href={contact.phoneHref} className="font-display mt-2 block text-2xl text-paper">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="mt-1 block text-sm text-paper-3/70">
              {contact.email}
            </a>
            <Button href={to("contact", lang)} variant="light" onClick={() => setOpen(false)} className="mt-6">
              {ui.nav.cta[lang]}
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

function LangToggle({
  lang,
  setLang,
  dark,
  langHref,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  dark?: boolean;
  langHref?: (l: Lang) => string;
}) {
  return (
    <div
      className={cn(
        "flex items-center rounded-full border p-0.5 text-xs font-medium transition-colors duration-500",
        dark ? "border-paper/20 bg-paper/5" : "border-line bg-paper-2/60",
      )}
    >
      {(["el", "en"] as Lang[]).map((l) => {
        const cls = cn(
          "rounded-full px-2.5 py-1 uppercase tracking-wide transition",
          lang === l
            ? dark
              ? "bg-paper text-ink"
              : "bg-ink text-paper"
            : dark
              ? "text-paper-3/70 hover:text-paper"
              : "text-ink-3 hover:text-ink",
        );
        const label = l === "el" ? "ΕΛ" : "EN";
        // Multi-page build: real links so each language version is crawlable
        return langHref ? (
          <a key={l} href={langHref(l)} hrefLang={l} lang={l} className={cls} aria-current={lang === l ? "true" : undefined}>
            {label}
          </a>
        ) : (
          <button key={l} onClick={() => setLang(l)} className={cls} aria-pressed={lang === l}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
