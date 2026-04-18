"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  DollarSign,
  Percent,
  Calendar,
  Info,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCurrencyDetailed(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function parseCurrencyInput(value: string): string {
  return value.replace(/[^0-9.]/g, "");
}

function formatNumberInput(value: string): string {
  const num = parseFloat(value);
  if (isNaN(num)) return "";
  return new Intl.NumberFormat("en-US").format(num);
}

function monthsBetween(start: Date, end: Date): number {
  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  );
}

function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  totalMonths: number
): number {
  const monthlyRate = annualRate / 12;
  if (monthlyRate === 0) return principal / totalMonths;
  return (
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
}

function calculateRemainingBalance(
  principal: number,
  annualRate: number,
  totalMonths: number,
  paymentsMade: number
): number {
  const monthlyRate = annualRate / 12;
  if (monthlyRate === 0) return principal - (principal / totalMonths) * paymentsMade;
  return (
    principal *
    ((Math.pow(1 + monthlyRate, totalMonths) -
      Math.pow(1 + monthlyRate, paymentsMade)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1))
  );
}
export default function YieldMaintenanceCalculator() {
  const [loanAmount, setLoanAmount] = useState("10000000");
  const [displayLoanAmount, setDisplayLoanAmount] = useState("10,000,000");
  const [interestRate, setInterestRate] = useState("5.50");
  const [amortizationMonths, setAmortizationMonths] = useState("360");
  const [dayCount, setDayCount] = useState<"actual360" | "30360">("actual360");
  const [loanStartDate, setLoanStartDate] = useState("2022-01-01");
  const [maturityDate, setMaturityDate] = useState("2032-01-01");
  const [prepaymentDate, setPrepaymentDate] = useState("2026-06-01");
  const [treasuryRate, setTreasuryRate] = useState("4.25");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = parseCurrencyInput(e.target.value);
    setLoanAmount(raw);
    setDisplayLoanAmount(formatNumberInput(raw));
  };

  const results = useMemo(() => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100;
    const amortMonths = parseInt(amortizationMonths) || 360;
    const treasury = (parseFloat(treasuryRate) || 0) / 100;

    if (principal === 0 || rate === 0) {
      return null;
    }

    const startDate = new Date(loanStartDate);
    const matDate = new Date(maturityDate);
    const prepDate = new Date(prepaymentDate);

    const paymentsMade = monthsBetween(startDate, prepDate);
    const remainingMonths = monthsBetween(prepDate, matDate);

    if (paymentsMade < 0 || remainingMonths <= 0) {
      return null;
    }

    const monthlyPayment = calculateMonthlyPayment(principal, rate, amortMonths);
    const outstandingBalance = calculateRemainingBalance(
      principal,
      rate,
      amortMonths,
      paymentsMade
    );

    const balanceAtMaturity = calculateRemainingBalance(
      principal,
      rate,
      amortMonths,
      paymentsMade + remainingMonths
    );

    let prepaymentPremium = 0;
    const rateDiff = rate - treasury;

    if (rateDiff > 0) {
      const monthlyTreasury = treasury / 12;
      let pvDifference = 0;

      for (let i = 1; i <= remainingMonths; i++) {
        const scheduledInterest =
          calculateRemainingBalance(principal, rate, amortMonths, paymentsMade + i - 1) *
          (rate / 12);
        const treasuryInterest =
          calculateRemainingBalance(principal, rate, amortMonths, paymentsMade + i - 1) *
          (treasury / 12);
        const diff = scheduledInterest - treasuryInterest;
        pvDifference += diff / Math.pow(1 + monthlyTreasury, i);
      }
      prepaymentPremium = Math.max(pvDifference, 0);
    }

    const currentPeriodInterest =
      outstandingBalance * (dayCount === "actual360" ? rate / 360 * 30 : rate / 12);

    const totalCost = outstandingBalance + prepaymentPremium + currentPeriodInterest;

    return {
      outstandingBalance,
      prepaymentPremium,
      currentPeriodInterest,
      totalCost,
      monthlyPayment,
      remainingMonths,
      balanceAtMaturity,
      rateDiff: rateDiff * 100,
    };
  }, [
    loanAmount,
    interestRate,
    amortizationMonths,
    dayCount,
    loanStartDate,
    maturityDate,
    prepaymentDate,
    treasuryRate,
  ]);

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <div className="w-12 h-0.5 bg-gold-500 mb-6" />
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-2">
            Calculators
          </h2>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Yield Maintenance Calculator
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            Estimate the cost of prepaying a fixed-rate multifamily loan before
            maturity. Yield maintenance penalties compensate the lender for lost
            interest income when a borrower pays off a loan early.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* ===== INPUT PANEL ===== */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
              <h2 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
                <Calculator size={16} className="text-gold-500" />
                Loan Details
              </h2>

              <div className="space-y-5">
                {/* Original Loan Amount */}
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                    Original Loan Amount *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      <DollarSign size={14} />
                    </div>
                    <input
                      type="text"
                      value={displayLoanAmount}
                      onChange={handleLoanAmountChange}
                      className="w-full pl-10 pr-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                    />
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                    Interest Rate *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="w-full px-4 py-3 pr-10 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                      <Percent size={14} />
                    </div>
                  </div>
                </div>

                {/* Day Count Convention */}
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                    Day Count Convention
                  </label>
                  <select
                    value={dayCount}
                    onChange={(e) =>
                      setDayCount(e.target.value as "actual360" | "30360")
                    }
                    className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 appearance-none"
                  >
                    <option value="actual360">Actual / 360</option>
                    <option value="30360">30 / 360</option>
                  </select>
                </div>

                {/* Amortization */}
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                    Amortization (Months) *
                  </label>
                  <input
                    type="number"
                    value={amortizationMonths}
                    onChange={(e) => setAmortizationMonths(e.target.value)}
                    className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                  />
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
              <h2 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
                <Calendar size={16} className="text-gold-500" />
                Key Dates
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                    Loan Start Date *
                  </label>
                  <input
                    type="date"
                    value={loanStartDate}
                    onChange={(e) => setLoanStartDate(e.target.value)}
                    className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                    Maturity Date *
                  </label>
                  <input
                    type="date"
                    value={maturityDate}
                    onChange={(e) => setMaturityDate(e.target.value)}
                    className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                    Prepayment Date *
                  </label>
                  <input
                    type="date"
                    value={prepaymentDate}
                    onChange={(e) => setPrepaymentDate(e.target.value)}
                    className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                  />
                </div>
              </div>
            </div>

            {/* Advanced Options */}
            <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg overflow-hidden">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full flex items-center justify-between p-6 md:px-8 text-sm font-semibold text-gray-400 hover:text-gray-300 transition-colors"
              >
                <span>Advanced Options</span>
                {showAdvanced ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
              {showAdvanced && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                      Comparable Treasury Rate
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={treasuryRate}
                        onChange={(e) => setTreasuryRate(e.target.value)}
                        className="w-full px-4 py-3 pr-10 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                        <Percent size={14} />
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                      The Treasury yield matching the remaining loan term.
                      Used to calculate the present value of lost interest.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ===== RESULTS PANEL ===== */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Result */}
            <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-sm font-semibold tracking-wider uppercase text-gold-500 mb-3">
                  Yield Maintenance Total Cost Estimate
                </h2>
                <div className="text-4xl md:text-5xl font-display font-bold text-white">
                  {results ? formatCurrency(results.totalCost) : "—"}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 rounded bg-navy-900/60 border border-navy-800/40">
                  <div className="text-lg md:text-xl font-display font-bold text-white mb-1">
                    {results
                      ? formatCurrency(results.currentPeriodInterest)
                      : "—"}
                  </div>
                  <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                    Accrued Interest
                  </div>
                </div>
                <div className="text-center p-4 rounded bg-navy-900/60 border border-navy-800/40">
                  <div className="text-lg md:text-xl font-display font-bold text-white mb-1">
                    {results
                      ? formatCurrency(results.outstandingBalance)
                      : "—"}
                  </div>
                  <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                    Principal Balance
                  </div>
                </div>
                <div className="text-center p-4 rounded bg-navy-900/60 border border-navy-800/40">
                  <div className="text-lg md:text-xl font-display font-bold text-gold-400 mb-1">
                    {results
                      ? formatCurrency(results.prepaymentPremium)
                      : "—"}
                  </div>
                  <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                    Prepayment Premium
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 p-4 rounded bg-navy-950/60 border border-navy-800/30">
                <Info
                  size={14}
                  className="text-gold-500 mt-0.5 shrink-0"
                />
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  This is an estimate only, based on standard yield maintenance
                  methodology. Actual costs may vary depending on your specific
                  loan documents, lender calculations, and applicable Treasury
                  rates. Contact our team for a precise calculation.
                </p>
              </div>
            </div>

            {/* Breakdown Table */}
            {results && (
              <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
                <h3 className="text-sm font-semibold text-white mb-5">
                  Calculation Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                    <span className="text-sm text-gray-400">
                      Original Loan Amount
                    </span>
                    <span className="text-sm font-medium text-white">
                      {formatCurrencyDetailed(parseFloat(loanAmount))}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                    <span className="text-sm text-gray-400">Note Rate</span>
                    <span className="text-sm font-medium text-white">
                      {interestRate}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                    <span className="text-sm text-gray-400">
                      Treasury Rate
                    </span>
                    <span className="text-sm font-medium text-white">
                      {treasuryRate}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                    <span className="text-sm text-gray-400">Rate Spread</span>
                    <span className="text-sm font-medium text-gold-400">
                      {results.rateDiff.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                    <span className="text-sm text-gray-400">
                      Monthly Payment
                    </span>
                    <span className="text-sm font-medium text-white">
                      {formatCurrencyDetailed(results.monthlyPayment)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                    <span className="text-sm text-gray-400">
                      Outstanding Balance at Prepayment
                    </span>
                    <span className="text-sm font-medium text-white">
                      {formatCurrencyDetailed(results.outstandingBalance)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                    <span className="text-sm text-gray-400">
                      Remaining Months to Maturity
                    </span>
                    <span className="text-sm font-medium text-white">
                      {results.remainingMonths}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                    <span className="text-sm text-gray-400">
                      Accrued Interest
                    </span>
                    <span className="text-sm font-medium text-white">
                      {formatCurrencyDetailed(results.currentPeriodInterest)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                    <span className="text-sm text-gray-400">
                      Prepayment Premium
                    </span>
                    <span className="text-sm font-medium text-gold-400">
                      {formatCurrencyDetailed(results.prepaymentPremium)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 bg-navy-900/60 rounded px-3 -mx-3">
                    <span className="text-sm font-semibold text-white">
                      Total Estimated Cost
                    </span>
                    <span className="text-sm font-bold text-gold-400">
                      {formatCurrencyDetailed(results.totalCost)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Educational Content */}
            <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
              <h3 className="text-sm font-semibold text-white mb-4">
                What is Yield Maintenance?
              </h3>
              <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
                <p>
                  Yield maintenance is a prepayment penalty designed to make
                  lenders whole when a borrower pays off a fixed-rate loan before
                  its maturity date. It ensures the lender receives the same yield
                  they would have earned had the loan remained outstanding.
                </p>
                <p>
                  The penalty is calculated as the present value of the difference
                  between the note rate and the current Treasury rate for the
                  remaining loan term, applied to the scheduled principal payments.
                  When interest rates fall, the penalty increases because the
                  lender loses more relative yield.
                </p>
                <p>
                  Yield maintenance is common in Fannie Mae, Freddie Mac, CMBS,
                  and life company multifamily loans. Understanding this cost is
                  critical when evaluating refinance opportunities or planning
                  early disposition of an asset.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-gold-500/10 to-transparent border border-gold-500/20 rounded-lg p-6 md:p-8">
              <h3 className="text-base font-semibold text-white mb-2">
                Need a Precise Calculation?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Yield maintenance calculations can vary by lender and loan
                document. Book a consultation with our team for an exact
                prepayment analysis based on your specific loan terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-call"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-navy-950 font-semibold text-xs tracking-wider uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
                >
                  Book a Consultation
                  <ArrowRight size={14} className="ml-2" />
                </Link>
                <Link
                  href="/submit-deal"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gold-500/40 text-gold-400 font-semibold text-xs tracking-wider uppercase rounded transition-all duration-300 hover:border-gold-500 hover:text-gold-300 hover:bg-gold-500/5"
                >
                  Submit Your Deal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
