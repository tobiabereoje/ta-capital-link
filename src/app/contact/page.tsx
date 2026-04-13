"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend / API route
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-gold-500" />
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-4">
            Message Sent
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Thank you for reaching out. We will get back to you within one
            business day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <div className="w-12 h-0.5 bg-gold-500 mb-6" />
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            Have a question or want to learn more about how we can help with
            your multifamily deal? Reach out and our team will respond promptly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-navy-900/40 border border-navy-800/60 rounded-lg p-6">
              <div className="w-10 h-10 rounded bg-gold-500/10 flex items-center justify-center mb-4">
                <Mail size={18} className="text-gold-500" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Email</h3>
              <a
                href="mailto:info@tacapitalink.com"
                className="text-sm text-gold-400 hover:text-gold-300 transition-colors"
              >
                info@tacapitalink.com
              </a>
            </div>

            <div className="p-6 rounded-lg bg-navy-900/20 border border-navy-800/30">
              <p className="text-xs text-gray-500 leading-relaxed">
                For deal submissions and loan quotes, please use our{" "}
                <a
                  href="/submit-deal"
                  className="text-gold-400 hover:text-gold-300"
                >
                  deal submission form
                </a>{" "}
                for the fastest response.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell us about your situation or question..."
                  className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
