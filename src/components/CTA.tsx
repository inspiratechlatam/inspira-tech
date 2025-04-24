
import React from "react";

const CTA = () => {
  return (
    <section id="unete" className="py-20 px-4 bg-gradient-to-br from-inspira-darkBlue to-inspira-blue text-white">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Quieres ser parte del próximo cohorte de Inspira Tech?
        </h2>
        
        <p className="text-lg mb-10">
          Únete a la lista de espera y te avisaremos antes que nadie.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://forms.gle/your-form-url" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Únete a la lista de espera
          </a>
        </div>
        
        <p className="text-sm mt-4 text-white/70">
          No hacemos spam. Solo te contactaremos cuando haya novedades importantes.
        </p>
      </div>
    </section>
  );
};

export default CTA;
