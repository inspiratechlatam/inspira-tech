
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Target, Globe, Sparkles, Library, PresentationIcon, Award, Zap } from "lucide-react";

const ContentSection = () => {
  const weeks = [
    {
      id: "week1",
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Semana 1: Bienvenida y Onboarding + Introducción al ecosistema startups y no-code",
      date: "Sábado 2 de Mayo",
      description: "Explora el impacto del ecosistema de startups y las oportunidades del no-code. Define el propósito estratégico de tu proyecto digital usando metodologías de design thinking.",
      activity: "Documento estratégico del proyecto: problema, solución, propósito, público objetivo y roadmap."
    },
    {
      id: "week2",
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Sesión 2: Intro a No-code con Lovable ¡Arma tu página web",
      date: "Sábado 9 de Mayo",
      description: "Construye una landing page profesional sin programar. Aprende a diseñar propuestas de valor atractivas, formularios efectivos y conectar con bases de datos.",
      activity: "Landing page completa con propuesta de valor, formularios, testimonios y conexión a Supabase."
    },
    {
      id: "week3",
      icon: <PresentationIcon className="h-6 w-6 text-white" />,
      title: "Sesión 3: Arma tu pitch con IA & Sesión de feedback y credibilidad",
      date: "Sábado 16 de Mayo",
      description: "Domina los 10 elementos clave de un pitch efectivo. Utiliza herramientas de AI como Gamma AI y Gemini para crear presentaciones impactantes y diferenciarte de la competencia.",
      activity: "Pitch deck profesional con research de ventajas competitivas y propuesta de valor diferencial."
    },
    {
      id: "week4",
      icon: <Sparkles className="h-6 w-6 text-white" />,
      title: "Sesión 4: Construye un prototipo app web funcional en Lovable.dev - Parte 2",
      date: "Sábado 23 de Mayo",
      description: "Construye tu primer MVP usando metodologías ágiles. Aprende a priorizar funcionalidades, crear user journeys y desarrollar productos digitales iterativos.",
      activity: "Mini PRD, user journey y prototipo funcional de app web con múltiples secciones."
    },
    {
      id: "week5",
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Sesión 5: Intro práctica a N8N - Automatiza como un pro!",
      date: "Sábado 30 de Mayo",
      description: "Descubre el poder de N8N para automatizar procesos. Crea flujos inteligentes que conecten formularios, emails y hojas de cálculo sin escribir código.",
      activity: "Flujo automatizado: formulario → respuesta personalizada → almacenamiento → email automático."
    },
    {
      id: "week6",
      icon: <Library className="h-6 w-6 text-white" />,
      title: "Sesión 6: Automatizaciones con impacto N8N + WhatsApp o Telegram + APIs",
      date: "Sábado 6 de Junio",
      description: "Lleva las automatizaciones al siguiente nivel integrando WhatsApp, APIs y lógica condicional. Automatiza conversaciones y seguimiento de leads de forma profesional.",
      activity: "Flujo completo: formulario → WhatsApp automático → base de datos → notificación al equipo."
    },
    {
      id: "week7",
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Sesión 7: Inspira Tech Demo Day final: ¡Conectemos e inspiremos!",
      date: "Sábado 13 de Junio",
      description: "Presenta tu proyecto ante jurados expertos del ecosistema tech. Los 3 mejores proyectos competirán en formato pitch con feedback profesional y oportunidades de networking.",
      activity: "Presentación final del proyecto y sesión de networking con la comunidad tech."
    }
  ];

  return (
    <section id="contenido" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-inspira-darkBlue mb-6 animate-fade-in">
          Lo que aprenderás en <span className="text-inspira-blue">8 semanas</span>
        </h2>
        
        <div className="text-center mb-8 animate-fade-in animate-delay-100">
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Un programa intensivo e innovador diseñado para darte las habilidades digitales que necesitas para destacar en el mundo tech.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-inspira-darkBlue font-semibold">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>Inicio: Sábado 2 de Mayo</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏳</span>
              <span>Duración: 8 semanas, con 1 sesión en vivo de 2 horas por semana</span>
            </div>
          </div>
        </div>
        
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
                    <div className="text-sm text-gray-500">{week.date}</div>
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
