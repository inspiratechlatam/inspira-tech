
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ContentSection = () => {
  const weeks = [
    {
      id: "week1",
      title: "Semana 1: Startups, impacto & propósito digital",
      facilitators: "Facilitadoras: Carmen Nepo y Giuliana Rodríguez",
      description: "Explora el ecosistema startup, identifica problemas reales y define el propósito de tu proyecto digital.",
      activity: "Mapeo de problema, solución y propósito."
    },
    {
      id: "week2",
      title: "Semana 2: Arma tu landing no-code",
      facilitators: "Facilitador: Luis Blas",
      description: "Crea una landing efectiva con Lovable.dev sin código.",
      activity: "Construcción de página con secciones, botones, colores y CTA."
    },
    {
      id: "week3",
      title: "Semana 3: Automatiza con Make",
      facilitators: "Instructor: Alejandro Latorre",
      description: "Crea tu primera automatización: responde leads automáticamente desde un formulario.",
      activity: "Integración Make + formulario."
    },
    {
      id: "week4",
      title: "Semana 4: Optimiza tu gestión con Notion",
      facilitators: "Instructor: Víctor Gallo",
      description: "Organiza y ejecuta tu proyecto como un pro.",
      activity: "Herramienta de gestión de proyectos en Notion."
    },
    {
      id: "week5",
      title: "Semana 5: Aprende a hacer tu pitch",
      facilitators: "",
      description: "Domina cómo presentar tu proyecto de forma clara, persuasiva y profesional.",
      activity: "Armado de pitch deck."
    },
    {
      id: "week6",
      title: "Semana 6: Demo Day final",
      facilitators: "",
      description: "Presenta ante mentores, conecta y recibe feedback en vivo.",
      activity: "Exposición del proyecto ante jurado + networking."
    }
  ];

  return (
    <section id="contenido" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-inspira-darkBlue mb-6">
          Lo que vas a aprender <span className="text-inspira-purple">(6 semanas)</span>
        </h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Un programa intensivo e innovador diseñado para darte las habilidades digitales que necesitas para destacar en el mundo tech.
        </p>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {weeks.map((week, index) => (
            <AccordionItem 
              key={week.id} 
              value={week.id}
              className="border rounded-xl overflow-hidden shadow-sm bg-white"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-inspira-blue to-inspira-purple text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{week.title}</div>
                    {week.facilitators && (
                      <div className="text-sm text-gray-500">{week.facilitators}</div>
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="ml-12">
                  <p className="mb-3">{week.description}</p>
                  <div className="bg-gray-50 p-3 rounded-md mt-2">
                    <p className="flex items-center gap-2">
                      <span className="text-inspira-turquoise font-bold">✅</span>
                      <span>Actividad: {week.activity}</span>
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ContentSection;
