import React from 'react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      value: "3 Wks → 45m",
      title: "Manufacturing Turnaround",
      detail: "Textile design-to-production pipeline automated for Vlon",
    },
    {
      value: "$50M+",
      title: "Enterprise Value Unlocked",
      detail: "Quantified operational savings and accelerated pipelines",
    },
    {
      value: "100%",
      title: "Client IP Ownership",
      detail: "All models, weights, and code committed to client Git repos",
    },
    {
      value: "99.98%",
      title: "Production Uptime",
      detail: "Resilient deterministic workflows holding up at 3:00 AM",
    },
  ];

  return (
    <section className="border-b border-border-hairline bg-canvas-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x divide-border-hairline">
          {metrics.map((m, idx) => (
            <div key={idx} className="p-6 sm:p-8 flex flex-col justify-between hover:bg-white/60 transition-colors">
              <div>
                <span className="font-mono text-2xl sm:text-3xl lg:text-[34px] font-bold text-brand-primary tracking-tight block mb-1.5">
                  {m.value}
                </span>
                <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-primary font-mono mb-1">
                  {m.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mt-2">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
