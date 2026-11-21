import { useEffect } from 'react'
import ChambersHeader from '../components/ChambersHeader'

const CURRENT_YEAR = new Date().getFullYear()

export default function LegalDisclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Legal Disclaimer & Regulatory Notice | Azaz & Associates LLP'
  }, [])

  return (
    <div className="min-h-screen bg-obsidian-950 text-parchment-100 font-sans antialiased selection:bg-gold-500/30 selection:text-white">
      {/* Chambers Unified Header */}
      <ChambersHeader />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Page Heading & Shimmer Badge */}
        <div className="border-b border-gold-500/30 pb-8 mb-10">
          <div className="relative inline-flex items-center overflow-hidden border border-gold-500/40 bg-obsidian-900 px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] text-gold-400 font-semibold mb-3 rounded-none">
            <span className="relative z-10">Statutory Notice &amp; Regulatory Disclosure</span>
            <div className="pointer-events-none absolute inset-0 -translate-x-full dynamic-shimmer-sweep bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-medium text-parchment-50 tracking-tight leading-tight">
            Legal Disclaimer &amp; Terms of Notice
          </h1>

          <p className="text-sm text-parchment-200/80 mt-3 leading-relaxed max-w-2xl">
            Important regulatory disclosures governing digital communications, professional advocate-client relationships, and informational materials published by Azaz &amp; Associates LLP.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-parchment-300/60 mt-4">
            <span>Effective Date: January 1, 2026</span>
            <span>&bull;</span>
            <span>Bar Council Jurisdiction: Pakistan</span>
          </div>
        </div>

        {/* Content Sections with Dynamic Shimmer Sweep */}
        <div className="space-y-8 sm:space-y-10 text-sm sm:text-[15px] leading-relaxed text-parchment-200">
          {/* Section 1 */}
          <section className="shimmer-card bg-obsidian-900/90 border border-white/10 hover:border-gold-500/50 p-6 sm:p-8 rounded-none relative transition-all duration-300">
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full dynamic-shimmer-sweep bg-gradient-to-r from-transparent via-gold-400/12 to-transparent"
              style={{ animationDelay: '0s' }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 mb-3">
              <span className="font-editorial text-lg text-gold-400 font-semibold">01.</span>
              <h2 className="font-editorial text-xl sm:text-2xl font-semibold text-parchment-50">
                No Advocate-Client Relationship Formed
              </h2>
            </div>
            <p>
              Browsing this website, reviewing published practice areas, submitting inquiries through our digital consultation forms, emailing our chambers, or initiating contact through our official WhatsApp concierge does <strong>not</strong> establish or constitute an advocate-client, attorney-client, or privileged relationship between <strong>Azaz &amp; Associates LLP</strong> (or Azaz Ahmad Khan, Advocate High Court) and any prospective party.
            </p>
            <p className="mt-3 text-parchment-300/90">
              An advocate-client relationship is strictly established only after our chambers have conducted a formal conflict-of-interest check, confirmed acceptance of the matter, and both parties have executed a formal <strong>Power of Attorney (Vakalatnama)</strong>, Corporate Retainer Agreement, or written Letter of Engagement.
            </p>
          </section>

          {/* Section 2 */}
          <section className="shimmer-card bg-obsidian-900/90 border border-white/10 hover:border-gold-500/50 p-6 sm:p-8 rounded-none relative transition-all duration-300">
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full dynamic-shimmer-sweep bg-gradient-to-r from-transparent via-gold-400/12 to-transparent"
              style={{ animationDelay: '1.2s' }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 mb-3">
              <span className="font-editorial text-lg text-gold-400 font-semibold">02.</span>
              <h2 className="font-editorial text-xl sm:text-2xl font-semibold text-parchment-50">
                Informational Purpose Only — Non-Reliance Notice
              </h2>
            </div>
            <p>
              The materials, legal briefings, taxation commentary, SECP regulatory outlines, and statutory summaries provided on this website are published solely for general informational and educational guidance. They do not constitute formal legal advice, tax opinion, or commercial consultancy tailored to your specific circumstances.
            </p>
            <p className="mt-3 text-parchment-300/90">
              Tax, corporate, and procedural laws in the Islamic Republic of Pakistan—including the <em>Income Tax Ordinance 2001</em>, <em>Sales Tax Act 1990</em>, provincial sales tax enactments (KPRA, PRA, SRB), the <em>Companies Act 2017</em>, and High Court / Supreme Court rules—are dynamic and subject to frequent statutory amendments, notifications (SROs), and binding judicial pronouncements. Visitors must not act or refrain from acting on the basis of any content on this portal without obtaining direct, personalized counsel from a qualified Advocate or Certified Tax Advisor.
            </p>
          </section>

          {/* Section 3 */}
          <section className="shimmer-card bg-obsidian-900/90 border border-white/10 hover:border-gold-500/50 p-6 sm:p-8 rounded-none relative transition-all duration-300">
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full dynamic-shimmer-sweep bg-gradient-to-r from-transparent via-gold-400/12 to-transparent"
              style={{ animationDelay: '2.4s' }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 mb-3">
              <span className="font-editorial text-lg text-gold-400 font-semibold">03.</span>
              <h2 className="font-editorial text-xl sm:text-2xl font-semibold text-parchment-50">
                Bar Council Canons of Professional Conduct
              </h2>
            </div>
            <p>
              Under Chapter XII of the <strong>Pakistan Legal Practitioners and Bar Councils Rules, 1976</strong>, and the <em>Legal Practitioners and Bar Councils Act, 1973</em>, advocates enrolled in Pakistan are prohibited from soliciting professional employment through advertising.
            </p>
            <p className="mt-3 text-parchment-300/90">
              This website is published exclusively to provide factual information concerning the professional profile, academic credentials, chamber locations, and practice capabilities of Azaz Ahmad Khan, Advocate High Court &amp; Certified Tax Advisor (CTA), and his associated chambers. Nothing on this website constitutes advertising, solicitation, personal communication, invitation, or inducement of any sort.
            </p>
          </section>

          {/* Section 4 */}
          <section className="shimmer-card bg-obsidian-900/90 border border-white/10 hover:border-gold-500/50 p-6 sm:p-8 rounded-none relative transition-all duration-300">
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full dynamic-shimmer-sweep bg-gradient-to-r from-transparent via-gold-400/12 to-transparent"
              style={{ animationDelay: '3.6s' }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 mb-3">
              <span className="font-editorial text-lg text-gold-400 font-semibold">04.</span>
              <h2 className="font-editorial text-xl sm:text-2xl font-semibold text-parchment-50">
                External Regulatory Portals &amp; Third-Party Services
              </h2>
            </div>
            <p>
              This portal contains references and informational pointers to statutory regulatory authorities, including the <strong>Federal Board of Revenue (FBR / IRIS)</strong>, the <strong>Securities and Exchange Commission of Pakistan (SECP)</strong>, the <strong>Intellectual Property Organization of Pakistan (IPO)</strong>, and the <strong>Pakistan Single Window (PSW)</strong>.
            </p>
            <p className="mt-3 text-parchment-300/90">
              Azaz &amp; Associates LLP is an independent private consultancy and legal practice. The firm maintains no proprietary ownership or administrative control over government digital portals, and assumes no responsibility for downtime, processing intervals, or regulatory revisions introduced by statutory bodies.
            </p>
          </section>

          {/* Section 5 */}
          <section className="shimmer-card bg-obsidian-900/90 border border-white/10 hover:border-gold-500/50 p-6 sm:p-8 rounded-none relative transition-all duration-300">
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full dynamic-shimmer-sweep bg-gradient-to-r from-transparent via-gold-400/12 to-transparent"
              style={{ animationDelay: '4.8s' }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 mb-3">
              <span className="font-editorial text-lg text-gold-400 font-semibold">05.</span>
              <h2 className="font-editorial text-xl sm:text-2xl font-semibold text-parchment-50">
                Limitation of Liability &amp; Governing Jurisdiction
              </h2>
            </div>
            <p>
              Azaz &amp; Associates LLP, its managing partners, associate advocates, and technical operators disclaim all liability for any loss, damage, financial penalty, or commercial consequence resulting directly or indirectly from actions taken or omitted based on any information contained on this website.
            </p>
            <p className="mt-3 text-parchment-300/90">
              Any dispute, controversy, or claim arising out of or relating to the use of this website shall be governed by and construed in accordance with the substantive laws of Pakistan, subject to the exclusive jurisdiction of the competent courts in Swat and Islamabad.
            </p>
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-gold-400 font-semibold">Chambers Compliance Office</div>
                <div className="text-parchment-50 text-sm mt-0.5 font-medium">Azaz &amp; Associates LLP — Legal Advisory Desk</div>
                <div className="text-xs text-parchment-300/70">Phone: +92 334 9343675 &bull; Swat &amp; Islamabad</div>
              </div>
              <a
                href="/#consultation"
                className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-obsidian-950 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
              >
                Schedule Consultation
              </a>
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-parchment-300/60 text-center sm:text-left">
          <div>&copy; {CURRENT_YEAR} Azaz &amp; Associates LLP. All Rights Reserved.</div>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <a href="/" className="hover:text-gold-300 transition-colors">Home</a>
            <span>&bull;</span>
            <a href="/privacy" className="hover:text-gold-300 transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="/#offices" className="hover:text-gold-300 transition-colors">Offices</a>
          </div>
        </div>
      </main>
    </div>
  )
}
