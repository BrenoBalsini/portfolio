import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import florDeSalMockup from "../../assets/flor-de-sal-mockup.png";
import bacMockup from "../../assets/bac-mockup.png";

export default function ProjectHighlight() {
  return (
    <section id="projects" className="py-24">
      <div className="grid max-w-4xl mx-auto px-4 gap-4">
        <h2 className="text-3xl font-bold text-text-main mb-8 text-center">
          Projetos em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-secondary p-8 rounded-lg shadow-lg">
          <a
            href="https://brenobalsini.github.io/bac/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src={bacMockup}
              alt="Mockup do projeto Flor de Sal"
              className="rounded-md transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <div className="text-right">
            <h3 className="text-xl text-center md:text-right font-serif font-bold text-highlight mb-2">
              BAC - Escalas
            </h3>
            <p className="text-justify md:text-right text-text-secondary mb-4">
              Uma aplicação web desenvolvida para automatizar e otimizar a complexa tarefa de criar escalas de serviço para salva-vidas. O sistema utiliza um algoritmo customizado para gerar escalas justas e eficientes, respeitando a antiguidade, preferências de posto, cotas de trabalho e folgas solicitadas, transformando horas de trabalho manual em um processo de poucos cliques.
            </p>
            <div className="flex justify-center md:justify-end gap-1 my-4 flex-wrap">
              <span className="bg-primary text-highlight text-sm font-semibold px-2 md:px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-primary text-highlight text-sm font-semibold px-2 md:px-3 py-1 rounded-full">
                TypeScript
              </span>
              <span className="bg-primary text-highlight text-sm font-semibold px-2 md:px-3 py-1 rounded-full">
                Tailwind
              </span>
            </div>
            <div className="flex justify-center md:justify-end gap-6 mt-6">
              <a
                href="https://github.com/BrenoBalsini/bac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-highlight transition-colors"
              >
                Código <FaGithub size={22} />
              </a>
              <a
                href="https://brenobalsini.github.io/bac/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-highlight transition-colors"
              >
                Ver Online <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </div>
        </div>

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
            <h3 className="text-xl text-center md:text-right font-serif font-bold text-highlight mb-2">
              Flor de Sal
            </h3>
            <p className="text-justify md:text-right text-text-secondary mb-4">
              Uma Single Page Application (SPA) construída para simplificar a
              precificação de produtos a partir do cadastro de custos.
            </p>
            <div className="flex justify-center md:justify-end gap-1 my-4 flex-wrap">
              <span className="bg-primary text-highlight text-sm font-semibold px-2 md:px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-primary text-highlight text-sm font-semibold px-2 md:px-3 py-1 rounded-full">
                TypeScript
              </span>
              <span className="bg-primary text-highlight text-sm font-semibold px-2 md:px-3 py-1 rounded-full">
                Tailwind
              </span>
            </div>
            <div className="flex justify-center md:justify-end gap-6 mt-6">
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
