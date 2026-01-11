import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Roberto Martínez",
      case: "Derecho Laboral",
      rating: 5,
      text: "Excelente servicio. Me ayudaron con mi caso de despido injustificado y logré una compensación justa. Muy profesionales y atentos.",
      image: "R",
    },
    {
      name: "Laura González",
      case: "Derecho Familiar",
      rating: 5,
      text: "El equipo me guió en un proceso de divorcio difícil con mucha sensibilidad y profesionalismo. Altamente recomendados.",
      image: "L",
    },
    {
      name: "Carlos Pérez",
      case: "Derecho Penal",
      rating: 5,
      text: "Gracias a su defensa, mi caso se resolvió favorablemente. Son abogados con gran experiencia y dedicación.",
      image: "C",
    },
  ];

  return (
    <section
      id="testimonios"
      className="min-h-screen bg-white text-zinc-900 pt-32 pb-16 px-4 scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Testimonios de <span className="text-amber-400">Clientes</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
            Estas son algunas de las experiencias que han compartido con
            nosotros.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-amber-400 transition-all duration-300"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Cliente */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-zinc-900 font-bold text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.case}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
