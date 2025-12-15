import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Resource, ResourceType } from "@/components/ResourceBlock";
import GlossaryItem from "@/components/GlossaryItem";
import { Lightbulb, Hammer, Podcast, BookOpen, ArrowRight, ExternalLink } from "lucide-react";

const Recursos = () => {
  const introResources: Resource[] = [
    {
      title: "¿Qué son las Startups y cómo funcionan?",
      url: "https://www.youtube.com/watch?v=JwywjDlxtSI",
      type: "video"
    },
    {
      title: "Qué es una Startup | Diferencias entre Startup y Empresa",
      url: "https://www.youtube.com/watch?v=ycu9TcNdazQ",
      type: "video"
    }
  ];

  const toolsResources: Resource[] = [
    {
      title: "[Tutorial Make] Automatización de IA ChatGPT",
      url: "https://www.youtube.com/watch?v=Bh1ytzaOuuc",
      type: "video"
    },
    {
      title: "Construyendo Lovable: en 60 días con 15 personas",
      url: "https://open.spotify.com/episode/7DOJOSKKir2NW38IrGHT4G?si=_SJBMqufSd2dIdCvMquS2g",
      type: "podcast"
    },
    {
      title: "Olvídate de Programar: Esta IA Construye Tu Proyecto Completo en Minutos",
      url: "https://www.youtube.com/watch?v=KQERoKy4fAs",
      type: "video"
    },
    {
      title: "La Nueva Era del Diseño de Interfaces con Lovable",
      url: "https://www.youtube.com/watch?v=RGZeP1_oMoY",
      type: "video"
    }
  ];

  const podcastResources: Resource[] = [
    {
      title: "Startupeable – Enzo Cavaille",
      url: "https://open.spotify.com/show/0MJ4o9PiB0pe6u9wQK44zM",
      type: "podcast"
    },
    {
      title: "Era Digital",
      url: "https://open.spotify.com/show/7jHouLSZ39pkbKViniKSle",
      type: "podcast"
    },
    {
      title: "Emprendebroders",
      url: "https://open.spotify.com/show/5b0fX3uibiUdvzBfOOg95K",
      type: "podcast"
    },
    {
      title: "El universo de Truora",
      url: "https://open.spotify.com/episode/1vdwNp45npRntwt65AtOPS?si=RLw8KQArQWGLK33sAo5kXw",
      type: "podcast"
    },
    {
      title: "True Growth – Fernando Trueba",
      url: "https://open.spotify.com/show/7gYUcSAcQ8niBTwpgnLqmn",
      type: "podcast"
    },
    {
      title: "Múltiples formas de escalar una Startup – Daniel Bilbao",
      url: "https://open.spotify.com/episode/3ahY1PSSJFO7qbKdaIWxKd?si=I-Z3oh68QO6l5YSN7ylbiA",
      type: "podcast"
    },
    {
      title: "La fórmula Nubank para crear un océano azul",
      url: "https://open.spotify.com/episode/0c6euVYCmSq27NiZY1cUjr?si=HCDwOefdRDGaW9XQNC9MYg",
      type: "podcast"
    },
    {
      title: "Lenny's Podcast",
      url: "https://open.spotify.com/show/2dR1MUZEHCOnz1LVfNac0j?si=1300b16e1ebf4efe",
      type: "podcast"
    }
  ];

  const glossaryItems = [
    {
      number: "1",
      term: "No-Code",
      definition: "Desarrollo de software sin necesidad de escribir código, utilizando herramientas visuales e interfaces intuitivas.",
      example: "Plataformas como Bubble o Lovable.dev permiten crear aplicaciones con solo arrastrar y soltar elementos.",
      videoUrl: "https://www.youtube.com/watch?v=RPyZ2N-6Qpk"
    },
    {
      number: "2",
      term: "Machine Learning",
      definition: "Rama de la IA que permite a las computadoras aprender de datos sin ser programadas explícitamente.",
      example: "Netflix recomienda series basándose en lo que ves.",
      videoUrl: "https://www.youtube.com/watch?v=NOyQvyG-Kp8"
    },
    {
      number: "3",
      term: "Low-Code",
      definition: "Desarrollo de software con mínima codificación, permitiendo personalizar aplicaciones con fragmentos de código.",
      example: "OutSystems y Mendix combinan lo visual con la programación para crear apps avanzadas.",
      videoUrl: "https://www.youtube.com/watch?v=trwblguy8pM"
    },
    {
      number: "4",
      term: "Big Data",
      definition: "Análisis de grandes volúmenes de datos para obtener información valiosa.",
      example: "Amazon usa Big Data para predecir qué productos tendrá en stock.",
      videoUrl: "https://www.youtube.com/watch?v=33o0hgg9vJQ"
    },
    {
      number: "5",
      term: "Automatizaciones",
      definition: "Uso de tecnología y herramientas digitales para ejecutar tareas repetitivas sin intervención humana.",
      example: "Make o Zapier pueden enviar correos automáticos cuando alguien llena un formulario.",
      videoUrl: "https://www.youtube.com/watch?v=X_IfAzUjyyA"
    },
    {
      number: "6",
      term: "Blockchain",
      definition: "Base de datos descentralizada y segura que registra transacciones sin intermediarios.",
      example: "Bitcoin y Ethereum usan blockchain para garantizar transacciones seguras.",
      videoUrl: "https://www.youtube.com/watch?v=YIVAluSL9SU"
    },
    {
      number: "7",
      term: "API",
      definition: "Conjunto de reglas que permiten que diferentes sistemas se comuniquen entre sí.",
      example: "La API de Google Maps permite integrar mapas en aplicaciones de terceros.",
      videoUrl: "https://www.youtube.com/watch?v=s7wmiS2mSXY"
    },
    {
      number: "8",
      term: "Fintech",
      definition: "Tecnología aplicada a servicios financieros.",
      example: "Apps como Yape y Stripe facilitan pagos digitales.",
      videoUrl: "https://www.youtube.com/watch?v=b6r1dyRwaq8"
    },
    {
      number: "9",
      term: "Cloud Computing",
      definition: "Uso de servidores en internet para almacenar, gestionar y procesar datos sin depender de hardware físico.",
      example: "Google Drive y AWS permiten guardar archivos sin ocupar espacio en la PC.",
      videoUrl: "https://www.youtube.com/watch?v=8NZxdmF6Okk"
    },
    {
      number: "10",
      term: "UX/UI Design",
      definition: "Diseño de experiencia (UX) y diseño de interfaz de usuario (UI) para mejorar la interacción con productos digitales.",
      example: "Airbnb optimiza su UI para facilitar la búsqueda de hospedaje.",
      videoUrl: "https://www.youtube.com/watch?v=hEGzAulFhKk"
    },
    {
      number: "11",
      term: "SaaS (Software as a Service)",
      definition: "Modelos de software basados en la nube con suscripción mensual.",
      example: "Notion, Canva y Google Drive son SaaS.",
      videoUrl: "https://www.youtube.com/watch?v=tcIChFZGAjM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div id="inicio" className="pt-0">
        {/* Hero section - Fixed to take full width with no white space */}
        <section className="bg-gradient-to-br from-inspira-darkBlue to-inspira-blue text-white py-16 px-4 pt-28">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Tu ruta en el ecosistema digital empieza aquí
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in animate-delay-100">
              Este es tu espacio para empezar a explorar nuevas herramientas, conceptos y referentes del mundo tech. 
              Aprende a través de estos recursos gratuitos recopilados por el equipo y comunidad de Inspira Tech.
            </p>
          </div>
        </section>
        
        {/* Resources blocks */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-10">
              {/* Intro Resources */}
              <div>
                <h2 className="text-2xl font-bold text-inspira-darkBlue mb-3">Introducción al mundo startup y tech</h2>
                
                <p className="mb-6 text-gray-600">
                  Conoce los conceptos esenciales del ecosistema digital y por qué habilidades como la empatía, la creatividad 
                  y la colaboración son tan relevantes como la tecnología.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {introResources.map((resource, index) => (
                    <a 
                      key={index} 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start gap-3 group"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <span className="text-2xl">
                          {resource.type === "podcast" ? "🎙️" : resource.type === "video" ? "🎬" : "📝"}
                        </span>
                        <div>
                          <p className="font-medium">{resource.title}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {resource.type === "podcast" ? "Podcast" : resource.type === "video" ? "Video" : "Artículo"}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-inspira-blue transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Tools Resources */}
              <div>
                <h2 className="text-2xl font-bold text-inspira-darkBlue mb-3">Herramientas No-code y Automatización</h2>
                
                <p className="mb-6 text-gray-600">
                  Descubre cómo construir productos digitales sin saber programar y cómo automatizar tareas 
                  repetitivas para trabajar de forma más eficiente.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {toolsResources.map((resource, index) => (
                    <a 
                      key={index} 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start gap-3 group"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <span className="text-2xl">
                          {resource.type === "podcast" ? "🎙️" : resource.type === "video" ? "🎬" : "📝"}
                        </span>
                        <div>
                          <p className="font-medium">{resource.title}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {resource.type === "podcast" ? "Podcast" : resource.type === "video" ? "Video" : "Artículo"}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-inspira-blue transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Podcast Resources */}
              <div>
                <h2 className="text-2xl font-bold text-inspira-darkBlue mb-3">Podcasts que inspiran</h2>
                
                <p className="mb-6 text-gray-600">
                  Historias de líderes y emprendedores tech de LATAM que están construyendo empresas con propósito. 
                  Escúchalos mientras caminas, cocinas o trabajas.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {podcastResources.map((resource, index) => (
                    <a 
                      key={index} 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start gap-3 group"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <span className="text-2xl">🎙️</span>
                        <div>
                          <p className="font-medium">{resource.title}</p>
                          <p className="text-sm text-gray-500 mt-1">Podcast</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-inspira-blue transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Glossary */}
              <div>
                <h2 className="text-2xl font-bold text-inspira-darkBlue mb-3">Wiki Inspira Tech</h2>
                
                <p className="mb-6 text-gray-600">
                  Te presentamos nuestro diccionario, glosario, lingo… (llámalo como prefieras) para que veas que hablar en digital
                  —al igual que tus mentores y amigos— no es tan difícil como parece. Este es solo un pequeño diccionario, pero en la
                  práctica descubrirás muchas palabras más:
                </p>
                
                <div className="space-y-2">
                  {glossaryItems.map((item, index) => (
                    <GlossaryItem 
                      key={index}
                      number={item.number}
                      term={item.term}
                      definition={item.definition}
                      example={item.example}
                      videoUrl={item.videoUrl}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-16 py-12 px-6 bg-gradient-to-br from-inspira-darkBlue to-inspira-blue text-white rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">
                  ¿Quieres seguir aprendiendo con nosotros y llevar tu idea o perfil digital al siguiente nivel?
                </h3>
                <a 
                  href="https://airtable.com/appQSwwBh50GVi2k7/shrYlE6W51simzTvW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-inspira-turquoise text-inspira-darkBlue font-bold px-8 py-3 rounded-full transition-all inline-block text-center"
                >
                  Aprender más con Inspira Tech
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Recursos;
