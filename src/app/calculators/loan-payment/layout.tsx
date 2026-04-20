import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loan Payment Calculator for Multifamily & Commercial Loans",
  description:
    "Calculate monthly payments, amortization schedules, and balloon balances for multifamily and commercial real estate loans. Supports IO, partial IO, and fully amortizing structures.",
  keywords: [
    "loan payment calculator",
    "commercial mortgage calculator",
    "multifamily loan calculator",
    "amortization calculator",
    "interest only loan calculator",
    "balloon payment calculator",
    "debt service calculator",
    "CRE loan payment",
    "apartment loan calculator",
  ],
  openGraph: {
    title: "Free Loan Payment Calculator | TA Capital Link",
    description:
      "Calculate monthly payments and amortization for multifamily loans. Supports IO, partial IO, and fully amortizing structures.",
    url: "https://tacapitalink.com/calculators/loan-payment",
    type: "website",
  },
  alternates: {
    canonical: "https://tacapitalink.com/calculators/loan-payment",
  },
};

export default function LoanPaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
