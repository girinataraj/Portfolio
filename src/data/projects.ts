export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Turf Management",
    description: "A platform to manage turf bookings, payments, and schedules.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "HOD Management",
    description: "An admin portal for department heads to manage resources and students.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Vehicle Management",
    description: "Track and maintain vehicle records for organizations.",
    tags: ["React", "Firebase", "Tailwind"],
    link: "#",
  },
];
