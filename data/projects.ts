export interface Project {
  name: string;
  location: string;
  category: string;
  status: string;
  description: string;
  /** Path under /public, or null to show a placeholder image panel. */
  image: string | null;
}

export const projectCategories = [
  "All",
  "Infrastructure",
  "Commercial",
  "Residential",
  "Industrial",
  "Other",
] as const;

/**
 * Project portfolio. Intentionally empty — no projects are invented.
 * The Projects page shows a professional empty state until real projects
 * are added here.
 */
export const projects: Project[] = [];

/**
 * Placeholder entries for the home page "Featured Projects" section.
 * Images shown are the company's own facility photographs used as
 * stand-ins; every text field is a placeholder.
 */
export const featuredProjects: Project[] = [
  {
    name: "[Project name to be added]",
    location: "[Location to be added]",
    category: "Infrastructure",
    status: "[Status to be added]",
    description: "Project information coming soon.",
    image: "/images/factory/plant-overview.png",
  },
  {
    name: "[Project name to be added]",
    location: "[Location to be added]",
    category: "Commercial",
    status: "[Status to be added]",
    description: "Project information coming soon.",
    image: "/images/factory/plant-batching-1.jpeg",
  },
  {
    name: "[Project name to be added]",
    location: "[Location to be added]",
    category: "Industrial",
    status: "[Status to be added]",
    description: "Project information coming soon.",
    image: "/images/factory/silos-power-backup.png",
  },
];
