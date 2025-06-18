
import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "Carmen Nepo", team: "Education Team", avatar: "/lovable-uploads/3a3c1bfc-0e10-4403-82c2-eab94b387bf5.png" },
    { name: "Giuliana Rodríguez", team: "Growth Team", avatar: "/lovable-uploads/8e3caee4-3225-4584-832c-c17ad3bc6043.png" },
    { name: "Geraldyne Cáceres", team: "Community Team", avatar: "/lovable-uploads/a6bc7da1-51c3-4fcf-a00b-868d98b4d930.png" },
    { name: "Andrea Tercero", team: "Education Team", avatar: "/lovable-uploads/fcbad325-e4a5-4097-9279-84b34207d8fe.png" },
    { name: "Keesy Robles", team: "Education Team", avatar: "/lovable-uploads/24371a1c-8679-425f-b7e3-c3cb624a3d93.png" },
    { name: "Daniela Gadea", team: "Marketing Team", avatar: "/lovable-uploads/59b8039a-6922-4f45-8e67-c2eb171eee16.png" },
    { name: "Andrea Salas", team: "People Team", avatar: "/lovable-uploads/aae0e11f-9a46-47a0-b187-4b0132c23544.png" },
    { name: "Alis Requejo", team: "Marketing Team", avatar: "/lovable-uploads/db5fefdd-546a-4dd5-820f-186283a9d4e6.png" },
    { name: "Alizee Gutierrez", team: "Marketing Team", avatar: "/lovable-uploads/9349a18e-8cf2-4089-afe2-07acabfb20ea.png" },
    { name: "Alessandra Igmizu", team: "Community Team", avatar: "/lovable-uploads/c4e0674e-965f-4267-b6e5-af88d7429499.png" },
    { name: "Cris Richard Chavez", team: "People Team", avatar: "/lovable-uploads/1eab4190-3fbe-4bb7-9d14-b7be3c3d4f70.png" }
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
