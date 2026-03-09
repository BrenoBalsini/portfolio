import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ultimate-praia",
    title: "Ultimate Praia",
    description:
      "Full-stack operational platform used by a real military firefighter team to manage lifeguards, posts, equipment and conduct records.",
    longDescription:
      "Production system actively used by Bombeiro Militar SC. Manages the full operational cycle of beach lifeguard teams — from staff and posts to equipment loans and conduct records.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Firebase",
      "Firestore",
      "TailwindCSS 4",
      "React Router",
    ],
    imageUrl: "/projects/ultimate-praia.png",
    githubUrl: "https://github.com/BrenoBalsini/ultimate-praia-portfolio",
    liveUrl: "https://ultimate-praia-portfolio.vercel.app",
    highlights: [
      "Used in production by a real military firefighter team (Bombeiro Militar SC)",
      "Modules for staff, posts & materials, conduct records and equipment loans",
      "Firebase Auth + Firestore for real-time data and secure access",
      "Dark/light theme with full mobile responsiveness",
    ],
  },
  {
    id: "flor-de-sal",
    title: "Flor de Sal",
    description:
      "Full-stack pricing tool for artisans with bilingual support — manages materials, calculates product prices and tracks history.",
    longDescription:
      "Used daily by a real artisan client. Full CRUD for materials and products with automated price calculation, Firebase Auth, and support for Portuguese and English.",
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "Firestore",
      "Lucide React",
      
    ],
    imageUrl: "/projects/flor-de-sal.png",
    githubUrl: "https://github.com/BrenoBalsini/flor-de-sal",
    liveUrl: "https://flor-de-sal.vercel.app",
    highlights: [
      "Used in production by a real artisan client",
      "Bilingual interface (Portuguese / English) with live language switching",
      "Automated price calculation based on materials and labor",
      "Firebase Auth + Firestore with full CRUD for materials and products",
    ],
  },
  {
    id: "bac-lifeguard-system",
    title: "BAC — Lifeguard Scheduling",
    description:
      "SPA that automates biweekly shift scheduling for lifeguard teams, replacing manual spreadsheets with a custom optimization algorithm.",
    longDescription:
      "Built to solve a real scheduling problem for a local lifeguard team. A custom algorithm handles shift constraints, staff preferences and quotas — generating fair, conflict-free schedules automatically.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Custom Algorithm",
      "LocalStorage",
    ],
    imageUrl: "/projects/bac-escalas.png",
    githubUrl: "https://github.com/BrenoBalsini/BAC-Escalas",
    liveUrl: "https://brenobalsini.github.io/BAC-Escalas/",
    highlights: [
      "Custom scheduling algorithm handling constraints, preferences and quotas",
      "Replaced 100% manual spreadsheet work with automated generation",
      "Type-safe architecture with React and TypeScript",
      "Deployed on GitHub Pages — opens directly, no login required",
    ],
  },
];
