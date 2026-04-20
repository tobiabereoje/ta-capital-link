import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TA Capital Link",
  description:
    "How TA Capital Link collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="w-12 h-0.5 bg-gold-500 mb-6" />
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: April 2026
          </p>
        </div>

        <div className="space-y-8 text-gray-400 leading-relaxed text-sm">
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              Information We Collect
            </h2>
            <p>
              When you submit a deal, book a consultation, or contact us through
              our website, we collect the personal information you provide,
              including your name, email address, phone number, and details about
              your property or financing request. We also collect standard
              analytics data such as page views and device type to improve our
              website experience.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              How We Use Your Information
            </h2>
            <p>
              We use your information solely to evaluate your financing request,
              communicate with you about our services, schedule consultations,
              and improve our website. We do not sell, rent, or share your
              personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information. All deal submissions and financial documents
              are treated as strictly confidential. However, no method of
              electronic transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              Third-Party Services
            </h2>
            <p>
              Our website uses Calendly for appointment scheduling, Google Fonts
              for typography, and Vercel for hosting. These services may collect
              usage data in accordance with their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us at{" "}
              <a
                href="mailto:info@tacapitalink.com"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                info@tacapitalink.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Any changes will be
              posted on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <p>
              If you have questions about this privacy policy, please contact us
              at{" "}
              <a
                href="mailto:info@tacapitalink.com"
                className="text-gold-400 hover:text-gold-300 transition-colors"
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
