/**
 * Envío del formulario de inscripción.
 *
 * HOY es un stub: no envía nada a ningún lado.
 * Día 2 (pago): completar `submitEnrollment` para que llame al webhook de n8n
 * (VITE_CHECKOUT_WEBHOOK_URL), reciba el link de pago de Mercado Pago
 * (Checkout Pro) y devuelva `{ ok: true, checkoutUrl }`.
 */
import { getUtm } from "@/lib/analytics";

export type EnrollmentData = {
  nombre: string;
  apellidos: string;
  correo: string;
  /** Con código de país, solo dígitos y "+", ej. "+51987654321" */
  celular: string;
  pais: string;
  /** AAAA-MM-DD */
  fechaNacimiento: string;
  /** Motivos por los que quiere formar parte (opciones elegidas) */
  motivos: string[];
  fuente: string;
};

export type EnrollmentResult =
  | { ok: true; checkoutUrl: string }
  | { ok: false; reason: "not_configured" | "not_implemented" | "error" };

export const submitEnrollment = async (data: EnrollmentData): Promise<EnrollmentResult> => {
  const webhookUrl = import.meta.env.VITE_CHECKOUT_WEBHOOK_URL as string | undefined;
  if (!webhookUrl) return { ok: false, reason: "not_configured" };

  // TODO (Día 2): POST a `webhookUrl` con { ...data, utm: getUtm() } y devolver
  // { ok: true, checkoutUrl: <init_point de Mercado Pago> }.
  // Los UTM ya se guardan en la sesión (ver analytics.ts) para enviarlos aquí.
  void getUtm;
  void data;
  return { ok: false, reason: "not_implemented" };
};
