"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 rounded text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

export default function Contact() {
  const contactInfo = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/breno-balsini",
      href: "https://www.linkedin.com/in/breno-balsini/",
      copyable: false,
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/BrenoBalsini",
      href: "https://github.com/BrenoBalsini",
      copyable: false,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "balsini.breno@gmail.com",
      href: null,
      copyable: true,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+55 41 99145-5658",
      href: null,
      copyable: true,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Curitiba, Brazil (Open to Remote)",
      href: null,
      copyable: false,
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
          {contactInfo.map((item, index) => {
            const isLastOdd =
              index === contactInfo.length - 1 && contactInfo.length % 2 !== 0;

            const baseCard = (
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-blue-600 dark:text-blue-400 mt-1">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">
                    {item.label}
                  </h3>
                  <div className="flex items-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.value}
                    </p>
                    {item.copyable && <CopyButton text={item.value} />}
                  </div>
                </div>
              </div>
            );

            const clickableCard = (
              <a
                href={item.href!}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={isLastOdd ? "md:col-span-2" : ""}
              >
                {item.href ? clickableCard : baseCard}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
