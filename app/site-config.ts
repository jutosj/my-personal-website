// ข้อมูลที่ต้องแก้เป็นของจริง อยู่ที่ไฟล์นี้ไฟล์เดียว
// ค่าที่มีคำว่า "ตัวอย่าง" คือข้อความตัวอย่าง ยังไม่ใช่ข้อมูลจริง

export const SITE = {
  name: "หมอกิต",
  descriptor: "Longevity & Regenerative Medicine",
  eyebrow: "Longevity · Hormone · Regenerative Medicine",
  title: "หมอกิต | Longevity ฮอร์โมน และเวชศาสตร์ฟื้นฟู",
  description:
    "เว็บไซต์ส่วนตัวของหมอกิต แพทย์ผู้สนใจด้าน Longevity ฮอร์โมน และเวชศาสตร์ฟื้นฟู แบ่งปันความรู้ที่อิงหลักฐาน เข้าใจง่าย และไม่โฆษณาเกินจริง",
  headline: "สุขภาพยืนยาว เริ่มจากความเข้าใจที่ถูกต้อง",
  cta: "ทักไลน์เลย",
} as const;

export const CONTACT = {
  lineId: "@your-line-id", // ตัวอย่าง: แก้เป็น LINE ID จริง
  phone: "000-000-0000", // ตัวอย่าง: แก้เป็นเบอร์จริง
  facebookUrl: "https://www.facebook.com/your-page", // ตัวอย่าง: แก้เป็นลิงก์เพจจริง
  hours: "ตอบข้อความ จันทร์–เสาร์ 09:00–18:00", // ตัวอย่าง: แก้เป็นเวลาจริง
} as const;

export const lineUrl = `https://line.me/R/ti/p/${encodeURIComponent(CONTACT.lineId)}`;
export const telUrl = `tel:${CONTACT.phone.replace(/-/g, "")}`;
