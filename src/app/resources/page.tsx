import {
  Download,
  FileSpreadsheet,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const featuredDownload = {
  title: "Multifamily Underwriting Model",
  description:
    "Our flagship analysis tool for multifamily investors. Built with institutional-grade formulas across four integrated tabs: Instructions, Dashboard, Rent Roll, and Historicals. Plug in your deal assumptions and instantly see whether your acquisition or refinance pencils out.",
  format: "XLSX",
  icon: FileSpreadsheet,
  href: "/TA-Capital-Link-Underwriting-Model.xlsx",
  highlights: [
    "Built-in Deal Quality Assessment with STRONG / MARGINAL / WEAK verdict",
    "Auto-calculated LTV, DSCR, Cash-on-Cash, and Equity Multiple",
    "100-unit Rent Roll with market rent gap analysis",
    "T12 Historicals and Year 1 Pro Forma with per-unit benchmarks",
  ],
};

const downloads = [
  {
    title: "Rent Roll Template",
    description:
      "Standardized rent roll template for organizing unit-level data including current rents, market rents, lease expirations, and vacancy. Includes residential and commercial tabs with automatic occupancy tracking.",
    format: "XLSX",
    icon: FileSpreadsheet,
    href: "/TA-Capital-Link-Rent-Roll.xlsx",
  },
  {
    title: "Loan Comparison Worksheet",
    description:
      "Side-by-side loan term comparison tool for evaluating multiple financing options. Compare rates, fees, prepayment penalties, and total cost of capital across different lenders.",
    format: "XLSX",
    icon: FileSpreadsheet,
    href: "/TA-Capital-Link-Loan-Comparison.xlsx",
  },
  {
    title: "T12 Income & Expense Template",
    description:
      "Trailing 12-month income and expense statement template for multifamily properties. Tracks gross rental income, operating expenses, net cash flow, and capital expenditures month by month with automatic totals.",
    format: "XLSX",
    icon: FileSpreadsheet,
    href: "/TA-Capital-Link-T12-Template.xlsx",
  },
  {
    title: "Due Diligence Checklist",
    description:
      "Institutional-grade borrower underwriting checklist covering loan application, property-level documents, borrower documents, and closing items. Organized by category with YES/NO/N/A status tracking and automatic Acquisition vs. Refinance logic.",
    format: "XLSX",
    icon: FileSpreadsheet,
    href: "/TA-Capital-Link-Due-Diligence-Checklist.xlsx",
  },
];

const guides = [
  {
    title: "How to Underwrite a Multifamily Deal",
    excerpt:
      "A step-by-step walkthrough of institutional underwriting methodology, covering revenue assumptions, expense analysis, capital reserves, and return calculations.",
    readTime: "12 min read",
  },
  {
    title: "Understanding Multifamily Loan Programs",
    excerpt:
      "An overview of the major multifamily financing programs including Fannie Mae, Freddie Mac, FHA, CMBS, bridge loans, and bank products. Learn which programs fit different deal profiles.",
    readTime: "10 min read",
  },
  {
    title: "Cap Rates, NOI, and Valuation Fundamentals",
    excerpt:
      "Master the core metrics that drive multifamily valuations. This guide breaks down how institutional investors evaluate properties and make investment decisions.",
    readTime: "8 min read",
  },
  {
    title: "Navigating Your First Value-Add Deal",
    excerpt:
      "Practical guidance for executing a value-add business plan on a multifamily acquisition, including renovation budgeting, rent growth projections, and exit strategies.",
    readTime: "15 min read",
  },
];

export default function Resources() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <div className="w-12 h-0.5 bg-gold-500 mb-6" />
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Resources
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            Free tools, templates, and educational content to help you analyze
            deals with confidence and build institutional-quality underwriting
            skills.
          </p>
        </div>

        {/* Featured: Underwriting Model */}
        <div className="mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-8">
            Featured Tool
          </h2>
          <div className="bg-gradient-to-br from-navy-900/60 to-navy-900/30 border border-gold-500/20 rounded-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded bg-gold-500/10 flex items-center justify-center">
                    <BarChart3 size={22} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {featuredDownload.title}
                    </h3>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded">
                      {featuredDownload.format}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {featuredDownload.description}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {featuredDownload.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-gray-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-gold-500 shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={featuredDownload.href}
                    download
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
                  >
                    <Download size={16} className="mr-2" />
                    Download Free Model
                  </a>
                  <Link
                    href="/book-call"
                    className="inline-flex items-center justify-center px-7 py-3.5 border border-gold-500/40 text-gold-400 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:border-gold-500 hover:text-gold-300 hover:bg-gold-500/5"
                  >
                    Need Help Using It?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Templates */}
        <div className="mb-20">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-8">
            Additional Templates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {downloads.map((item) => (
              <div
                key={item.title}
                className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <item.icon size={18} className="text-gold-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded shrink-0">
                        {item.format}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <a
                      href={item.href}
                      download
                      className="inline-flex items-center text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      <Download size={14} className="mr-1.5" />
                      Download Free
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guides Section */}
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-8">
            Educational Guides
          </h2>
          <div className="space-y-4">
            {guides.map((guide) => (
              <div
                key={guide.title}
                className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <BookOpen size={18} className="text-gold-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-base font-semibold text-white group-hover:text-gold-400 transition-colors">
                        {guide.title}
                      </h3>
                      <span className="text-xs text-gray-500 shrink-0">
                        {guide.readTime}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {guide.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">
            Need personalized guidance on your deal?
          </p>
          <Link
            href="/book-call"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400"
          >
            Book a Consultation
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
