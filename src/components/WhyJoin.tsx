
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Users, BookOpen, Users2 } from "lucide-react";

const WhyJoin = () => {
  const reasons = [
    {
      text: "Construyes algo real desde el primer día",
      icon: Code
    },
    {
      text: "Aprendes con expertos activos en startups",
      icon: GraduationCap
    },
    {
      text: "Conectas con personas que comparten tu camino",
      icon: Users
    },
    {
      text: "Accedes a recursos exclusivos del mundo tech LATAM",
      icon: BookOpen
    },
    {
      text: "Participas en meetups y dinámicas comunitarias",
      icon: Users2
    }
  ];

  return (
    <section id="porque-unirse" className="py-20 bg-gray-50 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          ¿Por qué aplicar a No-code Builders desde 0?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4 md:w-1/2">
            {reasons.map((reason, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="text-inspira-blue">
                    <reason.icon size={24} />
                  </div>
                  <p className="text-lg">{reason.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="md:w-1/2 flex items-center justify-center animate-fade-in animate-delay-500">
            <img
              alt="Razones para unirse a Inspira Tech"
              className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-300"
              src="/lovable-uploads/035d133d-4ab5-4dd7-9afc-1dbf92c42c41.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
