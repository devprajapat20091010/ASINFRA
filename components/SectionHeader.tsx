interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const dark = theme === "dark";
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <span
          className={`eyebrow ${centered ? "after:-order-1 after:h-0.5 after:w-10 after:bg-industrial" : ""} ${
            dark ? "text-industrial" : "text-industrial"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/70" : "text-slate-600"
          } ${centered ? "mx-auto max-w-2xl" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
