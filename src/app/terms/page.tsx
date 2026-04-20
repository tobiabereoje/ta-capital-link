import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | TA Capital Link",
  description: "Terms of Service for TA Capital Link multifamily lending advisory services.",
};

export default function TermsPage() {
  return (
    <section className="bg-[#0a1628] text-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#c5a47e] mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: April 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the TA Capital Link website and services, you agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not use our
              services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
            <p>
              TA Capital Link provides multifamily lending advisory services, including but not
              limited to deal assessment, lender matching, loan structuring guidance, and
              transaction support for commercial real estate financing in the $2M to $50M+ range.
              Our services are advisory in nature and do not constitute lending or brokerage
              services unless otherwise specified.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. Deal Assessment Fee</h2>
            <p>
              A $100 deal assessment fee is required to schedule a consultation. This fee is
              credited toward your advisory engagement if we move forward together. Payment
              details and methods are provided on our booking page. All fees are non-refundable
              unless otherwise stated in writing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. User Responsibilities</h2>
            <p>
              You agree to provide accurate and complete information when using our services,
              including deal submissions and consultation requests. You are responsible for
              maintaining the confidentiality of any account credentials and for all activities
              that occur under your account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the
              property of TA Capital Link or its licensors and is protected by copyright and
              intellectual property laws. You may not reproduce, distribute, or create derivative
              works from any content without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Disclaimer</h2>
            <p>
              TA Capital Link provides advisory services on an &quot;as is&quot; basis. We do not
              guarantee loan approval, specific interest rates, or particular outcomes. Past
              performance and case studies are not indicative of future results. All lending
              decisions are made by third-party lenders and are subject to their own underwriting
              criteria.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, TA Capital Link shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of our
              services, including but not limited to lost profits, business interruption, or loss
              of data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Confidentiality</h2>
            <p>
              We treat all deal information and personal details shared with us as confidential.
              We will not disclose your information to third parties without your consent, except
              as required by law or as necessary to provide our services (such as sharing deal
              details with potential lenders at your request).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">9. Modifications</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be
              posted on this page with an updated revision date. Your continued use of our
              services after any changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at{" "}
              <a
                href="mailto:info@tacapitalink.com"
                className="text-[#c5a47e] hover:underline"
              >
                info@tacapitalink.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
