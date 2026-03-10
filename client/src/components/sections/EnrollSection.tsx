/* EnrollSection v2 — Deep Field Observatory design */
import { motion } from "framer-motion";
import { Rocket, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const GALAXY_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/hero-galaxy-new-mfg3LtxrXAV6g9ysyMM4mV.webp";

export default function EnrollSection() {
  const [form, setForm] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    email: "",
    whatsapp: "",
    country: "",
    program: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Solicitud enviada! Te contactaremos en menos de 24 horas.", {
      description: "Revisa tu correo electrónico y WhatsApp.",
    });
    setForm({ childName: "", childAge: "", parentName: "", email: "", whatsapp: "", country: "", program: "", message: "" });
  };

  const inputClass = "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A3A6A] focus:outline-none transition-all duration-200";
  const inputStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(123,47,190,0.25)",
  };
  const inputFocusStyle = "focus:border-[#7B2FBE] focus:ring-1 focus:ring-[#7B2FBE]/30";

  return (
    <section id="inscripcion" className="relative py-28 overflow-hidden" style={{ background: "var(--cosmos-deep)" }}>
      {/* Galaxy background */}
      <div className="absolute inset-0">
        <img src={GALAXY_BG} alt="" className="w-full h-full object-cover opacity-8" style={{ opacity: 0.08 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,5,20,0.97) 0%, rgba(10,5,20,0.9) 100%)" }} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-4">Inscripción</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              ¡Reserva el cupo
              <br />
              <span className="cosmic-shimmer">de tu explorador!</span>
            </h2>
            <p style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", color: "#C4B5E0", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              Los cupos son limitados para garantizar atención personalizada. Inscribe a tu hijo hoy y comienza su viaje al universo.
            </p>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "#7A6B9A", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                ¿Qué pasa después?
              </p>
              {[
                "Te contactamos en menos de 24 horas",
                "Coordinamos el horario ideal para tu hijo",
                "Accedes a tu primera clase de prueba",
                "¡Comienza la aventura espacial!",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)" }}
                  >
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#00D4FF" }}>{i + 1}</span>
                  </div>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", color: "#C4B5E0" }}>{step}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447462994908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)" }}
            >
              <MessageCircle className="w-5 h-5" style={{ color: "#25D366" }} />
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "white" }}>WhatsApp directo</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#25D366" }}>+44 7462 994908</p>
              </div>
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="rounded-3xl p-8"
              style={{ background: "linear-gradient(145deg, rgba(123,47,190,0.1) 0%, rgba(10,5,20,0.9) 100%)", border: "1px solid rgba(123,47,190,0.25)", boxShadow: "0 0 50px rgba(123,47,190,0.1)" }}
            >
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "white", marginBottom: "1.5rem" }}>
                Formulario de Inscripción
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A", fontWeight: 600, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Nombre del niño *
                    </label>
                    <input name="childName" value={form.childName} onChange={handleChange} required placeholder="Nombre" className={`${inputClass} ${inputFocusStyle}`} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A", fontWeight: 600, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Edad *
                    </label>
                    <input name="childAge" value={form.childAge} onChange={handleChange} required placeholder="Ej: 8 años" className={`${inputClass} ${inputFocusStyle}`} style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A", fontWeight: 600, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Tu nombre (padre/madre) *
                  </label>
                  <input name="parentName" value={form.parentName} onChange={handleChange} required placeholder="Tu nombre completo" className={`${inputClass} ${inputFocusStyle}`} style={inputStyle} />
                </div>

                <div>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A", fontWeight: 600, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Correo electrónico *
                  </label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="tu@correo.com" className={`${inputClass} ${inputFocusStyle}`} style={inputStyle} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A", fontWeight: 600, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      WhatsApp *
                    </label>
                    <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required placeholder="+57 300 000 0000" className={`${inputClass} ${inputFocusStyle}`} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A", fontWeight: 600, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      País *
                    </label>
                    <input name="country" value={form.country} onChange={handleChange} required placeholder="Tu país" className={`${inputClass} ${inputFocusStyle}`} style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A", fontWeight: 600, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Programa de interés *
                  </label>
                  <select name="program" value={form.program} onChange={handleChange} required className={`${inputClass} ${inputFocusStyle}`} style={inputStyle}>
                    <option value="" disabled>Selecciona un programa</option>
                    <option value="recreacional-basico">Recreacional Básico — $28/mes ($7/clase)</option>
                    <option value="recreacional-explorador">Recreacional Explorador — $49/mes ($6/clase)</option>
                    <option value="recreacional-avanzado">Recreacional Avanzado — $59/mes ($5/clase)</option>
                    <option value="academico-esencial">Académico Esencial — $60/mes</option>
                    <option value="academico-completo">Académico Completo — $80/mes</option>
                    <option value="academico-homeschool">Homeschool — $100/mes</option>
                    <option value="taller">Taller Mensual — $30</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#7A6B9A", fontWeight: 600, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Mensaje adicional (opcional)
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Cuéntanos algo sobre tu hijo o tus preguntas..." className={`${inputClass} ${inputFocusStyle} resize-none`} style={inputStyle} />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-xl text-base flex items-center justify-center gap-2 mt-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#0A0514" }}
                >
                  <Rocket className="w-5 h-5" />
                  Inscribir a mi Hijo
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
