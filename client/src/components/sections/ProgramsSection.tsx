/* ProgramsSection — Sophia Academy Brand
   Font: Fredoka One (titles) + Nunito (body)
   Colors: #FB923C solar, #FFD23F stellar, #60A5FA blue, transparent bg */

import { motion } from "framer-motion";

const recreationalTopics = [
  "Sistema Solar", "Agujeros Negros", "Estrellas de Neutrones", "Galaxias",
  "Exoplanetas", "Asteroides", "Telescopios", "Misiones Espaciales",
  "Astronautas", "Cohetes Espaciales", "Física del Espacio", "Exploración Espacial",
  "Vida en Otros Planetas", "Matemáticas del Universo",
];

const academicBlocks = [
  { name: "Astrofísica", desc: "6 Semanas + Laboratorio + Examen Final (Luz, gravedad, relatividad y fenómenos extremos del universo)", emoji: "⚡" },
  { name: "Astroquímica", desc: "6 Semanas + Laboratorio + Examen Final (Composición química de estrellas, nebulosas y planetas)", emoji: "⚗️" },
  { name: "Astromatemáticas", desc: "6 Semanas + Laboratorio + Examen Final (Aritmética, geometría y física aplicadas al cosmos)", emoji: "🔢" },
  { name: "Astronomía", desc: "6 Semanas + Laboratorio + Examen Final (Observación, historia y exploración del universo)", emoji: "🔭" },
];

const academicIncludes = ["Actividades semanales", "Tareas", "Quices", "Exposiciones", "Evaluación cualitativa", "Certificado final"];

export default function ProgramsSection() {
  return (
    <section
      id="programas"
      style={{ position: "relative", zIndex: 2, padding: "100px 0" }}
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
              color: "#FB923C",
              background: "rgba(251,146,60,0.1)",
              border: "1px solid rgba(251,146,60,0.25)",
              borderRadius: "20px",
              padding: "4px 14px",
            }}>
              🚀 Nuestros Programas
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
            Elige tu camino{" "}
            <span style={{ color: "#FFD23F" }}>al universo</span>
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "16px",
            color: "rgba(255,248,240,0.55)",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Dos programas diseñados para diferentes objetivos de aprendizaje.
          </p>
        </motion.div>

        {/* Two programs */}
        <div
          style={{ display: "grid", gap: "28px" }}
          className="grid grid-cols-1 lg:grid-cols-2"
        >
          {/* Recreational */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{
              background: "rgba(96,165,250,0.06)",
              border: "1px solid rgba(96,165,250,0.20)",
              borderRadius: "24px",
              padding: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #60A5FA, #A78BFA)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: "rgba(96,165,250,0.15)",
                border: "1px solid rgba(96,165,250,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px",
              }}>
                ✨
              </div>
              <div>
                <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "24px", color: "#FFF8F0", lineHeight: 1.1 }}>
                  Astronomía Recreacional
                </h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", fontWeight: 800, color: "#60A5FA", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Exploración libre
                </p>
              </div>
            </div>

            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: 400, color: "rgba(255,248,240,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
              Clases independientes donde los estudiantes eligen el tema que más les emociona cada semana.
              Sin secuencia estricta — pura exploración y diversión científica.
            </p>

            {/* Schedule */}
            <div style={{ background: "rgba(96,165,250,0.07)", border: "1px solid rgba(96,165,250,0.15)", borderRadius: "14px", padding: "16px", marginBottom: "20px" }}>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", fontWeight: 800, color: "#60A5FA", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
                📅 Horarios disponibles
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {["Jueves", "Viernes", "Sábado", "Domingo"].map(d => (
                  <span key={d} style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "rgba(255,248,240,0.65)",
                    background: "rgba(96,165,250,0.08)",
                    borderRadius: "10px",
                    padding: "6px 12px",
                    textAlign: "center",
                  }}>
                    {d}
                  </span>
                ))}
              </div>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", fontWeight: 700, color: "#60A5FA", marginTop: "8px" }}>12:00 PM – 7:00 PM</p>
            </div>

            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", fontWeight: 700, color: "#FB923C", marginBottom: "14px" }}>
              👥 Máximo 15 estudiantes por clase
            </p>

            {/* Topics */}
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", fontWeight: 800, color: "rgba(255,248,240,0.40)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
              +14 temas disponibles (se agregan nuevos cada semana)
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
              {recreationalTopics.map((t) => (
                <span key={t} style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "rgba(255,248,240,0.60)",
                  background: "rgba(96,165,250,0.08)",
                  border: "1px solid rgba(96,165,250,0.15)",
                  borderRadius: "20px",
                  padding: "3px 10px",
                }}>
                  {t}
                </span>
              ))}
            </div>

            <a href="#precios" className="btn-solar" style={{ display: "block", textAlign: "center" }}>
              Ver Paquetes Recreacionales
            </a>
          </motion.div>

          {/* Academic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{
              background: "rgba(251,146,60,0.06)",
              border: "1px solid rgba(251,146,60,0.22)",
              borderRadius: "24px",
              padding: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #FB923C, #FFD23F)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: "rgba(251,146,60,0.15)",
                border: "1px solid rgba(251,146,60,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px",
              }}>
                🎓
              </div>
              <div>
                <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "24px", color: "#FFF8F0", lineHeight: 1.1 }}>
                  Astronomía Académica
                </h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", fontWeight: 800, color: "#FB923C", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Currículo estructurado
                </p>
              </div>
            </div>

            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: 400, color: "rgba(255,248,240,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
              Programa progresivo con currículo estructurado para estudiantes que quieren profundizar
              en la astronomía con rigor académico. Incluye tareas, quices y certificado final.
            </p>

            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", fontWeight: 700, color: "#FB923C", marginBottom: "16px" }}>
              👥 Máximo 10 estudiantes por clase (cupos exclusivos)
            </p>

            {/* Academic blocks */}
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", fontWeight: 800, color: "rgba(255,248,240,0.40)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
              Bloques del Programa
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
              {academicBlocks.map((b, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "12px",
                  background: "rgba(251,146,60,0.07)",
                  border: "1px solid rgba(251,146,60,0.15)",
                  borderRadius: "12px",
                  padding: "12px",
                }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "10px",
                    background: "rgba(251,146,60,0.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "16px",
                    flexShrink: 0,
                  }}>
                    {b.emoji}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: "16px", color: "#FFF8F0" }}>{b.name}</p>
                    <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", fontWeight: 400, color: "rgba(255,248,240,0.50)", lineHeight: 1.5 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Includes */}
            <div style={{ background: "rgba(251,146,60,0.07)", border: "1px solid rgba(251,146,60,0.15)", borderRadius: "14px", padding: "16px", marginBottom: "20px" }}>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", fontWeight: 800, color: "#FB923C", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
                Todas las clases académicas incluyen:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                {academicIncludes.map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "#FB923C", fontSize: "12px" }}>✓</span>
                    <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,248,240,0.60)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1pTFvgswMWzCOYmfDGMJuIuJafvZsykHr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid rgba(251,146,60,0.35)",
                color: "#FB923C",
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                marginBottom: "14px",
                background: "transparent",
                transition: "background 0.2s",
              }}
            >
              📄 Descargar Pensum Académico
            </a>

            <a href="#precios" className="btn-solar" style={{ display: "block", textAlign: "center" }}>
              Ver Paquetes Académicos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
