/* TeacherSection — Sophia Academy Brand
   Font: Fredoka One (titles) + Nunito (body/labels)
   Colors: #FB923C solar, #FFD23F stellar, transparent bg */

import { motion } from "framer-motion";

const TEACHER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/carol-real-photo_f469be8e.jpg";

const credentials = [
  { emoji: "🎓", text: "Estudiante de Astrofísica en el Reino Unido", color: "#FFD23F" },
  { emoji: "🌍", text: "Profesora internacional con estudiantes en +10 países", color: "#FB923C" },
  { emoji: "⭐", text: "+200 estudiantes activos en la academia", color: "#F87171" },
  { emoji: "📚", text: "Currículo diseñado con rigor científico y pedagógico", color: "#34D399" },
];

export default function TeacherSection() {
  return (
    <section
      id="profesora"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "100px 0",
      }}
    >
      <div className="container">
        <div
          style={{ display: "grid", gap: "64px", alignItems: "center" }}
          className="grid grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ marginBottom: "16px" }}>
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
                👩‍🚀 Sobre la Profesora
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "clamp(30px, 5vw, 50px)",
              fontWeight: 400,
              color: "#FFF8F0",
              lineHeight: 1.15,
              marginBottom: "24px",
            }}>
              Profe Carol{" "}
              <span style={{ color: "#FFD23F" }}>Jiménez</span>
            </h2>

            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "rgba(255,248,240,0.65)",
              lineHeight: 1.75,
              marginBottom: "16px",
            }}>
              Estudio Astrofísica en el Reino Unido y soy una apasionada por las ciencias y por enseñarlas.
              Me encanta trabajar con niños curiosos y demostrarles que el universo no es demasiado difícil para ellos.
              En mis clases exploramos temas fascinantes de astronomía y física —muchas veces considerados avanzados—
              de una forma clara, divertida y llena de curiosidad.
            </p>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "rgba(255,248,240,0.65)",
              lineHeight: 1.75,
              marginBottom: "32px",
            }}>
              Para mí lo más importante es escuchar a cada estudiante, responder sus preguntas y conversar con ellos
              mientras descubrimos juntos cómo funciona el universo. Mi mayor sueño es llegar a muchos chiquitines
              que sienten una fascinación especial por la ciencia y el espacio. Estoy segura de que mi academia es
              la cuna de muchos futuros astronautas y científicos.
            </p>

            {/* Credentials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: `${c.color}15`,
                    border: `1px solid ${c.color}35`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "16px",
                    flexShrink: 0,
                  }}>
                    {c.emoji}
                  </div>
                  <span style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(255,248,240,0.70)",
                  }}>
                    {c.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <a href="#precios" className="btn-solar">
              🚀 Comenzar Clases con Carol
            </a>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ position: "relative" }}
          >
            <div style={{
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(251,146,60,0.18)",
              boxShadow: "0 0 80px rgba(251,146,60,0.10)",
            }}>
              <img
                src={TEACHER_IMG}
                alt="Profe Carol — Astrofísica y educadora"
                style={{ width: "100%", height: "520px", objectFit: "cover", objectPosition: "top", display: "block" }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(2,4,8,0.45) 0%, transparent 60%)",
              }} />
            </div>

            {/* Quote card — top right */}
            <div className="glass-card-warm" style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              maxWidth: "260px",
              padding: "18px 20px",
            }}>
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(255,248,240,0.80)",
                fontStyle: "italic",
                lineHeight: 1.6,
                marginBottom: "10px",
              }}>
                "El universo es demasiado fascinante para esperar a ser adultos para descubrirlo."
              </p>
              <p style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: "13px",
                color: "#FB923C",
              }}>
                — Profe Carol Jiménez
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
