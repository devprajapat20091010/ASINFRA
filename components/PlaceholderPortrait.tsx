import { User } from "lucide-react";

interface PlaceholderPortraitProps {
  label?: string;
  className?: string;
}

/**
 * Styled placeholder shown when a person's photo has not been provided yet.
 */
export default function PlaceholderPortrait({
  label = "Portrait to be added",
  className = "",
}: PlaceholderPortraitProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 ${className}`}
      role="img"
      aria-label={label}
    >
      <User className="h-14 w-14 text-slate-400" aria-hidden="true" />
      <p className="mt-3 px-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
    </div>
  );
}
