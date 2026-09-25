import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      q: "How does Trao ensure models don't hallucinate on mission-critical business data?",
      a: "We do not rely on raw model completions for critical logic. We architect deterministic validation loops: every output is checked against typed schemas, cross-referenced with your authoritative database of record, and evaluated by automated judge models. If confidence does not exceed our strict threshold (typically 99.5%), the system gracefully triggers an audited human-in-the-loop fallback.",
    },
    {
      q: "Where will our sensitive enterprise data live during and after development?",
      a: "Inside your secure boundary. We build natively on your existing cloud provider (AWS, GCP, Azure, or private cloud). We utilize zero-data-retention APIs and enterprise private endpoints. Trao never stores your production data on our servers.",
    },
    {
      q: "How does this differ from hiring a traditional IT consultancy or generic software agency?",
      a: "Consultancies give you PowerPoint slides; agencies give you prototypes that break in production. Trao is an embedded engineering lab. Our engineers have scaled products to millions of active users and founded venture-backed companies. We write production software directly in your repositories, build automated test infrastructure, and stay embedded through live deployment.",
    },
    {
      q: "Can Trao integrate with legacy, on-premise, or non-API systems?",
      a: "Yes. A substantial portion of our work involves interfacing with legacy ERPs, AS400 databases, on-premise SAP installations, and proprietary file structures. We build resilient adapters and middleware to bridge legacy infrastructure to modern AI models.",
    },
    {
      q: "What happens after the system is live in production?",
      a: "Every deployment includes 90 days of full production hypercare—monitoring error budgets, latency, and system drift. Post-hypercare, you can retain our engineering pod for ongoing roadmap acceleration, or take over internally with our comprehensive architecture documentation and handover training. You own 100% of the code from day one.",
    },
    {
      q: "How are enterprise engagements structured and priced?",
      a: "Engagements are scoped around dedicated engineering pods with clear, milestone-based deliverables. We do not bill ambiguous hourly rates; we price based on architectural outcomes, security SLAs, and delivery timelines agreed upon in the initial architecture review.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-border-hairline bg-canvas-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-hairline bg-canvas-elevated text-brand-primary text-xs font-mono uppercase mb-4">
            <span>07 // Technical FAQ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-primary tracking-tight leading-tight mb-4">
            Pre-empting the hard questions.
          </h2>
          <p className="text-sm sm:text-base text-slate-secondary font-normal">
            Direct, unvarnished answers about security, architecture, and deployment logistics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-border-hairline border-t border-b border-border-hairline">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl font-semibold text-slate-primary group-hover:text-brand-primary transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-border-hairline flex items-center justify-center text-brand-primary shrink-0 group-hover:border-brand-primary transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 pr-12 text-sm sm:text-base text-slate-secondary leading-relaxed font-normal animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 text-xs font-mono text-slate-muted">
          Have an architectural question not covered here? Reach our systems leads directly at{' '}
          <a href="mailto:talent@trao.ai" className="text-brand-primary underline hover:text-brand-hover">
            talent@trao.ai
          </a>
        </div>

      </div>
    </section>
  );
};
