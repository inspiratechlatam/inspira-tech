import React from "react";
import { BrainCircuit, Globe, Users, Target, MessageSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";

const programFeatures = [
  {
    icon: BrainCircuit,
    title: "Teoría + práctica",
    text: "20% teoría y 80% práctica: aplicas lo aprendido desde la primera semana.",
  },
  {
    icon: Globe,
    title: "100% online y en vivo",
    text: "Sesiones en vivo para que participes desde cualquier lugar de LATAM.",
  },
  {
    icon: Users,
    title: "Nivel principiante a intermedio",
    text: "No necesitas saber programar para empezar.",
  },
  {
    icon: Target,
    title: "Proyecto personal con feedback",
    text: "Construyes tu propio proyecto con retroalimentación de expertos.",
  },
  {
    icon: MessageSquare,
    title: "Comunidad activa + meetups",
    text: "Conectas con otras personas que comparten tu camino.",
  },
];

// Las 3 primeras ocupan 2 de 6 columnas y las 2 últimas 3 de 6: la fila siempre queda completa.
// En tablet (2 columnas) la última tarjeta ocupa todo el ancho para no quedar sola a un lado.
const spanClass = (index: number) =>
  index < 3 ? "lg:col-span-2" : index === 4 ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-3";

const Program = () => (
  <section id="programa" className="bg-white px-4 py-20 md:py-28">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="El programa"
        title="Así funciona No-code Builders desde 0"
        subtitle="Un programa intensivo que combina teoría y práctica para enseñarte habilidades digitales con impacto real, con el apoyo de expertos desde la primera semana."
        className="[&_h2]:text-balance"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {programFeatures.map(({ icon: Icon, title, text }, index) => (
          <div
            key={title}
            className={`card-hover animate-fade-in relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white p-7 ring-1 ring-gray-200 ${spanClass(index)}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span
              aria-hidden="true"
              className="absolute right-5 top-4 font-montserrat text-5xl font-extrabold text-inspira-purple/10"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-inspira-purple to-inspira-blue shadow-lg shadow-inspira-purple/20">
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-inspira-darkBlue">{title}</h3>
            <p className="text-gray-600">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Program;
