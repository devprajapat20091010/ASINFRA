import Image from "next/image";
import PlaceholderPortrait from "./PlaceholderPortrait";

interface TeamCardProps {
  name: string;
  designation: string;
  department: string;
  bio: string;
  image: string | null;
}

export default function TeamCard({ name, designation, department, bio, image }: TeamCardProps) {
  return (
    <article className="card overflow-hidden p-0">
      <div className="relative aspect-square bg-slate-100">
        {image ? (
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        ) : (
          <PlaceholderPortrait label="Photo to be added" className="absolute inset-0" />
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-industrial">{department}</p>
        <h3 className="mt-1 text-xl font-bold text-ink">{name}</h3>
        <p className="text-sm font-medium text-slate-500">{designation}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{bio}</p>
      </div>
    </article>
  );
}
