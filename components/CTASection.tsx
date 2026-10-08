import Button from "./Button";

interface CTASectionProps {
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTASection({
  title = "Let's Build Something Strong Together.",
  text = "Talk to our team about your project's concrete requirements — from mix selection and quality control to supply planning and delivery.",
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
      <div
        className="absolute -bottom-24 -right-24 h-80 w-80 rotate-12 border-2 border-industrial/30"
        aria-hidden="true"
      />
      <div className="container-shell relative py-20 text-center lg:py-28">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-industrial">
          Get In Touch
        </span>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{text}</p>
        <div className="mt-10">
          <Button href={ctaHref} variant="primary" withArrow className="px-8 py-4 text-base">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
