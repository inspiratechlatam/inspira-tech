/**
 * Único punto de medición (Mixpanel).
 * - No hace nada si falta VITE_MIXPANEL_TOKEN.
 * - No hace nada hasta que la persona acepta las cookies.
 * - No envía datos personales (nombre, correo, celular).
 * Los componentes solo llaman a `track(...)`.
 */
import mixpanel from "mixpanel-browser";

/**
 * Token de proyecto de Mixpanel (Project Settings > Project Token). Es público: va en el navegador.
 * Se lee de VITE_MIXPANEL_TOKEN (.env.local) o, si no existe, de esta constante
 * (útil en Lovable, que no siempre usa archivos .env).
 */
const MIXPANEL_PUBLIC_TOKEN = "59bbbbd8fd986a0d21c0a5322a43d7d8";
/** Solo si el proyecto de Mixpanel está en la región de la UE: "https://api-eu.mixpanel.com" */
const MIXPANEL_API_HOST = "";

const TOKEN = (import.meta.env.VITE_MIXPANEL_TOKEN as string | undefined) || MIXPANEL_PUBLIC_TOKEN || undefined;
const CONSENT_KEY = "inspira_analytics_consent";
const UTM_KEY = "inspira_utm";
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export type Consent = "granted" | "denied" | null;
export type EventProps = Record<string, string | number | boolean | null | undefined>;

let initialized = false;

export const analyticsEnabled = () => Boolean(TOKEN);

export const getConsent = (): Consent => {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
};

export const setConsent = (value: Exclude<Consent, null>) => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* sin almacenamiento: se pregunta de nuevo la próxima vez */
  }
  if (value === "granted") {
    if (initialized) mixpanel.opt_in_tracking();
    else initAnalytics();
  } else if (initialized) {
    mixpanel.opt_out_tracking();
  }
};

/** Vuelve a preguntar (enlace "Configurar cookies" del pie de página). */
export const resetConsent = () => {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    /* noop */
  }
  if (initialized) mixpanel.opt_out_tracking();
  window.dispatchEvent(new Event("inspira:reset-consent"));
};

/** UTM de la visita (se guardan en la sesión; sirven también para el formulario). */
export const captureUtm = (): Record<string, string> => {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    UTM_PARAMS.forEach((key) => {
      const value = params.get(key);
      if (value) found[key] = value.slice(0, 100);
    });
    if (Object.keys(found).length > 0) {
      sessionStorage.setItem(UTM_KEY, JSON.stringify(found));
      return found;
    }
    return JSON.parse(sessionStorage.getItem(UTM_KEY) ?? "{}");
  } catch {
    return {};
  }
};

export const getUtm = (): Record<string, string> => {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_KEY) ?? "{}");
  } catch {
    return {};
  }
};

export const initAnalytics = () => {
  if (initialized || !TOKEN || getConsent() !== "granted") return;
  mixpanel.init(TOKEN, {
    autocapture: false, // solo medimos los eventos que definimos nosotros
    track_pageview: false,
    record_sessions_percent: 0,
    persistence: "localStorage",
    ...(MIXPANEL_API_HOST ? { api_host: MIXPANEL_API_HOST } : {}),
  });
  mixpanel.opt_in_tracking();
  initialized = true;
  const utm = captureUtm();
  if (Object.keys(utm).length > 0) mixpanel.register(utm);
};

export const track = (event: string, props: EventProps = {}) => {
  if (!initialized) return;
  try {
    mixpanel.track(event, props);
  } catch {
    /* medir nunca debe romper la página */
  }
};
