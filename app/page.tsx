import {
  BookIcon,
  ChevronDownIcon,
  FacebookIcon,
  FileTextIcon,
  GridIcon,
  LeafIcon,
  MessageIcon,
  PhoneIcon,
  SproutIcon,
} from "./icons";
import { CONTACT, SITE, lineUrl, telUrl } from "./site-config";

const TOPICS = [
  {
    icon: LeafIcon,
    title: "สุขภาพยืนยาว",
    body: "หลักการดูแลสุขภาพระยะยาว คัดจากงานวิจัยและประสบการณ์หน้างาน เล่าให้เข้าใจง่าย เอาไปปรับใช้กับชีวิตจริงได้",
  },
  {
    icon: SproutIcon,
    title: "ฮอร์โมนและการฟื้นฟู",
    body: "เล่าเรื่องฮอร์โมนและเวชศาสตร์ฟื้นฟูแบบตรงไปตรงมา บอกทั้งข้อดีและข้อควรระวัง ไม่โฆษณาเกินจริง",
  },
  {
    icon: GridIcon,
    title: "ทำงานอย่างเป็นระบบ",
    body: "แชร์วิธีคิดและเครื่องมือที่ใช้บริหารงาน ให้เวลาเหลือไปทำสิ่งที่สำคัญกับตัวเองและคนรอบข้าง",
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
    body: "มุมมองและบทเรียนจากสิ่งที่เจอจริง เล่าแบบเป็นกันเอง",
  },
] as const;

const FAQS = [
  {
    q: "เว็บนี้เกี่ยวกับอะไร",
    a: "เป็นพื้นที่ส่วนตัวของผม ใช้แบ่งปันความรู้เรื่องสุขภาพยืนยาว ฮอร์โมน และการทำงานอย่างเป็นระบบ รวมถึงบอกเล่าแนวคิดที่ผมใช้ในชีวิตและการทำงาน",
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

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#top" className="focus-ring font-display text-subheading font-semibold text-ink">
            {SITE.name}
          </a>
          <nav aria-label="เมนูหลัก" className="flex items-center gap-1 sm:gap-4">
            <a href="#topics" className="focus-ring hidden px-2 text-small text-muted hover:text-ink sm:inline">
              หัวข้อ
            </a>
            <a href="#faq" className="focus-ring hidden px-2 text-small text-muted hover:text-ink sm:inline">
              คำถาม
            </a>
            <a href="#contact" className="focus-ring hidden px-2 text-small text-muted hover:text-ink sm:inline">
              ติดต่อ
            </a>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm focus-ring"
            >
              {SITE.cta}
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* ส่วนหัว */}
        <section className="mx-auto grid max-w-5xl gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.25fr_1fr] md:items-center md:pb-24 md:pt-20">
          <div>
            <p className="chip">บล็อกส่วนตัว</p>
            <h1 className="mt-5 font-display text-display font-semibold text-ink">
              สวัสดีครับ{" "}
              <span className="whitespace-nowrap">
                ผม<span className="text-brand">{SITE.name}</span>
              </span>
            </h1>
            <p className="mt-5 text-balance text-subheading text-ink">{SITE.tagline}</p>
            <p className="mt-4 text-body text-muted">
              ทุกเรื่องที่เขียนมาจากประสบการณ์ทำงานจริง และพยายามบอกให้ชัดว่าอะไรคือข้อเท็จจริง อะไรคือความเห็นส่วนตัว
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary focus-ring">
                <MessageIcon className="h-5 w-5" />
                {SITE.cta}
              </a>
              <a href="#topics" className="btn btn-ghost focus-ring">
                ดูหัวข้อที่เขียนถึง
              </a>
            </div>
          </div>

          <div aria-hidden="true" className="relative mx-auto w-full max-w-sm">
            <div className="rounded-[2.5rem] bg-sand p-8">
              <div className="flex aspect-square items-center justify-center rounded-full bg-cream">
                <LeafIcon className="h-24 w-24 text-sage" />
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="chip bg-cream">Longevity</span>
                <span className="chip bg-cream">Hormone</span>
                <span className="chip bg-cream">Regenerative</span>
              </div>
            </div>
          </div>
        </section>

        {/* จุดเด่น 3 ข้อ */}
        <section id="topics" className="mx-auto max-w-5xl px-5 pb-16 md:pb-24">
          <h2 className="section-title">เรื่องที่ผมเขียนถึง</h2>
          <p className="mt-3 max-w-2xl text-body text-muted">
            สามหัวข้อหลักที่ผมสนใจและใช้เวลาศึกษามากที่สุด
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {TOPICS.map(({ icon: Icon, title, body }) => (
              <li key={title} className="card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-sage">
                  <Icon />
                </span>
                <h3 className="mt-4 font-display text-subheading font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-body text-muted">{body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* รูปแบบเนื้อหา */}
        <section id="content" className="bg-sand py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="section-title">เนื้อหาที่จะมีให้อ่าน</h2>
            <p className="mt-3 max-w-2xl text-body text-muted">
              กำลังเตรียมเนื้อหาชุดแรก เร็ว ๆ นี้จะทยอยเผยแพร่ในรูปแบบเหล่านี้
            </p>
            <ul className="mt-8 grid gap-5 md:grid-cols-3">
              {FORMATS.map(({ icon: Icon, title, body }) => (
                <li key={title} className="card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-brand">
                    <Icon />
                  </span>
                  <h3 className="mt-4 font-display text-subheading font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-body text-muted">{body}</p>
                  <p className="mt-4 text-small font-medium text-sage">เร็ว ๆ นี้</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2 className="section-title">คำถามที่พบบ่อย</h2>
          <div className="mt-8 divide-y divide-line rounded-3xl border border-line bg-white">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-3xl px-6 py-4 text-body font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {q}
                  <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-5 text-body text-muted">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="bg-sand py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="section-title">ติดต่อผม</h2>
            <p className="mt-3 text-body text-muted">{CONTACT.hours}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card focus-ring flex flex-col items-start gap-3 transition-colors hover:border-brand"
              >
                <MessageIcon className="h-7 w-7 text-brand" />
                <span className="font-semibold text-ink">LINE</span>
                <span className="text-small text-muted">{CONTACT.lineId}</span>
              </a>
              <a
                href={telUrl}
                className="card focus-ring flex flex-col items-start gap-3 transition-colors hover:border-brand"
              >
                <PhoneIcon className="h-7 w-7 text-brand" />
                <span className="font-semibold text-ink">โทร</span>
                <span className="text-small text-muted">{CONTACT.phone}</span>
              </a>
              <a
                href={CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card focus-ring flex flex-col items-start gap-3 transition-colors hover:border-brand"
              >
                <FacebookIcon className="h-7 w-7 text-brand" />
                <span className="font-semibold text-ink">Facebook</span>
                <span className="text-small text-muted">ติดตามบทความใหม่</span>
              </a>
            </div>
            <div className="mt-8">
              <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary focus-ring">
                <MessageIcon className="h-5 w-5" />
                {SITE.cta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-cream">
        <div className="mx-auto max-w-5xl px-5 py-8 text-small text-muted">
          <p>
            เนื้อหาในเว็บนี้เป็นความรู้ทั่วไปเพื่อประกอบการตัดสินใจ ไม่ใช่การวินิจฉัยหรือคำแนะนำการรักษาเฉพาะบุคคล
            หากมีอาการหรือโรคประจำตัว ควรปรึกษาแพทย์ที่ดูแลคุณโดยตรง
          </p>
          <p className="mt-3">© {SITE.name} สงวนลิขสิทธิ์</p>
        </div>
      </footer>
    </>
  );
}
