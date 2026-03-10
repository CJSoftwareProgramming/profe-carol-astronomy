/* PricingSection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — pricing cards with featured plan highlighted */
import { motion } from "framer-motion";
import { CheckCircle2, Star, Rocket, Telescope } from "lucide-react";
import { useState } from "react";

interface Plan {
  name: string;
  price: number;
  period: string;
  features: string[];
  featured: boolean;
  badge?: string;
  color: string;
  bonus?: string;
}

const recreationalPlans: Plan[] = [
  {
    name: "Básico Recreacional",
    price: 28,
    period: "al mes",
    features: ["1 clase recreacional por semana", "Acceso a todos los temas", "Horarios Jue–Dom", "Máx. 15 estudiantes"],
    featured: true,
    badge: "Más Popular",
    color: "#4CC9F0",
  },
  {
    name: "Explorador Recreacional",
    price: 49,
    period: "al mes",
    features: ["2 clases recreacionales por semana", "Acceso a todos los temas", "Horarios Jue–Dom", "Máx. 15 estudiantes"],
    featured: false,
    color: "#4CC9F0",
  },
  {
    name: "Avanzado Recreacional",
    price: 59,
    period: "al mes",
    features: ["3 clases recreacionales por semana", "Acceso a todos los temas", "Horarios Jue–Dom", "Máx. 15 estudiantes"],
    featured: false,
    color: "#4CC9F0",
  },
];

const academicPlans: Plan[] = [
  {
    name: "Plan Académico Esencial",
    price: 60,
    period: "al mes",
    features: [
      "1 clase académica semanal",
      "2 clases recreacionales",
      "50% descuento en talleres",
      "1 laboratorio al mes",
    ],
    featured: false,
    color: "#F4A261",
  },
  {
    name: "Plan Académico Completo",
    price: 80,
    period: "al mes",
    features: [
      "2 clases académicas semanales",
      "Clases recreacionales ilimitadas",
      "1 taller gratis al mes",
      "2 laboratorios al mes",
    ],
    featured: true,
    badge: "Recomendado",
    color: "#F4A261",
    bonus: "🔭 Telescopio Celestron de viaje tras 2 meses consecutivos",
  },
  {
    name: "Plan Homeschool",
    price: 100,
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
    color: "#F4A261",
    badge: "Homeschool",
    bonus: "🔭 Telescopio Celestron de viaje tras 2 meses consecutivos",
  },
];

export default function PricingSection() {
  const [tab, setTab] = useState<"recreational" | "academic">("recreational");

  const plans: Plan[] = tab === "recreational" ? recreationalPlans : academicPlans;

  return (
    <section id="precios" className="relative bg-[#050D1E] py-24 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#4CC9F0]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Paquetes de Clases</p>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white leading-tight mb-5" style={{ fontWeight: 900 }}>
            Elige tu plan y
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CC9F0] to-[#F4A261]">
              comienza tu misión
            </span>
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-[#0A1628] border border-[#4CC9F0]/20 rounded-full p-1">
            <button
              onClick={() => setTab("recreational")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-['Outfit'] text-sm font-600 transition-all duration-300 ${
                tab === "recreational"
                  ? "bg-[#4CC9F0] text-[#03071E] shadow-[0_0_20px_rgba(76,201,240,0.4)]"
                  : "text-[#8BA3C7] hover:text-white"
              }`}
              style={{ fontWeight: 600 }}
            >
              <Star className="w-4 h-4" />
              Recreacional
            </button>
            <button
              onClick={() => setTab("academic")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-['Outfit'] text-sm font-600 transition-all duration-300 ${
                tab === "academic"
                  ? "bg-[#F4A261] text-[#03071E] shadow-[0_0_20px_rgba(244,162,97,0.4)]"
                  : "text-[#8BA3C7] hover:text-white"
              }`}
              style={{ fontWeight: 600 }}
            >
              <Telescope className="w-4 h-4" />
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
              className={`relative rounded-3xl overflow-hidden border transition-all duration-300 ${
                plan.featured
                  ? `border-[${plan.color}]/60 shadow-[0_0_50px_${plan.color}25] scale-105`
                  : `border-[${plan.color}]/15 hover:border-[${plan.color}]/35`
              } bg-gradient-to-br from-[#0A1628] to-[#03071E] p-7`}
              style={
                plan.featured
                  ? { borderColor: `${plan.color}60`, boxShadow: `0 0 50px ${plan.color}25` }
                  : { borderColor: `${plan.color}20` }
              }
            >
              {/* Featured top bar */}
              {plan.featured && (
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${plan.color}, ${plan.color}99)` }}
                />
              )}

              {/* Badge */}
              {plan.badge && (
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-['Outfit'] font-700 mb-4"
                  style={{
                    backgroundColor: `${plan.color}20`,
                    color: plan.color,
                    fontWeight: 700,
                  }}
                >
                  <Star className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              <h3 className="font-['Outfit'] text-lg font-black text-white mb-4" style={{ fontWeight: 900 }}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6">
                <span className="font-['Outfit'] text-5xl font-black text-white" style={{ fontWeight: 900 }}>
                  ${plan.price}
                </span>
                <span className="font-['Outfit'] text-sm text-[#8BA3C7] mb-2">USD {plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                    <span className="font-['Crimson_Pro'] text-base text-[#B8D4E8]">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Bonus */}
              {plan.bonus && (
                <div
                  className="rounded-xl p-3 mb-6 text-sm font-['Crimson_Pro']"
                  style={{ backgroundColor: `${plan.color}10`, borderLeft: `3px solid ${plan.color}` }}
                >
                  <span style={{ color: plan.color }}>{plan.bonus}</span>
                </div>
              )}

              <a
                href="#inscripcion"
                className="w-full py-3.5 rounded-xl text-sm font-['Outfit'] text-white text-center block transition-all duration-300"
                style={{
                  fontWeight: 700,
                  background: plan.featured
                    ? `linear-gradient(135deg, ${plan.color}, ${plan.color}BB)`
                    : "transparent",
                  border: plan.featured ? "none" : `1px solid ${plan.color}40`,
                  color: plan.featured ? (plan.color === "#4CC9F0" ? "#03071E" : "#fff") : plan.color,
                  boxShadow: plan.featured ? `0 0 20px ${plan.color}30` : "none",
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Inscribir a mi hijo
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
