
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Target, Globe, Sparkles, Library, PresentationIcon, Award } from "lucide-react";

const ContentSection = () => {
  const weeks = [
    {
      id: "week1",
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Semana 1: Startups, impacto & propósito digital",
      description: "Inmersión profunda en el ecosistema startup de LATAM. Aprenderás a identificar problemas reales del mercado, validar ideas y definir el propósito estratégico de tu proyecto digital. Incluye análisis de casos de éxito y metodologías ágiles para la validación de propuesta de valor.",
      activity: "Mapeo de problema, solución y propósito + canvas de propuesta de valor."
    },
    {
      id: "week2",
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Semana 2: Arma tu landing no-code",
      description: "Domina la creación de páginas web profesionales con Lovable.dev sin necesidad de programar. Aprenderás diseño UI/UX, copywriting persuasivo y optimización para conversión. Implementarás mejores prácticas en diseño web y técnicas para captar leads efectivamente.",
      activity: "Construcción de landing page completa con diseño responsive, secciones interactivas y formularios."
    },
    {
      id: "week3",
      icon: <Sparkles className="h-6 w-6 text-white" />,
      title: "Semana 3: Automatiza con Make",
      description: "Descubre el poder de la automatización para escalar procesos. Aprenderás a crear flujos automatizados que conecten tus herramientas digitales, ahorrando tiempo y reduciendo errores. Dominarás la integración entre aplicaciones para crear sistemas que funcionen mientras duermes.",
      activity: "Implementación de sistema automático de respuesta a leads y seguimiento."
    },
    {
      id: "week4",
      icon: <Library className="h-6 w-6 text-white" />,
      title: "Semana 4: Optimiza tu gestión con Notion",
      description: "Transforma tu organización digital con Notion. Aprenderás a crear sistemas de gestión efectivos, bases de conocimiento y flujos de trabajo colaborativos para maximizar la productividad de tu proyecto. Implementarás bases de datos relacionales y automatizaciones internas.",
      activity: "Desarrollo de workspace completo en Notion con templates personalizados."
    },
    {
      id: "week5",
      icon: <PresentationIcon className="h-6 w-6 text-white" />,
      title: "Semana 5: Aprende a hacer tu pitch",
      description: "Domina el arte de presentar ideas de forma impactante. Aprenderás técnicas de storytelling, diseño de presentaciones y comunicación efectiva para cautivar a tu audiencia. Desarrollarás habilidades para transmitir tu mensaje de manera clara y persuasiva frente a cualquier público.",
      activity: "Creación y práctica de pitch deck profesional con feedback personalizado."
    },
    {
      id: "week6",
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Semana 6: Demo Day final",
      description: "Culmina el programa presentando tu proyecto ante un panel de expertos del ecosistema tech. Recibirás feedback valioso y tendrás la oportunidad de expandir tu red profesional. Podrás mostrar todo lo aprendido y construido durante el programa en un ambiente profesional.",
      activity: "Presentación final del proyecto y networking con la comunidad tech."
    }
  ];

  return (
    <section id="contenido" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-inspira-darkBlue mb-6 animate-fade-in">
          Lo que aprenderás en <span className="text-inspira-blue">6 semanas</span>
        </h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in animate-delay-100">
          Un programa intensivo e innovador diseñado para darte las habilidades digitales que necesitas para destacar en el mundo tech.
        </p>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {weeks.map((week, index) => (
            <AccordionItem 
              key={week.id} 
              value={week.id}
              className="border rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-inspira-blue to-inspira-purple text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    {week.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{week.title}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="ml-14">
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
