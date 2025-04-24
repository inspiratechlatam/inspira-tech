
import React from "react";

const WhyJoin = () => {
  const reasons = [
    "Construyes algo real desde el primer día",
    "Aprendes con expertos activos en startups",
    "Conectas con personas que comparten tu camino",
    "Accedes a recursos exclusivos del mundo tech LATAM",
    "Participas en meetups y dinámicas comunitarias"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-inspira-darkBlue to-inspira-blue text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Por qué unirte?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/e83ff70e-4fd1-44de-9604-9ce15628b28a.png" 
              alt="Inspira Tech Team" 
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
          
          <div>
            <ul className="space-y-6">
              {reasons.map((reason, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="min-w-6 mt-1">
                    <div className="bg-inspira-turquoise text-inspira-darkBlue rounded-full h-6 w-6 flex items-center justify-center font-bold">
                      ✓
                    </div>
                  </div>
                  <p className="text-lg">{reason}</p>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
              <a 
                href="#unete" 
                className="btn-primary inline-block"
              >
                Quiero ser parte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
