
import React from "react";

const WhyJoin = () => {
  const reasons = [
    "Construyes algo real desde el primer día",
    "Aprendes con expertos activos en startups",
    "Conectas con personas que comparten tu camino",
    "Accedes a recursos exclusivos del mundo tech LATAM",
    "Participas en meetups y dinámicas comunitarias"
  ];

  return (
    <section id="porque-unirse" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          ¿Por qué unirte a Inspira Tech?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <span className="inline-flex items-center justify-center bg-gradient-to-br from-inspira-blue to-inspira-purple text-white rounded-full w-7 h-7 mr-3 mt-1 flex-shrink-0 shadow-md">
                    {index + 1}
                  </span>
                  <span className="text-lg">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center items-center animate-fade-in animate-delay-500">
            <img
              alt="Razones para unirse a Inspira Tech"
              className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-300"
              src="/lovable-uploads/035d133d-4ab5-4dd7-9afc-1dbf92c42c41.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
