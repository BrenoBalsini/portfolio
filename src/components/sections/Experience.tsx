"use client";

import { motion } from "framer-motion";
import { experiences, techSkills, education } from "../../app/data/experience";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Professional experience and technical expertise
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="text-blue-600 dark:text-blue-400" />
            Professional Experience
          </h3>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg mb-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {exp.role}
                  </h4>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p className="font-medium">{exp.period}</p>
                  <p className="text-sm">{exp.location}</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {exp.description}
              </p>

              <div className="mb-4">
                <h5 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Key Achievements:
                </h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 dark:text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-600 dark:text-blue-400" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <h4 className="text-xl font-bold mb-2">{edu.institution}</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{edu.degree}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
