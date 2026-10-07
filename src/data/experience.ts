/**
 * Professional experience timeline.
 * Add new roles at the top of the array.
 */
export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  /** Mark true for fields that still need your real details. */
  placeholder?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    id: "i4nnova",
    company: "i4nnova Ltd",
    role: "[EDIT] Your role title",
    location: "Lagos, Nigeria",
    period: "[EDIT] Start — Present",
    description:
      "[EDIT] Summarize your responsibilities across software, DevOps, and creative technology at i4nnova Ltd.",
    placeholder: true,
  },
];

export type EducationItem = {
  id: string;
  school: string;
  program: string;
  note: string;
  location?: string;
  period?: string;
};

export const education: EducationItem[] = [
  {
    id: "covenant",
    school: "Covenant University",
    program: "Information and Communication Engineering",
    note: "Graduate of Covenant University",
    location: "Nigeria",
    period: "[EDIT] Years attended",
  },
];
