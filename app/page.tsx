import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
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
import { MenuButton } from "./menu";
import { d } from "./motion";
import { Parallax, ScrollRows, type RowPart } from "./motion-client";
import { PokeBubble } from "./poke";
import { SpyList } from "./spy-list";
import { CLINIC, CONTACT, SITE, lineUrl, mailUrl, telUrl } from "./site-config";

// วางรูปหมอกิต (แนะนำ PNG พื้นหลังโปร่งใส) ไว้ที่ public/portrait.png แล้วส่วนหัวจะใช้รูปจริงเอง
const PORTRAIT = ["portrait.png", "portrait.webp", "portrait.jpg"].find((f) =>
  existsSync(path.join(process.cwd(), "public", f)),
);

const MASCOT_TIPS = [
  "ดื่มน้ำสักแก้วหรือยังครับ?",
  "ลุกขึ้นยืดเส้นยืดสายกันหน่อย",
  "คืนนี้นอนให้พอนะครับ",
  "ลองกดเกลียวข้าง ๆ ดูสิ 👀",
] as const;

const CONTACT_TIPS = ["ทักมาได้เลยนะครับ", "นัดล่วงหน้าสะดวกที่สุด", "ยินดีให้ข้อมูลครับ", "แล้วเจอกันนะครับ"] as const;

const ROWS: RowPart[][] = [
  [{ t: "Live longer", serif: true }, { t: "สุขภาพยืนยาว" }, { t: "Live better", serif: true }, { t: "ชีวิตมีคุณภาพ" }],
  [{ t: "Evidence-based" }, { t: "เข้าใจง่าย", serif: true }, { t: "Prevention first" }, { t: "ป้องกันไว้ก่อน", serif: true }],
];

const BELIEF =
  "ชีวิตที่ *ยืนยาว ไม่ได้เริ่มที่ การรักษา แต่เริ่มจาก *การป้องกัน การเข้าใจ ร่างกายตัวเอง และการตัดสินใจ *บนหลักฐาน";

// ภาพประกอบจาก Unsplash วางแบบคอลลาจ (ตำแหน่งบนจอใหญ่ + ความเร็ว parallax)
const COLLAGE = [
  { src: "/images/breakfast.jpg", alt: "อาหารเช้าผลไม้และโยเกิร์ตหลากสี", en: "Nutrition", th: "โภชนาการ", pos: "md:left-[3%] md:top-[3%] md:w-[19vw]", ratio: "aspect-[4/5]", speed: 0.12 },
  { src: "/images/morning-stretch.jpg", alt: "ผู้หญิงบิดขี้เกียจบนเตียงริมหน้าต่างยามเช้า", en: "Sleep", th: "การนอน", pos: "md:right-[4%] md:top-[1%] md:w-[18vw]", ratio: "aspect-[4/3]", speed: -0.1 },
  { src: "/images/longevity-smile.jpg", alt: "ผู้หญิงยิ้มกว้างนั่งพักในป่า", en: "Longevity", th: "ยืนยาว", pos: "md:left-[41%] md:top-[0%] md:w-[15vw]", ratio: "aspect-[4/5]", speed: 0.2 },
  { src: "/images/yoga-grass.jpg", alt: "ผู้หญิงนั่งทำโยคะบนสนามหญ้า", en: "Movement", th: "การเคลื่อนไหว", pos: "md:left-[2%] md:top-[47%] md:w-[23vw]", ratio: "aspect-[4/3]", speed: 0.08 },
  { src: "/images/calm-lake.jpg", alt: "ผู้หญิงนั่งพักริมทะเลสาบ", en: "Mind", th: "ใจสงบ", pos: "md:right-[2%] md:top-[42%] md:w-[21vw]", ratio: "aspect-[4/5]", speed: -0.14 },
  { src: "/images/laugh-nature.jpg", alt: "เพื่อนหัวเราะด้วยกันกลางทุ่งหญ้า", en: "Joy", th: "ความสุข", pos: "md:left-[25%] md:top-[76%] md:w-[18vw]", ratio: "aspect-[4/3]", speed: 0.16 },
  { src: "/images/friends-park.jpg", alt: "คุณยายสองคนยิ้มในสวนสาธารณะ", en: "Connection", th: "ความสัมพันธ์", pos: "md:right-[22%] md:top-[80%] md:w-[16vw]", ratio: "aspect-[4/5]", speed: -0.06 },
] as const;

