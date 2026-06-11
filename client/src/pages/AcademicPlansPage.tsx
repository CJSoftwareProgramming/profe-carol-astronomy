/* AcademicPlansPage — /academico
   Sophia Academy Brand
   Font: Fredoka One (titles, prices) + Nunito (body)
   Colors: #FFD23F stellar yellow, #FB923C solar orange, #FFF8F0 light
   Purpose: Standalone purchase page for academic subscription plans only.
   Bottom CTA: redirect to /#precios for recreational plans */

import { motion } from "framer-motion";
import { CheckCircle2, Star, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

/* ─── Plan data ─── */
const academicPlans = [
  {
    name: "Académico Esencial",
    price: 60,
    subtitle: "~4 clases académicas / mes",
    period: "/ mes",
    color: "#FB923C",
    featured: false,
    features: [
      "1 clase académica por semana",
      "2 clases recreacionales incluidas",
      "Acceso a la plataforma de Astrofísica",
      "Acceso a Sophia Math",
      "50% descuento en talleres",
      "Tareas + quices + evaluación mensual",
    ],
    stripeUrl: "https://buy.stripe.com/5kQfZg5Ys2FS7Tf3ke4Rq0b",
  },
  {
    name: "Académico Completo",
    price: 80,
    subtitle: "~8 clases académicas / mes",
    period: "/ mes",
    color: "#FFD23F",
    featured: true,
    badge: "Recomendado",
    features: [
      "2 clases académicas por semana",
      "Clases recreacionales ilimitadas",
      "Acceso completo a la plataforma de Astrofísica",
      "Acceso completo a Sophia Math",
      "1 taller gratis al mes",
      "Tareas + quices + evaluación mensual",
      "Certificado al completar el módulo",
    ],
    stripeUrl: "https://buy.stripe.com/cNidR80E894g8XjcUO4Rq0c",
  },
  {
    name: "Homeschool",
    price: 100,
    subtitle: "~12 clases académicas / mes",
    period: "/ mes",
    color: "#F87171",
    featured: false,
    badge: "Homeschool",
    features: [
      "3 clases académicas por semana",
      "Clases recreacionales ilimitadas",
      "Acceso completo a la plataforma de Astrofísica",
      "Acceso completo a Sophia Math",
      "Talleres ilimitados",
      "1 clase personalizada mensual",
      "Reportes académicos mensuales",
      "Certificado oficial al completar el programa",
    ],
    stripeUrl: "https://buy.stripe.com/4gMdR8dqUdkw5L70824Rq0d",
  },
];

/* ─── Active modules ─── */
const activeModules = [
  { emoji: "⚛️", name: "Astrofísica Cuántica", day: "Jueves", color: "#A78BFA" },
  { emoji: "🧬", name: "Astrobiología", day: "Viernes", color: "#34D399" },
  { emoji: "🛸", name: "Ingeniería Espacial", day: "Sáb & Dom", color: "#FB923C" },
];

/* ─── Plan card component ─── */
interface PlanItem {
  name: string;
  price: number;
  subtitle: string;
  period: string;
  color: string;
  featured: boolean;
  badge?: string;
  features: string[];
  stripeUrl: string;
}

function PlanCard({ plan, i }: { plan: PlanItem; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: i * 0.12 }}
      style={{
        position: "relative",
        background: "rgba(10,12,20,0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: `1px solid ${plan.featured ? plan.color + "60" : plan.color + "25"}`,
        borderRadius: "22px",
        padding: "32px 28px",
        transform: plan.featured ? "scale(1.04)" : "scale(1)",
        boxShadow: plan.featured ? `0 24px 70px ${plan.color}28` : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top gradient bar */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: plan.featured ? "4px" : "2px",
        background: `linear-gradient(90deg, ${plan.color}, ${plan.color}55)`,
        borderRadius: "22px 22px 0 0",
      }} />

      {/* Badge */}
      {plan.badge && (
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          fontFamily: "'Nunito', sans-serif",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: plan.color,
          background: `${plan.color}15`,
          border: `1px solid ${plan.color}35`,
          borderRadius: "20px",
          padding: "3px 12px",
          marginBottom: "16px",
          width: "fit-content",
        }}>
          <Star size={10} />
          {plan.badge}
        </div>
      )}

      {/* Name */}
      <h3 style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: "22px",
        color: "#FFF8F0",
        marginBottom: "18px",
        lineHeight: 1.2,
      }}>
        {plan.name}
      </h3>

      {/* Price */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", marginBottom: "6px" }}>
        <span style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: "60px",
          color: "#FFF8F0",
          lineHeight: 1,
        }}>
          ${plan.price}
        </span>
        <span style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "14px",
          color: "rgba(255,248,240,0.40)",
          fontWeight: 600,
          marginBottom: "10px",
        }}>
          USD {plan.period}
        </span>
      </div>

      {/* Subtitle */}
      <div style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: "12px",
        fontWeight: 800,
        color: plan.color,
        background: `${plan.color}12`,
        border: `1px solid ${plan.color}28`,
        borderRadius: "8px",
        padding: "5px 12px",
        display: "inline-block",
        marginBottom: "24px",
      }}>
        {plan.subtitle}
      </div>

      {/* Features */}
      <ul style={{
        listStyle: "none",
        padding: 0,
        margin: "0 0 28px 0",
        display: "flex",
        flexDirection: "column",
        gap: "11px",
        flex: 1,
      }}>
        {plan.features.map((f) => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
            <CheckCircle2 size={15} style={{ color: plan.color, flexShrink: 0, marginTop: "2px" }} />
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,248,240,0.72)",
              lineHeight: 1.55,
            }}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={plan.stripeUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
          padding: "15px",
          borderRadius: "13px",
          background: plan.featured
            ? `linear-gradient(135deg, ${plan.color}, ${plan.color}bb)`
            : "transparent",
          border: plan.featured ? "none" : `1px solid ${plan.color}55`,
          color: plan.featured ? "#020408" : plan.color,
          fontFamily: "'Nunito', sans-serif",
          fontSize: "15px",
          fontWeight: 800,
          textDecoration: "none",
          cursor: "pointer",
          transition: "all 0.25s ease",
          boxShadow: plan.featured ? `0 8px 32px ${plan.color}38` : "none",
        }}
      >
        🚀 Suscribirme ahora
      </a>
      <p style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: "11px",
        fontWeight: 600,
        color: "rgba(255,248,240,0.28)",
        textAlign: "center",
        marginTop: "8px",
      }}>
        Pago seguro con Stripe 🔒
      </p>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function AcademicPlansPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #020408 0%, #060a14 40%, #020408 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "900px",
        height: "600px",
        background: "radial-gradient(ellipse, rgba(255,210,63,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Star dots */}
      {[...Array(30)].map((_, idx) => (
        <div key={idx} style={{
          position: "fixed",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: idx % 5 === 0 ? "2px" : "1px",
          height: idx % 5 === 0 ? "2px" : "1px",
          background: "rgba(255,248,240,0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }} />
      ))}

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── NAV ── */}
        <nav style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 32px",
          borderBottom: "1px solid rgba(255,248,240,0.06)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(2,4,8,0.75)",
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{
              width: "36px", height: "36px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 40% 35%, #FFD23F, #FB923C)",
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "20px",
              color: "#FFF8F0",
            }}>
              Sophia <span style={{ color: "#FFD23F" }}>Academy</span>
            </span>
          </Link>

          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              fontFamily: "'Nunito', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "rgba(255,248,240,0.55)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </nav>

        {/* ── HERO ── */}
        <div style={{ padding: "72px 24px 48px", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "20px" }}
          >
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "12px",
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
              🔭 Programa Académico Certificado
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "clamp(38px, 6vw, 72px)",
              fontWeight: 400,
              color: "#FFF8F0",
              lineHeight: 1.1,
              marginBottom: "18px",
            }}
          >
            Elige tu plan{" "}
            <span style={{ color: "#FFD23F" }}>Académico</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "18px",
              color: "rgba(255,248,240,0.60)",
              maxWidth: "560px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Módulos de <strong style={{ color: "#FFF8F0" }}>2 meses</strong> con quices, actividades semanales, laboratorios y examen final. Incluye acceso a la plataforma de Astrofísica y Sophia Math.
          </motion.p>

          {/* Active modules pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "rgba(255,248,240,0.40)",
              alignSelf: "center",
            }}>
              Módulos activos:
            </span>
            {activeModules.map((m) => (
              <div key={m.name} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: `${m.color}12`,
                border: `1px solid ${m.color}35`,
                borderRadius: "50px",
                padding: "6px 14px",
              }}>
                <span style={{ fontSize: "15px" }}>{m.emoji}</span>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: m.color,
                }}>
                  {m.name}
                </span>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "rgba(255,248,240,0.35)",
                }}>
                  {m.day}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── PLAN CARDS ── */}
        <div style={{ padding: "0 24px 80px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "28px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}>
            {academicPlans.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} i={i} />
            ))}
          </div>
        </div>

        {/* ── INCLUDED PLATFORMS ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            maxWidth: "800px",
            margin: "0 auto 80px",
            padding: "0 24px",
          }}
        >
          <div style={{
            background: "rgba(255,210,63,0.05)",
            border: "1px solid rgba(255,210,63,0.18)",
            borderRadius: "20px",
            padding: "32px",
            textAlign: "center",
          }}>
            <h3 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "22px",
              color: "#FFD23F",
              marginBottom: "20px",
            }}>
              Todos los planes incluyen
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}>
              {[
                { icon: "🌌", label: "Plataforma de Astrofísica", sub: "Acceso completo" },
                { icon: "🧮", label: "Sophia Math", sub: "Método Ábaco Soroban" },
                { icon: "📝", label: "Quices & Actividades", sub: "Cada semana" },
                { icon: "🏆", label: "Examen Final", sub: "Por módulo" },
                { icon: "🎓", label: "Certificado Oficial", sub: "Al completar el programa" },
                { icon: "👩‍🏫", label: "Profe Carol", sub: "Clases 100% en vivo" },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                  padding: "16px 12px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "14px",
                }}>
                  <span style={{ fontSize: "26px" }}>{item.icon}</span>
                  <span style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "13px",
                    fontWeight: 800,
                    color: "#FFF8F0",
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "rgba(255,248,240,0.40)",
                    textAlign: "center",
                  }}>
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── RECREATIONAL CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            maxWidth: "700px",
            margin: "0 auto 80px",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <div style={{
            background: "rgba(251,146,60,0.06)",
            border: "1px solid rgba(251,146,60,0.22)",
            borderRadius: "24px",
            padding: "40px 32px",
          }}>
            <div style={{ fontSize: "40px", marginBottom: "16px" }}>⭐</div>
            <h3 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "28px",
              color: "#FFF8F0",
              marginBottom: "12px",
              lineHeight: 1.2,
            }}>
              ¿Prefieres empezar con{" "}
              <span style={{ color: "#FB923C" }}>Recreacionales</span>?
            </h3>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "16px",
              color: "rgba(255,248,240,0.55)",
              maxWidth: "420px",
              margin: "0 auto 28px",
              lineHeight: 1.65,
            }}>
              Sin presión académica. Explora el universo con clases en vivo desde <strong style={{ color: "#FB923C" }}>$28 USD / mes</strong>. Cancela cuando quieras.
            </p>
            <Link
              href="/#precios"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #FB923C, #FB923Cbb)",
                borderRadius: "13px",
                padding: "14px 32px",
                fontFamily: "'Nunito', sans-serif",
                fontSize: "16px",
                fontWeight: 800,
                color: "#020408",
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(251,146,60,0.30)",
                transition: "all 0.25s ease",
              }}
            >
              🌟 Ver planes recreacionales
            </Link>
          </div>
        </motion.div>

        {/* ── FOOTER ── */}
        <div style={{
          borderTop: "1px solid rgba(255,248,240,0.06)",
          padding: "28px 24px",
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "13px",
            color: "rgba(255,248,240,0.25)",
          }}>
            © 2025 Sophia Academy · Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
