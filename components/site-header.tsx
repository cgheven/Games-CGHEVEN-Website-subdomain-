"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { MAIN_SITE } from "@/data/site"

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="CGHEVEN Games, home">
          <Image src="/logo.png" alt="" width={36} height={36} priority className="size-9" />
          <span className="font-display text-[17px] font-bold tracking-tight">CGHEVEN <span className="text-teal">Games</span></span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition hover:text-text">{l.label}</Link>
          ))}
          <a href={MAIN_SITE} className="ml-2 rounded-lg border border-line px-3.5 py-2 text-sm font-semibold transition hover:border-white/30">CGHEVEN.com</a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-line lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-bg px-4 pb-6 pt-3 lg:hidden">
          <ul className="m-0 flex list-none flex-col p-0">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3.5 text-base font-semibold hover:bg-surface">{l.label}</Link>
              </li>
            ))}
            <li><a href={MAIN_SITE} className="mt-2 block rounded-lg border border-line px-3 py-3.5 text-base font-semibold">CGHEVEN.com</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
