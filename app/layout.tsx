import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} — Ready-Mix Concrete & Infrastructure Solutions`,
    template: `%s | ${company.name}`,
  },
  description: company.metaDescription,
  icons: {
    icon: "/images/logo/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: company.name,
    title: `${company.name} — Ready-Mix Concrete & Infrastructure Solutions`,
    description: company.metaDescription,
    images: [
      {
        url: "/images/logo/logo.png",
        width: 1600,
        height: 1200,
        alt: company.name,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-charcoal antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
