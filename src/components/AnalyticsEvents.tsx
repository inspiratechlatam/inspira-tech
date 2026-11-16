import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { track } from "@/lib/analytics";

/**
 * Eventos automáticos de Mixpanel (no pintan nada):
 * - Page Viewed al cambiar de ruta
 * - Outbound Link Clicked al hacer clic en enlaces externos (excepto los botones de inscripción)
 * - Section Viewed la primera vez que se ve cada sección de la landing
 */
const AnalyticsEvents = () => {
  const location = useLocation();

  useEffect(() => {
    track("Page Viewed", { path: location.pathname, title: document.title });
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.("a");
      if (!link || link.hasAttribute("data-cta")) return;
      try {
        const url = new URL(link.href, window.location.href);
        if (url.origin === window.location.origin || !/^https?:$/.test(url.protocol)) return;
        track("Outbound Link Clicked", { host: url.host, url: url.origin + url.pathname, page: window.location.pathname });
      } catch {
        /* enlace inválido: se ignora */
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            track("Section Viewed", { section: id, page: window.location.pathname });
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

export default AnalyticsEvents;
