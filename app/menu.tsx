"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Item = { href: string; label: string; en: string };

/** ปุ่มเมนูสี่เหลี่ยม เปิดแผงเต็มจอสีเขียวเข้ม (แบบ landonorris) */
export function MenuButton({ items, ctaHref, ctaLabel }: { items: readonly Item[]; ctaHref: string; ctaLabel: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`focus-ring relative z-[56] flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border transition-colors ${
          open ? "border-ivory/40 text-ivory" : "border-deep/25 bg-ivory/70 text-deep"
        }`}
      >
        <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "translate-y-1 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-1 -rotate-45" : ""}`} />
      </button>

      {open && (
        <div className="menu-panel topo-dark fixed inset-0 z-[55] flex flex-col justify-center px-6 md:px-16">
          <ul className="space-y-2 md:space-y-3">
            {items.map((it, i) => (
              <li key={it.href} style={{ "--i": i } as CSSProperties}>
                <a
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring-light group flex items-baseline gap-5 text-ivory"
                >
                  <span className="text-label font-semibold text-fresh">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-display font-semibold transition-colors group-hover:text-fresh">
                    {it.label}
                  </span>
                  <span className="hidden text-small uppercase tracking-[0.2em] text-ivory/50 md:inline">{it.en}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-fresh focus-ring-light mt-12 self-start"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </>
  );
}
