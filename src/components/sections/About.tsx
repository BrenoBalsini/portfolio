import profileImage from "../../assets/profile-zoom.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl text-text-main mb-8 text-center font-bold">
          Sobre Mim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 text-text-secondary">
            <p className="mb-4">
              Minha jornada no mundo digital começou de uma forma prática e
              focada em resultados: construindo aplicações com a plataforma
              no-code Bubble. Essa experiência foi fundamental, pois me ensinou
              a pensar como um criador de produtos, focando na lógica de
              negócio, na experiência do usuário e na agilidade para transformar
              uma ideia em algo funcional e validável.
            </p>
            <p className="mb-4">
              Hoje, meu foco principal está no ecossistema React, utilizando
              TypeScript para garantir um código limpo e de fácil manutenção.
              Sou um grande entusiasta do Tailwind CSS pela agilidade que ele
              proporciona na criação de sistemas de design coesos e interfaces
              totalmente responsivas. Em meus projetos, priorizo a simplicidade
              na resolução de problemas e uma atenção especial aos detalhes que
              impactam a experiência do usuário.
            </p>
            <p>Aqui estão algumas tecnologias com as quais tenho trabalhado:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4 list-inside list-disc marker:text-highlight">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="relative group w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-highlight rounded-md transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
            <img
              src={profileImage}
              alt="Sua Foto"
              className="relative w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
