import type { ReactNode } from "react"
import Link from "next/link"

const TABS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
]

/* A document page (Privacy Policy, Terms & Conditions): a row to jump between the four pages, then the text. */
export function LegalPage({ title, updated, current, children }: { title: string; updated?: string; current: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-8 pt-10 sm:px-6 sm:pt-14">
      <nav aria-label="Company and legal pages" className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {TABS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            aria-current={t.href === current ? "page" : undefined}
            className={`flex-none rounded-full border px-4 py-2 text-sm font-semibold transition ${t.href === current ? "border-orange bg-orange/15 text-orange" : "border-line text-muted hover:border-white/30 hover:text-text"}`}
          >
            {t.label}
          </Link>
        ))}
      </nav>
      <h1 className="m-0 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
      {updated && <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>}
      <div className="mt-10 flex flex-col gap-4 text-[15px] leading-7 text-[#c5ccd6] [&_a]:text-teal [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:mb-0 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text [&_li]:pl-1 [&_p]:m-0 [&_ul]:m-0 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  )
}
