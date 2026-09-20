import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-medium uppercase tracking-[0.18em] text-ochre-2", className)}>
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
  dark,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Eyebrow className={dark ? "text-ochre" : undefined}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "font-display mt-4 text-4xl md:text-5xl",
          dark ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-paper-3/80" : "text-ink-2")}>
          {sub}
        </p>
      )}
    </div>
  );
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ochre/60";
  const variants = {
    primary: "bg-ink text-paper hover:bg-ink-2 hover:-translate-y-px",
    secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5",
    ghost: "text-ink hover:bg-ink/5",
    light: "bg-paper text-ink hover:bg-paper-2 hover:-translate-y-px",
  };
  const cls = cn(base, variants[variant], className);
  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}
