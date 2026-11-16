import React from "react";
import { Check } from "lucide-react";
import Countdown from "./Countdown";
import EnrollButton from "./EnrollButton";
import SectionHeading from "./SectionHeading";
import {
  firstClassLabel,
  getEnrollmentPhase,
  paymentsCloseLabel,
  paymentsOpenLabel,
  program,
} from "@/config/program";

const includes = [
  `${program.sessions} sesiones prácticas en vivo (2 horas, un sábado por semana)`,
  "Proyecto personal con feedback de mentores",
  "Acceso a la comunidad y networking",
  "Mentorías y acompañamiento",
  "Diploma al culminar el programa",
];

const Pricing = () => {
  const phase = getEnrollmentPhase();

  const countdown =
    phase === "pre"
      ? { label: "Abren las inscripciones en", target: program.paymentsOpenAt }
      : phase === "open"
        ? { label: "Cierran las inscripciones en", target: program.paymentsCloseAt }
        : null;

  const deadline =
    phase === "pre"
      ? `Inscripciones desde el ${paymentsOpenLabel().toLowerCase()} hasta el ${paymentsCloseLabel().toLowerCase()}.`
      : phase === "closed"
        ? `Las inscripciones de esta cohorte cerraron. La próxima será en ${program.nextCohortLabel}.`
        : `Inscripciones abiertas hasta el ${paymentsCloseLabel().toLowerCase()}.`;

  return (
    <section id="precios" className="bg-gradient-to-br from-inspira-darkBlue to-[#0f3994] px-4 py-14 md:py-20">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          tone="light"
          eyebrow="Cupos limitados"
          title={`Únete a la ${program.cohort}`}
          subtitle={`Empieza el ${firstClassLabel().toLowerCase()}`}
          className="mb-6 [&_h2]:text-2xl md:[&_h2]:text-3xl [&_p]:text-base"
        />

        {countdown && (
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-inspira-turquoise">
              {countdown.label}
            </p>
            <Countdown target={countdown.target} />
          </div>
        )}

        <div className="relative mx-auto max-w-md rounded-3xl bg-white p-6 shadow-2xl ring-2 ring-inspira-turquoise md:p-8">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-inspira-turquoise px-4 py-1 text-xs font-bold uppercase tracking-wider text-inspira-darkBlue">
            Early bird
          </span>

          <div className="mt-1 text-center">
            <p className="font-montserrat text-5xl font-extrabold text-inspira-darkBlue">
              S/{program.earlyBird.price}
            </p>
            <p className="mt-1 text-sm text-gray-500">aprox. ${program.earlyBird.approxUsd} USD · pago único</p>
            <p className="mt-3 inline-block rounded-full bg-inspira-orange/15 px-3 py-1 text-xs font-semibold text-[#b45a14]">
              Luego el precio sube a S/{program.regular.price}
            </p>
          </div>

          <ul className="mt-6 space-y-2.5">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-inspira-teal" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <EnrollButton location="precios" className="btn-primary mt-6 block text-center" />
        </div>

        <p className="mt-6 text-center text-sm text-white/80">{deadline}</p>
      </div>
    </section>
  );
};

export default Pricing;
