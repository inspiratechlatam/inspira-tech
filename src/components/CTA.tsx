import React from "react";
import EnrollButton from "./EnrollButton";
import {
  firstClassLabel,
  getEnrollmentPhase,
  paymentsCloseLabel,
  paymentsOpenLabel,
  program,
} from "@/config/program";

const CTA = () => {
  const phase = getEnrollmentPhase();

  const copy = {
    pre: {
      title: "Tu próximo paso en el mundo digital empieza aquí",
      text: `Las inscripciones abren el ${paymentsOpenLabel().toLowerCase()}. Early bird S/${program.earlyBird.price} con cupos limitados.`,
      note: "No hacemos spam. Solo te contactaremos cuando haya novedades importantes.",
    },
    open: {
      title: "Tu próximo paso en el mundo digital empieza aquí",
      text: `Early bird a S/${program.earlyBird.price} con cupos limitados, luego S/${program.regular.price}. Empezamos el ${firstClassLabel().toLowerCase()}.`,
      note: `Inscripciones hasta el ${paymentsCloseLabel().toLowerCase()}.`,
    },
    closed: {
      title: "Las inscripciones de esta cohorte ya cerraron",
      text: `La próxima cohorte será en ${program.nextCohortLabel}. Déjanos tus datos y te avisamos primero.`,
      note: "No hacemos spam. Solo te contactaremos cuando haya novedades importantes.",
    },
  }[phase];

  return (
    <section
      id="unete"
      className="bg-gradient-to-br from-inspira-darkBlue to-inspira-blue px-4 py-20 text-white md:py-28"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="animate-fade-in mb-4 text-3xl font-extrabold md:text-5xl">{copy.title}</h2>
        <p className="animate-fade-in animate-delay-100 mb-10 text-lg text-white/90">{copy.text}</p>

        <div className="flex justify-center">
          <EnrollButton
            location="cta_final"
            className="btn-primary px-10 py-4 text-center text-base shadow-lg shadow-inspira-turquoise/30"
          />
        </div>

        <p className="mt-4 text-sm text-white/70">{copy.note}</p>
      </div>
    </section>
  );
};

export default CTA;
