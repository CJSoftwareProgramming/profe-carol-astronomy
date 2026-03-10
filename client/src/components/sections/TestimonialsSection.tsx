/* TestimonialsSection v2 — Deep Field Observatory design */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Mamá de Sofía, 8 años — Colombia",
    text: "Mi hija lleva 6 meses en la academia y su amor por la ciencia ha crecido enormemente. Ahora me explica qué son los agujeros negros y cómo se forman las estrellas. ¡Increíble!",
    rating: 5,
    initials: "MG",
    color: "#00D4FF",
  },
  {
    name: "Carlos Rodríguez",
    role: "Papá de Mateo, 10 años — México",
    text: "La Profe Carol tiene un don especial para explicar conceptos complejos de forma que los niños los entiendan y disfruten. Mateo no se pierde ninguna clase.",
    rating: 5,
    initials: "CR",
    color: "#FF9A3C",
  },
  {
    name: "Ana Martínez",
    role: "Mamá de Lucas, 7 años — Argentina",
    text: "Lo que más me gusta es que no es una clase aburrida. Es una aventura espacial cada semana. Lucas ya quiere ser astrónomo cuando sea grande.",
    rating: 5,
    initials: "AM",
    color: "#7B2FBE",
  },
  {
    name: "Roberto Silva",
    role: "Papá de Valentina, 11 años — España",
    text: "El programa académico es excelente. Valentina ha mejorado en matemáticas y física gracias a la metodología de la Profe Carol. Totalmente recomendado.",
    rating: 5,
    initials: "RS",
    color: "#FFD166",
  },
  {
    name: "Lucía Fernández",
    role: "Mamá de Diego, 9 años — Venezuela",
    text: "La calidad de las clases es comparable a academias internacionales. La Profe Carol es muy profesional y los niños la adoran. Vale cada centavo.",
    rating: 5,
    initials: "LF",
    color: "#00FFB3",
  },
  {
    name: "Patricia Morales",
    role: "Mamá de Isabella, 6 años — Chile",
    text: "Empezamos con el programa recreacional y mi hija de 6 años ya conoce todos los planetas, sus características y hasta habla de exoplanetas. ¡Asombroso!",
    rating: 5,
    initials: "PM",
    color: "#FF6B9D",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "var(--cosmos-deep)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(123,47,190,0.08) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-4 justify-center">Testimonios</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "white", lineHeight: 1.1, marginBottom: "1rem" }}>
            Lo que dicen{" "}
            <span className="cosmic-shimmer">los padres</span>
          </h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", color: "#7A6B9A", maxWidth: "520px", margin: "0 auto" }}>
            Familias de toda América Latina y España confían en la Profe Carol para la educación científica de sus hijos.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 relative"
              style={{ background: `linear-gradient(145deg, ${t.color}06 0%, rgba(10,5,20,0.9) 100%)`, border: `1px solid ${t.color}18` }}
            >
              {/* Quote icon */}
              <Quote className="w-7 h-7 absolute top-4 right-4" style={{ color: `${t.color}25` }} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5" style={{ fill: "#FFD166", color: "#FFD166" }} />
                ))}
              </div>

              {/* Text */}
              <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "0.9rem", color: "#C4B5E0", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${t.color}18`, color: t.color, fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", fontWeight: 700 }}
                >
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "white" }}>{t.name}</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
