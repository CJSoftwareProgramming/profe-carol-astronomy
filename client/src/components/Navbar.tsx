/* Navbar — Profe Carol Astrophysics Academy
   Design: Cosmic Academy — dark, elegant, transparent top nav with blur */
import { useState, useEffect } from "react";
import { Telescope } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Programas", href: "#programas" },
    { label: "Precios", href: "#precios" },
    { label: "Talleres", href: "#talleres" },
    { label: "Sobre Carol", href: "#profesora" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#03071E]/95 backdrop-blur-md border-b border-[#4CC9F0]/10 shadow-[0_4px_30px_rgba(76,201,240,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4CC9F0] to-[#0077B6] flex items-center justify-center shadow-[0_0_15px_rgba(76,201,240,0.4)] group-hover:shadow-[0_0_25px_rgba(76,201,240,0.6)] transition-all duration-300">
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
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['Outfit'] text-sm font-medium text-[#8BA3C7] hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#4CC9F0] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#precios"
              className="btn-amber px-5 py-2.5 rounded-full text-sm font-['Outfit'] font-700 text-white inline-block"
              style={{ fontWeight: 700 }}
            >
              Reservar Cupo
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#03071E]/98 backdrop-blur-xl border-t border-[#4CC9F0]/10 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-['Outfit'] text-base font-medium text-[#8BA3C7] hover:text-white py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#precios"
            onClick={() => setMenuOpen(false)}
            className="btn-amber px-5 py-3 rounded-full text-sm font-['Outfit'] font-700 text-white inline-block w-full text-center mt-2"
            style={{ fontWeight: 700 }}
          >
            Reservar Cupo
          </a>
        </div>
      )}
    </nav>
  );
}
