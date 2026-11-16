import React from "react";
import { Award, CalendarDays, MonitorPlay, Rocket } from "lucide-react";
import EnrollButton from "./EnrollButton";
import {
  firstClassLabel,
  getEnrollmentPhase,
  paymentsCloseLabel,
  paymentsOpenLabel,
  program,
} from "@/config/program";

const Hero = () => {
  const phase = getEnrollmentPhase();

  const priceNote =
    phase === "pre"
      ? `Cupos limitados · Inscripciones desde el ${paymentsOpenLabel().toLowerCase()} · Early bird S/${program.earlyBird.price}`
      : phase === "closed"
        ? `Inscripciones cerradas · Próxima cohorte: ${program.nextCohortLabel}`
        : `Cupos limitados · Early bird S/${program.earlyBird.price} · Inscripciones hasta el ${paymentsCloseLabel().toLowerCase()}`;

  const stats = [
    { icon: CalendarDays, value: `${program.sessions} semanas`, label: "1 sesión en vivo por semana" },
    { icon: Rocket, value: "80% práctico", label: "Sales con tu propio proyecto" },
    { icon: MonitorPlay, value: "100% online", label: "Desde cualquier país de LATAM" },
    { icon: Award, value: "Diploma", label: "Al culminar el programa" },
  ];

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-[#040535] to-[#4740ff] px-4 pb-28 pt-32 md:pb-36 md:pt-40"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-inspira-darkBlue/30 to-white/5"></div>

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-inspira-green" aria-hidden="true" />
            {program.cohort} · Empieza el {firstClassLabel().toLowerCase()}
          </span>

          <h1 className="animate-fade-in mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Conviértete en el perfil digital que{" "}
            <span className="bg-gradient-to-r from-inspira-turquoise to-inspira-green bg-clip-text text-transparent">
              las empresas buscan
            </span>
          </h1>

          <p className="animate-fade-in animate-delay-100 mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Impulsa tu crecimiento profesional con habilidades digitales, herramientas no-code y automatizaciones, en un
            programa 80% práctico liderado por expertos del ecosistema tech de LATAM.
          </p>

          <div className="animate-fade-in animate-delay-200 mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <EnrollButton
              location="hero"
              className="btn-primary px-10 py-4 text-center text-base shadow-lg shadow-inspira-turquoise/30 hover:-translate-y-0.5"
            />
            <a
              href="#contenido"
              className="rounded-full px-6 py-3 text-center font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/10"
            >
              Ver el contenido
            </a>
          </div>

          <p className="animate-fade-in animate-delay-200 mt-5 text-sm text-white/80">{priceNote}</p>
        </div>

        <ul className="animate-fade-in animate-delay-300 mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <li
              key={value}
              className="rounded-2xl bg-white/10 p-4 text-left ring-1 ring-white/15 backdrop-blur md:p-5"
            >
              <Icon className="h-5 w-5 text-inspira-turquoise" aria-hidden="true" />
              <p className="mt-3 font-montserrat text-lg font-bold text-white">{value}</p>
              <p className="mt-1 text-xs text-white/70 md:text-sm">{label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
