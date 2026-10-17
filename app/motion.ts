import type { CSSProperties } from "react";

/** หน่วงเวลาเริ่ม animation (มิลลิวินาที) ใช้ทำจังหวะไล่ทีละชิ้น */
export const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
