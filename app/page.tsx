import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import {
  ActivityIcon,
  ArrowRightIcon,
  BookIcon,
  ChevronDownIcon,
  DropletIcon,
  FacebookIcon,
  FileTextIcon,
  LogoMark,
  MessageIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SproutIcon,
} from "./icons";
import { CONTACT, SITE, lineUrl, telUrl } from "./site-config";

// วางไฟล์ภาพถ่ายที่ public/portrait.jpg แล้วหน้าแรกจะใช้ภาพจริงแทนโลโก้โดยอัตโนมัติ
const HAS_PORTRAIT = existsSync(path.join(process.cwd(), "public", "portrait.jpg"));

const TRUST = ["อิงหลักฐาน", "เข้าใจง่าย", "ไม่โฆษณาเกินจริง"] as const;

const PRINCIPLES = [
  {
    no: "01",
    title: "อิงหลักฐาน",
    body: "เลือกเล่าเฉพาะเรื่องที่มีงานวิจัยหรือแนวทางเวชปฏิบัติรองรับ และบอกให้ชัดว่าข้อมูลนั้นน่าเชื่อถือแค่ไหน",
  },
  {
    no: "02",
    title: "เข้าใจบริบทของแต่ละคน",
    body: "สุขภาพไม่มีสูตรสำเร็จเดียวสำหรับทุกคน เนื้อหาจึงเป็นกรอบความคิดให้ใช้ประกอบการตัดสินใจ ไม่ใช่คำสั่งให้ทำตาม",
  },
  {
    no: "03",
    title: "ปลอดภัยไว้ก่อน",
    body: "บอกข้อควรระวังและข้อจำกัดควบคู่กับประโยชน์เสมอ และไม่โฆษณาเกินจริง",
  },
] as const;

const AREAS = [
  {
    icon: ActivityIcon,
    en: "Longevity",
    th: "สุขภาพยืนยาว",
    body: "หลักการดูแลสุขภาพระยะยาว ตั้งแต่พื้นฐานชีวิตประจำวันไปจนถึงการตรวจเชิงป้องกัน",
    points: ["ภาพรวมของ healthspan", "การนอน การออกกำลังกาย โภชนาการ", "การตรวจสุขภาพเชิงป้องกัน"],
  },
  {
    icon: DropletIcon,
    en: "Hormone",
    th: "ฮอร์โมนและวัย",
    body: "ทำความเข้าใจฮอร์โมนที่เปลี่ยนไปตามวัย อ่านผลตรวจอย่างเข้าใจ และรู้ข้อควรระวังก่อนตัดสินใจ",
    points: ["ฮอร์โมนที่เปลี่ยนไปตามวัย", "การอ่านผลเลือดเบื้องต้น", "ข้อควรระวังและข้อจำกัด"],
  },
  {
    icon: SproutIcon,
    en: "Regenerative",
    th: "เวชศาสตร์ฟื้นฟู",
    body: "แยกให้ออกระหว่างสิ่งที่งานวิจัยยืนยันแล้ว กับสิ่งที่ยังต้องรอหลักฐานเพิ่มเติม",
    points: ["พื้นฐานเวชศาสตร์ฟื้นฟู", "ที่ยืนยันแล้ว และที่ยังไม่ยืนยัน", "เลือกรับข้อมูลอย่างมีวิจารณญาณ"],
  },
] as const;

const FORMATS = [
  {
    icon: FileTextIcon,
    title: "บทความสั้น",
    body: "อ่านจบในไม่กี่นาที เลือกมาทีละเรื่อง เข้าใจประเด็นหลักได้เร็ว",
  },
  {
    icon: BookIcon,
    title: "สรุปงานวิจัย",
    body: "ย่อเรื่องยากให้อ่านง่าย พร้อมระบุแหล่งที่มา ให้ตามไปอ่านต่อเองได้",
  },
  {
    icon: MessageIcon,
    title: "เรื่องเล่าจากหน้างาน",
    body: "มุมมองและบทเรียนจากสิ่งที่พบจริง เล่าแบบเป็นกันเอง",
  },
] as const;

