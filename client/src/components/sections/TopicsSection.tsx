/* TopicsSection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — animated topic cards with telescope background */
import { motion } from "framer-motion";

const TELESCOPE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/telescope-night-hoUkjW6xnKyPGeUHvc3NRT.webp";

const topics = [
  { name: "Agujeros Negros", emoji: "🕳️", category: "Astrofísica" },
  { name: "Sistema Solar", emoji: "🪐", category: "Astronomía" },
  { name: "Estrellas de Neutrones", emoji: "⭐", category: "Astrofísica" },
  { name: "Galaxias", emoji: "🌌", category: "Astronomía" },
  { name: "Exoplanetas", emoji: "🌍", category: "Astronomía" },
  { name: "Auroras Boreales", emoji: "🌠", category: "Física Espacial" },
  { name: "Agujeros de Gusano", emoji: "🔮", category: "Relatividad" },
  { name: "Ecuación de Drake", emoji: "👽", category: "Astrobiología" },
  { name: "Señal Wow!", emoji: "📡", category: "SETI" },
  { name: "Robots Espaciales", emoji: "🤖", category: "Exploración" },
  { name: "Supernovas", emoji: "💥", category: "Astroquímica" },
  { name: "Tabla Periódica Cósmica", emoji: "⚗️", category: "Astroquímica" },
  { name: "Cohetes Espaciales", emoji: "🚀", category: "Ingeniería" },
  { name: "Vida Extraterrestre", emoji: "🛸", category: "Astrobiología" },
  { name: "Luz y Gravedad (Einstein)", emoji: "💡", category: "Relatividad" },
  { name: "Aritmética Astronómica", emoji: "🔢", category: "Astromatemáticas" },
];

const categoryColors: Record<string, string> = {
  "Astrofísica": "#4CC9F0",
  "Astronomía": "#90E0EF",
  "Física Espacial": "#F4A261",
  "Relatividad": "#FFB347",
  "Astrobiología": "#80B918",
  "SETI": "#9B5DE5",
  "Exploración": "#F15BB5",
  "Astroquímica": "#FEE440",
  "Ingeniería": "#00BBF9",
  "Astromatemáticas": "#F4A261",
};

export default function TopicsSection() {
  return (
    <section className="relative bg-[#050D1E] py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${TELESCOPE_IMG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050D1E] via-transparent to-[#050D1E]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Temas de Clase</p>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white leading-tight mb-5" style={{ fontWeight: 900 }}>
            Explora el universo
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CC9F0] to-[#90E0EF]">
              tema por tema
            </span>
          </h2>
          <p className="font-['Crimson_Pro'] text-xl text-[#8BA3C7] max-w-xl mx-auto">
            Cada semana los estudiantes pueden elegir entre más de 5 temas diferentes.
            Los temas se renuevan constantemente.
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
              className="group cursor-default"
            >
              <div className="cosmic-card rounded-2xl px-4 py-3 flex items-center gap-2.5">
                <span className="text-xl">{topic.emoji}</span>
                <div>
                  <p className="font-['Outfit'] text-sm font-600 text-white leading-tight" style={{ fontWeight: 600 }}>
                    {topic.name}
                  </p>
                  <p
                    className="font-['Outfit'] text-[10px] font-semibold uppercase tracking-wider leading-tight"
                    style={{ color: categoryColors[topic.category] || "#4CC9F0" }}
                  >
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
          className="text-center font-['Outfit'] text-sm text-[#4CC9F0] font-medium"
        >
          ✨ Nuevos temas se agregan cada semana. ¡El universo nunca se acaba!
        </motion.p>
      </div>
    </section>
  );
}
