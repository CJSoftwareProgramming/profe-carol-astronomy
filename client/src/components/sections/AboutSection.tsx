/* AboutSection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — editorial split layout with planets banner */
import { motion } from "framer-motion";
import { Globe, Award, Microscope, BookOpen } from "lucide-react";

const PLANETS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/planets-banner-Pfkgq9qvd5RKHT3s5VGcTb.webp";
const KIDS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/kids-class-gowPdCrsioP3Lwiyn7JzEn.webp";

const pillars = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Academia Internacional",
    desc: "Estudiantes de toda América Latina, España y EE.UU. aprenden juntos.",
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    title: "Ciencia Real",
    desc: "Astrofísica, astroquímica y astromatemáticas con rigor científico.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Certificación",
    desc: "Certificado oficial al completar el programa académico.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Currículo Estructurado",
    desc: "Programa progresivo diseñado por una estudiante de Astrofísica en UK.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative bg-[#03071E] py-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4CC9F0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Planets banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-2xl overflow-hidden border border-[#4CC9F0]/10"
        >
          <img
            src={PLANETS_IMG}
            alt="Sistema Solar — Profe Carol Academy"
            className="w-full h-40 md:h-56 object-cover"
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#4CC9F0]/15 shadow-[0_0_60px_rgba(76,201,240,0.1)]">
              <img
                src={KIDS_IMG}
                alt="Niños aprendiendo astronomía con la Profe Carol"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03071E]/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-[#0A1628] border border-[#4CC9F0]/30 rounded-xl p-4 shadow-[0_8px_30px_rgba(76,201,240,0.15)]">
              <div className="font-['Outfit'] text-3xl font-black text-[#4CC9F0]">+200</div>
              <div className="font-['Outfit'] text-xs text-[#8BA3C7] font-medium">Estudiantes activos</div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-3">Sobre la Academia</p>
            <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white leading-tight mb-6" style={{ fontWeight: 900 }}>
              Una academia espacial
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CC9F0] to-[#90E0EF]">
                para mentes curiosas
              </span>
            </h2>
            <p className="font-['Crimson_Pro'] text-lg text-[#B8D4E8] leading-relaxed mb-8">
              Profe Carol Astrophysics Academy es una academia internacional de astronomía para niños,
              diseñada para despertar la curiosidad científica desde temprana edad. Nuestras clases combinan
              rigor académico con exploración divertida, inspiradas en la metodología de la NASA y el
              National Geographic.
            </p>
            <p className="font-['Crimson_Pro'] text-lg text-[#B8D4E8] leading-relaxed mb-10">
              Cada clase es una misión espacial. Cada niño, un explorador del cosmos.
            </p>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="cosmic-card rounded-xl p-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#4CC9F0]/10 flex items-center justify-center text-[#4CC9F0] mb-3">
                    {p.icon}
                  </div>
                  <h4 className="font-['Outfit'] text-sm font-700 text-white mb-1" style={{ fontWeight: 700 }}>{p.title}</h4>
                  <p className="font-['Crimson_Pro'] text-sm text-[#8BA3C7] leading-snug">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
