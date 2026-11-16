import React from "react";
import SectionHeading from "./SectionHeading";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type TeamMember = {
  name: string;
  role: string;
  /** Si no hay foto todavía, se muestran las iniciales. */
  avatar?: string;
};

// Para sumar a alguien: agrega una línea aquí con su nombre, rol y (opcional) la ruta de su foto
// (las fotos nuevas van en public/team). Sin foto se muestran las iniciales.
const teamMembers: TeamMember[] = [
  { name: "Carmen Nepo", role: "Founder de Inspira Tech", avatar: "/team/carmen-nepo.png" },
  { name: "Carolina Carbajal", role: "Community Lead", avatar: "/team/carolina-carbajal.png" },
  { name: "Mauro Quinteros", role: "Experience & Tech Coordination", avatar: "/team/mauro-quinteros.png" },
  { name: "Cris Richard Chavez", role: "People Team", avatar: "/lovable-uploads/1eab4190-3fbe-4bb7-9d14-b7be3c3d4f70.png" },
  { name: "Aranzazu Caballero", role: "Community Team", avatar: "/team/aranzazu-caballero.png" },
  { name: "Jennifer Gutierrez", role: "Product & Growth Coordinator", avatar: "/team/jennifer-gutierrez.png" },
];

// Flechas debajo del carrusel (anulan el posicionamiento absoluto por defecto)
const arrowClass =
  "static h-11 w-11 translate-x-0 translate-y-0 border-inspira-purple/30 text-inspira-darkBlue hover:bg-inspira-purple hover:text-white disabled:opacity-30";

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const Team = () => (
  <section id="mentores" className="bg-white px-4 py-14 md:py-20">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Equipo"
        title="Conoce a quienes te acompañan"
        subtitle="Personas apasionadas por la tecnología, la educación y la creación de oportunidades en LATAM. Ellos hacen posible Inspira Tech."
      />

      {/* Carrusel horizontal: se desliza con el dedo o arrastrando con el mouse, sin barra de scroll */}
      <Carousel opts={{ align: "start" }} className="-mx-12 sm:mx-0">
        <CarouselContent className="-ml-4 pl-12 sm:pl-0">
          {teamMembers.map((member) => (
            <CarouselItem key={member.name} className="basis-[72%] pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <figure className="group relative aspect-[4/5] select-none overflow-hidden rounded-3xl bg-inspira-darkBlue shadow-lg ring-1 ring-black/5">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-inspira-blue to-inspira-purple font-montserrat text-6xl font-bold text-white/90">
                    {initials(member.name)}
                  </div>
                )}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-inspira-darkBlue via-inspira-darkBlue/30 to-transparent"
                />

                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="font-montserrat text-lg font-bold leading-tight">{member.name}</p>
                  <p className="mt-1 text-sm font-medium text-inspira-turquoise">{member.role}</p>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-8 flex items-center justify-center gap-3">
          <CarouselPrevious className={arrowClass} />
          <CarouselNext className={arrowClass} />
        </div>
      </Carousel>
    </div>
  </section>
);

export default Team;
