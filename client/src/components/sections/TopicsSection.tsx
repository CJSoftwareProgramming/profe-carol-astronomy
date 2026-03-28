/* TopicsSection — Sophia Academy Brand
   Font: Fredoka One (titles) + Nunito (body)
   Colors: #FB923C solar, #FFD23F stellar, transparent bg */

import { motion } from "framer-motion";

const topics = [
  { name: "Agujeros Negros", emoji: "🕳️", color: "#60A5FA" },
  { name: "Sistema Solar", emoji: "🪐", color: "#FB923C" },
  { name: "Estrellas de Neutrones", emoji: "⭐", color: "#FFD23F" },
  { name: "Galaxias", emoji: "🌌", color: "#A78BFA" },
  { name: "Exoplanetas", emoji: "🌍", color: "#34D399" },
  { name: "Auroras Boreales", emoji: "🌠", color: "#60A5FA" },
  { name: "Agujeros de Gusano", emoji: "🔮", color: "#F87171" },
  { name: "Ecuación de Drake", emoji: "👽", color: "#34D399" },
  { name: "Señal Wow!", emoji: "📡", color: "#A78BFA" },
  { name: "Robots Espaciales", emoji: "🤖", color: "#FB923C" },
  { name: "Supernovas", emoji: "💥", color: "#F87171" },
  { name: "Tabla Periódica Cósmica", emoji: "⚗️", color: "#FFD23F" },
  { name: "Cohetes Espaciales", emoji: "🚀", color: "#FB923C" },
  { name: "Vida Extraterrestre", emoji: "🛸", color: "#34D399" },
  { name: "Luz y Gravedad (Einstein)", emoji: "💡", color: "#FFD23F" },
  { name: "Aritmética Astronómica", emoji: "🔢", color: "#60A5FA" },
];

export default function TopicsSection() {
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
              color: "#60A5FA",
              background: "rgba(96,165,250,0.1)",
              border: "1px solid rgba(96,165,250,0.25)",
              borderRadius: "20px",
              padding: "4px 14px",
            }}>
              🔭 Temas de Clase
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
            Explora el universo{" "}
            <span style={{ color: "#FFD23F" }}>tema por tema</span>
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "16px",
            color: "rgba(255,248,240,0.55)",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Cada semana los estudiantes pueden elegir entre más de 5 temas diferentes.
            Los temas se renuevan constantemente.
          </p>
        </motion.div>

        {/* Topic chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "36px" }}>
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: `${topic.color}12`,
                border: `1px solid ${topic.color}28`,
                borderRadius: "50px",
                padding: "8px 16px",
                cursor: "default",
              }}
            >
              <span style={{ fontSize: "18px" }}>{topic.emoji}</span>
              <span style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "#FFF8F0",
              }}>
                {topic.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            fontFamily: "'Nunito', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            color: "#FFD23F",
          }}
        >
          ✨ Nuevos temas se agregan cada semana. ¡El universo nunca se acaba!
        </motion.p>
      </div>
    </section>
  );
}
