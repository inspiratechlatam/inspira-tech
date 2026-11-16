/**
 * Prueba social de la landing.
 * Agrega aquí los enlaces y aparecerán solos en la sección "Testimonios".
 * Mientras estén vacíos, solo se muestran los testimonios escritos.
 */

/** Enlaces a publicaciones de Instagram, ej. "https://www.instagram.com/p/XXXXXXXXXXX/" o ".../reel/XXXXXXXXXXX/" */
export const instagramPosts: string[] = [
  "https://www.instagram.com/p/DZTzjN3nGUv/",
  "https://www.instagram.com/p/DXiqP1wjSiW/",
  "https://www.instagram.com/reel/Dcv4BhKymn1/",
];

/** Enlaces a videos de YouTube con testimonios, ej. "https://www.youtube.com/watch?v=XXXXXXXXXXX" */
export const videoTestimonials: string[] = [];

export const writtenTestimonials = [
  {
    quote:
      "En el Demo Day, presentamos nuestra propuesta y fuimos reconocidos como el equipo ganador. Pero más allá del premio, nos llevamos el aprendizaje, la conexión con mentores y el impulso de una comunidad increíble.",
    author: "Laura",
    cohort: "Cohorte 1",
  },
  {
    quote:
      "Después de casi mes y medio, siento tanta emoción de los grandes pasos que he dado para avanzar en mi emprendimiento. Ahora puedo manejar la landing page con Lovable, realizar automatizaciones en Make y usar Notion para... bueno realmente qué no se puede hacer en Notion? Es una navaja suiza con multiples usos. La amé.",
    author: "Valenttina",
    cohort: "Cohorte 1",
  },
];

/** Devuelve la URL de inserción de Instagram, o null si el enlace no es válido. */
export const instagramEmbedUrl = (link: string): string | null => {
  try {
    const url = new URL(link);
    if (!/(^|\.)instagram\.com$/.test(url.hostname)) return null;
    const match = url.pathname.match(/^\/(p|reel|tv)\/([A-Za-z0-9_-]+)/);
    return match ? `https://www.instagram.com/${match[1]}/${match[2]}/embed` : null;
  } catch {
    return null;
  }
};

/** Devuelve la URL de inserción de YouTube (sin cookies), o null si el enlace no es válido. */
export const youtubeEmbedUrl = (link: string): string | null => {
  try {
    const url = new URL(link);
    let id: string | null = null;
    if (url.hostname === "youtu.be") id = url.pathname.slice(1);
    else if (/(^|\.)youtube\.com$/.test(url.hostname)) {
      id = url.searchParams.get("v") ?? url.pathname.match(/^\/(?:shorts|embed)\/([A-Za-z0-9_-]+)/)?.[1] ?? null;
    }
    return id && /^[A-Za-z0-9_-]{6,20}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : null;
  } catch {
    return null;
  }
};
