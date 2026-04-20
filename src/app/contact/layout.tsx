import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | TA Capital Link",
  description:
    "Get in touch with TA Capital Link for multifamily lending advisory. We help investors secure financing from $2M to $50M+.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
