import { Download, FileSpreadsheet, BookOpen, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const downloads = [
  {
    title: "Multifamily Underwriting Model",
    description:
      "A comprehensive Excel-based underwriting template used to analyze acquisition and refinance scenarios for multifamily properties. Includes cash flow projections, debt service coverage, and return metrics.",
    format: "XLSX",
    icon: FileSpreadsheet,
  },
  {
    title: "Rent Roll Template",
    description:
      "Standardized rent roll template for organizing unit-level data including current rents, market rents, lease expirations, and vacancy. Essential for any multifamily due diligence process.",
    format: "XLSX",
    icon: FileSpreadsheet,
  },
  {
    title: "Loan Comparison Worksheet",
    description:
      "Side-by-side loan term comparison tool for evaluating multiple financing options. Compare rates, fees, prepayment penalties, and total cost of capital across different lenders.",
    format: "XLSX",
    icon: FileSpreadsheet,
  },
  {
    title: "Due Diligence Checklist",
    description:
      "Complete checklist covering every phase of multifamily due diligence, from initial underwriting through closing. Organized by category with status tracking.",
    format: "PDF",
    icon: FileText,
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

        {/* Downloads Section */}
        <div className="mb-20">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-8">
            Free Downloads
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
                    <button className="inline-flex items-center text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors">
                      <Download size={14} className="mr-1.5" />
                      Download Free
                    </button>
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
