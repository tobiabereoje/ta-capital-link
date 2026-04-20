import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Calculators | TA Capital Link",
  description:
    "Free multifamily real estate calculators for yield maintenance, DSCR, loan payments, and more.",
};

const calculators = [
  {
    title: "Yield Maintenance Calculator",
    description:
      "Estimate the cost of prepaying a fixed-rate multifamily loan before maturity. Covers agency, CMBS, and life company prepayment penalties.",
    href: "/calculators/yield-maintenance",
    icon: Calculator,
  },
  {
    title: "DSCR Calculator",
    description:
      "Calculate the Debt Service Coverage Ratio for any deal. See if your NOI supports the proposed loan amount at current rates.",
    href: "/calculators/dscr",
    icon: TrendingUp,
  },
  {
    title: "Loan Payment Calculator",
    description:
      "Calculate monthly payments, total interest, and balloon balances. Compare amortizing, interest-only, and partial IO structures.",
    href: "/calculators/loan-payment",
    icon: DollarSign,
  },
];

export default function CalculatorsPage() {
  return (
    <section className="px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="w-12 h-0.5 bg-gold-500 mb-8" />
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Calculators
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl">
          Free tools to help you analyze multifamily deals and financing
          scenarios.
        </p>

        <div className="grid gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60 group block"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <calc.icon size={22} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {calc.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {calc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
