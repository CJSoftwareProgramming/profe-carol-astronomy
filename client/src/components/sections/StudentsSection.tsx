/* StudentsSection — Sophia Academy Brand
   Font: Fredoka One (titles) + Nunito (body)
   Colors: #FB923C solar, #FFD23F stellar, transparent bg */

import { motion } from "framer-motion";

const achievements = [
  { name: "Sofía M.", age: 5, country: "🇨🇴 Colombia", achievement: "Presentó su proyecto sobre agujeros negros en la feria de ciencias de su colegio y obtuvo el primer lugar.", badge: "🏆 Científica Destacada", color: "#FFD23F" },
  { name: "Mateo R.", age: 6, country: "🇲🇽 México", achievement: "Ha completado más de 20 clases en la academia, actualmente enseña astronomía básica a sus compañeros de escuela y tiene su propio canal científico.", badge: "🎓 Prodigio Astronómico", color: "#60A5FA" },
  { name: "Diego C.", age: 4, country: "🇦🇷 Argentina", achievement: "Fue uno de los estudiantes más pequeños en presentar una exposición sobre el sistema solar y los tipos de estrellas en una feria de ciencias, la cual fue destacada en las noticias de su ciudad.", badge: "⭐ Prodigio Científico", color: "#FB923C" },
  { name: "Lucas P.", age: 8, country: "🇪🇸 España", achievement: "Diseñó y presentó su propio modelo de robot espacial como proyecto escolar, recibiendo un reconocimiento por su creatividad e iniciativa en el campo de la ingeniería espacial.", badge: "🚀 Explorador Creativo", color: "#34D399" },
];

const stats = [
  { value: "+200", label: "Estudiantes activos", emoji: "👨‍🚀" },
  { value: "+10", label: "Países representados", emoji: "🌍" },
  { value: "+50", label: "Temas de clase", emoji: "🔭" },
  { value: "100%", label: "Clases en vivo", emoji: "⭐" },
];

export default function StudentsSection() {
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
              🏆 Logros de Estudiantes
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
            Nuestros exploradores{" "}
            <span style={{ color: "#FB923C" }}>del universo</span>
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "16px",
            color: "rgba(255,248,240,0.55)",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Cada semana, nuestros estudiantes logran cosas increíbles dentro y fuera del aula.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "grid", gap: "16px", marginBottom: "48px" }}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div key={i} className="glass-card-warm" style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{s.emoji}</div>
              <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "32px", color: "#FB923C", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,248,240,0.50)", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievement cards */}
        <div
          style={{ display: "grid", gap: "20px" }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {achievements.map((a, i) => (
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
                background: `${a.color}18`,
                border: `1px solid ${a.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Fredoka One', cursive",
                fontSize: "22px",
                color: a.color,
                flexShrink: 0,
              }}>
                {a.name.charAt(0)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: "17px", color: "#FFF8F0" }}>{a.name}</span>
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", fontWeight: 700, color: "rgba(255,248,240,0.45)" }}>{a.age} años</span>
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", fontWeight: 700, color: "rgba(255,248,240,0.45)" }}>{a.country}</span>
                </div>
                <span style={{
                  display: "inline-block",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: a.color,
                  background: `${a.color}15`,
                  border: `1px solid ${a.color}30`,
                  borderRadius: "20px",
                  padding: "2px 10px",
                  marginBottom: "10px",
                }}>
                  {a.badge}
                </span>
                <p style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(255,248,240,0.65)",
                  lineHeight: 1.65,
                }}>
                  {a.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
