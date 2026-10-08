"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { galleryCategories, galleryItems } from "@/data/gallery";
import Lightbox from "./Lightbox";

type CategoryFilter = (typeof galleryCategories)[number];

export default function GalleryGrid() {
  const [active, setActive] = useState<CategoryFilter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === category
                ? "bg-industrial text-white shadow-md shadow-industrial/25"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightboxIndex(index)}
            aria-label={`View image: ${item.title}`}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`h-auto w-full transition duration-500 group-hover:scale-105 ${
                item.contain ? "bg-white object-contain p-6" : "object-cover"
              }`}
            />
            <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="p-4 text-white">
                <p className="text-sm font-bold">{item.title}</p>
                <p className="text-xs text-white/70">{item.category}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-slate-500">
          No images in this category yet.
        </p>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
