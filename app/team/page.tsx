import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import TeamCard from "@/components/TeamCard";
import Button from "@/components/Button";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team behind AS Infra Concrete Pvt. Ltd. — plant operations, quality, logistics and customer support.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind the plant"
        description="[Editable placeholder] Introduce the team that keeps production, quality and delivery running every day."
      />

      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Team"
              title="Meet our people"
              description="Every profile below is a placeholder — verified names, designations, departments and photos will be added to data/team.ts as they are provided."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Reveal key={index} delay={(index % 4) * 80} className="h-full">
                <TeamCard {...member} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-12 text-center">
              <Button href="/contact" variant="primary" withArrow>
                Work With Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
