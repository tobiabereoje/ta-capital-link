import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free DSCR Calculator for Multifamily Loans",
  description:
    "Calculate Debt Service Coverage Ratio (DSCR) for multifamily and commercial real estate loans. Instantly see if your property meets lender requirements with our free DSCR calculator.",
  keywords: [
    "DSCR calculator",
    "debt service coverage ratio",
    "multifamily DSCR",
    "commercial real estate DSCR",
    "loan qualification calculator",
    "NOI calculator",
    "multifamily underwriting",
    "DSCR requirements",
  ],
  openGraph: {
    title: "Free DSCR Calculator | TA Capital Link",
    description:
      "Instantly calculate DSCR for multifamily loans. See debt service, debt yield, max loan amount, and whether your deal meets lender thresholds.",
    url: "https://tacapitalink.com/calculators/dscr",
    type: "website",
  },
  alternates: {
    canonical: "https://tacapitalink.com/calculators/dscr",
  },
};

export default function DSCRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
