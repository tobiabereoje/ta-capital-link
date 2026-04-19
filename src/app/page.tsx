import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileSearch,
  Lightbulb,
  Download,
  ChevronRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  ClipboardCheck,
  Settings,
  Handshake,
  FileText,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative px-6 pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-transparent to-transparent pointer-events-none" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Modern multifamily buildings"
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/60 border border-navy-800/50 text-xs font-medium text-gold-400 tracking-wider uppercase mb-8">
            Multifamily Capital Markets
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight tracking-tight mb-6">
            Get Your Multifamily Deal
            <br />
            <span className="text-gold-400">Financed Fast &amp; Structurally Optimized</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Institutional-level underwriting and capital sourcing for
            multifamily investors and operators.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/submit-deal"
              className="inline-flex items-center justify-center px-9 py-4 bg-gold-500 text-navy-950 font-bold text-base tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Get a Loan Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <div className="flex flex-col items-center">
              <Link
                href="/book-call"
                className="inline-flex items-center justify-center px-9 py-4 border border-gold-500/40 text-gold-400 font-bold text-base tracking-wide uppercase rounded transition-all duration-300 hover:border-gold-500 hover:text-gold-300 hover:bg-gold-500/5"
              >
                Book a Consultation
              </Link>
              <span className="text-xs text-gray-500 mt-2">30 min &middot; $100 via Zelle</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCE SNAPSHOT ========== */}
      <section className="px-6 py-16 border-y border-navy-800/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Experience Snapshot
            </h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Proven Multifamily Expertise
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                value: "$500M+",
                label: "Multifamily Experience",
              },
              {
                value: "Agency, Bridge & Value-Add",
                label: "Financing Expertise",
              },
              {
                value: "Institutional",
                label: "Underwriting & Capital Markets Background",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 text-center transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60"
              >
                <div className="text-xl md:text-2xl font-display font-bold text-gold-400 mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-gray-400 tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="px-6 py-20 md:py-28 bg-navy-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Services
            </h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              How We Help You Win
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Debt Structuring & Capital Sourcing",
                href: "/submit-deal",
                description:
                  "Structure and source optimal financing solutions across agency, bridge, and permanent lenders.",
              },
              {
                icon: FileSearch,
                title: "Underwriting & Deal Review",
                href: "/submit-deal",
                description:
                  "Institutional-level analysis to evaluate acquisitions, refinances, and value-add opportunities.",
              },
              {
                icon: Lightbulb,
                title: "Deal Strategy & Advisory",
                href: "/book-call",
                description:
                  "Strategic guidance on deal structure, financing approach, and execution.",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60 group block"
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
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/submit-deal"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-950 font-bold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Get a Loan Quote
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHO WE WORK WITH ========== */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Who We Work With
            </h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Built for Multifamily Professionals
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: Users,
                label: "Multifamily investors",
              },
              {
                icon: Handshake,
                label: "Sponsors and syndicators",
              },
              {
                icon: Building2,
                label: "Property owners refinancing assets",
              },
              {
                icon: FileText,
                label: "Brokers with active deals",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60"
              >
                <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-gold-500" />
                </div>
                <span className="text-base font-medium text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT HAPPENS AFTER YOU SUBMIT ========== */}
      <section className="px-6 py-20 md:py-28 bg-navy-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Our Process
            </h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              What Happens After You Submit a Deal
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: "1",
                icon: ClipboardCheck,
                title: "Deal Review",
                description: "We review your deal within 24–48 hours.",
              },
              {
                step: "2",
                icon: Settings,
                title: "Structure Financing",
                description: "We structure optimal financing options.",
              },
              {
                step: "3",
                icon: Handshake,
                title: "Lender Matching",
                description: "We connect you with the right lenders.",
              },
              {
                step: "4",
                icon: FileText,
                title: "Loan Quotes",
                description: "You receive tailored loan quotes.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 text-center transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60 group relative"
              >
                <div className="absolute top-4 right-4 text-xs font-bold text-gold-500/30 tracking-wider">
                  STEP {item.step}
                </div>
                <div className="w-12 h-12 rounded bg-gold-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500/20 transition-colors">
                  <item.icon size={22} className="text-gold-500" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/submit-deal"
              className="inline-flex items-center justify-center px-9 py-4 bg-gold-500 text-navy-950 font-bold text-base tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Get a Loan Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FREE UNDERWRITING TOOL ========== */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Free Underwriting Tool
            </h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Underwrite Your Deal in Minutes
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Download our free Multifamily Underwriting Model and instantly see
              whether your acquisition or refinance pencils out. Built with
              institutional-grade formulas and a built-in Deal Quality
              Assessment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: BarChart3,
                title: "Plug In Your Numbers",
                description:
                  "Enter your purchase price, rents, expenses, and loan terms. Yellow-highlighted cells show exactly where to input your assumptions.",
              },
              {
                icon: Gauge,
                title: "Get a Deal Verdict",
                description:
                  "The model automatically scores your deal as STRONG, MARGINAL, or WEAK based on LTV, DSCR, Cash-on-Cash return, and leverage metrics.",
              },
              {
                icon: CheckCircle2,
                title: "Know How to Improve",
                description:
                  "If your deal falls short, the model shows exactly what needs to change, whether it is the purchase price, interest rate, rents, or expenses.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 text-center transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60 group"
              >
                <div className="w-12 h-12 rounded bg-gold-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500/20 transition-colors">
                  <step.icon size={22} className="text-gold-500" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/TA-Capital-Link-Underwriting-Model.xlsx"
              download
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
            >
              <Download size={16} className="mr-2" />
              Download Free Model
            </a>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-gold-500/40 text-gold-400 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:border-gold-500 hover:text-gold-300 hover:bg-gold-500/5"
            >
              Browse All Resources
              <ChevronRight size={16} className="ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="px-6 py-20 md:py-28 bg-gradient-to-b from-navy-900/30 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Ready to Move Forward?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Submit your deal to receive a custom loan quote tailored to your
            property and business plan. Our team will review your submission and
            respond within 24&ndash;48 hours.
          </p>
          <Link
            href="/submit-deal"
            className="inline-flex items-center justify-center px-9 py-4 bg-gold-500 text-navy-950 font-bold text-base tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
          >
            Get a Loan Quote
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
