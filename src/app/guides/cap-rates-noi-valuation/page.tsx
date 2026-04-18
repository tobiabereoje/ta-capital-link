import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CapRatesGuide() {
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
              8 min read
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded">
              Guide
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Cap Rates, NOI, and Valuation Fundamentals
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Master the core metrics that drive multifamily valuations. This
            guide breaks down how institutional investors evaluate properties
            and make investment decisions.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              The Income Approach to Value
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Unlike single-family homes that are valued primarily through
              comparable sales, commercial multifamily properties are valued
              based on the income they produce. This is called the income
              approach, and it relies on two inputs: Net Operating Income (NOI)
              and the capitalization rate (cap rate).
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              The formula is straightforward: Property Value equals NOI divided
              by Cap Rate. A property generating $500,000 in NOI in a 6% cap
              rate market is worth approximately $8.33 million. Understanding
              how each variable works, and what moves them, is essential to
              making sound investment decisions.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Net Operating Income (NOI)
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              NOI is the annual income a property generates after all operating
              expenses but before debt service, capital expenditures, and
              income taxes. It is calculated as Effective Gross Income minus
              Operating Expenses.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Effective Gross Income starts with Gross Potential Rent (all
              units at market rent), then subtracts vacancy and credit loss,
              and adds other income such as pet fees, parking, laundry, and
              utility reimbursements.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Operating Expenses include property taxes, insurance, utilities,
              repairs and maintenance, property management, payroll, and
              administrative costs. Items that are not included in NOI are debt
              service, depreciation, capital improvements, and income taxes.
              These exclusions make NOI a clean measure of the property&apos;s
              operating performance independent of how it is financed or owned.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Capitalization Rates Explained
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The cap rate represents the unlevered yield an investor expects
              from a property. It functions as a risk-adjusted discount rate
              that reflects the market&apos;s perception of the asset&apos;s
              quality, location, and growth potential.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Lower cap rates indicate higher property values and are
              associated with lower-risk assets in strong markets. A Class A
              property in a gateway city might trade at a 4.5% cap rate, while
              a Class C property in a tertiary market might trade at 7% or
              higher. The difference reflects the perceived risk in the income
              stream.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cap rates are influenced by macroeconomic factors like interest
              rates and credit availability, as well as local factors like
              supply and demand dynamics, rent growth expectations, and
              regulatory environment. When interest rates rise, cap rates
              generally expand (increasing) which pushes property values down,
              all else being equal.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Going-In vs. Exit Cap Rate
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The going-in cap rate is the yield at acquisition, calculated
              using the in-place or Year 1 NOI divided by the purchase price.
              This tells you what you are paying for the property relative to
              its current income.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              The exit cap rate is the assumed yield at the time you sell the
              property, used to estimate disposition value. Institutional
              underwriters typically apply a 10 to 20 basis point annual
              expansion to the going-in cap rate to build in conservatism. For
              example, if you buy at a 5.5% cap rate with a 5-year hold
              period, you might assume a 6.0% to 6.5% exit cap rate. This
              accounts for the fact that the property will be older at
              disposition and that market conditions could be less favorable.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Expense Ratio and Operating Efficiency
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The expense ratio (operating expenses divided by effective gross
              income) is a quick measure of how efficiently a property is
              managed. Typical multifamily expense ratios range from 35% to
              55%, depending on the property class, age, and market.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Newer Class A properties tend to have lower expense ratios due
              to reduced maintenance needs, while older Class B and C assets
              carry higher expenses. Properties with individually metered
              utilities will have lower expense ratios than those where the
              landlord pays utilities. Evaluating the expense ratio against
              market norms helps identify properties that may be over- or
              under-managed.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Putting It All Together
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Valuation is both an art and a science. The income approach gives
              you a defensible framework, but the assumptions behind NOI and
              cap rate selection require market knowledge and judgment.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              When analyzing a potential acquisition, always triangulate your
              valuation by comparing the income approach result against recent
              comparable sales (price per unit and price per square foot) and
              replacement cost. If your income-based valuation is significantly
              different from these benchmarks, revisit your assumptions. The
              strongest underwriting is one where multiple valuation approaches
              converge on a similar conclusion.
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 mb-4">
              Want to see these concepts applied to a real deal?
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
