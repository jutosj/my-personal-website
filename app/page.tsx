import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  ActivityIcon,
  ArrowRightIcon,
  BookIcon,
  ChevronDownIcon,
  DropletIcon,
  ExternalIcon,
  FacebookIcon,
  FileTextIcon,
  InstagramIcon,
  LogoMark,
  MailIcon,
  MessageIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SproutIcon,
} from "./icons";
import { Mascot, TipBubble } from "./mascot";
import { d } from "./motion";
import { CLINIC, CONTACT, SITE, lineUrl, mailUrl, telUrl } from "./site-config";

// วางไฟล์ภาพถ่ายที่ public/portrait.jpg แล้วหน้าแรกจะใช้ภาพจริงแทนโลโก้โดยอัตโนมัติ
const HAS_PORTRAIT = existsSync(path.join(process.cwd(), "public", "portrait.jpg"));

const TRUST = ["Board Certified ABAARM", "แพทยศาสตรบัณฑิต จุฬาฯ", "MBA Michigan Ross"] as const;

const MASCOT_TIPS = [
  "ดื่มน้ำสักแก้วหรือยังครับ?",
  "ลุกขึ้นยืดเส้นยืดสายกันหน่อย",
  "คืนนี้นอนให้พอนะครับ",
  "สุขภาพดีเริ่มจากเรื่องเล็ก ๆ",
] as const;

const CONTACT_TIPS = ["ทักมาได้เลยนะครับ", "นัดล่วงหน้าสะดวกที่สุด", "ยินดีให้ข้อมูลครับ", "แล้วเจอกันนะครับ"] as const;

const MARQUEE = [
  "Anti-Aging & Regenerative Medicine",
  "Preventive Medicine",
  "Lifestyle Medicine",
  "Hormonal Therapy",
  "Chelation",
  "PRP",
  "Exosome & Cell Therapy",
  "Personalized Genetic Analysis",
  "Urine Organic Profile",
  "Comprehensive Stool Testing",
] as const;

// ฟองแสงทองลอยขึ้นในส่วนหัว (ตำแหน่ง/ขนาด/ความเร็วต่างกัน)
const PARTICLES = [
  { x: 8, s: 5, t: 15, dl: 0 },
  { x: 19, s: 3, t: 19, dl: 6 },
  { x: 31, s: 6, t: 17, dl: 3 },
  { x: 44, s: 4, t: 21, dl: 9 },
  { x: 57, s: 3, t: 16, dl: 12 },
  { x: 68, s: 5, t: 20, dl: 2 },
  { x: 79, s: 4, t: 18, dl: 8 },
  { x: 90, s: 6, t: 22, dl: 5 },
] as const;

const PRINCIPLES = [
  {
    no: "01",
    title: "อิงหลักฐาน",
    body: "เลือกเล่าเฉพาะเรื่องที่มีงานวิจัยหรือแนวทางเวชปฏิบัติรองรับ และบอกให้ชัดว่าข้อมูลนั้นน่าเชื่อถือแค่ไหน",
  },
  {
    no: "02",
    title: "ดูแลที่ต้นเหตุ เฉพาะบุคคล",
    body: "สุขภาพไม่มีสูตรสำเร็จเดียวสำหรับทุกคน ผมเน้นเวชศาสตร์วิถีชีวิต ทั้งโภชนาการ การออกกำลังกาย การนอน และการจัดการความเครียด",
  },
  {
    no: "03",
    title: "ป้องกันไว้ก่อน",
    body: "มองหาความเสี่ยงตั้งแต่เนิ่น ๆ บอกข้อควรระวังควบคู่กับประโยชน์เสมอ และไม่โฆษณาเกินจริง",
  },
] as const;

const EDUCATION = [
  { year: "2023", title: "Board Certified, ABAARM", place: "American Board of Anti-Aging and Regenerative Medicine, Chicago" },
  { year: "2023", title: "Certificate in Chelation Therapy", place: "Thai Chelation Medical Association" },
  { year: "2023", title: "Certificate in Lifestyle Medicine", place: "Public Health, กรุงเทพฯ" },
  { year: "2022", title: "Master of Business Administration", place: "University of Michigan, Stephen M. Ross School of Business" },
  { year: "2022", title: "Diploma in Preventive Medicine", place: "Public Health, กรุงเทพฯ" },
  { year: "2015", title: "แพทยศาสตรบัณฑิต (M.D.)", place: "จุฬาลงกรณ์มหาวิทยาลัย" },
] as const;

