/* StudentsSection — Sophia Academy en las Noticias
   Design: Sophia Academy brand — Fredoka One titles, Nunito body,
   solar orange #FB923C, stellar yellow #FFD23F, deep space bg transparent
   All articles are REAL verified news coverage */

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const newsArticles = [
  {
    outlet: "Prensa Libre",
    logo: "PRENSA LIBRE",
    country: "🇬🇹 Guatemala",
    date: "2025",
    headline: "Plataforma gratuita permite a niños seguir en vivo la misión Artemis II de la NASA",
    excerpt: "Carol Jiménez, profesora de astronomía y astrofísica, presenta su plataforma educativa para que niños de todo el mundo sigan en vivo el lanzamiento de Artemis II.",
    url: "https://www.prensalibre.com/vida/salud-y-familia/plataforma-gratuita-permite-a-ninos-seguir-en-vivo-la-mision-artemis-ii-de-la-nasa/",
    color: "#FB923C",
    tag: "Profe Carol",
  },
  {
    outlet: "La Nación",
    logo: "LA NACIÓN",
    country: "🇦🇷 Argentina",
    date: "2 oct 2025",
    headline: "Tiene cuatro años, sorprendió a una estudiante de astrofísica con sus conocimientos sobre el espacio",
    excerpt: "\"Yo casi no tengo conversaciones así de profundas de astronomía. Las charlas que tú haces son espectaculares\", expresó Carol Jiménez. El video alcanzó 6.4 millones de vistas.",
    url: "https://www.lanacion.com.ar/lifestyle/en-las-redes/tiene-cuatro-anos-sorprendio-a-una-estudiante-de-astrofisica-con-sus-conocimientos-sobre-el-espacio-nid30092025/",
    color: "#FFD23F",
    tag: "Thomas · 4 años · Chile 🇨🇱",
  },
  {
    outlet: "24horas TVN",
    logo: "24HORAS TVN",
    country: "🇨🇱 Chile",
    date: "5 oct 2025",
    headline: '"Vi ese tema en la universidad": niño chileno de 4 años la rompe en TikTok con astronomía',
    excerpt: "El canal estatal chileno TVN cubre la historia viral de Thomas y su encuentro con Carol Jiménez, estudiante de astrofísica en la Universidad de Aberystwyth, Reino Unido.",
    url: "https://www.24horas.cl/tendencias/redes-sociales/nino-chileno-4-anos-rompe-tiktok-astronomia",
    color: "#FB923C",
    tag: "Thomas · 4 años · Chile 🇨🇱",
  },
  {
    outlet: "Noticias Caracol",
    logo: "CARACOL TV",
    country: "🇨🇴 Colombia",
    date: "oct 2025",
    headline: "Tiene 4 años y sorprendió a estudiante de astrofísica con sus respuestas del espacio",
    excerpt: "El canal colombiano Caracol cubre la historia de Thomas y cómo Carol Jiménez, inspirada por su talento, lo contactó para guiarlo en su camino científico.",
    url: "https://www.noticiascaracol.com/lomastrinado/video-tiene-4-anos-y-sorprendio-a-estudiante-de-astrofisica-con-sus-respuestas-del-espacio-rg10",
    color: "#60A5FA",
    tag: "Thomas · 4 años · Chile 🇨🇱",
  },
  {
    outlet: "BioBioChile",
    logo: "BIOBIOCHILE",
    country: "🇨🇱 Chile",
    date: "9 oct 2025",
    headline: "Niño chileno fanático de la astronomía dejó sin palabras a estudiante de astrofísica de Reino Unido",
    excerpt: "\"Guárdame esas clases para mí\", respondió Thomas. Carol: \"No te digo que yo soy tu fan\". BioBioChile destaca el fenómeno viral que traspasó fronteras.",
    url: "https://www.biobiochile.cl/noticias/sociedad/historia/2025/10/09/nino-chileno-fanatico-de-la-astronomia-dejo-sin-palabras-a-estudiante-de-astrofisica-de-reino-unido.shtml",
    color: "#34D399",
    tag: "Thomas · 4 años · Chile 🇨🇱",
  },
  {
    outlet: "El Imparcial",
    logo: "EL IMPARCIAL",
    country: "🇲🇽 México",
    date: "15 oct 2025",
    headline: "Astrónoma se vuelve viral por emocionarse al platicar con un niño de 4 años con sorprendente conocimiento",
    excerpt: "El Imparcial de México cubre la emotiva videollamada entre Carol Jiménez y Thomas que conquistó a millones en redes sociales de toda América Latina.",
    url: "https://www.elimparcial.com/locurioso/2025/10/15/astronoma-se-vuelve-viral-por-emocionarse-al-platicar-con-un-nino-de-4-anos-con-sorprendente-conocimiento-sobre-el-espacio/",
    color: "#F472B6",
    tag: "Thomas · 4 años · Chile 🇨🇱",
  },
  {
    outlet: "Infobae",
    logo: "INFOBAE",
    country: "🌎 Internacional",
    date: "4 oct 2025",
    headline: "Tiene solo cuatro años y sorprendió al demostrar cuánto sabe del espacio",
    excerpt: "Thomas, un pequeño de Chile, se volvió viral tras demostrar en TikTok su dominio sobre galaxias y agujeros negros, cautivando a millones en todo el mundo.",
    url: "https://www.infobae.com/virales/2025/10/04/tiene-solo-cuatro-anos-y-sorprendio-al-demostrar-cuanto-sabe-del-espacio/",
    color: "#FFD23F",
    tag: "Thomas · 4 años · Chile 🇨🇱",
  },
  {
    outlet: "Azteca Laguna",
    logo: "AZTECA LAGUNA",
    country: "🇲🇽 México",
    date: "oct 2025",
    headline: "¿Quién es Soyastromas, el niño genio que enseña astronomía en TikTok?",
    excerpt: "Thomas (@soyastromas), el niño chileno tutelado por Carol Jiménez, se convierte en referente de la divulgación científica infantil en toda América Latina.",
    url: "https://www.aztecalaguna.com/viral-y/notas/soyastromas-quien-es-nino-que-ensena-astrofisica-en-tiktok",
    color: "#FB923C",
    tag: "Thomas · 4 años · Chile 🇨🇱",
  },
  {
    outlet: "Radio Sudamericana",
    logo: "RADIO SUDAMERICANA",
    country: "🇦🇷 Argentina",
    date: "2 oct 2025",
    headline: "Tiene solo 4 años y deja sin palabras a una estudiante de astrofísica",
    excerpt: "En un vídeo que rápidamente se ha hecho viral, Thomas conversa con Carol Jiménez, estudiante de astrofísica en la Universidad de Aberystwyth, Reino Unido.",
    url: "https://www.radiosudamericana.com/m/sociedad/333923-Tiene-solo-4-anos-y-deja-sin-palabras-a-una-estudiante-de-astrofisica.htm",
    color: "#60A5FA",
    tag: "Thomas · 4 años · Chile 🇨🇱",
  },
  {
    outlet: "ATB Bolivia",
    logo: "ATB BOLIVIA",
    country: "🇧🇴 Bolivia",
    date: "5 oct 2025",
    headline: "Tiene solo cuatro años y sorprendió al demostrar cuánto sabe del espacio",
    excerpt: "ATB, canal boliviano, destaca cómo Thomas, de solo 4 años, traspasó fronteras con su pasión por la astronomía y fue contactado por Carol Jiménez desde el Reino Unido.",
    url: "https://www.atb.com.bo/2025/10/05/tiene-solo-cuatro-anos-y-sorprendio-al-demostrar-cuanto-sabe-del-espacio/",
    color: "#34D399",
    tag: "Thomas · 4 años · Chile 🇨🇱",
  },
  {
    outlet: "El Diario",
    logo: "EL DIARIO",
    country: "🇻🇪 Venezuela",
    date: "7 sep 2025",
    headline: "Mateo Pérez, el niño venezolano de 7 años que ganó medalla de plata en la Olimpiada Internacional de Geometría 2025",
    excerpt: "Mateo se preparó durante 2 meses con la profesora Carol Jiménez, estudiante venezolana de astrofísica en el Reino Unido, quien lo guió en matemáticas, física y astronomía.",
    url: "https://eldiario.com/2025/09/07/mateo-perez-nino-venezolano-gano-medalla-plata-olimpiada-internacional-geometria-2025/",
    color: "#FFD23F",
    tag: "Mateo Pérez · 7 años · Venezuela 🇻🇪",
  },
  {
    outlet: "Red HNNA",
    logo: "RED HNNA",
    country: "🇻🇪 Venezuela",
    date: "sep 2025",
    headline: "Mateo Pérez, el niño venezolano de 7 años que ganó medalla de plata en la Olimpiada Internacional de Geometría 2025",
    excerpt: '"Carol es una venezolana estudiante de astrofísica allí en ese país y es profesora de Mateo en matemática avanzada, y además le da clase de astronomía."',
    url: "https://www.redhnna.org/noticias/mateo-perez-el-nino-venezolano-de-7-anos-que-gano-medalla-de-plata-en-la-olimpiada-internacional-de-geometria-2025",
    color: "#FB923C",
    tag: "Mateo Pérez · 7 años · Venezuela 🇻🇪",
  },
  {
    outlet: "Costa del Sol FM",
    logo: "COSTA DEL SOL FM",
    country: "🇻🇪 Venezuela",
    date: "2 nov 2025",
    headline: "Joseph Pérez y Mateo Pérez, dos niños venezolanos lograron medallas en la Olimpiada Internacional de Geometría 2025",
    excerpt: "Para lograr su hazaña, Mateo Pérez se preparó durante dos meses con la profesora Carol Jiménez, una estudiante venezolana de Astrofísica en el Reino Unido.",
    url: "https://www.costadelsolfm.org/2025/11/02/joseph-perez-y-mateo-perez-dos-ninos-venezolanos-lograron-medallas-en-la-olimpiada-internacional-de-geometria-2025/",
    color: "#60A5FA",
    tag: "Mateo Pérez · 7 años · Venezuela 🇻🇪",
  },
  {
    outlet: "Prensa Libre",
    logo: "PRENSA LIBRE",
    country: "🇬🇹 Guatemala",
    date: "2025",
    headline: "David López, el niño guatemalteco que destaca por sus logros entre los cien prodigios del mundo",
    excerpt: "David López, de 10 años, fue reconocido como uno de los 100 niños prodigio del mundo por su talento en astronomía y ciencias espaciales. Recibió el Global Child Prodigy Awards 2025.",
    url: "https://www.prensalibre.com/vida/ciencia/david-lopez-el-nino-guatemalteco-que-destaca-por-sus-logros-entre-los-cien-prodigios-del-mundo/",
    color: "#F472B6",
    tag: "David López · 10 años · Guatemala 🇬🇹",
  },
  {
    outlet: "Universidad Galileo",
    logo: "UNIV. GALILEO",
    country: "🇬🇹 Guatemala",
    date: "2025",
    headline: "David López, niño guatemalteco de 10 años, es reconocido como uno de los 100 niños prodigio del mundo",
    excerpt: "David recibió el premio Global Child Prodigy Awards 2025 por su talento en astronomía y ciencias espaciales, destacando entre cientos de participantes internacionales.",
    url: "https://www.galileo.edu/iicta/historias-de-exito/david-lopez-nino-guatemalteco-de-10-anos-es-reconocido-como-uno-de-los-100-ninos-prodigio-del-mundo/",
    color: "#A78BFA",
    tag: "David López · 10 años · Guatemala 🇬🇹",
  },
  {
    outlet: "Biblioteca Nacional de Panamá",
    logo: "BIBL. NACIONAL",
    country: "🇵🇦 Panamá",
    date: "2025",
    headline: '"Vivo en otro planeta" de Thiago Rubino ya forma parte de la Biblioteca Nacional de Panamá',
    excerpt: "Thiago Rubino García, explorador cósmico de 9 años y estudiante de Sophia Academy, publicó su libro de astronomía para niños que ahora está disponible en la Biblioteca Nacional.",
    url: "https://www.instagram.com/p/DVyo6cdEa_J/",
    color: "#34D399",
    tag: "Thiago Rubino · 9 años · Panamá 🇵🇦",
  },
];

