/* TestimonialsSection — Sophia Academy Brand
   Font: Fredoka One (titles) + Nunito (body)
   Colors: #FB923C solar, #FFD23F stellar, transparent bg */

import { motion } from "framer-motion";

const testimonials = [
  { name: "María González", role: "Mamá de Sofía, 5 años — Colombia", text: "Mi hija lleva 3 meses en la academia y su amor por la ciencia ha crecido enormemente. Ahora me explica qué son los agujeros negros y cómo se forman las estrellas. ¡Increíble!", initials: "MG", color: "#60A5FA" },
  { name: "Carlos Rodríguez", role: "Papá de Nicolas, 8 años — México", text: "La Profe Carol tiene un don especial para explicar conceptos complejos de forma que los niños los entiendan y disfruten. Nicolas no se pierde ninguna clase.", initials: "CR", color: "#FB923C" },
  { name: "Ana Martínez", role: "Mamá de Lucas, 7 años — Argentina", text: "Lo que más me gusta es que no es una clase aburrida. Es una aventura espacial cada semana. Lucas ya quiere ser astrónomo cuando sea grande.", initials: "AM", color: "#34D399" },
  { name: "Roberto Silva", role: "Papá de Valentina, 8 años — España", text: "El programa académico es excelente. Valentina ha mejorado en matemáticas y física gracias a la metodología de la Profe Carol. Totalmente recomendado.", initials: "RS", color: "#FFD23F" },
  { name: "Lucía Fernández", role: "Mamá de Diego, 6 años — Venezuela", text: "La calidad de las clases es comparable a academias internacionales. La Profe Carol es muy profesional y los niños la adoran. Vale mucho la pena.", initials: "LF", color: "#A78BFA" },
  { name: "Patricia Morales", role: "Mamá de Isabella, 6 años — Chile", text: "Empezamos con el programa recreacional y mi hija de 6 años ya conoce todos los planetas, sus características y hasta habla de exoplanetas. Nos encanta su pasión por la astronomía.", initials: "PM", color: "#F87171" },
];

export default function TestimonialsSection() {
  return (
    <section
      style={{ position: "relative", zIndex: 2, padding: "100px 0" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "52px" }}
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
              ⭐ Testimonios
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 400,
            color: "#FFF8F0",
            lineHeight: 1.2,
            marginBottom: "12px",
          }}>
            Lo que dicen{" "}
            <span style={{ color: "#FB923C" }}>los padres</span>
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "16px",
            color: "rgba(255,248,240,0.55)",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Familias de toda América Latina y España confían en la Sophia Academy para la educación científica de sus hijos.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{ display: "grid", gap: "20px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="glass-card-warm"
              style={{ padding: "24px", position: "relative" }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: "#FFD23F", fontSize: "14px" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(255,248,240,0.70)",
                lineHeight: 1.75,
                fontStyle: "italic",
                marginBottom: "20px",
              }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: `${t.color}20`,
                  border: `1px solid ${t.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "14px",
                  color: t.color,
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: "15px", color: "#FFF8F0" }}>{t.name}</p>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,248,240,0.45)" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
