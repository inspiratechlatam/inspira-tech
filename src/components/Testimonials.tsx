
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "En el Demo Day, presentamos nuestra propuesta y fuimos reconocidos como el equipo ganador. Pero más allá del premio, nos llevamos el aprendizaje, la conexión con mentores y el impulso de una comunidad increíble.",
      author: "Laura",
      cohort: "Cohorte 1"
    },
    {
      quote: "Después de casi mes y medio, siento tanta emoción de los grandes pasos que he dado para avanzar en mi emprendimiento. Ahora puedo manejar la landing page con Lovable, realizar automatizaciones en Make y usar Notion para... bueno realmente qué no se puede hacer en Notion? Es una navaja suiza con multiples usos. La amé.",
      author: "Valenttina",
      cohort: "Cohorte 1"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll testimonials - changed from 5000 to 10000 ms (10 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonios" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-inspira-darkBlue mb-12">
          Testimonios
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="min-w-full px-4">
                  <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                    <div className="flex justify-center mb-6">
                      <div className="text-inspira-turquoise">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-12 w-12" 
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-xl text-center mb-6">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="text-center">
                      <p className="font-semibold text-inspira-darkBlue">— {testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.cohort}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`h-3 w-3 rounded-full ${
                  idx === currentIndex ? "bg-inspira-turquoise" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(idx)}
              ></button>
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full h-10 w-10 flex items-center justify-center focus:outline-none hover:bg-gray-50"
            onClick={prevTestimonial}
          >
            <ArrowLeft className="h-5 w-5 text-inspira-darkBlue" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full h-10 w-10 flex items-center justify-center focus:outline-none hover:bg-gray-50"
            onClick={nextTestimonial}
          >
            <ArrowRight className="h-5 w-5 text-inspira-darkBlue" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
