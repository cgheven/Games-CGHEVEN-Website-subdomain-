import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { SUPPORT_EMAIL } from "@/data/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CGHEVEN Games and its Android games collect, use and share information.",
  alternates: { canonical: "/privacy" },
}

const PRIVACY_UPDATED = "November 20, 2026"

const DETAILS = [
  { label: "Developer (Google Play)", value: "CGHEVEN" },
  { label: "Site", value: "games.cgheven.com" },
  { label: "Covers", value: "games.cgheven.com and all CGHEVEN Android games" },
]

const GAMES = [
  { name: "Rogue Breach: Dungeon Shooter", pkg: "com.cgheven.roguebreach" },
  { name: "Heir of Thunder" },
  { name: "Huemosaic" },
  { name: "Jigsaw Gallery" },
  { name: "Match Haven (Tidewell)" },
  { name: "Math Blast: Falling Numbers" },
  { name: "Street Rider" },
  { name: "Vending Empire" },
]

const SERVICES = [
  { name: "Google AdMob", purpose: "Advertising", url: "https://policies.google.com/privacy", label: "Google Privacy Policy" },
  { name: "Firebase (Analytics & Crashlytics)", purpose: "Analytics, crash reporting", url: "https://firebase.google.com/support/privacy", label: "Firebase Privacy" },
  { name: "Google Play Billing", purpose: "In-app purchases", url: "https://policies.google.com/privacy", label: "Google Privacy Policy" },
]

export default function PrivacyPage() {
  return (
    <LegalPage title="CGHEVEN Games Privacy Policy" updated={PRIVACY_UPDATED} current="/privacy">
      <dl className="m-0 grid gap-2 rounded-2xl border border-line border-l-4 border-l-teal bg-surface p-5 text-sm sm:grid-cols-[max-content_1fr] sm:gap-x-6">
        {DETAILS.map((d) => (
          <div key={d.label} className="contents">
            <dt className="text-muted">{d.label}</dt>
            <dd className="m-0 font-mono text-text">{d.value}</dd>
          </div>
        ))}
      </dl>

      <h2>What this policy covers</h2>
      <p>
        This policy covers games.cgheven.com and the Android games published by CGHEVEN, listed below, and any future CGHEVEN titles.
      </p>

      <h2>Games covered by this policy</h2>
      <ul className="rounded-2xl border border-line !list-none !gap-0 !pl-0">
        {GAMES.map((g) => (
          <li key={g.name} className="flex flex-wrap items-baseline justify-between gap-x-4 border-t border-line px-4 py-3 first:border-t-0">
            <span className="text-text">{g.name}</span>
            <span className="font-mono text-xs text-muted">{g.pkg ?? "package to be added at release"}</span>
          </li>
        ))}
      </ul>
      <p>As additional CGHEVEN games are published, they are covered by this same policy from their release date.</p>

      <h2>Information we collect</h2>
      <p>No account or personal information is required to play. Depending on the game, we may collect:</p>
      <ul>
        <li><strong>Advertising data</strong>, through Google AdMob, to show and measure ads</li>
        <li><strong>Analytics and crash data</strong>, through Firebase Analytics and Crashlytics, to understand feature use and fix bugs</li>
        <li><strong>Purchase confirmations</strong>, through Google Play Billing, to deliver in-app purchases and prevent fraud</li>
        <li><strong>Support request information</strong>, if you contact us directly</li>
      </ul>

      <h2>How we use this information</h2>
      <ul>
        <li>Running, maintaining, and fixing the games</li>
        <li>Understanding how features are used</li>
        <li>Showing and measuring advertising</li>
        <li>Processing and verifying in-app purchases</li>
        <li>Responding to support requests</li>
      </ul>

      <h2>Third-party services</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
          <thead className="bg-surface text-xs uppercase tracking-[0.08em] text-muted">
            <tr><th scope="col" className="px-4 py-3 font-semibold">Service</th><th scope="col" className="px-4 py-3 font-semibold">Purpose</th><th scope="col" className="px-4 py-3 font-semibold">Policy</th></tr>
          </thead>
          <tbody>
            {SERVICES.map((s) => (
              <tr key={s.name} className="border-t border-line align-top">
                <th scope="row" className="px-4 py-3 font-semibold text-text">{s.name}</th>
                <td className="px-4 py-3">{s.purpose}</td>
                <td className="px-4 py-3"><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        Our games are not directed at children under 13. If we learn that we have collected data from a child under 13, we will remove it on request.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>Opt out of personalized ads in your device&rsquo;s ad settings</li>
        <li>Reset your advertising ID at any time</li>
        <li>Uninstall the game to stop all data collection from that app</li>
      </ul>

      <h2>Data retention and sharing</h2>
      <p>
        We keep data only as long as needed for the purposes above. We do not sell your data. We share data only with the service providers listed in this policy.
      </p>

      <h2>Security</h2>
      <p>We rely on the security practices of Google Play, Firebase, and AdMob to help protect data processed through those services.</p>

      <h2>Consent and your choices (EEA / UK)</h2>
      <p>
        If you are in the EEA or UK, consent for personalized advertising and analytics is requested through Google&rsquo;s consent form on first launch.
        You can change your choices at any time in-game under <strong className="text-text">Settings &rarr; Privacy options</strong>.
      </p>

      <h2>Reminders</h2>
      <p>
        Optional daily reminder notifications, where offered, are scheduled locally on your device. No information about these reminders is sent to CGHEVEN.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Continued use of a game or this site after an update means you accept the revised policy.
      </p>

      <h2>Questions about your data</h2>
      <p>
        Our games do not use accounts, so we hold no per-player profile beyond what&rsquo;s described above.
        Requests about advertising or analytics data should be directed to Google, since that data is held by Google on our behalf.
        For anything else, contact us below.
      </p>

      <h2>Contact us</h2>
      <p>Questions about this policy: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
    </LegalPage>
  )
}
