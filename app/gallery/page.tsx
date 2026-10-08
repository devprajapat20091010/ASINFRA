import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of AS Infra Concrete Pvt. Ltd. — the batching plant, cement silos, machinery and facility.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Gallery"
        description="Photographs from the AS Infra Concrete Pvt. Ltd. facility — plant, machinery and company identity. Click any image to view it full-screen."
      />

      <section className="section bg-white">
        <div className="container-shell">
          <Reveal>
            <GalleryGrid />
          </Reveal>
        </div>
      </section>
    </>
  );
}
