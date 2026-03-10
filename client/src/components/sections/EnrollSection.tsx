/* EnrollSection — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — final CTA with enrollment form */
import { motion } from "framer-motion";
import { Rocket, Send, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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

  const inputClass = "w-full bg-[#0A1628] border border-[#4CC9F0]/20 rounded-xl px-4 py-3 font-['Outfit'] text-sm text-white placeholder-[#4A6080] focus:outline-none focus:border-[#4CC9F0]/60 focus:ring-1 focus:ring-[#4CC9F0]/30 transition-all duration-200";

  return (
    <section id="inscripcion" className="relative bg-[#050D1E] py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#4CC9F0]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-3">Inscripción</p>
            <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white leading-tight mb-6" style={{ fontWeight: 900 }}>
              ¡Reserva el cupo
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] to-[#FFB347]">
                de tu explorador!
              </span>
            </h2>
            <p className="font-['Crimson_Pro'] text-xl text-[#B8D4E8] leading-relaxed mb-8">
              Los cupos son limitados para garantizar atención personalizada.
              Inscribe a tu hijo hoy y comienza su viaje al universo.
            </p>

            {/* What happens next */}
            <div className="space-y-4 mb-8">
              <p className="font-['Outfit'] text-xs font-semibold text-[#8BA3C7] uppercase tracking-wider">
                ¿Qué pasa después de inscribirte?
              </p>
              {[
                "Te contactamos en menos de 24 horas",
                "Coordinamos el horario ideal para tu hijo",
                "Accedes a tu primera clase de prueba",
                "¡Comienza la aventura espacial!",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#4CC9F0]/15 border border-[#4CC9F0]/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-['Outfit'] text-xs font-black text-[#4CC9F0]" style={{ fontWeight: 900 }}>{i + 1}</span>
                  </div>
                  <span className="font-['Outfit'] text-sm text-[#B8D4E8]">{step}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447462994908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366]/15 border border-[#25D366]/30 rounded-2xl px-5 py-4 hover:bg-[#25D366]/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-[#25D366]" />
              <div>
                <p className="font-['Outfit'] text-sm font-700 text-white" style={{ fontWeight: 700 }}>WhatsApp directo</p>
                <p className="font-['Outfit'] text-xs text-[#25D366]">+44 7462 994908</p>
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
            <div className="cosmic-card rounded-3xl p-8 border border-[#4CC9F0]/20">
              <h3 className="font-['Outfit'] text-xl font-black text-white mb-6" style={{ fontWeight: 900 }}>
                Formulario de Inscripción
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Outfit'] text-xs text-[#8BA3C7] font-medium mb-1.5 block">
                      Nombre del niño *
                    </label>
                    <input
                      name="childName"
                      value={form.childName}
                      onChange={handleChange}
                      required
                      placeholder="Nombre del niño"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-['Outfit'] text-xs text-[#8BA3C7] font-medium mb-1.5 block">
                      Edad del niño *
                    </label>
                    <input
                      name="childAge"
                      value={form.childAge}
                      onChange={handleChange}
                      required
                      placeholder="Ej: 8 años"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-['Outfit'] text-xs text-[#8BA3C7] font-medium mb-1.5 block">
                    Tu nombre (padre/madre) *
                  </label>
                  <input
                    name="parentName"
                    value={form.parentName}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-['Outfit'] text-xs text-[#8BA3C7] font-medium mb-1.5 block">
                    Correo electrónico *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@correo.com"
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Outfit'] text-xs text-[#8BA3C7] font-medium mb-1.5 block">
                      WhatsApp *
                    </label>
                    <input
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      required
                      placeholder="+57 300 000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-['Outfit'] text-xs text-[#8BA3C7] font-medium mb-1.5 block">
                      País *
                    </label>
                    <input
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      required
                      placeholder="Tu país"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-['Outfit'] text-xs text-[#8BA3C7] font-medium mb-1.5 block">
                    Programa de interés *
                  </label>
                  <select
                    name="program"
                    value={form.program}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>Selecciona un programa</option>
                    <option value="recreacional-basico">Recreacional Básico — $28/mes</option>
                    <option value="recreacional-explorador">Recreacional Explorador — $49/mes</option>
                    <option value="recreacional-avanzado">Recreacional Avanzado — $59/mes</option>
                    <option value="academico-esencial">Académico Esencial — $60/mes</option>
                    <option value="academico-completo">Académico Completo — $80/mes</option>
                    <option value="academico-homeschool">Homeschool — $100/mes</option>
                    <option value="taller">Taller Mensual — $30</option>
                  </select>
                </div>

                <div>
                  <label className="font-['Outfit'] text-xs text-[#8BA3C7] font-medium mb-1.5 block">
                    Mensaje adicional (opcional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Cuéntanos algo sobre tu hijo o tus preguntas..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-amber w-full py-4 rounded-xl text-base font-['Outfit'] text-white flex items-center justify-center gap-2 mt-2"
                  style={{ fontWeight: 700 }}
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
