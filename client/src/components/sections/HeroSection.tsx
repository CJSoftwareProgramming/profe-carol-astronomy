/* HeroSection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — full-bleed dark nebula hero with animated stars
   Key message: Astronomía para niños 4-12 años, clases en vivo, cupos limitados
   WhatsApp number prominently displayed */
import { motion } from "framer-motion";
import StarField from "../StarField";
import { Rocket, Star, Users, Clock, MessageCircle } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/hero-nebula-DgF7eKHNQqftZQqY85Rctg.webp";

const WHATSAPP_NUMBER = "+44 7462 994908";
const WHATSAPP_LINK = "https://wa.me/447462994908";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03071E]/95 via-[#03071E]/80 to-[#03071E]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03071E] via-transparent to-[#03071E]/30" />

      {/* Animated star field overlay */}
      <StarField className="opacity-60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#4CC9F0] animate-pulse" />
            <span className="font-['Outfit'] text-[#4CC9F0] text-xs font-semibold tracking-[0.15em] uppercase">
              Academia Internacional · Cupos Limitados
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['Outfit'] text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4"
            style={{ fontWeight: 900 }}
          >
            Astronomía
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CC9F0] to-[#90E0EF]">
              para Niños
            </span>
          </motion.h1>

          {/* Age badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#F4A261]/15 border border-[#F4A261]/40 rounded-lg px-4 py-2 mb-6"
          >
            <Users className="w-4 h-4 text-[#F4A261]" />
            <span className="font-['Outfit'] text-[#F4A261] text-sm" style={{ fontWeight: 700 }}>
              Diseñado para niños de 4 a 12 años
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-['Crimson_Pro'] text-xl md:text-2xl text-[#B8D4E8] leading-relaxed mb-8 max-w-2xl"
          >
            Explora el universo con clases en vivo, experimentos y misiones espaciales.
            Una academia inspirada en la NASA para los científicos del futuro.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            {[
              { icon: <Star className="w-4 h-4" />, text: "Clases en vivo" },
              { icon: <Rocket className="w-4 h-4" />, text: "Experimentos espaciales" },
              { icon: <Clock className="w-4 h-4" />, text: "Horarios flexibles" },
              { icon: <Users className="w-4 h-4" />, text: "Máx. 15 estudiantes" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[#8BA3C7]">
                <span className="text-[#4CC9F0]">{item.icon}</span>
                <span className="font-['Outfit'] text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="#precios"
              className="btn-amber px-8 py-4 rounded-full text-base font-['Outfit'] text-white inline-flex items-center gap-2 shadow-lg"
              style={{ fontWeight: 700 }}
            >
              <Rocket className="w-5 h-5" />
              Reservar Cupo Ahora
            </a>
            <a
              href="#programas"
              className="px-8 py-4 rounded-full text-base font-['Outfit'] text-white border border-white/20 hover:border-[#4CC9F0]/50 hover:bg-[#4CC9F0]/10 transition-all duration-300 inline-flex items-center gap-2"
              style={{ fontWeight: 600 }}
            >
              Ver Programas
            </a>
          </motion.div>

          {/* WhatsApp — prominent display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] group-hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-['Outfit'] text-[10px] text-[#8BA3C7] uppercase tracking-widest leading-tight">
                  ¿Tienes dudas? Escríbenos
                </p>
                <p className="font-['Outfit'] text-xl font-black text-white group-hover:text-[#25D366] transition-colors duration-300 leading-tight" style={{ fontWeight: 900 }}>
                  {WHATSAPP_NUMBER}
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#03071E] to-transparent" />
    </section>
  );
}
