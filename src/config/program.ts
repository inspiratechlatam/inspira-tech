/**
 * Configuración central del programa.
 * Todo lo que cambia de una cohorte a otra (precios, fechas, textos del botón)
 * vive aquí. Los componentes solo leen este archivo.
 */

// Formulario actual de Airtable (se usa hasta que el pago esté conectado).
export const LEGACY_FORM_URL =
  "https://airtable.com/appOeyR0YYocmg8ns/shrKBBfrPvCqiGkay";

export const CONTACT_EMAIL = "inspiratech.latam@gmail.com";

/**
 * INTERRUPTOR: cuando el formulario /inscripcion + el pago estén listos y
 * probados, cambia esto a `true`. Todos los botones de la landing pasarán a
 * /inscripcion sin tocar nada más.
 */
export const USE_NEW_ENROLLMENT_FORM = false;

export const program = {
  name: "No-code Builders desde 0",
  cohort: "Cohorte 8",
  // Edad mínima para inscribirse (mayoría de edad). Cámbiala aquí si cambia el requisito.
  minAge: 18,
  sessions: 8,
  // Reembolsos: solo casos extremos y justificados (ver /terminos). Ajusta estos plazos si cambian.
  refund: { requestDaysAfterPayment: 7, reviewBusinessDays: 10 },
  // Primera clase (sábado). Formato AAAA-MM-DD, hora de Perú.
  firstClassDate: "2027-01-16",
  // Pagos: abren y cierran en hora de Perú (GMT-5).
  paymentsOpenAt: "2026-11-23T00:00:00-05:00",
  paymentsCloseAt: "2027-01-12T23:59:59-05:00",
  // Precios en soles. En la web solo se dice "early bird" y "cupos limitados" (sin números de cupos).
  earlyBird: { price: 170, approxUsd: 50 },
  regular: { price: 200 },
  // TODO: confirmar el nombre/mes de la siguiente cohorte.
  nextCohortLabel: "abril (por confirmar)",
} as const;

export type EnrollmentPhase = "pre" | "open" | "closed";

export const getEnrollmentPhase = (now: Date = new Date()): EnrollmentPhase => {
  if (now < new Date(program.paymentsOpenAt)) return "pre";
  if (now > new Date(program.paymentsCloseAt)) return "closed";
  return "open";
};

// ---------- Fechas en español ----------
const DAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const MONTHS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre",
];

const parseLocalDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d, 12);
};

/** "Sábado 16 de enero" */
export const formatDate = (date: Date) =>
  `${DAYS[date.getDay()]} ${date.getDate()} de ${MONTHS[date.getMonth()]}`;

/** Las fechas se escriben en hora de Perú, así que se formatean en esa zona. */
const formatPeruDate = (isoWithOffset: string) => {
  const parts = new Intl.DateTimeFormat("es-PE", {
    timeZone: "America/Lima",
    weekday: "long",
    day: "numeric",
    month: "long",
  }).formatToParts(new Date(isoWithOffset));
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const weekday = get("weekday");
  return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)} ${get("day")} de ${get("month")}`;
};

export const firstClassLabel = () => formatDate(parseLocalDate(program.firstClassDate));
export const paymentsOpenLabel = () => formatPeruDate(program.paymentsOpenAt);
export const paymentsCloseLabel = () => formatPeruDate(program.paymentsCloseAt);

/** Fechas de las N sesiones (un sábado por semana). */
export const sessionDates = (): string[] => {
  const start = parseLocalDate(program.firstClassDate);
  return Array.from({ length: program.sessions }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i * 7);
    return formatDate(d);
  });
};

// ---------- Botón principal ----------
export type EnrollCta = {
  label: string;
  shortLabel: string;
  href: string;
  external: boolean;
};

export const getEnrollCta = (phase: EnrollmentPhase = getEnrollmentPhase()): EnrollCta => {
  // Mientras el pago no esté conectado, el botón queda como siempre: va al Airtable.
  if (!USE_NEW_ENROLLMENT_FORM) {
    return {
      label: "Aplica al Programa No-code Builders",
      shortLabel: "Únete",
      href: LEGACY_FORM_URL,
      external: true,
    };
  }
  if (phase === "pre") {
    return {
      label: "Avísame cuando abran las inscripciones",
      shortLabel: "Avísame",
      href: LEGACY_FORM_URL,
      external: true,
    };
  }
  if (phase === "closed") {
    return {
      label: "Quiero la próxima cohorte",
      shortLabel: "Próxima cohorte",
      href: LEGACY_FORM_URL,
      external: true,
    };
  }
  // Inscripciones abiertas
  if (USE_NEW_ENROLLMENT_FORM) {
    return { label: "Reserva tu cupo", shortLabel: "Reserva tu cupo", href: "/inscripcion", external: false };
  }
  return {
    label: "Aplica al Programa No-code Builders",
    shortLabel: "Únete",
    href: LEGACY_FORM_URL,
    external: true,
  };
};
