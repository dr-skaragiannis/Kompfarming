import { Container, Eyebrow } from "./ui";

export default function PageHero({
  eyebrow,
  title,
  sub,
  image,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  image?: string;
}) {
  return (
    <section className="relative">
      <Container className="pt-12 pb-10 md:pt-20 md:pb-14">
        <Eyebrow className="fade-up">{eyebrow}</Eyebrow>
        <h1 className="font-display fade-up delay-1 mt-4 max-w-4xl text-5xl leading-[1.02] text-ink md:text-7xl">
          {title}
        </h1>
        {sub && <p className="fade-up delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{sub}</p>}
      </Container>
      {image && (
        <Container>
          <div className="fade-up delay-3 overflow-hidden rounded-3xl border border-line/60">
            <img src={image} alt={title} className="h-[36vw] max-h-[460px] min-h-[200px] w-full object-cover" />
          </div>
        </Container>
      )}
    </section>
  );
}
