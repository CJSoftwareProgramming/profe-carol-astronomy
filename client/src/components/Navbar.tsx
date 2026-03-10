/* Navbar v2 — Deep Field Observatory design
   Glassmorphic dark navbar with violet/cyan accents, Space Grotesk font */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Telescope } from "lucide-react";

const navLinks = [
  { label: "Programas", href: "#programas" },
  { label: "Precios", href: "#precios" },
  { label: "Talleres", href: "#talleres" },
  { label: "Sobre Carol", href: "#profesora" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(5,3,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(123,47,190,0.2)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #7B2FBE, #00D4FF)", boxShadow: "0 0 15px rgba(123,47,190,0.4)" }}
              >
                <Telescope className="w-4 h-4 text-white" />
              </div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white", lineHeight: 1.1 }}>
                  Profe Carol
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.55rem", color: "#9B4DDE", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Astrophysics Academy
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.85rem", color: "#B8A9D9" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#00D4FF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#B8A9D9")}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNav("#precios")}
                className="btn-violet px-5 py-2.5 rounded-full text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}
              >
                Reservar Cupo
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: "#B8A9D9" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 py-4 px-4"
            style={{ background: "rgba(10,5,20,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(123,47,190,0.2)" }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/5"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.95rem", color: "#B8A9D9" }}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 px-4">
              <button
                onClick={() => handleNav("#precios")}
                className="btn-violet w-full py-3 rounded-full text-white text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                Reservar Cupo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
