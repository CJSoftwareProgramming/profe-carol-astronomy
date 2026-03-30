/* StudentsSection — Sophia Academy en las Noticias
   Design: Sophia Academy brand — Fredoka One titles, Nunito body,
   solar orange #FB923C, stellar yellow #FFD23F, deep space bg transparent */

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const newsArticles = [
  {
    outlet: "La Nación",
    country: "🇦🇷 Argentina",
    date: "2 de octubre, 2025",
    headline: "Tiene cuatro años, sorprendió a una estudiante de astrofísica con sus conocimientos sobre el espacio y se volvió viral",
    excerpt: "\"Yo casi no tengo conversaciones así de profundas de astronomía. Las charlas que tú haces de astronomía son espectaculares\", expresó Carol Jiménez.",
    url: "https://www.lanacion.com.ar/lifestyle/en-las-redes/tiene-cuatro-anos-sorprendio-a-una-estudiante-de-astrofisica-con-sus-conocimientos-sobre-el-espacio-nid30092025/",
    color: "#FFD23F",
    logo: "LA NACIÓN",
  },
  {
    outlet: "24horas.cl — TVN",
    country: "🇨🇱 Chile",
    date: "5 de octubre, 2025",
    headline: "\"Vi ese tema en la universidad\": niño chileno de 4 años la rompe en TikTok hablando de astronomía",
    excerpt: "En un video con 6.4 millones de visualizaciones, Thomas logró captar la atención de Carol Jiménez, estudiante de astrofísica en la Universidad de Aberystwyth.",
    url: "https://www.24horas.cl/tendencias/redes-sociales/nino-chileno-4-anos-rompe-tiktok-astronomia",
    color: "#FB923C",
    logo: "24HORAS TVN",
  },
  {
    outlet: "BioBioChile",
    country: "🇨🇱 Chile",
    date: "9 de octubre, 2025",
    headline: "Niño chileno fanático de la astronomía dejó sin palabras a estudiante de astrofísica de Reino Unido",
    excerpt: "\"Guárdame esas clases para mí\", respondió Thomas. Carol: \"No te digo que yo soy tu fan\".",
    url: "https://www.biobiochile.cl/noticias/sociedad/historia/2025/10/09/nino-chileno-fanatico-de-la-astronomia-dejo-sin-palabras-a-estudiante-de-astrofisica-de-reino-unido.shtml",
    color: "#60A5FA",
    logo: "BIOBIOCHILE",
  },
  {
    outlet: "Infobae",
    country: "🌎 Internacional",
    date: "4 de octubre, 2025",
    headline: "Tiene solo cuatro años y sorprendió al demostrar cuánto sabe del espacio",
    excerpt: "Thomas, un pequeño de Chile, se volvió viral tras demostrar en TikTok su dominio sobre galaxias y agujeros negros, cautivando a millones.",
    url: "https://www.infobae.com/virales/2025/10/04/tiene-solo-cuatro-anos-y-sorprendio-al-demostrar-cuanto-sabe-del-espacio/",
    color: "#34D399",
    logo: "INFOBAE",
  },
  {
    outlet: "Radio Sudamericana",
    country: "🌎 Internacional",
    date: "2 de octubre, 2025",
    headline: "Tiene solo 4 años y deja sin palabras a una estudiante de astrofísica",
    excerpt: "En un vídeo que rápidamente se ha hecho viral, Thomas conversa con Carol Jiménez, estudiante de astrofísica en la Universidad de Aberystwyth.",
    url: "https://www.radiosudamericana.com/m/sociedad/333923-Tiene-solo-4-anos-y-deja-sin-palabras-a-una-estudiante-de-astrofisica.htm",
    color: "#F472B6",
    logo: "RADIO SUDAMERICANA",
  },
  {
    outlet: "Thiago Rubino — Biblioteca Nacional",
    country: "🇵🇦 Panamá",
    date: "2025",
    headline: "\"Vivo en otro planeta\" de Thiago Rubino ya forma parte de la Biblioteca Nacional de Panamá",
    excerpt: "Thiago Rubino García, explorador cósmico de 9 años, publicó su libro de astronomía para niños que ahora está disponible en la Biblioteca Nacional.",
    url: "https://www.instagram.com/p/DVyo6cdEa_J/",
    color: "#A78BFA",
    logo: "BIBLIOTECA NACIONAL",
  },
];

export default function StudentsSection() {
  return (
    <section
      id="noticias"
      style={{
        padding: "100px 0",
        position: "relative",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(251,146,60,0.12)",
            border: "1px solid rgba(251,146,60,0.3)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "20px",
          }}>
            <span style={{ fontSize: "18px" }}>📰</span>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: "#FB923C", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Prensa Internacional
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(38px, 5vw, 60px)",
            color: "#FFF8F0",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}>
            Sophia Academy{" "}
            <span style={{ color: "#FB923C" }}>en las noticias</span>
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(17px, 2vw, 20px)",
            color: "rgba(255,248,240,0.7)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Medios de comunicación de toda América Latina y el mundo han cubierto el impacto de la Profe Carol y sus estudiantes.
          </p>
        </motion.div>

        {/* News cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "24px",
        }}>
          {newsArticles.map((article, i) => (
            <motion.a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                display: "block",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${article.color}30`,
                borderRadius: "20px",
                padding: "28px",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: `linear-gradient(90deg, ${article.color}, transparent)`,
                borderRadius: "20px 20px 0 0",
              }} />

              {/* Outlet badge + date */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
                <div style={{
                  background: `${article.color}20`,
                  border: `1px solid ${article.color}50`,
                  borderRadius: "8px",
                  padding: "4px 12px",
                }}>
                  <span style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "13px",
                    color: article.color,
                    letterSpacing: "0.05em",
                  }}>
                    {article.logo}
                  </span>
                </div>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,248,240,0.45)",
                }}>
                  {article.country} · {article.date}
                </span>
              </div>

              {/* Headline */}
              <h3 style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "#FFF8F0",
                lineHeight: 1.3,
                marginBottom: "12px",
              }}>
                {article.headline}
              </h3>

              {/* Excerpt */}
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "15px",
                color: "rgba(255,248,240,0.65)",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}>
                {article.excerpt}
              </p>

              {/* Read more link */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: article.color,
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
              }}>
                <span>Leer artículo completo</span>
                <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            fontFamily: "'Nunito', sans-serif",
            fontSize: "15px",
            color: "rgba(255,248,240,0.45)",
            marginTop: "48px",
          }}
        >
          📡 Cobertura en medios de Argentina, Chile, Panamá y más de 10 países.
        </motion.p>
      </div>
    </section>
  );
}
