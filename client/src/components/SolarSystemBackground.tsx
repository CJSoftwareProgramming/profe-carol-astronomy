/* SolarSystemBackground — Sophia Academy Brand
   Implements the exact solar system background from the brand brief:
   - Sun: 290×290px, top:-78px right:-78px, radial gradient, sun-pulse 6s
   - 8 planets orbiting in CSS ellipses
   - 4-layer twinkling star field
   - 3 shooting stars
   position: fixed, inset: 0, z-index: 0 */

export default function SolarSystemBackground() {
  return (
    <div className="solar-bg" aria-hidden="true">
      {/* ── Ambient light from sun corner ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60vw",
          height: "60vh",
          background: "radial-gradient(ellipse at top right, rgba(255,140,0,0.12) 0%, rgba(255,100,0,0.06) 35%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Star layers (4 CSS background-image layers) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 45%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 20%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 60%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 35%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 75%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 80%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 90%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 10%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 75% 55%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 25%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 5%  50%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 70%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 20% 30%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 65% 85%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 80% 5%,  rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 55%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 40%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 95% 65%, rgba(255,248,240,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 8%  95%, rgba(255,248,240,0.75) 0%, transparent 100%)
          `,
          animation: "twinkle1 9s ease-in-out infinite",
        }}
      />
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
        }}
      />
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
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(1px 1px at 17% 7%,  rgba(255,248,240,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 33% 53%, rgba(255,248,240,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 53% 27%, rgba(255,248,240,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 73% 67%, rgba(255,248,240,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 87% 13%, rgba(255,248,240,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 43% 83%, rgba(255,248,240,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 63% 43%, rgba(255,248,240,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 27% 23%, rgba(255,248,240,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 83% 57%, rgba(255,248,240,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 97% 87%, rgba(255,248,240,0.45) 0%, transparent 100%)
          `,
          animation: "twinkle4 15s ease-in-out infinite",
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
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
          borderRadius: "1px",
          animation: "shoot 12s linear infinite",
          animationDelay: "1.5s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "10%",
          width: "90px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,220,150,0.7), transparent)",
          borderRadius: "1px",
          animation: "shoot2 12s linear infinite",
          animationDelay: "6s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "0%",
          width: "130px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(200,220,255,0.6), transparent)",
          borderRadius: "1px",
          animation: "shoot3 12s linear infinite",
          animationDelay: "9.5s",
        }}
      />

      {/* ── The Sun ── */}
      <div
        style={{
          position: "absolute",
          top: "-78px",
          right: "-78px",
          width: "290px",
          height: "290px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #FFF9C4, #FFE84D, #FFB800, #FF8C00, rgba(255,85,0,0.28))",
          animation: "sun-pulse 6s ease-in-out infinite",
          zIndex: 1,
        }}
      />
      {/* Sun corona ring */}
      <div
        style={{
          position: "absolute",
          top: "-78px",
          right: "-78px",
          width: "290px",
          height: "290px",
          borderRadius: "50%",
          border: "1px solid rgba(255,200,50,0.15)",
          transform: "scale(1.86)",
          animation: "orbit-cw 30s linear infinite",
          zIndex: 1,
        }}
      />

      {/* ── Planet Orbits ── */}
      {/* Mercury — 560×310px, 9s */}
      <div style={{
        position: "absolute", top: "-78px", right: "-78px",
        width: "560px", height: "310px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.07)",
        animation: "orbit-cw 9s linear infinite",
        zIndex: 1,
      }}>
        <div style={{
          position: "absolute", left: 0, top: "50%",
          transform: "translate(-50%, -50%)",
          width: "6px", height: "6px",
          borderRadius: "50%",
          background: "#A0A0A0",
          boxShadow: "0 0 6px rgba(160,160,160,0.8)",
        }} />
      </div>

      {/* Venus — 780×430px, 16s */}
      <div style={{
        position: "absolute", top: "-78px", right: "-78px",
        width: "780px", height: "430px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.07)",
        animation: "orbit-cw 16s linear infinite",
        zIndex: 1,
      }}>
        <div style={{
          position: "absolute", left: 0, top: "50%",
          transform: "translate(-50%, -50%)",
          width: "8px", height: "8px",
          borderRadius: "50%",
          background: "#E8C060",
          boxShadow: "0 0 10px rgba(232,192,96,0.8)",
        }} />
      </div>

      {/* Earth — 1000×550px, 25s */}
      <div style={{
        position: "absolute", top: "-78px", right: "-78px",
        width: "1000px", height: "550px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.07)",
        animation: "orbit-cw 25s linear infinite",
        zIndex: 1,
      }}>
        <div style={{
          position: "absolute", left: 0, top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "20px",
          lineHeight: 1,
        }}>🌍</div>
      </div>

      {/* Mars — 1220×670px, 40s */}
      <div style={{
        position: "absolute", top: "-78px", right: "-78px",
        width: "1220px", height: "670px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.07)",
        animation: "orbit-cw 40s linear infinite",
        zIndex: 1,
      }}>
        <div style={{
          position: "absolute", left: 0, top: "50%",
          transform: "translate(-50%, -50%)",
          width: "8px", height: "8px",
          borderRadius: "50%",
          background: "#CC3010",
          boxShadow: "0 0 8px rgba(204,48,16,0.8)",
        }} />
      </div>

      {/* Jupiter — 1440×790px, 65s */}
      <div style={{
        position: "absolute", top: "-78px", right: "-78px",
        width: "1440px", height: "790px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.07)",
        animation: "orbit-cw 65s linear infinite",
        zIndex: 1,
      }}>
        <div style={{
          position: "absolute", left: 0, top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "26px",
          lineHeight: 1,
        }}>🪐</div>
      </div>

      {/* Saturn — 1660×910px, 95s */}
      <div style={{
        position: "absolute", top: "-78px", right: "-78px",
        width: "1660px", height: "910px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.07)",
        animation: "orbit-cw 95s linear infinite",
        zIndex: 1,
      }}>
        <div style={{
          position: "absolute", left: 0, top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "22px",
          lineHeight: 1,
        }}>🪐</div>
      </div>

      {/* Uranus — 1900×1050px, 140s */}
      <div style={{
        position: "absolute", top: "-78px", right: "-78px",
        width: "1900px", height: "1050px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.07)",
        animation: "orbit-cw 140s linear infinite",
        zIndex: 1,
      }}>
        <div style={{
          position: "absolute", left: 0, top: "50%",
          transform: "translate(-50%, -50%)",
          width: "10px", height: "10px",
          borderRadius: "50%",
          background: "#7EC8D8",
          boxShadow: "0 0 10px rgba(126,200,216,0.8)",
        }} />
      </div>

      {/* Neptune — 2140×1180px, 200s */}
      <div style={{
        position: "absolute", top: "-78px", right: "-78px",
        width: "2140px", height: "1180px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.07)",
        animation: "orbit-cw 200s linear infinite",
        zIndex: 1,
      }}>
        <div style={{
          position: "absolute", left: 0, top: "50%",
          transform: "translate(-50%, -50%)",
          width: "9px", height: "9px",
          borderRadius: "50%",
          background: "#4050D0",
          boxShadow: "0 0 10px rgba(64,80,208,0.8)",
        }} />
      </div>
    </div>
  );
}
