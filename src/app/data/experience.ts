import { Experience, TechSkill } from "@/types";

export const experiences: Experience[] = [
  {
    id: "freelance-2023",
    company: "Freelance",
    role: "Software Engineer",
    period: "2023 – Present",
    location: "Remote",
    description: "Full-cycle developer for multiple startups (Fans, Trato, Zeno), delivering end-to-end product features",
    achievements: [
      "Architected frontend for B2B ERP managing complex inventory and sales flows",
      "Designed API integrations reducing manual data entry by 40%",
      "Led UI implementation ensuring pixel-perfect design translation from Figma",
      "Integrated payment gateways and authentication systems for secure user data handling"
    ],
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Firebase", "REST APIs"]
  }
];

export const techSkills: TechSkill[] = [
  {
    category: "Core Technologies",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3"]
  },
  {
    category: "State & Styling",
    items: ["TailwindCSS", "ShadcnUI"]
  },
  {
    category: "Backend & Tools",
    items: ["Firebase (Firestore, Auth)", "REST APIs", "Git", "Figma"]
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library"]
  }
];

export const education = [
  {
    institution: "Rocketseat",
    degree: "Full Stack Web Development Specialization",
    period: "2024-2025"
  },
  {
    institution: "UTFPR",
    degree: "Mathematics (Undergraduate)",
    period: "Strong foundation in logic and algorithms"
  }
];
