import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Server, Lock, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border-hairline overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#E1DACD_1px,transparent_1px),linear-gradient(to_bottom,#E1DACD_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-hairline bg-canvas-elevated text-brand-primary text-xs font-mono font-medium tracking-wider uppercase mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
          <span>Embedded AI Systems Engineering</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold text-slate-primary tracking-tight leading-[1.12] mb-6">
          We engineer AI systems that <br className="hidden sm:inline" />
          <span className="italic font-normal text-slate-secondary">survive contact with production.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-secondary max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Organizations bring us their critical bottlenecks — fragmented pipelines, manual document processing, and brittle legacy handoffs. We embed dedicated engineering pods inside your team to research, architect, and deploy production AI software. Real systems, live on your VPC, running reliably at 3:00 AM on a Tuesday.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3.5 rounded bg-brand-primary text-white text-sm font-semibold hover:bg-brand-hover transition-all flex items-center justify-center gap-2.5 shadow-md cursor-pointer group"
          >
            <span>Book an Architecture Review</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <a
            href="#simulator"
            className="w-full sm:w-auto px-6 py-3.5 rounded border border-border-hairline bg-white/80 text-slate-primary text-sm font-semibold hover:bg-canvas-elevated transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-subtle"
          >
            <span>Inspect Architecture Simulator</span>
            <ChevronDown className="w-4 h-4 text-slate-muted" />
          </a>
        </div>

        {/* Enterprise Assurance Badges */}
        <div className="pt-6 border-t border-border-hairline/60 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-secondary font-mono mb-12">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-primary" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <span className="text-border-hairline hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Server className="w-4 h-4 text-brand-primary" />
            <span>Dedicated VPC (AWS / GCP / Azure)</span>
          </div>
          <span className="text-border-hairline hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-brand-primary" />
            <span>Zero Training on Your IP</span>
          </div>
          <span className="text-border-hairline hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-brand-primary" />
            <span>100% Client Code Ownership</span>
          </div>
        </div>

        {/* Hero Architectural Schematic Preview */}
        <div className="max-w-4xl mx-auto rounded-xl border border-border-hairline bg-white shadow-elevated overflow-hidden text-left font-mono">
          <div className="px-5 py-3 border-b border-border-hairline bg-canvas-subtle flex items-center justify-between text-[11px] text-slate-muted">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-status-pulse"></span>
              <span className="font-semibold text-slate-primary">trao-core-v4.1 // embedded-orchestrator.ts</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span>Environment: Client_VPC_Dedicated</span>
              <span>Audit: Zero_Retention_Active</span>
            </div>
          </div>
          <div className="p-5 sm:p-6 bg-[#08281D] text-white text-xs leading-relaxed overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-white/10 mb-4">
              <div className="p-3 rounded bg-white/5 border border-white/10">
                <span className="text-[10px] text-white/50 block">PIPELINE NODE 01</span>
                <span className="font-bold text-emerald-400 block mt-0.5">Ingress & Schema Guard</span>
                <span className="text-[11px] text-white/80 block mt-1">Strict typed AST validation</span>
              </div>
              <div className="p-3 rounded bg-white/5 border border-white/10">
                <span className="text-[10px] text-white/50 block">PIPELINE NODE 02</span>
                <span className="font-bold text-emerald-400 block mt-0.5">Multi-Agent Graph</span>
                <span className="text-[11px] text-white/80 block mt-1">Deterministic state machine</span>
              </div>
              <div className="p-3 rounded bg-white/5 border border-white/10">
                <span className="text-[10px] text-white/50 block">PIPELINE NODE 03</span>
                <span className="font-bold text-emerald-400 block mt-0.5">VPC Transaction Commit</span>
                <span className="text-[11px] text-white/80 block mt-1">Sub-100ms ERP sync</span>
              </div>
            </div>
            <div className="text-[11px] text-emerald-300 font-mono space-y-1">
              <div><span className="text-white/40">01</span> export const productionPipeline = defineSystem(&#123;</div>
              <div><span className="text-white/40">02</span> &nbsp;&nbsp;guardrails: [zeroHallucinationJudge, piiAirGapSanitizer],</div>
              <div><span className="text-white/40">03</span> &nbsp;&nbsp;fallbackPolicy: &apos;audited_operator_escalation&apos;, // Never guess on production data</div>
              <div><span className="text-white/40">04</span> &nbsp;&nbsp;slaBudgetMs: 120, telemetry: &#123; activeNodes: 14, uptime: 0.9998 &#125;</div>
              <div><span className="text-white/40">05</span> &#125;);</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
