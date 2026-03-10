/* HeroSection v2 — Deep Field Observatory design
   New galaxy background, violet/cyan/gold palette, Space Grotesk typography */
import { motion } from "framer-motion";
import { Rocket, Star, Users, Clock, MessageCircle, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/hero-galaxy-new-mfg3LtxrXAV6g9ysyMM4mV.webp";
const WHATSAPP_NUMBER = "+44 7462 994908";
const WHATSAPP_LINK = "https://wa.me/447462994908";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(5,3,10,0.97) 0%, rgba(10,5,20,0.88) 45%, rgba(5,3,10,0.55) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,3,10,1) 0%, transparent 35%, transparent 80%, rgba(5,3,10,0.6) 100%)" }} />
      {/* Violet nebula glow left */}
      <div className="absolute -left-40 top-1/3 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(123,47,190,0.18) 0%, transparent 70%)" }} />


      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl pt-28 pb-20">
        <div className="max-w-3xl">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-7"
            style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full star-dot" style={{ background: "#00D4FF" }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00D4FF", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Academia Internacional · Cupos Limitados
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.02 }}
            className="text-5xl md:text-6xl lg:text-[5.5rem] text-white mb-3"
          >
            Astronomía
            <br />
            <span className="cosmic-shimmer">para Niños</span>
          </motion.h1>

          {/* Age tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 mb-7"
            style={{ background: "rgba(255,209,102,0.12)", border: "1px solid rgba(255,209,102,0.3)" }}
          >
            <Users className="w-4 h-4" style={{ color: "#FFD166" }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFD166", fontSize: "0.85rem", fontWeight: 600 }}>
              Diseñado para niños de 4 a 12 años
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-xl md:text-2xl leading-relaxed mb-9 max-w-2xl"
            style={{ fontFamily: "'Lora', serif", color: "#C4B5E0" }}
          >
            Explora el universo con clases en vivo, experimentos y misiones espaciales.
            Una academia inspirada en la NASA para los científicos del futuro.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-5 mb-10"
          >
            {[
              { icon: <Star className="w-3.5 h-3.5" />, text: "Clases en vivo" },
              { icon: <Rocket className="w-3.5 h-3.5" />, text: "Experimentos espaciales" },
              { icon: <Clock className="w-3.5 h-3.5" />, text: "Horarios flexibles" },
              { icon: <Users className="w-3.5 h-3.5" />, text: "Máx. 15 estudiantes" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2" style={{ color: "#8A7AAA" }}>
                <span style={{ color: "#7B2FBE" }}>{item.icon}</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4 mb-9"
          >
            <a
              href="#precios"
              className="btn-gold px-8 py-4 rounded-full text-base inline-flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#0A0514" }}
            >
              <Rocket className="w-5 h-5" />
              Reservar Cupo Ahora
            </a>
            <a
              href="#programas"
              className="btn-ghost-cyan px-8 py-4 rounded-full text-base inline-flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              Ver Programas
            </a>
          </motion.div>

          {/* WhatsApp prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68 }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center orbital-pulse flex-shrink-0"
                style={{ background: "#25D366", boxShadow: "0 0 25px rgba(37,211,102,0.5)" }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.6rem", color: "#7A6B9A", textTransform: "uppercase", letterSpacing: "0.15em", lineHeight: 1.2 }}>
                  ¿Tienes dudas? Escríbenos
                </p>
                <p
                  className="group-hover:text-[#25D366] transition-colors duration-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "white", lineHeight: 1.2 }}
                >
                  {WHATSAPP_NUMBER}
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.6rem", color: "#4A3A6A", letterSpacing: "0.15em", textTransform: "uppercase" }}>Explorar</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-4 h-4" style={{ color: "#4A3A6A" }} />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to top, #05030A, transparent)" }} />
    </section>
  );
}
