import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks } from "@/data/company";
import { services } from "@/data/products";
import { images } from "@/data/images";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-grid-light opacity-60" aria-hidden="true" />
      <div className="container-shell relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
          <div>
            <Link href="/" aria-label="AS Infra Concrete Pvt. Ltd. — Home" className="inline-flex">
              <span className="rounded-lg bg-white p-1.5">
                <Image
                  src={images.logo}
                  alt="AS Infra Concrete Pvt. Ltd. logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </span>
            </Link>
            <p className="mt-4 text-lg font-bold">{company.name}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-industrial">
              {company.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {company.footerDescription}
            </p>
          </div>

          <nav aria-label="Footer — quick links">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-industrial"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — products and services">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">
              Products &amp; Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/60 transition hover:text-industrial"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-industrial" aria-hidden="true" />
                <span>{company.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-industrial" aria-hidden="true" />
                <span>{company.contact.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-industrial" aria-hidden="true" />
                <span>{company.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <p>Ready-Mix Concrete • Infrastructure Solutions • Quality &amp; Reliability</p>
        </div>
      </div>
    </footer>
  );
}
