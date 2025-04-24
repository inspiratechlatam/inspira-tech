
import React from "react";
import { BrainCircuit, Globe, Users, Target, MessageSquare } from "lucide-react";

const Program = () => {
  const programFeatures = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-inspira-turquoise" />,
      text: "Teoría + práctica desde la semana 1"
    },
    {
      icon: <Globe className="h-6 w-6 text-inspira-turquoise" />,
      text: "Modalidad 100% online"
    },
    {
      icon: <Users className="h-6 w-6 text-inspira-turquoise" />,
      text: "Nivel principiante a intermedio"
    },
    {
      icon: <Target className="h-6 w-6 text-inspira-turquoise" />,
      text: "Proyecto personal con feedback"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-inspira-turquoise" />,
      text: "Comunidad activa + meetups"
    }
  ];

  return (
    <section id="programa" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-inspira-darkBlue mb-6">
            ¿Cómo funciona el programa?
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Inspira Tech es un programa intensivo 100% online que combina teoría (20%) y práctica (80%) para enseñarte habilidades digitales con impacto real. Desde la primera semana construirás un proyecto propio con el apoyo de expertos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gray-50 p-3 rounded-full w-fit mb-4">
                {feature.icon}
              </div>
              <p className="text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
