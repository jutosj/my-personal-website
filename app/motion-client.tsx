"use client";

import { useEffect, useRef } from "react";

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

/** ใส่ data-scrolled ให้เมนูด้านบนเมื่อเลื่อนลงมา (เมนูจะเปลี่ยนเป็นแถบสีเข้ม) */
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

/** เส้นทองบางด้านบนสุด แสดงว่าอ่านมาถึงไหนแล้ว */
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
      <div ref={bar} className="h-full origin-left bg-gold-line" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}
