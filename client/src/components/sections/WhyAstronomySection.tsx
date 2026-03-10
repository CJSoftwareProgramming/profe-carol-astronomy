/* WhyAstronomySection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — benefits grid with icon cards */
import { motion } from "framer-motion";
import { Brain, Lightbulb, Calculator, Globe2, Telescope, Atom } from "lucide-react";

const benefits = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Pensamiento Crítico",
    desc: "La astronomía desarrolla la capacidad de analizar, cuestionar y resolver problemas complejos desde pequeños.",
    color: "#4CC9F0",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Matemáticas en Contexto",
    desc: "Los niños aprenden aritmética, geometría y física usando distancias planetarias, velocidades y escalas reales.",
    color: "#F4A261",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Curiosidad Científica",
    desc: "Preguntar '¿por qué?' es el primer paso del método científico. La astronomía hace que cada niño quiera saber más.",
    color: "#90E0EF",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Perspectiva Global",
    desc: "Comprender el universo da a los niños una perspectiva única sobre la Tierra, la humanidad y su lugar en el cosmos.",
    color: "#FFB347",
  },
  {
    icon: <Telescope className="w-6 h-6" />,
    title: "Vocación STEM",
    desc: "Muchos científicos, ingenieros y astronautas comenzaron mirando el cielo de niños. Sembramos esa semilla.",
    color: "#4CC9F0",
  },
  {
    icon: <Atom className="w-6 h-6" />,
    title: "Ciencia Interdisciplinaria",
    desc: "La astronomía conecta física, química, matemáticas y biología en un solo campo fascinante y accesible.",
    color: "#F4A261",
  },
];

export default function WhyAstronomySection() {
  return (
    <section className="relative bg-[#050D1E] py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4A261]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4CC9F0]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Beneficios Educativos</p>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white leading-tight mb-5" style={{ fontWeight: 900 }}>
            ¿Por qué aprender astronomía
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] to-[#FFB347]">
              desde niños?
            </span>
          </h2>
          <p className="font-['Crimson_Pro'] text-xl text-[#8BA3C7] max-w-2xl mx-auto leading-relaxed">
            La astronomía no es solo mirar estrellas. Es la puerta de entrada a la ciencia,
            la tecnología y el pensamiento analítico que los niños necesitarán toda la vida.
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
              className="cosmic-card rounded-2xl p-6 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${b.color}15`, color: b.color }}
              >
                {b.icon}
              </div>
              <h3 className="font-['Outfit'] text-lg font-700 text-white mb-2" style={{ fontWeight: 700 }}>
                {b.title}
              </h3>
              <p className="font-['Crimson_Pro'] text-base text-[#8BA3C7] leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
