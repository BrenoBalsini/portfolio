// src/App.tsx

// Importe o CSS com as diretivas do Tailwind
import "./index.css";

// Importe os componentes de layout
import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

// Importe as seções da página
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ProjectHighlight from "./components/sections/ProjectHighlight";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="bg-primary text-text-main font-sans">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
        <Hero />
        <About />
        <ProjectHighlight />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
