import React from "react";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/config/program";

// BORRADOR BASE: debe ser revisado por la persona responsable de lo legal antes de publicarse.
const Privacidad = () => (
  <LegalPage title="Política de privacidad" updated="noviembre de 2026">
    <p>
      En Inspira Tech cuidamos tus datos. Esta política explica qué datos recogemos cuando te inscribes en nuestros
      programas o navegas en esta web, para qué los usamos y cómo puedes ejercer tus derechos.
    </p>

    <h2>Qué datos recogemos</h2>
    <ul>
      <li>Datos de inscripción: nombre, apellidos, correo, celular (WhatsApp), país, fecha de nacimiento, tus motivos para unirte y cómo nos conociste.</li>
      <li>Datos de pago: el pago lo procesa Mercado Pago. Inspira Tech no guarda los datos de tu tarjeta.</li>
      <li>
        Datos de navegación (solo si aceptas las cookies de analítica): páginas vistas y clics, para mejorar la web.
        Estos datos no incluyen tu nombre, correo ni celular.
      </li>
    </ul>

    <p>
      Si la web muestra videos de YouTube o publicaciones de Instagram, esos servicios pueden guardar sus propias
      cookies cuando el contenido se carga.
    </p>

    <h2>Para qué los usamos</h2>
    <ul>
      <li>Gestionar tu inscripción, confirmar tu pago y comunicarnos contigo sobre el programa.</li>
      <li>Añadirte a la comunidad de WhatsApp del programa.</li>
      <li>Entender cómo se usa la web y mejorarla.</li>
    </ul>

    <h2>Con quién los compartimos</h2>
    <p>
      Usamos proveedores que nos ayudan a operar el programa, como la pasarela de pago, las herramientas donde
      gestionamos las inscripciones y la herramienta de analítica. Solo reciben los datos necesarios para su función.
    </p>

    <h2>Tus derechos</h2>
    <p>
      Puedes pedirnos acceso, rectificación, cancelación u oposición sobre tus datos escribiendo a{" "}
      <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-inspira-blue underline">
        {CONTACT_EMAIL}
      </a>
      . Puedes cambiar tu elección sobre las cookies de analítica en cualquier momento desde el pie de página.
    </p>
  </LegalPage>
);

export default Privacidad;
