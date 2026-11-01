"use client"

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-5 px-4 py-28 text-center">
      <h1 className="m-0 font-display text-3xl font-extrabold">Something went wrong</h1>
      <p className="m-0 text-muted">Please try again. If it keeps happening, email support@cgheven.com.</p>
      <button type="button" onClick={reset} className="rounded-xl bg-orange px-6 py-3.5 text-[15px] font-bold text-black transition hover:brightness-110">Try again</button>
    </div>
  )
}
