import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoanProgramsGuide() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/resources"
          className="inline-flex items-center text-sm text-gold-400 hover:text-gold-300 transition-colors mb-8"
        >
          <ArrowLeft size={14} className="mr-1.5" />
          Back to Resources
        </Link>

        <div className="mb-10">
          <div className="w-12 h-0.5 bg-gold-500 mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock size={12} />
              10 min read
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded">
              Guide
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Understanding Multifamily Loan Programs
          </h1>
          <p className="text-gray-400 leading-relaxed">
            An overview of the major multifamily financing programs including
            Fannie Mae, Freddie Mac, FHA, CMBS, bridge loans, and bank
            products. Learn which programs fit different deal profiles.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              The Multifamily Lending Landscape
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Multifamily real estate benefits from the deepest and most diverse
              capital markets of any commercial property type. Because housing is
              an essential need, lenders view apartment buildings as lower risk
              than office, retail, or hospitality assets. This translates to more
              competitive rates, higher leverage, and longer loan terms for
              borrowers.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              The right loan program depends on your property type, business
              plan, hold period, and experience level. A stabilized Class A
              property in a primary market will qualify for very different
              financing than a value-add Class C deal in a secondary market.
              Understanding the full menu of options ensures you match the right
              capital to each deal.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Fannie Mae (DUS Program)
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Fannie Mae&apos;s Delegated Underwriting and Servicing (DUS)
              program is one of the most popular sources of multifamily
              financing. It offers fixed and floating rate options, typically 5
              to 30 year terms, with 30-year amortization. Loan amounts start
              around $1 million with no hard cap.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Fannie Mae generally underwrites to a maximum 80% LTV and a
              minimum 1.25x DSCR on stabilized properties. Interest rates are
              priced as a spread over the corresponding Treasury yield. The
              program allows interest-only periods and offers supplemental
              financing for properties that have seasoned for at least 12
              months.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Best suited for stabilized properties with consistent occupancy
              and clean operating histories. Fannie Mae loans carry yield
              maintenance or declining prepayment penalties, so they work best
              for borrowers planning to hold through the lock-out period.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Freddie Mac (Optigo Program)
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Freddie Mac&apos;s Optigo program closely mirrors Fannie Mae in
              terms of leverage, pricing, and loan structure. The main
              differences are in specific product features and underwriting
              nuances. Freddie Mac offers fixed-rate loans, floating-rate
              loans, and a popular small balance loan program for deals between
              $1 million and $7.5 million.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              The Freddie Mac Small Balance Loan (SBL) program is particularly
              competitive for smaller deals. It features streamlined
              underwriting, rate locks as early as application, and terms from 5
              to 20 years. The SBL program has become a go-to source for
              operators acquiring 20 to 100 unit properties in secondary and
              tertiary markets.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              FHA / HUD Multifamily Loans
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              FHA-insured loans through HUD offer the highest leverage and
              longest terms available in multifamily lending. The 223(f) program
              for acquisitions and refinances provides up to 85% LTV (87% for
              affordable properties) with 35-year fully amortizing terms. The
              221(d)(4) program for new construction and substantial
              rehabilitation offers up to 40-year terms.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              The trade-off is speed and complexity. HUD loans require a lengthy
              application process, typically 6 to 12 months from application to
              closing. They also come with ongoing regulatory requirements
              including annual financial reporting and property inspections. For
              borrowers who can plan ahead, HUD financing delivers unmatched
              terms that significantly boost leveraged returns.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              CMBS (Conduit Loans)
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Commercial Mortgage-Backed Securities (CMBS) loans are originated
              by conduit lenders and securitized into bond pools. They typically
              offer 5 or 10 year terms with 25 to 30 year amortization, up to
              75% LTV, and competitive fixed rates.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              CMBS loans are non-recourse and can be more flexible than agency
              loans on property condition and borrower experience. However, they
              come with defeasance or yield maintenance prepayment provisions
              that make early payoff expensive. CMBS is a strong option for
              stabilized assets where the borrower wants to lock in long-term
              fixed-rate financing without the agency program requirements.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Bridge Loans
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Bridge loans are short-term floating-rate loans designed for
              transitional assets. They typically carry 2 to 3 year initial
              terms with one or two 12-month extension options. Interest rates
              are priced as a spread over SOFR, generally 250 to 450 basis
              points depending on deal quality and sponsorship.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bridge lenders focus on the business plan and exit strategy rather
              than current cash flow. They can lend on properties with higher
              vacancy, deferred maintenance, or below-market rents where agency
              and CMBS lenders cannot. Most bridge loans include interest
              reserves and renovation holdbacks funded at closing. The exit
              strategy is typically a refinance into permanent agency debt once
              the property is stabilized.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Bank Loans and Credit Unions
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Local and regional banks and credit unions remain an important
              source of multifamily financing, particularly for smaller deals
              and relationship borrowers. Bank loans offer flexibility on terms,
              faster closing timelines, and willingness to lend on properties
              that may not fit agency or CMBS guidelines.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              The typical bank loan carries a 5 to 7 year term with 25 to 30
              year amortization, fixed or adjustable rates, and personal
              recourse guarantees. Banks are often the best option for smaller
              deals under $2 million, mixed-use properties, or situations where
              speed and flexibility outweigh the benefits of non-recourse agency
              execution.
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 mb-4">
              Need help finding the right loan program for your deal?
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
      </div>
    </section>
  );
}
