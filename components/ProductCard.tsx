import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon, type IconName } from "./icons";

interface ProductCardProps {
  icon: IconName;
  title: string;
  description: string;
  href: string;
}

export default function ProductCard({ icon, title, description, href }: ProductCardProps) {
  return (
    <article className="card group flex h-full flex-col">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-industrial/10 text-industrial">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-xl font-bold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-industrial transition-colors hover:text-industrial-dark"
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
