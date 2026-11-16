import React from "react";
import { Sparkles, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    color: "from-inspira-purple to-inspira-blue",
    title: "Mentores activos en la industria",
    description: "Aprende con profesionales que trabajan activamente en el ecosistema tech de LATAM.",
  },
  {
    icon: Rocket,
    color: "from-inspira-turquoise to-inspira-teal",
    title: "Proyectos prácticos desde el día uno",
    description: "Aplica lo aprendido de inmediato con proyectos reales que construyen tu portafolio.",
  },
  {
    icon: Users,
    color: "from-inspira-orange to-inspira-purple",
    title: "Comunidad que inspira y conecta",
    description: "Forma parte de una red de apoyo que potencia tu desarrollo profesional y personal.",
  },
];

const Features = () => (
  <section className="relative z-10 -mt-16 px-4 md:-mt-20">
    <div className="container mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map(({ icon: Icon, color, title, description }, index) => (
          <div
            key={title}
            className="card-hover animate-fade-in rounded-2xl bg-white p-7 shadow-xl ring-1 ring-black/5"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color}`}>
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-inspira-darkBlue">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
