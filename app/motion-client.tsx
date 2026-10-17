"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** ทำให้ทุกชิ้นที่มี class "reveal" เลื่อนขึ้นมาเมื่อเลื่อนหน้าถึง */
export function RevealObserver() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-in", "");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

/** ใส่ data-scrolled ให้เมนูด้านบนเมื่อเลื่อนลงมา */
export function HeaderScroll() {
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;
    const update = () => header.toggleAttribute("data-scrolled", window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return null;
}

/** กล่องที่เลื่อนช้า/เร็วกว่าหน้า (parallax) ขยับหลัง React โหลดเสร็จ จึงไม่ชนกับ hydration */
export function Parallax({ speed, children }: { speed: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const r = (el.parentElement ?? el).getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      el.style.translate = `0 ${((r.top + r.height / 2 - vh / 2) * speed).toFixed(1)}px`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);
  return <div ref={ref}>{children}</div>;
}

/** เส้นบางด้านบนสุด แสดงว่าอ่านมาถึงไหนแล้ว */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]">
      <div ref={bar} className="h-full origin-left bg-leaf-ink" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

export type RowPart = { t: string; serif?: boolean };

/** ตัวอักษรยักษ์หลายแถว เลื่อนซ้าย-ขวาสวนทางกันตามการเลื่อนหน้า (แบบ landonorris) */
export function ScrollRows({ rows, className }: { rows: readonly (readonly RowPart[])[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tracks = Array.from(root.querySelectorAll<HTMLElement>(".row-track"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)));
      tracks.forEach((t, k) => {
        const x = k % 2 === 0 ? -8 - p * 30 : -38 + p * 30;
        t.style.transform = `translate3d(${x}%,0,0)`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {rows.map((row, k) => (
        <div key={k} className="overflow-hidden whitespace-nowrap">
          <div className="row-track inline-flex text-mega uppercase" style={{ transform: k % 2 ? "translateX(-38%)" : "translateX(-8%)" }}>
            {[0, 1, 2].map((rep) => (
              <span key={rep} aria-hidden={rep > 0} className="inline-flex items-center">
                {row.map((part, i) => (
                  <span
                    key={i}
                    className={
                      part.serif
                        ? "px-4 font-display font-medium normal-case italic text-fresh"
                        : "px-4 font-sans font-bold tracking-tight text-ivory"
                    }
                  >
                    {part.t}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
