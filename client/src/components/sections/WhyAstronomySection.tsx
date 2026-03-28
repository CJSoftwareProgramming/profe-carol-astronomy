/* WhyAstronomySection — Sophia Academy Brand
   Font: Fredoka One (titles) + Nunito (body)
   Colors: #FB923C solar, #FFD23F stellar, transparent bg */

import { motion } from "framer-motion";

const benefits = [
  { emoji: "🧠", title: "Pensamiento Crítico", desc: "La astronomía desarrolla la capacidad de analizar, cuestionar y resolver problemas complejos desde pequeños.", color: "#FB923C" },
  { emoji: "🔢", title: "Matemáticas en Contexto", desc: "Los niños aprenden aritmética, geometría y física usando distancias planetarias, velocidades y escalas reales.", color: "#FFD23F" },
  { emoji: "💡", title: "Curiosidad Científica", desc: "Preguntar '¿por qué?' es el primer paso del método científico. La astronomía hace que cada niño quiera saber más.", color: "#34D399" },
  { emoji: "🌍", title: "Perspectiva Global", desc: "Comprender el universo da a los niños una perspectiva única sobre la Tierra, la humanidad y su lugar en el cosmos.", color: "#60A5FA" },
  { emoji: "🔭", title: "Vocación STEM", desc: "Muchos científicos, ingenieros y astronautas comenzaron mirando el cielo de niños. Sembramos esa semilla.", color: "#F87171" },
  { emoji: "⚛️", title: "Ciencia Interdisciplinaria", desc: "La astronomía conecta física, química, matemáticas y biología en un solo campo fascinante y accesible.", color: "#A78BFA" },
];

export default function WhyAstronomySection() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 2,
        padding: "100px 0",
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
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
              🌟 Beneficios Educativos
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 400,
            color: "#FFF8F0",
            lineHeight: 1.2,
            marginBottom: "14px",
          }}>
            ¿Por qué aprender{" "}
            <span style={{ color: "#FB923C" }}>astronomía</span>
            <br />
            desde <span style={{ color: "#FFD23F" }}>niños</span>?
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "16px",
            color: "rgba(255,248,240,0.55)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            La astronomía no es solo mirar estrellas. Es la puerta de entrada a la ciencia,
            la tecnología y el pensamiento analítico que los niños necesitarán toda la vida.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{ display: "grid", gap: "20px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="glass-card-warm"
              style={{ padding: "28px" }}
            >
              <div style={{
                width: "48px", height: "48px", borderRadius: "14px",
                background: `${b.color}18`,
                border: `1px solid ${b.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px",
                marginBottom: "16px",
              }}>
                {b.emoji}
              </div>
              <h3 style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: "20px",
                color: "#FFF8F0",
                marginBottom: "10px",
                lineHeight: 1.2,
              }}>
                {b.title}
              </h3>
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(255,248,240,0.60)",
                lineHeight: 1.7,
              }}>
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
