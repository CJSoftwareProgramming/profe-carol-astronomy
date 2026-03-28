/* FAQSection — Sophia Academy Brand
   Font: Fredoka One (titles) + Nunito (body)
   Colors: #FB923C solar, #FFD23F stellar, transparent bg */

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "¿A partir de qué edad pueden tomar las clases?", a: "Las clases están diseñadas para niños de 4 a 12 años. Los más pequeños (4-6 años) disfrutan de las clases recreacionales con temas visuales y dinámicos. Los mayores (7-12 años) pueden acceder también al programa académico estructurado." },
  { q: "¿Las clases son en vivo o grabadas?", a: "Todas las clases son en vivo, lo que permite interacción directa con la Profe Carol, preguntas en tiempo real y una experiencia educativa mucho más rica y personalizada." },
  { q: "¿Cuántos estudiantes hay por clase?", a: "Para garantizar atención personalizada, las clases recreacionales tienen un máximo de 15 estudiantes y las clases académicas un máximo de 10 estudiantes." },
  { q: "¿Qué necesita mi hijo para tomar las clases?", a: "Solo necesita una computadora, tablet o teléfono con conexión a internet y acceso a Zoom o la plataforma de videollamadas que usemos. No se necesita ningún material especial." },
  { q: "¿Puedo cambiar de plan en cualquier momento?", a: "Sí, puedes actualizar o cambiar tu plan al inicio de cada mes. Si deseas agregar más clases o pasar al programa académico, simplemente contáctanos y lo gestionamos." },
  { q: "¿En qué idioma son las clases?", a: "Todas las clases son en español, diseñadas especialmente para niños hispanohablantes de toda América Latina y España." },
  { q: "¿Cómo funciona el telescopio Celestron de regalo?", a: "Los estudiantes del Plan Académico Completo ($80/mes) y el Plan Homeschool ($100/mes) reciben un telescopio Celestron de viaje como regalo después de completar 2 meses consecutivos de clases." },
  { q: "¿Qué pasa si mi hijo no puede asistir a una clase?", a: "Entendemos que los niños tienen otras actividades. En el programa recreacional, simplemente elige otra clase esa semana. En el programa académico, te informaremos sobre las opciones de recuperación disponibles." },
  { q: "¿Cómo me inscribo?", a: "Al elegir un paquete y realizar el pago, te llegará un correo con el acceso a la plataforma de estudio y los horarios disponibles. Puedes iniciar ese mismo día si hay horarios abiertos." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ position: "relative", zIndex: 2, padding: "100px 0" }}
    >
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <div style={{ marginBottom: "14px" }}>
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#FFD23F",
              background: "rgba(255,210,63,0.1)",
              border: "1px solid rgba(255,210,63,0.25)",
              borderRadius: "20px",
              padding: "4px 14px",
            }}>
              ❓ Preguntas Frecuentes
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 400,
            color: "#FFF8F0",
            lineHeight: 1.2,
          }}>
            Resolvemos tus{" "}
            <span style={{ color: "#FB923C" }}>dudas</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="glass-card-warm"
              style={{
                overflow: "hidden",
                border: open === i ? "1px solid rgba(251,146,60,0.35)" : undefined,
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "18px 20px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#FFF8F0",
                  lineHeight: 1.4,
                }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: "#FB923C",
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {open === i && (
                <div style={{ padding: "0 20px 18px" }}>
                  <div style={{
                    borderTop: "1px solid rgba(251,146,60,0.12)",
                    paddingTop: "14px",
                  }}>
                    <p style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "rgba(255,248,240,0.65)",
                      lineHeight: 1.75,
                    }}>
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
