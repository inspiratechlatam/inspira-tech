
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Target, Globe, Sparkles, Library, PresentationIcon, Award, Zap, MessageCircle } from "lucide-react";
import { firstClassLabel, program, sessionDates } from "@/config/program";
import SectionHeading from "./SectionHeading";

const ContentSection = () => {
  const dates = sessionDates();
  const weeks = [
    {
      id: "week1",
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Semana 1: Bienvenida y Onboarding + Introducción al ecosistema startups y no-code",
      date: dates[0],
      description: "Explora el impacto del ecosistema de startups y las oportunidades del no-code. Define el propósito estratégico de tu proyecto digital usando metodologías de design thinking.",
      activity: "Documento estratégico del proyecto: problema, solución, propósito, público objetivo y roadmap."
    },
    {
      id: "week2",
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Sesión 2: Intro a No-code con Lovable ¡Arma tu página web",
      date: dates[1],
      description: "Construye una landing page profesional sin programar. Aprende a diseñar propuestas de valor atractivas, formularios efectivos y conectar con bases de datos.",
      activity: "Landing page completa con propuesta de valor, formularios, testimonios y conexión a Supabase."
    },
    {
      id: "week3",
      icon: <PresentationIcon className="h-6 w-6 text-white" />,
      title: "Sesión 3: Arma tu pitch con IA & Sesión de feedback y credibilidad",
      date: dates[2],
      description: "Domina los 10 elementos clave de un pitch efectivo. Utiliza herramientas de AI como Gamma AI y Gemini para crear presentaciones impactantes y diferenciarte de la competencia.",
      activity: "Pitch deck profesional con research de ventajas competitivas y propuesta de valor diferencial."
    },
    {
      id: "week4",
      icon: <Sparkles className="h-6 w-6 text-white" />,
      title: "Sesión 4: Construye un prototipo app web funcional en Lovable.dev - Parte 2",
      date: dates[3],
      description: "Construye tu primer MVP usando metodologías ágiles. Aprende a priorizar funcionalidades, crear user journeys y desarrollar productos digitales iterativos.",
      activity: "Mini PRD, user journey y prototipo funcional de app web con múltiples secciones."
    },
    {
      id: "week5",
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: "Sesión 5: Feedback Lab – ¡Mejora tu producto con claridad y foco!",
      date: dates[4],
      description: "Espacio estratégico donde refinarás tu proyecto antes de entrar a automatizaciones con n8n. Recibirás feedback claro y estructurado sobre tu landing, pitch o MVP. Trabajarás en grupos pequeños con retroalimentación guiada según el framework Idea → Producto → Impacto usando el método Start → Stop → Continue.",
      activity: "Presenta tu proyecto en 1-2 minutos, participa en retroalimentación estructurada sobre claridad del problema, propuesta de valor y experiencia de usuario, y completa tu Mini Roadmap de Mejora con prioridades críticas."
    },
    {
      id: "week6",
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Sesión 6: Intro práctica a N8N - Automatiza como un pro!",
      date: dates[5],
      description: "Descubre el poder de N8N para automatizar procesos. Crea flujos inteligentes que conecten formularios, emails y hojas de cálculo sin escribir código.",
      activity: "Flujo automatizado: formulario → respuesta personalizada → almacenamiento → email automático."
    },
    {
      id: "week7",
      icon: <Library className="h-6 w-6 text-white" />,
      title: "Sesión 7: Automatizaciones con impacto N8N + WhatsApp o Telegram + APIs",
      date: dates[6],
      description: "Lleva las automatizaciones al siguiente nivel integrando WhatsApp, APIs y lógica condicional. Automatiza conversaciones y seguimiento de leads de forma profesional.",
      activity: "Flujo completo: formulario → WhatsApp automático → base de datos → notificación al equipo."
    },
    {
      id: "week8",
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Sesión 8: Inspira Tech Demo Day final: ¡Conectemos e inspiremos!",
      date: dates[7],
      description: "Presenta tu proyecto ante jurados expertos del ecosistema tech. Los 3 mejores proyectos competirán en formato pitch con feedback profesional y oportunidades de networking.",
      activity: "Presentación final del proyecto y sesión de networking con la comunidad tech."
    }
  ];

  return (
    <section id="contenido" className="py-14 md:py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contenido"
          title={
            <>
              Lo que aprenderás en <span className="text-inspira-purple">{program.sessions} semanas</span>
            </>
          }
          subtitle="Un programa intensivo diseñado para darte las habilidades digitales que necesitas para destacar en el mundo tech."
          className="mb-6"
        />

        <div className="mb-10 flex flex-col items-center justify-center gap-3 text-sm font-semibold text-inspira-darkBlue sm:flex-row sm:gap-4">
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-gray-100">
            📅 Inicio: {firstClassLabel()}
          </span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-gray-100">
            ⏳ 1 sesión en vivo de 2 horas por semana
          </span>
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
