
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center bg-gradient-1 pt-16 hexagon-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-inspira-darkBlue/90 to-inspira-blue/70 z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
            Conviértete en el perfil digital que las startups y empresas tech buscan
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-white/90 animate-fade-in animate-delay-100">
            Impulsa tu crecimiento profesional con habilidades digitales, herramientas no-code y automatizaciones, 
            en un programa 80% práctico liderado por expertos del ecosistema tech de LATAM.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
            <a 
              href="#unete" 
              className="btn-primary flex items-center justify-center gap-2"
            >
              Únete a la lista de espera
              <ArrowRight size={18} />
            </a>
            
            <a 
              href="#programa" 
              className="btn-secondary"
            >
              Conoce más del programa
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
