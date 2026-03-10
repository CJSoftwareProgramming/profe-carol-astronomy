/* FAQSection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — accordion FAQ for parents */
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿A partir de qué edad pueden tomar las clases?",
    a: "Las clases están diseñadas para niños de 4 a 12 años. Los más pequeños (4-6 años) disfrutan de las clases recreacionales con temas visuales y dinámicos. Los mayores (7-12 años) pueden acceder también al programa académico estructurado.",
  },
  {
    q: "¿Las clases son en vivo o grabadas?",
    a: "Todas las clases son en vivo, lo que permite interacción directa con la Profe Carol, preguntas en tiempo real y una experiencia educativa mucho más rica y personalizada.",
  },
  {
    q: "¿Cuántos estudiantes hay por clase?",
    a: "Para garantizar atención personalizada, las clases recreacionales tienen un máximo de 15 estudiantes y las clases académicas un máximo de 10 estudiantes.",
  },
  {
    q: "¿Qué necesita mi hijo para tomar las clases?",
    a: "Solo necesita una computadora, tablet o teléfono con conexión a internet y acceso a Zoom o la plataforma de videollamadas que usemos. No se necesita ningún material especial.",
  },
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "Sí, puedes actualizar o cambiar tu plan al inicio de cada mes. Si deseas agregar más clases o pasar al programa académico, simplemente contáctanos y lo gestionamos.",
  },
  {
    q: "¿En qué idioma son las clases?",
    a: "Todas las clases son en español, diseñadas especialmente para niños hispanohablantes de toda América Latina y España.",
  },
  {
    q: "¿Cómo funciona el telescopio Celestron de regalo?",
    a: "Los estudiantes del Plan Académico Completo ($80/mes) y el Plan Homeschool ($100/mes) reciben un telescopio Celestron de viaje como regalo después de completar 2 meses consecutivos de clases.",
  },
  {
    q: "¿Qué pasa si mi hijo no puede asistir a una clase?",
    a: "Entendemos que los niños tienen otras actividades. En el programa recreacional, simplemente elige otra clase esa semana. En el programa académico, te informaremos sobre las opciones de recuperación disponibles.",
  },
  {
    q: "¿Cómo me inscribo?",
    a: "Completa el formulario de inscripción en esta página o contáctanos directamente por WhatsApp. Te responderemos en menos de 24 horas para coordinar los detalles y confirmar tu cupo.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#03071E] py-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[#4CC9F0]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Preguntas Frecuentes</p>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white leading-tight mb-5" style={{ fontWeight: 900 }}>
            Resolvemos tus
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CC9F0] to-[#90E0EF]">
              dudas
            </span>
          </h2>
        </motion.div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`cosmic-card rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? "border-[#4CC9F0]/40" : ""
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-['Outfit'] text-base font-600 text-white leading-snug" style={{ fontWeight: 600 }}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#4CC9F0] flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <div className="border-t border-[#4CC9F0]/10 pt-4">
                    <p className="font-['Crimson_Pro'] text-base text-[#B8D4E8] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
