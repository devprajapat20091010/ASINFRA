/**
 * Centralized image configuration.
 * Replace a file in /public/images/... and update the path here — components
 * never hard-code image paths.
 */
export const images = {
  logo: "/images/logo/logo.png",
  hero: "/images/factory/plant-overview.png",
  about: "/images/factory/plant-batching-1.jpeg",
  rmc: "/images/factory/silos-close-up.png",
  infrastructure: "/images/factory/silos-power-backup.png",
  factory: [
    {
      src: "/images/factory/plant-overview.png",
      alt: "Wide view of the AS Infra Concrete ready-mix concrete plant and surrounding site",
      title: "Plant Overview",
    },
    {
      src: "/images/factory/plant-batching-1.jpeg",
      alt: "AS Infra Concrete batching plant with aggregate storage bins and inclined conveyor",
      title: "Batching Plant & Conveyor",
    },
    {
      src: "/images/factory/silos-power-backup.png",
      alt: "Cement storage silos with backup power generator at the AS Infra Concrete plant",
      title: "Cement Silos & Power Backup",
    },
    {
      src: "/images/factory/plant-elevation.png",
      alt: "Elevation view of the AS Infra Concrete batching plant across the site boundary",
      title: "Plant Elevation",
    },
    {
      src: "/images/factory/silos-close-up.png",
      alt: "Close-up of the cement storage silos at the AS Infra Concrete plant",
      title: "Cement Silos — Close View",
    },
  ],
} as const;
