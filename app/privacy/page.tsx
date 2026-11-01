import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { LAST_UPDATED, SUPPORT_EMAIL } from "@/data/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CGHEVEN Games and its Android games collect, use and share information.",
  alternates: { canonical: "/privacy" },
}

const SERVICES = [
  { name: "Google AdMob", purpose: "In-app advertising", url: "https://policies.google.com/privacy", label: "policies.google.com/privacy" },
  { name: "Firebase (Analytics, Crashlytics)", purpose: "Usage analytics and crash reporting", url: "https://firebase.google.com/support/privacy", label: "firebase.google.com/support/privacy" },
  { name: "Google Play Billing", purpose: "In-app purchases and subscriptions", url: "https://play.google/play-terms", label: "play.google/play-terms" },
]

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated={LAST_UPDATED} current="/privacy">
      <p>
        This policy covers games.cgheven.com and the Android games listed on it, published by CGHEVEN (&ldquo;CGHEVEN,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;).
        CGHEVEN is not yet a separate registered legal entity &mdash; the games and site are currently operated by Musab Khan.
      </p>

      <h2>What this covers</h2>
      <p>
        Applies to visitors of games.cgheven.com and players of the Android games listed there, and future titles.
      </p>

      <h2>Information we collect</h2>
      <p>We don&rsquo;t require an account or any personal information to play. The following is collected automatically through the services our games use:</p>
      <ul>
        <li><strong>Advertising data (Google AdMob):</strong> advertising ID, device and app information, approximate location (for ad relevance), and ad interaction data.</li>
        <li><strong>Analytics and crash data (Firebase Analytics / Crashlytics):</strong> app usage events (sessions, screens viewed, in-game actions), device model, OS version, and crash logs.</li>
        <li><strong>Purchase data (Google Play Billing):</strong> for games with in-app purchases or subscriptions (e.g. Gallery Pass), the transaction is processed entirely by Google Play. We receive confirmation a purchase was made, not your payment details.</li>
        <li><strong>Information you send us:</strong> if you email support or use a contact form, we receive whatever you include (name, email, message).</li>
      </ul>
      <p>We do not collect your name, government ID, precise location, or payment card details directly.</p>

      <h2>How we use this information</h2>
      <ul>
        <li>Keep the games running and fix bugs and crashes</li>
        <li>Understand which features are used so we can improve the games</li>
        <li>Show ads and measure ad performance</li>
        <li>Process purchases and subscriptions</li>
        <li>Respond to support requests</li>
      </ul>

      <h2>Third-party services</h2>
      <p>We use the following third-party services, each governed by its own privacy policy:</p>
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
                <td className="px-4 py-3"><a href={s.url} target="_blank" rel="noopener noreferrer" className="break-all">{s.label}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Google&rsquo;s use of advertising data is described at{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">How Google uses data</a>.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        Our games are built for a general audience and are not directed at children under 13. We do not knowingly collect personal information from children under 13.
        If you believe a child has provided us data, contact us below and we will remove it.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li><strong>Personalized ads:</strong> opt out via your device&rsquo;s ad settings (Android: Settings &rarr; Google &rarr; Ads &rarr; &ldquo;Opt out of Ads Personalization&rdquo;) or reset your advertising ID.</li>
        <li><strong>Analytics:</strong> limiting ad tracking in your device settings also reduces data shared with Firebase/AdMob.</li>
        <li>Uninstalling a game stops further data collection from that app.</li>
      </ul>

      <h2>Data retention and sharing</h2>
      <p>
        We retain data only as long as needed for the purposes above. We do not sell your data. We share it only with the service providers listed above, each bound by their own terms.
      </p>

      <h2>Security</h2>
      <p>We rely on the security practices of Google Play, Firebase, and AdMob for data in transit and at rest. No method of transmission is 100% secure.</p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as the games or services change. The &ldquo;Last updated&rdquo; date above reflects the latest revision.
        Continued use after a change means you accept the update.
      </p>

      <h2>Contact us</h2>
      <p>Questions about this policy: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
    </LegalPage>
  )
}
