/* HeroSection — Sophia Academy Brand
   Font: Fredoka One (h1, stats) + Nunito (body, labels)
   Colors: #FFF8F0 titles, #FFD23F highlight, #FB923C solar accent
   Background: transparent — SolarSystemBackground is global */

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "+44 7462 994908";
const WHATSAPP_LINK = "https://wa.me/447462994908";

const stats = [
  { value: "4–12", label: "años de edad" },
  { value: "+50", label: "temas espaciales" },
  { value: "15", label: "máx. por clase" },
  { value: "100%", label: "en vivo" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        zIndex: 2,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "88px",
        paddingBottom: "60px",
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "24px" }}
          >
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FB923C",
                background: "rgba(251,146,60,0.1)",
                border: "1px solid rgba(251,146,60,0.3)",
                borderRadius: "20px",
                padding: "5px 14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              🚀 Academia Internacional · Cupos Disponibles
            </span>
          </motion.div>

          {/* H1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: "clamp(44px, 7vw, 82px)",
                fontWeight: 400,
                color: "#FFF8F0",
                lineHeight: 1.1,
                marginBottom: "8px",
              }}
            >
              Astronomía y{" "}
              <span style={{ color: "#FFD23F" }}>Astrofísica</span>
            </h1>
            <h1
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: "clamp(44px, 7vw, 82px)",
                fontWeight: 400,
                color: "#FFF8F0",
                lineHeight: 1.1,
                marginBottom: "28px",
              }}
            >
              para <span style={{ color: "#FB923C" }}>Niños</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              color: "rgba(255,248,240,0.65)",
              lineHeight: 1.7,
              maxWidth: "580px",
              margin: "0 auto 32px",
            }}
          >
            Explora el universo con clases en vivo, experimentos y misiones
            espaciales. Una academia inspirada en la NASA para los científicos
            y astronautas del futuro.
          </motion.p>

          {/* WhatsApp number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            style={{ marginBottom: "32px" }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(37,211,102,0.10)",
                border: "1px solid rgba(37,211,102,0.28)",
                borderRadius: "40px",
                padding: "10px 22px",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: "20px" }}>📱</span>
              <span style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: "22px",
                color: "#25D366",
                letterSpacing: "0.02em",
              }}>
                {WHATSAPP_NUMBER}
              </span>
              <span style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "11px",
                fontWeight: 800,
                color: "rgba(37,211,102,0.75)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}>
                WhatsApp
              </span>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "52px", justifyContent: "center" }}
          >
            <a href="#precios" className="btn-solar">
              🌟 Ver Paquetes
            </a>
            <a href="#programas" className="btn-outline-solar">
              Explorar Programas
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
              maxWidth: "480px",
              margin: "0 auto",
            }}
            className="sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card-warm"
                style={{ padding: "16px 12px", textAlign: "center" }}
              >
                <div style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "28px",
                  color: "#FFD23F",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "rgba(255,248,240,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "100px",
        background: "linear-gradient(to bottom, transparent, rgba(2,4,8,0.5))",
        pointerEvents: "none",
      }} />
    </section>
  );
}
