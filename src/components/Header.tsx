"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Submit Deal", href: "/submit-deal" },
  { name: "Book Call", href: "/book-call" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/90 backdrop-blur-md border-b border-navy-800/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="TA Capital Link"
              className="h-14 w-auto rounded-sm"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-200 tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/submit-deal"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-gold-500 text-navy-950 font-semibold text-xs tracking-wider uppercase rounded transition-all duration-300 hover:bg-gold-400"
            >
              Submit Your Deal
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-950 border-t border-navy-800/40">
          <div className="px-6 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors border-b border-navy-800/30"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/submit-deal"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-gold-500 text-navy-950 font-semibold text-xs tracking-wider uppercase rounded"
              >
                Submit Your Deal
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
