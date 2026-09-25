import React from 'react';
import { ArrowRight, Mail, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 md:py-28 bg-canvas-subtle border-b border-border-hairline relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-hairline bg-canvas-elevated text-brand-primary text-xs font-mono uppercase mb-6">
          <span>Get Started // Technical Review</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-primary tracking-tight leading-tight mb-6">
          Book a 30-minute architecture review <br className="hidden sm:inline" />
          with an engineering lead.
        </h2>

        {/* Narrative */}
        <p className="text-base sm:text-lg text-slate-secondary max-w-2xl mx-auto leading-relaxed font-normal mb-10">
          No business development reps or canned slides. You will speak directly with a senior AI systems engineer to evaluate your bottlenecks, assess feasibility, and review how an embedded pod would execute inside your repo.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded bg-brand-primary text-white text-sm font-semibold hover:bg-brand-hover transition-all flex items-center justify-center gap-2.5 shadow-md cursor-pointer group"
          >
            <span>Schedule Architecture Review</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <a
            href="mailto:talent@trao.ai?subject=Architecture%20Review%20Inquiry"
            className="w-full sm:w-auto px-6 py-4 rounded border border-border-hairline bg-white text-slate-primary text-sm font-semibold hover:bg-canvas-elevated transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-subtle font-mono text-xs"
          >
            <Mail className="w-4 h-4 text-brand-primary" />
            <span>Email Directly: talent@trao.ai</span>
          </a>
        </div>

        {/* Reassurance Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-secondary border-t border-border-hairline/80 pt-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-primary" />
            <span>Mutual NDA Executed First</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-brand-primary" />
            <span>Feasibility in 48 Hours</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-primary" />
            <span>Zero Obligation / Pushy Sales</span>
          </div>
        </div>

      </div>
    </section>
  );
};
