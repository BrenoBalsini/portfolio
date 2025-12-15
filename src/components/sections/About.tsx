"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Focused on writing maintainable, type-safe code with React and TypeScript"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Experienced in rapid prototyping and MVP development for startups"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric",
      description: "Translating complex requirements into intuitive user experiences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing applications for speed and scalability"
    }
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
            I'm a frontend engineer specializing in React and TypeScript, with a passion for 
            building scalable B2B SaaS applications and solving complex technical challenges.
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
              With a strong foundation in mathematics from UTFPR, I bring analytical thinking 
              and problem-solving skills to every project. My experience ranges from building 
              complex scheduling algorithms to architecting full-stack B2B platforms.
            </p>
            <p>
              Currently, I work as a freelance software engineer, collaborating with multiple 
              startups to deliver end-to-end product features. I specialize in the React ecosystem, 
              with expertise in Next.js, TypeScript, and modern state management solutions.
            </p>
            <p>
              I'm passionate about performance optimization, clean architecture, and creating 
              seamless user experiences. When I'm not coding, you'll find me playing guitar, 
              exploring music theory, or diving into the latest tech innovations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
