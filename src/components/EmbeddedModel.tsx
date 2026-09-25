import React from 'react';
import { Search, Code2, ShieldAlert, Rocket, Check } from 'lucide-react';

export const EmbeddedModel: React.FC = () => {
  const steps = [
    {
      phase: "PHASE 01",
      timing: "WEEKS 1–2",
      title: "Process Forensic & Blueprint",
      icon: Search,
      description: "We shadow your engineers and operators directly. We map data schemas, identify error bottlenecks, and deliver an exact architectural specification and measurable ROI target.",
      deliverables: ["Process Bottleneck Map", "Typed Schema Specification", "Fixed-Scope Architecture SLA"],
    },
    {
      phase: "PHASE 02",
      timing: "WEEKS 3–6",
      title: "Embedded Pod Integration",
      icon: Code2,
      description: "A dedicated pod of senior engineers and systems designers integrates into your Slack, Jira, and GitHub. We build the core agent graph, vector pipelines, and test suites directly in your repo.",
      deliverables: ["Direct Commits to Your Repo", "Weekly Executable Demos", "In-VPC Sandbox Staging"],
    },
    {
      phase: "PHASE 03",
      timing: "WEEKS 7–10",
      title: "Hardening & Security Audit",
      icon: ShieldAlert,
      description: "Rigorous stress-testing: latency benching, red-teaming adversarial edge cases, hallucination guardrails, and InfoSec compliance sign-off with your security team.",
      deliverables: ["Red-Team Vulnerability Audit", "SOC 2 Evidence Export", "Latency SLA Conformance (<150ms)"],
    },
    {
      phase: "PHASE 04",
      timing: "WEEKS 11–12+",
      title: "Live Rollout & 90-Day Hypercare",
      icon: Rocket,
      description: "Zero-downtime deployment to your production VPC. Complete developer documentation, team handover workshops, and 90 days of dedicated free post-launch hypercare.",
      deliverables: ["100% IP & Code Handover", "Team Training & Runbooks", "90-Day Production Hypercare SLA"],
    },
  ];

  return (
    <section id="model" className="py-20 md:py-28 border-b border-border-hairline bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-hairline bg-canvas-elevated text-brand-primary text-xs font-mono uppercase mb-4">
            <span>05 // The Embedded Engagement Model</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-primary tracking-tight leading-tight mb-5">
            We don’t advise from the sidelines. <br className="hidden sm:inline" />
            We write production code in your repo.
          </h2>
          <p className="text-base sm:text-lg text-slate-secondary leading-relaxed font-normal">
            No endless PowerPoint decks or theoretical recommendations. We embed dedicated engineering pods inside your team to build, test, and ship working software that survives contact with production.
          </p>
        </div>

        {/* 4-Step Milestone Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-lg border border-border-hairline bg-white p-6 sm:p-7 flex flex-col justify-between shadow-subtle hover:border-brand-primary/60 transition-colors group"
              >
                <div>
                  {/* Top Bar: Timing & Icon */}
                  <div className="flex items-center justify-between border-b border-border-hairline/70 pb-4 mb-4">
                    <div className="font-mono text-xs">
                      <span className="text-brand-primary font-bold block">{step.phase}</span>
                      <span className="text-slate-muted">{step.timing}</span>
                    </div>
                    <div className="w-9 h-9 rounded bg-brand-tint/60 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-slate-primary mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-border-hairline/70 space-y-2">
                  <span className="font-mono text-[10px] text-slate-muted uppercase tracking-wider block font-semibold">
                    Core Milestones:
                  </span>
                  {step.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-secondary font-mono">
                      <Check className="w-3 h-3 text-brand-primary shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
