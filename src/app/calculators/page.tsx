import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Calculators | TA Capital Link",
  description:
    "Free multifamily real estate calculators for yield maintenance, debt service coverage, and more.",
};

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
          <Link
            href="/calculators/yield-maintenance"
            className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 transition-all duration-300 hover:border-gold-500/20 hover:bg-navy-900/60 group block"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                <Calculator size={22} className="text-gold-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Yield Maintenance Calculator
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Calculate the prepayment penalty on your agency or CMBS loan.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
