"use client";

import { useEffect, useState } from "react";

const LINES = ["บอกแล้วว่าอย่ากด 😄", "เวียนหัวแล้วครับ 🌀", "กดอีกทีเดี๋ยวงอนนะ", "โอเค ๆ หมุนให้อีกรอบ ✨"];

/** น้องเกลียวแซวเมื่อมีคนกดเกลียว DNA ในส่วนหัว */
export function PokeBubble({ className }: { className?: string }) {
  const [n, setN] = useState(-1);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer = 0;
    const onPoke = () => {
      setN((v) => v + 1);
      setShow(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setShow(false), 2600);
    };
    window.addEventListener("helix-poke", onPoke);
    return () => {
      window.removeEventListener("helix-poke", onPoke);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <p
      role="status"
      className={`poke rounded-2xl bg-gold-soft px-4 py-3 text-small font-semibold text-deep shadow-lg ${show ? "show" : ""} ${className ?? ""}`}
    >
      {n >= 0 ? LINES[n % LINES.length] : ""}
    </p>
  );
}
