/* Footer v2 — Deep Field Observatory design */
import { Telescope, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#03010A", borderTop: "1px solid rgba(123,47,190,0.15)" }} className="py-14">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7B2FBE, #00D4FF)", boxShadow: "0 0 15px rgba(123,47,190,0.4)" }}
              >
                <Telescope className="w-4 h-4 text-white" />
              </div>
              <div>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white", display: "block", lineHeight: 1.1 }}>
                  Profe Carol
                </span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.55rem", color: "#9B4DDE", letterSpacing: "0.12em", textTransform: "uppercase", display: "block" }}>
                  Astrophysics Academy
                </span>
              </div>
            </div>
            <p style={{ fontFamily: "'Lora', serif", fontSize: "0.875rem", color: "#7A6B9A", lineHeight: 1.7, maxWidth: "260px" }}>
              Academia internacional de astronomía para niños de 4 a 12 años. Explorando el universo, una clase a la vez.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "#7B2FBE", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
              Navegación
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Programas", href: "#programas" },
                { label: "Paquetes de Clases", href: "#precios" },
                { label: "Talleres Mensuales", href: "#talleres" },
                { label: "Sobre la Profesora", href: "#profesora" },
                { label: "Preguntas Frecuentes", href: "#faq" },
                { label: "Inscripción", href: "#inscripcion" },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", color: "#7A6B9A", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C4B5E0")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#7A6B9A")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "#7B2FBE", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
              Contacto
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/447462994908"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200" style={{ background: "rgba(37,211,102,0.1)" }}>
                  <MessageCircle className="w-4 h-4" style={{ color: "#25D366" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", color: "#4A3A6A" }}>WhatsApp</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", color: "white", fontWeight: 600 }}>+44 7462 994908</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/profe_carol_astrophysics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200" style={{ background: "rgba(225,48,108,0.1)" }}>
                  <Instagram className="w-4 h-4" style={{ color: "#E1306C" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", color: "#4A3A6A" }}>Instagram</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", color: "white", fontWeight: 600 }}>@profe_carol_astrophysics</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(123,47,190,0.1)" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "#3A2A5A" }}>
            © 2026 Profe Carol Astrophysics Academy. Todos los derechos reservados.
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "#3A2A5A" }}>
            Astronomía para niños · Educación científica real · Cupos limitados
          </p>
        </div>
      </div>
    </footer>
  );
}