const FAQS = [
  {
    q: "เว็บนี้เกี่ยวกับอะไร",
    a: "เป็นพื้นที่ส่วนตัวของผม ใช้แบ่งปันความรู้เรื่อง Longevity ฮอร์โมน และเวชศาสตร์ฟื้นฟู รวมถึงบอกเล่าแนวคิดที่ผมใช้ในการทำงาน",
  },
  {
    q: "ข้อมูลในเว็บนี้ใช้แทนคำแนะนำของแพทย์ได้ไหม",
    a: "ไม่ได้ครับ เนื้อหาเป็นความรู้ทั่วไปเพื่อประกอบการตัดสินใจ แต่ละคนมีสภาวะต่างกัน หากมีอาการ โรคประจำตัว หรือกำลังใช้ยา ควรปรึกษาแพทย์ที่ดูแลคุณโดยตรง",
  },
  {
    q: "ติดต่อสอบถามหรือชวนทำงานร่วมกันได้อย่างไร",
    a: "ทักไลน์หรือโทรตามช่องทางด้านล่างได้เลย ผมจะตอบตามเวลาที่ระบุไว้",
  },
  {
    q: "จะรู้ได้อย่างไรว่ามีบทความใหม่",
    a: "แอดไลน์หรือกดติดตามเพจเฟซบุ๊กไว้ เมื่อมีบทความใหม่จะเห็นได้ที่นั่น",
  },
] as const;

