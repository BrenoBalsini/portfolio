import cvFile from "../../assets/breno-balsini.pdf"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-sm z-50 shadow-lg">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-highlight transition-transform hover:scale-110"
        >
          B.
        </a>
        <div className="hidden md:flex items-center gap-8 text-text-main text-sm">
          <a href="#about" className="hover:text-highlight transition-colors">
            Sobre
          </a>
          <a
            href="#projects"
            className="hover:text-highlight transition-colors"
          >
            Projetos
          </a>
          <a href="#contact" className="hover:text-highlight transition-colors">
            Contato
          </a>
        </div>
        <a
          href={cvFile}
          target="_blank"
          rel=""
          download="breno-balsini.pdf"
          className="border border-highlight text-highlight px-4 py-2 rounded-md hover:bg-highlight/10 transition-colors"
        >
          Meu CV
        </a>
      </nav>
    </header>
  );
}
