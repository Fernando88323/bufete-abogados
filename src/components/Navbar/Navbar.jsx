import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-[10px] z-[1000] transition-all duration-300 border-b border-zinc-700 ${
        scrolled
          ? "bg-[rgba(26,26,26,0.98)] py-[0.7rem] px-8 shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          : "bg-[rgba(26,26,26,0.95)] py-4 px-8"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "inicio")}
          className="text-white text-[1.8rem] font-bold no-underline cursor-pointer"
        >
          Bufete <span className="text-amber-400">Pilia-Santos</span>
        </a>

        {/* Menu hamburguesa para móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 cursor-pointer focus:outline-none"
        >
          <span
            className={`w-[25px] h-[3px] bg-white rounded-sm transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`w-[25px] h-[3px] bg-white rounded-sm transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-[25px] h-[3px] bg-white rounded-sm transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "inicio")}
              className="text-white no-underline font-medium transition-colors duration-300 hover:text-amber-400 relative group cursor-pointer"
            >
              Inicio
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-white no-underline font-medium transition-colors duration-300 hover:text-amber-400 relative group cursor-pointer"
            >
              Sobre Nosotros
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              onClick={(e) => handleNavClick(e, "servicios")}
              className="text-white no-underline font-medium transition-colors duration-300 hover:text-amber-400 relative group cursor-pointer"
            >
              Servicios
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="text-white no-underline font-medium transition-colors duration-300 hover:text-amber-400 relative group cursor-pointer"
            >
              Contacto
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="bg-amber-400 text-zinc-900 py-[0.7rem] px-6 rounded-full font-semibold no-underline transition-all duration-300 hover:bg-amber-500 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              Consulta Gratis
            </a>
          </li>
        </ul>
      </div>

      {/* Menu móvil desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 items-center text-center">
          <li>
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "inicio")}
              className="inline-block text-white hover:text-amber-400 transition-colors font-medium relative group cursor-pointer"
            >
              Inicio
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="inline-block text-white hover:text-amber-400 transition-colors font-medium relative group cursor-pointer"
            >
              Sobre Nosotros
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              onClick={(e) => handleNavClick(e, "servicios")}
              className="inline-block text-white hover:text-amber-400 transition-colors font-medium relative group cursor-pointer"
            >
              Servicios
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="inline-block text-white hover:text-amber-400 transition-colors font-medium relative group cursor-pointer"
            >
              Contacto
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="inline-block bg-amber-400 text-zinc-900 py-[0.7rem] px-6 rounded-full font-semibold no-underline transition-all duration-300 hover:bg-amber-500 mt-2 cursor-pointer"
            >
              Consulta Gratis
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
