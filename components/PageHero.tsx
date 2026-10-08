import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

/**
 * Dark industrial hero band used at the top of every inner page.
 * Sits below the fixed navbar.
 */
export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-32 lg:pb-24 lg:pt-40">
      <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 hidden h-72 w-72 rotate-12 border-2 border-industrial/30 lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 left-10 hidden h-40 w-40 -rotate-12 border-2 border-construction/20 lg:block"
        aria-hidden="true"
      />
      <div className="container-shell relative">
        <span className="eyebrow text-industrial">{eyebrow}</span>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
