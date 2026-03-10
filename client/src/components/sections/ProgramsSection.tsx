/* ProgramsSection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — two-program bold split layout */
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Calendar, Users, CheckCircle2 } from "lucide-react";

const recreationalTopics = [
  "Sistema Solar", "Agujeros Negros", "Estrellas de Neutrones", "Galaxias",
  "Exoplanetas", "Asteroides", "Telescopios", "Misiones Espaciales",
  "Astronautas", "Cohetes Espaciales", "Física del Espacio", "Exploración Espacial",
  "Vida en Otros Planetas", "Matemáticas del Universo",
];

const academicBlocks = [
  { name: "Astrofísica", desc: "6 Semanas de Clases + Laboratorio + Examen Final (Luz, gravedad, relatividad y fenómenos extremos del universo)" },
  { name: "Astroquímica", desc: "6 Semanas de Clases + Laboratorio + Examen Final (Composición química de estrellas, nebulosas y planetas)" },
  { name: "Astromatemáticas", desc: "6 Semanas de Clases + Laboratorio + Examen Final (Aritmética, geometría y física aplicadas al cosmos)" },
  { name: "Astronomía", desc: "6 Semanas de Clases + Laboratorio + Examen Final (Observación, historia y exploración del universo)" },
];

export default function ProgramsSection() {
  return (
    <section id="programas" className="relative bg-[#03071E] py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234CC9F0%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Nuestros Programas</p>
          <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white leading-tight mb-5" style={{ fontWeight: 900 }}>
            Elige tu camino
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CC9F0] to-[#90E0EF]">
              al universo
            </span>
          </h2>
          <p className="font-['Crimson_Pro'] text-xl text-[#8BA3C7] max-w-xl mx-auto">
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
            className="relative rounded-3xl overflow-hidden border border-[#4CC9F0]/20 bg-gradient-to-br from-[#0A1628] to-[#03071E] p-8 group hover:border-[#4CC9F0]/40 transition-all duration-300"
          >
            {/* Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4CC9F0] to-[#90E0EF]" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#4CC9F0]/8 rounded-full blur-[60px] group-hover:bg-[#4CC9F0]/12 transition-all duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#4CC9F0]/15 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#4CC9F0]" />
                </div>
                <div>
                  <h3 className="font-['Outfit'] text-2xl font-black text-white" style={{ fontWeight: 900 }}>
                    Astronomía Recreacional
                  </h3>
                  <p className="font-['Outfit'] text-[#4CC9F0] text-xs font-semibold tracking-wider uppercase">
                    Exploración libre
                  </p>
                </div>
              </div>

              <p className="font-['Crimson_Pro'] text-lg text-[#B8D4E8] leading-relaxed mb-6">
                Clases independientes donde los estudiantes eligen el tema que más les emociona cada semana.
                Sin secuencia estricta — pura exploración y diversión científica.
              </p>

              {/* Schedule */}
              <div className="bg-[#4CC9F0]/8 border border-[#4CC9F0]/15 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#4CC9F0]" />
                  <span className="font-['Outfit'] text-sm font-700 text-white" style={{ fontWeight: 700 }}>Horarios</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["Jueves", "Viernes", "Sábado", "Domingo"].map(d => (
                    <span key={d} className="font-['Outfit'] text-xs text-[#8BA3C7] bg-[#4CC9F0]/8 rounded-lg px-3 py-1.5 text-center">
                      {d}
                    </span>
                  ))}
                </div>
                <p className="font-['Outfit'] text-xs text-[#4CC9F0] mt-2 font-medium">12:00 PM – 7:00 PM</p>
              </div>

              {/* Capacity */}
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-4 h-4 text-[#F4A261]" />
                <span className="font-['Outfit'] text-sm text-[#F4A261] font-600" style={{ fontWeight: 600 }}>
                  Máximo 15 estudiantes por clase
                </span>
              </div>

              {/* Topics */}
              <div>
                <p className="font-['Outfit'] text-xs font-semibold text-[#8BA3C7] uppercase tracking-wider mb-3">
                  +14 temas disponibles (se agregan nuevos cada semana)
                </p>
                <div className="flex flex-wrap gap-2">
                  {recreationalTopics.map((t) => (
                    <span
                      key={t}
                      className="font-['Outfit'] text-xs bg-[#4CC9F0]/8 border border-[#4CC9F0]/15 text-[#90E0EF] rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#precios"
                className="btn-cosmic mt-8 w-full py-3.5 rounded-xl text-sm font-['Outfit'] text-white text-center block"
                style={{ fontWeight: 700 }}
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
            className="relative rounded-3xl overflow-hidden border border-[#F4A261]/20 bg-gradient-to-br from-[#1A0E05] to-[#03071E] p-8 group hover:border-[#F4A261]/40 transition-all duration-300"
          >
            {/* Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F4A261] to-[#FFB347]" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#F4A261]/8 rounded-full blur-[60px] group-hover:bg-[#F4A261]/12 transition-all duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F4A261]/15 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#F4A261]" />
                </div>
                <div>
                  <h3 className="font-['Outfit'] text-2xl font-black text-white" style={{ fontWeight: 900 }}>
                    Astronomía Académica
                  </h3>
                  <p className="font-['Outfit'] text-[#F4A261] text-xs font-semibold tracking-wider uppercase">
                    Currículo estructurado
                  </p>
                </div>
              </div>

              <p className="font-['Crimson_Pro'] text-lg text-[#E8D5C0] leading-relaxed mb-6">
                Programa progresivo con currículo estructurado para estudiantes que quieren profundizar
                en la astronomía con rigor académico. Incluye tareas, quices y certificado final.
              </p>

              {/* Capacity */}
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-4 h-4 text-[#F4A261]" />
                <span className="font-['Outfit'] text-sm text-[#F4A261] font-600" style={{ fontWeight: 600 }}>
                  Máximo 10 estudiantes por clase (cupos exclusivos)
                </span>
              </div>

              {/* Academic blocks */}
              <div className="space-y-3 mb-6">
                <p className="font-['Outfit'] text-xs font-semibold text-[#8BA3C7] uppercase tracking-wider mb-3">
                  Bloques del Programa
                </p>
                {academicBlocks.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#F4A261]/8 border border-[#F4A261]/15 rounded-xl p-3">
                    <div className="w-7 h-7 rounded-lg bg-[#F4A261]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-['Outfit'] text-xs font-black text-[#F4A261]">{i + 1}</span>
                    </div>
                    <div>
                      <p className="font-['Outfit'] text-sm font-700 text-white" style={{ fontWeight: 700 }}>{b.name}</p>
                      <p className="font-['Crimson_Pro'] text-sm text-[#8BA3C7]">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Includes */}
              <div className="bg-[#F4A261]/8 border border-[#F4A261]/15 rounded-xl p-4 mb-6">
                <p className="font-['Outfit'] text-xs font-semibold text-[#F4A261] uppercase tracking-wider mb-3">
                  Todas las clases académicas incluyen:
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {["Actividades semanales", "Tareas", "Quices", "Exposiciones", "Evaluación cualitativa", "Certificado final"].map(item => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A261] flex-shrink-0" />
                      <span className="font-['Outfit'] text-xs text-[#D4B896]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download pensum */}
              <a
                href="https://drive.google.com/file/d/1pTFvgswMWzCOYmfDGMJuIuJafvZsykHr/view?usp=sharing"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#F4A261]/40 text-[#F4A261] font-['Outfit'] text-sm font-600 hover:bg-[#F4A261]/10 transition-all duration-300 mb-4"
                style={{ fontWeight: 600 }}
              >
                📄 Descargar Pensum Académico
              </a>

              <a
                href="#precios"
                className="btn-amber w-full py-3.5 rounded-xl text-sm font-['Outfit'] text-white text-center block"
                style={{ fontWeight: 700 }}
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
