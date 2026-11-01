import type { Metadata } from "next"
import Link from "next/link"
import { Bug, Lock, Mail, MessageCircle, Receipt } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { SUPPORT_EMAIL } from "@/data/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact CGHEVEN Games support for bug reports, purchase or billing questions, privacy requests and general questions.",
  alternates: { canonical: "/contact" },
}

const TABS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
]

const TOPICS = [
  { icon: Bug, title: "Bug reports", text: "Something not working in a game? Tell us your device and what happened." },
  { icon: Receipt, title: "Purchase or billing issues", text: "We'll point you to Google Play where needed, since Google processes all payments." },
  { icon: Lock, title: "Privacy requests", text: "Questions about your data or our Privacy Policy." },
  { icon: MessageCircle, title: "General questions", text: "Anything else about CGHEVEN Games." },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
      <nav aria-label="Company and legal pages" className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {TABS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            aria-current={t.href === "/contact" ? "page" : undefined}
            className={`flex-none rounded-full border px-4 py-2 text-sm font-semibold transition ${t.href === "/contact" ? "border-orange bg-orange/15 text-orange" : "border-line text-muted hover:border-white/30 hover:text-text"}`}
          >
            {t.label}
          </Link>
        ))}
      </nav>

      <h1 className="m-0 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Contact / Support</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        Write to us at <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-teal hover:underline">{SUPPORT_EMAIL}</a> or use the form below.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition hover:border-white/25">
            <span className="grid size-12 flex-none place-items-center rounded-xl bg-orange/15 text-orange ring-1 ring-orange/30"><Mail aria-hidden="true" size={22} /></span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-muted">Support email</span>
              <span className="block break-all font-display text-lg font-bold">{SUPPORT_EMAIL}</span>
            </span>
          </a>
          <h2 className="m-0 mt-4 font-display text-lg font-bold">What we can help with</h2>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {TOPICS.map((t) => (
              <li key={t.title} className="flex gap-4 rounded-2xl border border-line bg-surface/60 p-4">
                <span className="grid size-10 flex-none place-items-center rounded-lg bg-teal/12 text-teal ring-1 ring-teal/25"><t.icon aria-hidden="true" size={19} /></span>
                <span><span className="block font-semibold">{t.title}</span><span className="block text-sm leading-relaxed text-muted">{t.text}</span></span>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
