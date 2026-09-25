import React from 'react';
import { ShieldCheck, Lock, FileCode2, Server, FileCheck } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const pillars = [
    {
      title: "SOC 2 Type II & GDPR Compliant",
      icon: ShieldCheck,
      detail: "Formally audited institutional security controls. All data encrypted at rest with AES-256 and in transit via TLS 1.3. Comprehensive audit logs and access monitoring.",
    },
    {
      title: "100% Client Code & IP Ownership",
      icon: FileCode2,
      detail: "Every commit, model adapter, custom tokenizer, and documentation runbook belongs entirely to your company. Zero licensing royalties or vendor lock-in.",
    },
    {
      title: "Zero Data Retention Guarantee",
      icon: Lock,
      detail: "Strict non-disclosure agreements with contractual zero-retention guarantees. Your proprietary enterprise data is never used to train or refine public frontier models.",
    },
    {
      title: "Private In-VPC Deployment",
      icon: Server,
      detail: "Deploy inside your existing AWS GovCloud, Google Cloud, or Azure Enterprise perimeter. Full support for air-gapped clusters and custom IAM enterprise access controls.",
    },
  ];

  return (
    <section id="security" className="py-20 md:py-28 border-b border-border-hairline bg-canvas-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-hairline bg-canvas-elevated text-brand-primary text-xs font-mono uppercase mb-4">
            <span>06 // Governance & Information Security</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-primary tracking-tight leading-tight mb-5">
            Engineered for the scrutiny of <br className="hidden sm:inline" />
            procurement and board review.
          </h2>
          <p className="text-base sm:text-lg text-slate-secondary leading-relaxed font-normal">
            Enterprise buyers have to justify every vendor decision to their CISO, legal counsel, and board of directors. We engineer our systems so that security approval is a swift formality.
          </p>
        </div>

        {/* 4 Security Assurance Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="rounded-lg border border-border-hairline bg-white p-6 sm:p-7 flex flex-col justify-between shadow-subtle hover:border-brand-primary/50 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-brand-tint border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-primary mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-normal">
                    {p.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border-hairline/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                  <span>✓ CISO Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* InfoSec Trust Bar */}
        <div className="mt-12 p-6 rounded-lg bg-canvas-elevated border border-border-hairline flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-brand-primary shrink-0" />
            <span className="text-xs sm:text-sm text-slate-secondary font-medium">
              Need to review our SOC 2 Type II Report, Pen-Test Results, or Mutual NDA template?
            </span>
          </div>
          <a
            href="mailto:talent@trao.ai?subject=Request%20Security%20Package"
            className="px-4 py-2 rounded border border-border-hairline bg-white text-xs font-mono font-semibold text-slate-primary hover:bg-canvas-subtle transition-colors shrink-0 shadow-sm"
          >
            Request Security Package →
          </a>
        </div>

      </div>
    </section>
  );
};
