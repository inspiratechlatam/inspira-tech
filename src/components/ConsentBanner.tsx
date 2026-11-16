import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { analyticsEnabled, getConsent, setConsent, track } from "@/lib/analytics";

/** Banner de cookies: solo aparece si Mixpanel está configurado y aún no se eligió. */
const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(analyticsEnabled() && getConsent() === null);
    show();
    window.addEventListener("inspira:reset-consent", show);
    return () => window.removeEventListener("inspira:reset-consent", show);
  }, []);

  if (!visible) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setVisible(false);
    if (value === "granted") track("Page Viewed", { path: window.location.pathname, title: document.title });
  };

  return (
    <div
      role="dialog"
      aria-label="Preferencias de cookies"
      className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-xl rounded-xl bg-white p-4 shadow-2xl ring-1 ring-black/10"
    >
      <p className="text-sm text-gray-700">
        Usamos cookies de analítica para entender cómo se usa la web y mejorarla. No guardamos tus datos personales ahí.{" "}
        <Link to="/privacidad" className="font-medium text-inspira-blue underline">
          Más información
        </Link>
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Rechazar
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-full bg-inspira-darkBlue px-4 py-2 text-sm font-bold text-white hover:opacity-90"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
