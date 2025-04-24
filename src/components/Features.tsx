
import React from "react";
import { Sparkles, Rocket, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-inspira-purple" />,
      title: "Mentores activos en la industria",
      description: "Aprende con profesionales que trabajan activamente en el ecosistema tech de LATAM."
    },
    {
      icon: <Rocket className="h-8 w-8 text-inspira-turquoise" />,
      title: "Proyectos prácticos desde el día uno",
      description: "Aplica tu conocimiento inmediatamente con proyectos reales que construyen tu portfolio."
    },
    {
      icon: <Users className="h-8 w-8 text-inspira-orange" />,
      title: "Comunidad que inspira y conecta",
      description: "Forma parte de una red de apoyo que potencia tu desarrollo profesional y personal."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-50 p-3 rounded-full w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-inspira-darkBlue">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
