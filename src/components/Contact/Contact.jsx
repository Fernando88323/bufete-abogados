import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert("Gracias por contactarnos. Te responderemos pronto.");
  };

  return (
    <section
      id="contacto"
      className="min-h-screen bg-white text-zinc-900 pt-32 pb-16 px-4 scroll-mt-30"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-amber-400">Contáctanos</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje y nos pondremos en
            contacto contigo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Formulario de contacto */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Asunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="">Selecciona un tema</option>
                  <option value="penal">Derecho Penal</option>
                  <option value="civil">Derecho Civil</option>
                  <option value="familia">Derecho de Familia</option>
                  <option value="laboral">Derecho Laboral</option>
                  <option value="notarial">
                    Escrituras y Diligencias Notariales
                  </option>
                  <option value="archivos">
                    Investigación en Archivos Públicos
                  </option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  placeholder="Describe tu consulta..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-400 text-zinc-900 py-4 rounded-lg font-bold hover:bg-amber-500 transition-all duration-300 hover:-translate-y-1"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">
                Información de contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-amber-400 text-2xl">📍</div>
                  <div>
                    <h4 className="font-bold mb-1">Dirección</h4>
                    <p className="text-gray-600">
                      6a Calle Oriente y 6a Av Sur
                      <br />
                      Col. y Plaza Providencia # 4 y 5<br />
                      1 cuadra abajo del Ex Centro Penal
                      <br />
                      Sonsonate, El Salvador
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-amber-400 text-2xl">📞</div>
                  <div>
                    <h4 className="font-bold mb-1">Teléfono / WhatsApp</h4>
                    <p className="text-gray-600">2451-8829</p>
                    <p className="text-gray-600">7682-6579</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-amber-400 text-2xl">✉️</div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">
                      abogadospiliasantos@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-amber-400 text-2xl">⏰</div>
                  <div>
                    <h4 className="font-bold mb-1">Horario de atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 - 17:00
                    </p>
                    <p className="text-gray-600">Sábados: 8:30 - 12:30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa o imagen */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Visítanos</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.0332656601468!2d-89.72989712514475!3d13.716435086671755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62b7822c8e4645%3A0x38b167b60a8741b0!2sBufete%20PILIA%20SANTOS!5e0!3m2!1ses-419!2ssv!4v1768114089824!5m2!1ses-419!2ssv"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Bufete Piliá Santos"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
