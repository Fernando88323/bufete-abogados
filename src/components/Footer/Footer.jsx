import React from "react";

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Sobre el bufete */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Bufete <span className="text-amber-400">Pilia-Santos</span>
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Somos un Despacho de Abogados y Notarios, con experiencia por más
              de 20 años, que ofrece servicios legales en diferentes ramas del
              Derecho.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100057326955209"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 sm:w-11 sm:h-11 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] text-gray-400 hover:text-white active:scale-95 transition-all duration-300 touch-manipulation"
                aria-label="Facebook"
                title="Facebook: BUFETE PILIÁ SANTOS"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://wa.me/50324518829"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 sm:w-11 sm:h-11 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#25D366] text-gray-400 hover:text-white active:scale-95 transition-all duration-300 touch-manipulation"
                aria-label="WhatsApp"
                title="WhatsApp: 2451-8829"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, "inicio")}
                  className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleNavClick(e, "servicios")}
                  className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  onClick={(e) => handleNavClick(e, "testimonios")}
                  className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => handleNavClick(e, "contacto")}
                  className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Áreas de práctica */}
          <div>
            <h3 className="text-xl font-bold mb-4">Áreas de Práctica</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Derecho Penal</li>
              <li>Derecho Civil</li>
              <li>Derecho de Familia</li>
              <li>Derecho Laboral</li>
              <li>Escrituras Notariales</li>
            </ul>
          </div>

          {/* Información legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Información Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Aviso Legal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Mapa del Sitio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">
            &copy; 2026 Bufete Piliá Santos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
