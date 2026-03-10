/* Footer — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — dark footer with links and social */
import { Telescope, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020510] border-t border-[#4CC9F0]/10 py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4CC9F0] to-[#0077B6] flex items-center justify-center shadow-[0_0_15px_rgba(76,201,240,0.4)]">
                <Telescope className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-['Outfit'] font-800 text-white text-base leading-tight block" style={{ fontWeight: 800 }}>
                  Profe Carol
                </span>
                <span className="text-[#4CC9F0] text-[10px] font-['Outfit'] font-semibold tracking-[0.15em] uppercase leading-tight block">
                  Astrophysics Academy
                </span>
              </div>
            </div>
            <p className="font-['Crimson_Pro'] text-sm text-[#8BA3C7] leading-relaxed max-w-xs">
              Academia internacional de astronomía para niños de 4 a 12 años.
              Explorando el universo, una clase a la vez.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-['Outfit'] text-xs font-semibold text-[#4CC9F0] uppercase tracking-wider mb-4">
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
                    className="font-['Outfit'] text-sm text-[#8BA3C7] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-['Outfit'] text-xs font-semibold text-[#4CC9F0] uppercase tracking-wider mb-4">
              Contacto
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/447462994908"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-['Outfit'] text-xs text-[#8BA3C7]">WhatsApp</p>
                  <p className="font-['Outfit'] text-sm text-white font-medium">+44 7462 994908</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/profe_carol_astrophysics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#E1306C]/10 flex items-center justify-center group-hover:bg-[#E1306C]/20 transition-colors">
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                </div>
                <div>
                  <p className="font-['Outfit'] text-xs text-[#8BA3C7]">Instagram</p>
                  <p className="font-['Outfit'] text-sm text-white font-medium">@profe_carol_astrophysics</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#4CC9F0]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-['Outfit'] text-xs text-[#4A6080]">
            © 2026 Profe Carol Astrophysics Academy. Todos los derechos reservados.
          </p>
          <p className="font-['Outfit'] text-xs text-[#4A6080]">
            Astronomía para niños · Educación científica real · Cupos limitados
          </p>
        </div>
      </div>
    </footer>
  );
}
