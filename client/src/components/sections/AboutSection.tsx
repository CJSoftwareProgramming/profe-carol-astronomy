/* AboutSection — Sophia Academy Brand
   Font: Fredoka One (titles) + Nunito (body/labels)
   Colors: #FFF8F0 text, #FFD23F highlight, #FB923C solar
   Cards: glass-card with subject color borders */

import { motion } from "framer-motion";

const KIDS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/kids-class-gowPdCrsioP3Lwiyn7JzEn.webp";

const pillars = [
  {
    emoji: "🌍",
    title: "Academia Internacional",
    color: "#FB923C",
    desc: "Estudiantes de toda América Latina, España y EE.UU. aprenden juntos.",
  },
  {
    emoji: "🧪",
    title: "Ciencia Real",
    color: "#34D399",
    desc: "Astrofísica, Astroquímica y Astromatemáticas con rigor científico.",
  },
  {
    emoji: "🎓",
    title: "Certificación",
    color: "#FFD23F",
    desc: "Certificado oficial de participación al completar el programa académico.",
  },
  {
    emoji: "📚",
    title: "Currículo Estructurado",
    color: "#60A5FA",
    desc: "Programa progresivo diseñado por una estudiante de Astrofísica en UK.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "100px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "64px",
            alignItems: "center",
          }}
          className="grid grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: "relative" }}
          >
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(251,146,60,0.15)",
              boxShadow: "0 0 60px rgba(251,146,60,0.08)",
            }}>
              <img
                src={KIDS_IMG}
                alt="Niños aprendiendo astronomía con la Profe Carol"
                style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(2,4,8,0.5) 0%, transparent 60%)",
              }} />
            </div>
            {/* Floating stat */}
            <div className="glass-card-warm" style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              padding: "16px 20px",
              minWidth: "140px",
            }}>
              <div style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: "32px",
                color: "#FFD23F",
                lineHeight: 1,
              }}>+200</div>
              <div style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "rgba(255,248,240,0.55)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}>Estudiantes activos</div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
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
                🌍 Sobre la Academia
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 400,
              color: "#FFF8F0",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}>
              Una academia espacial para{" "}
              <span style={{ color: "#FFD23F" }}>mentes curiosas</span>
            </h2>

            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "rgba(255,248,240,0.65)",
              lineHeight: 1.75,
              marginBottom: "16px",
            }}>
              En Sophia Academy creemos que los niños pueden entender mucho más de lo que los adultos imaginan.
              Somos una de las primeras academias en enseñar astronomía avanzada a niños pequeños y la primera
              en enseñar astrofísica a pequeñitos desde los 4 años, combinando experimentos, simulaciones,
              juegos y exploración científica para hacer de la ciencia una experiencia emocionante desde el primer día.
            </p>

            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              color: "#FB923C",
              lineHeight: 1.6,
              marginBottom: "32px",
              fontStyle: "italic",
            }}>
              "Los niños no solo aprenden ciencia: piensan como científicos, exploran como astrónomos."
            </p>

            {/* Pillars grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{
                    background: "rgba(10,12,20,0.78)",
                    backdropFilter: "blur(20px)",
                    border: `1px solid ${p.color}22`,
                    borderRadius: "14px",
                    padding: "16px",
                  }}
                >
                  <div style={{
                    width: "38px", height: "38px",
                    borderRadius: "10px",
                    background: `${p.color}18`,
                    border: `1px solid ${p.color}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}>
                    {p.emoji}
                  </div>
                  <h4 style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "14px",
                    color: p.color,
                    marginBottom: "6px",
                    lineHeight: 1.2,
                  }}>
                    {p.title}
                  </h4>
                  <p style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,248,240,0.55)",
                    lineHeight: 1.5,
                  }}>
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
