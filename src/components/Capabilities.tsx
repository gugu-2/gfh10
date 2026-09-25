import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Capability } from '../types';

export const Capabilities: React.FC = () => {
  const capabilities: Capability[] = [
    {
      id: "agent-orchestration",
      index: "BLUEPRINT // 01",
      title: "Autonomous Multi-Agent Orchestration",
      subtitle: "State-driven execution engines that run complex multi-system operational workflows.",
      description: "We architect multi-agent state machines that query disparate databases, execute tool calls across legacy ERPs/CRMs, cross-reference external APIs, and escalate to human operators only when confidence drops below 99.5%.",
      specs: [
        { label: "Execution Latency", value: "<120ms per node" },
        { label: "Deterministic SLA", value: "99.9% Schema Conformance" },
        { label: "Human Escalation", value: "Automated Fallback Trigger" },
      ],
      deployedIn: "Automated candidate qualification pipeline for single-family office fund.",
    },
    {
      id: "document-intelligence",
      index: "BLUEPRINT // 02",
      title: "High-Volume Document Intelligence",
      subtitle: "Zero-loss extraction and structured translation from complex enterprise PDFs and scans.",
      description: "Vision-language models combined with layout-aware spatial parsers and automated cross-verification against core accounting databases. Capable of processing messy multi-page invoices, technical blueprints, and legal contracts.",
      specs: [
        { label: "Throughput", value: "14,000+ files / hour" },
        { label: "Field Accuracy", value: "99.92% verified" },
        { label: "Languages", value: "Multi-lingual OCR & Parsing" },
      ],
      deployedIn: "Automated CV & technical resume processing engine handling 25k records/month.",
    },
    {
      id: "enterprise-rag",
      index: "BLUEPRINT // 03",
      title: "Enterprise Knowledge Intelligence & Private RAG",
      subtitle: "Deterministic question-answering over proprietary enterprise data silos.",
      description: "Hybrid semantic and lexical search pipelines utilizing enterprise vector storage, chunk re-ranking, and citation-backed response synthesis with zero hallucination tolerance. Every answer includes verifiable links to source documents.",
      specs: [
        { label: "Data Residency", value: "100% In-VPC Indexing" },
        { label: "Citation Precision", value: "Strict Audit-Backed" },
        { label: "Search Mode", value: "Hybrid Lexical + Vector" },
      ],
      deployedIn: "80,000 historical regulatory contracts mapped for real-time compliance queries.",
    },
    {
      id: "core-reengineering",
      index: "BLUEPRINT // 04",
      title: "AI-Native Core System Re-engineering",
      subtitle: "Rebuilding legacy internal software with AI natively embedded into the core database and UI.",
      description: "We tear down slow, manual internal portals and rebuild them as responsive, intent-driven systems. We replace 40-step form entry with automated cognitive assistants that draft, validate, and execute operations with sub-100ms UI responsiveness.",
      specs: [
        { label: "Turnaround Cut", value: "Weeks to under 1 hour" },
        { label: "Stack", value: "Cloud-native TypeScript & Python" },
        { label: "CI/CD", value: "Direct client Git Integration" },
      ],
      deployedIn: "Textile manufacturing production cycle reduced from 3 weeks to 45 minutes.",
    },
  ];

  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-border-hairline bg-canvas-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-hairline bg-canvas-elevated text-brand-primary text-xs font-mono uppercase mb-4">
            <span>02 // Systems & Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-primary tracking-tight leading-tight mb-5">
            Architectural blueprints built for <br className="hidden sm:inline" />
            enterprise durability.
          </h2>
          <p className="text-base sm:text-lg text-slate-secondary leading-relaxed font-normal">
            We don't sell pre-packaged SaaS or off-the-shelf bots. Every system is purpose-built to fit into your infrastructure, comply with your security policies, and solve your exact operational bottleneck.
          </p>
        </div>

        {/* 2x2 Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="rounded-lg border border-border-hairline bg-white p-7 sm:p-9 flex flex-col justify-between shadow-subtle hover:border-brand-primary/60 transition-all hover:shadow-elevated group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-border-hairline/80 pb-4 mb-5">
                  <span className="font-mono text-xs font-semibold text-brand-primary tracking-wider">
                    {cap.index}
                  </span>
                  <span className="font-mono text-[11px] text-slate-muted border border-border-hairline px-2 py-0.5 rounded bg-canvas-elevated">
                    Production Grade
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl font-bold text-slate-primary tracking-tight mb-2 group-hover:text-brand-primary transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm font-medium text-slate-secondary mb-4">
                  {cap.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mb-6 font-normal">
                  {cap.description}
                </p>

                {/* Specs Row */}
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded bg-canvas-subtle border border-border-hairline/70 mb-6 font-mono text-[11px]">
                  {cap.specs.map((sp, i) => (
                    <div key={i}>
                      <span className="block text-slate-muted text-[10px] uppercase">{sp.label}</span>
                      <span className="font-bold text-slate-primary">{sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Deployed Proof */}
              <div className="pt-4 border-t border-border-hairline/80 flex items-center justify-between text-xs text-slate-secondary">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-mono text-[11px] text-brand-primary font-semibold">Live in:</span>
                  <span className="truncate">{cap.deployedIn}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-muted group-hover:text-brand-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
