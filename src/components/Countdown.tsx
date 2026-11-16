import React, { useEffect, useState } from "react";

type CountdownProps = {
  /** Fecha objetivo (ISO con zona horaria) */
  target: string;
  className?: string;
};

const pad = (n: number) => String(n).padStart(2, "0");

const remaining = (target: string) => Math.max(0, new Date(target).getTime() - Date.now());

/** Cuenta regresiva a una fecha real (días, horas, minutos, segundos). */
const Countdown = ({ target, className }: CountdownProps) => {
  const [ms, setMs] = useState(() => remaining(target));

  useEffect(() => {
    setMs(remaining(target));
    const id = setInterval(() => setMs(remaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (ms <= 0) return null;

  const total = Math.floor(ms / 1000);
  const parts = [
    { value: Math.floor(total / 86400), label: "días" },
    { value: Math.floor((total % 86400) / 3600), label: "horas" },
    { value: Math.floor((total % 3600) / 60), label: "min" },
    { value: total % 60, label: "seg" },
  ];

  return (
    <div className={className} role="timer" aria-label="Cuenta regresiva">
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {parts.map((p) => (
          <div key={p.label} className="min-w-[3.5rem] rounded-xl bg-white/10 px-2.5 py-1.5 text-center ring-1 ring-white/20">
            <div className="font-montserrat text-xl font-extrabold tabular-nums text-white sm:text-2xl">
              {pad(p.value)}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-white/70">{p.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
