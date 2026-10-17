import type { CSSProperties } from "react";

/** มาสคอต "น้องเกลียว": ต้นอ่อนใส่แว่น คล้องหูฟังแพทย์ ใช้บนพื้นเขียวเข้ม */
export function Mascot({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 240"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`mascot ${className ?? ""}`}
    >
      <ellipse className="m-shadow" cx="100" cy="228" rx="46" ry="7" fill="var(--deep-3)" opacity="0.5" />
      <g className="m-bob">
        {/* ใบอ่อนบนหัว */}
        <g className="m-sway">
          <path d="M100 68V50" stroke="var(--leaf)" strokeWidth="5" />
          <path d="M100 52C88 30 64 28 54 38C64 54 86 62 100 52Z" fill="var(--leaf)" stroke="var(--deep)" strokeWidth="3" />
          <path d="M100 52C112 28 136 26 146 36C138 52 116 62 100 52Z" fill="var(--leaf-2)" stroke="var(--deep)" strokeWidth="3" />
        </g>

        {/* แขนซ้าย */}
        <path d="M44 146C30 162 34 182 46 190" stroke="var(--deep)" strokeWidth="18" />
        <path d="M44 146C30 162 34 182 46 190" stroke="var(--ivory)" strokeWidth="10" />

        {/* เท้า */}
        <ellipse cx="80" cy="212" rx="15" ry="8" fill="var(--ivory)" stroke="var(--deep)" strokeWidth="3.5" />
        <ellipse cx="120" cy="212" rx="15" ry="8" fill="var(--ivory)" stroke="var(--deep)" strokeWidth="3.5" />

        {/* ตัว */}
        <ellipse cx="100" cy="136" rx="62" ry="72" fill="var(--ivory)" stroke="var(--deep)" strokeWidth="4" />

        {/* หน้า */}
        <circle cx="82" cy="122" r="15" fill="#fff" fillOpacity="0.65" stroke="var(--deep)" strokeWidth="3" />
        <circle cx="118" cy="122" r="15" fill="#fff" fillOpacity="0.65" stroke="var(--deep)" strokeWidth="3" />
        <path d="M97 122H103" stroke="var(--deep)" strokeWidth="3" />
        <ellipse className="m-eye" cx="82" cy="122" rx="5" ry="7" fill="var(--deep)" />
        <ellipse className="m-eye" cx="118" cy="122" rx="5" ry="7" fill="var(--deep)" />
        <circle cx="84" cy="119" r="2" fill="#fff" />
        <circle cx="120" cy="119" r="2" fill="#fff" />
        <path d="M90 150Q100 162 110 150" stroke="var(--deep)" strokeWidth="4" />
        <circle cx="64" cy="146" r="8" fill="var(--gold-soft)" fillOpacity="0.8" />
        <circle cx="136" cy="146" r="8" fill="var(--gold-soft)" fillOpacity="0.8" />

        {/* หูฟังแพทย์ */}
        <path d="M72 178C72 206 128 206 128 178" stroke="var(--gold-line)" strokeWidth="5" />
        <circle cx="72" cy="176" r="4" fill="var(--gold-line)" />
        <circle cx="128" cy="176" r="4" fill="var(--gold-line)" />
        <circle cx="100" cy="198" r="8" fill="var(--gold-soft)" stroke="var(--deep)" strokeWidth="3" />

        {/* แขนขวา (โบกมือ) */}
        <g className="m-wave">
          <path d="M156 146C176 140 184 122 180 102" stroke="var(--deep)" strokeWidth="18" />
          <path d="M156 146C176 140 184 122 180 102" stroke="var(--ivory)" strokeWidth="10" />
          <circle cx="180" cy="97" r="10" fill="var(--ivory)" stroke="var(--deep)" strokeWidth="3.5" />
        </g>
      </g>
    </svg>
  );
}

/** กล่องคำพูด: เกร็ดสุขภาพทั่วไปสลับกันทีละข้อ (CSS ล้วน ไม่ใช้ JavaScript) */
export function TipBubble({
  tips,
  className,
  dark,
}: {
  tips: readonly string[];
  className?: string;
  dark?: boolean;
}) {
  return (
    <div aria-hidden="true" className={`tip-bubble relative rounded-2xl text-small font-medium shadow-lg ${dark ? "bg-deep text-ivory" : "bg-ivory text-deep"} ${className ?? ""}`}>
      {tips.map((t, i) => (
        <span
          key={t}
          className="tip px-4"
          style={{ "--i": i, "--n": tips.length } as CSSProperties}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
