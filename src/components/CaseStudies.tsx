import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { CaseStudy } from '../types';

export const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: "vlon",
      client: "Vlon Industrial Manufacturing",
      industry: "Apparel & Textile Production",
      headline: "Cutting a 3-week design-to-production cycle down to 45 minutes.",
      metric: "3 Weeks → 45m",
      metricLabel: "Design-to-Factory Turnaround",
      problem: "High-end textile design handoffs required three weeks of manual color separation, print prepress formatting, yarn tension calculations, and multi-factory spec generation across overseas facilities.",
      architecture: [
        "Computer vision pipeline calculating yarn tension & dye ink saturation",
        "Deterministic CAD vector separation with automated prepress validation",
        "Direct API integration into manufacturing ERP & cutting machines",
      ],
      quote: "We cut our design-to-production time from 3 weeks to 45 minutes. Our clients think we hired an entire team. It's just Trao's AI system running in the background while we focus on creative direction.",
      author: "Sri Kansal",
      role: "Founder & CEO, Vlon",
    },
    {
      id: "oply",
      client: "Oply Global Logistics",
      industry: "Enterprise Talent Infrastructure",
      headline: "Automating 25,000 monthly technical evaluations with 99.9% precision.",
      metric: "92% Reduction",
      metricLabel: "In Operational Backlog Latency",
      problem: "Processing 25,000+ complex multi-lingual technical candidate portfolios per month caused a 120-hour evaluation backlog, leading to severe candidate churn and missed enterprise placements.",
      architecture: [
        "Multi-agent extraction parsing multi-page PDFs, GitHub commits, and code samples",
        "Deterministic skill graph mapping candidate proficiencies against job taxonomies",
        "Automated compliance audit ensuring zero demographic bias or PII leakage",
      ],
      quote: "Trao operates at a level I rarely see. They understand the real problem faster than anyone else and build incredible systems that survive actual enterprise volume.",
      author: "John Pettman",
      role: "Co-Founder, Oply",
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-28 border-b border-border-hairline bg-canvas-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-hairline bg-canvas-elevated text-brand-primary text-xs font-mono uppercase mb-4">
            <span>04 // Verified Case Studies</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-primary tracking-tight leading-tight mb-5">
            The difference between a lab that demos <br className="hidden sm:inline" />
            and a lab that deploys.
          </h2>
          <p className="text-base sm:text-lg text-slate-secondary leading-relaxed font-normal">
            A concrete claim invites scrutiny, which is exactly why it converts. We don’t ask you to take our word for it—inspect the actual systems we architected and the hard metrics they produced.
          </p>
        </div>

        {/* Case Study Dossiers */}
        <div className="space-y-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="rounded-xl border border-border-hairline bg-white shadow-subtle overflow-hidden hover:border-brand-primary/50 transition-all hover:shadow-elevated"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-hairline">
                
                {/* Left Column: Context & Engineered System */}
                <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-mono text-xs font-bold text-slate-primary uppercase tracking-wide">
                        {cs.client}
                      </span>
                      <span className="text-border-hairline">•</span>
                      <span className="text-xs font-mono text-slate-muted">
                        {cs.industry}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-primary mb-5 leading-snug">
                      {cs.headline}
                    </h3>

                    {/* Problem Statement */}
                    <div className="mb-6">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-muted mb-2 font-semibold">
                        The Operational Bottleneck
                      </h4>
                      <p className="text-sm text-slate-secondary leading-relaxed font-normal">
                        {cs.problem}
                      </p>
                    </div>

                    {/* Architecture Deployed */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-muted mb-3 font-semibold">
                        The Deployed Architecture
                      </h4>
                      <ul className="space-y-2">
                        {cs.architecture.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-secondary">
                            <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border-hairline/80 flex items-center gap-2 text-xs font-mono text-brand-primary font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Live in Production • 100% Client Code Ownership</span>
                  </div>
                </div>

                {/* Right Column: Hard Proof & Verified Quote */}
                <div className="lg:col-span-5 p-7 sm:p-10 bg-canvas-subtle/50 flex flex-col justify-between">
                  <div>
                    {/* Big Metric Box */}
                    <div className="p-6 rounded-lg bg-white border border-border-hairline mb-8 shadow-sm">
                      <span className="block text-xs font-mono uppercase text-slate-muted mb-1">
                        Quantified Result
                      </span>
                      <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-primary block tracking-tight">
                        {cs.metric}
                      </span>
                      <span className="text-xs text-slate-secondary font-medium mt-1 block">
                        {cs.metricLabel}
                      </span>
                    </div>

                    {/* Client Quote */}
                    <blockquote className="italic font-serif text-base sm:text-lg text-slate-primary leading-relaxed mb-6">
                      "{cs.quote}"
                    </blockquote>
                  </div>

                  {/* Attribution */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border-hairline">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center font-bold text-brand-primary text-sm font-mono">
                      {cs.author.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-sm text-slate-primary leading-tight">
                        {cs.author}
                      </h5>
                      <span className="text-xs text-slate-muted font-mono">
                        {cs.role}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
