
import React from "react";
import HighlightedText from "./HighlightedText";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#040535] to-[#4740ff] pt-12 pb-10 px-6 md:px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-inspira-darkBlue/30 to-white/5 z-0"></div>
      
      <div className="container mx-auto z-10">
        <div className="flex flex-col items-center">
          <div className="max-w-3xl text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
              Conviértete en el <HighlightedText>perfil digital</HighlightedText> que las startups y empresas tech buscan
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/90 animate-fade-in animate-delay-100">
              Impulsa tu crecimiento profesional con habilidades digitales, herramientas no-code y automatizaciones, 
              en un programa 80% práctico liderado por expertos del ecosistema tech de LATAM.
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-200 mb-6">
              <a href="https://airtable.com/appUU31Gq4ELV7uei/shrvbf7GdDYuYFSpa" className="btn-primary text-center w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                Únete a la lista de espera
              </a>
              
              <a href="#programa" className="btn-secondary text-center w-full sm:w-auto">
                Conoce más del programa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
