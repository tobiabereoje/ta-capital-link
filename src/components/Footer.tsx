import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800/40">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="TA Capital Link"
                className="h-12 w-auto rounded-sm"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Institutional multifamily lending and advisory. Helping investors
              secure financing and maximize deal performance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-gold-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "Submit Deal", href: "/submit-deal" },
                { name: "Book a Consultation", href: "/book-call" },
                { name: "Resources", href: "/resources" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-gold-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:info@tacapitalink.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  info@tacapitalink.com
                </a>
              </li>
              <li>tacapitalink.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} TA Capital Link. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
