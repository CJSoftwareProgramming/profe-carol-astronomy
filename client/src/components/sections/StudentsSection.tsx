/* StudentsSection v2 — Deep Field Observatory design */
import { motion } from "framer-motion";
import { Trophy, Star, Rocket } from "lucide-react";

const achievements = [
  {
    name: "Sofía M.",
    age: 9,
    country: "🇨🇴 Colombia",
    achievement: "Presentó su proyecto sobre agujeros negros en la feria de ciencias de su colegio y obtuvo el primer lugar.",
    badge: "🏆 Científica Destacada",
    color: "#FFD166",
  },
  {
    name: "Mateo R.",
    age: 11,
    country: "🇲🇽 México",
    achievement: "Completó el programa académico completo y recibió su certificado. Ahora enseña astronomía básica a sus compañeros.",
    badge: "🎓 Graduado Académico",
    color: "#00D4FF",
  },
  {
    name: "Isabella C.",
    age: 7,
    country: "🇦🇷 Argentina",
    achievement: "La estudiante más joven en completar el módulo de Astroquímica. Identificó correctamente 15 elementos estelares.",
    badge: "⭐ Prodigio Científico",
    color: "#FF9A3C",
  },
  {
    name: "Lucas P.",
    age: 10,
    country: "🇪🇸 España",
    achievement: "Diseñó su propio modelo del sistema solar con materiales reciclados y lo presentó en su escuela.",
    badge: "🚀 Explorador Creativo",
    color: "#7B2FBE",
  },
];

export default function StudentsSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "rgba(5,3,10,0.75)" }}>
      <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(255,209,102,0.06) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-4 justify-center">Logros de Estudiantes</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "white", lineHeight: 1.1, marginBottom: "1rem" }}>
            Nuestros exploradores{" "}
            <span className="cosmic-shimmer">del universo</span>
          </h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", color: "#7A6B9A", maxWidth: "500px", margin: "0 auto" }}>
            Cada semana, nuestros estudiantes logran cosas increíbles dentro y fuera del aula.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {[
            { value: "+200", label: "Estudiantes activos", icon: <Star className="w-5 h-5" />, color: "#00D4FF" },
            { value: "+10", label: "Países representados", icon: <Rocket className="w-5 h-5" />, color: "#7B2FBE" },
            { value: "+50", label: "Temas de clase", icon: <Trophy className="w-5 h-5" />, color: "#FFD166" },
            { value: "100%", label: "Clases en vivo", icon: <Star className="w-5 h-5" />, color: "#FF9A3C" },
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl p-5 text-center" style={{ background: `${stat.color}08`, border: `1px solid ${stat.color}18` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${stat.color}12`, color: stat.color }}>
                {stat.icon}
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.8rem", color: "white", lineHeight: 1, marginBottom: "0.25rem" }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A", fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6"
              style={{ background: `linear-gradient(145deg, ${a.color}06 0%, rgba(10,5,20,0.9) 100%)`, border: `1px solid ${a.color}18` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${a.color}15`, color: a.color, fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700 }}
                >
                  {a.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white" }}>
                      {a.name}
                    </span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "#7A6B9A" }}>{a.age} años</span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "#7A6B9A" }}>{a.country}</span>
                  </div>
                  <div
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 mb-3"
                    style={{ background: `${a.color}15`, color: a.color, fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 600 }}
                  >
                    {a.badge}
                  </div>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: "0.9rem", color: "#C4B5E0", lineHeight: 1.7 }}>
                    {a.achievement}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
