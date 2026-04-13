
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
      question: "¿Cuándo empieza el siguiente programa?",
      answer: "Inicia el sábado 9 de mayo con 8 semanas de duración."
    },
    {
      question: "¿Necesito saber programar?",
      answer: "No. Es 100% para perfiles sin background técnico."
    },
    {
      question: "¿Cuánto tiempo requiere?",
      answer: "Una sesión en vivo de 2 horas por semana, más tiempo para entregables."
    },
    {
      question: "¿Tiene costo?",
      answer: "Sí, tiene un aporte simbólico de $50 USD (o S/170 soles peruanos) que nos ayuda a cubrir los costos del programa y mantener la calidad de la experiencia de aprendizaje."
    },
    {
      question: "¿Qué herramientas voy a aprender?",
      answer: "Lovable.dev (no-code), N8N (automatización), Supabase (backend), Notion (productividad), entre otras."
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
