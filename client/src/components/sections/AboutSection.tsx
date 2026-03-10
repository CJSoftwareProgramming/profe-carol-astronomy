/* AboutSection v2 — Deep Field Observatory design */
import { motion } from "framer-motion";
import { Globe, Award, FlaskConical, BookOpen } from "lucide-react";

const KIDS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/cosmic-child-fMXkWbNTk2Qr4tM65uboBp.webp";
const PLANETS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/planets-system-h4AfnLM4Fkt2qeFcd2ByBQ.webp";

const highlights = [
  { icon: <Globe className="w-5 h-5" />, title: "Academia Internacional", desc: "Estudiantes de toda América Latina, España y EE.UU.", color: "#00D4FF" },
  { icon: <FlaskConical className="w-5 h-5" />, title: "Ciencia Real", desc: "Astrofísica, astroquímica y astromatemáticas con rigor.", color: "#7B2FBE" },
  { icon: <Award className="w-5 h-5" />, title: "Certificación", desc: "Certificado oficial al completar el programa académico.", color: "#FFD166" },
  { icon: <BookOpen className="w-5 h-5" />, title: "Currículo Estructurado", desc: "Programa progresivo diseñado por estudiante de Astrofísica en UK.", color: "#00FFB3" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-28 overflow-hidden" style={{ background: "rgba(5,3,10,0.75)" }}>
      {/* Planets image as subtle background strip */}
      <div className="absolute top-0 left-0 right-0 h-72 overflow-hidden">
        <img src={PLANETS_IMG} alt="" className="w-full h-full object-cover object-center opacity-15" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,3,10,0.4) 0%, rgba(5,3,10,1) 100%)" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 0 80px rgba(123,47,190,0.3), 0 30px 60px rgba(0,0,0,0.5)" }}>
              <img src={KIDS_IMG} alt="Niño explorando el universo" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,3,10,0.5) 0%, transparent 60%)" }} />
            </div>
            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 rounded-2xl px-6 py-4 text-center"
              style={{ background: "linear-gradient(135deg, rgba(123,47,190,0.95), rgba(0,212,255,0.85))", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "2.5rem", color: "white", lineHeight: 1 }}>+200</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.65rem", color: "rgba(255,255,255,0.85)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Estudiantes activos</div>
            </motion.div>
            {/* Glow behind image */}
            <div className="absolute -inset-4 rounded-3xl -z-10 blur-3xl opacity-25" style={{ background: "linear-gradient(135deg, #7B2FBE, #00D4FF)" }} />
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-4">Sobre la Academia</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Una academia espacial
              <br />
              <span className="cosmic-shimmer">para mentes curiosas</span>
            </h2>
            <p style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", color: "#C4B5E0", lineHeight: 1.85, marginBottom: "1rem" }}>
              Profe Carol Astrophysics Academy es una academia internacional de astronomía para niños, diseñada para despertar la curiosidad científica desde temprana edad. Nuestras clases combinan rigor académico con exploración divertida, inspiradas en la metodología de la NASA y el National Geographic.
            </p>
            <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "1rem", color: "#9B4DDE", marginBottom: "2.5rem" }}>
              Cada clase es una misión espacial. Cada niño, un explorador del cosmos.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl p-4"
                  style={{ background: `${h.color}08`, border: `1px solid ${h.color}20` }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${h.color}15`, color: h.color }}>
                    {h.icon}
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "white", marginBottom: "0.3rem" }}>{h.title}</div>
                  <div style={{ fontFamily: "'Lora', serif", fontSize: "0.8rem", color: "#7A6B9A", lineHeight: 1.5 }}>{h.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
