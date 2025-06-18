
import React from "react";

const CTA = () => {
  return (
    <section id="unete" className="py-20 px-4 bg-gradient-to-br from-inspira-darkBlue to-inspira-blue text-white">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
          ¡Sé parte de la próxima generación de líderes digitales en LATAM!
        </h2>
        
        <p className="text-lg mb-10 animate-fade-in animate-delay-100">
          Regístrate y sé el primero en enterarte cuando abramos el Cohorte 2.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://airtable.com/appUU31Gq4ELV7uei/shrvbf7GdDYuYFSpa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary animate-pulse text-center"
          >
            Aplica al Programa No-code Builders
          </a>
        </div>
        
        <p className="text-sm mt-4 text-white/70">
          No hacemos spam. Solo te contactaremos cuando haya novedades importantes.
        </p>
      </div>
    </section>
  );
};

export default CTA;
