import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Icon, type IconName } from "@/components/icons";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Ready Mix Concrete",
  description:
    "Ready-mix concrete from AS Infra Concrete Pvt. Ltd. — controlled mix designs, structured batching, quality checking and planned delivery to site.",
};

const processSteps: { title: string; text: string }[] = [
  {
    title: "Material Selection",
    text: "Aggregates, cement, water and admixtures are selected against controlled specifications.",
  },
  {
    title: "Batching",
    text: "Materials are weighed and batched at the plant according to the approved mix design.",
  },
  {
    title: "Mixing",
    text: "The batch is mixed to a uniform, consistent concrete — every load, every time.",
  },
  {
    title: "Quality Checking",
    text: "Consistency and workability are checked before the load leaves the plant.",
  },
  {
    title: "Transportation",
    text: "Transit mixers carry the concrete to site with the drum kept in motion.",
  },
  {
    title: "Site Delivery",
    text: "Concrete is delivered and placed at site, ready to pour — coordinated with your schedule.",
  },
];

const applications: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "Home",
    title: "Residential Construction",
    text: "Foundations, slabs, columns and beams for homes and housing projects.",
  },
  {
    icon: "Building2",
    title: "Commercial Buildings",
    text: "Structural concrete for offices, retail spaces and commercial developments.",
  },
  {
    icon: "Route",
    title: "Roads",
    text: "Pavement-quality concrete for road works and site approach roads.",
  },
  {
    icon: "Landmark",
    title: "Bridges",
    text: "Structural concrete for bridge decks, piers and allied infrastructure.",
  },
  {
    icon: "Container",
    title: "Industrial Structures",
    text: "Heavy-duty slabs, foundations and structures for industrial facilities.",
  },
  {
    icon: "Hammer",
    title: "Infrastructure Projects",
    text: "Concrete supply for public and private infrastructure works.",
  },
];

const qualityPractices: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "FlaskConical",
    title: "Material Control",
    text: "Incoming cement, aggregates and admixtures are checked before they enter production.",
  },
  {
    icon: "Gauge",
    title: "Batching Accuracy",
    text: "Weighed batching at the plant keeps every mix within its design proportions.",
  },
  {
    icon: "Microscope",
    title: "Consistency Checks",
    text: "Workability and consistency are verified so concrete arrives ready to place.",
  },
  {
    icon: "FileCheck2",
    title: "Documentation",
    text: "Batch and delivery records keep every pour traceable and accountable.",
  },
];

const deliverySteps: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "FileCheck2",
    title: "Enquiry & Mix Selection",
    text: "We understand your project's requirements and agree the right mix and schedule.",
  },
  {
    icon: "Truck",
    title: "Production & Dispatch",
    text: "Concrete is batched, checked and dispatched in coordinated transit mixer loads.",
  },
  {
    icon: "MapPin",
    title: "On-Site Delivery",
    text: "Loads arrive on schedule and are placed with your site team's pour plan in mind.",
  },
];

export default function ReadyMixConcretePage() {
  return (
    <>
      <PageHero
        eyebrow="Ready Mix Concrete"
        title="Ready Mix Concrete (RMC)"
        description="Concrete batched at our plant to a controlled mix design — checked, transported and delivered to your site, ready to pour."
      />

      {/* What is RMC */}
      <section className="section bg-white">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="What Is Ready Mix Concrete?"
              title="Batched with precision. Delivered with reliability."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Ready mix concrete is concrete that is batched at a central plant — rather than
                mixed on site — and delivered to the customer in a fresh, workable state. Because
                batching happens under controlled plant conditions, every load benefits from
                accurate proportioning, consistent quality and dependable supply.
              </p>
              <p>
                For contractors and developers, that means less on-site variability, tighter
                quality control and a pour schedule that keeps the project moving.
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
                  src={images.rmc}
                  alt="Cement storage silos at the AS Infra Concrete ready-mix plant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our RMC approach */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Our RMC Approach"
              title="Controlled from plant to pour"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "Ruler" as IconName,
                title: "Controlled Mix Design",
                text: "Every mix is batched to an agreed design, with proportions kept under tight control.",
              },
              {
                icon: "Factory" as IconName,
                title: "Consistent Production",
                text: "Plant batching delivers uniform concrete load after load — not just on the first pour.",
              },
              {
                icon: "Truck" as IconName,
                title: "On-Time Delivery",
                text: "Dispatch and logistics are planned around your pour schedule, not the other way round.",
              },
            ].map((item, index) => (
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

      {/* Production process */}
      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Production Process"
              title="Six steps from batch to pour"
              description="A disciplined, repeatable process behind every load of concrete we supply."
              align="center"
            />
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={(index % 3) * 80}>
                <li className="relative h-full rounded-xl border border-slate-200 bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="font-display text-4xl font-bold text-industrial/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Applications */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Applications"
              title="Where ready-mix concrete works"
              description="General industry application categories for ready-mix concrete. These describe typical uses of RMC — not specific projects completed by AS Infra Concrete."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application, index) => (
              <Reveal key={application.title} delay={(index % 3) * 80} className="h-full">
                <div className="card h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-industrial">
                    <Icon name={application.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{application.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{application.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality control */}
      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Quality Control"
              title="Checked before it leaves the plant"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPractices.map((practice, index) => (
              <Reveal key={practice.title} delay={index * 80} className="h-full">
                <div className="card h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-industrial/10 text-industrial">
                    <Icon name={practice.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{practice.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{practice.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery / supply process */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Delivery & Supply Process"
              title="From enquiry to pour"
              align="center"
            />
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {deliverySteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <li className="relative h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-industrial text-white">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-industrial">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Technical considerations — placeholder */}
      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-xl border border-dashed border-slate-300 bg-paper p-10 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-industrial/10 text-industrial">
                <Icon name="Layers" className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink">Technical Considerations</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                [Technical specifications to be added — available mix grades, admixture options,
                slump ranges, lead times and ordering information will be published here.]
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Planning a pour?"
        text="Share your project schedule and quantities — we will plan the mix, the plant time and the delivery slots around you."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
