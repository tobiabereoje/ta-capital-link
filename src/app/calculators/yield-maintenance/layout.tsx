import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Yield Maintenance Calculator for Commercial Loans",
  description:
    "Calculate yield maintenance prepayment penalties for multifamily and commercial real estate loans. Estimate your prepayment cost before refinancing or selling with our free calculator.",
  keywords: [
    "yield maintenance calculator",
    "prepayment penalty calculator",
    "commercial loan prepayment",
    "multifamily refinance penalty",
    "yield maintenance formula",
    "defeasance vs yield maintenance",
    "CRE prepayment calculator",
    "loan prepayment cost",
  ],
  openGraph: {
    title: "Free Yield Maintenance Calculator | TA Capital Link",
    description:
      "Estimate yield maintenance prepayment penalties for multifamily and commercial loans. Know your prepayment cost before refinancing or selling.",
    url: "https://tacapitalink.com/calculators/yield-maintenance",
    type: "website",
  },
  alternates: {
    canonical: "https://tacapitalink.com/calculators/yield-maintenance",
  },
};

export default function YieldMaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
