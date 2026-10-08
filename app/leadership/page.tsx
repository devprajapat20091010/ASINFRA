import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import FounderProfile from "@/components/FounderProfile";
import CTASection from "@/components/CTASection";
import { founders } from "@/data/founders";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the leadership of AS Infra Concrete Pvt. Ltd. — the experience, vision and philosophy guiding the company.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Leadership"
        description="The experience and vision guiding AS Infra Concrete Pvt. Ltd."
      />

      <section className="section bg-white">
        <div className="container-shell">
          {founders.map((founder, index) => (
            <Reveal key={founder.name}>
              <FounderProfile founder={founder} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Additional leadership — placeholder */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Executive Leadership"
              title="The wider leadership team"
              description="Profiles of directors and senior leadership will be featured here."
              align="center"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <p className="text-lg font-semibold text-ink">
                [Additional leadership profiles to be added]
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Founder, Managing Director, Director and executive profiles — with verified names,
                designations and biographies — will be published here.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Work with our team."
        text="Tell us about your project and the right people will get back to you."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
