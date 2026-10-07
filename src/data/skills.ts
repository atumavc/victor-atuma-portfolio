/**
 * Skills — editable categories.
 * DevOps / Cloud entries are placeholders until you confirm your stack.
 */
export type SkillItem = {
  name: string;
  /** Optional short note shown on hover */
  note?: string;
  placeholder?: boolean;
};

export type SkillCategory = {
  id: string;
  title: string;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "software",
    title: "SOFTWARE DEVELOPMENT",
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "devops",
    title: "DEVOPS / CLOUD",
    items: [
      { name: "CI/CD", note: "[EDIT] Tools you actually use", placeholder: true },
      { name: "Containers", note: "[EDIT] e.g. Docker / Kubernetes", placeholder: true },
      { name: "Cloud", note: "[EDIT] Providers you work with", placeholder: true },
      { name: "Linux", note: "[EDIT] Distros / admin focus", placeholder: true },
      { name: "Automation", note: "[EDIT] Scripts & pipelines", placeholder: true },
      { name: "Monitoring", note: "[EDIT] Observability stack", placeholder: true },
      { name: "Infrastructure", note: "[EDIT] IaC / networking", placeholder: true },
    ],
  },
  {
    id: "creative",
    title: "CREATIVE TECHNOLOGY",
    items: [
      { name: "3D Animation" },
      { name: "Interactive Design" },
      { name: "Motion Design" },
      { name: "Creative Development" },
    ],
  },
];

export const aboutPillars = [
  { title: "SOFTWARE", subtitle: "DEVELOPMENT" },
  { title: "DEVOPS", subtitle: "ENGINEERING" },
  { title: "3D", subtitle: "ANIMATION" },
  { title: "CREATIVE", subtitle: "TECHNOLOGY" },
] as const;
