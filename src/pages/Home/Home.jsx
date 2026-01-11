import React, { useState } from "react";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Testimonials from "../../components/Testimonials/Testimonials";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConsultation = (e) => {
    e.preventDefault();
    alert(
      `Gracias ${formData.name}. Nos pondremos en contacto pronto al ${formData.phone}`
    );
  };

  return (
    <div>
      {/* Sección Hero/Inicio */}
      <section
        id="inicio"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-48 text-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Badge de testimonios */}
          {/*           <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-2 mt-8 mb-6 mx-auto max-w-[90%] md:max-w-none rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-sm">
            <div className="flex items-center -space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-zinc-900 font-bold">
                R
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-zinc-900 font-bold -translate-x-2">
                L
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-600 border-2 border-white flex items-center justify-center text-zinc-900 font-bold -translate-x-4">
                C
              </div>
            </div>
            <p className="text-white text-sm">
              +500 casos resueltos exitosamente
            </p>
          </div> */}

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-[95%] sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto px-4"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
          >
            Defendemos sus derechos con{" "}
            <span className="text-amber-400">experiencia y dedicación</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed mb-4 max-w-[95%] sm:max-w-[90%] md:max-w-[60%] mx-auto px-4">
            Más de 25 años de experiencia en derecho civil, penal y laboral.
            Nuestro equipo de abogados especializados está listo para ayudarle.
          </p>

          <p className="text-base sm:text-lg opacity-90 mb-8 max-w-[95%] sm:max-w-[90%] md:max-w-[60%] mx-auto px-4">
            Primera consulta gratuita y sin compromiso
          </p>

          {/* Formulario de consulta */}
          <div className="flex flex-col items-center mt-8 max-w-[95%] sm:max-w-[90%] md:max-w-[60%] mx-auto w-full px-4">
            <div className="flex flex-col md:flex-row md:items-center w-full max-w-md md:max-w-[32rem] bg-white/10 backdrop-blur-[10px] rounded-xl p-4 sm:p-6 md:p-4 border border-white/20">
              <h3 className="text-xl mb-4 md:hidden text-amber-400">
                Solicite su consulta gratuita
              </h3>
              <form
                onSubmit={handleConsultation}
                className="flex flex-col md:flex-row gap-4 w-full"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Su nombre"
                  required
                  className="flex-grow px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/90 text-zinc-900 border-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Número de teléfono"
                  required
                  className="flex-grow px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/90 text-zinc-900 border-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="bg-amber-400 text-zinc-900 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold hover:bg-amber-500 transition-all duration-300 whitespace-nowrap"
                >
                  Contactar ahora
                </button>
              </form>
            </div>

            {/* Info de contacto */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-6 text-xs sm:text-sm">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">📞</span>
                <span>2451-8829</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">📞</span>
                <span>7682-6579</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">✉️</span>
                <span className="break-all">abogadospiliasantos@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <About />

      {/* Sección Servicios */}
      <Services />

      {/* Sección Testimonios */}
      <Testimonials />

      {/* Sección CTA */}
      <CTA />

      {/* Sección Contacto */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
