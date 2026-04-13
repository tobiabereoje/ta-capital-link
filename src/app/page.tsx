import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileSearch,
  Phone,
  Download,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative px-6 pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/60 border border-navy-800/50 text-xs font-medium text-gold-400 tracking-wider uppercase mb-8">
            Multifamily Capital Markets
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight tracking-tight mb-6">
            Institutional Multifamily
            <br />
            <span className="text-gold-400">Lending &amp; Advisory</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            We help multifamily investors secure optimal financing, underwrite
            deals with institutional precision, and navigate complex capital
            structures with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/submit-deal"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
            >
              Submit Your Deal
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-gold-500/40 text-gold-400 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:border-gold-500 hover:text-gold-300 hover:bg-gold-500/5"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="px-6 py-12 border-y border-navy-800/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "$250M+", label: "Deal Volume Advised" },
            { value: "150+", label: "Deals Reviewed" },
            { value: "50+", label: "Lender Relationships" },
            { value: "100%", label: "Client Focus" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-display font-bold text-gold-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-0.5 bg-gold-500 mb-6" />
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
            About TA Capital Link
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-snug">
              Institutional-Grade Advisory for Multifamily Investors
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                TA Capital Link brings deep experience in multifamily real
                estate underwriting, capital markets, and deal structuring. We
                serve as a trusted extension of your team, providing the
                analytical rigor and lender relationships typically reserved for
                institutional players.
              </p>
              <p>
                Whether you are acquiring your first 20-unit property or
                refinancing a 200-unit portfolio, our advisory platform is
                designed to help you secure the best terms, avoid costly
                mistakes, and move with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="px-6 py-20 md:py-28 bg-navy-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Our Services
            </h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              How We Help You Win
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Loan Advisory",
                description:
                  "We source and structure financing across a network of 50+ lending relationships, including agencies, banks, CMBS, bridge lenders, and debt funds. Our process ensures you get the best terms available for your deal.",
              },
              {
                icon: FileSearch,
                title: "Underwriting & Deal Review",
                description:
                  "Receive institutional-quality underwriting and due diligence analysis on any multifamily opportunity. We stress-test assumptions, model scenarios, and identify risks before you commit capital.",
              },
              {
                icon: Phone,
                title: "Consulting",
                description:
                  "Book a paid one-on-one session with an experienced multifamily advisor. Get personalized guidance on deal structure, financing strategy, market analysis, or portfolio optimization.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60 group"
              >
                <div className="w-12 h-12 rounded bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                  <service.icon size={22} className="text-gold-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FREE RESOURCES ========== */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-10 md:p-14 flex flex-col md:flex-row items-start gap-8">
            <div className="w-14 h-14 rounded bg-gold-500/10 flex items-center justify-center shrink-0">
              <Download size={24} className="text-gold-500" />
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3">
                Free Resources
              </h2>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                Underwriting Models &amp; Educational Content
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Access our library of free underwriting templates, financial
                models, and educational guides designed to sharpen your
                multifamily analysis skills and help you evaluate deals like an
                institutional investor.
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
              >
                Browse Resources
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="px-6 py-20 md:py-28 bg-gradient-to-b from-navy-900/30 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Ready to Move Forward?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Submit your deal to receive a custom loan quote tailored to your
            property and business plan. Our team will review your submission and
            respond within 24 hours.
          </p>
          <Link
            href="/submit-deal"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
          >
            Submit Your Deal
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
