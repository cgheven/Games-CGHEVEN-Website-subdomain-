import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { LAST_UPDATED, SUPPORT_EMAIL } from "@/data/site"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms for using games.cgheven.com and the CGHEVEN Android games listed on it.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated={LAST_UPDATED} current="/terms">
      <p>
        By visiting games.cgheven.com or installing and playing any game listed on it, you agree to these terms. If you don&rsquo;t agree, don&rsquo;t use the site or the games.
      </p>

      <h2>What this site is</h2>
      <p>
        games.cgheven.com is CGHEVEN&rsquo;s showcase of its Android mobile games. Each game page links out to its listing on Google Play, where the game is actually installed and played.
      </p>

      <h2>Eligibility</h2>
      <p>
        The games are intended for a general audience. If you&rsquo;re under the age required by Google Play&rsquo;s terms in your country to create a Google account or make purchases, use the games with a parent or guardian&rsquo;s involvement.
      </p>

      <h2>License to use the games</h2>
      <p>
        Installing a game through Google Play gives you a personal, non-exclusive, non-transferable license to use it for your own entertainment, subject to Google Play&rsquo;s own terms of service. You may not:
      </p>
      <ul>
        <li>Reverse-engineer, decompile, or extract source code or assets from any game</li>
        <li>Use cheats, bots, or exploits to manipulate gameplay, leaderboards, or in-app purchases</li>
        <li>Redistribute, resell, or sublicense the games or their content</li>
        <li>Use the games for any unlawful purpose</li>
      </ul>

      <h2>In-app purchases and subscriptions</h2>
      <p>
        Some games offer in-app purchases or subscriptions (e.g. Gallery Pass). These are billed and processed by Google Play Billing. Pricing, billing cycles, cancellations, and refunds are governed by Google Play&rsquo;s terms &mdash; we don&rsquo;t process payments or hold your payment details directly, and refund requests should go through Google Play first.
      </p>

      <h2>Advertising</h2>
      <p>Games may display ads served through Google AdMob. We&rsquo;re not responsible for the content of third-party ads.</p>

      <h2>Intellectual property</h2>
      <p>
        All game content &mdash; code, art, music, characters, names, and designs &mdash; is owned by CGHEVEN (operated by Musab Khan) unless otherwise credited. Nothing in these terms transfers that ownership to you.
      </p>

      <h2>No warranty</h2>
      <p>The site and games are provided &ldquo;as is.&rdquo; We don&rsquo;t guarantee they&rsquo;ll be uninterrupted, error-free, or compatible with every device.</p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, CGHEVEN is not liable for indirect, incidental, or consequential damages arising from your use of the site or games, including loss of in-app purchases due to device issues, account loss, or service interruptions on Google&rsquo;s end.
      </p>

      <h2>Third-party platforms</h2>
      <p>Your use of Google Play, Google accounts, and Google Play Billing is governed by Google&rsquo;s own terms, separate from these.</p>

      <h2>Termination</h2>
      <p>We can remove a game from Google Play or discontinue the site at any time. Google Play governs suspension of your access to purchased content.</p>

      <h2>Changes to these terms</h2>
      <p>We may update these terms as the games or site change. Continued use after a change means you accept the update.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of Pakistan.</p>

      <h2>Contact us</h2>
      <p>Questions about these terms: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
    </LegalPage>
  )
}
