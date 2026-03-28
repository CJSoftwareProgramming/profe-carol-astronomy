/* AcademicFeaturedSection — Sophia Academy Brand
   Purpose: Make the Academic program highly visible as a featured section
   Font: Fredoka One (titles) + Nunito (body/labels)
   Colors: #FFD23F stellar yellow, #FB923C solar orange, subject colors
   Cards: glass-card with subject color borders */

import { motion } from "framer-motion";

const academicSubjects = [
  {
    emoji: "🔭",
    name: "Astrofísica",
    color: "#F87171",
    tagClass: "tag-astrofisica",
    description: "Luz, gravedad, relatividad y fenómenos extremos del universo.",
    detail: "6 Semanas · Clases + Laboratorio + Examen Final",
    stripeLink: "https://buy.stripe.com/5kQfZg5Ys2FS7Tf3ke4Rq0b",
    price: "$60",
  },
  {
    emoji: "⚗️",
    name: "Astroquímica",
    color: "#34D399",
    tagClass: "tag-astroquimica",
    description: "6 Semanas de Clases + Laboratorio + Examen Final (Composición química de estrellas, nebulosas y planetas)",
    detail: "6 Semanas · Clases + Laboratorio + Examen Final",
    stripeLink: "https://buy.stripe.com/8x2cN4euYdkwflH2ga4Rq02",
    price: "$80",
  },
  {
    emoji: "📐",
    name: "Astromatemáticas",
    color: "#60A5FA",
    tagClass: "tag-astromate",
    description: "6 Semanas de Clases + Laboratorio + Examen Final (Aritmética, geometría y física aplicadas al cosmos)",
    detail: "6 Semanas · Clases + Laboratorio + Examen Final",
    stripeLink: "https://buy.stripe.com/4gMdR8dqUdkw5L70824Rq0d",
    price: "$100",
  },
  {
    emoji: "🌌",
    name: "Astronomía",
    color: "#FB923C",
    tagClass: "tag-astronomia",
    description: "6 Semanas de Clases + Laboratorio + Examen Final (Observación, historia y exploración del universo)",
    detail: "6 Semanas · Clases + Laboratorio + Examen Final",
    stripeLink: "https://buy.stripe.com/5kQfZg5Ys2FS7Tf3ke4Rq0b",
    price: "$60",
  },
];

export default function AcademicFeaturedSection() {
  return (
    <section
      id="academico"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "100px 0",
      }}
    >
      {/* Warm glow behind section */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 50% 0%, rgba(251,146,60,0.06) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          {/* NEW badge */}
          <div style={{ marginBottom: "16px" }}>
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FFD23F",
              background: "rgba(255,210,63,0.12)",
              border: "1px solid rgba(255,210,63,0.35)",
              borderRadius: "20px",
              padding: "5px 16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}>
              ⭐ NUEVO — Programa Académico Certificado
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 400,
            color: "#FFF8F0",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}>
            Programa <span style={{ color: "#FFD23F" }}>Académico</span>{" "}
            <span style={{ color: "#FB923C" }}>Certificado</span>
          </h2>

          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "17px",
            fontWeight: 400,
            color: "rgba(255,248,240,0.60)",
            maxWidth: "600px",
            margin: "0 auto 24px",
            lineHeight: 1.7,
          }}>
            Módulos especializados de 6 semanas con laboratorio, examen final y
            certificado oficial. Aprende astrofísica real desde los 4 años.
          </p>

          {/* Certificate badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255,210,63,0.08)",
            border: "1px solid rgba(255,210,63,0.2)",
            borderRadius: "12px",
            padding: "10px 20px",
          }}>
            <span style={{ fontSize: "20px" }}>🎓</span>
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "rgba(255,248,240,0.75)",
            }}>
              Certificado oficial de participación al completar el programa académico
            </span>
          </div>
        </motion.div>

        {/* Subject cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          marginBottom: "48px",
        }}>
          {academicSubjects.map((subject, i) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "rgba(10,12,20,0.78)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: `1px solid ${subject.color}22`,
                borderRadius: "20px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 50px ${subject.color}20`,
              }}
            >
              {/* Icon + tag */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  width: "52px", height: "52px",
                  borderRadius: "14px",
                  background: `${subject.color}18`,
                  border: `1px solid ${subject.color}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "24px",
                }}>
                  {subject.emoji}
                </div>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: subject.color,
                  background: `${subject.color}15`,
                  border: `1px solid ${subject.color}30`,
                  borderRadius: "20px",
                  padding: "3px 10px",
                }}>
                  {subject.name}
                </span>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(255,248,240,0.60)",
                lineHeight: 1.6,
                flex: 1,
              }}>
                {subject.description}
              </p>

              {/* Detail */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 12px",
                background: `${subject.color}0A`,
                border: `1px solid ${subject.color}20`,
                borderRadius: "10px",
              }}>
                <span style={{ fontSize: "14px" }}>📅</span>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: subject.color,
                }}>
                  {subject.detail}
                </span>
              </div>


            </motion.div>
          ))}
        </div>

        {/* Pensum download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <a
            href="https://drive.google.com/file/d/1pTFvgswMWzCOYmfDGMJuIuJafvZsykHr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-solar"
            style={{ fontSize: "15px" }}
          >
            📄 Descargar Pensum Académico Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
