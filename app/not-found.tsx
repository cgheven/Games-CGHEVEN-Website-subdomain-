import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-5 px-4 py-28 text-center">
      <span className="font-display text-7xl font-extrabold text-teal">404</span>
      <h1 className="m-0 font-display text-3xl font-extrabold">This page could not be found</h1>
      <p className="m-0 text-muted">The page you were looking for does not exist or has moved.</p>
      <Link href="/" className="rounded-xl bg-orange px-6 py-3.5 text-[15px] font-bold text-black transition hover:brightness-110">Back to all games</Link>
    </div>
  )
}
