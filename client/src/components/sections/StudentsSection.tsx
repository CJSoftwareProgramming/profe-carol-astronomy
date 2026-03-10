/* StudentsSection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — featured student achievements */
import { motion } from "framer-motion";
import { Trophy, Star, Rocket } from "lucide-react";

const achievements = [
  {
    name: "Sofía M.",
    age: 5,
    country: "🇨🇴 Colombia",
    achievement: "Presentó su proyecto sobre agujeros negros en la feria de ciencias de su colegio y obtuvo el primer lugar.",
    badge: "🏆 Científica Destacada",
    color: "#FFB347",
  },
  {
    name: "Mateo R.",
    age: 6,
    country: "🇲🇽 México",
    achievement: "Ha completado más de 20 clases en la academia, actualmente enseña astronomía básica a sus compañeros de escuela y tiene su propio canal científico.",
    badge: "🎓 Prodigio Astronómico",
    color: "#4CC9F0",
  },
  {
    name: "Diego C.",
    age: 4,
    country: "🇦🇷 Argentina",
    achievement: "Fue uno de los estudiantes más pequeños en presentar una exposición sobre el sistema solar y los tipos de estrellas en una feria de ciencias, la cual fue destacada en las noticias de su ciudad.",
    badge: "⭐ Prodigio Científico",
    color: "#F4A261",
  },
  {
    name: "Lucas P.",
    age: 8,
    country: "🇪🇸 España",
    achievement: "Diseñó y presentó su propio modelo de robot espacial como proyecto escolar, recibiendo un reconocimiento por su creatividad e iniciativa en el campo de la ingeniería espacial.",
    badge: "🚀 Explorador Creativo",
    color: "#90E0EF",
  },
];

export default function StudentsSection() {
  return (
    <section className="relative bg-[#03071E] py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#FFB347]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Logros de Estudiantes</p>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white leading-tight mb-5" style={{ fontWeight: 900 }}>
            Nuestros exploradores
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB347] to-[#F4A261]">
              del universo
            </span>
          </h2>
          <p className="font-['Crimson_Pro'] text-xl text-[#8BA3C7] max-w-xl mx-auto">
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
            { value: "+200", label: "Estudiantes activos", icon: <Star className="w-5 h-5" /> },
            { value: "+10", label: "Países representados", icon: <Rocket className="w-5 h-5" /> },
            { value: "+50", label: "Temas de clase", icon: <Trophy className="w-5 h-5" /> },
            { value: "100%", label: "Clases en vivo", icon: <Star className="w-5 h-5" /> },
          ].map((stat, i) => (
            <div key={i} className="cosmic-card rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-[#4CC9F0]/10 flex items-center justify-center text-[#4CC9F0] mx-auto mb-3">
                {stat.icon}
              </div>
              <div className="font-['Outfit'] text-3xl font-black text-white mb-1" style={{ fontWeight: 900 }}>
                {stat.value}
              </div>
              <div className="font-['Outfit'] text-xs text-[#8BA3C7] font-medium">{stat.label}</div>
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
              className="cosmic-card rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-['Outfit'] text-xl font-black flex-shrink-0"
                  style={{ backgroundColor: `${a.color}15`, color: a.color, fontWeight: 900 }}
                >
                  {a.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="font-['Outfit'] text-base font-700 text-white" style={{ fontWeight: 700 }}>
                      {a.name}
                    </span>
                    <span className="font-['Outfit'] text-xs text-[#8BA3C7]">{a.age} años</span>
                    <span className="font-['Outfit'] text-xs text-[#8BA3C7]">{a.country}</span>
                  </div>
                  <div
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-['Outfit'] font-semibold mb-3"
                    style={{ backgroundColor: `${a.color}15`, color: a.color }}
                  >
                    {a.badge}
                  </div>
                  <p className="font-['Crimson_Pro'] text-base text-[#B8D4E8] leading-relaxed">
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
