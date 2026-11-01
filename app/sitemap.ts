import type { MetadataRoute } from "next"
import { SITE_URL } from "@/data/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/contact", "/privacy", "/terms"]
  return pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.6 }))
}
