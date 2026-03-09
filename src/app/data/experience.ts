import { Experience, TechSkill } from "@/types";

export const experiences: Experience[] = [
  {
    id: "freelance-2022",
    company: "Freelance",
    role: "Frontend Engineer",
    period: "Feb 2022 – Present",
    location: "Remote",
    description:
      "Built and maintained personal web apps with React and Next.js focused on real operational problems — scheduling, data management and pricing automation.",
    achievements: [
      "Developed production-ready SPAs used by real clients and teams, from requirements gathering to deployment",
      "Implemented authentication, forms and data flows consuming REST APIs and Firebase",
      "Used no-code tools (Bubble) for quick MVP validation, then translated ideas into production React code",
      "Worked closely with end users to iterate on UX and usability across multiple projects",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "REST APIs",
      "Zustand",
      "Vercel",
    ],
  },
  {
    id: "zeno-2020",
    company: "Zeno Legal Experience Management",
    role: "Finance Department",
    period: "Dec 2020 – Nov 2021",
    location: "Curitiba, Brazil",
    description:
      "Worked in the finance department of a legal tech startup, focusing on data reporting and process automation.",
    achievements: [
      "Built automated Excel and Google Sheets dashboards for financial reporting",
      "Reduced manual work and improved data accuracy across financial processes",
      "Collaborated with internal teams to understand reporting needs and deliver reliable outputs",
    ],
    technologies: ["Excel", "Google Sheets", "Data Automation"],
  },
];

export const techSkills: TechSkill[] = [
  {
    category: "Core Technologies",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "State & Styling",
    items: ["TailwindCSS", "ShadcnUI", "Zustand", "Context API"],
  },
  {
    category: "Backend & Tools",
    items: [
      "Firebase (Firestore, Auth)",
      "REST APIs",
      "Git",
      "GitHub",
      "Vercel",
      "Figma",
    ],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library"],
  },
];

export const education = [
  {
    institution: "Rocketseat",
    degree: "Full Stack Web Development Specialization",
    period: "2024 – 2025",
    note: "",
  },
  {
    institution: "UTFPR",
    degree: "Mathematics — Undergraduate",
    period: "2018 – 2023",
    note: "Not completed — strong foundation in logic, algorithms and analytical thinking",
  },
];
