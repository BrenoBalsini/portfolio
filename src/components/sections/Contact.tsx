"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export default function Contact() {
    const contactInfo = [
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: "LinkedIn",
            value: "linkedin.com/in/breno-balsini",
            href: "https://www.linkedin.com/in/breno-balsini/"
        },
        {
            icon: <Github className="w-6 h-6" />,
            label: "GitHub",
            value: "github.com/BrenoBalsini",
            href: "https://github.com/BrenoBalsini"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "balsini.breno@gmail.com",
            href: null
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+55 41 99145-5658",
            href: null
        },
        {
            icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Curitiba, Brazil (Open to Remote)",
      href: null
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            I'm currently open to new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300"
                >
                  <div className="text-blue-600 dark:text-blue-400 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-blue-600 dark:text-blue-400 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}
