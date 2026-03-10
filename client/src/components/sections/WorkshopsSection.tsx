/* WorkshopsSection v2 — Deep Field Observatory design */
import { motion } from "framer-motion";
import { Zap, Clock, Users, CalendarDays, MessageCircle } from "lucide-react";

const workshops = [
  {
    title: "Cálculos Mentales con el Método Soroban Japonés",
    desc: "Aprende el sistema de ábaco japonés para realizar cálculos mentales increíblemente rápidos aplicados a problemas astronómicos.",
    icon: "🧮",
    duration: "5 clases",
    age: "6–12 años",
    color: "#00D4FF",
  },
  {
    title: "Taller de Robótica Espacial",
    desc: "Diseña y programa robots exploradores espaciales. Aprende los principios de ingeniería que usan los rovers de la NASA.",
    icon: "🤖",
    duration: "5 clases",
    age: "7–12 años",
    color: "#FF9A3C",
  },
  {
    title: "Uso de Simuladores Espaciales",
    desc: "Navega el universo usando simuladores profesionales de astronomía. Explora galaxias, sistemas estelares y misiones espaciales.",
    icon: "🚀",
    duration: "5 clases",
    age: "5–12 años",
    color: "#7B2FBE",
  },
  {
    title: "Iniciación a la Física Cuántica",
    desc: "Una introducción fascinante a los misterios de la física cuántica: partículas, ondas y los secretos del universo subatómico.",
    icon: "⚛️",
    duration: "5 clases",
    age: "9–12 años",
    color: "#00FFB3",
  },
];

export default function WorkshopsSection() {
  return (
    <section id="talleres" className="relative py-28 overflow-hidden" style={{ background: "var(--cosmos-void)" }}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(255,154,60,0.07) 0%, transparent 70%)" }} />

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
            <p className="section-label mb-4">Talleres Especializados</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "white", lineHeight: 1.1 }}>
              Talleres mensuales de
              <br />
              <span className="cosmic-shimmer">ciencia y tecnología</span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <div className="rounded-2xl px-6 py-4 text-center" style={{ background: "rgba(255,154,60,0.1)", border: "1px solid rgba(255,154,60,0.3)" }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "2.5rem", color: "#FF9A3C", lineHeight: 1 }}>$30</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A", fontWeight: 500 }}>USD por taller</div>
            </div>
          </div>
        </motion.div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 rounded-xl px-5 py-3.5 mb-10"
          style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)" }}
        >
          <CalendarDays className="w-5 h-5 flex-shrink-0" style={{ color: "#00D4FF" }} />
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", color: "#C4B5E0" }}>
            <span style={{ color: "#00D4FF", fontWeight: 700 }}>Cada mes se agregan nuevos talleres.</span>{" "}
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
              className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{ background: `linear-gradient(145deg, ${w.color}08 0%, rgba(10,5,20,0.9) 100%)`, border: `1px solid ${w.color}20` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${w.color}12` }}
                >
                  {w.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                    {w.title}
                  </h3>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: "0.875rem", color: "#7A6B9A", lineHeight: 1.7, marginBottom: "1rem" }}>
                    {w.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" style={{ color: w.color }} />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "#7A6B9A" }}>{w.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" style={{ color: w.color }} />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "#7A6B9A" }}>{w.age}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" style={{ color: w.color }} />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: w.color }}>$30 USD</span>
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
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/447462994908?text=Hola%20Profe%20Carol%2C%20me%20interesa%20inscribirme%20en%20un%20taller%20mensual%20%F0%9F%9A%80"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-4 rounded-full text-base inline-flex items-center gap-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#0A0514" }}
          >
            <MessageCircle className="w-5 h-5" />
            Inscribirme en un Taller — $30 USD
          </a>
          <p className="mt-3" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "#4A3A6A" }}>
            Te contactaremos por WhatsApp para coordinar el pago
          </p>
        </motion.div>
      </div>
    </section>
  );
}
