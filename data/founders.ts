export interface Founder {
  name: string;
  designation: string;
  /** Path under /public, or null to show a styled placeholder portrait. */
  image: string | null;
  bio: string[];
  philosophy: string;
}

/**
 * Founder / leadership profiles.
 * Names, designations and biographies are placeholders — never invented.
 * Add more entries to this array to create additional profile cards.
 */
export const founders: Founder[] = [
  {
    name: "Ashok Kumar Kumhar",
    designation: "Founder & Director",
    image: "/images/factory/founder1.jpg",
    bio: [
      "Ashok Kumar Kumhar is the founder of AS Infra Concrete Pvt. Ltd., with a vision to build a dependable and quality-focused ready-mix concrete company.",
      "His leadership approach is centred on consistent quality, disciplined operations, reliable customer service and long-term relationships with clients and project teams.",
      "Under his direction, AS Infra Concrete aims to establish a strong foundation for sustainable growth while maintaining a professional and responsible approach to the construction and infrastructure sector.",
    ],
    philosophy:
      "A commitment to quality, reliability and responsible business practices, with a focus on building lasting relationships and delivering dependable support to every project.",
  },

  {
  name: "Santosh Kumar Kumhar",
  designation: "Co-Founder & Civil Engineer",
  image: "/images/factory/founder2.jpg",
  bio: [
    "As a Co-Founder and Civil Engineer at AS Infra Concrete Pvt. Ltd., [Second Founder Name] contributes technical knowledge and an engineering-focused approach to the company's operations.",
    "Their role is centred on understanding project requirements, supporting quality-focused concrete solutions and maintaining a practical approach to construction and infrastructure needs.",
    "With a focus on engineering discipline, technical coordination and project requirements, they contribute to the company's commitment to reliable service and consistent quality."
  ],
  philosophy:
    "An engineering-led approach focused on practical solutions, technical discipline, quality and dependable support for construction and infrastructure projects."
},
];