const NAV = [
  { href: "#approach", label: "แนวคิด" },
  { href: "#topics", label: "ศาสตร์ที่สนใจ" },
  { href: "#faq", label: "คำถาม" },
  { href: "#contact", label: "ติดต่อ" },
] as const;

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="focus-ring flex items-center gap-3 rounded-lg">
            <LogoMark className="h-10 w-10 shrink-0 text-deep" />
            <span className="leading-tight">
              <span className="block font-display text-subheading font-semibold text-deep">{SITE.name}</span>
              <span className="hidden text-label font-medium uppercase tracking-[0.14em] text-muted sm:block">
                {SITE.descriptor}
              </span>
            </span>
          </a>
          <nav aria-label="เมนูหลัก" className="flex items-center gap-1 lg:gap-3">
            {NAV.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="focus-ring hidden rounded-md px-2 py-1 text-small text-muted hover:text-deep lg:inline"
              >
                {label}
              </a>
            ))}
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm focus-ring">
              {SITE.cta}
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* ส่วนหัว */}
        <section className="relative overflow-hidden bg-deep text-ivory">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-48 -top-48 h-[36rem] w-[36rem] rounded-full border border-gold-soft/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-28 h-[26rem] w-[26rem] rounded-full border border-gold-soft/20"
          />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-14 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-12 md:pb-28 md:pt-24">
            <div>
              <p className="eyebrow-light">{SITE.eyebrow}</p>
              <h1 className="mt-5 text-balance font-display text-display font-semibold">{SITE.headline}</h1>
              <p className="mt-6 max-w-xl text-subheading text-ivory/85">
                สวัสดีครับ ผม<span className="font-semibold text-gold-soft">{SITE.name}</span> แพทย์ผู้สนใจด้าน Longevity
                ฮอร์โมน และเวชศาสตร์ฟื้นฟู ผมเขียนและแบ่งปันความรู้ให้เข้าใจง่าย อิงหลักฐาน และบอกข้อจำกัดอย่างตรงไปตรงมา
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold focus-ring-light">
                  <MessageIcon className="h-5 w-5" />
                  {SITE.cta}
                </a>
                <a href="#approach" className="btn btn-outline-light focus-ring-light">
                  แนวคิดการทำงานของผม
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-small text-ivory/85">
                {TRUST.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <ShieldCheckIcon className="h-5 w-5 text-gold-soft" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mx-auto w-full max-w-sm md:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl border border-gold-soft/30 bg-deep-2">
                {HAS_PORTRAIT ? (
                  <Image
                    src="/portrait.jpg"
                    alt={`ภาพถ่ายของ${SITE.name}`}
                    fill
                    priority
                    sizes="(min-width: 768px) 28rem, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <div aria-hidden="true" className="flex h-full flex-col items-center justify-center gap-7">
                    <LogoMark className="h-36 w-36 text-ivory" />
                    <p className="eyebrow-light text-center">{SITE.descriptor}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* แนวคิดการทำงาน */}
        <section id="approach" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="eyebrow">Approach</p>
          <h2 className="section-title mt-3">แนวคิดการทำงานของผม</h2>
          <p className="mt-4 max-w-2xl text-body text-muted">
            สามข้อที่ผมยึดไว้ทุกครั้งที่เขียนหรือแบ่งปันความรู้
          </p>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {PRINCIPLES.map(({ no, title, body }) => (
              <li key={no} className="border-t border-gold-line pt-6">
                <span className="font-display text-heading font-semibold text-gold">{no}</span>
                <h3 className="mt-2 font-display text-subheading font-semibold text-deep">{title}</h3>
                <p className="mt-2 text-body text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ศาสตร์ที่สนใจ */}
        <section id="topics" className="bg-mist py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow">Focus Areas</p>
            <h2 className="section-title mt-3">ศาสตร์ที่ผมสนใจ</h2>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {AREAS.map(({ icon: Icon, en, th, body, points }) => (
                <li key={en} className="card flex flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-deep text-gold-soft">
                    <Icon />
                  </span>
                  <p className="eyebrow mt-6">{en}</p>
                  <h3 className="mt-1 font-display text-subheading font-semibold text-deep">{th}</h3>
                  <p className="mt-3 text-body text-muted">{body}</p>
                  <ul className="mt-6 space-y-2 border-t border-line pt-5 text-small text-ink">
                    {points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-line" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* เนื้อหาที่จะมีให้อ่าน */}
        <section id="content" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="eyebrow">Journal</p>
          <h2 className="section-title mt-3">บทความและความรู้</h2>
          <p className="mt-4 max-w-2xl text-body text-muted">
            กำลังเตรียมเนื้อหาชุดแรก เร็ว ๆ นี้จะทยอยเผยแพร่ในรูปแบบเหล่านี้
          </p>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {FORMATS.map(({ icon: Icon, title, body }) => (
              <li key={title} className="card">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-deep">
                    <Icon />
                  </span>
                  <span className="rounded-full border border-gold-line px-3 py-1 text-label font-medium text-gold">
                    เร็ว ๆ นี้
                  </span>
                </div>
                <h3 className="mt-5 font-display text-subheading font-semibold text-deep">{title}</h3>
                <p className="mt-2 text-body text-muted">{body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="bg-mist py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title mt-3">คำถามที่พบบ่อย</h2>
            <div className="mt-10 divide-y divide-line rounded-3xl border border-line bg-paper">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group">
                  <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-3xl px-6 py-4 text-body font-semibold text-deep [&::-webkit-details-marker]:hidden">
                    {q}
                    <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-5 text-body text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อ */}
        <section id="contact" className="bg-deep py-20 text-ivory md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div>
              <p className="eyebrow-light">Contact</p>
              <h2 className="mt-3 text-balance font-display text-heading font-semibold">
                ติดต่อสอบถามหรือชวนทำงานร่วมกัน
              </h2>
              <p className="mt-4 text-body text-ivory/85">{CONTACT.hours}</p>
              <div className="mt-8">
                <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold focus-ring-light">
                  <MessageIcon className="h-5 w-5" />
                  {SITE.cta}
                </a>
              </div>
            </div>
            <div className="grid gap-4">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring-light flex items-center gap-4 rounded-2xl border border-gold-soft/25 bg-deep-2 p-5 transition-colors hover:border-gold-soft"
              >
                <MessageIcon className="h-7 w-7 shrink-0 text-gold-soft" />
                <span>
                  <span className="block font-semibold">LINE</span>
                  <span className="text-small text-ivory/80">{CONTACT.lineId}</span>
                </span>
              </a>
              <a
                href={telUrl}
                className="focus-ring-light flex items-center gap-4 rounded-2xl border border-gold-soft/25 bg-deep-2 p-5 transition-colors hover:border-gold-soft"
              >
                <PhoneIcon className="h-7 w-7 shrink-0 text-gold-soft" />
                <span>
                  <span className="block font-semibold">โทร</span>
                  <span className="text-small text-ivory/80">{CONTACT.phone}</span>
                </span>
              </a>
              <a
                href={CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring-light flex items-center gap-4 rounded-2xl border border-gold-soft/25 bg-deep-2 p-5 transition-colors hover:border-gold-soft"
              >
                <FacebookIcon className="h-7 w-7 shrink-0 text-gold-soft" />
                <span>
                  <span className="block font-semibold">Facebook</span>
                  <span className="text-small text-ivory/80">ติดตามบทความใหม่</span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-deep-3 text-ivory/80">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex items-center gap-3">
            <LogoMark className="h-9 w-9 text-ivory" />
            <span className="font-display text-subheading font-semibold text-ivory">{SITE.name}</span>
          </div>
          <p className="mt-5 max-w-3xl text-small">
            เนื้อหาในเว็บนี้เป็นความรู้ทั่วไปเพื่อประกอบการตัดสินใจ ไม่ใช่การวินิจฉัยหรือคำแนะนำการรักษาเฉพาะบุคคล
            หากมีอาการหรือโรคประจำตัว ควรปรึกษาแพทย์ที่ดูแลคุณโดยตรง
          </p>
          <p className="mt-4 text-small">© {SITE.name} สงวนลิขสิทธิ์</p>
        </div>
      </footer>
    </>
  );
}
