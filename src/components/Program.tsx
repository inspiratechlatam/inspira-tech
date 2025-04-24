
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-inspira-darkBlue mb-4">
          ¿Cómo funciona el programa?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-10">
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              Inspira Tech es un programa intensivo 100% online que combina teoría (20%) y práctica (80%) para enseñarte habilidades digitales con impacto real. Desde la primera semana construirás un proyecto propio con el apoyo de expertos.
            </p>
            
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-4 text-inspira-darkBlue">Formato:</h3>
              <ul className="space-y-4">
                {programFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-gray-100 p-2 rounded-full">
                      {feature.icon}
                    </div>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-gradient-to-br from-inspira-blue to-inspira-purple rounded-xl overflow-hidden shadow-lg">
            <div className="p-6 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Lo que lograrás</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="min-w-5 mt-1">
                    <div className="bg-inspira-turquoise rounded-full h-4 w-4"></div>
                  </div>
                  <p className="text-white">Aprenderás herramientas digitales valoradas en el mercado laboral</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 mt-1">
                    <div className="bg-inspira-turquoise rounded-full h-4 w-4"></div>
                  </div>
                  <p className="text-white">Construirás un proyecto digital desde cero</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 mt-1">
                    <div className="bg-inspira-turquoise rounded-full h-4 w-4"></div>
                  </div>
                  <p className="text-white">Desarrollarás habilidades de diseño, automatización y presentación</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 mt-1">
                    <div className="bg-inspira-turquoise rounded-full h-4 w-4"></div>
                  </div>
                  <p className="text-white">Conectarás con una red de profesionales en el ecosistema tech</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
