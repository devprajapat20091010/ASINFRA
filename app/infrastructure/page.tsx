import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Icon, type IconName } from "@/components/icons";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Infrastructure & Plant",
  description:
    "Inside the AS Infra Concrete Pvt. Ltd. batching plant — production infrastructure, machinery, material handling, quality control, logistics and safety.",
};

const plantComponents: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "Factory",
    title: "Batching Plant",
    text: "The central batching plant with aggregate storage bins — where every mix begins.",
  },
  {
    icon: "Warehouse",
    title: "Cement Storage Silos",
    text: "On-site silos keep cement protected and ready for continuous production.",
  },
  {
    icon: "Cog",
    title: "Conveyor Systems",
    text: "Inclined conveyors move aggregates efficiently from storage to the mixer.",
  },
  {
    icon: "Zap",
    title: "Power Backup",
    text: "A dedicated power backup unit supports dependable plant operations.",
  },
];

const facilityPillars: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "Layers",
    title: "Material Handling",
    text: "Structured storage and handling of aggregates, cement and admixtures keeps production clean and continuous.",
  },
  {
    icon: "FlaskConical",
    title: "Quality Control",
    text: "Materials, batching and finished concrete are checked at defined stages of production.",
  },
  {
    icon: "Route",
    title: "Logistics",
    text: "Plant location, dispatch planning and transit coordination keep deliveries aligned with site schedules.",
  },
  {
    icon: "HardHat",
    title: "Safety",
    text: "Safety railings, access control and disciplined site practices protect our people and equipment.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure & Plant"
        title="Inside our facility"
        description="A look at the plant, machinery and disciplined operations behind every load of AS Infra Concrete."
      />

      {/* Plant overview */}
      <section className="section bg-white">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Plant Overview"
              title="Built for consistent production"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                The AS Infra Concrete plant combines aggregate storage, cement silos, conveyor
                systems and a central batching plant — arranged for efficient material flow and
                dependable output.
              </p>
              <p>
                [Editable placeholder] Add details about the plant's location, production
                capacity, operating hours and supply coverage once verified.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div
                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-xl border-2 border-industrial/30 lg:block"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-soft">
                <Image
                  src={images.infrastructure}
                  alt="Cement silos and backup power unit at the AS Infra Concrete plant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Inside the plant — photo grid */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Inside The Plant"
              title="The facility, up close"
              description="Photographs from the AS Infra Concrete Pvt. Ltd. site."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.factory.map((photo, index) => (
              <Reveal
                key={photo.src}
                delay={(index % 3) * 80}
                className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <figure className="group relative m-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-5 py-3 text-sm font-semibold text-charcoal">
                    {photo.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plant components */}
      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Machinery & Equipment"
              title="Key plant components"
              description="The major components visible at the facility. Detailed machinery specifications will be added once provided."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plantComponents.map((component, index) => (
              <Reveal key={component.title} delay={index * 80} className="h-full">
                <div className="card h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-industrial">
                    <Icon name={component.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{component.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{component.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-8 text-center text-sm text-slate-500">
              [Machinery information to be added — makes, models and specifications will be
              listed here once provided.]
            </p>
          </Reveal>
        </div>
      </section>

      {/* Facility pillars */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Production Infrastructure"
              title="More than machines"
              description="Infrastructure is people, process and discipline working together."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilityPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 80} className="h-full">
                <div className="card h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-industrial/10 text-industrial">
                    <Icon name={pillar.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Visit the plant. See the standards."
        text="We welcome customers, consultants and partners to understand our production and quality practices first-hand."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
