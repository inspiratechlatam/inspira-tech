import React from "react";
import { Award, BookOpen, Code, GraduationCap, Users, Users2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reasons = [
  { text: "Construyes algo real desde el primer día", icon: Code },
  { text: "Aprendes con expertos activos en startups", icon: GraduationCap },
  { text: "Conectas con personas que comparten tu camino", icon: Users },
  { text: "Accedes a recursos exclusivos del mundo tech LATAM", icon: BookOpen },
  { text: "Participas en meetups y dinámicas comunitarias", icon: Users2 },
  { text: "Recibes un diploma al culminar el programa", icon: Award },
];

const WhyJoin = () => (
  <section id="porque-unirse" className="bg-gray-50 px-4 py-20 md:py-28">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading
        eyebrow="Lo que te llevas"
        title={
          <>
            ¿Por qué sumarte al programa <span className="whitespace-nowrap">No-code</span> Builders de Inspira Tech?
          </>
        }
        subtitle="Hoy las empresas y los equipos piden perfiles que sepan usar herramientas digitales. Este programa te ayuda a potenciar tu perfil profesional con práctica real."
        className="[&_h2]:text-balance"
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {reasons.map(({ text, icon: Icon }, index) => (
          <li
            key={text}
            className="card-hover animate-fade-in flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-inspira-purple to-inspira-blue text-white">
              <Icon size={22} aria-hidden="true" />
            </span>
            <p className="font-semibold text-inspira-darkBlue">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyJoin;