const EXTRA = [
  "Member of the American Academy of Anti-Aging Medicine",
  "Certified Project Management – IPMA Level D",
  "International Symposium in Practical Cell & Exosome Therapy",
  "อบรม Urine Organic Profile และ Comprehensive Stool Testing",
  "อบรม Botulinum Toxin, Thread Lifting และ Dermal Fillers",
] as const;

const AREAS = [
  {
    icon: ActivityIcon,
    en: "Longevity",
    th: "สุขภาพยืนยาว",
    body: "หลักการดูแลสุขภาพระยะยาว ตั้งแต่พื้นฐานชีวิตประจำวันไปจนถึงการตรวจเชิงป้องกัน",
    points: ["เวชศาสตร์ป้องกันและเวชศาสตร์วิถีชีวิต", "โภชนาการ ออกกำลังกาย การนอน ความเครียด", "การตรวจสุขภาพเชิงลึกและการวิเคราะห์พันธุกรรม"],
  },
  {
    icon: DropletIcon,
    en: "Hormone",
    th: "ฮอร์โมนและวัย",
    body: "ทำความเข้าใจฮอร์โมนที่เปลี่ยนไปตามวัย อ่านผลตรวจอย่างเข้าใจ และรู้ข้อควรระวังก่อนตัดสินใจ",
    points: ["Hormonal therapy", "การอ่านผลเลือดเบื้องต้น", "ข้อควรระวังและข้อจำกัด"],
  },
  {
    icon: SproutIcon,
    en: "Regenerative",
    th: "เวชศาสตร์ฟื้นฟู",
    body: "แยกให้ออกระหว่างสิ่งที่งานวิจัยยืนยันแล้ว กับสิ่งที่ยังต้องรอหลักฐานเพิ่มเติม",
    points: ["PRP, Exosome และ Cell therapy", "Chelation therapy", "เลือกรับข้อมูลอย่างมีวิจารณญาณ"],
  },
] as const;

const FORMATS = [
  { icon: FileTextIcon, title: "บทความสั้น", body: "อ่านจบในไม่กี่นาที เลือกมาทีละเรื่อง เข้าใจประเด็นหลักได้เร็ว" },
  { icon: BookIcon, title: "สรุปงานวิจัย", body: "ย่อเรื่องยากให้อ่านง่าย พร้อมระบุแหล่งที่มา ให้ตามไปอ่านต่อเองได้" },
  { icon: MessageIcon, title: "เรื่องเล่าจากหน้างาน", body: "มุมมองและบทเรียนจากสิ่งที่พบจริง เล่าแบบเป็นกันเอง" },
] as const;

const FAQS = [
  {
    q: "เว็บนี้ต่างจากเว็บของคลินิกอย่างไร",
    a: "เว็บของคลินิกแนะนำบริการและโปรแกรมการดูแลสุขภาพ ส่วนเว็บนี้เป็นพื้นที่ส่วนตัวของผม ใช้แบ่งปันแนวคิด ความรู้ และประวัติการทำงาน",
  },
  {
    q: "ข้อมูลในเว็บนี้ใช้แทนคำแนะนำของแพทย์ได้ไหม",
    a: "ไม่ได้ครับ เนื้อหาเป็นความรู้ทั่วไปเพื่อประกอบการตัดสินใจ แต่ละคนมีสภาวะต่างกัน หากมีอาการ โรคประจำตัว หรือกำลังใช้ยา ควรปรึกษาแพทย์ที่ดูแลคุณโดยตรง",
  },
  {
    q: "นัดหมายหรือสอบถามได้อย่างไร",
    a: `นัดผ่านหน้านัดหมายของคลินิก หรือโทร ${CONTACT.phone} ได้เลยครับ การนัดล่วงหน้าจะสะดวกที่สุด`,
  },
  {
    q: "น้องเกลียวที่ทักทายอยู่หน้าเว็บคือใคร",
    a: "เป็นมาสคอตของเว็บนี้ครับ คำทักทายของน้องเป็นเกร็ดสุขภาพทั่วไปให้ยิ้มได้ ไม่ใช่คำแนะนำเฉพาะบุคคล",
  },
] as const;

