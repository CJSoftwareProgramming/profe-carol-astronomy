/* WhyAstronomySection v2 — Deep Field Observatory design */
import { motion } from "framer-motion";
import { Brain, Lightbulb, Calculator, Globe2, Telescope, Atom } from "lucide-react";

const benefits = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Pensamiento Crítico",
    desc: "La astronomía desarrolla la capacidad de analizar, cuestionar y resolver problemas complejos desde pequeños.",
    color: "#00D4FF",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Matemáticas en Contexto",
    desc: "Los niños aprenden aritmética, geometría y física usando distancias planetarias, velocidades y escalas reales.",
    color: "#FF9A3C",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Curiosidad Científica",
    desc: "Preguntar '¿por qué?' es el primer paso del método científico. La astronomía hace que cada niño quiera saber más.",
    color: "#FFD166",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Perspectiva Global",
    desc: "Comprender el universo da a los niños una perspectiva única sobre la Tierra, la humanidad y su lugar en el cosmos.",
    color: "#7B2FBE",
  },
  {
    icon: <Telescope className="w-6 h-6" />,
    title: "Vocación STEM",
    desc: "Muchos científicos, ingenieros y astronautas comenzaron mirando el cielo de niños. Sembramos esa semilla.",
    color: "#00FFB3",
  },
  {
    icon: <Atom className="w-6 h-6" />,
    title: "Ciencia Interdisciplinaria",
    desc: "La astronomía conecta física, química, matemáticas y biología en un solo campo fascinante y accesible.",
    color: "#FF6B9D",
  },
];

export default function WhyAstronomySection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "rgba(5,3,10,0.75)" }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(255,154,60,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4 justify-center">Beneficios Educativos</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "white", lineHeight: 1.1, marginBottom: "1rem" }}>
            ¿Por qué aprender astronomía{" "}
            <span className="cosmic-shimmer">desde niños?</span>
          </h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1.1rem", color: "#7A6B9A", maxWidth: "580px", margin: "0 auto", lineHeight: 1.8 }}>
            La astronomía no es solo mirar estrellas. Es la puerta de entrada a la ciencia, la tecnología y el pensamiento analítico que los niños necesitarán toda la vida.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 group transition-all duration-300 hover:scale-[1.02]"
              style={{ background: `linear-gradient(145deg, ${b.color}07 0%, rgba(10,5,20,0.9) 100%)`, border: `1px solid ${b.color}18` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${b.color}12`, color: b.color }}
              >
                {b.icon}
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", marginBottom: "0.5rem" }}>
                {b.title}
              </h3>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "0.9rem", color: "#7A6B9A", lineHeight: 1.7 }}>
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
