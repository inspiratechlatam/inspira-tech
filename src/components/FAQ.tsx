
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuándo empieza el Cohorte 2?",
      answer: "Aún no anunciamos fecha, pero si te unes a la lista, serás el primero en saberlo."
    },
    {
      question: "¿Necesito saber programar?",
      answer: "No. Es 100% para perfiles sin background técnico."
    },
    {
      question: "¿Cuánto tiempo requiere?",
      answer: "Entre 4–6 horas semanales, incluyendo sesiones y entregables."
    },
    {
      question: "¿Tiene costo?",
      answer: "¡No! El programa es completamente gratuito. Lo hacemos así porque sabemos que muchas personas no tienen acceso a formación digital práctica. Nuestra motivación es cerrar esa brecha. Queremos que jóvenes de toda LATAM puedan descubrir su potencial, crear proyectos y acceder a oportunidades en el mundo tech — sin que el dinero sea una barrera."
    },
    {
      question: "¿Qué herramientas voy a aprender?",
      answer: "Lovable.dev (no-code), Make (automatización), Notion (productividad), entre otras."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-inspira-darkBlue mb-12">
          Preguntas frecuentes
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="py-4 text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
