import type { IconName } from "@/components/icons";

/**
 * Single source of truth for all company content.
 * Text in [square brackets] is an editable placeholder — replace it with
 * verified company information before publishing. Nothing here is invented.
 */
export const company = {
  name: "AS Infra Concrete Pvt. Ltd.",
  shortName: "AS Infra Concrete",
  tagline: "Ready-Mix Concrete",
  metaDescription:
    "AS Infra Concrete Pvt. Ltd. — quality-driven ready-mix concrete production, modern plant infrastructure and dependable supply for construction and infrastructure projects.",

  hero: {
    label: "AS INFRA CONCRETE PVT. LTD.",
    line1: "Building Strength.",
    line2: "Delivering Reliability.",
    text: "Introduce AS Infra Concrete Pvt. Ltd. here — a ready-mix concrete company focused on quality production, modern plant infrastructure and reliable supply for construction and infrastructure projects.",
  },

  intro: {
    eyebrow: "Who We Are",
    title: "Concrete you can build on.",
    paragraphs: [
      "AS Infra Concrete Pvt. Ltd. was founded with a single mission: to redefine construction standards by delivering high-grade, reliable ready-mix concrete (RMC) tailored to modern infrastructure needs. We stand for engineering accuracy, transparency, and uncompromised quality. Guided by strict industry standards and IS codes, we ensure every pour meets exact strength and durability requirements, empowering builders and contractors to execute projects with complete confidence.",
      "Equipped with state-of-the-art computerised batching plant technology, automated aggregate bins, and continuous material monitoring, our plant delivers unmatched production accuracy and batch-to-batch consistency. Our streamlined supply chain and dedicated transit mixers ensure timely delivery directly to your site. From commercial developers and infrastructure contractors to industrial builders and private developers, we serve a broad range of clients who rely on us for seamless execution and technical support.",
    ],
    image: "/images/factory/silos-close-up.png",
    imageAlt: "AS Infra Concrete batching plant with aggregate bins and conveyor system",
  },

  /** Non-numeric highlights only — no invented statistics. */
  highlights: [
    {
      icon: "ShieldCheck",
      title: "Quality Driven",
      text: "A structured focus on consistent, well-controlled concrete — batch after batch.",
    },
    {
      icon: "Compass",
      title: "Engineering Focused",
      text: "Mix design, batching and technical decisions guided by engineering discipline.",
    },
    {
      icon: "Truck",
      title: "Reliable Supply",
      text: "Planned production, logistics and delivery built around your project schedule.",
    },
    {
      icon: "Users",
      title: "Customer Centric",
      text: "Responsive coordination with contractors, developers and site teams.",
    },
  ] as { icon: IconName; title: string; text: string }[],

  whyChooseUs: [
    {
      icon: "ShieldCheck",
      title: "Quality Focus",
      text: "Every batch is produced under structured quality control, from raw materials to dispatch.",
    },
    {
      icon: "Clock3",
      title: "Reliable Operations",
      text: "Disciplined plant operations and logistics planning to keep supply on schedule.",
    },
    {
      icon: "Ruler",
      title: "Engineering Approach",
      text: "Technical rigour in mix design, batching accuracy and on-site support.",
    },
    {
      icon: "Truck",
      title: "Consistent Supply",
      text: "Dependable production and delivery planning for continuous project needs.",
    },
    {
      icon: "HardHat",
      title: "Safety Conscious",
      text: "Safety-first practices across the plant, logistics and on-site delivery.",
    },
    {
      icon: "Users",
      title: "Customer Focus",
      text: "Clear communication and responsive support at every stage of a project.",
    },
  ] as { icon: IconName; title: string; text: string }[],

  approach: [
    {
      icon: "FlaskConical",
      title: "Quality First",
      text: "Controlled materials, accurate batching and documented checks at every stage of production.",
    },
    {
      icon: "Clock3",
      title: "Reliability",
      text: "Realistic planning and disciplined execution so that supply commitments are kept.",
    },
    {
      icon: "Handshake",
      title: "Partnership",
      text: "Long-term, transparent relationships with contractors, developers and infrastructure teams.",
    },
  ] as { icon: IconName; title: string; text: string }[],

  values: [
    {
      icon: "ShieldCheck",
      title: "Integrity",
      text: "Honest dealings with customers, suppliers and authorities.",
    },
    {
      icon: "Award",
      title: "Quality",
      text: "Uncompromising standards in materials, production and delivery.",
    },
    {
      icon: "HardHat",
      title: "Safety",
      text: "A safe workplace and safe practices across plant and site.",
    },
    {
      icon: "Leaf",
      title: "Responsibility",
      text: "Responsible use of resources and care for the communities around us.",
    },
  ] as { icon: IconName; title: string; text: string }[],

  vision: "To build a trusted name in ready-mix concrete by setting high standards for quality, consistency, reliability and responsible construction support.",
  mission: "To deliver quality-focused ready-mix concrete through disciplined production, reliable operations and customer-oriented service, while continuously improving our processes to meet the evolving needs of construction and infrastructure projects.",

  whyWeExist:
    "AS Infra Concrete Pvt. Ltd. exists to support the growing needs of construction and infrastructure projects with dependable ready-mix concrete solutions. Our purpose is to make concrete supply more consistent, organised and reliable by focusing on quality-driven production, disciplined operations and responsive customer support.",

  philosophy: {
    title: "Operational Philosophy",
    text: "Our approach is built around consistency, disciplined operations and clear communication. We focus on maintaining a structured process from material handling and production through to delivery, while keeping customer requirements and project schedules at the centre of our operations.",
    points: [
      "Consistency over shortcuts — the same standards on every batch.",
      "Disciplined batching, testing and documentation.",
      "Clear, proactive communication with every customer.",
    ],
  },

  journey:
    "AS Infra Concrete Pvt. Ltd. is building its journey around a clear commitment to quality, consistency and dependable service in ready-mix concrete. From establishing disciplined production and delivery practices to strengthening relationships with customers and project teams, our focus remains on creating a reliable foundation for long-term growth. As the company develops, this journey will continue to be shaped by operational excellence, continuous improvement and the evolving needs of the construction and infrastructure sector.",

  contact: {
    address: "Building No./Flat No.: 9/DR/01 Name Of Premises/Building: Goner Road/Street: Ring Road Locality/Sub Locality: Sanganer City/Town/Village: Jaipur District: Jaipur State: Rajasthan PIN Code: 303905",
    phone: "+91 8003349997",
    email: "admin@asinfraconcrete.com",
    hours: "24 hours supply concrete",
  },

  footerDescription:
    "AS Infra Concrete Pvt. Ltd. is focused on delivering quality ready-mix concrete with a strong emphasis on consistency, reliability and dependable project support. We aim to support construction and infrastructure projects through disciplined production, quality-focused operations and timely concrete supply.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Products", href: "/products" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Projects", href: "/projects" },
  { label: "Quality", href: "/quality" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
