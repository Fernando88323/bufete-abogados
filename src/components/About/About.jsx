import React from "react";
import director from "../../assets/images/director.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white text-zinc-900 pt-32 pb-16 px-4 scroll-mt-30"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre Nuestro <span className="text-amber-400">Bufete</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Somos un Despacho de Abogados y Notarios, con experiencia por más de
            20 años, que ofrece servicios legales en diferentes ramas del
            Derecho.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen o placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src={director}
                alt="Nuestro equipo de abogados"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-lg -z-10"></div>
          </div>

          {/* Texto descriptivo */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Nuestro Director</h3>
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-amber-400 mb-2">
                Lic. Juan José Piliá
              </h4>
              <p className="text-lg font-semibold text-gray-700 mb-4">
                Abogado y Notario
              </p>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Profesional del derecho con sólida formación académica y amplia
              trayectoria en diferentes áreas del derecho. Comprometido con
              brindar servicios legales de excelencia a nuestros clientes.
            </p>

            {/* Características */}
            <div className="space-y-6">
              {/* Característica 1 */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-amber-400 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Formación Académica
                  </h4>
                  <p className="text-gray-600">
                    Graduado de la UES. Diplomado en Derecho Laboral del CNJ.
                    Posgrado del Derecho de Empresa de la UTEC.
                  </p>
                </div>
              </div>

              {/* Característica 2 */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-amber-400 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <span className="text-3xl">⚖️</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Experiencia Profesional
                  </h4>
                  <p className="text-gray-600">
                    Ex Agente Auxiliar de la FGR. Más de 20 años de experiencia
                    en diferentes ramas del Derecho.
                  </p>
                </div>
              </div>

              {/* Característica 3 */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-amber-400 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Trayectoria</h4>
                  <p className="text-gray-600">
                    Ex Presidente de la Junta de la Carrera Docente del MINED.
                    Comprometido con la excelencia legal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
