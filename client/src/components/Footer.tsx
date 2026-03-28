/* Footer — Sophia Academy Brand
   Font: Fredoka One (logo) + Nunito (links/text)
   Colors: #FB923C solar, #FFD23F stellar, transparent bg */

import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      position: "relative",
      zIndex: 2,
      borderTop: "1px solid rgba(251,146,60,0.12)",
      background: "rgba(2,4,8,0.90)",
      backdropFilter: "blur(20px)",
      padding: "64px 0 32px",
    }}>
      <div className="container">
        <div
          style={{ display: "grid", gap: "40px", marginBottom: "48px" }}
          className="grid grid-cols-1 md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                background: "radial-gradient(circle, #FFF9C4, #FFE84D, #FFB800, #FF8C00)",
                boxShadow: "0 0 18px rgba(255,140,0,0.5)",
                flexShrink: 0,
              }} />
              <div>
                <span style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "18px",
                  color: "#FFF8F0",
                  display: "block",
                  lineHeight: 1.1,
                }}>
                  Sophia <span style={{ color: "#FB923C" }}>Academy</span>
                </span>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "rgba(255,248,240,0.40)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}>
                  Astrofísica para Niños
                </span>
              </div>
            </div>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,248,240,0.50)",
              lineHeight: 1.7,
              maxWidth: "260px",
            }}>
              Academia internacional de astronomía para niños de 4 a 12 años.
              Explorando el universo, una clase a la vez.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "11px",
              fontWeight: 800,
              color: "#FB923C",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}>
              Navegación
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Programas", href: "#programas" },
                { label: "Académico", href: "#academico" },
                { label: "Paquetes de Clases", href: "#precios" },
                { label: "Talleres Mensuales", href: "#talleres" },
                { label: "Sobre la Profesora", href: "#profesora" },
                { label: "Preguntas Frecuentes", href: "#faq" },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "rgba(255,248,240,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FB923C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,248,240,0.55)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "11px",
              fontWeight: 800,
              color: "#FB923C",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}>
              Contacto
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a
                href="https://wa.me/447462994908"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
              >
                <div style={{
                  width: "38px", height: "38px", borderRadius: "12px",
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <MessageCircle size={16} style={{ color: "#25D366" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", color: "rgba(255,248,240,0.40)", fontWeight: 600 }}>WhatsApp</p>
                  <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: "16px", color: "#FFF8F0" }}>+44 7462 994908</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/profe_carol_astrophysics"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
              >
                <div style={{
                  width: "38px", height: "38px", borderRadius: "12px",
                  background: "rgba(225,48,108,0.12)",
                  border: "1px solid rgba(225,48,108,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Instagram size={16} style={{ color: "#E1306C" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", color: "rgba(255,248,240,0.40)", fontWeight: 600 }}>Instagram</p>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, color: "#FFF8F0" }}>@profe_carol_astrophysics</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(251,146,60,0.10)",
          paddingTop: "24px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "12px",
            color: "rgba(255,248,240,0.28)",
            fontWeight: 600,
          }}>
            © 2026 Sophia Academy. Todos los derechos reservados.
          </p>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "12px",
            color: "rgba(255,248,240,0.28)",
            fontWeight: 600,
          }}>
            Astronomía para niños · Educación científica real
          </p>
        </div>
      </div>
    </footer>
  );
}
