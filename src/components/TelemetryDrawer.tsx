import React, { useState, useEffect } from 'react';
import { Terminal, ChevronUp, ChevronDown, X } from 'lucide-react';

export const TelemetryDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('03:14:02 AM UTC');
  const logs = [
    "[03:13:58] [Vlon-VPC-Prod] Automated yarn tension model completed batch #8491. Latency: 48ms. 0 errors.",
    "[03:14:00] [Oply-Recruit-Cluster] 420 resumes evaluated. 0 PII leakages detected. Schema conformance: 100%.",
    "[03:14:02] [CommBank-Logistics-Node] Sub-100ms vector lookup validated against ERP. Transaction committed.",
    "[03:14:05] [Avencera-Core-VPC] Document extraction agent parsed 1,420 invoices. Zero hallucination fallback triggered: 1.",
    "[03:14:08] [Vlon-VPC-Prod] Prepress color separation CAD file generated. Sent to factory cut machine.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds} UTC`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside aria-label="Live System Telemetry" className="fixed bottom-4 right-4 z-40 font-mono text-xs">
      {/* Drawer Popover */}
      {isOpen ? (
        <div className="w-80 sm:w-96 rounded-xl border border-border-hairline bg-[#08281D] text-white shadow-2xl overflow-hidden mb-2 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/30">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-[11px] text-emerald-400">
                TRAO 3:00 AM PRODUCTION TELEMETRY
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white p-1 rounded"
              aria-label="Close Telemetry Console"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Telemetry Summary Stats */}
          <div className="grid grid-cols-3 divide-x divide-white/10 p-3 bg-white/5 border-b border-white/10 text-[10px]">
            <div className="text-center">
              <span className="text-white/40 block">VPCs Live</span>
              <span className="font-bold text-emerald-300">14 Active</span>
            </div>
            <div className="text-center">
              <span className="text-white/40 block">Avg Latency</span>
              <span className="font-bold text-white">41.8ms</span>
            </div>
            <div className="text-center">
              <span className="text-white/40 block">Uptime SLA</span>
              <span className="font-bold text-emerald-300">99.98%</span>
            </div>
          </div>

          {/* Live Log Stream */}
          <div className="p-3.5 space-y-2 max-h-56 overflow-y-auto text-[10px] leading-relaxed text-white/80">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-1.5 border-b border-white/5 pb-1.5 last:border-0">
                <span className="text-emerald-400 select-none">›</span>
                <span className="font-mono">{log}</span>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-3.5 py-2 bg-black/40 border-t border-white/10 text-[9px] text-white/40 flex items-center justify-between">
            <span>Simulated live trace from client VPC telemetry</span>
            <span className="text-emerald-400 font-bold">ALL SYSTEMS NOMINAL</span>
          </div>
        </div>
      ) : null}

      {/* Persistent Status Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3.5 py-2 rounded-full border border-border-hairline bg-[#FDFCF7]/95 backdrop-blur-md text-slate-primary hover:border-brand-primary shadow-elevated flex items-center gap-2.5 transition-all hover:scale-102 cursor-pointer group"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] font-mono font-medium text-slate-secondary group-hover:text-slate-primary">
          <span className="font-bold text-brand-primary">{time}</span> • 14 Clusters Live
        </span>
        <Terminal className="w-3.5 h-3.5 text-slate-muted group-hover:text-brand-primary" />
        {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-slate-muted" /> : <ChevronUp className="w-3.5 h-3.5 text-slate-muted" />}
      </button>
    </aside>
  );
};
