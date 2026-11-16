import React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** "light" para fondos oscuros */
  tone?: "dark" | "light";
  className?: string;
};

/** Encabezado de sección: etiqueta pequeña + título + subtítulo. */
const SectionHeading = ({ eyebrow, title, subtitle, tone = "dark", className }: SectionHeadingProps) => (
  <div className={cn("mx-auto mb-10 max-w-3xl text-center", className)}>
    {eyebrow && (
      <span
        className={cn(
          "mb-4 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest",
          tone === "dark" ? "bg-inspira-purple/10 text-inspira-purple" : "bg-white/10 text-inspira-turquoise"
        )}
      >
        {eyebrow}
      </span>
    )}
    <h2
      className={cn(
        "text-3xl font-extrabold leading-tight md:text-4xl",
        tone === "dark" ? "text-inspira-darkBlue" : "text-white"
      )}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={cn("mt-4 text-lg", tone === "dark" ? "text-gray-600" : "text-white/80")}>{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
