/**
 * Core personal / brand information.
 * Edit this file to update site-wide copy and contact placeholders.
 */
export const site = {
  name: "Victor ATUMA",
  shortName: "Victor Atuma",
  headline:
    "Information & Communication Engineer | DevOps Engineer | Software Developer | 3D Animator",
  location: "Lagos, Nigeria",
  company: "i4nnova Ltd",
  education: {
    school: "Covenant University",
    degree: "Information and Communication Engineering",
    note: "Graduate of Covenant University",
  },
  label: "SOFTWARE ENGINEER • DEVOPS • CREATIVE TECHNOLOGY",
  heroTitle: ["I BUILD", "DIGITAL", "EXPERIENCES."],
  heroSupporting:
    "I'm Victor Atuma — an Information & Communication Engineer, Software Developer, DevOps Engineer and 3D Animator building technology-driven digital experiences.",
  about: [
    "I'm Victor Atuma, an Information & Communication Engineer with a passion for building software, engineering reliable systems, and creating visually engaging digital experiences.",
    "My work sits at the intersection of engineering and creativity — from software development and DevOps to interactive experiences and 3D animation.",
  ],
  creativeIntro:
    "I don't only ship conventional software — I combine code, systems, design, and 3D to craft interactive digital identities.",
  contactIntro: "Have a project, idea, or opportunity? Let's talk.",
  /**
   * Replace these with your real links when ready.
   * Keep as empty string or "#" until you have a URL.
   */
  links: {
    email: "mailto:hello@example.com", // EDIT: replace with your email
    linkedin: "#", // EDIT: replace with your LinkedIn URL
    github: "#", // EDIT: replace with your GitHub URL
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  disciplines: [
    { title: "SOFTWARE", subtitle: "DEVELOPMENT" },
    { title: "DEVOPS", subtitle: "ENGINEERING" },
    { title: "3D", subtitle: "ANIMATION" },
  ],
} as const;
