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
  Quote,
  Shield,
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
            <span className="text-gold-400">
              Financed Fast &amp; Structurally Optimized
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Institutional-level underwriting and capital sourcing for
            multifamily investors and operators.
          </p>

          <p className="text-sm text-gray-400 italic mt-3">
            Trusted by multifamily investors and operators.
          </p>

          <p className="text-sm md:text-base text-gold-400 font-semibold tracking-wide uppercase mt-4 mb-2">
            Focused on $2M - $50M+ multifamily transactions nationwide
          </p>

          <div className="flex flex-col sm:flex-row items-start justify-center gap-4">
            <div className="flex flex-col items-center">
              <Link
                href="/submit-deal"
                className="inline-flex items-center justify-center px-9 py-4 bg-gold-500 text-navy-950 font-bold text-base tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
              >
                Get a Loan Quote
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <span className="text-xs text-gray-500 mt-1">
                No obligation. 100% confidential.
              </span>
            </div>

            <div className="flex flex-col items-center">
              <Link
                href="/book-call"
                className="inline-flex items-center justify-center px-9 py-4 border border-gold-500/40 text-gold-400 font-bold text-base tracking-wide uppercase rounded transition-all duration-300 hover:border-gold-500 hover:text-gold-300 hover:bg-gold-500/5"
              >
                Book a Deal Assessment
              </Link>
              <span className="text-xs text-gray-500 mt-2">
                30 min &middot; $100 via Zelle
              </span>
              <span className="text-xs text-gold-400 mt-1 italic">
                Fee credited toward advisory engagement
              </span>
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
                label: "Multifamily Underwriting & Acquisitions Experience",
              },
              {
                value: "Deep Expertise",
                label: "Across Agency, Bridge & Structured Debt",
              },
              {
                value: "Institutional",
                label: "Former Private Equity & Institutional Lending Background",
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

      {/* ========== CASE STUDIES ========== */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Client Results
            </h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Deals We&apos;ve Helped Close
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center">
                  <Building2 size={20} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">92-Unit Value-Add Acquisition</p>
                  <p className="text-xs text-gray-500">Southeast U.S.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Deal Size</p>
                  <p className="text-lg font-display font-bold text-gold-400">$14.5M</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Financing</p>
                  <p className="text-lg font-display font-bold text-gold-400">Agency Bridge</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Structured a two-year bridge loan with a rate lock on permanent takeout financing. The client needed flexible prepayment terms to execute their renovation plan on a tight timeline. We sourced three competitive offers and closed within 45 days.
              </p>
              <div className="border-t border-navy-800/40 pt-5">
                <div className="flex items-start gap-3">
                  <Quote size={16} className="text-gold-500/50 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    &ldquo;They understood our business plan from day one and found us a lender that matched our exact needs. The deal closed on schedule with better terms than we expected.&rdquo;
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-3">&mdash; Multifamily Sponsor, First-Time Agency Borrower</p>
              </div>
            </div>

            <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center">
                  <Building2 size={20} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">156-Unit Stabilized Refinance</p>
                  <p className="text-xs text-gray-500">Midwest</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Deal Size</p>
                  <p className="text-lg font-display font-bold text-gold-400">$22.8M</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Financing</p>
                  <p className="text-lg font-display font-bold text-gold-400">Freddie Mac</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Helped a repeat investor refinance out of a maturing bridge loan into long-term fixed-rate agency debt. Our underwriting identified $180K in annual expense savings the borrower had overlooked, which improved their DSCR and unlocked a higher loan proceed.
              </p>
              <div className="border-t border-navy-800/40 pt-5">
                <div className="flex items-start gap-3">
                  <Quote size={16} className="text-gold-500/50 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    &ldquo;Their underwriting caught savings we missed entirely. We ended up with 40 basis points better than our original quote and pulled out an extra $1.2M in proceeds at closing.&rdquo;
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-3">&mdash; Private Investor, 500+ Unit Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CREDIBILITY ========== */}
      <section className="px-6 py-10 text-center">
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Experience working with agency lenders including Fannie Mae and
          Freddie Mac, as well as leading bridge lenders.
        </p>
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
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We don&apos;t just quote loans &mdash; we structure the optimal
              capital stack for your deal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Debt Structuring & Capital Sourcing",
                href: "/submit-deal",
                description: "Structure and source optimal financing solutions across agency, bridge, and permanent lenders.",
              },
              {
                icon: FileSearch,
                title: "Underwriting & Deal Review",
                href: "/submit-deal",
                description: "Institutional-level analysis to evaluate acquisitions, refinances, and value-add opportunities.",
              },
              {
                icon: Lightbulb,
                title: "Deal Strategy & Advisory",
                href: "/book-call",
                description: "Strategic guidance on deal structure, financing approach, and execution.",
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
            <p className="text-xs text-gray-500 mt-2">No obligation. 100% confidential.</p>
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
              { icon: Users, label: "Multifamily investors" },
              { icon: Handshake, label: "Sponsors and syndicators" },
              { icon: Building2, label: "Property owners refinancing assets" },
              { icon: FileText, label: "Brokers with active deals" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60"
              >
                <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-gold-500" />
                </div>
                <span className="text-base font-medium text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="px-6 py-20 md:py-28 bg-navy-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              About the Firm
            </h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Why TA Capital Link
            </h3>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto space-y-6 text-gray-400 leading-relaxed">
              <p>
                TA Capital Link was founded on a simple premise: multifamily investors deserve the same caliber of underwriting and capital markets advisory that institutional firms provide to their largest clients.
              </p>
              <p>
                Our team brings direct experience from private equity acquisitions, institutional lending, and agency debt origination. We have underwritten and analyzed over $500M in multifamily transactions across agency, bridge, and structured debt products.
              </p>
              <p>
                We work with investors at every stage, from first-time buyers navigating agency lending requirements to experienced operators optimizing their capital stack across a growing portfolio. Every deal gets the same institutional-grade analysis, competitive lender sourcing, and hands-on advisory through closing.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-navy-800/40">
              {[
                {
                  icon: Shield,
                  title: "Institutional Standards",
                  description: "Every deal is underwritten to the same standards used by top PE firms and agency lenders.",
                },
                {
                  icon: Handshake,
                  title: "Aligned Interests",
                  description: "We earn your trust by delivering results. Our advisory fee is credited toward your engagement.",
                },
                {
                  icon: FileSearch,
                  title: "Lender Relationships",
                  description: "Direct access to agency, bridge, and CMBS lenders through established capital markets relationships.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={20} className="text-gold-500" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT HAPPENS AFTER YOU SUBMIT ========== */}
      <section className="px-6 py-20 md:py-28">
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
              { step: "1", icon: ClipboardCheck, title: "Deal Review", description: "We review your deal within 24-48 hours." },
              { step: "2", icon: Settings, title: "Structure Financing", description: "We structure optimal financing options." },
              { step: "3", icon: Handshake, title: "Lender Matching", description: "We connect you with the right lenders." },
              { step: "4", icon: FileText, title: "Loan Quotes", description: "You receive tailored loan quotes." },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 text-center transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60 group relative"
              >
                <div className="absolute top-4 right-4 text-xs font-bold text-gold-500/30 tracking-wider">STEP {item.step}</div>
                <div className="w-12 h-12 rounded bg-gold-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500/20 transition-colors">
                  <item.icon size={22} className="text-gold-500" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
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
            <p className="text-xs text-gray-500 mt-2">No obligation. 100% confidential.</p>
            <p className="text-xs text-gold-400/70 mt-1">Initial deal review within 24-48 hours.</p>
          </div>
        </div>
      </section>

      {/* ── Free Underwriting Tool ── */}
      <section className="px-6 py-24 bg-navy-950/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Free Underwriting Model
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The same Excel model we use internally to evaluate multifamily acquisitions and refinances. No email required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: BarChart3,
                title: "Plug In Your Numbers",
                desc: "Enter purchase price, rent roll, expenses, and loan terms to model any deal scenario.",
              },
              {
                icon: Gauge,
                title: "Get a Deal Verdict",
                desc: "Instant DSCR, cash-on-cash return, and debt yield calculations with pass/fail indicators.",
              },
              {
                icon: CheckCircle2,
                title: "Know How to Improve",
                desc: "See exactly which metrics fall short and what changes would make the deal financeable.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 text-center"
              >
                <div className="w-12 h-12 rounded bg-gold-500/10 flex items-center justify-center mx-auto mb-5">
                  <card.icon size={22} className="text-gold-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/TA-Capital-Link-Underwriting-Model.xlsx"
              download
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase rounded hover:bg-gold-400 transition-colors"
            >
              <Download size={16} />
              Download Free Model
            </a>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gold-500 transition-colors"
            >
              Browse All Resources
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-6 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Ready to Move Forward?
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto">
            Whether you have a deal under contract or you are exploring your options, a confidential
            conversation costs nothing and could save you millions in financing costs.
          </p>
          <Link
            href="/submit-deal"
            className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 px-10 py-4 text-sm font-semibold tracking-wide uppercase rounded hover:bg-gold-400 transition-colors"
          >
            Get a Loan Quote
            <ArrowRight size={16} />
          </Link>
          <p className="text-xs text-gray-500 mt-5">No obligation. 100% confidential.</p>
        </div>
      </section>
    </>
  );
}
