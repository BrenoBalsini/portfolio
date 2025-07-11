import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-highlight mb-4">
          Conecte-se Comigo
        </h2>
        <p className="text-text-secondary mb-10 text-lg">
          A melhor forma de iniciar uma conversa é pelo LinkedIn. Para questões
          técnicas ou para ver meus projetos, meu GitHub está sempre ativo.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://www.linkedin.com/in/breno-balsini/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full sm:w-auto gap-3 border border-highlight text-highlight font-semibold py-3 px-6 rounded-md hover:bg-highlight/10 transition-colors"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/brenobalsini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full sm:w-auto gap-3 border border-text-secondary text-text-secondary font-semibold py-3 px-6 rounded-md hover:bg-secondary transition-colors"
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
