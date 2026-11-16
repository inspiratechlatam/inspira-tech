import React from "react";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL, firstClassLabel, program } from "@/config/program";

// BORRADOR BASE: debe ser revisado por la persona responsable de lo legal antes de publicarse.
// Reembolsos: política estricta definida por Inspira Tech (plazos en src/config/program.ts).
const Terminos = () => (
  <LegalPage title="Términos y condiciones" updated="noviembre de 2026">
    <p>
      Estos términos aplican a tu inscripción en el programa {program.name} de Inspira Tech. Al inscribirte, aceptas
      lo siguiente.
    </p>

    <h2>El programa</h2>
    <ul>
      <li>
        Son {program.sessions} sesiones en vivo, una por semana, de 2 horas, en modalidad 100% online. La primera
        clase es el {firstClassLabel().toLowerCase()} de 2027.
      </li>
      <li>El programa es para personas mayores de edad ({program.minAge} años o más).</li>
      <li>Incluye acceso a la comunidad, acompañamiento de mentores y proyecto personal con feedback.</li>
      <li>
        Si culminas el programa de forma exitosa, recibirás un diploma. Los datos que registres (nombre y apellidos)
        serán los que aparezcan en el certificado.
      </li>
    </ul>

    <h2>Inscripción y pago</h2>
    <ul>
      <li>
        El precio early bird es de S/{program.earlyBird.price}, con cupos limitados; después el precio es de S/
        {program.regular.price}.
      </li>
      <li>El pago se realiza a través de Mercado Pago. Tu inscripción queda confirmada cuando el pago es aprobado.</li>
      <li>Es tu responsabilidad escribir correctamente tu correo y celular para recibir la información del programa.</li>
    </ul>

    <h2>Reembolsos</h2>
    <p>
      El pago de la inscripción reserva tu cupo y no es reembolsable, salvo en los casos extremos que se indican a
      continuación.
    </p>
    <ul>
      <li>
        Solo se evaluará un reembolso cuando exista un motivo grave, justificado y comprobable que te impida asistir al
        programa (por ejemplo, una enfermedad grave o una situación de fuerza mayor).
      </li>
      <li>
        La solicitud debe enviarse por escrito a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-inspira-blue underline">
          {CONTACT_EMAIL}
        </a>
        , dentro de los {program.refund.requestDaysAfterPayment} días calendario posteriores al pago y antes de la
        primera clase, e incluir tu nombre completo, el correo con el que te inscribiste, la justificación y los
        documentos que la sustenten.
      </li>
      <li>
        Inspira Tech evaluará la solicitud en un plazo de {program.refund.reviewBusinessDays} días hábiles y su decisión
        es final. Si se aprueba, la devolución se hará por el mismo medio de pago, descontando las comisiones de la
        pasarela de pago y los gastos bancarios.
      </li>
      <li>
        No se realizan reembolsos por cambio de opinión, falta de tiempo, inasistencia a las sesiones, abandono del
        programa ni solicitudes enviadas fuera del plazo. Una vez iniciado el programa no hay devoluciones.
      </li>
    </ul>

    <h2>Contacto</h2>
    <p>
      Para consultas sobre pagos o cualquier duda, escríbenos a{" "}
      <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-inspira-blue underline">
        {CONTACT_EMAIL}
      </a>
      .
    </p>
  </LegalPage>
);

export default Terminos;
