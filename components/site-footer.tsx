import Image from "next/image"
import Link from "next/link"
import { MAIN_SITE, SUPPORT_EMAIL } from "@/data/site"

const col = "flex flex-col gap-2.5 text-sm text-muted"
const link = "w-fit transition hover:text-text"
const head = "text-xs font-bold uppercase tracking-[0.1em] text-text"

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5" aria-label="CGHEVEN Games, home">
            <Image src="/logo.png" alt="" width={36} height={36} className="size-9" />
            <span className="font-display text-[17px] font-bold">CGHEVEN <span className="text-teal">Games</span></span>
          </Link>
          <p className="m-0 max-w-xs text-sm leading-relaxed text-muted">The mobile games division of CGHEVEN. Casual and relaxing Android games, built in Godot 4 and published on Google Play.</p>
        </div>
        <nav aria-label="Company" className={col}>
          <span className={head}>Company</span>
          <Link href="/about" className={link}>About</Link>
          <Link href="/contact" className={link}>Contact</Link>
          <a href={MAIN_SITE} className={link}>CGHEVEN.com</a>
        </nav>
        <nav aria-label="Legal" className={col}>
          <span className={head}>Legal</span>
          <Link href="/privacy" className={link}>Privacy Policy</Link>
          <Link href="/terms" className={link}>Terms &amp; Conditions</Link>
          <a href={`mailto:${SUPPORT_EMAIL}`} className={`${link} break-all`}>{SUPPORT_EMAIL}</a>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} CGHEVEN. All rights reserved.</span>
          <span>Google Play is a trademark of Google LLC.</span>
        </div>
      </div>
    </footer>
  )
}
