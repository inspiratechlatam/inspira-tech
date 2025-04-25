
import React from "react";
import { ArrowRight } from "lucide-react";
import HighlightedText from "./HighlightedText";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#040535] to-[#4740ff] pt-20 pb-16 px-6 md:px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-inspira-darkBlue/30 to-white/5 z-0"></div>
      
      <div className="container mx-auto z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
            Conviértete en el <HighlightedText>perfil digital</HighlightedText> que las startups y empresas tech buscan
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-white/90 animate-fade-in animate-delay-100">
            Impulsa tu crecimiento profesional con habilidades digitales, herramientas no-code y automatizaciones, 
            en un programa 80% práctico liderado por expertos del ecosistema tech de LATAM.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
            <a href="https://airtable.com/appUU31Gq4ELV7uei/shrvbf7GdDYuYFSpa" className="btn-primary flex items-center justify-center gap-2" target="_blank" rel="noopener noreferrer">
              Únete a la lista de espera
              <ArrowRight size={18} />
            </a>
            
            <a href="#programa" className="btn-secondary text-center">
              Conoce más del programa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
