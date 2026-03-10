/* TestimonialsSection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — testimonial cards with star ratings */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Mamá de Sofía, 8 años — Colombia",
    text: "Mi hija lleva 6 meses en la academia y su amor por la ciencia ha crecido enormemente. Ahora me explica qué son los agujeros negros y cómo se forman las estrellas. ¡Increíble!",
    rating: 5,
    initials: "MG",
    color: "#4CC9F0",
  },
  {
    name: "Carlos Rodríguez",
    role: "Papá de Mateo, 10 años — México",
    text: "La Profe Carol tiene un don especial para explicar conceptos complejos de forma que los niños los entiendan y disfruten. Mateo no se pierde ninguna clase.",
    rating: 5,
    initials: "CR",
    color: "#F4A261",
  },
  {
    name: "Ana Martínez",
    role: "Mamá de Lucas, 7 años — Argentina",
    text: "Lo que más me gusta es que no es una clase aburrida. Es una aventura espacial cada semana. Lucas ya quiere ser astrónomo cuando sea grande.",
    rating: 5,
    initials: "AM",
    color: "#90E0EF",
  },
  {
    name: "Roberto Silva",
    role: "Papá de Valentina, 11 años — España",
    text: "El programa académico es excelente. Valentina ha mejorado en matemáticas y física gracias a la metodología de la Profe Carol. Totalmente recomendado.",
    rating: 5,
    initials: "RS",
    color: "#FFB347",
  },
  {
    name: "Lucía Fernández",
    role: "Mamá de Diego, 9 años — Venezuela",
    text: "La calidad de las clases es comparable a academias internacionales. La Profe Carol es muy profesional y los niños la adoran. Vale cada centavo.",
    rating: 5,
    initials: "LF",
    color: "#4CC9F0",
  },
  {
    name: "Patricia Morales",
    role: "Mamá de Isabella, 6 años — Chile",
    text: "Empezamos con el programa recreacional y mi hija de 6 años ya conoce todos los planetas, sus características y hasta habla de exoplanetas. ¡Asombroso!",
    rating: 5,
    initials: "PM",
    color: "#F4A261",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#050D1E] py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4CC9F0]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Testimonios</p>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white leading-tight mb-5" style={{ fontWeight: 900 }}>
            Lo que dicen
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CC9F0] to-[#F4A261]">
              los padres
            </span>
          </h2>
          <p className="font-['Crimson_Pro'] text-xl text-[#8BA3C7] max-w-xl mx-auto">
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
              className="cosmic-card rounded-2xl p-6 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#4CC9F0]/20 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#FFB347] text-[#FFB347]" />
                ))}
              </div>

              {/* Text */}
              <p className="font-['Crimson_Pro'] text-base text-[#B8D4E8] leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-['Outfit'] text-sm font-black flex-shrink-0"
                  style={{ backgroundColor: `${t.color}20`, color: t.color, fontWeight: 900 }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-['Outfit'] text-sm font-700 text-white" style={{ fontWeight: 700 }}>{t.name}</p>
                  <p className="font-['Outfit'] text-xs text-[#8BA3C7]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
