"use client";

import Script from "next/script";
import { Clock, DollarSign, Video, CheckCircle, Banknote, AlertCircle } from "lucide-react";

export default function BookCall() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
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
            <p className="text-sm text-gold-400 mt-3">
              30-minute session &middot; $100 via Zelle &middot; Google Meet
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Details Card */}
            <div className="md:col-span-2 bg-navy-900/40 border border-navy-800/60 rounded-lg p-8">
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
                      Payment required via Zelle before confirmation
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Video size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      Google Meet
                    </div>
                    <div className="text-xs text-gray-500">
                      Meeting link provided upon booking
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

              {/* Zelle Payment Instructions */}
              <div className="mt-6 p-5 rounded bg-navy-900/60 border border-gold-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Banknote size={16} className="text-gold-500" />
                  <span className="text-sm font-semibold text-white">
                    Payment Instructions
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  A $100 consultation fee is required to confirm your appointment.
                  After selecting a time, please send payment via Zelle using the
                  details below. Your booking will be confirmed once payment is
                  received.
                </p>
                <div className="space-y-2.5 p-4 rounded bg-navy-950/60 border border-navy-800/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Send To</span>
                    <span className="text-sm font-medium text-white">
                      Flatlands Consulting Group
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Zelle Email</span>
                    <span className="text-sm font-medium text-gold-400">
                      omni23@me.com
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Amount</span>
                    <span className="text-sm font-medium text-white">
                      $100.00
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 mt-3">
                  <AlertCircle size={12} className="text-gold-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Please include your full name and appointment date in the Zelle
                    memo. Your appointment will not be confirmed until payment is
                    verified.
                  </p>
                </div>
              </div>
            </div>

            {/* Calendly Inline Widget */}
            <div className="md:col-span-3 bg-navy-900/40 border border-navy-800/60 rounded-lg p-4 md:p-6">
              <h2 className="text-lg font-semibold text-white mb-4">
                Select a Time
              </h2>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/tobiabereoje/30min?hide_gdpr_banner=1&background_color=0a0f1e&text_color=ffffff&primary_color=ffffff"
                style={{ minWidth: "280px", height: "660px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
