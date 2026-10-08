import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Icon } from "@/components/icons";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AS Infra Concrete Pvt. Ltd. — our approach, values, vision and mission in ready-mix concrete and infrastructure solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About AS Infra Concrete Pvt. Ltd."
        description="[Editable placeholder] A short overview of the company, its purpose and the standards it operates by."
      />

      {/* Company introduction */}
      <section className="section bg-white">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div
                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-xl border-2 border-industrial/30 lg:block"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-soft">
                <Image
                  src={company.intro.image}
                  alt={company.intro.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeader eyebrow="Company Introduction" title={company.intro.title} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              {company.intro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our approach */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Our Approach"
              title="How we work"
              description="Three principles guide everything we do — from the first enquiry to the final pour on site."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {company.approach.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <div className="card h-full text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-industrial/10 text-industrial">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Vision & Mission"
              title="Where we are headed"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="card h-full border-l-4 border-l-industrial">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-industrial">
                  <Icon name="Compass" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{company.vision}</p>
              </div>
            </Reveal>
            <Reveal delay={100} className="h-full">
              <div className="card h-full border-l-4 border-l-construction">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-construction">
                  <Icon name="Target" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{company.mission}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Our Values"
              title="What we stand for"
              description="The values that shape our plant, our people and every batch we produce."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80} className="h-full">
                <div className="card h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-industrial/10 text-industrial">
                    <Icon name={value.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why we exist + operational philosophy */}
      <section className="section bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader eyebrow="Why We Exist" title="Built to serve better" />
            <p className="mt-6 text-base leading-relaxed text-slate-600">{company.whyWeExist}</p>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeader eyebrow="Operational Philosophy" title={company.philosophy.title} />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              {company.philosophy.text}
            </p>
            <ul className="mt-6 space-y-3">
              {company.philosophy.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                  <Icon name="CheckCircle2" className="mt-0.5 h-5 w-5 shrink-0 text-industrial" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Company journey — placeholder timeline */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Company Journey"
              title="Our story so far"
              align="center"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-industrial/10 text-industrial">
                <Icon name="CalendarDays" className="h-7 w-7" />
              </span>
              <p className="mt-4 text-lg font-semibold text-ink">{company.journey}</p>
              <p className="mt-2 text-sm text-slate-500">
                Milestones will appear here as a timeline once the company history is provided.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
