import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { Icon } from "@/components/icons";
import { projects } from "@/data/projects";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects delivered with AS Infra Concrete Pvt. Ltd. ready-mix concrete — our project portfolio will be showcased here.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Our projects"
        description="A showcase of the work our concrete has helped build."
      />

      <section className="section bg-white">
        <div className="container-shell">
          {projects.length === 0 ? (
            <Reveal>
              <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-slate-300 bg-paper p-12 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-industrial/10 text-industrial">
                  <Icon name="Warehouse" className="h-8 w-8" />
                </span>
                <h2 className="mt-6 text-2xl font-bold text-ink">
                  Projects will be showcased here.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Our verified project portfolio is being prepared. In the meantime, explore our
                  plant and capabilities, or get in touch about your upcoming project.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button href="/infrastructure" variant="primary" withArrow>
                    Explore Our Infrastructure
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Contact Us
                  </Button>
                </div>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Projects will render here once data/projects.ts is populated. */}
            </div>
          )}
        </div>
      </section>

      {/* Facility strip — real photos, clearly labelled as the facility */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Our Facility"
              title="The plant behind the projects"
              description="While the project portfolio is prepared, here is a look at the facility that powers every pour."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {images.factory.slice(0, 3).map((photo, index) => (
              <Reveal key={photo.src} delay={index * 80}>
                <Link
                  href="/infrastructure"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-slate-200"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-4">
                    <p className="text-sm font-bold text-white">{photo.title}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
