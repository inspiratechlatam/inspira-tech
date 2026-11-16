import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { track } from "@/lib/analytics";
import SectionHeading from "./SectionHeading";
import {
  firstClassLabel,
  paymentsCloseLabel,
  paymentsOpenLabel,
  program,
} from "@/config/program";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuándo empieza el siguiente programa?",
      answer: `Inicia el ${firstClassLabel().toLowerCase()} de 2027 con ${program.sessions} semanas de duración.`,
    },
    {
      question: "¿Necesito saber programar?",
      answer: "No. Es 100% para perfiles sin background técnico.",
    },
    {
      question: "¿Cuánto tiempo requiere?",
      answer: "Una sesión en vivo de 2 horas por semana, más tiempo para entregables.",
    },
    {
      question: "¿Tiene costo?",
      answer: `Sí. La inscripción early bird es de S/${program.earlyBird.price} (aprox. $${program.earlyBird.approxUsd} USD) con cupos limitados; después, S/${program.regular.price}. Este aporte nos ayuda a cubrir los costos del programa y mantener la calidad de la experiencia de aprendizaje.`,
    },
    {
      question: "¿Hasta cuándo puedo inscribirme?",
      answer: `Las inscripciones abren el ${paymentsOpenLabel().toLowerCase()} y cierran el ${paymentsCloseLabel().toLowerCase()}. Si te inscribes después, pasarás a la siguiente cohorte (${program.nextCohortLabel}).`,
    },
    {
      question: "¿Hay reembolsos?",
      answer: `Solo en casos extremos y justificados que te impidan asistir al programa. Debes solicitarlo por escrito dentro de los ${program.refund.requestDaysAfterPayment} días posteriores a tu pago y antes de la primera clase, con tu justificación y sustento. Una vez iniciado el programa no hay devoluciones. Revisa los detalles en los términos y condiciones.`,
    },
    {
      question: "¿Qué herramientas voy a aprender?",
      answer: "Lovable.dev (no-code), N8N (automatización), Supabase (backend), Notion (productividad), entre otras.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Preguntas frecuentes" />

        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={(value) => {
            if (!value) return;
            const index = Number(value.replace("item-", ""));
            track("FAQ Opened", { question: faqs[index]?.question });
          }}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-3 rounded-2xl border border-gray-200 bg-gray-50 px-5 data-[state=open]:bg-white data-[state=open]:shadow-md"
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
