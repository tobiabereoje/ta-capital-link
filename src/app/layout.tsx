import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tacapitalink.com"),
  title: {
    default: "TA Capital Link | Multifamily Lending Advisory",
    template: "%s | TA Capital Link",
  },
  description:
    "TA Capital Link provides institutional-level underwriting, loan advisory, and deal structuring for multifamily investors. Free DSCR, yield maintenance, and loan payment calculators.",
  keywords: [
    "multifamily lending",
    "multifamily loan broker",
    "DSCR calculator",
    "yield maintenance calculator",
    "loan payment calculator",
    "commercial real estate lending",
    "agency lending",
    "multifamily underwriting",
    "apartment financing",
    "CRE capital markets",
    "multifamily advisory",
    "bridge loan multifamily",
    "Fannie Mae multifamily",
    "Freddie Mac multifamily",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "TA Capital Link | Multifamily Lending Advisory",
    description:
      "Institutional-grade multifamily loan advisory. Free calculators for DSCR, yield maintenance, and loan payments.",
    url: "https://tacapitalink.com",
    siteName: "TA Capital Link",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TA Capital Link | Multifamily Lending Advisory",
    description:
      "Institutional-grade multifamily loan advisory. Free calculators for DSCR, yield maintenance, and loan payments.",
  },
  alternates: {
    canonical: "https://tacapitalink.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "wTH1CVf0bMPgEHo8ghfarSshmwy_GQ2N5Cdshtzq_L8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "TA Capital Link",
    url: "https://tacapitalink.com",
    description:
      "Institutional-level multifamily lending advisory, underwriting, and deal structuring services.",
    serviceType: "Multifamily Lending Advisory",
    areaServed: "US",
    knowsAbout: [
      "Multifamily Lending",
      "Commercial Real Estate Finance",
      "DSCR Analysis",
      "Yield Maintenance",
      "Agency Lending",
      "Loan Underwriting",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
