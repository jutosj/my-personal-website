// ข้อมูลที่ต้องแก้ อยู่ที่ไฟล์นี้ไฟล์เดียว
// ข้อมูลส่วนใหญ่คัดจากเว็บทางการของคลินิก https://www.120wellnessvilla.com (ตรวจเมื่อ 17/10/2026)
// ค่าที่มีคำว่า "ตัวอย่าง" คือข้อความตัวอย่าง ยังไม่ใช่ข้อมูลจริง

export const SITE = {
  name: "หมอกิต",
  fullName: "นพ. จุทศ จักกายชวดล",
  credentials: "M.D., MBA, ABAARM",
  descriptor: "Longevity & Regenerative Medicine",
  eyebrow: "Longevity · Hormone · Regenerative Medicine",
  title: "หมอกิต (นพ.จุทศ จักกายชวดล) | Longevity ฮอร์โมน และเวชศาสตร์ฟื้นฟู",
  description:
    "เว็บไซต์ส่วนตัวของ นพ.จุทศ จักกายชวดล (หมอกิต) แพทย์ด้านเวชศาสตร์ชะลอวัยและเวชศาสตร์ฟื้นฟู แบ่งปันความรู้เรื่อง Longevity ฮอร์โมน และเวชศาสตร์ป้องกัน ด้วยภาษาที่เข้าใจง่าย",
  headline: "สุขภาพยืนยาว เริ่มจากความเข้าใจที่ถูกต้อง",
  cta: "นัดปรึกษาที่คลินิก",
  ctaUrl: "https://120wellnessvilla.com/make-an-appointment/",
} as const;

export const CLINIC = {
  name: "120 Wellness Villa Clinic",
  url: "https://120wellnessvilla.com/",
  mapUrl: "https://120wellnessvilla.com/contact-us/",
  programs: [
    "การตรวจสุขภาพเชิงลึก",
    "การล้างพิษ (Detoxification)",
    "การปรับสมดุลฮอร์โมน",
    "การควบคุมน้ำหนัก",
    "สารน้ำและวิตามินทางหลอดเลือด (IV Nutrient)",
    "วิตามินและอาหารเสริมเฉพาะบุคคล",
    "การฟื้นฟูผิว",
  ],
} as const;

export const CONTACT = {
  phone: "099-936-3285",
  email: "info@120wellnessvilla.com",
  facebookUrl: "https://www.facebook.com/120WellnessVillaClinicofficial/",
  instagramUrl: "https://www.instagram.com/120wellnessvilla/",
  tiktokUrl: "https://www.tiktok.com/@120wellnessvilla",
  lineId: "", // ยังไม่มีข้อมูล: ใส่ LINE ID (เช่น "@xxxx") แล้วช่อง LINE จะโผล่ในหน้าเว็บเอง
} as const;

export const telUrl = `tel:${CONTACT.phone.replace(/-/g, "")}`;
export const mailUrl = `mailto:${CONTACT.email}`;
export const lineUrl = CONTACT.lineId
  ? `https://line.me/R/ti/p/${encodeURIComponent(CONTACT.lineId)}`
  : "";
