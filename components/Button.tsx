import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline-light" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-industrial focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-industrial text-white shadow-lg shadow-industrial/25 hover:-translate-y-0.5 hover:bg-industrial-dark",
  secondary:
    "bg-white text-charcoal ring-1 ring-slate-300 hover:-translate-y-0.5 hover:bg-slate-100",
  "outline-light":
    "border border-white/40 bg-transparent text-white hover:bg-white/10",
  dark: "bg-charcoal text-white hover:-translate-y-0.5 hover:bg-ink",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: Variant;
  withArrow?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  withArrow = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...rest}>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
