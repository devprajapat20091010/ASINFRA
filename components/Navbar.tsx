"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { navLinks } from "@/data/company";
import { images } from "@/data/images";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Transparent over the home hero; solid once scrolled (or on inner pages).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-white/10 bg-ink/95 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="AS Infra Concrete Pvt. Ltd. — Home"
          className="flex items-center"
        >
          <span className="rounded-lg bg-white p-1.5 shadow-md ring-1 ring-black/5">
            <Image
              src={images.logo}
              alt="AS Infra Concrete Pvt. Ltd. logo"
              width={44}
              height={44}
              priority
              className="h-10 w-10 object-contain"
            />
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active ? "text-industrial" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-industrial"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" className="px-5 py-2.5">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-ink lg:hidden">
          <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
          <nav aria-label="Mobile" className="container-shell relative flex flex-col py-8">
            {navLinks.map((link, index) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ animationDelay: `${index * 40}ms` }}
                  className={`animate-fade-up border-b border-white/10 py-4 font-display text-2xl font-semibold ${
                    active ? "text-industrial" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/contact" variant="primary" className="mt-8 w-full">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
