import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "bac-lifeguard-system",
    title: "BAC - Lifeguard Scaling System",
    description: "Complex SPA automating staff scheduling for lifeguard teams with custom optimization algorithms",
    longDescription: "Developed a sophisticated Single Page Application that replaces manual spreadsheet work with an intelligent scheduling system. The application handles shift constraints, staff preferences, and quota management through a custom-built optimization algorithm.",
    technologies: ["React", "TypeScript", "Algorithm Optimization", "Zustand"],
    imageUrl: "/projects/bac-escalas.png",
    githubUrl: "https://github.com/BrenoBalsini/BAC-Escalas",
    highlights: [
      "Custom optimization algorithm for shift scheduling",
      "Type-safe architecture ensuring data reliability",
      "Replaced manual spreadsheet work with automated solution",
      "Handles complex constraints and preferences"
    ]
  },
  {
    id: "zeno-erp",
    title: "Zeno B2B ERP System",
    description: "Frontend architecture for enterprise management platform handling inventory and sales workflows",
    longDescription: "Architected the complete frontend for a B2B management platform, focusing on complex data flows for inventory tracking and sales operations. Designed intuitive UI workflows that directly improved user retention.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "REST APIs"],
    imageUrl: "/projects/zeno.png",
    highlights: [
      "Architected entire frontend architecture from scratch",
      "External API integrations reducing manual entry by 40%",
      "Complex data flows for inventory and sales management",
      "Translated business requirements into intuitive UI"
    ]
  },
  {
    id: "fans-trato-saas",
    title: "Fans & Trato SaaS Platforms",
    description: "Multiple SaaS platforms with payment integration and secure authentication systems",
    longDescription: "Led UI implementation for rapid MVP validation across multiple SaaS products, ensuring pixel-perfect design translation from Figma. Integrated critical features like payment gateways and authentication.",
    technologies: ["React", "TypeScript", "Figma", "Payment APIs", "Authentication"],
    imageUrl: "/projects/fans-trato.png",
    highlights: [
      "Pixel-perfect Figma to code translation",
      "Payment gateway integration",
      "Secure authentication implementation",
      "Direct stakeholder collaboration for feature iteration"
    ]
  }
];
