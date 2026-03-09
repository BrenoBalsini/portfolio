"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, FileDown } from "lucide-react";
import Image from "next/image";

const stack = ["React", "Next.js", "TypeScript", "Firebase", "TailwindCSS"];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-blue-500 dark:text-blue-400 font-medium mb-3 tracking-wide uppercase text-sm"
            >
              Available for remote opportunities
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Breno Balsini
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-3"
            >
              Frontend Full Stack Engineer | React · Next.js · TypeScript
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-sm text-gray-500 dark:text-gray-400 mb-5"
            >
              Curitiba, Brazil • Open to Remote
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
            >
              Frontend Full Stack Engineer with 4+ years of experience building
              real-world web applications with React, Next.js and TypeScript.
              Experienced in the full development cycle — from UI design to API
              integration, performance optimization and deployment.
            </motion.p>

            {/* Stack badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-8"
            >
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            >
              <Link
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors font-medium"
              >
                Get in Touch
              </Link>
              <a
                href="/breno-balsini-resume.pdf"
                download
                className="px-8 py-3 flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
              >
                <FileDown size={20} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-6 justify-center md:justify-start"
            >
              <a
                href="https://github.com/BrenoBalsini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/breno-balsini/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 blur-xl opacity-30 scale-110" />
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[3px]">
                <div className="w-full h-full rounded-full bg-gray-950 dark:bg-gray-950" />
              </div>
              {/* Photo */}
              <Image
                src="/perfil.jpeg"
                alt="Breno Balsini"
                fill
                className="rounded-full object-cover p-[3px]"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
