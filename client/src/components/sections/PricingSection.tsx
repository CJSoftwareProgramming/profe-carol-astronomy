/* PricingSection — Sophia Academy Brand
   Layout: Two clearly separated blocks — Recreational (top) + Academic (bottom, highlighted)
   Font: Fredoka One (prices) + Nunito (body/labels)
   Colors: #FFD23F stellar yellow, #FB923C solar orange
   Cards: glass-card with color borders, transparent bg
   Recreational: $28 (entry, 1 clase/semana) + $49 (popular, 2 clases + Sophia Math)
   Academic: $60 / $80 / $100 — platform + Sophia Math, NO telescopes */

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

const recreationalPlans = [
  {
    name: "Básico",
    price: 28,
    perClass: "≈ $7 / clase",
    period: "/ mes",
    features: [
      "1 clase recreacional por semana",
      "Acceso a todos los temas espaciales",
      "Horarios Jue–Dom",
      "Máx. 15 estudiantes por clase",
      "Clases 100% en vivo",
    ],
    featured: false,
    color: "#60A5FA",
    stripeUrl: "https://buy.stripe.com/5kQaEWbiM4O05L70824Rq03",
    entryBadge: true,
  },
  {
    name: "Explorador",
    price: 49,
    perClass: "≈ $6 / clase",
    period: "/ mes",
    features: [
      "2 clases recreacionales por semana",
      "Acceso a todos los temas espaciales",
      "Horarios Jue–Dom",
      "Máx. 15 estudiantes por clase",
      "Sophia Math — Método Ábaco Soroban",
      "Clases de Astromatemáticas incluidas",
    ],
    featured: true,
    badge: "Más Popular",
    color: "#FB923C",
    stripeUrl: "https://buy.stripe.com/8x2cN4euYdkwflH2ga4Rq02",
  },
];

const academicPlans = [
  {
    name: "Académico Esencial",
    price: 60,
    perClass: "Suscripción mensual · ~4 clases académicas",
    period: "/ mes",
    features: [
      "1 clase académica por semana",
      "2 clases recreacionales incluidas",
      "Acceso a la plataforma de Astrofísica",
      "Acceso a Sophia Math",

      "Tareas + quices + evaluación mensual",
    ],
    featured: false,
    color: "#FB923C",
    stripeUrl: "https://buy.stripe.com/5kQfZg5Ys2FS7Tf3ke4Rq0b",
  },
  {
    name: "Académico Completo",
    price: 80,
    perClass: "Suscripción mensual · ~8 clases académicas",
    period: "/ mes",
    features: [
      "2 clases académicas por semana",
      "Clases recreacionales ilimitadas",
      "Acceso completo a la plataforma de Astrofísica",
      "Acceso completo a Sophia Math",

      "Tareas + quices + evaluación mensual",
      "Certificado al completar 4 módulos",
    ],
    featured: true,
    badge: "Recomendado",
    color: "#FFD23F",
    stripeUrl: "https://buy.stripe.com/cNidR80E894g8XjcUO4Rq0c",
  },
  {
    name: "Homeschool",
    price: 100,
    perClass: "Suscripción mensual · ~12 clases académicas",
    period: "/ mes",
    features: [
      "3 clases académicas por semana",
      "Clases recreacionales ilimitadas",
      "Acceso completo a la plataforma de Astrofísica",
      "Acceso completo a Sophia Math",

      "Certificado al completar 4 módulos",
    ],
    featured: false,
    color: "#F87171",
    badge: "Homeschool",
    stripeUrl: "https://buy.stripe.com/4gMdR8dqUdkw5L70824Rq0d",
  },
];

interface PlanItem {
  name: string;
  price: number;
  perClass: string;
  period: string;
  features: string[];
  featured: boolean;
  color: string;
  stripeUrl: string;
  badge?: string;
  bonus?: string;
  entryBadge?: boolean;
}

