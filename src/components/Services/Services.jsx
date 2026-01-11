import React from "react";

const Services = () => {
  const services = [
    {
      icon: "⚖️",
      title: "Derecho Penal",
      description:
        "Defensa penal especializada. Garantizamos sus derechos procesales y trabajamos para obtener los mejores resultados en su caso.",
      features: [
        "Defensa en juicios penales",
        "Asesoría en detenciones",
        "Recursos y apelaciones",
        "Representación ante la FGR",
      ],
    },
    {
      icon: "🏢",
      title: "Derecho Civil",
      description:
        "Representación legal en casos civiles, contratos, propiedad, responsabilidad civil y más. Protegemos sus derechos patrimoniales.",
      features: [
        "Contratos y acuerdos",
        "Herencias y sucesiones",
        "Bienes raíces",
        "Responsabilidad civil",
      ],
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Derecho de Familia",
      description:
        "Asesoría en divorcios, custodia, pensiones alimenticias y todos los asuntos familiares con sensibilidad y profesionalismo.",
      features: [
        "Divorcios y separaciones",
        "Custodia y patria potestad",
        "Pensiones alimenticias",
        "Adopciones y tutelas",
      ],
    },
    {
      icon: "💼",
      title: "Derecho Laboral",
      description:
        "Defendemos sus derechos laborales. Despidos injustificados, acoso laboral, liquidaciones y todo tipo de conflictos laborales.",
      features: [
        "Despidos injustificados",
        "Acoso laboral",
        "Liquidaciones y prestaciones",
        "Negociación colectiva",
      ],
    },
    {
      icon: "📝",
      title: "Escrituras y Diligencias Notariales",
      description:
        "Elaboración de todo tipo de escrituras y diligencias notariales. Servicios notariales completos para particulares y empresas.",
      features: [
        "Escrituras de propiedades",
        "Contratos notariales",
        "Poderes y mandatos",
        "Autenticaciones y certificaciones",
      ],
    },
    {
      icon: "🔍",
      title: "Investigación en Archivos Públicos",
      description:
        "Asesoría e investigación especializada en archivos de acceso público. Búsqueda de documentos y antecedentes legales.",
      features: [
        "Búsqueda de antecedentes",
        "Investigación de títulos",
        "Consulta de registros públicos",
        "Verificación de documentos",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      className="min-h-screen bg-white text-zinc-900 pt-32 pb-16 px-4 scroll-mt-30"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-amber-400">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Ofrecemos servicios legales especializados en múltiples áreas del
            derecho para proteger sus intereses
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white text-zinc-900 p-10 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden group before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-amber-400 before:to-amber-600 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl mb-6 text-white text-3xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 text-[0.95rem]"
                  >
                    <span className="text-amber-400 text-sm">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 bg-transparent text-amber-400 border-2 border-amber-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-amber-400 hover:text-white hover:-translate-y-0.5">
                Más Información
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Proceso de Trabajo */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
              Nuestro Proceso de <span className="text-amber-400">Trabajo</span>
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Seguimos un método probado para garantizar los mejores resultados
              en cada caso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="w-12 h-12 bg-amber-400 text-zinc-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Consulta Inicial</h3>
              <p className="text-gray-700 leading-relaxed">
                Evaluamos su caso en una consulta gratuita y confidencial.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-12 h-12 bg-amber-400 text-zinc-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Análisis Legal</h3>
              <p className="text-gray-700 leading-relaxed">
                Estudiamos a fondo su situación y desarrollamos una estrategia.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-12 h-12 bg-amber-400 text-zinc-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Representación</h3>
              <p className="text-gray-700 leading-relaxed">
                Ejecutamos la estrategia legal con dedicación y expertise.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-12 h-12 bg-amber-400 text-zinc-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Solución</h3>
              <p className="text-gray-700 leading-relaxed">
                Logramos los mejores resultados posibles para su caso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
