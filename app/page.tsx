import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText, Info, Lock, Mail, ShieldCheck, Smartphone, Store } from "lucide-react"
import { SUPPORT_EMAIL } from "@/data/site"

const PAGES = [
  { href: "/about", icon: Info, title: "About", text: "CGHEVEN Games is the mobile games division of CGHEVEN, building casual and relaxing Android games." },
  { href: "/contact", icon: Mail, title: "Contact / Support", text: "Bug reports, purchase or billing issues, privacy requests and general questions." },
  { href: "/privacy", icon: Lock, title: "Privacy Policy", text: "What is collected when you play, how it is used, who it is shared with, and your choices." },
  { href: "/terms", icon: FileText, title: "Terms & Conditions", text: "The rules for using this site and the games: licence, purchases, ads and liability." },
]

const FACTS = [
  { icon: Smartphone, label: "Platform", value: "Android" },
  { icon: Store, label: "Published on", value: "Google Play" },
  { icon: ShieldCheck, label: "Account", value: "None needed" },
]

export default function HomePage() {
  return (
    <>
      <section className="glow-bg relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-24">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-semibold text-muted">
              <Image src="/logo.png" alt="" width={16} height={16} className="size-4" />
              The mobile games division of CGHEVEN
            </span>
            <h1 className="m-0 font-display text-[clamp(2.3rem,6vw,4.4rem)] font-extrabold leading-[1.04] tracking-tight">
              CGHEVEN <span className="bg-gradient-to-r from-teal to-orange bg-clip-text text-transparent">Games</span>
            </h1>
            <p className="m-0 max-w-xl text-lg leading-relaxed text-muted">
              Casual and relaxing Android games, built in Godot 4 and published on Google Play. Installs and purchases happen on Google Play.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/about" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-[15px] font-bold text-black transition hover:brightness-110 active:scale-[0.98]">
                About us <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-line bg-surface/60 px-6 py-3.5 text-[15px] font-semibold transition hover:border-white/30">
                Contact support
              </Link>
            </div>
          </div>

          <div aria-hidden="true" className="relative mx-auto grid size-56 place-items-center sm:size-72 lg:size-96">
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal/30 via-transparent to-orange/30 blur-3xl" />
            <span className="absolute inset-6 rounded-[2.5rem] border border-white/10 bg-surface/60 backdrop-blur-sm" />
            <Image src="/logo.png" alt="" width={256} height={256} priority className="floaty relative size-[58%] drop-shadow-2xl" />
          </div>
        </div>
      </section>

      <section aria-labelledby="pages-title" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-20 sm:px-6">
        <div className="mb-10 flex flex-col gap-3">
          <h2 id="pages-title" className="m-0 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Everything you need to know</h2>
          <p className="m-0 max-w-2xl text-muted">Who we are, how to reach us, and how we handle your information.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex gap-5 rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]"
            >
              <span className="grid size-12 flex-none place-items-center rounded-xl bg-teal/12 text-teal ring-1 ring-teal/25 transition group-hover:bg-orange/15 group-hover:text-orange group-hover:ring-orange/30">
                <p.icon aria-hidden="true" size={24} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-display text-xl font-bold">{p.title}</span>
                  <ArrowRight aria-hidden="true" size={18} className="flex-none text-muted transition group-hover:translate-x-1 group-hover:text-orange" />
                </span>
                <span className="text-sm leading-relaxed text-muted">{p.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <dl className="grid gap-4 sm:grid-cols-3">
          {FACTS.map((f) => (
            <div key={f.label} className="flex items-center gap-4 rounded-2xl border border-line bg-surface/60 p-5">
              <span className="grid size-11 flex-none place-items-center rounded-xl bg-white/5 text-teal ring-1 ring-white/10"><f.icon aria-hidden="true" size={22} /></span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{f.label}</dt>
                <dd className="m-0 font-display text-lg font-bold">{f.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-12">
          <div aria-hidden="true" className="glow-bg absolute inset-0 opacity-60" />
          <div className="relative flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="m-0 mb-2 font-display text-2xl font-extrabold sm:text-3xl">Questions or feedback?</h2>
              <p className="m-0 text-muted">Write to <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-teal hover:underline">{SUPPORT_EMAIL}</a> for bug reports, purchase or billing issues, privacy requests or anything else.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[15px] font-bold text-black transition hover:bg-orange">
              Contact support <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
