import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-text-secondary">
      <div className="flex justify-center gap-6 mb-4 md:hidden">
        <a
          href="https://github.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-highlight transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-highlight transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className="text-sm">
        Desenvolvido por Breno Balsini ▪ {new Date().getFullYear()}
      </p>
      <p className="text-xs mt-2">
        Construído com React, TypeScript e Tailwind CSS.
      </p>
    </footer>
  );
}
