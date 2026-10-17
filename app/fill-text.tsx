"use client";

import { useEffect, useRef } from "react";

/** ข้อความตัวใหญ่ที่ค่อย ๆ เติมสีทีละวลีตามการเลื่อนหน้า (วลีแบ่งด้วยช่องว่าง) */
export function FillText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>(".fill-word"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((s) => s.classList.add("lit"));
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const lit = Math.round(p * spans.length);
      spans.forEach((s, k) => s.classList.toggle("lit", k < lit));
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
    <p ref={ref} className={className}>
      {words.map((w, k) => (
        <span key={k} className={w.startsWith("*") ? "fill-word accent" : "fill-word"}>
          {w.replace(/^\*/, "")}
          {k < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
