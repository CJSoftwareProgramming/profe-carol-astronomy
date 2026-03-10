/* ProgramsSection v2 — Deep Field Observatory design */
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Calendar, Users, CheckCircle2 } from "lucide-react";

const recreationalTopics = [
  "Sistema Solar", "Agujeros Negros", "Estrellas de Neutrones", "Galaxias",
  "Exoplanetas", "Asteroides", "Telescopios", "Misiones Espaciales",
  "Astronautas", "Cohetes Espaciales", "Física del Espacio", "Exploración Espacial",
  "Vida en Otros Planetas", "Matemáticas del Universo",
];

const academicBlocks = [
  { name: "Astrofísica", desc: "Luz, gravedad, relatividad y fenómenos extremos del universo." },
  { name: "Astroquímica", desc: "Composición química de estrellas, nebulosas y planetas." },
  { name: "Astromatemáticas", desc: "Aritmética, geometría y física aplicadas al cosmos." },
  { name: "Astronomía", desc: "Observación, historia y exploración del universo." },
];

export default function ProgramsSection() {
  return (
    <section id="programas" className="relative py-28 overflow-hidden" style={{ background: "var(--cosmos-deep)" }}>
      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(rgba(123,47,190,0.15) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4 justify-center">Nuestros Programas</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "white", lineHeight: 1.1, marginBottom: "1rem" }}>
            Elige tu camino{" "}
            <span className="cosmic-shimmer">al universo</span>
          </h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1.1rem", color: "#7A6B9A", maxWidth: "500px", margin: "0 auto" }}>
            Dos programas diseñados para diferentes objetivos de aprendizaje.
          </p>
        </motion.div>

        {/* Two programs */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recreational */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden p-8 group transition-all duration-300"
            style={{ background: "linear-gradient(145deg, rgba(0,212,255,0.08) 0%, rgba(10,5,20,0.95) 100%)", border: "1px solid rgba(0,212,255,0.2)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)")}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #00D4FF, transparent)" }} />
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,212,255,0.06)" }} />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(0,212,255,0.12)" }}>
                  <Sparkles className="w-6 h-6" style={{ color: "#00D4FF" }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "white" }}>
                    Astronomía Recreacional
                  </h3>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                    Exploración libre
                  </p>
                </div>
              </div>

              <p style={{ fontFamily: "'Lora', serif", fontSize: "1rem", color: "#C4B5E0", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Clases independientes donde los estudiantes eligen el tema que más les emociona cada semana. Sin secuencia estricta — pura exploración y diversión científica.
              </p>

              {/* Schedule */}
              <div className="rounded-xl p-4 mb-5" style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4" style={{ color: "#00D4FF" }} />
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "white" }}>Horario</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {["Jueves", "Viernes", "Sábado", "Domingo"].map(d => (
                    <span key={d} className="text-center rounded-lg px-2 py-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A", background: "rgba(0,212,255,0.05)" }}>
                      {d}
                    </span>
                  ))}
                </div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "#00D4FF", marginTop: "0.5rem", fontWeight: 500 }}>12:00 PM – 7:00 PM</p>
              </div>

              <div className="flex items-center gap-2 mb-5">
                <Users className="w-4 h-4" style={{ color: "#FFD166" }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", color: "#FFD166", fontWeight: 600 }}>
                  Máximo 15 estudiantes por clase
                </span>
              </div>

              {/* Topics */}
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", fontWeight: 600, color: "#4A3A6A", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>
                  +14 temas disponibles
                </p>
                <div className="flex flex-wrap gap-2">
                  {recreationalTopics.map((t) => (
                    <span key={t} className="rounded-full px-3 py-1" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#90E0EF" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#precios"
                className="mt-8 w-full py-3.5 rounded-xl text-sm text-center block transition-all duration-300 hover:scale-[1.02]"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "#00D4FF" }}
              >
                Ver Paquetes Recreacionales
              </a>
            </div>
          </motion.div>

          {/* Academic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden p-8 group transition-all duration-300"
            style={{ background: "linear-gradient(145deg, rgba(255,209,102,0.08) 0%, rgba(10,5,20,0.95) 100%)", border: "1px solid rgba(255,209,102,0.2)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,209,102,0.4)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,209,102,0.2)")}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #FFD166, transparent)" }} />
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(255,209,102,0.06)" }} />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,209,102,0.12)" }}>
                  <GraduationCap className="w-6 h-6" style={{ color: "#FFD166" }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "white" }}>
                    Astronomía Académica
                  </h3>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", color: "#FFD166", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                    Currículo estructurado
                  </p>
                </div>
              </div>

              <p style={{ fontFamily: "'Lora', serif", fontSize: "1rem", color: "#C4B5E0", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Programa progresivo con currículo estructurado para estudiantes que quieren profundizar en la astronomía con rigor académico. Incluye tareas, quices y certificado final.
              </p>

              <div className="flex items-center gap-2 mb-5">
                <Users className="w-4 h-4" style={{ color: "#FFD166" }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", color: "#FFD166", fontWeight: 600 }}>
                  Máximo 10 estudiantes por clase (cupos exclusivos)
                </span>
              </div>

              {/* Academic blocks */}
              <div className="space-y-3 mb-5">
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", fontWeight: 600, color: "#4A3A6A", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>
                  Bloques del Programa
                </p>
                {academicBlocks.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl p-3" style={{ background: "rgba(255,209,102,0.06)", border: "1px solid rgba(255,209,102,0.12)" }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(255,209,102,0.15)" }}>
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#FFD166" }}>{i + 1}</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "white" }}>{b.name}</p>
                      <p style={{ fontFamily: "'Lora', serif", fontSize: "0.8rem", color: "#7A6B9A" }}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Includes */}
              <div className="rounded-xl p-4 mb-6" style={{ background: "rgba(255,209,102,0.06)", border: "1px solid rgba(255,209,102,0.12)" }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", fontWeight: 600, color: "#FFD166", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>
                  Todas las clases académicas incluyen:
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {["Actividades semanales", "Tareas", "Quices", "Exposiciones", "Evaluación cualitativa", "Certificado final"].map(item => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#FFD166" }} />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "#C4B5E0" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#precios"
                className="w-full py-3.5 rounded-xl text-sm text-center block transition-all duration-300 hover:scale-[1.02]"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, background: "linear-gradient(135deg, #FFD166, #FF9A3C)", color: "#0A0514", boxShadow: "0 0 20px rgba(255,209,102,0.25)" }}
              >
                Ver Paquetes Académicos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
