/* FAQSection v2 — Deep Field Observatory design */
import { motion, AnimatePresence } from "framer-motion";
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
    a: "Completa el formulario de inscripción en esta página o contáctanos directamente por WhatsApp al +44 7462 994908. Te responderemos en menos de 24 horas para coordinar los detalles y confirmar tu cupo.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 overflow-hidden" style={{ background: "rgba(10,5,20,0.78)" }}>
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-4 justify-center">Preguntas Frecuentes</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "white", lineHeight: 1.1 }}>
            Resolvemos tus{" "}
            <span className="cosmic-shimmer">dudas</span>
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
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: open === i ? "rgba(123,47,190,0.1)" : "rgba(22,13,38,0.8)",
                border: open === i ? "1px solid rgba(123,47,190,0.35)" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "white", lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <ChevronDown
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{ width: "1.1rem", height: "1.1rem", color: "#7B2FBE", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <div className="pt-3" style={{ borderTop: "1px solid rgba(123,47,190,0.15)" }}>
                        <p style={{ fontFamily: "'Lora', serif", fontSize: "0.95rem", color: "#C4B5E0", lineHeight: 1.8 }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
