import { useEffect } from 'react'
import ChambersHeader from '../components/ChambersHeader'

const CURRENT_YEAR = new Date().getFullYear()

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy | Azaz & Associates LLP'
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
            <span className="relative z-10">Statutory &amp; Client Confidentiality Charter</span>
            <div className="pointer-events-none absolute inset-0 -translate-x-full dynamic-shimmer-sweep bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-medium text-parchment-50 tracking-tight leading-tight">
            Privacy Policy &amp; Data Ethics
          </h1>

          <p className="text-sm text-parchment-200/80 mt-3 leading-relaxed max-w-2xl">
            Azaz &amp; Associates LLP upholds strict client-counsel privilege and rigorous data protection standards across all judicial, taxation, corporate, and digital interactions.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-parchment-300/60 mt-4">
            <span>Effective Date: January 1, 2026</span>
            <span>&bull;</span>
            <span>Applicable Forums: Pakistan &amp; International</span>
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
                Scope of Confidentiality &amp; Legal Privilege
              </h2>
            </div>
            <p>
              Under the <strong>Legal Practitioners and Bar Councils Act</strong> and established canons of legal ethics in Pakistan, all communications, documents, disclosures, and case instructions shared with <strong>Azaz &amp; Associates LLP</strong> are protected by advocate-client privilege.
            </p>
            <p className="mt-3 text-parchment-300/90">
              This confidentiality applies to all preliminary inquiries, formal chamber consultations, written correspondence, tax documentation, corporate filings, and litigation briefs handled by our Swat Chambers and Islamabad Offices.
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
                Information We Collect
              </h2>
            </div>
            <p>
              In providing legal, tax, and corporate consultancy services, the firm may collect information through our website consultation forms, official WhatsApp communication lines, email, or physical chamber meetings:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-parchment-200/90">
              <li><strong>Identification Particulars:</strong> Full name, CNIC or Passport details, mobile contact numbers, residential and registered business addresses.</li>
              <li><strong>Tax Documentation (FBR):</strong> National Tax Number (NTN), Sales Tax Registration Number (STRN), annual income statements, wealth reconciliation particulars (Form 116), withholding certificates, and Computerized Payment Receipts (CPRs).</li>
              <li><strong>Corporate &amp; Entity Records (SECP):</strong> Proposed or registered company names, Articles &amp; Memorandum of Association, director/subscriber details, Form A and Form 29 filings, and board resolutions.</li>
              <li><strong>Intellectual Property Assets (IPO Pakistan):</strong> Brand names, device marks, logo artwork, commercial usage dates, and Nice Classification specifications.</li>
              <li><strong>Trade &amp; Regulatory Data:</strong> Pakistan Single Window (PSW) subscription credentials, bank account maintenance certificates, and commercial import/export documentation.</li>
            </ul>
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
                Purpose &amp; Lawful Processing
              </h2>
            </div>
            <p>
              Information entrusted to the firm is processed strictly for the following purposes:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-parchment-200/90">
              <li>Evaluating legal inquiries and drafting tailored legal, tax, or corporate advisory opinions.</li>
              <li>Filing statutory petitions, plaints, written statements, and appeals before High Courts, District Courts, Service Tribunals, and Special Courts.</li>
              <li>Preparing and submitting income tax returns, wealth statements, and responding to statutory notices issued by the Federal Board of Revenue (FBR).</li>
              <li>Facilitating entity incorporation, LLP registrations, and statutory compliance with the Securities and Exchange Commission of Pakistan (SECP).</li>
              <li>Procuring trademark registrations, oppositions, and renewals before the Intellectual Property Organization (IPO) of Pakistan.</li>
            </ul>
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
                Non-Disclosure &amp; Information Security
              </h2>
            </div>
            <p>
              <strong>Azaz &amp; Associates LLP</strong> does not sell, lease, rent, trade, or distribute client contact particulars, tax records, or legal files to any third party for marketing or unauthorized commercial use.
            </p>
            <p className="mt-3 text-parchment-300/90">
              Disclosures are made solely to competent judicial, tax, or regulatory forums (such as FBR, SECP, or Courts of Law) pursuant to formal client authorization or mandatory statutory compliance.
            </p>
            <p className="mt-3 text-parchment-300/90">
              Physical files within our chambers are safeguarded under restricted access controls, and electronic data transmissions are conducted via secure, encrypted channels.
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
                Record Retention &amp; Client Inquiries
              </h2>
            </div>
            <p>
              In accordance with legal practice regulations and statutory tax audit periods under the Income Tax Ordinance, 2001, case records and filings are retained for statutory durations. Clients may request an update, verification, or return of original certificates upon formal request.
            </p>
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-gold-400 font-semibold">Chambers Data Officer</div>
                <div className="text-parchment-50 text-sm mt-0.5 font-medium">Azaz Ahmad Khan &mdash; Chief Executive</div>
                <div className="text-xs text-parchment-300/70">Email: tax@azazassociatesllp.com</div>
              </div>
              <a
                href="/#consultation"
                className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-obsidian-950 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
              >
                Contact Chambers
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
            <a href="/disclaimer" className="hover:text-gold-300 transition-colors">Legal Disclaimer</a>
            <span>&bull;</span>
            <a href="/#offices" className="hover:text-gold-300 transition-colors">Offices</a>
          </div>
        </div>
      </main>
    </div>
  )
}
