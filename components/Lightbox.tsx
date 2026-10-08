"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const buttonClasses =
  "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-industrial hover:border-industrial";

/**
 * Full-screen image viewer with previous/next navigation and keyboard
 * support (Escape to close, arrow keys to navigate).
 */
export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const count = items.length;
  const item = items[index];

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + count) % count);
  }, [index, count, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % count);
  }, [index, count, onNavigate]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [goPrev, goNext, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className={`${buttonClasses} absolute right-4 top-4 z-10`}
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          goPrev();
        }}
        aria-label="Previous image"
        className={`${buttonClasses} absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 sm:flex`}
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <figure
        className="flex max-h-[85vh] w-full max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex max-h-[72vh] w-full items-center justify-center overflow-hidden rounded-lg bg-black/40">
          <Image
            src={item.src}
            alt={item.alt}
            width={1600}
            height={1200}
            sizes="100vw"
            className={`max-h-[72vh] w-auto max-w-full ${item.contain ? "object-contain p-6" : "object-contain"}`}
          />
        </div>
        <figcaption className="mt-4 flex w-full items-center justify-between gap-4 text-sm text-white/80">
          <span>
            {item.title} — {item.category}
          </span>
          <span className="shrink-0 font-semibold">
            {index + 1} / {count}
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          goNext();
        }}
        aria-label="Next image"
        className={`${buttonClasses} absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 sm:flex`}
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
