"use client";

import { useEffect, useRef } from "react";

const GOLD = [216, 190, 138] as const;
const LEAF = [95, 163, 126] as const;
const rgba = (c: readonly number[], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

type Pt = { x: number; y: number; d: number; e: number; k: number };

/** เกลียวคู่ DNA แบบแก้วใส หมุนแบบ 3D และเอียงตามเมาส์ (วาดสดด้วย canvas ไม่ใช้รูป) */
export function HelixCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let last = performance.now();
    let visible = true;
    let boost = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    const N = 120; // จุดต่อหนึ่งเส้น
    const TURNS = 2.4; // จำนวนรอบเกลียว
    const TILT = -0.5; // เอียงแนวทแยง (เรเดียน)

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const len = Math.min(h, w) * 1.05;
      const R = Math.min(w, h) * 0.15;

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const spin = t * 0.45 + mouse.x * 0.8;
      const tiltX = mouse.y * 0.35;
      const ct = Math.cos(TILT);
      const st = Math.sin(TILT);

      const pts: Pt[] = [];
      for (let k = 0; k < 2; k++) {
        for (let i = 0; i < N; i++) {
          const u = i / (N - 1);
          const a = u * TURNS * Math.PI * 2 + spin + k * Math.PI;
          const x = Math.cos(a) * R;
          const z = Math.sin(a) * R;
          const y = (u - 0.5) * len;
          const x2 = x * ct - y * st;
          const y2 = x * st + y * ct;
          const y3 = y2 * Math.cos(tiltX) - z * Math.sin(tiltX);
          const z3 = y2 * Math.sin(tiltX) + z * Math.cos(tiltX);
          const persp = 1 + z3 / (R * 7);
          pts.push({
            x: cx + x2 * persp,
            y: cy + y3 * persp,
            d: Math.max(0, Math.min(1, (z / R + 1) / 2)),
            e: Math.sin(Math.PI * u),
            k,
          });
        }
      }

      // ขั้นบันไดเชื่อมสองเส้น
      for (let i = 4; i < N; i += 8) {
        const a = pts[i];
        const b = pts[N + i];
        const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        g.addColorStop(0, rgba(GOLD, 0.2 + 0.45 * a.d));
        g.addColorStop(1, rgba(LEAF, 0.2 + 0.45 * b.d));
        ctx.globalAlpha = Math.min(a.e, b.e);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.2 + 2 * ((a.d + b.d) / 2);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // เม็ดแก้วเรียงกันเป็นท่อ วาดจากหลังไปหน้า
      pts.sort((p, q) => p.d - q.d);
      for (const p of pts) {
        const alpha = (0.22 + 0.78 * p.d) * (0.25 + 0.75 * p.e);
        const r = R * 0.12 * (0.6 + 0.55 * p.d) * (0.55 + 0.45 * p.e);
        if (r <= 0.3) continue;
        const col = p.k === 0 ? GOLD : LEAF;
        const g = ctx.createRadialGradient(p.x - r * 0.35, p.y - r * 0.4, r * 0.05, p.x, p.y, r);
        g.addColorStop(0, `rgba(255,255,255,${0.95 * alpha})`);
        g.addColorStop(0.35, rgba(col, 0.8 * alpha));
        g.addColorStop(0.85, rgba(col, 0.35 * alpha));
        g.addColorStop(1, rgba(col, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      t += (dt / 1000) * (1 + boost);
      boost *= 0.965;
      draw();
      raf = visible ? requestAnimationFrame(loop) : 0;
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
      mouse.ty = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
    };

    const onPoke = () => {
      boost = 9;
      window.dispatchEvent(new CustomEvent("helix-poke"));
    };
    canvas.addEventListener("click", onPoke);

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw();
    });
    ro.observe(canvas);

    if (reduce) {
      draw();
      return () => {
        ro.disconnect();
        canvas.removeEventListener("click", onPoke);
      };
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    });
    io.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("click", onPoke);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`cursor-pointer ${className ?? ""}`} />;
}
