import React, { useEffect, useRef, useState } from "react";

type InstagramEmbedProps = {
  src: string;
};

/**
 * Publicación de Instagram incrustada. Instagram avisa la altura real de su contenido
 * (mensaje "MEASURE"), así que el marco se ajusta solo y nunca queda cortado.
 */
const InstagramEmbed = ({ src }: InstagramEmbedProps) => {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(640);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.source !== frameRef.current?.contentWindow) return;
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        const next = data?.type === "MEASURE" ? data?.details?.height : null;
        if (typeof next === "number" && next > 200 && next < 2000) setHeight(Math.ceil(next));
      } catch {
        /* mensaje de otro origen o sin formato: se ignora */
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl">
      <iframe
        ref={frameRef}
        src={src}
        title="Publicación de Instagram de Inspira Tech"
        loading="lazy"
        scrolling="no"
        allowTransparency
        style={{ height }}
        className="block w-full border-0"
      />
    </div>
  );
};

export default InstagramEmbed;
