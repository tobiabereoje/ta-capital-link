import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Multifamily Loan Calculators",
  description:
    "Free calculators for multifamily and commercial real estate investors. Calculate DSCR, yield maintenance prepayment penalties, and monthly loan payments for agency, CMBS, and bridge loans.",
  keywords: [
    "multifamily calculators",
    "commercial real estate calculators",
    "free CRE tools",
    "DSCR calculator",
    "yield maintenance calculator",
    "loan payment calculator",
    "multifamily underwriting tools",
    "apartment loan calculator",
  ],
  openGraph: {
    title: "Free Multifamily Loan Calculators | TA Capital Link",
    description:
      "DSCR, yield maintenance, and loan payment calculators built for multifamily and CRE investors.",
    url: "https://tacapitalink.com/calculators",
    type: "website",
  },
  alternates: {
    canonical: "https://tacapitalink.com/calculators",
  },
};

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
