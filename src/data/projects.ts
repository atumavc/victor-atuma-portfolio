/**
 * SELECTED WORK — editable project list.
 * Replace placeholders with your real projects, images, and links.
 * Set `link` to "#" or leave empty until you have a URL.
 */
export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  /** Path under /public or absolute URL. Use placeholder until you add media. */
  image: string;
  link: string;
  /** Mark true for entries that still need your real content. */
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Project Name",
    category: "Software • Creative Development",
    description:
      "[EDIT] Short description of an interactive web platform or product you built. Replace this placeholder with your real project story.",
    technologies: ["React", "TypeScript", "Next.js"],
    image: "/images/project-placeholder.svg",
    link: "#",
    placeholder: true,
  },
  {
    id: "02",
    title: "Project Name",
    category: "DevOps • Infrastructure",
    description:
      "[EDIT] Describe a systems, automation, or infrastructure project. Keep this entry until you add a real case study.",
    technologies: ["CI/CD", "Containers", "Linux"],
    image: "/images/project-placeholder.svg",
    link: "#",
    placeholder: true,
  },
  {
    id: "03",
    title: "Project Name",
    category: "3D • Interactive Experience",
    description:
      "[EDIT] Showcase a 3D animation, motion piece, or creative technology experiment. Update image and link when ready.",
    technologies: ["3D Animation", "Motion Design"],
    image: "/images/project-placeholder.svg",
    link: "#",
    placeholder: true,
  },
];
