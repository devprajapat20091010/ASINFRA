export interface TeamMember {
  name: string;
  designation: string;
  department: string;
  bio: string;
  /** Path under /public, or null to show a styled placeholder portrait. */
  image: string | null;
}

/**
 * Team member profiles. All fields are placeholders until real information
 * and photos are supplied. Add or remove entries as needed.
 */
export const team: TeamMember[] = [
  {
    name: "[Team Member Name]",
    designation: "[Designation]",
    department: "[Department]",
    bio: "[Short biography to be added.]",
    image: null,
  },
  {
    name: "[Team Member Name]",
    designation: "[Designation]",
    department: "[Department]",
    bio: "[Short biography to be added.]",
    image: null,
  },
  {
    name: "[Team Member Name]",
    designation: "[Designation]",
    department: "[Department]",
    bio: "[Short biography to be added.]",
    image: null,
  },
  {
    name: "[Team Member Name]",
    designation: "[Designation]",
    department: "[Department]",
    bio: "[Short biography to be added.]",
    image: null,
  },
];