const PRINCIPLES = [
  { no: "01", title: "อิงหลักฐาน", body: "เลือกเล่าเฉพาะเรื่องที่มีงานวิจัยหรือแนวทางเวชปฏิบัติรองรับ และบอกให้ชัดว่าข้อมูลนั้นน่าเชื่อถือแค่ไหน" },
  { no: "02", title: "ดูแลที่ต้นเหตุ เฉพาะบุคคล", body: "สุขภาพไม่มีสูตรสำเร็จเดียวสำหรับทุกคน ผมเน้นเวชศาสตร์วิถีชีวิต ทั้งโภชนาการ การออกกำลังกาย การนอน และการจัดการความเครียด" },
  { no: "03", title: "ป้องกันไว้ก่อน", body: "มองหาความเสี่ยงตั้งแต่เนิ่น ๆ บอกข้อควรระวังควบคู่กับประโยชน์เสมอ และไม่โฆษณาเกินจริง" },
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
  { href: "#lifestyle", label: "ชีวิตที่สมดุล", en: "Lifestyle" },
  { href: "#approach", label: "แนวคิด", en: "Approach" },
  { href: "#topics", label: "ความเชี่ยวชาญ", en: "Specializations" },
  { href: "#about", label: "ประวัติ", en: "About" },
  { href: "#clinic", label: "คลินิก", en: "Clinic" },
  { href: "#contact", label: "ติดต่อ", en: "Contact" },
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
      {/* Intro: พื้นเขียวสด โลโก้ถูกวาด + แถบโหลด แล้วม่านเลื่อนขึ้น */}
      <div aria-hidden="true" className="intro">
        <LogoMark animate className="h-24 w-24 md:h-28 md:w-28" />
        <div className="absolute bottom-10 flex w-52 flex-col items-center gap-3">
          <span className="text-label font-bold uppercase tracking-[0.3em]">Loading longevity</span>
          <span className="block h-[2px] w-full bg-deep/20">
            <span className="intro-bar block h-full bg-deep" />
          </span>
        </div>
      </div>

      <header id="site-header" className="site-header fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-3 md:px-8">
          <a href="#top" className="focus-ring rounded leading-none text-deep">
            <span className="block font-display text-subheading italic">Dr.</span>
            <span className="block text-subheading font-bold uppercase tracking-tight">Jutos</span>
          </a>
          <a href="#top" aria-label="กลับด้านบน" className="focus-ring absolute left-1/2 hidden -translate-x-1/2 rounded-full text-deep md:block">
            <LogoMark className="h-9 w-9" />
          </a>
          <div className="flex items-center gap-2">
            <a href={SITE.ctaUrl} {...ext} className="btn btn-fresh btn-sm focus-ring">
              {SITE.cta}
            </a>
            <MenuButton items={NAV} ctaHref={SITE.ctaUrl} ctaLabel={SITE.cta} />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ส่วนหัว: ลายเส้นภูมิประเทศ + จุดเด่นกลางจอ */}
        <section id="top" className="topo relative overflow-hidden pt-24 md:min-h-[100svh] md:pt-0">
          <p
            aria-hidden="true"
            className="outline-text pointer-events-none absolute inset-x-0 top-[12%] select-none text-center font-display text-mega font-semibold md:top-[16%]"
          >
            LONGEVITY
          </p>

          <div
            className="hero-in relative mx-auto aspect-square w-[min(88vw,560px)] md:absolute md:bottom-0 md:left-1/2 md:w-[min(50vw,720px)] md:-translate-x-1/2"
            style={d(150)}
          >
            {PORTRAIT ? (
              <>
                <HelixCanvas className="helix absolute -inset-[8%] h-[116%] w-[116%] opacity-80" />
                <Image src={`/${PORTRAIT}`} alt={`${SITE.fullName} (${SITE.name})`} fill priority sizes="(min-width: 768px) 50vw, 88vw" className="object-contain object-bottom" />
              </>
            ) : (
              <>
                <HelixCanvas className="helix absolute inset-0 h-full w-full" />
                <span className="pointer-events-none absolute bottom-[18%] right-[8%] -rotate-[28deg] text-label font-semibold uppercase tracking-[0.16em] text-deep/70">
                  อย่ากดเกลียวนี้นะ
                </span>
                <PokeBubble className="absolute left-[6%] top-[16%]" />
              </>
            )}
          </div>

          <div className="hero-in relative z-10 px-5 pb-10 pt-6 md:absolute md:bottom-10 md:left-8 md:max-w-sm md:p-0" style={d(450)}>
            <p className="eyebrow">{SITE.eyebrow}</p>
            <h1 className="mt-3 leading-none text-deep">
              <span className="block font-display text-display font-semibold italic">{SITE.name}</span>
              <span className="mt-3 block text-subheading font-bold uppercase tracking-tight">{SITE.fullName}</span>
            </h1>
            <p className="mt-3 text-small text-muted">
              แพทย์ด้านเวชศาสตร์ชะลอวัยและเวชศาสตร์ฟื้นฟู · {SITE.credentials}
            </p>
            <a
              href={CONTACT.tiktokUrl}
              {...ext}
              className="focus-ring mt-6 inline-flex items-center gap-3 rounded-xl border border-deep/20 bg-ivory/80 p-3 pr-5 transition-colors hover:border-deep/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-fresh text-deep">
                <TikTokIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-label font-semibold uppercase tracking-[0.18em] text-muted">ช่องของผม</span>
                <span className="block text-small font-semibold text-deep">{CONTACT.tiktokHandle}</span>
              </span>
            </a>
          </div>

          {!PORTRAIT && (
            <div className="hero-in relative hidden md:absolute md:bottom-10 md:right-8 md:block md:h-48 md:w-[22rem]" style={d(750)}>
              <Mascot className="absolute bottom-0 left-0 w-36 cursor-pointer" />
              <TipBubble dark tips={MASCOT_TIPS} className="absolute bottom-24 left-40 w-48" />
            </div>
          )}
        </section>

        {/* ตัวอักษรยักษ์วิ่งสวนกัน + ภาพลอยกลาง */}
        <section aria-label="Live longer, live better" className="topo-dark relative overflow-hidden py-20 md:py-32">
          <ScrollRows rows={ROWS} className="space-y-2 md:space-y-4" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[min(56vw,320px)] -translate-x-1/2 -translate-y-1/2">
            <Parallax speed={-0.12}>
              <figure className="duo reveal rotate-[-3deg] overflow-hidden shadow-2xl">
                <Image src="/images/smile-sky.jpg" alt="ผู้หญิงยิ้มมองท้องฟ้าอย่างสดใส" width={640} height={480} sizes="320px" className="aspect-[4/3] w-full object-cover" />
              </figure>
            </Parallax>
          </div>
        </section>

        {/* ความเชื่อ: เติมสีตามการเลื่อน */}
        <section className="topo-dark px-5 pb-28 pt-8 md:pb-40">
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow-light reveal">Belief</p>
            <div className="fill-dark">
              <FillText text={BELIEF} className="mt-6 font-display text-statement font-semibold" />
            </div>
            <p className="reveal mt-10 text-small font-bold uppercase tracking-[0.3em] text-ivory/60">Live longer · Live better</p>
          </div>
        </section>

        {/* คอลลาจ: ชีวิตที่สมดุล */}
        <section id="lifestyle" className="topo relative overflow-hidden px-5 py-20 md:h-[150vh] md:min-h-[1100px] md:px-0 md:py-0">
          <div className="reveal relative z-10 mx-auto max-w-md text-center md:absolute md:left-1/2 md:top-[36%] md:max-w-sm md:-translate-x-1/2 lg:max-w-md">
            <p className="eyebrow">Lifestyle Medicine</p>
            <h2 className="mt-4 font-display text-heading font-semibold text-deep">
              สุขภาพที่ดี <span className="hl px-1">สร้างได้</span> จากเรื่องเล็ก ๆ ในทุกวัน
            </h2>
            <p className="mt-5 text-body text-muted">
              โภชนาการ การนอน การเคลื่อนไหว ใจที่สงบ และความสัมพันธ์ที่ดี คือรากฐานของเวชศาสตร์วิถีชีวิต ที่ผมใช้ดูแลสุขภาพในทุกวัน
            </p>
            <p className="sign mt-6 font-script text-display text-leaf-ink">หมอกิต</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-0">
            {COLLAGE.map((c, i) => (
              <figure key={c.src} className={`reveal md:absolute ${c.pos}`} style={d((i % 3) * 120)}>
                <Parallax speed={c.speed}>
                  <div className="duo">
                    <Image src={c.src} alt={c.alt} width={800} height={1000} sizes="(min-width: 768px) 22vw, 45vw" className={`${c.ratio} w-full object-cover`} />
                  </div>
                  <figcaption className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="tag">{c.en}</span>
                    <span className="text-label text-muted">{c.th}</span>
                  </figcaption>
                </Parallax>
              </figure>
            ))}
          </div>
        </section>

        {/* แนวคิดการทำงาน */}
        <section id="approach" className="border-t border-line bg-ivory">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <p className="eyebrow reveal">Approach</p>
            <h2 className="section-title reveal mt-3" style={d(80)}>
              แนวคิดการทำงานของผม
            </h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {PRINCIPLES.map(({ no, title, body }, i) => (
                <li key={no} className="reveal line-grow border-t border-deep pt-6" style={d(i * 140)}>
                  <span className="font-display text-heading font-semibold italic text-leaf-ink">{no}</span>
                  <h3 className="mt-2 font-display text-subheading font-semibold text-deep">{title}</h3>
                  <p className="mt-2 text-body text-muted">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ความเชี่ยวชาญ */}
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
                    <span aria-hidden="true" className="absolute -left-[5px] top-2.5 h-2.5 w-2.5 rounded-full bg-fresh ring-4 ring-ivory" />
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
                    <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-leaf-ink" />
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
                  <span className="tag">เร็ว ๆ นี้</span>
                </div>
                <h3 className="mt-5 font-display text-subheading font-semibold text-deep">{title}</h3>
                <p className="mt-2 text-body text-muted">{body}</p>
              </li>
            ))}
          </ul>
          <a
            href={CONTACT.tiktokUrl}
            {...ext}
            className="topo-dark lift reveal focus-ring mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl p-8 text-ivory md:flex-row md:items-center md:p-10"
          >
            <span className="flex items-center gap-5">
              <span className="lift-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-fresh text-deep">
                <TikTokIcon className="h-7 w-7" />
              </span>
              <span>
                <span className="block font-display text-subheading font-semibold">ระหว่างรอบทความ ดูคลิปสั้นของผมได้ที่ TikTok</span>
                <span className="text-small text-ivory/80">{CONTACT.tiktokHandle}</span>
              </span>
            </span>
            <span className="btn btn-fresh shrink-0">
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
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-open:bg-fresh">
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
        <section id="contact" className="topo-dark py-20 text-ivory md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div className="reveal">
              <p className="eyebrow-light">Contact</p>
              <h2 className="mt-3 text-balance font-display text-heading font-semibold">
                ติดต่อสอบถาม <span className="italic text-fresh">หรือนัดหมาย</span>
              </h2>
              <p className="mt-4 text-body text-ivory/85">นัดล่วงหน้าผ่านหน้านัดหมายของคลินิก หรือโทรสอบถามได้เลยครับ</p>
              <div className="mt-8">
                <a href={SITE.ctaUrl} {...ext} className="btn btn-fresh focus-ring-light">
                  {SITE.cta}
                  <ArrowRightIcon className="h-5 w-5" />
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
                  className="focus-ring-light lift reveal flex items-center gap-4 rounded-2xl border border-fresh/20 bg-deep-2/80 p-5 hover:border-fresh"
                >
                  <Icon className="h-7 w-7 shrink-0 text-fresh" />
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
            <span className="leading-none text-ivory">
              <span className="block font-display text-small italic">Dr.</span>
              <span className="block text-small font-bold uppercase tracking-tight">Jutos</span>
            </span>
          </div>
          <p className="mt-5 max-w-3xl text-small">
            เนื้อหาในเว็บนี้เป็นความรู้ทั่วไปเพื่อประกอบการตัดสินใจ ไม่ใช่การวินิจฉัยหรือคำแนะนำการรักษาเฉพาะบุคคล
            หากมีอาการหรือโรคประจำตัว ควรปรึกษาแพทย์ที่ดูแลคุณโดยตรง
          </p>
          <p className="mt-4 text-small">© {SITE.fullName} สงวนลิขสิทธิ์ · ภาพประกอบจาก Unsplash</p>
        </div>
      </footer>
    </>
  );
}
