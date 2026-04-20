import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | TA Capital Link",
  description:
    "Schedule a consultation with TA Capital Link. Get expert guidance on your multifamily lending needs from $2M to $50M+.",
};

export default function BookCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
