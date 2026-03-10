/* StarField v3 — Full cosmic canvas for Profe Carol Astrophysics Academy
   Features: twinkling stars (white/blue/gold), shooting stars, sparkle bursts
   Designed to feel magical and space-like for children ages 4–12 */
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseOpacity: number;
  opacity: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
  sparkle: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
  width: number;
}

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
  rotation: number;
  rotSpeed: number;
}

const STAR_COLORS = [
  "255,255,255",   // white
  "200,220,255",   // cool blue-white
  "255,240,180",   // warm yellow
  "180,200,255",   // blue
  "255,200,220",   // pink
  "200,255,240",   // cyan
  "255,220,150",   // gold
];

const SHOOTING_COLORS = [
  "#ffffff",
  "#00D4FF",
  "#FFD166",
  "#FF9A3C",
  "#C8DCFF",
];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function StarField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let sparkles: Sparkle[] = [];
    let t = 0;
    let lastShootingStarTime = 0;

    const resize = () => {
      const W = window.innerWidth;
      const H = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      if (canvas.width !== W || canvas.height !== H) {
        canvas.width = W;
        canvas.height = H;
        initStars();
      }
    };

    const initStars = () => {
      const area = canvas.width * canvas.height;
      const count = Math.min(Math.floor(area / 4500), 600);
      stars = Array.from({ length: count }, () => {
        const isBig = Math.random() < 0.08;
        const isSparkle = Math.random() < 0.04;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: isBig ? randomBetween(1.2, 2.2) : randomBetween(0.3, 1.1),
          baseOpacity: randomBetween(0.3, 0.9),
          opacity: 0,
          twinkleSpeed: randomBetween(0.3, 1.8),
          phase: Math.random() * Math.PI * 2,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          sparkle: isSparkle,
        };
      });
    };

    const spawnShootingStar = () => {
      // Angle: mostly left-to-right diagonal downward
      const angle = randomBetween(20, 50) * (Math.PI / 180);
      const speed = randomBetween(8, 18);
      const startX = randomBetween(-100, canvas.width * 0.8);
      const startY = randomBetween(0, canvas.height * 0.5);
      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: randomBetween(80, 220),
        opacity: 1,
        life: 0,
        maxLife: randomBetween(40, 80),
        color: SHOOTING_COLORS[Math.floor(Math.random() * SHOOTING_COLORS.length)],
        width: randomBetween(1, 2.5),
      });
    };

    const spawnSparkle = (x: number, y: number) => {
      sparkles.push({
        x,
        y,
        size: randomBetween(3, 7),
        opacity: 1,
        life: 0,
        maxLife: randomBetween(30, 60),
        color: SHOOTING_COLORS[Math.floor(Math.random() * SHOOTING_COLORS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: randomBetween(-0.1, 0.1),
      });
    };

    const drawStar4Point = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      color: string,
      opacity: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      // Horizontal arm
      ctx.moveTo(-size, 0);
      ctx.lineTo(size, 0);
      // Vertical arm
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      // Diagonal arms (shorter)
      const d = size * 0.5;
      ctx.moveTo(-d, -d);
      ctx.lineTo(d, d);
      ctx.moveTo(d, -d);
      ctx.lineTo(-d, d);
      ctx.stroke();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 1;

      // ── Twinkling stars ──
      stars.forEach((star) => {
        const osc = 0.5 + 0.5 * Math.sin(t * star.twinkleSpeed * 0.05 + star.phase);
        star.opacity = star.baseOpacity * osc;

        if (star.sparkle) {
          // 4-point sparkle star
          const size = star.radius * 2.5;
          drawStar4Point(ctx, star.x, star.y, size, t * 0.01 + star.phase, `rgb(${star.color})`, star.opacity);
        } else {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color}, ${star.opacity})`;
          ctx.fill();

          // Glow for bigger stars
          if (star.radius > 1.2) {
            const grd = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 4);
            grd.addColorStop(0, `rgba(${star.color}, ${star.opacity * 0.4})`);
            grd.addColorStop(1, `rgba(${star.color}, 0)`);
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
          }
        }
      });

      // ── Shooting stars ──
      const now = t;
      if (now - lastShootingStarTime > randomBetween(60, 150)) {
        spawnShootingStar();
        lastShootingStarTime = now;
        // Occasionally spawn a sparkle burst at a random star position
        if (Math.random() < 0.3 && stars.length > 0) {
          const s = stars[Math.floor(Math.random() * stars.length)];
          spawnSparkle(s.x, s.y);
        }
      }

      shootingStars = shootingStars.filter((ss) => ss.life < ss.maxLife);
      shootingStars.forEach((ss) => {
        ss.life++;
        ss.x += ss.vx;
        ss.y += ss.vy;
        const progress = ss.life / ss.maxLife;
        ss.opacity = progress < 0.2
          ? progress / 0.2
          : progress > 0.7
          ? 1 - (progress - 0.7) / 0.3
          : 1;

        // Tail
        const tailX = ss.x - ss.vx * (ss.length / Math.sqrt(ss.vx ** 2 + ss.vy ** 2));
        const tailY = ss.y - ss.vy * (ss.length / Math.sqrt(ss.vx ** 2 + ss.vy ** 2));

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.6, `${ss.color}${Math.round(ss.opacity * 80).toString(16).padStart(2, "0")}`);
        grad.addColorStop(1, `${ss.color}${Math.round(ss.opacity * 255).toString(16).padStart(2, "0")}`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = ss.width;
        ctx.lineCap = "round";
        ctx.stroke();

        // Head glow
        const headGrd = ctx.createRadialGradient(ss.x, ss.y, 0, ss.x, ss.y, ss.width * 4);
        headGrd.addColorStop(0, `rgba(255,255,255,${ss.opacity * 0.9})`);
        headGrd.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.width * 4, 0, Math.PI * 2);
        ctx.fillStyle = headGrd;
        ctx.fill();
      });

      // ── Sparkle bursts ──
      sparkles = sparkles.filter((sp) => sp.life < sp.maxLife);
      sparkles.forEach((sp) => {
        sp.life++;
        sp.rotation += sp.rotSpeed;
        const progress = sp.life / sp.maxLife;
        sp.opacity = 1 - progress;
        const size = sp.size * (1 + progress * 0.5);
        drawStar4Point(ctx, sp.x, sp.y, size, sp.rotation, sp.color, sp.opacity);
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    // Re-measure on resize and after content loads (images, fonts)
    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    // Poll for page height changes (e.g. when images load and expand the page)
    const heightPoll = setInterval(resize, 1500);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(heightPoll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full pointer-events-none ${className}`}
      style={{ zIndex: 0, top: 0, left: 0 }}
    />
  );
}
