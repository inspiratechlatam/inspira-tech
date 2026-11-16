import React from "react";
import { Link } from "react-router-dom";
import { getEnrollCta } from "@/config/program";
import { track } from "@/lib/analytics";

type EnrollButtonProps = {
  /** Dónde está el botón (para medir): "hero", "navbar", "navbar_movil", "cta_final"... */
  location: string;
  className?: string;
  /** Usa el texto corto (para la barra de navegación). */
  short?: boolean;
  onClick?: () => void;
};

/** Botón único de inscripción: el texto y el destino salen de src/config/program.ts */
const EnrollButton = ({ location, className, short = false, onClick }: EnrollButtonProps) => {
  const cta = getEnrollCta();
  const text = short ? cta.shortLabel : cta.label;

  const handleClick = () => {
    track("CTA Clicked", { location, label: cta.label, destination: cta.href });
    onClick?.();
  };

  if (cta.external) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={handleClick}
        data-cta
      >
        {text}
      </a>
    );
  }

  return (
    <Link to={cta.href} className={className} onClick={handleClick} data-cta>
      {text}
    </Link>
  );
};

export default EnrollButton;
