/* WorkshopsSection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — workshop cards with monthly rotation */
import { motion } from "framer-motion";
import { Zap, Clock, Users, CalendarDays } from "lucide-react";

const workshops = [
  {
    title: "Cálculos Mentales con el Método Soroban Japonés",
    desc: "Aprende el sistema de ábaco japonés para realizar cálculos mentales increíblemente rápidos aplicados a problemas astronómicos.",
    icon: "🧮",
    duration: "5 clases",
    age: "6–12 años",
    color: "#4CC9F0",
  },
  {
    title: "Taller de Robótica Espacial",
    desc: "Diseña y programa robots exploradores espaciales. Aprende los principios de ingeniería que usan los rovers de la NASA.",
    icon: "🤖",
    duration: "5 clases",
    age: "7–12 años",
    color: "#F4A261",
  },
  {
    title: "Uso de Simuladores Espaciales",
    desc: "Navega el universo usando simuladores profesionales de astronomía. Explora galaxias, sistemas estelares y misiones espaciales.",
    icon: "🚀",
    duration: "5 clases",
    age: "5–12 años",
    color: "#90E0EF",
  },
  {
    title: "Iniciación a la Física Cuántica",
    desc: "Una introducción fascinante a los misterios de la física cuántica: partículas, ondas y los secretos del universo subatómico.",
    icon: "⚛️",
    duration: "5 clases",
    age: "9–12 años",
    color: "#FFB347",
  },
];

export default function WorkshopsSection() {
  return (
    <section id="talleres" className="relative bg-[#03071E] py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#F4A261]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <p className="section-label mb-3">Talleres Especializados</p>
            <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white leading-tight" style={{ fontWeight: 900 }}>
              Talleres mensuales
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] to-[#FFB347]">
                de ciencia y tecnología
              </span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-[#F4A261]/10 border border-[#F4A261]/30 rounded-2xl px-6 py-4 text-center">
              <div className="font-['Outfit'] text-4xl font-black text-[#F4A261]" style={{ fontWeight: 900 }}>$30</div>
              <div className="font-['Outfit'] text-xs text-[#8BA3C7] font-medium">USD por taller</div>
            </div>
          </div>
        </motion.div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 bg-[#4CC9F0]/8 border border-[#4CC9F0]/20 rounded-xl px-5 py-3.5 mb-10"
        >
          <CalendarDays className="w-5 h-5 text-[#4CC9F0] flex-shrink-0" />
          <p className="font-['Outfit'] text-sm text-[#B8D4E8]">
            <span className="text-[#4CC9F0] font-700" style={{ fontWeight: 700 }}>Cada mes se agregan nuevos talleres.</span>{" "}
            Los talleres son actividades adicionales para profundizar en ciencia y tecnología.
          </p>
        </motion.div>

        {/* Workshop cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {workshops.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cosmic-card rounded-2xl p-6 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${w.color}15` }}
                >
                  {w.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-['Outfit'] text-base font-700 text-white mb-2 leading-snug" style={{ fontWeight: 700 }}>
                    {w.title}
                  </h3>
                  <p className="font-['Crimson_Pro'] text-base text-[#8BA3C7] leading-relaxed mb-4">
                    {w.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" style={{ color: w.color }} />
                      <span className="font-['Outfit'] text-xs text-[#8BA3C7]">{w.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" style={{ color: w.color }} />
                      <span className="font-['Outfit'] text-xs text-[#8BA3C7]">{w.age}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" style={{ color: w.color }} />
                      <span className="font-['Outfit'] text-xs font-600" style={{ color: w.color, fontWeight: 600 }}>$30 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://wa.me/447462994908?text=Hola%20Profe%20Carol%2C%20me%20interesa%20inscribirme%20en%20un%20taller%20mensual%20%F0%9F%9A%80"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber px-8 py-4 rounded-full text-base font-['Outfit'] text-white inline-flex items-center gap-2"
            style={{ fontWeight: 700 }}
          >
            <Zap className="w-5 h-5" />
            Inscribirme en un Taller — $30 USD
          </a>
          <p className="mt-3 font-['Outfit'] text-xs text-[#4A6080]">Te contactaremos por WhatsApp para coordinar el pago</p>
        </motion.div>
      </div>
    </section>
  );
}
