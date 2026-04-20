"use client";

import { useState, useMemo } from "react";
import {
  Calculator,
  DollarSign,
  Percent,
  Info,
  FileDown,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
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

export default function DSCRCalculator() {
  const [noi, setNoi] = useState("750000");
  const [displayNoi, setDisplayNoi] = useState("750,000");
  const [loanAmount, setLoanAmount] = useState("10000000");
  const [displayLoanAmount, setDisplayLoanAmount] = useState("10,000,000");
  const [interestRate, setInterestRate] = useState("6.50");
  const [amortizationMonths, setAmortizationMonths] = useState("360");
  const [loanType, setLoanType] = useState<"amortizing" | "interestOnly">("amortizing");

  const handleNoiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = parseCurrencyInput(e.target.value);
    setNoi(raw);
    setDisplayNoi(formatNumberInput(raw));
  };

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = parseCurrencyInput(e.target.value);
    setLoanAmount(raw);
    setDisplayLoanAmount(formatNumberInput(raw));
  };

  const results = useMemo(() => {
    const netOI = parseFloat(noi) || 0;
    const principal = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100;
    const amortMonths = parseInt(amortizationMonths) || 360;

    if (netOI === 0 || principal === 0 || rate === 0) return null;

    let annualDebtService: number;
    if (loanType === "interestOnly") {
      annualDebtService = principal * rate;
    } else {
      const monthlyPayment = calculateMonthlyPayment(principal, rate, amortMonths);
      annualDebtService = monthlyPayment * 12;
    }

    const dscr = netOI / annualDebtService;
    const debtYield = (netOI / principal) * 100;
    const ltv = principal / (netOI / 0.05) * 100; // rough cap rate assumption
    const monthlyDebtService = annualDebtService / 12;

    // Max loan at 1.25x DSCR
    const maxLoanAt125 = loanType === "interestOnly"
      ? netOI / (1.25 * rate)
      : (() => {
          const monthlyRate = rate / 12;
          const maxMonthlyPayment = netOI / (1.25 * 12);
          return (maxMonthlyPayment * (Math.pow(1 + monthlyRate, amortMonths) - 1)) /
            (monthlyRate * Math.pow(1 + monthlyRate, amortMonths));
        })();

    // Breakeven occupancy (assume NOI is at ~60% margin)
    const grossRevenue = netOI / 0.6;
    const expenses = grossRevenue - netOI;
    const breakevenOccupancy = ((expenses + annualDebtService) / grossRevenue) * 100;

    return {
      dscr,
      annualDebtService,
      monthlyDebtService,
      debtYield,
      maxLoanAt125,
      breakevenOccupancy: Math.min(breakevenOccupancy, 100),
    };
  }, [noi, loanAmount, interestRate, amortizationMonths, loanType]);

  const getDscrStatus = (dscr: number) => {
    if (dscr >= 1.25)
      return { label: "Strong", color: "text-green-400", bg: "bg-green-400/10", icon: CheckCircle2 };
    if (dscr >= 1.0)
      return { label: "Marginal", color: "text-yellow-400", bg: "bg-yellow-400/10", icon: AlertTriangle };
    return { label: "Below Threshold", color: "text-red-400", bg: "bg-red-400/10", icon: AlertTriangle };
  };

  return (
    <>
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <div className="w-12 h-0.5 bg-gold-500 mb-6" />
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-2">
              Calculators
            </h2>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              DSCR Calculator
            </h1>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Calculate the Debt Service Coverage Ratio for any multifamily deal. DSCR measures
              whether a property generates enough income to cover its debt obligations and is the
              primary metric lenders use to size loans.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* ===== INPUT PANEL ===== */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
                <h2 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
                  <TrendingUp size={16} className="text-gold-500" />
                  Property Income
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                      Net Operating Income (Annual) *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        <DollarSign size={14} />
                      </div>
                      <input
                        type="text"
                        value={displayNoi}
                        onChange={handleNoiChange}
                        className="w-full pl-10 pr-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
                <h2 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
                  <Calculator size={16} className="text-gold-500" />
                  Loan Details
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                      Loan Amount *
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

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                      Loan Type
                    </label>
                    <select
                      value={loanType}
                      onChange={(e) =>
                        setLoanType(e.target.value as "amortizing" | "interestOnly")
                      }
                      className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 appearance-none"
                    >
                      <option value="amortizing">Fully Amortizing</option>
                      <option value="interestOnly">Interest Only</option>
                    </select>
                  </div>

                  {loanType === "amortizing" && (
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                        Amortization (Months)
                      </label>
                      <input
                        type="number"
                        value={amortizationMonths}
                        onChange={(e) => setAmortizationMonths(e.target.value)}
                        className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ===== RESULTS PANEL ===== */}
            <div className="lg:col-span-3 space-y-6">
              {/* Main DSCR Result */}
              <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-sm font-semibold tracking-wider uppercase text-gold-500 mb-3">
                    Debt Service Coverage Ratio
                  </h2>
                  <div className="text-5xl md:text-6xl font-display font-bold text-white mb-3">
                    {results ? results.dscr.toFixed(2) + "x" : "\u2014"}
                  </div>
                  {results && (
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                        getDscrStatus(results.dscr).bg
                      } ${getDscrStatus(results.dscr).color}`}
                    >
                      {(() => {
                        const StatusIcon = getDscrStatus(results.dscr).icon;
                        return <StatusIcon size={12} />;
                      })()}
                      {getDscrStatus(results.dscr).label}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 rounded bg-navy-900/60 border border-navy-800/40">
                    <div className="text-lg font-display font-bold text-white mb-1">
                      {results ? formatCurrency(results.annualDebtService) : "\u2014"}
                    </div>
                    <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                      Annual Debt Service
                    </div>
                  </div>
                  <div className="text-center p-4 rounded bg-navy-900/60 border border-navy-800/40">
                    <div className="text-lg font-display font-bold text-white mb-1">
                      {results ? formatCurrency(results.monthlyDebtService) : "\u2014"}
                    </div>
                    <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                      Monthly Payment
                    </div>
                  </div>
                  <div className="text-center p-4 rounded bg-navy-900/60 border border-navy-800/40">
                    <div className="text-lg font-display font-bold text-gold-400 mb-1">
                      {results ? results.debtYield.toFixed(2) + "%" : "\u2014"}
                    </div>
                    <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                      Debt Yield
                    </div>
                  </div>
                  <div className="text-center p-4 rounded bg-navy-900/60 border border-navy-800/40">
                    <div className="text-lg font-display font-bold text-white mb-1">
                      {results ? formatCurrency(results.maxLoanAt125) : "\u2014"}
                    </div>
                    <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                      Max Loan @ 1.25x
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-4 rounded bg-navy-950/60 border border-navy-800/30">
                  <Info size={14} className="text-gold-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Most agency lenders (Fannie Mae, Freddie Mac) require a minimum DSCR of 1.20x
                    to 1.25x. CMBS and bridge lenders may accept lower ratios depending on the
                    business plan and sponsor strength.
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
                      <span className="text-sm text-gray-400">Net Operating Income</span>
                      <span className="text-sm font-medium text-white">
                        {formatCurrencyDetailed(parseFloat(noi))}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                      <span className="text-sm text-gray-400">Loan Amount</span>
                      <span className="text-sm font-medium text-white">
                        {formatCurrencyDetailed(parseFloat(loanAmount))}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                      <span className="text-sm text-gray-400">Interest Rate</span>
                      <span className="text-sm font-medium text-white">{interestRate}%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                      <span className="text-sm text-gray-400">Loan Type</span>
                      <span className="text-sm font-medium text-white">
                        {loanType === "interestOnly" ? "Interest Only" : `Amortizing (${amortizationMonths} mo)`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                      <span className="text-sm text-gray-400">Annual Debt Service</span>
                      <span className="text-sm font-medium text-white">
                        {formatCurrencyDetailed(results.annualDebtService)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                      <span className="text-sm text-gray-400">Debt Yield</span>
                      <span className="text-sm font-medium text-gold-400">
                        {results.debtYield.toFixed(2)}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                      <span className="text-sm text-gray-400">Breakeven Occupancy (est.)</span>
                      <span className="text-sm font-medium text-white">
                        {results.breakevenOccupancy.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 bg-navy-900/60 rounded px-3 -mx-3">
                      <span className="text-sm font-semibold text-white">DSCR</span>
                      <span className={`text-sm font-bold ${getDscrStatus(results.dscr).color}`}>
                        {results.dscr.toFixed(2)}x
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Educational Content */}
              <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
                <h3 className="text-sm font-semibold text-white mb-4">
                  What is DSCR?
                </h3>
                <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
                  <p>
                    Debt Service Coverage Ratio (DSCR) is the most important metric in commercial
                    real estate lending. It measures a property&apos;s ability to generate enough
                    income to cover its mortgage payments, calculated by dividing the Net Operating
                    Income by the total annual debt service.
                  </p>
                  <p>
                    A DSCR of 1.00x means the property generates exactly enough income to cover
                    debt payments with zero margin. Most lenders require at least 1.20x to 1.25x,
                    providing a cushion against vacancy, expense increases, or revenue declines.
                  </p>
                  <p>
                    DSCR is used alongside Debt Yield and Loan-to-Value (LTV) to determine maximum
                    loan proceeds. The most constraining of these three metrics typically governs
                    the final loan amount.
                  </p>
                </div>
              </div>

              {/* Print Button */}
              {results && (
                <div className="flex justify-end print:hidden">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-navy-950 font-semibold text-xs tracking-wider uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
                  >
                    <FileDown size={14} className="mr-2" />
                    Save as PDF
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
