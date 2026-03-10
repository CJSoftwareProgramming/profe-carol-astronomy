/* TeacherSection v2 — Deep Field Observatory design */
import { motion } from "framer-motion";
import { GraduationCap, Globe, Users, BookOpen, Rocket } from "lucide-react";

const NEBULA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/nebula-colorful-XGFkKgqJ5Nffn8aHSiRVTp.webp";

const credentials = [
  { icon: <GraduationCap className="w-4 h-4" />, text: "Estudiante de Astrofísica en el Reino Unido", color: "#00D4FF" },
  { icon: <Globe className="w-4 h-4" />, text: "Profesora internacional con estudiantes en +10 países", color: "#7B2FBE" },
  { icon: <Users className="w-4 h-4" />, text: "+200 estudiantes activos en la academia", color: "#FFD166" },
  { icon: <BookOpen className="w-4 h-4" />, text: "Currículo diseñado con rigor científico y pedagógico", color: "#00FFB3" },
];

export default function TeacherSection() {
  return (
    <section id="profesora" className="relative py-28 overflow-hidden" style={{ background: "rgba(5,3,10,0.75)" }}>
      {/* Nebula background */}
      <div className="absolute inset-0">
        <img src={NEBULA_BG} alt="" className="w-full h-full object-cover opacity-8" style={{ opacity: 0.08 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,3,10,0.97) 0%, rgba(5,3,10,0.85) 50%, rgba(5,3,10,0.97) 100%)" }} />
      </div>

      {/* Violet glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(123,47,190,0.1) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-4">Sobre la Profesora</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "white", lineHeight: 1.05, marginBottom: "1.5rem" }}>
              Profe Carol
              <br />
              <span className="cosmic-shimmer">Jiménez</span>
            </h2>
            <p style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", color: "#C4B5E0", lineHeight: 1.85, marginBottom: "1rem" }}>
              Carol Jiménez es una apasionada de la astrofísica, actualmente estudiante universitaria en el Reino Unido, con una misión clara: hacer que la ciencia del universo sea accesible, emocionante y transformadora para los niños.
            </p>
            <p style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", color: "#C4B5E0", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              Su metodología combina el rigor académico de las mejores universidades del mundo con una pedagogía diseñada especialmente para mentes jóvenes y curiosas. Cada clase es una aventura científica real.
            </p>

            <div className="space-y-3 mb-8">
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ background: `${c.color}08`, border: `1px solid ${c.color}18` }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${c.color}15`, color: c.color }}>
                    {c.icon}
                  </div>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", color: "#C4B5E0", fontWeight: 500 }}>{c.text}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#precios"
              className="btn-violet inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            >
              <Rocket className="w-4 h-4" />
              Comenzar Clases con Carol
            </a>
          </motion.div>

          {/* Right: quote card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl p-10 relative overflow-hidden" style={{ background: "linear-gradient(145deg, rgba(123,47,190,0.15) 0%, rgba(0,212,255,0.08) 100%)", border: "1px solid rgba(123,47,190,0.3)", boxShadow: "0 0 60px rgba(123,47,190,0.15)" }}>
              {/* Decorative quote mark */}
              <div className="absolute top-4 left-8" style={{ fontFamily: "'Lora', serif", fontSize: "8rem", color: "rgba(123,47,190,0.15)", lineHeight: 1, fontWeight: 700 }}>"</div>

              <blockquote className="relative z-10">
                <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "1.35rem", color: "white", lineHeight: 1.75, marginBottom: "2rem" }}>
                  "Cada niño que aprende astronomía se convierte en un explorador del universo. Mi misión es encender esa chispa de curiosidad que los acompañará toda la vida."
                </p>
                <footer>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#9B4DDE" }}>— Profe Carol Jiménez</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "#7A6B9A", marginTop: "0.25rem" }}>Astrofísica · Educadora Internacional</div>
                </footer>
              </blockquote>

              {/* Decorative stars */}
              <div className="absolute bottom-6 right-8 flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full star-dot" style={{ background: "#FFD166", animationDelay: `${i * 0.3}s` }} />
                ))}
              </div>
            </div>

            {/* Instagram link */}
            <motion.a
              href="https://www.instagram.com/profe_carol_astrophysics/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 mt-6 rounded-2xl px-5 py-4 transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, rgba(225,48,108,0.12), rgba(193,53,132,0.08))", border: "1px solid rgba(225,48,108,0.22)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "white" }}>Síguenos en Instagram</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "#E1306C" }}>@profe_carol_astrophysics</div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
