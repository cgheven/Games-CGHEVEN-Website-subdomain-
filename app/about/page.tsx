import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Cpu, Smartphone, Store } from "lucide-react"
import { LegalPage } from "@/components/legal-page"
import { SUPPORT_EMAIL } from "@/data/site"

export const metadata: Metadata = {
  title: "About",
  description: "CGHEVEN Games is the mobile games division of CGHEVEN, building casual and relaxing Android games in Godot 4 and publishing them on Google Play.",
  alternates: { canonical: "/about" },
}

const POINTS = [
  { icon: Smartphone, title: "Casual and relaxing", text: "Android games made to be picked up and enjoyed at your own pace." },
  { icon: Cpu, title: "Built in Godot 4", text: "Each game is built with the Godot 4 engine." },
  { icon: Store, title: "Published on Google Play", text: "Installs and purchases happen on Google Play." },
]

export default function AboutPage() {
  return (
    <LegalPage title="About" current="/about">
      <p className="text-lg leading-8">
        CGHEVEN Games is the mobile games division of CGHEVEN, building casual and relaxing Android games. Each game is built in Godot 4 and published on Google Play.
        This site lists our catalog; installs and purchases happen on Google Play.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {POINTS.map((p) => (
          <div key={p.title} className="rounded-2xl border border-line bg-surface p-5">
            <span className="mb-3 grid size-10 place-items-center rounded-xl bg-teal/12 text-teal ring-1 ring-teal/25"><p.icon aria-hidden="true" size={20} /></span>
            <h3 className="m-0 mb-1 font-display text-base font-bold text-text">{p.title}</h3>
            <p className="m-0 text-sm leading-relaxed text-muted">{p.text}</p>
          </div>
        ))}
      </div>

      <h2>Contact / Support</h2>
      <p>Support email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
      <p>For: bug reports, purchase or billing issues (we&rsquo;ll point you to Google Play where needed), privacy requests, general questions.</p>
      <div className="mt-2">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-[15px] font-bold text-black no-underline transition hover:brightness-110 hover:no-underline">
          Get in touch <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </LegalPage>
  )
}
