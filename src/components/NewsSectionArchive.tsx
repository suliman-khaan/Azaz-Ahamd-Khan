/**
 * NewsSectionArchive.tsx
 * -----------------------
 * Archived News, Updates & Publications module for Azaz & Associates LLP.
 * Can be reinstated onto the live landing page at any time.
 */

export interface PublicationItem {
  id: string
  category: string
  date: string
  author: string
  title: string
  summary: string
  body: string[]
}

export const ARCHIVED_PUBLICATIONS: PublicationItem[] = [
  {
    id: 'ins-1',
    category: 'FBR & Tax',
    date: 'Regulatory Brief',
    author: 'Azaz Ahmad Khan, CTA',
    title: 'Maintaining Active Taxpayer List (ATL) Status & Avoiding Higher Withholding Rates',
    summary: 'Key compliance milestones for salaried individuals, AOPs, and companies filing annual income tax returns and wealth statements on FBR IRIS.',
    body: [
      'Timely submission of annual Income Tax Returns and reconciled Wealth Statements (Form 116) is essential to retain Active Taxpayer List (ATL) status under the Income Tax Ordinance, 2001. Non-filer status triggers significantly elevated withholding tax rates across banking transactions, property transfers, vehicle registrations, and commercial supplies.',
      'Azaz & Associates LLP advises individuals, AOPs, companies, associations, and trusts to reconcile annual bank inflows, assets, and withholding tax certificates (CPRs) well ahead of statutory deadlines to prevent automated FBR notices under Sections 114, 122, or 161.'
    ]
  },
  {
    id: 'ins-2',
    category: 'SECP & Corporate',
    date: 'Corporate Guide',
    author: 'Corporate Advisory Desk',
    title: 'Choosing the Right Business Structure in Pakistan: SMC, Private Limited, LLP or AOP',
    summary: 'A practical comparison of liability protection, SECP annual compliance, and tax treatment for founders and growing enterprises.',
    body: [
      'Selecting the right legal vehicle at inception directly affects personal liability, investor readiness, banking facilities, and long-term tax efficiency. While a Sole Proprietorship or AOP offers fast setup, a Single Member Company (SMC), Private Limited Company, or Limited Liability Partnership (LLP) provides separate legal personality and structured governance under SECP.',
      'Our corporate desk handles name reservation, constitutional drafting, incorporation, and post-incorporation Form A / Form 29 compliance so business owners stay fully aligned with the Companies Act, 2017.'
    ]
  },
  {
    id: 'ins-3',
    category: 'IPO & Trademarks',
    date: 'IP Protection',
    author: 'IPO Practice Group',
    title: 'Securing Brand Rights Through IPO Pakistan: From Trademark Search to Registration',
    summary: 'Why early trademark registration under the Nice Classification protects commercial goodwill and prevents costly brand disputes.',
    body: [
      'Registering a business name with SECP or obtaining an NTN does not grant exclusive trademark rights over a brand name or logo. Exclusive statutory protection across Pakistan requires filing an application with the Intellectual Property Organization of Pakistan (IPO Pakistan) in the appropriate Nice Classification classes.',
      'With over 100 trademark registrations completed through IPO Pakistan, Azaz & Associates LLP manages clearance searches, TM-1 filings, examination report replies, publication tracking, and opposition defense.'
    ]
  },
  {
    id: 'ins-4',
    category: 'Legal Updates',
    date: 'Practice Note',
    author: 'Litigation Chambers',
    title: 'Navigating Inquiries & Legal Representation Before FIA and NCCIA',
    summary: 'Understanding procedural safeguards, statutory notices, and early legal strategy in federal and cybercrime investigations.',
    body: [
      'Receiving a call-up notice or inquiry summons from the Federal Investigation Agency (FIA) or the National Cyber Crime Investigation Agency (NCCIA) requires prompt, measured legal representation. Preserving documentary records and responding strictly within statutory boundaries protects fundamental rights during inquiry and trial stages.',
      'Our Advocates represent clients across District Courts, High Courts, and federal inquiry forums with strict confidentiality and procedural rigor.'
    ]
  },
  {
    id: 'ins-5',
    category: 'Articles',
    date: 'Trade & Customs',
    author: 'Azaz Ahmad Khan, CTA',
    title: 'Pakistan Single Window (PSW) & Import/Export Licensing Essentials for Traders',
    summary: 'A concise roadmap covering NTN business enrollment, bank profile linking, PSW subscription, and IEC renewals.',
    body: [
      'The Pakistan Single Window (PSW) has streamlined cross-border trade documentation by replacing legacy WEBOC workflows with a unified digital portal. Before subscribing to PSW, exporters and importers must ensure their NTN business particulars, STRN (where applicable), and authorized bank IBAN records match FBR and NADRA records.',
      'Having facilitated 50+ PSW registrations, our firm guides traders through subscription, biometric verification, and ongoing IEC compliance.'
    ]
  },
  {
    id: 'ins-6',
    category: 'FBR & Tax',
    date: 'Seminars & Training',
    author: 'Azaz Ahmad Khan, CTA',
    title: 'Tax Awareness & Statutory Compliance Training for the Judiciary and Legal Fraternity',
    summary: 'Highlights from our tax awareness lectures delivered to judicial officers, court staff, and advocates in District Swat.',
    body: [
      'Building practical fluency in Pakistan’s income tax and sales tax framework benefits both the bench and the bar. Azaz & Associates LLP has organized dedicated Tax Awareness Seminars for the District Judiciary Swat and for Advocates and Legal Professionals, focusing on salaried tax computation, wealth reconciliation, and statutory compliance.',
      'Organizations, bar associations, and corporate teams seeking customized tax or corporate compliance workshops may contact our Swat or Islamabad chambers.'
    ]
  }
]
