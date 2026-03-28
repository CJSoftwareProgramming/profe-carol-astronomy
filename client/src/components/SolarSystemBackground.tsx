/* SolarSystemBackground — Sophia Academy Brand (Saturn Edition)
   Background: Dramatic Saturn with rings image (top-right)
   Overlay: twinkling star field + shooting stars
   position: fixed, inset: 0, z-index: 0 */

export default function SolarSystemBackground() {
  return (
    <div className="solar-bg" aria-hidden="true">

      {/* ── Saturn image — top right, large and dramatic ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "65vw",
          height: "75vh",
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663419151816/jw6BiZh2wKepMm7AvD23MW/saturn-bg-H66MWvfjiJ3h4ju5vcrQzS.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          maskImage: "radial-gradient(ellipse 80% 80% at 100% 0%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 100% 0%, black 30%, transparent 80%)",
          opacity: 0.75,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Ambient warm glow from Saturn ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "55vw",
          height: "55vh",
          background: "radial-gradient(ellipse at top right, rgba(200,140,40,0.10) 0%, rgba(180,100,20,0.05) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Star layer 1 — small dim stars ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 45%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 20%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 60%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 35%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 75%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 80%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 90%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 10%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 75% 55%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 25%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 5%  50%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 70%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 20% 30%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 65% 85%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 80% 5%,  rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 55%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 40%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 95% 65%, rgba(255,248,240,0.70) 0%, transparent 100%),
            radial-gradient(1px 1px at 8%  95%, rgba(255,248,240,0.70) 0%, transparent 100%)
          `,
          animation: "twinkle1 9s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Star layer 2 — colored bright stars ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(2px 2px at 12% 22%, rgba(255,220,100,1) 0%, transparent 100%),
            radial-gradient(3px 3px at 28% 68%, rgba(200,220,255,1) 0%, transparent 100%),
            radial-gradient(2px 2px at 48% 12%, rgba(255,180,100,1) 0%, transparent 100%),
            radial-gradient(2px 2px at 62% 78%, rgba(255,200,200,1) 0%, transparent 100%),
            radial-gradient(3px 3px at 78% 42%, rgba(200,255,220,1) 0%, transparent 100%),
            radial-gradient(2px 2px at 88% 88%, rgba(255,220,100,1) 0%, transparent 100%),
            radial-gradient(2px 2px at 18% 58%, rgba(200,220,255,1) 0%, transparent 100%),
            radial-gradient(3px 3px at 38% 35%, rgba(255,180,100,1) 0%, transparent 100%),
            radial-gradient(2px 2px at 58% 92%, rgba(255,200,200,1) 0%, transparent 100%),
            radial-gradient(2px 2px at 72% 18%, rgba(200,255,220,1) 0%, transparent 100%),
            radial-gradient(3px 3px at 92% 48%, rgba(255,220,100,1) 0%, transparent 100%),
            radial-gradient(2px 2px at 5%  72%, rgba(200,220,255,1) 0%, transparent 100%),
            radial-gradient(2px 2px at 42% 48%, rgba(255,180,100,1) 0%, transparent 100%),
            radial-gradient(3px 3px at 68% 62%, rgba(255,200,200,1) 0%, transparent 100%),
            radial-gradient(2px 2px at 82% 28%, rgba(200,255,220,1) 0%, transparent 100%)
          `,
          animation: "twinkle2 6s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Star layer 3 — faint distant stars ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(1px 1px at 7%  33%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 22% 77%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 37% 8%,  rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 52% 52%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 67% 28%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 82% 82%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 97% 15%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 13% 62%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 32% 42%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 57% 72%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 77% 97%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 3%  18%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 47% 88%, rgba(255,248,240,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 93% 38%, rgba(255,248,240,0.35) 0%, transparent 100%)
          `,
          animation: "twinkle3 12s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Shooting Stars ── */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "5%",
          width: "110px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)",
          borderRadius: "1px",
          animation: "shoot 12s linear infinite",
          animationDelay: "1.5s",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "10%",
          width: "90px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,220,150,0.75), transparent)",
          borderRadius: "1px",
          animation: "shoot2 12s linear infinite",
          animationDelay: "6s",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "0%",
          width: "130px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(200,220,255,0.65), transparent)",
          borderRadius: "1px",
          animation: "shoot3 12s linear infinite",
          animationDelay: "9.5s",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}
