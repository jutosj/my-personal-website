import type { CSSProperties, ReactNode } from "react";

type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "h-6 w-6"}
    >
      {children}
    </svg>
  );
}

/** โลโก้: วงแหวน + เกลียวคู่ (สื่อถึงการดูแลสุขภาพระดับเซลล์/ความยืนยาว) */
export function LogoMark({ className, animate }: IconProps & { animate?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={`${className ?? "h-10 w-10"}${animate ? " logo-draw" : ""}`}
    >
      <circle className="logo-line" pathLength={1} cx="24" cy="24" r="22.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        className="logo-line"
        pathLength={1}
        d="M17 10C17 19 31 19 31 24C31 29 17 29 17 38"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        className="logo-line logo-line-2"
        pathLength={1}
        d="M31 10C31 19 17 19 17 24C17 29 31 29 31 38"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <g stroke="var(--gold-line)" strokeWidth="1.8" strokeLinecap="round">
        <path className="logo-rung" style={{ "--r": "0s" } as CSSProperties} d="M19.4 14.4H28.6" />
        <path className="logo-rung" style={{ "--r": "0.2s" } as CSSProperties} d="M17.8 24H30.2" />
        <path className="logo-rung" style={{ "--r": "0.4s" } as CSSProperties} d="M19.4 33.6H28.6" />
      </g>
    </svg>
  );
}

export const MessageIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </Svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Svg>
);

export const FacebookIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Svg>
);

export const ActivityIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
  </Svg>
);

export const DropletIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
  </Svg>
);

export const SproutIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
  </Svg>
);

export const ShieldCheckIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const FileTextIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </Svg>
);

export const BookIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </Svg>
);

export const ArrowRightIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Svg>
);

export const ChevronDownIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Svg>
);

export const InstagramIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <path d="M17.5 6.5h.01" />
  </Svg>
);

export const ExternalIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </Svg>
);
