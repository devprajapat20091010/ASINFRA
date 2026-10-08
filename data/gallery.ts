export type GalleryCategory = "Company" | "Plant" | "Machinery";

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  /** true for logos / graphics that must not be cropped (object-contain). */
  contain?: boolean;
}

export const galleryCategories = ["All", "Company", "Plant", "Machinery"] as const;

/**
 * Gallery items — built from the company images provided.
 * Add new items here to extend the gallery; no component changes needed.
 */
export const galleryItems: GalleryItem[] = [
  {
    src: "/images/factory/plant-overview.png",
    alt: "Wide view of the AS Infra Concrete ready-mix concrete plant and surrounding site",
    title: "Plant Overview",
    category: "Plant",
  },
  {
    src: "/images/factory/plant-batching-1.jpeg",
    alt: "AS Infra Concrete batching plant with aggregate storage bins and inclined conveyor",
    title: "Batching Plant & Conveyor",
    category: "Plant",
  },
  {
    src: "/images/factory/silos-power-backup.png",
    alt: "Cement storage silos with backup power generator at the AS Infra Concrete plant",
    title: "Cement Silos & Power Backup",
    category: "Machinery",
  },
  {
    src: "/images/factory/plant-elevation.png",
    alt: "Elevation view of the AS Infra Concrete batching plant across the site boundary",
    title: "Plant Elevation",
    category: "Plant",
  },
  {
    src: "/images/factory/silos-close-up.png",
    alt: "Close-up of the cement storage silos at the AS Infra Concrete plant",
    title: "Cement Silos — Close View",
    category: "Machinery",
  },
  {
    src: "/images/logo/logo.png",
    alt: "AS Infra Concrete Pvt. Ltd. — Ready-Mix Concrete logo",
    title: "AS Infra Concrete Logo",
    category: "Company",
    contain: true,
  },
];
