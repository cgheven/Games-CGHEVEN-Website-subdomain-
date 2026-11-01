import type { Metadata, Viewport } from "next"
import { Inter, Sora } from "next/font/google"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SITE_URL } from "@/data/site"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "CGHEVEN Games: casual Android games", template: "%s | CGHEVEN Games" },
  description: "CGHEVEN Games is the mobile games division of CGHEVEN: casual and relaxing Android games built in Godot 4 and published on Google Play.",
  applicationName: "CGHEVEN Games",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "CGHEVEN Games", url: SITE_URL, title: "CGHEVEN Games", description: "Casual and relaxing Android games from CGHEVEN, on Google Play." },
  twitter: { card: "summary_large_image", title: "CGHEVEN Games", description: "Casual and relaxing Android games from CGHEVEN, on Google Play." },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: "#07090d", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
