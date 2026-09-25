import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-canvas-base border-t border-border-hairline pt-16 pb-12 text-slate-secondary text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border-hairline">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-brand-primary flex items-center justify-center text-white font-bold">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M12 6v14M8 12h8" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-slate-primary">Trao</span>
            </div>
            
            <p className="text-slate-muted max-w-sm leading-relaxed font-normal">
              Trao is an embedded AI and software R&D lab. We place senior engineers and systems designers inside enterprise teams to research, redesign, and deploy software that survives contact with production.
            </p>

            <div className="font-mono text-[11px] text-slate-muted pt-2 space-y-1">
              <div>Trao Technologies LLP • LLPIN: ACR-4080</div>
              <div>San Jose, CA • London, UK • Bangalore, IN</div>
            </div>
          </div>

          {/* Column 1: Systems */}
          <div>
            <h4 className="font-mono text-xs font-bold text-slate-primary uppercase tracking-wider mb-4">
              Architectural Systems
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#capabilities" className="hover:text-brand-primary transition-colors">Multi-Agent Orchestration</a></li>
              <li><a href="#capabilities" className="hover:text-brand-primary transition-colors">Document Intelligence</a></li>
              <li><a href="#capabilities" className="hover:text-brand-primary transition-colors">Private Enterprise RAG</a></li>
              <li><a href="#capabilities" className="hover:text-brand-primary transition-colors">Core System Re-engineering</a></li>
              <li><a href="#simulator" className="hover:text-brand-primary transition-colors flex items-center gap-1">
                <span>Architecture Simulator</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
              </a></li>
            </ul>
          </div>

          {/* Column 2: Governance */}
          <div>
            <h4 className="font-mono text-xs font-bold text-slate-primary uppercase tracking-wider mb-4">
              Trust & Compliance
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#security" className="hover:text-brand-primary transition-colors">SOC 2 Type II Audits</a></li>
              <li><a href="#security" className="hover:text-brand-primary transition-colors">GDPR & Data Residency</a></li>
              <li><a href="#security" className="hover:text-brand-primary transition-colors">Zero Retention Policy</a></li>
              <li><a href="#security" className="hover:text-brand-primary transition-colors">100% Client IP Ownership</a></li>
              <li><a href="mailto:talent@trao.ai?subject=Trust%20Center" className="hover:text-brand-primary transition-colors">Trust Center Access</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div>
            <h4 className="font-mono text-xs font-bold text-slate-primary uppercase tracking-wider mb-4">
              Engagement
            </h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:talent@trao.ai" className="hover:text-brand-primary transition-colors font-mono">talent@trao.ai</a></li>
              <li><span className="text-slate-muted">1355 S Milpitas Blvd, San Jose, CA</span></li>
              <li><a href="#faq" className="hover:text-brand-primary transition-colors">Technical FAQ</a></li>
              <li><span className="text-slate-muted">90-Day Post-Launch Hypercare</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-muted">
          <div>
            © {new Date().getFullYear()} Trao Technologies LLP. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-primary cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-primary cursor-pointer">Security Terms</span>
            <span className="hover:text-slate-primary cursor-pointer">Honor Code</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