const NAV = [
  { href: "#approach", label: "แนวคิด" },
  { href: "#about", label: "ประวัติ" },
  { href: "#topics", label: "ศาสตร์ที่สนใจ" },
  { href: "#clinic", label: "คลินิก" },
  { href: "#contact", label: "ติดต่อ" },
] as const;

const CONTACT_ITEMS = [
  { icon: PhoneIcon, label: "โทร", value: CONTACT.phone, href: telUrl, external: false },
  { icon: MailIcon, label: "อีเมล", value: CONTACT.email, href: mailUrl, external: false },
  { icon: FacebookIcon, label: "Facebook", value: "120 Wellness Villa Clinic", href: CONTACT.facebookUrl, external: true },
  { icon: InstagramIcon, label: "Instagram", value: "@120wellnessvilla", href: CONTACT.instagramUrl, external: true },
  ...(lineUrl
    ? [{ icon: MessageIcon, label: "LINE", value: CONTACT.lineId, href: lineUrl, external: true }]
    : []),
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="focus-ring flex items-center gap-3 rounded-lg">
            <LogoMark animate className="h-10 w-10 shrink-0 text-deep" />
            <span className="leading-tight">
              <span className="block font-display text-subheading font-semibold text-deep">{SITE.name}</span>
              <span className="hidden text-label font-medium uppercase tracking-[0.14em] text-muted sm:block">
                {SITE.descriptor}
              </span>
            </span>
          </a>
          <nav aria-label="เมนูหลัก" className="flex items-center gap-1 xl:gap-3">
            {NAV.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="focus-ring hidden rounded-md px-2 py-1 text-small text-muted hover:text-deep xl:inline"
              >
                {label}
              </a>
            ))}
            <a href={SITE.ctaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm focus-ring">
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
            className="ring-drift pointer-events-none absolute -right-48 -top-48 h-[36rem] w-[36rem] rounded-full border border-gold-soft/15"
          />
          <div
            aria-hidden="true"
            className="ring-drift pointer-events-none absolute -right-28 -top-28 h-[26rem] w-[26rem] rounded-full border border-gold-soft/20 [animation-delay:-8s]"
          />
          <div
            aria-hidden="true"
            className="glow pointer-events-none absolute -left-32 bottom-[-10rem] h-[32rem] w-[32rem] rounded-full"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {PARTICLES.map((p) => (
              <span
                key={p.x}
                className="particle"
                style={
                  {
                    left: `${p.x}%`,
                    width: p.s,
                    height: p.s,
                    animationDuration: `${p.t}s`,
                    animationDelay: `-${p.dl}s`,
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-14 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-12 md:pb-32 md:pt-24">
            <div>
              <p className="eyebrow-light hero-in" style={d(100)}>
                {SITE.eyebrow}
              </p>
              <h1 className="hero-in mt-5 text-balance font-display text-display font-semibold" style={d(250)}>
                {SITE.headline}
              </h1>
              <p className="hero-in mt-6 max-w-xl text-subheading text-ivory/85" style={d(450)}>
                สวัสดีครับ ผม<span className="shimmer font-semibold">{SITE.name}</span> ({SITE.fullName}) แพทย์ด้านเวชศาสตร์ชะลอวัยและเวชศาสตร์ฟื้นฟู
                ประจำ {CLINIC.name} ผมเขียนและแบ่งปันความรู้ให้เข้าใจง่าย อิงหลักฐาน และบอกข้อจำกัดอย่างตรงไปตรงมา
              </p>
              <div className="hero-in mt-9 flex flex-wrap gap-3" style={d(650)}>
                <a href={SITE.ctaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold focus-ring-light">
                  <MessageIcon className="h-5 w-5" />
                  {SITE.cta}
                </a>
                <a href="#about" className="btn btn-outline-light group focus-ring-light">
                  ประวัติและวุฒิบัตร
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
              <ul className="hero-in mt-10 flex flex-wrap gap-x-7 gap-y-3 text-small text-ivory/85" style={d(850)}>
                {TRUST.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <ShieldCheckIcon className="h-5 w-5 text-gold-soft" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-in relative mx-auto w-full max-w-sm md:max-w-none" style={d(400)}>
              <div className="hero-float relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl border border-gold-soft/30 bg-deep-2">
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
                  <div aria-hidden="true" className="relative flex h-full flex-col items-center justify-start gap-5 pt-[16%]">
                    <span className="pulse-ring absolute left-1/2 top-[27%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-soft/50" />
                    <span
                      className="pulse-ring absolute left-1/2 top-[27%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-soft/50"
                      style={d(2750)}
                    />
                    <LogoMark animate className="relative h-32 w-32 text-ivory" />
                    <p className="eyebrow-light text-center">{SITE.descriptor}</p>
                  </div>
                )}
              </div>

              {/* น้องเกลียว มาสคอต */}
              <Mascot className="absolute -bottom-7 -left-3 w-40 cursor-pointer drop-shadow-xl md:-left-14 md:w-52" />
              <TipBubble
                tips={MASCOT_TIPS}
                className="absolute bottom-[5.5rem] left-[8.5rem] w-44 md:bottom-[7rem] md:left-[9.5rem] md:w-52"
              />
            </div>
          </div>
        </section>

        {/* ริบบิ้นความเชี่ยวชาญ */}
        <section aria-label="ความเชี่ยวชาญ" className="marquee-wrap overflow-hidden border-b border-line bg-ivory py-5">
          <div className="marquee flex w-max">
            {[0, 1].map((g) => (
              <ul
                key={g}
                aria-hidden={g === 1}
                className={`flex shrink-0 items-center ${g === 1 ? "marquee-dup" : ""}`}
              >
                {MARQUEE.map((m) => (
                  <li key={m} className="flex items-center font-display text-subheading text-deep/85">
                    <span className="px-6">{m}</span>
                    <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-gold-line" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* แนวคิดการทำงาน */}
        <section id="approach" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="eyebrow reveal">Approach</p>
          <h2 className="section-title reveal mt-3" style={d(80)}>
            แนวคิดการทำงานของผม
          </h2>
          <p className="reveal mt-4 max-w-2xl text-body text-muted" style={d(160)}>
            สามข้อที่ผมยึดไว้ทุกครั้งที่เขียนหรือแบ่งปันความรู้
          </p>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {PRINCIPLES.map(({ no, title, body }, i) => (
              <li key={no} className="reveal line-grow border-t border-gold-line pt-6" style={d(i * 140)}>
                <span className="font-display text-heading font-semibold text-gold">{no}</span>
                <h3 className="mt-2 font-display text-subheading font-semibold text-deep">{title}</h3>
                <p className="mt-2 text-body text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ประวัติและวุฒิบัตร */}
        <section id="about" className="bg-mist py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow reveal">About</p>
            <h2 className="section-title reveal mt-3" style={d(80)}>
              {SITE.fullName}
            </h2>
            <p className="reveal mt-2 text-subheading text-muted" style={d(140)}>
              {SITE.credentials}
            </p>

            <div className="mt-12 grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
              <div>
                <h3 className="reveal font-display text-subheading font-semibold text-deep">การศึกษาและวุฒิบัตร</h3>
                <ol className="tl-line reveal mt-6 space-y-8">
                  {EDUCATION.map(({ year, title, place }) => (
                    <li key={title} className="relative pl-8">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[5px] top-2.5 h-2.5 w-2.5 rounded-full bg-gold-line ring-4 ring-mist"
                      />
                      <p className="eyebrow">{year}</p>
                      <p className="mt-1 font-semibold text-deep">{title}</p>
                      <p className="text-small text-muted">{place}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="reveal card h-fit self-start" style={d(150)}>
                <h3 className="font-display text-subheading font-semibold text-deep">การอบรมและสมาชิก</h3>
                <ul className="mt-5 space-y-3 text-small text-ink">
                  {EXTRA.map((e) => (
                    <li key={e} className="flex gap-3">
                      <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      {e}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-line pt-4 text-label text-muted">
                  ข้อมูลจากเว็บไซต์ทางการของ {CLINIC.name}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ศาสตร์ที่สนใจ */}
        <section id="topics" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="eyebrow reveal">Focus Areas</p>
          <h2 className="section-title reveal mt-3" style={d(80)}>
            ศาสตร์ที่ผมสนใจ
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {AREAS.map(({ icon: Icon, en, th, body, points }, i) => (
              <li key={en} className="card lift reveal flex flex-col" style={d(i * 140)}>
                <span className="lift-icon flex h-12 w-12 items-center justify-center rounded-full bg-deep text-gold-soft">
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
        </section>

        {/* คลินิก */}
        <section id="clinic" className="bg-mist py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="reveal card grid gap-10 md:grid-cols-[1.2fr_1fr] md:p-12">
              <div>
                <p className="eyebrow">My Clinic</p>
                <h2 className="section-title mt-3">{CLINIC.name}</h2>
                <p className="mt-4 text-body text-muted">
                  ศูนย์สุขภาพที่เน้นเวชศาสตร์ป้องกันและเวชศาสตร์วิถีชีวิต ออกแบบการดูแลให้เหมาะกับแต่ละคน โดยมองหาต้นเหตุของปัญหาสุขภาพ
                  ไม่ใช่แค่บรรเทาอาการ
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={CLINIC.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary focus-ring">
                    ไปที่เว็บคลินิก
                    <ExternalIcon className="h-5 w-5" />
                  </a>
                  <a href={SITE.ctaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline focus-ring">
                    นัดหมาย
                  </a>
                </div>
              </div>
              <div>
                <p className="eyebrow">โปรแกรมของคลินิก</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {CLINIC.programs.map((p) => (
                    <li key={p} className="rounded-full border border-line bg-ivory px-4 py-1.5 text-small text-deep">
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-label text-muted">ความเหมาะสมของแต่ละโปรแกรมขึ้นอยู่กับการประเมินโดยแพทย์</p>
              </div>
            </div>
          </div>
        </section>

        {/* เนื้อหาที่จะมีให้อ่าน */}
        <section id="content" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="eyebrow reveal">Journal</p>
          <h2 className="section-title reveal mt-3" style={d(80)}>
            บทความและความรู้
          </h2>
          <p className="reveal mt-4 max-w-2xl text-body text-muted" style={d(160)}>
            กำลังเตรียมเนื้อหาชุดแรก เร็ว ๆ นี้จะทยอยเผยแพร่ในรูปแบบเหล่านี้
          </p>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {FORMATS.map(({ icon: Icon, title, body }, i) => (
              <li key={title} className="card lift reveal" style={d(i * 140)}>
                <div className="flex items-center justify-between">
                  <span className="lift-icon flex h-12 w-12 items-center justify-center rounded-full bg-mist text-deep">
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
            <p className="eyebrow reveal">FAQ</p>
            <h2 className="section-title reveal mt-3" style={d(80)}>
              คำถามที่พบบ่อย
            </h2>
            <div className="reveal mt-10 divide-y divide-line rounded-3xl border border-line bg-paper" style={d(160)}>
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
            <div className="reveal">
              <p className="eyebrow-light">Contact</p>
              <h2 className="mt-3 text-balance font-display text-heading font-semibold">
                ติดต่อสอบถามหรือนัดหมาย
              </h2>
              <p className="mt-4 text-body text-ivory/85">
                นัดล่วงหน้าผ่านหน้านัดหมายของคลินิก หรือโทรสอบถามได้เลยครับ
              </p>
              <div className="mt-8">
                <a href={SITE.ctaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold focus-ring-light">
                  <MessageIcon className="h-5 w-5" />
                  {SITE.cta}
                </a>
              </div>
              <div className="relative mt-16 h-52">
                <Mascot className="absolute bottom-0 left-0 w-40 cursor-pointer" />
                <TipBubble tips={CONTACT_TIPS} className="absolute bottom-24 left-44 w-48" />
              </div>
            </div>
            <div className="grid gap-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, external }, i) => (
                <a
                  key={label}
                  href={href}
                  style={d(100 + i * 120)}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="focus-ring-light lift reveal flex items-center gap-4 rounded-2xl border border-gold-soft/25 bg-deep-2 p-5 hover:border-gold-soft"
                >
                  <Icon className="h-7 w-7 shrink-0 text-gold-soft" />
                  <span className="min-w-0">
                    <span className="block font-semibold">{label}</span>
                    <span className="block truncate text-small text-ivory/80">{value}</span>
                  </span>
                </a>
              ))}
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
          <p className="mt-4 text-small">© {SITE.fullName} สงวนลิขสิทธิ์</p>
        </div>
      </footer>
    </>
  );
}
