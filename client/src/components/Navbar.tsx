/* Navbar — Sophia Academy Brand
   Font: Fredoka One (logo) + Nunito (nav links)
   Colors: #020408 bg, #FB923C solar, #FFD23F stellar
   Glass: rgba(2,4,8,0.85) + blur(20px) */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Programas", href: "#programas" },
  { label: "Académico", href: "#academico" },
  { label: "Precios", href: "#precios" },
  { label: "Talleres", href: "#talleres" },
  { label: "Profe Carol", href: "#profesora" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(2,4,8,0.92)" : "rgba(2,4,8,0.70)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(251,146,60,0.15)" : "1px solid rgba(255,255,255,0.05)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo */}
          <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{
              width: "38px", height: "38px", borderRadius: "50%",
              background: "radial-gradient(circle, #FFF9C4, #FFE84D, #FFB800, #FF8C00)",
              boxShadow: "0 0 16px rgba(255,140,0,0.5)",
              flexShrink: 0,
            }} />
            <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: "20px", lineHeight: 1 }}>
              <span style={{ color: "#FFF8F0" }}>Sophia</span>
              <span style={{ color: "#FB923C" }}> Academy</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "2px" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(255,248,240,0.70)",
                  textDecoration: "none",
                  padding: "6px 11px",
                  borderRadius: "20px",
                  transition: "color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#FB923C";
                  el.style.background = "rgba(251,146,60,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "rgba(255,248,240,0.70)";
                  el.style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              href="#precios"
              className="btn-solar hidden md:inline-flex"
              style={{ padding: "10px 18px", fontSize: "14px" }}
            >
              🚀 Ver Paquetes
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              style={{ background: "none", border: "none", color: "#FFF8F0", padding: "4px", display: "flex", alignItems: "center" }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: "rgba(2,4,8,0.97)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(251,146,60,0.12)",
          padding: "16px",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontFamily: "'Nunito', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                color: "rgba(255,248,240,0.85)",
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: "12px",
                marginBottom: "4px",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#precios"
            onClick={() => setMobileOpen(false)}
            className="btn-solar"
            style={{ display: "block", textAlign: "center", marginTop: "12px" }}
          >
            🚀 Ver Paquetes
          </a>
        </div>
      )}
    </nav>
  );
}
