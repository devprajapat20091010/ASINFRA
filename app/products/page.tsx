import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Icon } from "@/components/icons";
import { services } from "@/data/products";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Products and services of AS Infra Concrete Pvt. Ltd. — ready-mix concrete, supply & delivery, infrastructure solutions, quality & testing and project support.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="What we offer"
        description="Ready-mix concrete and the supporting services that keep construction projects supplied, on schedule and on spec."
      />

      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Products & Services"
              title="Solutions for every stage of your project"
              description="Only services that apply to a ready-mix concrete operation are listed here. Every description is editable — no claims are invented."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 80} className="h-full">
                <article className="card group flex h-full flex-col overflow-hidden p-0">
                  {service.image && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-industrial/10 text-industrial">
                      <Icon name={service.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-ink">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-industrial transition-colors hover:text-industrial-dark"
                    >
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure what your project needs?"
        text="Share your drawings, quantities and schedule — our team will help you plan the right concrete supply."
        ctaLabel="Talk to Our Team"
        ctaHref="/contact"
      />
    </>
  );
}