export default function StudentsSection() {
  return (
    <section
      id="noticias"
      style={{
        padding: "100px 0 80px",
        position: "relative",
        background: "rgba(2,4,8,0.7)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
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
            Estudiantes Sophia Academy{" "}
            <span style={{ color: "#FB923C" }}>en las Noticias</span>
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(17px, 2vw, 20px)",
            color: "rgba(255,248,240,0.7)",
            maxWidth: "640px",
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
          gap: "22px",
        }}>
          {newsArticles.map((article, i) => (
            <motion.a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                display: "block",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${article.color}30`,
                borderRadius: "20px",
                padding: "26px",
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

              {/* Outlet badge + country/date */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px", flexWrap: "wrap", gap: "8px" }}>
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
                  fontSize: "12px",
                  color: "rgba(255,248,240,0.45)",
                }}>
                  {article.country} · {article.date}
                </span>
              </div>

              {/* Headline */}
              <h3 style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "15px",
                fontWeight: 800,
                color: "#FFF8F0",
                lineHeight: 1.4,
                marginBottom: "10px",
              }}>
                {article.headline}
              </h3>

              {/* Excerpt */}
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "13.5px",
                color: "rgba(255,248,240,0.6)",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}>
                {article.excerpt}
              </p>

              {/* Student tag */}
              {article.tag && (
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: `${article.color}15`,
                  border: `1px solid ${article.color}40`,
                  borderRadius: "20px",
                  padding: "4px 12px",
                  marginBottom: "14px",
                }}>
                  <span style={{ fontSize: "11px" }}>⭐</span>
                  <span style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: article.color,
                  }}>
                    {article.tag}
                  </span>
                </div>
              )}

              {/* Read more */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: article.color,
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
              }}>
                <span>Leer artículo completo</span>
                <ExternalLink size={13} />
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
            color: "rgba(255,248,240,0.4)",
            marginTop: "52px",
          }}
        >
          📡 Cobertura verificada en más de 15 medios de Argentina, Chile, Colombia, México, Bolivia, Venezuela, Guatemala y Panamá.
        </motion.p>
      </div>
    </section>
  );
}
