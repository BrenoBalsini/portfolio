"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description:
        "Type-safe architecture with React and TypeScript — readable, scalable and easy to maintain",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Full Cycle",
      description:
        "From UI design and prototyping to API integration, deployment and iteration with real users",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric",
      description:
        "Working closely with end users to gather requirements and continuously improve UX",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Production-Ready",
      description:
        "Projects built for real clients and teams, not just demos — tested, deployed and in active use",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Frontend Full Stack Engineer focused on solving real operational
            problems — building apps that are actually used, by real people, in
            production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Background</h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              I'm a self-driven developer with a background in mathematics and a
              passion for turning real problems into working software. Since 2022
              I've been working as a freelance frontend engineer, owning the full
              development cycle — from understanding the problem with the client
              to shipping and iterating in production.
            </p>
            <p>
              My projects solve concrete operational challenges: the{" "}
              <strong className="text-gray-800 dark:text-gray-200">
                BAC Lifeguard Scheduling System
              </strong>{" "}
              replaced manual spreadsheets for a local lifeguard team with a
              custom algorithm handling shift constraints and staff quotas. The{" "}
              <strong className="text-gray-800 dark:text-gray-200">
                Flor de Sal Craft Pricing App
              </strong>{" "}
              is a full-stack tool used daily by a real artisan client to manage
              materials and automate product pricing.
            </p>
            <p>
              I specialize in the React ecosystem — Next.js, TypeScript,
              TailwindCSS, Firebase — and I'm comfortable working across the
              stack when needed. I care about code quality, usability, and
              building things that actually work for the people using them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
