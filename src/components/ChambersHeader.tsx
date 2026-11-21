export default function ChambersHeader() {
  return (
    <>
      {/* Top Utility Strip */}
      <div className="bg-obsidian-950 text-parchment-200/80 border-b border-white/10 text-xs overflow-hidden">
        {/* Desktop Stationary Bar (Visible on md+) */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 items-center justify-between gap-2">
          <div className="flex items-center gap-x-5">
            <span className="inline-flex items-center gap-1.5 tracking-wide">
              <svg className="w-3.5 h-3.5 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Swat &amp; Islamabad Chambers
            </span>
            <a href="mailto:tax@azazassociatesllp.com" className="inline-flex items-center gap-1.5 hover:text-gold-300 transition-colors">
              <svg className="w-3.5 h-3.5 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              tax@azazassociatesllp.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/923349343675" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold-300 transition-colors">
              <svg className="w-3.5 h-3.5 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +92 334 9343675
            </a>
            <span className="text-white/20">|</span>
            <a href="https://wa.me/923125113675" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold-300 transition-colors">
              <svg className="w-3.5 h-3.5 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +92 312 5113675
            </a>
          </div>
        </div>

        {/* Mobile Infinite Marquee Bar (Visible on mobile/tablet) */}
        <div className="md:hidden py-2 px-2 overflow-hidden marquee-mask whitespace-nowrap">
          <div className="marquee-track flex items-center gap-8 text-[11px] font-medium tracking-wide">
            {/* Sequence 1 */}
            <span className="inline-flex items-center gap-1.5 shrink-0">
              <svg className="w-3 h-3 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Swat &amp; Islamabad Chambers
            </span>
            <a href="mailto:tax@azazassociatesllp.com" className="inline-flex items-center gap-1.5 shrink-0 text-parchment-200 hover:text-gold-300">
              <svg className="w-3 h-3 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              tax@azazassociatesllp.com
            </a>
            <a href="https://wa.me/923349343675" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 shrink-0 text-parchment-200 hover:text-gold-300">
              <svg className="w-3 h-3 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +92 334 9343675
            </a>
            <a href="https://wa.me/923125113675" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 shrink-0 text-parchment-200 hover:text-gold-300">
              <svg className="w-3 h-3 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +92 312 5113675
            </a>

            {/* Duplicate Sequence for seamless infinite loop */}
            <span className="inline-flex items-center gap-1.5 shrink-0" aria-hidden="true">
              <svg className="w-3 h-3 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Swat &amp; Islamabad Chambers
            </span>
            <a href="mailto:tax@azazassociatesllp.com" className="inline-flex items-center gap-1.5 shrink-0 text-parchment-200 hover:text-gold-300" aria-hidden="true">
              <svg className="w-3 h-3 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              tax@azazassociatesllp.com
            </a>
            <a href="https://wa.me/923349343675" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 shrink-0 text-parchment-200 hover:text-gold-300" aria-hidden="true">
              <svg className="w-3 h-3 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +92 334 9343675
            </a>
            <a href="https://wa.me/923125113675" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 shrink-0 text-parchment-200 hover:text-gold-300" aria-hidden="true">
              <svg className="w-3 h-3 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +92 312 5113675
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-obsidian-900/95 backdrop-blur-md border-b border-gold-500/20 transition-shadow relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Identity */}
            <a href="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0">
              <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
                <img src="/azazandassociates.png" alt="Azaz &amp; Associates LLP Emblem" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-editorial text-sm sm:text-xl font-semibold tracking-wide sm:tracking-wider text-parchment-50 leading-none group-hover:text-gold-300 transition-colors">
                  AZAZ &amp; ASSOCIATES <span className="text-gold-400 font-normal">LLP</span>
                </div>
                <div className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-parchment-300/75 mt-1">
                  Legal, Tax &amp; Corporate Consultants
                </div>
              </div>
            </a>

            {/* Return to Chambers CTA */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-gold-500/40 hover:border-gold-400 bg-obsidian-900 hover:bg-gold-500 hover:text-obsidian-950 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.13em] text-gold-400 transition-all shrink-0"
              >
                <span>&larr; <span className="hidden sm:inline">Return to </span>Chambers</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
