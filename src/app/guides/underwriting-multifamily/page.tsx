import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UnderwritingGuide() {
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
              12 min read
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded">
              Guide
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            How to Underwrite a Multifamily Deal
          </h1>
          <p className="text-gray-400 leading-relaxed">
            A step-by-step walkthrough of institutional underwriting methodology,
            covering revenue assumptions, expense analysis, capital reserves, and
            return calculations.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Why Underwriting Matters
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Underwriting is the foundation of every multifamily investment
              decision. It is the process of building a financial model that
              projects how a property will perform over your intended hold period.
              Institutional buyers, lenders, and equity partners all rely on the
              underwriting to determine whether a deal makes economic sense.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              A well-built underwriting model answers three fundamental questions:
              What is the property worth today? What will it be worth at
              disposition? And what returns can investors expect along the way?
              Getting these answers right requires disciplined assumptions rooted
              in market data, not optimism.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Step 1: Analyze the Rent Roll
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The rent roll is your starting point. It tells you exactly what the
              property is earning today on a unit-by-unit basis. For each unit,
              examine the current contract rent, the market rent for that unit
              type, the lease expiration date, and occupancy status.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Calculate the gross potential rent (GPR) by assuming every unit is
              leased at market rent. Then compare it to the in-place rent to
              identify the loss-to-lease, which represents the revenue upside
              available without any capital improvements.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Pay close attention to concessions, month-to-month tenants, and
              units rented significantly below market. These are indicators of
              either management inefficiency or deferred maintenance that may
              create opportunity or risk depending on your business plan.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Step 2: Build Revenue Projections
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your Year 1 revenue projection starts with the in-place rent roll
              and layers on assumptions for vacancy, concessions, bad debt, and
              other income. A stabilized multifamily property in a strong market
              might run at 5 to 7 percent economic vacancy. Value-add deals with
              active renovation programs may see higher vacancy during
              transition.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Other income includes items like pet fees, parking, laundry,
              storage, utility reimbursements (RUBS), and late fees. These
              revenue streams can add $50 to $150 per unit per month and are
              often undermanaged at acquisition, making them a reliable source of
              upside in a value-add business plan.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Step 3: Underwrite Operating Expenses
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Request the trailing 12-month (T12) operating statement from the
              seller and compare each line item against market benchmarks. The
              major expense categories include property taxes, insurance,
              utilities, repairs and maintenance, property management fees,
              payroll, administrative costs, and contract services.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Institutional underwriters typically express expenses on a per-unit
              basis to facilitate comparison across properties. For example, if
              total operating expenses are $600,000 on a 100-unit building, the
              per-unit expense is $6,000 per year.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Be cautious of seller-managed properties where management fees or
              payroll may be understated. Always underwrite third-party
              management at the market rate, typically 4 to 6 percent of
              effective gross income, regardless of the seller&apos;s current
              arrangement.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Step 4: Calculate Net Operating Income
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Net Operating Income (NOI) is the single most important number in
              multifamily underwriting. It equals Effective Gross Income minus
              Total Operating Expenses. NOI drives the property valuation, loan
              sizing, and return calculations.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Always calculate NOI for multiple scenarios: in-place (current
              operations), stabilized (after executing your business plan), and
              pro forma (projected for each year of the hold period). Lenders
              will focus on in-place or Year 1 NOI for debt sizing, while equity
              investors care most about the stabilized and exit NOI.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Step 5: Size the Debt and Model Returns
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              With NOI established, you can determine how much debt the property
              supports. Lenders size loans using two constraints: Loan-to-Value
              (LTV), typically 65 to 80 percent, and Debt Service Coverage Ratio
              (DSCR), typically 1.20x to 1.35x. The binding constraint
              determines maximum loan proceeds.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              From there, calculate the equity required (purchase price plus
              closing costs plus renovation budget minus loan proceeds) and model
              the annual cash flows after debt service. Key return metrics
              include Cash-on-Cash Return (annual cash flow divided by equity
              invested), Internal Rate of Return (IRR), and Equity Multiple
              (total distributions divided by total equity).
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              A well-underwritten value-add multifamily deal typically targets a
              leveraged IRR in the mid-teens, a 1.7x to 2.2x equity multiple
              over a 3 to 5 year hold, and Year 1 cash-on-cash returns of 4 to 7
              percent with growth into the double digits by stabilization.
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 mb-4">
              Ready to put this into practice?
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400"
            >
              Download Our Underwriting Model
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
