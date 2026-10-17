import type { CSSProperties } from "react";
import { FillText } from "./fill-text";
import { HelixCanvas } from "./helix-canvas";
import {
  ArrowRightIcon,
  BookIcon,
  ChevronDownIcon,
  ExternalIcon,
  FacebookIcon,
  FileTextIcon,
  InstagramIcon,
  LogoMark,
  MailIcon,
  MessageIcon,
  PhoneIcon,
  ShieldCheckIcon,
  TikTokIcon,
} from "./icons";
import { Mascot, TipBubble } from "./mascot";
import { d } from "./motion";
import { PokeBubble } from "./poke";
import { SpyList } from "./spy-list";
import { CLINIC, CONTACT, SITE, lineUrl, mailUrl, telUrl } from "./site-config";

const TRUST = ["Board Certified ABAARM", "แพทยศาสตรบัณฑิต จุฬาฯ", "MBA Michigan Ross"] as const;

const MASCOT_TIPS = [
  "ดื่มน้ำสักแก้วหรือยังครับ?",
  "ลุกขึ้นยืดเส้นยืดสายกันหน่อย",
  "คืนนี้นอนให้พอนะครับ",
  "ลองกดเกลียวข้างบนดูสิ 👀",
] as const;

const CONTACT_TIPS = ["ทักมาได้เลยนะครับ", "นัดล่วงหน้าสะดวกที่สุด", "ยินดีให้ข้อมูลครับ", "แล้วเจอกันนะครับ"] as const;

const TICKER = [
  "Board Certified ABAARM",
  "M.D. Chulalongkorn University",
  "MBA University of Michigan – Ross",
  "Preventive & Lifestyle Medicine",
  CLINIC.name,
  `TikTok ${CONTACT.tiktokHandle}`,
] as const;

const STATEMENT =
  "ผมเชื่อว่า ชีวิตที่ยืนยาว และมีคุณภาพ ไม่ได้เริ่มที่การรักษา แต่เริ่มจาก การป้องกัน การเข้าใจร่างกาย ของตัวเอง และการตัดสินใจ บนหลักฐาน ที่ดีที่สุดในวันนี้";

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

const SPECIALTIES = [
  { title: "Anti-Aging & Regenerative Medicine", th: "เวชศาสตร์ชะลอวัยและฟื้นฟู", body: "ดูแลสุขภาพเชิงรุก เพื่อคุณภาพชีวิตที่ดีในระยะยาว" },
  { title: "Preventive Medicine", th: "เวชศาสตร์ป้องกัน", body: "ค้นหาความเสี่ยงตั้งแต่เนิ่น ๆ และวางแผนป้องกันก่อนเกิดโรค" },
  { title: "Lifestyle Medicine", th: "เวชศาสตร์วิถีชีวิต", body: "ใช้โภชนาการ การออกกำลังกาย การนอน และการจัดการความเครียดเป็นรากฐานของสุขภาพ" },
  { title: "Hormonal Therapy", th: "การดูแลสมดุลฮอร์โมน", body: "ประเมินและดูแลฮอร์โมนตามวัยและสภาวะของแต่ละคน ภายใต้การดูแลของแพทย์" },
  { title: "Chelation Therapy", th: "คีเลชันบำบัด", body: "การบำบัดด้วยสารคีเลชันตามข้อบ่งชี้ ภายใต้การดูแลของแพทย์" },
  { title: "PRP", th: "พลาสมาเกล็ดเลือดเข้มข้น", body: "การใช้พลาสมาเกล็ดเลือดเข้มข้นที่เตรียมจากเลือดของผู้รับการรักษาเอง" },
  { title: "Exosome & Cell Therapy", th: "เอ็กโซโซมและเซลล์บำบัด", body: "ศาสตร์ใหม่ด้านเวชศาสตร์ฟื้นฟู ที่ยังมีการศึกษาวิจัยอย่างต่อเนื่อง" },
  { title: "Personalized Genetic Analysis", th: "การวิเคราะห์พันธุกรรมเฉพาะบุคคล", body: "ใช้ข้อมูลพันธุกรรมประกอบการวางแผนดูแลสุขภาพเฉพาะบุคคล" },
  { title: "Urine Organic Profile", th: "การตรวจสารอินทรีย์ในปัสสาวะ", body: "ตรวจสารเมตาบอไลต์ในปัสสาวะ เพื่อดูภาพรวมการทำงานของร่างกาย" },
  { title: "Comprehensive Stool Testing", th: "การตรวจอุจจาระแบบละเอียด", body: "ตรวจอุจจาระอย่างละเอียด เพื่อประเมินสุขภาพของลำไส้" },
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
  { href: "#topics", label: "ความเชี่ยวชาญ" },
  { href: "#about", label: "ประวัติ" },
  { href: "#clinic", label: "คลินิก" },
  { href: "#contact", label: "ติดต่อ" },
] as const;

