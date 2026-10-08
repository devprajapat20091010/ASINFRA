import Image from "next/image";
import { Clock3, MapPin } from "lucide-react";

interface ProjectCardProps {
  image: string | null;
  name: string;
  location: string;
  category: string;
  status: string;
  description: string;
}

export default function ProjectCard({
  image,
  name,
  location,
  category,
  status,
  description,
}: ProjectCardProps) {
  return (
    <article className="card group overflow-hidden p-0">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {image ? (
          <Image
            src={image}
            alt={`${name} — project image`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            Image to be added
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-industrial/10 px-3 py-1 text-xs font-semibold text-industrial">
            {category}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {status}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink">{name}</h3>
        <div className="mt-3 space-y-1.5 text-sm text-slate-600">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-industrial" aria-hidden="true" />
            {location}
          </p>
          <p className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 shrink-0 text-industrial" aria-hidden="true" />
            {status}
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </article>
  );
}
