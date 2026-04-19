import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "TA Capital Link | Institutional Multifamily Lending & Advisory",
  description:
    "TA Capital Link provides institutional-level underwriting, loan advisory, and consulting services to multifamily investors and property owners.",
  keywords: [
    "multifamily",
    "real estate",
    "lending",
    "advisory",
    "underwriting",
    "capital markets",
    "loan advisory",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "TA Capital Link | Institutional Multifamily Lending & Advisory",
    description:
      "Helping multifamily investors secure financing and analyze deals with institutional-grade advisory.",
    url: "https://tacapitalink.com",
    siteName: "TA Capital Link",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "TA Capital Link | Institutional Multifamily Lending & Advisory",
  description:
    "TA Capital Link provides institutional-level underwriting, loan advisory, and consulting services to multifamily investors and property owners.",
  keywords: [
    "multifamily",
    "real estate",
    "lending",
    "advisory",
    "underwriting",
    "capital markets",
    "loan advisory",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "TA Capital Link | Institutional Multifamily Lending & Advisory",
    description:
      "Helping multifamily investors secure financing and analyze deals with institutional-grade advisory.",
    url: "https://tacapitalink.com",
    siteName: "TA Capital Link",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
