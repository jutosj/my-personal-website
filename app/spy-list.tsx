"use client";

import { useEffect, useRef, useState } from "react";

export type SpyItem = { title: string; th: string; body: string };

/** รายการตัวใหญ่ เทาจาง แล้วเข้มขึ้นเมื่อเลื่อนมาถึงกลางจอ พร้อมแผงรายละเอียดที่เปลี่ยนตาม */
export function SpyList({ items }: { items: readonly SpyItem[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const it = items[active];

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.25fr] md:gap-14">
      <div className="hidden md:sticky md:top-32 md:block md:self-start">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-10">
          <div aria-hidden="true" className="spy-orb" />
          <div key={active} className="spy-swap relative" aria-live="polite">
            <p className="eyebrow">
              {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
            <p className="mt-5 font-display text-heading font-semibold text-fg">{it.title}</p>
            <p className="mt-1 text-subheading text-fresh">{it.th}</p>
            <p className="mt-5 text-body text-fg-muted">{it.body}</p>
          </div>
        </div>
      </div>

      <ol className="border-t border-line">
        {items.map((x, k) => (
          <li
            key={x.title}
            data-idx={k}
            ref={(el) => {
              refs.current[k] = el;
            }}
            className="border-b border-line"
          >
            <button
              type="button"
              onClick={() => setActive(k)}
              className={`spy-item focus-ring w-full py-5 text-left font-display text-subheading font-semibold md:text-heading ${
                k === active ? "is-active text-fg" : "text-fg-muted/50 hover:text-fg/70"
              }`}
            >
              {x.title}
            </button>
            <div className={`spy-detail md:hidden ${k === active ? "open" : ""}`}>
              <div>
                <p className="text-small font-medium text-fresh">{x.th}</p>
                <p className="pb-5 pt-1 text-small text-fg-muted">{x.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
