import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import PlaceholderPortrait from "@/components/PlaceholderPortrait";
import { Icon } from "@/components/icons";
import { company } from "@/data/company";
import { services } from "@/data/products";
import { featuredProjects } from "@/data/projects";
import { founders } from "@/data/founders";
import { galleryItems } from "@/data/gallery";

const previewGallery = galleryItems.filter((item) => !item.contain).slice(0, 5);

export default function HomePage() {
  return (
    <>
      <Hero />

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
            <SectionHeader eyebrow={company.intro.eyebrow} title={company.intro.title} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              {company.intro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about" variant="dark" withArrow>
                More About Us
              </Button>
              <Button href="/infrastructure" variant="secondary">
                Our Infrastructure
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Company highlights — non-numeric, no invented statistics */}
      <section className="border-y border-slate-200 bg-paper">
        <div className="container-shell grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {company.highlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 80}>
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-industrial/10 text-industrial">
                  <Icon name={highlight.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{highlight.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{highlight.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="What We Do"
              title="Solutions built around your project"
              description="From ready-mix concrete production to plant infrastructure, quality control and project support — everything your project needs, under one roof."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 80} className="h-full">
                <ProductCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-paper">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="A partner you can rely on"
              description="We combine disciplined plant operations with an engineering mindset — so every pour arrives on time and on spec."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 80} className="h-full">
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

      {/* Featured projects — placeholder portfolio */}
      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Featured Projects"
              title="Work we are proud of"
              description="Our project portfolio is being prepared. In the meantime, here is a glimpse of the facility that powers every pour."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={index} delay={(index % 3) * 80} className="h-full">
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 text-center">
              <Button href="/projects" variant="dark" withArrow>
                View Projects
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership preview */}
      <section className="section bg-paper">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl shadow-soft">
              {founders[0].image ? (
                <Image
                  src={founders[0].image}
                  alt={`Portrait of ${founders[0].name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              ) : (
                <PlaceholderPortrait
                  label="Founder portrait to be added"
                  className="absolute inset-0"
                />
              )}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeader
              eyebrow="Leadership"
              title="Leadership behind AS Infra Concrete"
              description="[Editable placeholder] A short introduction to the founder and the leadership guiding the company's vision and operations."
            />
            <p className="mt-6 text-lg font-semibold text-ink">
              {founders[0].name}{" "}
              <span className="font-medium text-slate-500">— {founders[0].designation}</span>
            </p>
            <div className="mt-8">
              <Button href="/leadership" variant="primary" withArrow>
                Meet Our Leadership
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Gallery"
              title="Inside our plant"
              description="A glimpse of the AS Infra Concrete facility — batching plant, cement silos, conveyors and on-site infrastructure."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {previewGallery.map((item, index) => (
              <Reveal
                key={item.src}
                delay={(index % 3) * 80}
                className={index === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""}
              >
                <div
                  className={`group relative overflow-hidden rounded-xl ${
                    index === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                    <p className="text-sm font-bold text-white">{item.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={160}>
              <Link
                href="/gallery"
                className="flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-paper transition hover:border-industrial hover:bg-industrial/5"
              >
                <span className="text-center">
                  <span className="block text-4xl font-bold leading-none text-industrial">+</span>
                  <span className="mt-2 block text-sm font-semibold text-charcoal">
                    View Full Gallery
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
