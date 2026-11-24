import Image from "next/image"
import { FOUNDER, FOUNDER_MAKES, FOUNDER_SOCIALS, FOUNDER_STEPS } from "@/data/site"

/* "About the founder": the same information as cgheven.com/ammar-khan (bio, why CGHEVEN started, what I make, links). */
export function FounderSection() {
  return (
    <section aria-labelledby="founder-heading" className="mt-6 flex flex-col gap-6">
      <h2 id="founder-heading">About the founder</h2>

      <div className="grid gap-6 overflow-hidden rounded-3xl border border-line bg-surface sm:grid-cols-[220px_1fr]">
        <div className="relative aspect-[4/4.4] sm:aspect-auto sm:min-h-[300px]">
          <Image src="/ammar-khan.jpg" alt={FOUNDER.name} fill sizes="(max-width: 640px) 100vw, 220px" className="object-cover object-[center_20%]" />
        </div>
        <div className="flex flex-col justify-center gap-3 p-5 sm:py-7 sm:pl-0 sm:pr-7">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-teal">{FOUNDER.eyebrow}</span>
          <h3 className="m-0 font-display text-3xl font-extrabold tracking-tight text-text">{FOUNDER.greeting}</h3>
          <p className="m-0 text-sm font-semibold text-orange">{FOUNDER.role}</p>
          <p className="m-0 text-[15px] leading-7 text-[#c5ccd6]">{FOUNDER.bio}</p>
        </div>
      </div>

      <div className="rounded-3xl border border-line bg-surface p-5 sm:p-7">
        <h3 className="m-0 font-display text-xl font-bold text-text">Why I started CGHEVEN</h3>
        <p className="m-0 mt-2 text-[15px] italic text-muted">&ldquo;{FOUNDER.quote}&rdquo;</p>
        <ol className="m-0 mt-5 grid list-none gap-4 p-0 sm:grid-cols-3">
          {FOUNDER_STEPS.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-line bg-surface-2 p-4">
              <span className="text-xs font-extrabold tracking-widest text-teal">{s.tag ?? String(i + 1).padStart(2, "0")}</span>
              <h4 className="m-0 mb-1 mt-1 font-display text-base font-bold text-text">{s.title}</h4>
              <p className="m-0 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="m-0 mb-3 font-display text-xl font-bold text-text">What I make for you</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {FOUNDER_MAKES.map((m) => (
            <div key={m.tag} className="rounded-2xl border border-line bg-surface p-5">
              <span className="text-[11px] font-extrabold tracking-[0.1em] text-teal">{m.tag}</span>
              <h4 className="m-0 mb-1 mt-2 font-display text-base font-bold text-text">{m.title}</h4>
              <p className="m-0 text-sm leading-relaxed text-muted">{m.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="m-0 mb-1 font-display text-lg font-bold text-text">Follow along</h3>
        <p className="m-0 mb-3 text-sm text-muted">New effects and lessons every week.</p>
        <div className="flex flex-wrap gap-2">
          {FOUNDER_SOCIALS.map((l) => (
            <a key={l.label} href={l.href} {...(l.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })} className="inline-flex rounded-xl border border-line px-4 py-2 text-sm font-semibold text-text! no-underline transition hover:border-white/30 hover:no-underline">
                {l.label}
              </a>
          ))}
        </div>
      </div>
    </section>
  )
}