const CONTACT_ITEMS = [
  { icon: TikTokIcon, label: "TikTok", value: CONTACT.tiktokHandle, href: CONTACT.tiktokUrl, external: true },
  { icon: PhoneIcon, label: "โทร", value: CONTACT.phone, href: telUrl, external: false },
  { icon: MailIcon, label: "อีเมล", value: CONTACT.email, href: mailUrl, external: false },
  { icon: FacebookIcon, label: "Facebook", value: CLINIC.name, href: CONTACT.facebookUrl, external: true },
  { icon: InstagramIcon, label: "Instagram", value: "@120wellnessvilla", href: CONTACT.instagramUrl, external: true },
  ...(lineUrl ? [{ icon: MessageIcon, label: "LINE", value: CONTACT.lineId, href: lineUrl, external: true }] : []),
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      {/* Intro: ตัวอักษรประกอบขึ้น แล้วม่านเลื่อนขึ้น */}
      <div aria-hidden="true" className="intro">
        <LogoMark className="intro-mark h-14 w-14 text-deep md:h-20 md:w-20" />
        <span className="text-hero font-bold tracking-tight text-deep">
          {"DR.JUTOS".split("").map((c, i) => (
            <span key={i} className="intro-letter" style={{ "--i": i } as CSSProperties}>
              {c}
            </span>
          ))}
        </span>
      </div>

      <header id="site-header" className="site-header sticky top-0 z-30 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="focus-ring flex items-center gap-3 rounded-lg text-[color:var(--hfg)]">
            <LogoMark animate className="h-10 w-10 shrink-0" />
            <span className="leading-tight">
              <span className="block font-display text-subheading font-semibold">{SITE.name}</span>
              <span className="hidden text-label font-medium uppercase tracking-[0.14em] text-[color:var(--hmuted)] sm:block">
                {SITE.descriptor}
              </span>
            </span>
          </a>
          <nav aria-label="เมนูหลัก" className="flex items-center gap-1 xl:gap-3">
            {NAV.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="focus-ring hidden rounded-md px-2 py-1 text-small text-[color:var(--hmuted)] transition-colors hover:text-[color:var(--hfg)] xl:inline"
              >
                {label}
              </a>
            ))}
            <a href={SITE.ctaUrl} {...ext} className="btn btn-gold btn-sm focus-ring">
              {SITE.cta}
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* ส่วนหัว: ตัวอักษรยักษ์ + เกลียว DNA ที่กดเล่นได้ */}
        <section className="relative overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 md:pb-24 md:pt-16">
            <p className="eyebrow hero-in" style={d(0)}>
              {SITE.eyebrow}
            </p>
            <h1 className="hero-in relative mt-6 max-w-5xl text-balance text-hero font-bold tracking-tight text-deep" style={d(120)}>
              สุขภาพยืนยาว, เริ่มจากความเข้าใจ<span className="text-gold">ที่ถูกต้อง.</span>
            </h1>

            <div
              className="hero-in relative z-10 mx-auto mt-6 aspect-square w-72 sm:w-96 md:absolute md:right-0 md:top-0 md:mt-0 md:w-[min(46vw,580px)]"
              style={d(350)}
            >
              <HelixCanvas className="helix absolute inset-0 h-full w-full" />
              <span className="pointer-events-none absolute bottom-[16%] right-[10%] -rotate-[28deg] text-label font-semibold uppercase tracking-[0.16em] text-deep/70">
                อย่ากดเกลียวนี้นะ
              </span>
              <PokeBubble className="absolute left-[8%] top-[14%]" />
            </div>

            <div className="relative z-10 mt-10 grid gap-10 md:mt-16 md:grid-cols-[minmax(0,36rem)_1fr] md:items-end">
              <div className="hero-in" style={d(300)}>
                <p className="text-subheading text-muted">
                  สวัสดีครับ ผม<span className="shimmer-dark font-semibold">{SITE.name}</span> ({SITE.fullName}) แพทย์ด้านเวชศาสตร์ชะลอวัยและเวชศาสตร์ฟื้นฟู
                  ประจำ {CLINIC.name} ผมแบ่งปันความรู้ให้เข้าใจง่าย อิงหลักฐาน และบอกข้อจำกัดอย่างตรงไปตรงมา
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={SITE.ctaUrl} {...ext} className="btn btn-primary focus-ring">
                    {SITE.cta}
                    <ArrowRightIcon className="h-5 w-5" />
                  </a>
                  <a href={CONTACT.tiktokUrl} {...ext} className="btn btn-outline group focus-ring">
                    <TikTokIcon className="h-5 w-5" />
                    ดูคลิปบน TikTok
                  </a>
                </div>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-small text-muted">
                  {TRUST.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <ShieldCheckIcon className="h-5 w-5 text-gold" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hero-in relative hidden h-56 md:block" style={d(600)}>
                <Mascot className="absolute bottom-0 left-[8%] w-40 cursor-pointer" />
                <TipBubble dark tips={MASCOT_TIPS} className="absolute bottom-28 left-[calc(8%+11rem)] w-52" />
              </div>
            </div>
          </div>
        </section>

        {/* แถบข้อความวิ่ง */}
        <section aria-label="จุดเด่น" className="marquee-wrap overflow-hidden bg-deep py-4">
          <div className="marquee flex w-max">
            {[0, 1].map((g) => (
              <ul key={g} aria-hidden={g === 1} className={`flex shrink-0 items-center ${g === 1 ? "marquee-dup" : ""}`}>
                {TICKER.map((m) => (
                  <li key={m} className="flex items-center text-small font-semibold uppercase tracking-[0.16em] text-gold-soft">
                    <span className="px-7">{m}</span>
                    <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold-soft" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* ข้อความความเชื่อ เติมสีตามการเลื่อน */}
        <section className="mx-auto max-w-6xl px-5 py-24 md:py-36">
          <p className="eyebrow reveal">Belief</p>
          <FillText text={STATEMENT} className="mt-6 font-display text-statement font-semibold" />
        </section>

        {/* แนวคิดการทำงาน */}
        <section id="approach" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <p className="eyebrow reveal">Approach</p>
            <h2 className="section-title reveal mt-3" style={d(80)}>
              แนวคิดการทำงานของผม
            </h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {PRINCIPLES.map(({ no, title, body }, i) => (
                <li key={no} className="reveal line-grow border-t border-gold-line pt-6" style={d(i * 140)}>
                  <span className="font-display text-heading font-semibold text-gold">{no}</span>
                  <h3 className="mt-2 font-display text-subheading font-semibold text-deep">{title}</h3>
                  <p className="mt-2 text-body text-muted">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ความเชี่ยวชาญ: รายการเข้มขึ้นตามการเลื่อน */}
        <section id="topics" className="bg-mist">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <p className="eyebrow reveal">Specializations</p>
            <h2 className="section-title reveal mt-3" style={d(80)}>
              ความเชี่ยวชาญ
            </h2>
            <div className="mt-12">
              <SpyList items={SPECIALTIES} />
            </div>
          </div>
        </section>

        {/* ประวัติและวุฒิบัตร */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
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
                      className="absolute -left-[5px] top-2.5 h-2.5 w-2.5 rounded-full bg-gold-line ring-4 ring-ivory"
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
              <p className="mt-6 border-t border-line pt-4 text-label text-muted">ข้อมูลจากเว็บไซต์ทางการของ {CLINIC.name}</p>
            </div>
          </div>
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
                  <a href={CLINIC.url} {...ext} className="btn btn-primary focus-ring">
                    ไปที่เว็บคลินิก
                    <ExternalIcon className="h-5 w-5" />
                  </a>
                  <a href={SITE.ctaUrl} {...ext} className="btn btn-outline focus-ring">
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

        {/* บทความ + TikTok */}
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
                  <span className="rounded-full border border-gold-line px-3 py-1 text-label font-medium text-gold">เร็ว ๆ นี้</span>
                </div>
                <h3 className="mt-5 font-display text-subheading font-semibold text-deep">{title}</h3>
                <p className="mt-2 text-body text-muted">{body}</p>
              </li>
            ))}
          </ul>
          <a
            href={CONTACT.tiktokUrl}
            {...ext}
            className="lift reveal focus-ring mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl bg-deep p-8 text-ivory md:flex-row md:items-center md:p-10"
          >
            <span className="flex items-center gap-5">
              <span className="lift-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-soft text-deep">
                <TikTokIcon className="h-7 w-7" />
              </span>
              <span>
                <span className="block font-display text-subheading font-semibold">ระหว่างรอบทความ ดูคลิปสั้นของผมได้ที่ TikTok</span>
                <span className="text-small text-ivory/80">{CONTACT.tiktokHandle}</span>
              </span>
            </span>
            <span className="btn btn-gold shrink-0">
              ติดตามบน TikTok
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          </a>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="bg-mist py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <p className="eyebrow reveal">FAQ</p>
            <h2 className="section-title reveal mt-3" style={d(80)}>
              คำถามที่พบบ่อย
            </h2>
            <div className="reveal mt-10 divide-y divide-line border-y border-line" style={d(160)}>
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group">
                  <summary className="focus-ring flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 text-subheading font-medium text-deep [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-open:bg-deep group-open:text-ivory">
                      <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </span>
                  </summary>
                  <p className="pb-6 pr-12 text-body text-muted">{a}</p>
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
              <h2 className="mt-3 text-balance font-display text-heading font-semibold">ติดต่อสอบถามหรือนัดหมาย</h2>
              <p className="mt-4 text-body text-ivory/85">นัดล่วงหน้าผ่านหน้านัดหมายของคลินิก หรือโทรสอบถามได้เลยครับ</p>
              <div className="mt-8">
                <a href={SITE.ctaUrl} {...ext} className="btn btn-gold focus-ring-light">
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
                  style={d(100 + i * 110)}
                  {...(external ? ext : {})}
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

      {/* ปุ่มลอยมุมขวาล่าง */}
      <a
        href={SITE.ctaUrl}
        {...ext}
        className="float-cta btn btn-primary focus-ring fixed bottom-5 right-5 z-40 shadow-xl"
      >
        นัดปรึกษา?
        <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-gold-soft" />
      </a>
    </>
  );
}
