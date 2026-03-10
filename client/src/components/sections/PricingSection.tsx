/* PricingSection v2 — Deep Field Observatory design
   Per-class cost breakdown + new violet/cyan/gold palette + Space Grotesk */
import { motion } from "framer-motion";
import { CheckCircle2, Star, Rocket, Telescope, ExternalLink, Zap } from "lucide-react";
import { useState } from "react";

interface Plan {
  name: string;
  price: number;
  period: string;
  classesPerWeek: number;
  pricePerClass: string;
  perClassNote: string;
  features: string[];
  featured: boolean;
  badge?: string;
  accentColor: string;
  stripeUrl: string;
  bonus?: string;
}

const recreationalPlans: Plan[] = [
  {
    name: "Básico",
    price: 28,
    period: "al mes",
    classesPerWeek: 4,
    pricePerClass: "$7",
    perClassNote: "por clase",
    features: [
      "1 clase recreacional por semana",
      "Acceso a todos los temas",
      "Horarios Jue–Dom",
      "Máx. 15 estudiantes",
    ],
    featured: false,
    accentColor: "#00D4FF",
    stripeUrl: "https://buy.stripe.com/5kQaEWbiM4O05L70824Rq03",
  },
  {
    name: "Explorador",
    price: 49,
    period: "al mes",
    classesPerWeek: 8,
    pricePerClass: "$6",
    perClassNote: "por clase",
    features: [
      "2 clases recreacionales por semana",
      "Acceso a todos los temas",
      "Horarios Jue–Dom",
      "Máx. 15 estudiantes",
    ],
    featured: true,
    badge: "Más Popular",
    accentColor: "#7B2FBE",
    stripeUrl: "https://buy.stripe.com/8x2cN4euYdkwflH2ga4Rq02",
  },
  {
    name: "Avanzado",
    price: 59,
    period: "al mes",
    classesPerWeek: 12,
    pricePerClass: "$5",
    perClassNote: "por clase",
    features: [
      "3 clases recreacionales por semana",
      "Acceso a todos los temas",
      "Horarios Jue–Dom",
      "Máx. 15 estudiantes",
    ],
    featured: false,
    accentColor: "#FF6B9D",
    stripeUrl: "https://buy.stripe.com/aFa6oG3QkeoA8XjaMG4Rq04",
  },
];

const academicPlans: Plan[] = [
  {
    name: "Esencial",
    price: 60,
    period: "al mes",
    classesPerWeek: 4,
    pricePerClass: "$5",
    perClassNote: "clase académica",
    features: [
      "1 clase académica semanal",
      "2 clases recreacionales",
      "50% descuento en talleres",
      "1 laboratorio al mes",
    ],
    featured: false,
    accentColor: "#FFD166",
    stripeUrl: "https://buy.stripe.com/5kQfZg5Ys2FS7Tf3ke4Rq0b",
  },
  {
    name: "Completo",
    price: 80,
    period: "al mes",
    classesPerWeek: 8,
    pricePerClass: "$10",
    perClassNote: "clase académica + recreacionales gratis",
    features: [
      "2 clases académicas semanales",
      "Clases recreacionales ilimitadas",
      "1 taller gratis al mes",
      "2 laboratorios al mes",
    ],
    featured: true,
    badge: "Recomendado",
    accentColor: "#FFD166",
    bonus: "🔭 Telescopio Celestron tras 2 meses",
    stripeUrl: "https://buy.stripe.com/cNidR80E894g8XjcUO4Rq0c",
  },
  {
    name: "Homeschool",
    price: 100,
    period: "al mes",
    classesPerWeek: 12,
    pricePerClass: "$8",
    perClassNote: "clase académica + todo incluido",
    features: [
      "3 clases académicas semanales",
      "Clases recreacionales ilimitadas",
      "Talleres ilimitados",
      "3 laboratorios al mes",
      "1 clase personalizada mensual",
      "Reportes académicos mensuales",
    ],
    featured: false,
    badge: "Homeschool",
    accentColor: "#00FFB3",
    bonus: "🔭 Telescopio Celestron tras 2 meses",
    stripeUrl: "https://buy.stripe.com/4gMdR8dqUdkw5L70824Rq0d",
  },
];

