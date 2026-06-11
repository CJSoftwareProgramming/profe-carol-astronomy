/* AcademicFeaturedSection — Sophia Academy Brand
   Purpose: Showcase the 3 NEW active academic modules starting this week
   Font: Fredoka One (titles) + Nunito (body/labels)
   Colors: #FFD23F stellar yellow, #FB923C solar orange, subject colors
   Cards: glass-card with subject color borders
   Modules: Astrofísica Cuántica (Jueves), Astrobiología (Viernes), Ingeniería Espacial (Sáb-Dom)
   Each module: 2 months, quices, actividades semanales, examen final */

import { motion } from "framer-motion";

const newModules = [
  {
    emoji: "⚛️",
    name: "Astrofísica Cuántica",
    color: "#A78BFA",
    schedule: "Jueves",
    scheduleIcon: "📅",
    description: "Explora los fundamentos de la mecánica cuántica aplicados al universo: superposición, entrelazamiento, agujeros negros cuánticos y la naturaleza de la materia oscura.",
    topics: ["Mecánica cuántica básica", "Dualidad onda-partícula", "Agujeros negros y singularidades", "Materia y energía oscura"],
    detail: "2 meses · Quices + Actividades Semanales + Examen Final",
    new: true,
  },
  {
    emoji: "🧬",
    name: "Astrobiología",
    color: "#34D399",
    schedule: "Viernes",
    scheduleIcon: "📅",
    description: "Investiga la posibilidad de vida en el universo: exoplanetas habitables, extremófilos, misiones de búsqueda de vida y los biosignatures que estudia la NASA.",
    topics: ["Zonas habitables", "Extremófilos en la Tierra", "Misiones Mars y Europa", "Biosignatures y exoplanetas"],
    detail: "2 meses · Quices + Actividades Semanales + Examen Final",
    new: true,
  },
  {
    emoji: "🛸",
    name: "Ingeniería Espacial",
    color: "#FB923C",
    schedule: "Sábados y Domingos",
    scheduleIcon: "📅",
    description: "Aprende cómo se diseñan y construyen cohetes, satélites y rovers. Desde la física del lanzamiento hasta la ingeniería de sistemas de soporte de vida en el espacio.",
    topics: ["Física de cohetes y propulsión", "Diseño de satélites", "Rovers y exploración robótica", "Sistemas de soporte de vida"],
    detail: "2 meses · Quices + Actividades Semanales + Examen Final",
    new: true,
  },
];

