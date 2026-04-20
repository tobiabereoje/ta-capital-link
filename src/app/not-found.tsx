import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#0a1628] text-white min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-[#c5a47e] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#c5a47e] text-[#0a1628] font-semibold rounded-lg hover:bg-[#b8956f] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-[#c5a47e] text-[#c5a47e] font-semibold rounded-lg hover:bg-[#c5a47e]/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