export default function PricingSection() {
  const [tab, setTab] = useState<"recreational" | "academic">("recreational");
  const plans = tab === "recreational" ? recreationalPlans : academicPlans;

  return (
    <section id="precios" className="relative py-28 overflow-hidden" style={{ background: "var(--cosmos-deep)" }}>
      {/* Background nebula glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(123,47,190,0.12) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-4 justify-center">Paquetes de Clases</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "white", lineHeight: 1.1 }}>
            Elige tu plan y{" "}
            <span className="cosmic-shimmer">comienza tu misión</span>
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex rounded-full p-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(123,47,190,0.2)" }}>
            <button
              onClick={() => setTab("recreational")}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                background: tab === "recreational" ? "linear-gradient(135deg, #7B2FBE, #9B4DDE)" : "transparent",
                color: tab === "recreational" ? "white" : "#7A6B9A",
                boxShadow: tab === "recreational" ? "0 0 20px rgba(123,47,190,0.4)" : "none",
              }}
            >
              <Star className="w-3.5 h-3.5" />
              Recreacional
            </button>
            <button
              onClick={() => setTab("academic")}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                background: tab === "academic" ? "linear-gradient(135deg, #FFD166, #FF9A3C)" : "transparent",
                color: tab === "academic" ? "#0A0514" : "#7A6B9A",
                boxShadow: tab === "academic" ? "0 0 20px rgba(255,209,102,0.4)" : "none",
              }}
            >
              <Telescope className="w-3.5 h-3.5" />
              Académico
            </button>
          </div>
        </motion.div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl p-7 flex flex-col"
              style={{
                background: plan.featured
                  ? `linear-gradient(145deg, rgba(${plan.accentColor === "#7B2FBE" ? "123,47,190" : "255,209,102"},0.18) 0%, rgba(10,5,20,0.9) 100%)`
                  : "linear-gradient(145deg, rgba(22,13,38,0.9) 0%, rgba(10,5,20,0.8) 100%)",
                border: plan.featured
                  ? `1px solid ${plan.accentColor}55`
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: plan.featured
                  ? `0 0 60px ${plan.accentColor}20, 0 20px 40px rgba(0,0,0,0.4)`
                  : "0 10px 30px rgba(0,0,0,0.3)",
                transform: plan.featured ? "scale(1.04)" : "scale(1)",
              }}
            >
              {/* Top accent bar */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl" style={{ background: `linear-gradient(90deg, transparent, ${plan.accentColor}, transparent)` }} />
              )}

              {/* Badge */}
              {plan.badge && (
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs mb-5 self-start"
                  style={{ background: `${plan.accentColor}20`, color: plan.accentColor, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, border: `1px solid ${plan.accentColor}40` }}
                >
                  <Zap className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "white", marginBottom: "0.5rem" }}>
                {tab === "recreational" ? "Recreacional " : "Académico "}{plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "3.5rem", color: "white", lineHeight: 1 }}>
                  ${plan.price}
                </span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", color: "#7A6B9A", marginBottom: "0.4rem" }}>
                  USD {plan.period}
                </span>
              </div>

              {/* Per-class cost badge — KEY FEATURE */}
              <div className="per-class-badge mb-5 self-start">
                ≈ {plan.pricePerClass} USD {plan.perClassNote}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.accentColor }} />
                    <span style={{ fontFamily: "'Lora', serif", fontSize: "0.9rem", color: "#C4B5E0", lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Bonus */}
              {plan.bonus && (
                <div
                  className="rounded-xl p-3 mb-5 text-sm"
                  style={{ background: `${plan.accentColor}10`, borderLeft: `3px solid ${plan.accentColor}`, color: plan.accentColor, fontFamily: "'Lora', serif" }}
                >
                  {plan.bonus}
                </div>
              )}

              {/* Stripe CTA */}
              <a
                href={plan.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl text-sm text-center flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  background: plan.featured
                    ? `linear-gradient(135deg, ${plan.accentColor}, ${plan.accentColor}BB)`
                    : "transparent",
                  border: plan.featured ? "none" : `1px solid ${plan.accentColor}40`,
                  color: plan.featured
                    ? (plan.accentColor === "#FFD166" ? "#0A0514" : "white")
                    : plan.accentColor,
                  boxShadow: plan.featured ? `0 0 25px ${plan.accentColor}35` : "none",
                }}
              >
                <Rocket className="w-4 h-4" />
                Inscribir a mi hijo
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
              <p className="text-center mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", color: "#4A3A6A" }}>
                Pago seguro con Stripe 🔒
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
