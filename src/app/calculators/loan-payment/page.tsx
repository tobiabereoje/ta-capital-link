"use client";

import { useState, useMemo } from "react";
import {
  Calculator,
  DollarSign,
  Percent,
  Info,
  FileDown,
  Calendar,
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

export default function LoanPaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState("10000000");
  const [displayLoanAmount, setDisplayLoanAmount] = useState("10,000,000");
  const [interestRate, setInterestRate] = useState("6.50");
  const [amortizationYears, setAmortizationYears] = useState("30");
  const [loanTermYears, setLoanTermYears] = useState("10");
  const [loanType, setLoanType] = useState<"amortizing" | "interestOnly" | "partial">("amortizing");
  const [ioPeriodMonths, setIoPeriodMonths] = useState("24");

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = parseCurrencyInput(e.target.value);
    setLoanAmount(raw);
    setDisplayLoanAmount(formatNumberInput(raw));
  };

  const results = useMemo(() => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100;
    const amortMonths = (parseInt(amortizationYears) || 30) * 12;
    const termMonths = (parseInt(loanTermYears) || 10) * 12;
    const ioPeriod = parseInt(ioPeriodMonths) || 24;

    if (principal === 0 || rate === 0) return null;

    const monthlyRate = rate / 12;

    // Fully amortizing payment
    const amortizingPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, amortMonths))) /
      (Math.pow(1 + monthlyRate, amortMonths) - 1);

    // Interest only payment
    const ioPayment = principal * monthlyRate;

    let monthlyPayment: number;
    if (loanType === "interestOnly") {
      monthlyPayment = ioPayment;
    } else {
      monthlyPayment = amortizingPayment;
    }

    const annualDebtService = monthlyPayment * 12;

    // Total interest over loan term
    let totalInterest = 0;
    let totalPrincipalPaid = 0;
    let balance = principal;

    // Build amortization schedule
    const schedule: Array<{
      month: number;
      payment: number;
      principal: number;
      interest: number;
      balance: number;
      isIO: boolean;
    }> = [];

    for (let m = 1; m <= termMonths; m++) {
      const interestPayment = balance * monthlyRate;
      let principalPayment: number;
      let payment: number;
      let isIO = false;

      if (loanType === "interestOnly") {
        payment = ioPayment;
        principalPayment = 0;
        isIO = true;
      } else if (loanType === "partial" && m <= ioPeriod) {
        payment = ioPayment;
        principalPayment = 0;
        isIO = true;
      } else {
        // For partial IO, recalculate amortizing payment based on remaining balance
        if (loanType === "partial" && m === ioPeriod + 1) {
          const remainingAmortMonths = amortMonths - ioPeriod;
          payment =
            (balance * (monthlyRate * Math.pow(1 + monthlyRate, remainingAmortMonths))) /
            (Math.pow(1 + monthlyRate, remainingAmortMonths) - 1);
        } else if (loanType === "partial") {
          const remainingAmortMonths = amortMonths - ioPeriod;
          payment =
            (principal * (monthlyRate * Math.pow(1 + monthlyRate, remainingAmortMonths))) /
            (Math.pow(1 + monthlyRate, remainingAmortMonths) - 1);
        } else {
          payment = amortizingPayment;
        }
        principalPayment = payment - interestPayment;
      }

      totalInterest += interestPayment;
      totalPrincipalPaid += principalPayment;
      balance -= principalPayment;

      // Store yearly summaries (every 12th month)
      if (m % 12 === 0 || m === termMonths) {
        schedule.push({
          month: m,
          payment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(balance, 0),
          isIO,
        });
      }
    }

    const balloonBalance = Math.max(balance, 0);
    const totalPayments = monthlyPayment * termMonths;

    return {
      monthlyPayment,
      ioPayment,
      amortizingPayment,
      annualDebtService,
      totalInterest,
      totalPrincipalPaid,
      balloonBalance,
      totalPayments,
      schedule,
      termMonths,
    };
  }, [loanAmount, interestRate, amortizationYears, loanTermYears, loanType, ioPeriodMonths]);

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
              Loan Payment Calculator
            </h1>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Calculate monthly payments, total interest, and balloon balances for multifamily
              loans. Compare amortizing, interest-only, and partial IO structures side by side.
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
                      Amortization (Years)
                    </label>
                    <input
                      type="number"
                      value={amortizationYears}
                      onChange={(e) => setAmortizationYears(e.target.value)}
                      className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
                <h2 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
                  <Calendar size={16} className="text-gold-500" />
                  Loan Structure
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                      Loan Term (Years)
                    </label>
                    <input
                      type="number"
                      value={loanTermYears}
                      onChange={(e) => setLoanTermYears(e.target.value)}
                      className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                      Payment Structure
                    </label>
                    <select
                      value={loanType}
                      onChange={(e) =>
                        setLoanType(e.target.value as "amortizing" | "interestOnly" | "partial")
                      }
                      className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 appearance-none"
                    >
                      <option value="amortizing">Fully Amortizing</option>
                      <option value="interestOnly">Interest Only (Full Term)</option>
                      <option value="partial">Partial Interest Only</option>
                    </select>
                  </div>

                  {loanType === "partial" && (
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                        IO Period (Months)
                      </label>
                      <input
                        type="number"
                        value={ioPeriodMonths}
                        onChange={(e) => setIoPeriodMonths(e.target.value)}
                        className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ===== RESULTS PANEL ===== */}
            <div className="lg:col-span-3 space-y-6">
              {/* Main Result */}
              <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-sm font-semibold tracking-wider uppercase text-gold-500 mb-3">
                    Monthly Payment
                  </h2>
                  <div className="text-4xl md:text-5xl font-display font-bold text-white">
                    {results ? formatCurrencyDetailed(results.monthlyPayment) : "\u2014"}
                  </div>
                  {results && loanType === "partial" && (
                    <p className="text-xs text-gray-500 mt-2">
                      IO period: {formatCurrencyDetailed(results.ioPayment)}/mo &rarr; Amortizing: {formatCurrencyDetailed(results.amortizingPayment)}/mo
                    </p>
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
                    <div className="text-lg font-display font-bold text-gold-400 mb-1">
                      {results ? formatCurrency(results.totalInterest) : "\u2014"}
                    </div>
                    <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                      Total Interest
                    </div>
                  </div>
                  <div className="text-center p-4 rounded bg-navy-900/60 border border-navy-800/40">
                    <div className="text-lg font-display font-bold text-white mb-1">
                      {results ? formatCurrency(results.totalPrincipalPaid) : "\u2014"}
                    </div>
                    <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                      Principal Paid
                    </div>
                  </div>
                  <div className="text-center p-4 rounded bg-navy-900/60 border border-navy-800/40">
                    <div className="text-lg font-display font-bold text-white mb-1">
                      {results ? formatCurrency(results.balloonBalance) : "\u2014"}
                    </div>
                    <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                      Balloon at Maturity
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-4 rounded bg-navy-950/60 border border-navy-800/30">
                  <Info size={14} className="text-gold-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    This calculator provides estimates based on standard amortization formulas.
                    Actual payments may vary based on day count conventions, payment timing, and
                    lender-specific terms. Contact our team for precise loan structuring.
                  </p>
                </div>
              </div>

              {/* Amortization Summary Table */}
              {results && results.schedule.length > 0 && (
                <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
                  <h3 className="text-sm font-semibold text-white mb-5">
                    Amortization Summary
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-navy-800/30">
                          <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider py-3 pr-4">
                            Year
                          </th>
                          <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">
                            Payment
                          </th>
                          <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">
                            Interest
                          </th>
                          <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">
                            Principal
                          </th>
                          <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider py-3 pl-4">
                            Balance
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.schedule.map((row) => (
                          <tr
                            key={row.month}
                            className="border-b border-navy-800/20 hover:bg-navy-900/40 transition-colors"
                          >
                            <td className="py-2.5 pr-4 text-gray-300">
                              {Math.ceil(row.month / 12)}
                              {row.isIO && (
                                <span className="ml-2 text-[10px] text-gold-500 font-semibold uppercase">
                                  IO
                                </span>
                              )}
                            </td>
                            <td className="py-2.5 px-4 text-right text-gray-300">
                              {formatCurrencyDetailed(row.payment)}
                            </td>
                            <td className="py-2.5 px-4 text-right text-gray-400">
                              {formatCurrencyDetailed(row.interest)}
                            </td>
                            <td className="py-2.5 px-4 text-right text-gray-400">
                              {formatCurrencyDetailed(row.principal)}
                            </td>
                            <td className="py-2.5 pl-4 text-right text-white font-medium">
                              {formatCurrency(row.balance)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Breakdown */}
              {results && (
                <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
                  <h3 className="text-sm font-semibold text-white mb-5">
                    Calculation Details
                  </h3>
                  <div className="space-y-3">
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
                      <span className="text-sm text-gray-400">Amortization</span>
                      <span className="text-sm font-medium text-white">{amortizationYears} years</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                      <span className="text-sm text-gray-400">Loan Term</span>
                      <span className="text-sm font-medium text-white">{loanTermYears} years</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                      <span className="text-sm text-gray-400">Structure</span>
                      <span className="text-sm font-medium text-white">
                        {loanType === "amortizing"
                          ? "Fully Amortizing"
                          : loanType === "interestOnly"
                          ? "Interest Only"
                          : `${ioPeriodMonths}mo IO then Amortizing`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-navy-800/30">
                      <span className="text-sm text-gray-400">Total Payments Over Term</span>
                      <span className="text-sm font-medium text-white">
                        {formatCurrencyDetailed(results.totalPayments)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 bg-navy-900/60 rounded px-3 -mx-3">
                      <span className="text-sm font-semibold text-white">Monthly Payment</span>
                      <span className="text-sm font-bold text-gold-400">
                        {formatCurrencyDetailed(results.monthlyPayment)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Educational Content */}
              <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6 md:p-8">
                <h3 className="text-sm font-semibold text-white mb-4">
                  Understanding Loan Payment Structures
                </h3>
                <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
                  <p>
                    Multifamily loans typically feature a shorter loan term than the amortization
                    period. For example, a 10-year term with 30-year amortization means the loan
                    matures after 10 years with a remaining balloon balance that must be refinanced
                    or paid off.
                  </p>
                  <p>
                    Interest-only periods are common in bridge and value-add loans, reducing initial
                    payments while the sponsor executes their business plan. After the IO period,
                    payments step up to include both principal and interest based on the remaining
                    amortization schedule.
                  </p>
                  <p>
                    When comparing financing options, consider not just the monthly payment but also
                    the total interest cost over the hold period and the balloon balance at maturity.
                    Lower payments during an IO period come at the cost of higher remaining principal.
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
