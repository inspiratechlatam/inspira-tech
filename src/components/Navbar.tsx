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
  }, {
    name: "Únete",
    href: "#unete"
  }];
  return <nav className={cn("fixed w-full z-50 transition-all duration-300 py-4 px-6", isScrolled ? "bg-inspira-darkBlue shadow-md py-2" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <img src="/lovable-uploads/7e16fc16-a8b3-4d35-ac95-3219a61be640.png" alt="Inspira Tech Logo" className="h-8 w-auto object-contain" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-white hover:text-inspira-turquoise transition-colors font-medium">
              {link.name}
            </a>)}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-inspira-darkBlue py-4 px-6 shadow-md">
          {navLinks.map(link => <a key={link.name} href={link.href} className="block py-2 text-white hover:text-inspira-turquoise transition-colors" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>)}
        </div>}
    </nav>;
};
export default Navbar;