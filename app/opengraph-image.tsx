import { ImageResponse } from "next/og"

export const alt = "CGHEVEN Games"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, color: "#f2f4f7", background: "linear-gradient(135deg, #07090d 40%, #0b3b3a 100%)" }}>
        <div style={{ display: "flex", fontSize: 34, color: "#14d6a4", fontWeight: 700, letterSpacing: 2 }}>CGHEVEN GAMES</div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 800, lineHeight: 1.05, marginTop: 24, maxWidth: 900 }}>Casual and relaxing Android games</div>
        <div style={{ display: "flex", fontSize: 34, color: "#9aa4b2", marginTop: 32 }}>The mobile games division of CGHEVEN · games.cgheven.com</div>
        <div style={{ display: "flex", position: "absolute", right: 0, top: 0, width: 360, height: 630, background: "linear-gradient(200deg, rgba(255,122,46,0.55), rgba(255,122,46,0))" }} />
      </div>
    ),
    size,
  )
}
