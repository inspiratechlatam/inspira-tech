
import React, { useState } from "react";
import { toast } from "sonner";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("¡Te has unido a la lista de espera! Te notificaremos cuando abramos inscripciones.");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="unete" className="py-20 px-4 bg-gradient-to-br from-inspira-darkBlue to-inspira-blue text-white">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Quieres ser parte del próximo cohorte de Inspira Tech?
        </h2>
        
        <p className="text-lg mb-10">
          Únete a la lista de espera y te avisaremos antes que nadie.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-full focus:outline-none text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Únete a la lista de espera"}
            </button>
          </div>
        </form>
        
        <p className="text-sm mt-4 text-white/70">
          No hacemos spam. Solo te contactaremos cuando haya novedades importantes.
        </p>
      </div>
    </section>
  );
};

export default CTA;
