import type { IconName } from "@/components/icons";
import { images } from "./images";

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  image: string | null;
}

/**
 * Products & services. Only services applicable to a ready-mix concrete
 * company are listed. Descriptions are editable and contain no invented claims.
 */
export const services: Service[] = [
  {
    icon: "Factory",
    title: "Ready Mix Concrete",
    description:
      "Ready-mix concrete produced at our batching plant to controlled mix designs and delivered to site, ready to pour.",
    href: "/ready-mix-concrete",
    image: images.factory[2].src,
  },
  {
    icon: "Truck",
    title: "Concrete Supply & Delivery",
    description:
      "Planned batching, transit and on-site delivery coordinated to keep your construction schedule on track.",
    href: "/ready-mix-concrete",
    image: images.factory[0].src,
  },
  {
    icon: "Building2",
    title: "Infrastructure Solutions",
    description:
      "Concrete supply and technical support for roads, bridges, industrial and public infrastructure works.",
    href: "/infrastructure",
    image: images.factory[3].src,
  },
  {
    icon: "FlaskConical",
    title: "Quality & Testing",
    description:
      "Structured quality control across materials, batching and finished concrete, with testing and monitoring at every stage.",
    href: "/quality",
    image: null,
  },
  {
    icon: "Handshake",
    title: "Project Support",
    description:
      "Responsive coordination with contractors, developers and site teams — from enquiry and mix selection to delivery.",
    href: "/contact",
    image: null,
  },
];
