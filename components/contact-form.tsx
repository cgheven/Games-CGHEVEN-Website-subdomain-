"use client"

import { useState, type FormEvent } from "react"
import { Send } from "lucide-react"
import { SUPPORT_EMAIL } from "@/data/site"

const TOPICS = ["Bug report", "Purchase or billing", "Privacy request", "General question"]
const FIELD = "w-full rounded-xl border border-line bg-bg px-4 py-3 text-[15px] text-text placeholder:text-muted/70 focus-visible:border-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/40"

/* Writes the message in the visitor's own email app (to the support address); nothing is sent from the site. */
export function ContactForm() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = `[${f.get("topic")}] ${f.get("game") ? `${f.get("game")}: ` : ""}Message from ${f.get("name")}`
    const body = `${f.get("message")}\n\n--\n${f.get("name")} <${f.get("email")}>`
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold">Your name
          <input name="name" required autoComplete="name" className={FIELD} placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold">Your email
          <input name="email" type="email" required autoComplete="email" className={FIELD} placeholder="you@email.com" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold">Topic
          <select name="topic" className={FIELD} defaultValue={TOPICS[0]}>{TOPICS.map((t) => <option key={t}>{t}</option>)}</select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold">Game (optional)
          <input name="game" className={FIELD} placeholder="Name of the game" />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-semibold">Message
        <textarea name="message" required rows={6} className={`${FIELD} resize-y`} placeholder="How can we help?" />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-[15px] font-bold text-black transition hover:brightness-110 active:scale-[0.98]">
          <Send aria-hidden="true" size={17} /> Write to support
        </button>
        <p role="status" className="m-0 text-sm text-muted">
          {sent ? "Your email app should open with the message ready to send." : "This opens your email app with the message ready to send."}
        </p>
      </div>
    </form>
  )
}