const previousModules = [
  {
    emoji: "🔭",
    name: "Astrofísica",
    color: "#F87171",
    description: "Luz, gravedad, relatividad y fenómenos extremos del universo.",
    detail: "2 meses · Clases + Laboratorio + Examen Final",
  },
  {
    emoji: "⚗️",
    name: "Astroquímica",
    color: "#60A5FA",
    description: "Composición química de estrellas, nebulosas y planetas.",
    detail: "2 meses · Clases + Laboratorio + Examen Final",
  },
  {
    emoji: "📐",
    name: "Astromatemáticas",
    color: "#FFD23F",
    description: "Aritmética, geometría y física aplicadas al cosmos.",
    detail: "2 meses · Clases + Laboratorio + Examen Final",
  },
  {
    emoji: "🌌",
    name: "Astronomía",
    color: "#34D399",
    description: "Observación, historia y exploración del universo.",
    detail: "2 meses · Clases + Laboratorio + Examen Final",
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
        background: "radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.05) 0%, transparent 60%)",
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
              🆕 NUEVOS MÓDULOS — Arrancamos Esta Semana
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
            maxWidth: "620px",
            margin: "0 auto 24px",
            lineHeight: 1.7,
          }}>
            Módulos especializados de <strong style={{ color: "#FFF8F0" }}>2 meses</strong> con quices, actividades semanales, laboratorios y examen final certificado. Acceso a la plataforma de Astrofísica y Sophia Math incluidos.
          </p>

          {/* Included platforms */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            marginBottom: "16px",
          }}>
            {[
              { icon: "🌌", label: "Plataforma de Astrofísica" },
              { icon: "🧮", label: "Sophia Math — Ábaco Soroban" },
              { icon: "🎓", label: "Certificado oficial" },
            ].map((item) => (
              <div key={item.label} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,210,63,0.07)",
                border: "1px solid rgba(255,210,63,0.20)",
                borderRadius: "50px",
                padding: "8px 16px",
              }}>
                <span style={{ fontSize: "16px" }}>{item.icon}</span>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(255,248,240,0.75)",
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* NEW active module cards */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}>
            <div style={{
              height: "1px",
              flex: 1,
              background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.3))",
            }} />
            <span style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "16px",
              color: "#A78BFA",
              whiteSpace: "nowrap",
            }}>
              🆕 Módulos Activos Ahora
            </span>
            <div style={{
              height: "1px",
              flex: 1,
              background: "linear-gradient(90deg, rgba(167,139,250,0.3), transparent)",
            }} />
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          marginBottom: "60px",
        }}>
          {newModules.map((module, i) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "rgba(10,12,20,0.82)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: `1px solid ${module.color}35`,
                borderRadius: "20px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 50px ${module.color}20`,
              }}
            >
              {/* Top accent */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "3px",
                background: `linear-gradient(90deg, ${module.color}, transparent)`,
              }} />

              {/* NEW badge */}
              <div style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: `${module.color}20`,
                border: `1px solid ${module.color}50`,
                borderRadius: "20px",
                padding: "2px 10px",
              }}>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "10px",
                  fontWeight: 800,
                  color: module.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}>
                  NUEVO
                </span>
              </div>

              {/* Icon + name */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "56px", height: "56px",
                  borderRadius: "16px",
                  background: `${module.color}18`,
                  border: `1px solid ${module.color}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "26px",
                  flexShrink: 0,
                }}>
                  {module.emoji}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "20px",
                    color: "#FFF8F0",
                    lineHeight: 1.2,
                    marginBottom: "4px",
                  }}>
                    {module.name}
                  </h3>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}>
                    <span style={{ fontSize: "12px" }}>{module.scheduleIcon}</span>
                    <span style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: module.color,
                    }}>
                      {module.schedule}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(255,248,240,0.60)",
                lineHeight: 1.65,
              }}>
                {module.description}
              </p>

              {/* Topics */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {module.topics.map((t) => (
                  <span key={t} style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "rgba(255,248,240,0.50)",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    padding: "3px 10px",
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Duration detail */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 12px",
                background: `${module.color}0A`,
                border: `1px solid ${module.color}20`,
                borderRadius: "10px",
              }}>
                <span style={{ fontSize: "14px" }}>🏆</span>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: module.color,
                }}>
                  {module.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Previous modules — compact grid */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}>
            <div style={{
              height: "1px",
              flex: 1,
              background: "linear-gradient(90deg, transparent, rgba(255,248,240,0.1))",
            }} />
            <span style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "15px",
              color: "rgba(255,248,240,0.40)",
              whiteSpace: "nowrap",
            }}>
              Módulos anteriores del programa
            </span>
            <div style={{
              height: "1px",
              flex: 1,
              background: "linear-gradient(90deg, rgba(255,248,240,0.1), transparent)",
            }} />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "14px",
          }}>
            {previousModules.map((subject, i) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${subject.color}18`,
                  borderRadius: "14px",
                  padding: "18px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{
                  width: "40px", height: "40px",
                  borderRadius: "10px",
                  background: `${subject.color}12`,
                  border: `1px solid ${subject.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                  flexShrink: 0,
                }}>
                  {subject.emoji}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "15px",
                    color: subject.color,
                    marginBottom: "4px",
                  }}>
                    {subject.name}
                  </div>
                  <div style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,248,240,0.40)",
                    lineHeight: 1.4,
                  }}>
                    {subject.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
