/* TopicsSection v2 — Deep Field Observatory design */
import { motion } from "framer-motion";

const TELESCOPE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/telescope-night-hoUkjW6xnKyPGeUHvc3NRT.webp";

const topics = [
  { name: "Agujeros Negros", emoji: "🕳️", category: "Astrofísica", color: "#00D4FF" },
  { name: "Sistema Solar", emoji: "🪐", category: "Astronomía", color: "#7B2FBE" },
  { name: "Estrellas de Neutrones", emoji: "⭐", category: "Astrofísica", color: "#00D4FF" },
  { name: "Galaxias", emoji: "🌌", category: "Astronomía", color: "#7B2FBE" },
  { name: "Exoplanetas", emoji: "🌍", category: "Astronomía", color: "#7B2FBE" },
  { name: "Auroras Boreales", emoji: "🌠", category: "Física Espacial", color: "#FF9A3C" },
  { name: "Agujeros de Gusano", emoji: "🔮", category: "Relatividad", color: "#FFD166" },
  { name: "Ecuación de Drake", emoji: "👽", category: "Astrobiología", color: "#00FFB3" },
  { name: "Señal Wow!", emoji: "📡", category: "SETI", color: "#9B4DDE" },
  { name: "Robots Espaciales", emoji: "🤖", category: "Exploración", color: "#FF6B9D" },
  { name: "Supernovas", emoji: "💥", category: "Astroquímica", color: "#FFD166" },
  { name: "Tabla Periódica Cósmica", emoji: "⚗️", category: "Astroquímica", color: "#FFD166" },
  { name: "Cohetes Espaciales", emoji: "🚀", category: "Ingeniería", color: "#00D4FF" },
  { name: "Vida Extraterrestre", emoji: "🛸", category: "Astrobiología", color: "#00FFB3" },
  { name: "Luz y Gravedad (Einstein)", emoji: "💡", category: "Relatividad", color: "#FFD166" },
  { name: "Aritmética Astronómica", emoji: "🔢", category: "Astromatemáticas", color: "#FF9A3C" },
];

export default function TopicsSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "var(--cosmos-deep)" }}>
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${TELESCOPE_IMG})`, opacity: 0.08 }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--cosmos-deep), transparent 30%, transparent 70%, var(--cosmos-deep))" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-4 justify-center">Temas de Clase</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "white", lineHeight: 1.1, marginBottom: "1rem" }}>
            Explora el universo{" "}
            <span className="cosmic-shimmer">tema por tema</span>
          </h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", color: "#7A6B9A", maxWidth: "500px", margin: "0 auto" }}>
            Cada semana los estudiantes pueden elegir entre más de 5 temas diferentes. Los temas se renuevan constantemente.
          </p>
        </motion.div>

        {/* Topics grid */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <div
                className="rounded-2xl px-4 py-3 flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
                style={{ background: `${topic.color}08`, border: `1px solid ${topic.color}20` }}
              >
                <span className="text-xl">{topic.emoji}</span>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "white", lineHeight: 1.2 }}>
                    {topic.name}
                  </p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: topic.color, lineHeight: 1.2 }}>
                    {topic.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", color: "#7B2FBE", fontWeight: 500 }}
        >
          ✨ Nuevos temas se agregan cada semana. ¡El universo nunca se acaba!
        </motion.p>
      </div>
    </section>
  );
}
