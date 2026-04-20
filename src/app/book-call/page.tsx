import Link from "next/link";
import {
  Clock,
  DollarSign,
  Video,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";

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
                    Secure payment via Stripe
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center shrink-0">
                  <Video size={18} className="text-gold-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    Video Call via Google Meet
                  </div>
                  <div className="text-xs text-gray-500">
                    Meeting link sent with calendar invite
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

          {/* Payment Card */}
          <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-8 flex flex-col">
            <h2 className="text-lg font-semibold text-white mb-2">
              Pay & Schedule
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Complete your payment, then choose your preferred date and time
              on the next page.
            </p>

            <div className="flex-1 flex flex-col items-center justify-center rounded bg-navy-900/60 border border-navy-800/50 p-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-6">
                  <CreditCard size={32} className="text-gold-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">$100</div>
                <div className="text-sm text-gray-500 mb-8">
                  30-Minute Advisory Session
                </div>
                <a
                  href="https://buy.stripe.com/dRm00ldwY9wLdKs3rm7Zu00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-gold-500 text-navy-950 font-semibold text-sm tracking-wider uppercase rounded transition-all duration-300 hover:bg-gold-400"
                >
                  Pay & Book Now
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* How It Works */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-gold-500">1</span>
                </div>
                <p className="text-sm text-gray-400">
                  Click the button above to pay securely through Stripe
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-gold-500">2</span>
                </div>
                <p className="text-sm text-gray-400">
                  After payment, choose your preferred date and time
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-gold-500">3</span>
                </div>
                <p className="text-sm text-gray-400">
                  Receive a calendar invite with your Google Meet link
                </p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 p-4 rounded bg-navy-900/60 border border-navy-800/40 flex items-center gap-3">
              <ShieldCheck size={18} className="text-gold-500 shrink-0" />
              <p className="text-xs text-gray-500">
                Payments are processed securely by Stripe. Your card details
                never touch our servers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
