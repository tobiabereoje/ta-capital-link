import Link from "next/link";
import { Clock, DollarSign, Video, CheckCircle } from "lucide-react";

export default function BookCall() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <div className="w-12 h-0.5 bg-gold-500 mb-6" />
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Book a Consultation
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            Schedule a one-on-one session with an experienced multifamily
            advisor. Get personalized guidance on your deal, financing strategy,
            or portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Details Card */}
          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8">
            <h2 className="text-lg font-semibold text-white mb-6">
              Consultation Details
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-gold-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    30 Minutes
                  </div>
                  <div className="text-xs text-gray-500">
                    Focused session on your specific needs
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center shrink-0">
                  <DollarSign size={18} className="text-gold-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    $100 per Session
                  </div>
                  <div className="text-xs text-gray-500">
                    Payment processed securely via Stripe
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center shrink-0">
                  <Video size={18} className="text-gold-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    Video or Phone Call
                  </div>
                  <div className="text-xs text-gray-500">
                    Zoom link provided upon booking
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-800/40">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-gold-500 mb-4">
                What We Can Cover
              </h3>
              <div className="space-y-3">
                {[
                  "Deal structure and financing strategy",
                  "Underwriting review and assumption testing",
                  "Market analysis and rent comparables",
                  "Lender selection and loan program guidance",
                  "Portfolio strategy and capital planning",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={14}
                      className="text-gold-500 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Calendly Embed Placeholder */}
          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 flex flex-col">
            <h2 className="text-lg font-semibold text-white mb-4">
              Select a Time
            </h2>

            {/*
              ========================================
              CALENDLY INTEGRATION PLACEHOLDER
              ========================================
              Replace the div below with your Calendly inline widget:

              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/YOUR_USERNAME/30min"
                style={{ minWidth: '320px', height: '600px' }}
              />

              And add the Calendly script to your layout or this page:
              <Script src="https://assets.calendly.com/assets/external/widget.js" />
              ========================================
            */}
            <div className="flex-1 flex flex-col items-center justify-center rounded bg-navy-900/60 border border-dashed border-navy-700/50 min-h-[400px]">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                  <Clock size={28} className="text-gold-500" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Calendly Booking Widget
                </h3>
                <p className="text-sm text-gray-500 mb-6 max-w-xs">
                  Your Calendly scheduling widget will appear here once
                  integrated.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-navy-950 font-semibold text-xs tracking-wider uppercase rounded transition-all duration-300 hover:bg-gold-400"
                >
                  Schedule on Calendly
                </a>
              </div>
            </div>

            {/* Stripe Payment Note */}
            <div className="mt-6 p-4 rounded bg-navy-900/60 border border-navy-800/40">
              <p className="text-xs text-gray-500">
                <span className="text-gold-500 font-medium">
                  Payment Note:
                </span>{" "}
                The $100 consultation fee will be collected via Stripe during the
                booking process. You will receive a confirmation email with your
                meeting link and receipt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
