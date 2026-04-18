import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ValueAddGuide() {
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
              15 min read
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded">
              Guide
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Navigating Your First Value-Add Deal
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Practical guidance for executing a value-add business plan on a
            multifamily acquisition, including renovation budgeting, rent growth
            projections, and exit strategies.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              What Makes a Deal &ldquo;Value-Add&rdquo;?
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              A value-add multifamily deal is one where the investor can
              increase the property&apos;s income and value through active
              management, physical improvements, or operational changes. Unlike
              core deals where you are buying a stabilized asset for steady
              cash flow, value-add investing requires a hands-on business plan
              to unlock the property&apos;s potential.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Common value-add opportunities include properties with
              below-market rents, deferred maintenance, poor management,
              outdated unit interiors, inefficient expense structures, or
              underutilized ancillary income sources. The key is identifying
              the specific actions that will drive NOI growth and then
              quantifying the cost and timeline to execute them.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Identifying the Right Property
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The best value-add candidates have a clear gap between current
              performance and market potential. Start by comparing in-place
              rents to comparable properties in the submarket. A property
              renting at $900 per unit when comparable renovated units achieve
              $1,150 suggests $250 per month in upside per unit. On a 50-unit
              building, that is $150,000 in additional annual revenue.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Look beyond just rents. Evaluate operating expenses per unit
              against market benchmarks. Properties with bloated payroll,
              above-market contract services, or no utility reimbursement
              program may have significant expense-side upside that does not
              require capital investment.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Physical condition matters too. Walk every unit and all common
              areas during due diligence. Focus on the condition of roofs,
              HVAC systems, plumbing, electrical, parking lots, and building
              envelopes. A deal that looks attractive on paper can quickly turn
              negative if major capital expenditures surface that were not
              accounted for in the underwriting.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Building a Renovation Budget
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Unit renovation budgets for typical value-add multifamily deals
              range from $5,000 to $20,000 per unit depending on the scope.
              Light renovations covering new flooring, paint, fixtures, and
              hardware might cost $5,000 to $8,000 per unit. Full kitchen and
              bathroom remodels with new cabinets, countertops, appliances,
              and tile push the budget to $12,000 to $20,000 per unit.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Always get contractor bids during due diligence, not after
              closing. Include a 10 to 15 percent contingency above your base
              renovation budget to account for unexpected conditions. Supply
              chain disruptions and labor shortages can significantly impact
              renovation timelines and costs if not properly planned for.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Common area improvements such as clubhouse upgrades, exterior
              paint, landscaping, signage, and amenity additions should be
              budgeted separately. These improvements create the first
              impression that justifies premium rents and improves overall
              property marketability.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Projecting Rent Growth
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Rent growth projections in a value-add deal come from two
              sources: renovation premiums and organic market growth. The
              renovation premium is the rent increase achieved on units that
              have been upgraded. This should be validated by comparable
              renovated units in the submarket, not by aspiration.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              A realistic renovation timeline is critical for accurate cash
              flow projections. Most value-add operators can renovate 3 to 5
              units per month depending on the scope of work and unit turnover
              schedule. On a 50-unit property with a full renovation program,
              expect 12 to 18 months to complete all units.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              For organic rent growth on unrenovated units, use trailing
              submarket data as your guide. If the submarket has delivered 3
              to 4 percent annual rent growth over the past 3 years, it is
              reasonable to project similar growth going forward. Avoid
              projecting accelerating growth rates unless you have strong data
              to support the assumption.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Financing Your Value-Add Deal
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Most value-add acquisitions are initially financed with
              short-term bridge loans. Bridge lenders specialize in
              transitional assets and underwrite to the stabilized value rather
              than the as-is condition. Typical bridge loan structures include
              a 2 to 3 year initial term with extension options, floating rates
              tied to SOFR, and renovation holdbacks that are released as work
              is completed.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Once the property is stabilized with renovated units leased at
              target rents and occupancy above 90 percent, you refinance into
              permanent agency debt (Fannie Mae or Freddie Mac) at a lower
              rate and longer term. This bridge-to-perm strategy allows you to
              execute the business plan while maintaining favorable leverage
              throughout the process.
            </p>
          </div>

          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-display font-bold text-white mb-4">
              Planning Your Exit
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Every value-add business plan needs a clear exit strategy before
              you close on the acquisition. The two primary exits are a sale
              of the stabilized asset or a long-term hold with permanent
              financing.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              If you plan to sell, model your disposition at a conservative
              exit cap rate applied to your projected stabilized NOI. Use
              recent comparable sales to validate that your projected per-unit
              sale price is realistic for the submarket. Account for
              disposition costs of 2 to 3 percent (broker fees, legal, and
              transfer taxes).
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              If you plan to hold long-term, model the permanent refinance
              proceeds and ensure you can return a meaningful portion of
              investor equity at the refinance while maintaining healthy debt
              service coverage on the new loan. The best value-add deals allow
              investors to recoup 60 to 80 percent of their initial equity at
              the refinance while retaining a cash-flowing asset with
              significant upside remaining.
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 mb-4">
              Have a value-add deal you&apos;re evaluating?
            </p>
            <Link
              href="/submit-deal"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400"
            >
              Submit Your Deal
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
