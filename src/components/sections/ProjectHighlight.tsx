import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import florDeSalMockup from "../../assets/flor-de-sal-mockup.png";

export default function ProjectHighlight() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-main mb-8 text-center">
          Projeto em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-secondary p-8 rounded-lg shadow-lg">
          <a
            href="https://brenobalsini.github.io/flor-de-sal/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src={florDeSalMockup}
              alt="Mockup do projeto Flor de Sal"
              className="rounded-md transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <div className="text-right">
            <h3 className="text-xl font-serif font-bold text-highlight mb-2">
              Flor de Sal
            </h3>
            <p className="text-text-secondary mb-4">
              Uma Single Page Application (SPA) construída para simplificar a
              precificação de produtos a partir do cadastro de custos.
            </p>
            <div className="flex justify-end gap-x-4 my-4 flex-wrap">
              <span className="bg-primary text-highlight text-sm font-semibold px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-primary text-highlight text-sm font-semibold px-3 py-1 rounded-full">
                TypeScript
              </span>
              <span className="bg-primary text-highlight text-sm font-semibold px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
            </div>
            <div className="flex justify-end gap-6 mt-4">
              <a
                href="https://github.com/BrenoBalsini/flor-de-sal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-highlight transition-colors"
              >
                Código <FaGithub size={22} />
              </a>
              <a
                href="https://brenobalsini.github.io/flor-de-sal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-highlight transition-colors"
              >
                Ver Online <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
