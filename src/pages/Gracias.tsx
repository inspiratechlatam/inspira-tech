import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, firstClassLabel } from "@/config/program";

/**
 * Página de retorno del pago. Mercado Pago (Checkout Pro) volverá aquí con
 * ?estado=ok | pendiente | error (se configura el Día 2).
 */
const Gracias = () => {
  const [params] = useSearchParams();
  const estado = params.get("estado") ?? "ok";

  const content = {
    ok: {
      title: "¡Listo, ya eres parte del programa! 🎉",
      text: `Recibimos tu pago. En los próximos minutos te llegará un correo de bienvenida con los siguientes pasos. Nos vemos el ${firstClassLabel().toLowerCase()}.`,
    },
    pendiente: {
      title: "Tu pago está pendiente",
      text: "Cuando el pago se confirme, te escribiremos por correo con los siguientes pasos. Si pagaste en efectivo o por transferencia, puede tardar un poco.",
    },
    error: {
      title: "No se pudo completar el pago",
      text: "No te preocupes: no se realizó ningún cobro. Puedes intentarlo de nuevo cuando quieras.",
    },
  }[estado === "pendiente" || estado === "error" ? estado : "ok"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="px-4 pb-16 pt-32">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-lg">
          <h1 className="text-2xl font-bold text-inspira-darkBlue md:text-3xl">{content.title}</h1>
          <p className="mt-4 text-gray-600">{content.text}</p>
          <p className="mt-4 text-sm text-gray-500">
            ¿Dudas? Escríbenos a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-inspira-blue underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {estado === "error" && (
              <Link to="/inscripcion" className="btn-primary text-center">
                Intentar de nuevo
              </Link>
            )}
            <Link to="/" className="font-semibold text-inspira-darkBlue underline">
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gracias;
