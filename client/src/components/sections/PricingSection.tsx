/* PricingSection — Sophia Academy Brand
   Font: Fredoka One (prices) + Nunito (body/labels)
   Colors: #FFD23F stellar yellow, #FB923C solar orange
   Cards: glass-card with color borders, transparent bg */

import { motion } from "framer-motion";
import { CheckCircle2, Star, Telescope, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Plan {
  name: string;
  price: number;
  perClass: string;
  period: string;
  features: string[];
  featured: boolean;
  badge?: string;
  color: string;
  bonus?: string;
  stripeUrl: string;
}

const recreationalPlans: Plan[] = [
  {
    name: "Básico Recreacional",
    price: 28,
    perClass: "≈ $7 / clase",
    period: "al mes",
    features: ["1 clase recreacional por semana", "Acceso a todos los temas", "Horarios Jue–Dom", "Máx. 15 estudiantes"],
    featured: false,
    color: "#60A5FA",
    stripeUrl: "https://buy.stripe.com/5kQaEWbiM4O05L70824Rq03",
  },
  {
    name: "Explorador",
    price: 49,
    perClass: "≈ $6 / clase",
    period: "al mes",
    features: ["2 clases recreacionales por semana", "Acceso a todos los temas", "Horarios Jue–Dom", "Máx. 15 estudiantes"],
    featured: true,
    badge: "Más Popular",
    color: "#FB923C",
    stripeUrl: "https://buy.stripe.com/8x2cN4euYdkwflH2ga4Rq02",
  },
  {
    name: "Avanzado",
    price: 59,
    perClass: "≈ $5 / clase",
    period: "al mes",
    features: ["3 clases recreacionales por semana", "Acceso a todos los temas", "Horarios Jue–Dom", "Máx. 15 estudiantes"],
    featured: false,
    color: "#34D399",
    stripeUrl: "https://buy.stripe.com/aFa6oG3QkeoA8XjaMG4Rq04",
  },
];

const academicPlans: Plan[] = [
  {
    name: "Académico Esencial",
    price: 60,
    perClass: "≈ $5 / clase",
    period: "al mes",
    features: [
      "1 clase académica semanal",
      "2 clases recreacionales",
      "50% descuento en talleres",
      "1 laboratorio al mes",
    ],
    featured: false,
    color: "#FB923C",
    stripeUrl: "https://buy.stripe.com/5kQfZg5Ys2FS7Tf3ke4Rq0b",
  },
  {
    name: "Académico Completo",
    price: 80,
    perClass: "≈ $10 / clase académica",
    period: "al mes",
    features: [
      "2 clases académicas semanales",
      "Clases recreacionales ilimitadas",
      "1 taller gratis al mes",
      "2 laboratorios al mes",
    ],
    featured: true,
    badge: "Recomendado",
    color: "#FFD23F",
    bonus: "🔭 Telescopio Celestron de viaje tras 2 meses consecutivos",
    stripeUrl: "https://buy.stripe.com/cNidR80E894g8XjcUO4Rq0c",
  },
  {
    name: "Homeschool",
    price: 100,
    perClass: "≈ $10 / clase académica",
    period: "al mes",
    features: [
      "3 clases académicas semanales",
      "Clases recreacionales ilimitadas",
      "Talleres ilimitados",
      "3 laboratorios al mes",
      "1 clase personalizada mensual",
      "Reportes académicos mensuales",
    ],
    featured: false,
    color: "#F87171",
    badge: "Homeschool",
    bonus: "🔭 Telescopio Celestron de viaje tras 2 meses consecutivos",
    stripeUrl: "https://buy.stripe.com/4gMdR8dqUdkw5L70824Rq0d",
  },
];

export default function PricingSection() {
  const [tab, setTab] = useState<"recreational" | "academic">("recreational");
  const plans: Plan[] = tab === "recreational" ? recreationalPlans : academicPlans;

  return (
    <section
      id="precios"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "100px 0",
      }}
    >
      {/* Subtle glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(255,210,63,0.04) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
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
              💫 Paquetes de Clases
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(30px, 5vw, 50px)",
            fontWeight: 400,
            color: "#FFF8F0",
            lineHeight: 1.15,
            marginBottom: "12px",
          }}>
            Elige tu plan y{" "}
            <span style={{ color: "#FFD23F" }}>comienza</span>{" "}
            <span style={{ color: "#FB923C" }}>tu misión</span>
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "16px",
            color: "rgba(255,248,240,0.55)",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Pago mensual, sin contratos. Cancela cuando quieras.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}
        >
          <div style={{
            display: "inline-flex",
            background: "rgba(10,12,20,0.80)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "40px",
            padding: "4px",
            gap: "4px",
          }}>
            {[
              { key: "recreational", label: "⭐ Recreacional", activeColor: "#FB923C" },
              { key: "academic", label: "🔭 Académico", activeColor: "#FFD23F" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as "recreational" | "academic")}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: 800,
                  padding: "10px 24px",
                  borderRadius: "36px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  background: tab === t.key ? t.activeColor : "transparent",
                  color: tab === t.key ? "#020408" : "rgba(255,248,240,0.55)",
                  boxShadow: tab === t.key ? `0 0 20px ${t.activeColor}40` : "none",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plans grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          alignItems: "start",
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                position: "relative",
                background: "rgba(10,12,20,0.80)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: `1px solid ${plan.featured ? plan.color + "55" : plan.color + "22"}`,
                borderRadius: "20px",
                padding: "28px",
                transform: plan.featured ? "scale(1.03)" : "scale(1)",
                boxShadow: plan.featured ? `0 20px 60px ${plan.color}20` : "none",
              }}
            >
              {/* Featured top bar */}
              {plan.featured && (
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${plan.color}, ${plan.color}88)`,
                  borderRadius: "20px 20px 0 0",
                }} />
              )}

              {/* Badge */}
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

              {/* Price */}
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

              {/* Per class */}
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

              {/* Features */}
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

              {/* Bonus */}
              {plan.bonus && (
                <div style={{
                  background: `${plan.color}0A`,
                  borderLeft: `3px solid ${plan.color}`,
                  borderRadius: "0 10px 10px 0",
                  padding: "10px 14px",
                  marginBottom: "20px",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: plan.color,
                  lineHeight: 1.5,
                }}>
                  {plan.bonus}
                </div>
              )}

              {/* CTA */}
              <a
                href={plan.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  width: "100%",
                  padding: "13px",
                  borderRadius: "12px",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: 800,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  background: plan.featured
                    ? `linear-gradient(135deg, ${plan.color}, ${plan.color}CC)`
                    : "transparent",
                  border: plan.featured ? "none" : `1px solid ${plan.color}44`,
                  color: plan.featured ? "#020408" : plan.color,
                  boxShadow: plan.featured ? `0 8px 24px ${plan.color}30` : "none",
                }}
              >
                Pagar con Stripe
                <ExternalLink size={13} style={{ opacity: 0.7 }} />
              </a>
              <p style={{
                textAlign: "center",
                fontFamily: "'Nunito', sans-serif",
                fontSize: "10px",
                color: "rgba(255,248,240,0.30)",
                marginTop: "8px",
              }}>
                Pago seguro con Stripe 🔒
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
