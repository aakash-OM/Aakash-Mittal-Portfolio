import { useEffect, useRef } from "react";

const WAVES = [
  { amp: 55, freq: 0.0065, speed: 0.25, yPct: 0.38, color: "rgba(145,94,255,0.20)", lw: 2.0 },
  { amp: 35, freq: 0.0110, speed: 0.40, yPct: 0.55, color: "rgba(0,180,255,0.14)",  lw: 1.5 },
  { amp: 75, freq: 0.0040, speed: 0.18, yPct: 0.65, color: "rgba(100,50,240,0.12)", lw: 2.5 },
  { amp: 28, freq: 0.0160, speed: 0.55, yPct: 0.28, color: "rgba(180,80,255,0.14)", lw: 1.2 },
  { amp: 45, freq: 0.0080, speed: 0.30, yPct: 0.72, color: "rgba(60,180,255,0.09)", lw: 1.8 },
];

export default function WaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      WAVES.forEach(({ amp, freq, speed, yPct, color, lw }) => {
        const baseY = canvas.height * yPct;
        ctx.beginPath();
        ctx.moveTo(0, baseY + amp * Math.sin(t * speed));
        for (let x = 1; x <= canvas.width; x += 4) {
          ctx.lineTo(x, baseY + amp * Math.sin(x * freq + t * speed));
        }
        ctx.strokeStyle = color;
        ctx.lineWidth   = lw;
        ctx.stroke();
      });
      t += 0.04;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
