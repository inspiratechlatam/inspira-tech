
import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "Carmen Nepo", team: "Education Team", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Giuliana Rodríguez", team: "Growth Team", avatar: "https://i.pravatar.cc/150?img=5" },
    { name: "Geraldyne Cáceres", team: "Community Team", avatar: "https://i.pravatar.cc/150?img=10" },
    { name: "Andrea Tercero", team: "Education Team", avatar: "https://i.pravatar.cc/150?img=9" },
    { name: "Keesy Robles", team: "Education Team", avatar: "https://i.pravatar.cc/150?img=11" },
    { name: "Jennifer Cóndor", team: "Community Team", avatar: "https://i.pravatar.cc/150?img=13" },
    { name: "Jean Correa", team: "Community Team", avatar: "https://i.pravatar.cc/150?img=15" },
    { name: "Daniela Gadea", team: "Marketing Team", avatar: "https://i.pravatar.cc/150?img=21" },
    { name: "Andrea Salas", team: "People Team", avatar: "https://i.pravatar.cc/150?img=23" },
    { name: "Saúl Canturín", team: "Partnership Team", avatar: "https://i.pravatar.cc/150?img=17" },
    { name: "Alis Requejo", team: "Marketing Team", avatar: "https://i.pravatar.cc/150?img=25" },
    { name: "Alizee Gutierrez", team: "Marketing Team", avatar: "https://i.pravatar.cc/150?img=32" }
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
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-inspira-purple to-inspira-turquoise"></div>
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-[90%] h-[90%] object-cover rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
