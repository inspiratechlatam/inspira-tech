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
    <section id="precios" className="bg-gradient-to-br from-inspira-darkBlue to-[#0f3994] px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          tone="light"
          eyebrow="Cupos limitados"
          title="Asegura tu lugar en la cohorte"
          subtitle={`${program.cohort} · Empieza el ${firstClassLabel().toLowerCase()}`}
          className="mb-8"
        />

        {countdown && (
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-inspira-turquoise">
              {countdown.label}
            </p>
            <Countdown target={countdown.target} />
          </div>
        )}

        <div className="relative mx-auto max-w-xl rounded-3xl bg-white p-8 shadow-2xl ring-2 ring-inspira-turquoise md:p-10">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-inspira-turquoise px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-inspira-darkBlue">
            Early bird · Cupos limitados
          </span>

          <div className="mt-2 text-center">
            <p className="font-montserrat text-6xl font-extrabold text-inspira-darkBlue">
              S/{program.earlyBird.price}
            </p>
            <p className="mt-1 text-sm text-gray-500">aprox. ${program.earlyBird.approxUsd} USD · pago único</p>
            <p className="mt-3 inline-block rounded-full bg-inspira-orange/15 px-4 py-1 text-sm font-semibold text-[#b45a14]">
              Luego el precio sube a S/{program.regular.price}
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-inspira-teal" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <EnrollButton location="precios" className="btn-primary mt-8 block text-center" />
        </div>

        <p className="mt-8 text-center text-sm text-white/80">{deadline}</p>
      </div>
    </section>
  );
};

export default Pricing;
