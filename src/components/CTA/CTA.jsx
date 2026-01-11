import React from "react";

const CTA = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contacto");
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
    <section className="bg-gradient-to-r from-amber-400 to-amber-500 py-16 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          ¿Necesita Asesoría Legal Inmediata?
        </h2>
        <p className="text-zinc-800 text-lg mb-8 max-w-2xl mx-auto">
          No espere hasta que sea demasiado tarde. Nuestros abogados
          especializados están listos para evaluar su caso y proteger sus
          derechos.
        </p>
        <a
          href="#contacto"
          onClick={handleScrollToContact}
          className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <span>⚖️</span>
          Consulta Gratuita
        </a>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
          <div className="text-zinc-900">
            <div className="text-3xl mb-2">⏰</div>
            <p className="font-semibold">Respuesta en 24 horas</p>
          </div>
          <div className="text-zinc-900">
            <div className="text-3xl mb-2">✔️</div>
            <p className="font-semibold">Primera consulta gratuita</p>
          </div>
          <div className="text-zinc-900">
            <div className="text-3xl mb-2">🔒</div>
            <p className="font-semibold">Confidencialidad garantizada</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
