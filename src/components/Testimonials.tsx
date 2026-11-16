import React from "react";
import SectionHeading from "./SectionHeading";
import InstagramEmbed from "./InstagramEmbed";
import {
  instagramEmbedUrl,
  instagramPosts,
  videoTestimonials,
  writtenTestimonials,
  youtubeEmbedUrl,
} from "@/config/socialProof";

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

const Testimonials = () => {
  const videos = videoTestimonials.map(youtubeEmbedUrl).filter((u): u is string => Boolean(u));
  const posts = instagramPosts.map(instagramEmbedUrl).filter((u): u is string => Boolean(u));

  return (
    <section id="comunidad" className="bg-gray-50 px-4 py-14 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Comunidad"
          title="Así se vive Inspira Tech"
          subtitle="Resultados, experiencias y encuentros de la comunidad que ya forma parte del programa."
        />

        {videos.length > 0 && (
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            {videos.map((src) => (
              <div key={src} className="aspect-video overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-black/5">
                <iframe
                  src={src}
                  title="Testimonio en video"
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
        )}

        {posts.length > 0 && (
          <div className="mb-12">
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((src) => (
                <InstagramEmbed key={src} src={src} />
              ))}
            </div>
          </div>
        )}

        <h3 className="mb-6 text-center text-xl font-bold text-inspira-darkBlue">
          Lo que dicen quienes ya lo vivieron
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {writtenTestimonials.map((t) => (
            <figure
              key={t.author}
              className="card-hover flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-black/5"
            >
              <div className="mb-4 text-inspira-turquoise">
                <QuoteIcon />
              </div>
              <blockquote className="flex-1 text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-semibold text-inspira-darkBlue">{t.author}</p>
                <p className="text-sm text-gray-500">{t.cohort}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
