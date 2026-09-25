import React from 'react';
import { AlertCircle, CheckCircle2, GitMerge, ShieldAlert, Users } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const comparisons = [
    {
      title: "Architecture & Reliability",
      failureLabel: "Brittle Prompt Chaining",
      failureDesc: "Generic wrappers string together fragile LLM completions. When messy edge cases or unformatted PDFs hit the system, error cascades cause silent hallucinations.",
      traoLabel: "Deterministic State Machines",
      traoDesc: "We engineer typed agent graphs with strict schema validators, automated judge models, and audited human-in-the-loop fallbacks that never guess on enterprise data.",
      icon: GitMerge,
    },
    {
      title: "Data Sovereignty & Privacy",
      failureLabel: "Multi-Tenant Public APIs",
      failureDesc: "Sending confidential enterprise IP, candidate records, or trade secrets to public endpoints where terms allow multi-tenant caching and compliance risks.",
      traoLabel: "Air-Gapped & Private VPC",
      traoDesc: "All models and vector indices deploy inside your existing AWS, GCP, or Azure VPC. Zero client data ever leaves your security perimeter or trains public weights.",
      icon: ShieldAlert,
    },
    {
      title: "Operational Integration",
      failureLabel: "Agency Prototypes & Slides",
      failureDesc: "Consultancies deliver slide decks; agencies deliver a prototype in an isolated GitHub repo that your internal engineering team rejects and refuses to maintain.",
      traoLabel: "Embedded Engineering Pods",
      traoDesc: "Our senior engineers write production code directly inside your Git repositories, join your daily standups, integrate into your CI/CD, and train your staff before handoff.",
      icon: Users,
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-border-hairline bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-hairline bg-canvas-elevated text-brand-primary text-xs font-mono uppercase mb-4">
            <span>01 // The Production Gap</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-primary tracking-tight leading-tight mb-5">
            Most enterprise AI fails between <br className="hidden sm:inline" />
            the demo and the deployment.
          </h2>
          <p className="text-base sm:text-lg text-slate-secondary leading-relaxed font-normal">
            Every vendor can stitch together an OpenAI API call and show an impressive deck. But enterprise systems fail when schema drift occurs, latency spikes, and compliance audits arrive. Here is how we engineer around the failure points.
          </p>
        </div>

        {/* 3 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisons.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="rounded-lg border border-border-hairline bg-white p-6 sm:p-7 flex flex-col justify-between shadow-subtle hover:border-brand-primary/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-medium text-slate-muted uppercase tracking-wider">
                      {c.title}
                    </span>
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>

                  {/* The Vendor Trap */}
                  <div className="mb-6 p-4 rounded bg-[#FAF6F4] border border-[#F0DCD5]">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase font-mono mb-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>The Industry Flaw: {c.failureLabel}</span>
                    </div>
                    <p className="text-xs text-slate-secondary leading-relaxed">
                      {c.failureDesc}
                    </p>
                  </div>

                  {/* The Trao Standard */}
                  <div className="p-4 rounded bg-brand-tint/40 border border-brand-primary/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase font-mono mb-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Trao Standard: {c.traoLabel}</span>
                    </div>
                    <p className="text-xs text-slate-secondary leading-relaxed">
                      {c.traoDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
