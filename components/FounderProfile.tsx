import Image from "next/image";
import { Quote } from "lucide-react";
import PlaceholderPortrait from "./PlaceholderPortrait";
import type { Founder } from "@/data/founders";

export default function FounderProfile({
  founder,
}: {
  founder: Founder;
}) {
  return (
    <article className="grid items-center gap-8 md:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-40">
      {/* Founder Image */}
      <div className="relative mx-auto w-full max-w-md lg:mx-0">
        <div
          className="absolute -left-3 -top-3 hidden h-full w-full rounded-xl border-2 border-industrial/40 lg:block"
          aria-hidden="true"
        />

        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 shadow-soft">
          {founder.image ? (
            <Image
              src={founder.image}
              alt={`Portrait of ${founder.name}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 38vw, 420px"
              className="object-cover object-center"
            />
          ) : (
            <PlaceholderPortrait
              label="Founder portrait to be added"
              className="absolute inset-0"
            />
          )}
        </div>
      </div>

      {/* Founder Information */}
      <div className="max-w-2xl">
        <span className="eyebrow">Leadership</span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {founder.name}
        </h2>

        <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-industrial">
          {founder.designation}
        </p>

        <div className="mt-5 space-y-3 text-base leading-7 text-slate-600 sm:mt-6 sm:space-y-4">
          {founder.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <blockquote className="mt-6 rounded-r-xl border-l-4 border-industrial bg-paper px-5 py-4 text-base leading-7 text-charcoal sm:mt-8 sm:px-6 sm:py-5 sm:text-lg">
          <Quote
            className="mb-2 h-5 w-5 text-industrial sm:h-6 sm:w-6"
            aria-hidden="true"
          />

          <span className="italic">{founder.philosophy}</span>
        </blockquote>
      </div>
    </article>
  );
}