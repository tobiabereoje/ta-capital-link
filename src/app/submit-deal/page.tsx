"use client";

import { useState } from "react";
import { Send, Upload, CheckCircle } from "lucide-react";

export default function SubmitDeal() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

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
            Deal Submitted Successfully
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Thank you for submitting your deal. Our team will review your
            information and reach out within 24 hours with a custom loan quote
            and next steps.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <div className="w-12 h-0.5 bg-gold-500 mb-6" />
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Submit Your Deal
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Provide your deal details below and our team will prepare a custom
            loan quote tailored to your property and business plan. All
            submissions are reviewed within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="John Smith"
                className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="(555) 123-4567"
              className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-navy-800/40 pt-6">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-gold-500 mb-6">
              Property Details
            </h3>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
              Property Location *
            </label>
            <input
              type="text"
              required
              placeholder="City, State or Full Address"
              className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                Number of Units *
              </label>
              <input
                type="number"
                required
                placeholder="e.g. 48"
                className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                Loan Amount Requested *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. $3,500,000"
                className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
              Business Plan *
            </label>
            <textarea
              required
              rows={5}
              placeholder="Describe your acquisition or refinance strategy, intended hold period, renovation plans, and any other relevant details..."
              className="w-full px-4 py-3 bg-navy-900/60 border border-navy-700/50 rounded text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 resize-none"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
              Upload Documents
            </label>
            <p className="text-xs text-gray-500 mb-3">
              Rent Roll, T12, Offering Memorandum, or other supporting documents
              (PDF, XLSX, DOCX)
            </p>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-navy-700/50 rounded-lg cursor-pointer hover:border-gold-500/30 transition-colors bg-navy-900/30">
              <Upload size={24} className="text-gray-500 mb-2" />
              <span className="text-sm text-gray-500">
                {files.length > 0
                  ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
                  : "Click to upload or drag files here"}
              </span>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                accept=".pdf,.xlsx,.xls,.docx,.doc,.csv"
                className="hidden"
              />
            </label>
            {files.length > 0 && (
              <div className="mt-3 space-y-1">
                {files.map((file, i) => (
                  <div key={i} className="text-xs text-gray-400">
                    {file.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-7 py-4 bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
          >
            Submit Deal
            <Send size={16} className="ml-2" />
          </button>

          <p className="text-xs text-gray-500 text-center">
            Your information is kept strictly confidential and is used solely for
            evaluating your financing request.
          </p>
        </form>
      </div>
    </section>
  );
}
