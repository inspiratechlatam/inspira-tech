
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const ResourcesSection = () => {
  return (
    <section id="recursos" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-inspira-darkBlue mb-6 animate-fade-in">
          ¿Quieres comenzar a aprender hoy mismo?
        </h2>
        
        <p className="text-lg text-gray-600 mb-10 animate-fade-in animate-delay-100 max-w-3xl mx-auto">
          Explora nuestra biblioteca de recursos gratuitos y empieza a descubrir el mundo de las startups, 
          habilidades digitales, inteligencia artificial y mucho más. También encontrarás historias reales 
          de líderes que están transformando el ecosistema tech en LATAM y en el mundo.
        </p>
        
        <div className="animate-fade-in animate-delay-200">
          <Link 
            to="/recursos" 
            className="bg-inspira-blue hover:bg-inspira-purple text-white font-bold px-8 py-3 rounded-full transition-all duration-300 inline-block text-center"
          >
            Navegar recursos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
