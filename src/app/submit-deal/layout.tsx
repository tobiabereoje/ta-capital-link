import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit a Deal | TA Capital Link",
  description:
    "Submit your multifamily deal for expert lending advisory. Get matched with the right lender for your $2M to $50M+ commercial real estate financing.",
};

export default function SubmitDealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
