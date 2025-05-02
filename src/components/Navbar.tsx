
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [{
    name: "Inicio",
    href: "#inicio"
  }, {
    name: "El programa",
    href: "#programa"
  }, {
    name: "Contenido",
    href: "#contenido"
  }, {
    name: "Equipo",
    href: "#mentores"
  }, {
    name: "Testimonios",
    href: "#testimonios"
  }, {
    name: "FAQ",
    href: "#faq"
  }];

  return (
    <nav className={cn("fixed w-full z-50 transition-all duration-300 py-4 px-6", isScrolled ? "bg-inspira-darkBlue shadow-md py-2" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#inicio" className="flex items-center">
          <img 
            src="/lovable-uploads/6d7e7d52-a1a8-49c1-a88e-df9588ee9f22.png" 
            alt="Inspira Tech Logo"
            className="h-8 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white hover:text-inspira-turquoise transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://airtable.com/appUU31Gq4ELV7uei/shrvbf7GdDYuYFSpa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-inspira-turquoise text-inspira-darkBlue font-bold px-4 py-2 rounded-full hover:bg-opacity-90 transition-all animate-pulse"
          >
            Únete
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-inspira-darkBlue py-4 px-6 shadow-md">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block py-2 text-white hover:text-inspira-turquoise transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://airtable.com/appUU31Gq4ELV7uei/shrvbf7GdDYuYFSpa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block mt-2 bg-inspira-turquoise text-inspira-darkBlue font-bold px-4 py-2 rounded-full hover:bg-opacity-90 transition-all text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Únete
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
