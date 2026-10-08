import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Icon, type IconName } from "@/components/icons";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact AS Infra Concrete Pvt. Ltd. — enquiries for ready-mix concrete supply, plant visits, quotations and project support.",
};

const contactCards: { icon: IconName; label: string; value: string }[] = [
  { icon: "MapPin", label: "Address", value: company.contact.address },
  { icon: "Phone", label: "Phone", value: company.contact.phone },
  { icon: "Mail", label: "Email", value: company.contact.email },
  { icon: "Clock3", label: "Business Hours", value: company.contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your project"
        description="Enquiries, quotations, plant visits and supply planning — the AS Infra Concrete team is ready to help."
      />

      {/* Contact details */}
      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Company Information"
              title="Reach us directly"
              description="All contact details below are placeholders — verified address, phone, email and business hours will be added to data/company.ts."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => (
              <Reveal key={card.label} delay={index * 80} className="h-full">
                <div className="card h-full text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-industrial/10 text-industrial">
                    <Icon name={card.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                    {card.label}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-ink">{card.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch + form */}
      <section className="section bg-paper">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Get In Touch"
              title="Tell us about your project"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Whether you need a single load for a small slab or a continuous supply for a
                large infrastructure project, share your requirements and we will plan the mix,
                the plant time and the delivery schedule around you.
              </p>
              <p>
                Prefer to talk? Use the phone number or email address listed above — or send the
                form and we will get back to you during business hours.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "Mix selection guidance for your application",
                "Supply planning and delivery scheduling",
                "Quotations for project volumes",
                "Plant visits and quality documentation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <Icon name="CheckCircle2" className="mt-0.5 h-5 w-5 shrink-0 text-industrial" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
