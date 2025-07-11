import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center min-h-screen p-4 md:p-0"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl text-highlight mb-4">Olá, meu nome é</h1>
        <h2 className="text-5xl md:text-7xl font-bold text-text-main font-serif">
          Breno Balsini
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-text-secondary mt-2">
          Eu construo coisas para a web.
        </h3>
        <p className="mt-6 text-text-secondary">
          Desenvolvedor Frontend | Unindo UI/UX e código limpo | React •
          TypeScript • Tailwind CSS
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/brenobalsini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-highlight transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/breno-balsini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-highlight transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
