import React, { useState } from 'react';
import { ShieldCheck, Cpu, Server, Database } from 'lucide-react';
import { SimulationScenario } from '../types';

export const ArchitectureSimulator: React.FC = () => {
  const scenarios: SimulationScenario[] = [
    {
      id: "normal-batch",
      name: "Standard Invoice Batch",
      type: "success",
      inputSnippet: "{ invoice_id: 'INV-8921', vendor_tax_id: 'US-928192', items: [{ sku: 'TX-99', qty: 450, unit_price: 14.50 }] }",
      latencyMs: 42,
      deterministicScore: "99.98%",
      statusText: "Deterministic Schema Match • 100% Automated Commit",
      logTrace: [
        "[03:14:02.102] Ingestion gateway received payload (348 bytes)",
        "[03:14:02.115] State machine validated typed AST against ERP database schema",
        "[03:14:02.132] Deterministic judge verified tax registration with government registry",
        "[03:14:02.144] COMMIT: Written to SAP S/4HANA in VPC in 42ms. 0 human intervention.",
      ],
    },
    {
      id: "malformed-scan",
      name: "Malformed Unstructured Scan",
      type: "fallback",
      inputSnippet: "RAW_OCR: 'Vendor: [smudged]... Total: $42,??0.00... Date: 2024-??-12... Missing itemized tax breakdown.'",
      latencyMs: 118,
      deterministicScore: "46.20% (Below 99.5% Threshold)",
      statusText: "Schema Drift Detected • Safe Audited Fallback Executed",
      logTrace: [
        "[03:14:05.310] Ingestion gateway received degraded OCR scan (4.2 MB)",
        "[03:14:05.340] VLM extracted candidates; confidence score computed at 46.2%",
        "[03:14:05.390] WARNING: Total amount ambiguous ($42,000 vs $42,900); schema validation failed",
        "[03:14:05.428] FALLBACK TRIGGERED: Zero hallucination policy enforced. Dispatched to human review queue with confidence annotations.",
      ],
    },
    {
      id: "pii-leak",
      name: "PII & IP Leakage Attempt",
      type: "scrubbed",
      inputSnippet: "{ employee_ssn: '982-12-XXXX', salary: '$185,000', proprietary_formula: 'CHEM_PATENT_V4' }",
      latencyMs: 29,
      deterministicScore: "Air-Gapped In-VPC Sanitized",
      statusText: "PII Intercepted Locally • Zero External API Exposure",
      logTrace: [
        "[03:14:09.004] Data stream detected in client VPC ingress",
        "[03:14:09.012] Local regex & cryptographic entity recognition flagged 2 PII tokens + 1 trade secret",
        "[03:14:09.025] Air-gapped anonymization filter executed in local RAM",
        "[03:14:09.033] SAFE: Payload sanitized before reaching reasoning nodes. 0 data persisted externally.",
      ],
    },
  ];

  const [activeScenario, setActiveScenario] = useState<SimulationScenario>(scenarios[0]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleSelectScenario = (sc: SimulationScenario) => {
    setIsRunning(true);
    setActiveScenario(sc);
    setTimeout(() => {
      setIsRunning(false);
    }, 450);
  };

  return (
    <section id="simulator" className="py-20 md:py-28 border-b border-border-hairline bg-canvas-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-hairline bg-canvas-elevated text-brand-primary text-xs font-mono uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping"></span>
            <span>03 // The Deterministic Gatekeeper (Interactive Simulator)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-primary tracking-tight leading-tight mb-4">
            See how our architecture handles <br className="hidden sm:inline" />
            real-world chaos without hallucinating.
          </h2>
          <p className="text-base sm:text-lg text-slate-secondary leading-relaxed font-normal">
            Select a live enterprise scenario below to simulate how Trao’s multi-agent state machines, deterministic schema judges, and air-gapped VPC filters operate under pressure.
          </p>
        </div>

        {/* Scenario Selector Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {scenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => handleSelectScenario(sc)}
              className={`px-4 py-2.5 rounded text-xs sm:text-sm font-mono font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeScenario.id === sc.id
                  ? 'bg-slate-primary text-white shadow-md'
                  : 'bg-canvas-subtle border border-border-hairline text-slate-secondary hover:bg-canvas-elevated hover:text-slate-primary'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${
                sc.type === 'success' ? 'bg-emerald-400' : sc.type === 'fallback' ? 'bg-amber-400' : 'bg-sky-400'
              }`}></span>
              <span>{sc.name}</span>
            </button>
          ))}
        </div>

        {/* The Interactive Architecture Canvas */}
        <div className="rounded-xl border border-border-hairline bg-white shadow-elevated overflow-hidden">
          
          {/* Top Inspector Bar */}
          <div className="border-b border-border-hairline px-6 py-4 bg-canvas-subtle flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-slate-muted uppercase">Selected Scenario:</span>
              <span className="font-bold text-slate-primary bg-white px-2.5 py-1 rounded border border-border-hairline">
                {activeScenario.name}
              </span>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-muted">Pipeline Latency:</span>
                <span className="font-bold text-brand-primary">{isRunning ? '...' : `${activeScenario.latencyMs}ms`}</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="text-slate-muted">Confidence:</span>
                <span className="font-bold text-slate-primary">{isRunning ? 'Computing...' : activeScenario.deterministicScore}</span>
              </div>
            </div>
          </div>

          {/* 4 Pipeline Architecture Nodes */}
          <div className="p-6 sm:p-10 border-b border-border-hairline bg-[radial-gradient(#E1DACD_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              
              {/* Node 1: Ingestion */}
              <div className={`p-5 rounded-lg border transition-all ${
                isRunning ? 'border-brand-primary bg-brand-tint/20 scale-102' : 'border-border-hairline bg-white'
              }`}>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-muted">
                  <span>NODE // 01</span>
                  <Server className="w-4 h-4 text-brand-primary" />
                </div>
                <h4 className="font-sans font-bold text-sm text-slate-primary mb-1">Ingestion Gateway</h4>
                <p className="text-[11px] text-slate-muted leading-tight">
                  Air-gapped VPC webhook receiving raw streams.
                </p>
                <div className="mt-3 pt-2 border-t border-border-hairline/60 text-[10px] font-mono text-emerald-700 font-semibold">
                  ● Status: Active Ingest
                </div>
              </div>

              {/* Node 2: State Machine */}
              <div className={`p-5 rounded-lg border transition-all ${
                isRunning ? 'border-brand-primary bg-brand-tint/20 scale-102' : 'border-border-hairline bg-white'
              }`}>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-muted">
                  <span>NODE // 02</span>
                  <Cpu className="w-4 h-4 text-brand-primary" />
                </div>
                <h4 className="font-sans font-bold text-sm text-slate-primary mb-1">Agent Graph Parser</h4>
                <p className="text-[11px] text-slate-muted leading-tight">
                  AST extraction & multi-model reasoning nodes.
                </p>
                <div className="mt-3 pt-2 border-t border-border-hairline/60 text-[10px] font-mono text-slate-secondary font-semibold">
                  ● In-Memory Execution
                </div>
              </div>

              {/* Node 3: Schema Judge */}
              <div className={`p-5 rounded-lg border transition-all ${
                activeScenario.type === 'fallback' 
                  ? 'border-amber-400 bg-amber-50/50' 
                  : activeScenario.type === 'scrubbed'
                  ? 'border-sky-400 bg-sky-50/50'
                  : 'border-brand-primary bg-brand-tint/30'
              }`}>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-muted">
                  <span>NODE // 03</span>
                  <ShieldCheck className="w-4 h-4 text-brand-primary" />
                </div>
                <h4 className="font-sans font-bold text-sm text-slate-primary mb-1">Deterministic Judge</h4>
                <p className="text-[11px] text-slate-muted leading-tight">
                  Strict typed verification & zero hallucination check.
                </p>
                <div className={`mt-3 pt-2 border-t border-border-hairline/60 text-[10px] font-mono font-bold ${
                  activeScenario.type === 'fallback' ? 'text-amber-800' : 'text-brand-primary'
                }`}>
                  {activeScenario.type === 'fallback' ? '⚠️ Confidence < 99.5%' : '✓ Verification Passed'}
                </div>
              </div>

              {/* Node 4: Commit / Fallback */}
              <div className={`p-5 rounded-lg border transition-all ${
                activeScenario.type === 'fallback' 
                  ? 'border-amber-400 bg-amber-50' 
                  : 'border-emerald-500 bg-emerald-50/40'
              }`}>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-muted">
                  <span>NODE // 04</span>
                  <Database className="w-4 h-4 text-slate-primary" />
                </div>
                <h4 className="font-sans font-bold text-sm text-slate-primary mb-1">
                  {activeScenario.type === 'fallback' ? 'Audited Queue' : 'Production Commit'}
                </h4>
                <p className="text-[11px] text-slate-muted leading-tight">
                  {activeScenario.type === 'fallback' 
                    ? 'Dispatched to human operator with annotations.' 
                    : 'Direct transactional write to core database.'}
                </p>
                <div className="mt-3 pt-2 border-t border-border-hairline/60 text-[10px] font-mono text-slate-primary font-bold">
                  {activeScenario.type === 'fallback' ? '● Human-In-The-Loop' : '● Direct In-VPC Write'}
                </div>
              </div>

            </div>
          </div>

          {/* Lower Diagnostic Log Terminal */}
          <div className="p-6 bg-[#08281D] text-white font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-[11px] text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>TRAO EXECUTION ENGINE TRACE • LIVE VPC INSTANCE #049</span>
              </div>
              <span className="text-emerald-400 font-semibold">{activeScenario.statusText}</span>
            </div>

            <div className="space-y-1.5 py-1">
              <div className="text-white/40 text-[11px] mb-2 truncate">
                <span className="text-emerald-400">INPUT &gt; </span>
                {activeScenario.inputSnippet}
              </div>

              {activeScenario.logTrace.map((log, i) => (
                <div key={i} className="leading-relaxed flex items-start gap-2">
                  <span className="text-brand-primary select-none">&gt;</span>
                  <span className={log.includes('WARNING') || log.includes('FALLBACK') ? 'text-amber-300 font-semibold' : log.includes('COMMIT') ? 'text-emerald-300 font-semibold' : 'text-white/80'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
