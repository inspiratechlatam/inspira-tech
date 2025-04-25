
import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "Carmen Nepo", team: "Education Team", avatar: "/lovable-uploads/209261cd-e259-43a4-bb71-25aceaf1e857.png" },
    { name: "Giuliana Rodríguez", team: "Growth Team", avatar: "/lovable-uploads/727ab347-6026-4227-9c99-694a33b326ed.png" },
    { name: "Geraldyne Cáceres", team: "Community Team", avatar: "/lovable-uploads/f7991198-d0b6-4e27-9f75-efe22a16b3f0.png" },
    { name: "Andrea Tercero", team: "Education Team", avatar: "/lovable-uploads/31242e77-33b4-4770-9340-07e6d16ba3b4.png" },
    { name: "Keesy Robles", team: "Education Team", avatar: "/lovable-uploads/2238c93c-3da9-4891-b0b1-9dcf50a764d2.png" },
    { name: "Jennifer Cóndor", team: "Community Team", avatar: "/lovable-uploads/d4f62f7e-b885-4ee6-9797-ce51a9accf90.png" },
    { name: "Jean Correa", team: "Community Team", avatar: "/lovable-uploads/4b2104ea-d92e-457e-8f67-f69b0514f633.png" },
    { name: "Daniela Gadea", team: "Marketing Team", avatar: "/lovable-uploads/0f3ae811-534b-4324-8168-317f2bf4acfd.png" },
    { name: "Andrea Salas", team: "People Team", avatar: "/lovable-uploads/d3b8a294-1aa2-4185-83d0-47d358e1c53d.png" },
    { name: "Saúl Canturín", team: "Partnership Team", avatar: "/lovable-uploads/0e7a8407-da2f-43f4-ac0a-a0e35d8c0be3.png" },
    { name: "Alis Requejo", team: "Marketing Team", avatar: "/lovable-uploads/0d3f59e2-b8b2-4ffe-b5c3-cc917a38f5fa.png" },
    { name: "Alizee Gutierrez", team: "Marketing Team", avatar: "/lovable-uploads/a05c8415-6c7c-4ae5-a201-633605b27526.png" }
  ];

  return (
    <section id="mentores" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-inspira-darkBlue mb-4">
          Conoce a nuestro equipo
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Nuestro equipo está formado por jóvenes apasionados por la tecnología, la educación y la creación de oportunidades en LATAM. ¡Ellos hacen posible Inspira Tech!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative mx-auto h-24 w-24 mb-4">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg text-inspira-darkBlue">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.team}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
