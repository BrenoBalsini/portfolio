"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../app/data/projects";
import {
  ExternalLink,
  Github,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const productionProjects = ["ultimate-praia", "flor-de-sal"];

  const toggleExpand = (id: string) => {
    setExpandedProject((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Real applications built for real users — from scheduling systems to
            full-stack tools used in production
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => {
            const isProduction = productionProjects.includes(project.id);
            const isExpanded = expandedProject === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row"
              >
                {/* Image — left side */}
                <div className="relative w-full md:w-72 lg:w-96 flex-shrink-0 h-56 md:h-56">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                  {isProduction && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                      <Zap className="w-3 h-3" />
                      In Production
                    </div>
                  )}
                </div>

                {/* Content — right side */}
                <div className="flex flex-col justify-between p-6 flex-1">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                      {project.description}
                    </p>

                    {/* Expandable section */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 border-l-2 border-blue-500 pl-3 italic">
                            {project.longDescription}
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                              Key Highlights:
                            </h4>
                            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                              {project.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2"
                                >
                                  <span className="mt-0.5 text-blue-500">
                                    •
                                  </span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Read more toggle */}
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-4"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-3 h-3" />
                          Show less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3 h-3" />
                          Read more
                        </>
                      )}
                    </button>
                  </div>

                  <div>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
