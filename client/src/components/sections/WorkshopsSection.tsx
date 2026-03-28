/* WorkshopsSection — Sophia Academy Brand
   Font: Fredoka One (titles) + Nunito (body)
   Colors: #FB923C solar, #FFD23F stellar, transparent bg */

import { motion } from "framer-motion";

const workshops = [
  { title: "Cálculos Mentales con el Método Soroban Japonés", desc: "Aprende el sistema de ábaco japonés para realizar cálculos mentales increíblemente rápidos aplicados a problemas astronómicos.", icon: "🧮", duration: "5 clases", age: "6–12 años", color: "#60A5FA" },
  { title: "Taller de Robótica Espacial", desc: "Diseña y programa robots exploradores espaciales. Aprende los principios de ingeniería que usan los rovers de la NASA.", icon: "🤖", duration: "5 clases", age: "7–12 años", color: "#FB923C" },
  { title: "Uso de Simuladores Espaciales", desc: "Navega el universo usando simuladores profesionales de astronomía. Explora galaxias, sistemas estelares y misiones espaciales.", icon: "🚀", duration: "5 clases", age: "5–12 años", color: "#34D399" },
  { title: "Iniciación a la Física Cuántica", desc: "Una introducción fascinante a los misterios de la física cuántica: partículas, ondas y los secretos del universo subatómico.", icon: "⚛️", duration: "5 clases", age: "9–12 años", color: "#FFD23F" },
];

export default function WorkshopsSection() {
  return (
    <section
      id="talleres"
      style={{ position: "relative", zIndex: 2, padding: "100px 0" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "40px" }}
        >
          <div>
            <div style={{ marginBottom: "12px" }}>
              <span style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FB923C",
                background: "rgba(251,146,60,0.1)",
                border: "1px solid rgba(251,146,60,0.25)",
                borderRadius: "20px",
                padding: "4px 14px",
              }}>
                🧪 Talleres Especializados
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "clamp(28px, 5vw, 46px)",
              fontWeight: 400,
              color: "#FFF8F0",
              lineHeight: 1.15,
            }}>
              Talleres mensuales de{" "}
              <span style={{ color: "#FFD23F" }}>ciencia</span>{" "}
              y <span style={{ color: "#FB923C" }}>tecnología</span>
            </h2>
          </div>
          <div className="glass-card-warm" style={{ padding: "16px 24px", textAlign: "center", flexShrink: 0 }}>
            <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "40px", color: "#FB923C", lineHeight: 1 }}>$30</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", color: "rgba(255,248,240,0.50)", fontWeight: 600 }}>USD por taller</div>
          </div>
        </motion.div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(255,210,63,0.07)",
            border: "1px solid rgba(255,210,63,0.20)",
            borderRadius: "14px",
            padding: "14px 20px",
            marginBottom: "36px",
          }}
        >
          <span style={{ fontSize: "18px" }}>📅</span>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 600, color: "rgba(255,248,240,0.65)", lineHeight: 1.5 }}>
            <span style={{ color: "#FFD23F" }}>Cada mes se agregan nuevos talleres.</span>{" "}
            Los talleres son actividades adicionales para profundizar en ciencia y tecnología.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{ display: "grid", gap: "20px", marginBottom: "40px" }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {workshops.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass-card-warm"
              style={{ padding: "24px", display: "flex", gap: "16px", alignItems: "flex-start" }}
            >
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: `${w.color}18`,
                border: `1px solid ${w.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px",
                flexShrink: 0,
              }}>
                {w.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "18px",
                  color: "#FFF8F0",
                  marginBottom: "8px",
                  lineHeight: 1.25,
                }}>
                  {w.title}
                </h3>
                <p style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(255,248,240,0.60)",
                  lineHeight: 1.65,
                  marginBottom: "12px",
                }}>
                  {w.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {[{ label: `⏱ ${w.duration}` }, { label: `👦 ${w.age}` }, { label: `💰 $30 USD`, highlight: true, color: w.color }].map((tag, j) => (
                    <span key={j} style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: tag.highlight ? tag.color : "rgba(255,248,240,0.50)",
                      background: tag.highlight ? `${tag.color}15` : "rgba(255,255,255,0.05)",
                      border: `1px solid ${tag.highlight ? `${tag.color}30` : "rgba(255,255,255,0.08)"}`,
                      borderRadius: "20px",
                      padding: "3px 10px",
                    }}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <a
            href="https://wa.me/447462994908?text=Hola%20Profe%20Carol%2C%20me%20interesa%20inscribirme%20en%20un%20taller%20mensual%20%F0%9F%9A%80"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solar"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            🧪 Inscribirme en un Taller — $30 USD
          </a>
          <p style={{
            marginTop: "10px",
            fontFamily: "'Nunito', sans-serif",
            fontSize: "12px",
            color: "rgba(255,248,240,0.30)",
            fontWeight: 600,
          }}>
            Te contactaremos por WhatsApp para coordinar el pago
          </p>
        </motion.div>
      </div>
    </section>
  );
}
