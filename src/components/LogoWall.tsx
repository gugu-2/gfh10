import React from 'react';

export const LogoWall: React.FC = () => {
  const logos = [
    { name: "Commonwealth Bank", category: "Tier-1 Banking", symbol: "CommBank" },
    { name: "Vlon Industrial", category: "Manufacturing & Supply", symbol: "VLON" },
    { name: "Oply Logistics", category: "Global Recruitment", symbol: "OPLY" },
    { name: "Avencera", category: "Enterprise Intelligence", symbol: "AVENCERA" },
    { name: "Second Sense", category: "Cognitive Automation", symbol: "SECOND SENSE" },
    { name: "EHS Global", category: "Industrial Safety", symbol: "EHS" },
  ];

  return (
    <section className="py-12 md:py-16 border-b border-border-hairline bg-canvas-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-center text-xs font-mono font-medium tracking-widest text-slate-muted uppercase mb-8">
          Trusted by Engineering & Operations Leaders At
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="h-16 rounded border border-border-hairline/80 bg-white/70 flex flex-col items-center justify-center p-3 text-center transition-all hover:border-brand-primary/50 hover:bg-white hover:shadow-subtle group"
            >
              <span className="font-sans font-bold text-sm text-slate-primary tracking-wider group-hover:text-brand-primary transition-colors">
                {logo.symbol}
              </span>
              <span className="text-[10px] font-mono text-slate-muted group-hover:text-slate-secondary">
                {logo.category}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-muted mt-8">
          Running in production across tier-1 financial infrastructure, high-frequency logistics, regulated manufacturing, and enterprise data operations.
        </p>
      </div>
    </section>
  );
};
