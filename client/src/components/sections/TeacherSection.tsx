/* TeacherSection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — editorial teacher profile with credentials */
import { motion } from "framer-motion";
import { GraduationCap, Globe, Star, BookOpen } from "lucide-react";

const TEACHER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/carol-real-photo_f469be8e.jpg";

const credentials = [
  { icon: <GraduationCap className="w-5 h-5" />, text: "Estudiante de Astrofísica en el Reino Unido" },
  { icon: <Globe className="w-5 h-5" />, text: "Profesora internacional con estudiantes en +10 países" },
  { icon: <Star className="w-5 h-5" />, text: "+200 estudiantes activos en la academia" },
  { icon: <BookOpen className="w-5 h-5" />, text: "Currículo diseñado con rigor científico y pedagógico" },
];

export default function TeacherSection() {
  return (
    <section id="profesora" className="relative bg-[#03071E] py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-[#4CC9F0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-3">Sobre la Profesora</p>
            <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white leading-tight mb-6" style={{ fontWeight: 900 }}>
              Profe Carol
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CC9F0] to-[#90E0EF]">
                Jiménez
              </span>
            </h2>

            <p className="font-['Crimson_Pro'] text-xl text-[#B8D4E8] leading-relaxed mb-4">
              Estudio Astrofísica en el Reino Unido y soy una apasionada por las ciencias y por enseñarlas.
              Me encanta trabajar con niños curiosos y demostrarles que el universo no es demasiado difícil para ellos.
              En mis clases exploramos temas fascinantes de astronomía y física —muchas veces considerados avanzados—
              de una forma clara, divertida y llena de curiosidad.
            </p>
            <p className="font-['Crimson_Pro'] text-xl text-[#B8D4E8] leading-relaxed mb-8">
              Para mí lo más importante es escuchar a cada estudiante, responder sus preguntas y conversar con ellos
              mientras descubrimos juntos cómo funciona el universo. Mi mayor sueño es llegar a muchos chiquitines
              que sienten una fascinación especial por la ciencia y el espacio, y acompañarlos desde pequeños para
              que nunca pierdan esa curiosidad por entender el cosmos. Estoy segura de que mi academia es la cuna
              de muchos futuros astronautas y científicos.
            </p>

            {/* Credentials */}
            <div className="space-y-4 mb-8">
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#4CC9F0]/10 flex items-center justify-center text-[#4CC9F0] flex-shrink-0">
                    {c.icon}
                  </div>
                  <span className="font-['Outfit'] text-sm text-[#B8D4E8] font-medium">{c.text}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#precios"
              className="btn-cosmic px-8 py-4 rounded-full text-base font-['Outfit'] text-white inline-flex items-center gap-2"
              style={{ fontWeight: 700 }}
            >
              Comenzar Clases con Carol
            </a>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#4CC9F0]/15 shadow-[0_0_80px_rgba(76,201,240,0.12)]">
              <img
                src={TEACHER_IMG}
                alt="Profe Carol — Astrofísica y educadora"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03071E]/50 to-transparent" />
            </div>

            {/* Quote card */}
            <div className="absolute -bottom-6 -left-6 max-w-xs bg-[#0A1628] border border-[#4CC9F0]/30 rounded-2xl p-5 shadow-[0_8px_40px_rgba(76,201,240,0.15)]">
              <p className="font-['Crimson_Pro'] text-base text-[#B8D4E8] italic leading-relaxed mb-3">
                "El universo es demasiado fascinante para esperar a ser adultos para descubrirlo."
              </p>
              <p className="font-['Outfit'] text-xs text-[#4CC9F0] font-semibold">— Profe Carol Jiménez</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
