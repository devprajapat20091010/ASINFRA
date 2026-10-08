import Image from "next/image";
import { Factory, ShieldCheck, Truck } from "lucide-react";
import Button from "./Button";
import { company } from "@/data/company";
import { images } from "@/data/images";

const heroPoints = [
  { icon: Factory, label: "Ready-Mix Concrete Production" },
  { icon: ShieldCheck, label: "Structured Quality Control" },
  { icon: Truck, label: "Planned Supply & Delivery" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <Image
        src={images.hero}
        alt="AS Infra Concrete Pvt. Ltd. ready-mix concrete plant"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/45"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
      <div
        className="absolute right-[8%] top-[18%] hidden h-40 w-40 rotate-12 border-2 border-industrial/40 lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[18%] right-[30%] hidden h-16 w-16 bg-construction/80 lg:block"
        aria-hidden="true"
      />

      <div className="container-shell relative py-40">
        <span className="eyebrow text-industrial">{company.hero.label}</span>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {company.hero.line1}
          <br />
          <span className="text-industrial">{company.hero.line2}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          {company.hero.text}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/products" variant="primary" withArrow>
            Explore Our Solutions
          </Button>
          <Button href="/contact" variant="outline-light">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-ink/60 backdrop-blur-md">
        <div className="container-shell flex flex-wrap items-center gap-x-10 gap-y-3 py-5">
          {heroPoints.map((point) => (
            <div
              key={point.label}
              className="flex items-center gap-3 text-sm font-medium text-white/80"
            >
              <point.icon className="h-5 w-5 text-industrial" aria-hidden="true" />
              {point.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
