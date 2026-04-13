/* WorkshopsSection — Sophia Academy Brand
   Font: Fredoka One (titles) + Nunito (body)
   Colors: #FB923C solar, #FFD23F stellar, transparent bg
   Two ACTIVE workshops: Ábaco Soroban (Sábados 6pm) + Física Cuántica (Viernes 10pm UK) */

import { motion } from "framer-motion";

const activeWorkshops = [
  {
    title: "Taller del Ábaco Soroban Japonés",
    icon: "🧮",
    color: "#FB923C",
    badge: "CUPOS ABIERTOS",
    badgeColor: "#FB923C",
    price: "$37 USD",
    priceNote: "Duración: 2 meses",
    schedule: "Sábados · 6:00 PM",
    scheduleNote: "Hora Reino Unido",
    age: "6–12 años",
    stripeUrl: "https://buy.stripe.com/9B6eVcgD694gflH0824Rq0i",
    desc: "El Soroban es el ábaco japonés que entrena el cerebro para hacer cálculos mentales con velocidad extraordinaria. En este taller de 2 meses, los niños aprenden a sumar, restar, multiplicar y dividir usando el Soroban, desarrollando concentración, memoria visual y agilidad matemática — habilidades clave para la astronomía y las ciencias.",
    highlights: ["Cálculo mental ultrarrápido", "Concentración y memoria", "Base para matemáticas avanzadas", "Método japonés milenario"],
  },
  {
    title: "Taller de Física Cuántica",
    icon: "⚛️",
    color: "#FFD23F",
    badge: "CUPOS ABIERTOS",
    badgeColor: "#34D399",
    price: "$30 USD",
    priceNote: "5 clases",
    schedule: "Viernes · 10:00 PM",
    scheduleNote: "Hora Reino Unido",
    age: "9–12 años",
    stripeUrl: "https://buy.stripe.com/9B614mfz24O0a1n1c64Rq0g",
    desc: "Una introducción fascinante a los misterios del universo subatómico. Los niños descubren qué son las partículas cuánticas, cómo funciona la superposición, el entrelazamiento cuántico y por qué la física cuántica es la base de la tecnología del futuro. 5 clases diseñadas para mentes curiosas.",
    highlights: ["Superposición cuántica", "Entrelazamiento de partículas", "El gato de Schrödinger", "Tecnología del futuro"],
  },
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
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <div style={{ marginBottom: "16px" }}>
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FB923C",
              background: "rgba(251,146,60,0.1)",
              border: "1px solid rgba(251,146,60,0.25)",
              borderRadius: "20px",
              padding: "6px 16px",
            }}>
              🧪 Talleres Especializados
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(30px, 5vw, 50px)",
            fontWeight: 400,
            color: "#FFF8F0",
            lineHeight: 1.15,
            marginBottom: "14px",
          }}>
            Talleres{" "}
            <span style={{ color: "#FFD23F" }}>Activos</span>{" "}
            ahora mismo
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "rgba(255,248,240,0.65)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Talleres adicionales para profundizar en ciencia y tecnología. Cupos limitados — ¡inscríbete ahora!
          </p>
        </motion.div>

        {/* Workshop cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
          marginBottom: "48px",
        }}>
          {activeWorkshops.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(14px)",
                border: `1px solid ${w.color}30`,
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Top accent bar */}
              <div style={{
                height: "4px",
                background: `linear-gradient(90deg, ${w.color}, transparent)`,
              }} />

              <div style={{ padding: "28px" }}>
                {/* Badge + icon row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: "56px", height: "56px", borderRadius: "16px",
                      background: `${w.color}18`,
                      border: `1px solid ${w.color}35`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "28px",
                      flexShrink: 0,
                    }}>
                      {w.icon}
                    </div>
                    <div>
                      <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        background: `${w.badgeColor}18`,
                        border: `1px solid ${w.badgeColor}45`,
                        borderRadius: "20px",
                        padding: "3px 10px",
                        marginBottom: "4px",
                      }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: w.badgeColor, display: "inline-block", animation: "pulse 2s infinite" }} />
                        <span style={{
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: "10px",
                          fontWeight: 800,
                          color: w.badgeColor,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}>
                          {w.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "clamp(20px, 3vw, 26px)",
                  color: "#FFF8F0",
                  lineHeight: 1.2,
                  marginBottom: "12px",
                }}>
                  {w.title}
                </h3>

                {/* Schedule info */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "16px",
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: `${w.color}12`,
                    border: `1px solid ${w.color}30`,
                    borderRadius: "10px",
                    padding: "6px 14px",
                  }}>
                    <span style={{ fontSize: "14px" }}>📅</span>
                    <div>
                      <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "15px", color: w.color, lineHeight: 1 }}>
                        {w.schedule}
                      </div>
                      <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", color: "rgba(255,248,240,0.45)", fontWeight: 600 }}>
                        {w.scheduleNote}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    padding: "6px 14px",
                  }}>
                    <span style={{ fontSize: "14px" }}>👦</span>
                    <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", color: "rgba(255,248,240,0.6)", fontWeight: 700 }}>
                      {w.age}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,248,240,0.60)",
                  lineHeight: 1.7,
                  marginBottom: "18px",
                }}>
                  {w.desc}
                </p>

                {/* Highlights */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "24px",
                }}>
                  {w.highlights.map((h, j) => (
                    <span key={j} style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "rgba(255,248,240,0.55)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "20px",
                      padding: "3px 10px",
                    }}>
                      ✓ {h}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "14px",
                }}>
                  <div>
                    <div style={{
                      fontFamily: "'Fredoka One', cursive",
                      fontSize: "28px",
                      color: w.color,
                      lineHeight: 1,
                    }}>
                      {w.price}
                    </div>
                    <div style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "12px",
                      color: "rgba(255,248,240,0.45)",
                      fontWeight: 600,
                    }}>
                      {w.priceNote}
                    </div>
                  </div>
                  <a
                    href={w.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: w.color,
                      color: w.color === "#FFD23F" ? "#020408" : "#020408",
                      fontFamily: "'Fredoka One', cursive",
                      fontSize: "16px",
                      padding: "12px 24px",
                      borderRadius: "50px",
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >
                    💳 Comprar ahora
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
            padding: "16px 22px",
          }}
        >
          <span style={{ fontSize: "20px" }}>📡</span>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 600, color: "rgba(255,248,240,0.65)", lineHeight: 1.5 }}>
            <span style={{ color: "#FFD23F" }}>¿Tienes dudas sobre los talleres?</span>{" "}
            Escríbenos por WhatsApp y te ayudamos a elegir el taller ideal para tu hijo.{" "}
            <a
              href="https://wa.me/447462994908?text=Hola%20Profe%20Carol%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20talleres%20%F0%9F%9A%80"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FB923C", fontWeight: 800, textDecoration: "none" }}
            >
              Contactar por WhatsApp →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