function PlanCard({ plan, i }: { plan: PlanItem, i: number }) {
  return (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      style={{
        position: "relative",
        background: "rgba(10,12,20,0.82)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${plan.featured ? plan.color + "55" : plan.color + "22"}`,
        borderRadius: "20px",
        padding: "28px",
        transform: plan.featured ? "scale(1.03)" : "scale(1)",
        boxShadow: plan.featured ? `0 20px 60px ${plan.color}25` : "none",
      }}
    >
      {plan.featured && (
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "3px",
          background: `linear-gradient(90deg, ${plan.color}, ${plan.color}88)`,
          borderRadius: "20px 20px 0 0",
        }} />
      )}

      {/* Entry badge */}
      {plan.entryBadge && (
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          fontFamily: "'Nunito', sans-serif",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: plan.color,
          background: `${plan.color}15`,
          border: `1px solid ${plan.color}30`,
          borderRadius: "20px",
          padding: "3px 10px",
          marginBottom: "14px",
        }}>
          🚀 Entrada desde $28
        </div>
      )}

      {plan.badge && (
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          fontFamily: "'Nunito', sans-serif",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: plan.color,
          background: `${plan.color}15`,
          border: `1px solid ${plan.color}30`,
          borderRadius: "20px",
          padding: "3px 10px",
          marginBottom: "14px",
        }}>
          <Star size={10} />
          {plan.badge}
        </div>
      )}

      <h3 style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: "20px",
        color: "#FFF8F0",
        marginBottom: "16px",
        lineHeight: 1.2,
      }}>
        {plan.name}
      </h3>

      <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", marginBottom: "4px" }}>
        <span style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: "52px",
          color: "#FFF8F0",
          lineHeight: 1,
        }}>
          ${plan.price}
        </span>
        <span style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "13px",
          color: "rgba(255,248,240,0.45)",
          fontWeight: 600,
          marginBottom: "8px",
        }}>
          USD {plan.period}
        </span>
      </div>

      <div style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: "12px",
        fontWeight: 800,
        color: plan.color,
        background: `${plan.color}12`,
        border: `1px solid ${plan.color}25`,
        borderRadius: "8px",
        padding: "4px 10px",
        display: "inline-block",
        marginBottom: "20px",
      }}>
        {plan.perClass}
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
        {plan.features.map((f) => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <CheckCircle2 size={15} style={{ color: plan.color, flexShrink: 0, marginTop: "2px" }} />
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,248,240,0.70)",
              lineHeight: 1.5,
            }}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {plan.bonus && (
        <div style={{
          background: "rgba(255,210,63,0.07)",
          border: "1px solid rgba(255,210,63,0.20)",
          borderRadius: "10px",
          padding: "10px 12px",
          marginBottom: "20px",
          fontFamily: "'Nunito', sans-serif",
          fontSize: "12px",
          fontWeight: 700,
          color: "#FFD23F",
          lineHeight: 1.5,
        }}>
          {plan.bonus}
        </div>
      )}

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
          padding: "14px",
          borderRadius: "12px",
          background: plan.featured
            ? `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)`
            : "transparent",
          border: plan.featured ? "none" : `1px solid ${plan.color}55`,
          color: plan.featured ? "#020408" : plan.color,
          fontFamily: "'Nunito', sans-serif",
          fontSize: "15px",
          fontWeight: 800,
          textDecoration: "none",
          cursor: "pointer",
          transition: "all 0.25s ease",
          boxShadow: plan.featured ? `0 8px 30px ${plan.color}35` : "none",
        }}
      >
        🚀 Suscribirme ahora
      </a>
      <p style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: "11px",
        fontWeight: 600,
        color: "rgba(255,248,240,0.30)",
        textAlign: "center",
        marginTop: "8px",
      }}>
        Pago seguro con Stripe 🔒
      </p>
    </motion.div>
  );
}

export default function PricingSection() {
  return (
    <section
      id="precios"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "100px 0",
      }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(255,210,63,0.03) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>

        {/* ── BLOQUE 1: RECREACIONAL ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <div style={{ marginBottom: "12px" }}>
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#FB923C",
              background: "rgba(251,146,60,0.10)",
              border: "1px solid rgba(251,146,60,0.25)",
              borderRadius: "20px",
              padding: "4px 14px",
            }}>
              ⭐ Programa Recreacional
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 400,
            color: "#FFF8F0",
            lineHeight: 1.15,
            marginBottom: "10px",
          }}>
            Empieza a explorar el universo{" "}
            <span style={{ color: "#FB923C" }}>desde $28 / mes</span>
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "15px",
            color: "rgba(255,248,240,0.50)",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Clases en vivo, temas fascinantes, sin presión académica. Suscripción mensual, cancela cuando quieras.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginBottom: "80px",
          maxWidth: "760px",
          margin: "0 auto 80px",
        }}>
          {recreationalPlans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} i={i} />
          ))}
        </div>

        {/* ── DIVIDER ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,210,63,0.35), rgba(251,146,60,0.35), transparent)",
            marginBottom: "80px",
            borderRadius: "1px",
          }}
        />

        {/* ── BLOQUE 2: ACADÉMICO ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <div style={{ marginBottom: "12px" }}>
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#FFD23F",
              background: "rgba(255,210,63,0.12)",
              border: "1px solid rgba(255,210,63,0.35)",
              borderRadius: "20px",
              padding: "4px 14px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}>
              🔭 Programa Académico Certificado
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 400,
            color: "#FFF8F0",
            lineHeight: 1.15,
            marginBottom: "10px",
          }}>
            Astrofísica real,{" "}
            <span style={{ color: "#FFD23F" }}>con certificado</span>
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "15px",
            color: "rgba(255,248,240,0.50)",
            maxWidth: "520px",
            margin: "0 auto 20px",
            lineHeight: 1.6,
          }}>
            Suscripción mensual con currículo progresivo. Módulos de 2 meses con quices, actividades semanales y examen final.
          </p>
          {/* Academic info pill */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255,210,63,0.07)",
            border: "1px solid rgba(255,210,63,0.22)",
            borderRadius: "12px",
            padding: "10px 20px",
          }}>
            <span style={{ fontSize: "18px" }}>🎓</span>
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "rgba(255,248,240,0.70)",
            }}>
              Certificado al completar 4 módulos
            </span>
          </div>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {academicPlans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
