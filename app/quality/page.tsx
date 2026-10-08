import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Quality & Technology",
  description:
    "Quality commitment, control process, testing and technology at AS Infra Concrete Pvt. Ltd. — consistency you can build on.",
};

const qcProcess: { title: string; text: string }[] = [
  {
    title: "Material Selection",
    text: "Cement, aggregates, water and admixtures are sourced and checked against controlled specifications.",
  },
  {
    title: "Batching Accuracy",
    text: "Weighed batching keeps every mix within its design proportions — load after load.",
  },
  {
    title: "Mix Consistency",
    text: "Fresh concrete is checked for workability and consistency before dispatch.",
  },
  {
    title: "Dispatch Checks",
    text: "Every load is verified and documented before it leaves the plant for site.",
  },
];

const testingPractices: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "Gauge",
    title: "Slump & Workability",
    text: "Workability is checked so concrete arrives on site ready to place and finish.",
  },
  {
    icon: "Hammer",
    title: "Strength Testing",
    text: "Compressive strength is verified through standard cube testing of sampled batches.",
  },
  {
    icon: "Layers",
    title: "Aggregate Quality",
    text: "Aggregate grading, cleanliness and moisture are monitored as part of material control.",
  },
  {
    icon: "FlaskConical",
    title: "Cement & Admixtures",
    text: "Cement and chemical admixtures are checked to keep mix performance predictable.",
  },
];

const technologyItems: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "Cog",
    title: "Automated Batching",
    text: "Plant-controlled batching reduces human error and keeps proportions precise.",
  },
  {
    icon: "Gauge",
    title: "Precision Weighing",
    text: "Calibrated weighing systems hold batch accuracy across every load.",
  },
  {
    icon: "Droplets",
    title: "Moisture Control",
    text: "Aggregate moisture is accounted for so the effective water-cement ratio stays on target.",
  },
  {
    icon: "FileCheck2",
    title: "Batch Records",
    text: "Production and delivery records keep every pour traceable and accountable.",
  },
];

const engineeringPractices: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "Ruler",
    title: "Mix Design Discipline",
    text: "Mix designs are treated as engineering documents — agreed, controlled and recorded.",
  },
  {
    icon: "Compass",
    title: "Application Knowledge",
    text: "Supply planning considers the application — from slabs and columns to pavements.",
  },
  {
    icon: "ShieldCheck",
    title: "Consistency & Reliability",
    text: "The same standards on every batch, so site teams can plan with confidence.",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Technology"
        title="Quality you can verify"
        description="A structured approach to quality control, testing and production technology — behind every load we supply."
      />

      {/* Quality commitment */}
      <section className="section bg-white">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Quality Commitment"
              title="Consistency is the standard"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Concrete is unforgiving: the quality of a structure depends on the quality of
                every batch. That is why quality at AS Infra Concrete is not a final check — it
                is built into material selection, batching, mixing and dispatch.
              </p>
              <p>
                Our approach is simple: controlled inputs, accurate batching, verified output and
                honest documentation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "ShieldCheck" as IconName, label: "Controlled Inputs" },
                { icon: "Gauge" as IconName, label: "Accurate Batching" },
                { icon: "Microscope" as IconName, label: "Verified Output" },
                { icon: "FileCheck2" as IconName, label: "Traceable Records" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-paper p-6 text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-industrial">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <p className="text-sm font-bold text-ink">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* QC process */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Quality Control Process"
              title="Four gates before dispatch"
              align="center"
            />
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qcProcess.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <li className="relative h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
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

      {/* Testing & monitoring */}
      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Testing & Monitoring"
              title="Standard industry practices"
              description="The testing practices commonly applied to ready-mix concrete production and supply."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testingPractices.map((practice, index) => (
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

      {/* Technology */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Technology"
              title="Technology that keeps quality repeatable"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologyItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <div className="card h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-industrial">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering practices */}
      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Engineering Practices"
              title="Engineering first, always"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {engineeringPractices.map((practice, index) => (
              <Reveal key={practice.title} delay={index * 80} className="h-full">
                <div className="card h-full text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-industrial/10 text-industrial">
                    <Icon name={practice.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{practice.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{practice.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications placeholder */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-industrial/10 text-industrial">
                <Icon name="Award" className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink">Standards & Certifications</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                [Add information] Certifications, accreditations, test reports and compliance
                documents will be published here once provided. No certification or government
                approval is claimed until verified documentation is added.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Quality you can build on."
        text="Talk to us about mix requirements, testing and documentation for your next project."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
