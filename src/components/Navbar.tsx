import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF7]/85 backdrop-blur-md border-b border-border-hairline transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2.5 group">
            {/* Trao Logo Glyph */}
            <div className="w-8 h-8 rounded bg-brand-primary flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M12 6v14M8 12h8" />
              </svg>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-slate-primary">Trao</span>
              <span className="hidden sm:inline-block font-mono text-[11px] text-slate-muted border border-border-hairline px-1.5 py-0.5 rounded bg-canvas-elevated">
                Embedded R&D Lab
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-slate-secondary">
          <a href="#capabilities" className="hover:text-brand-primary transition-colors">
            Capabilities
          </a>
          <a href="#simulator" className="hover:text-brand-primary transition-colors flex items-center gap-1.5">
            Architecture
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
          </a>
          <a href="#case-studies" className="hover:text-brand-primary transition-colors">
            Production Systems
          </a>
          <a href="#model" className="hover:text-brand-primary transition-colors">
            Embedded Model
          </a>
          <a href="#security" className="hover:text-brand-primary transition-colors">
            Security & SOC 2
          </a>
          <a href="#faq" className="hover:text-brand-primary transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Action & Status */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Live Node Status Pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-border-hairline bg-canvas-subtle text-[12px] font-mono text-slate-secondary">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-status-pulse"></span>
            <span>14 Enterprise VPCs Live</span>
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-brand-primary text-white text-[13px] font-semibold hover:bg-brand-hover transition-colors shadow-pill cursor-pointer"
          >
            <span>Book Architecture Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded bg-brand-primary text-white text-xs font-semibold"
          >
            Book Review
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-primary hover:text-brand-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-hairline bg-canvas-base px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-primary">
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-primary py-1"
            >
              Capabilities
            </a>
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-primary py-1 flex items-center justify-between"
            >
              <span>Architecture Simulator</span>
              <span className="text-xs font-mono px-2 py-0.5 bg-brand-tint text-brand-primary rounded">Interactive</span>
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-primary py-1"
            >
              Production Systems
            </a>
            <a
              href="#model"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-primary py-1"
            >
              The Embedded Model
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-primary py-1"
            >
              Security & Compliance
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-primary py-1"
            >
              Technical FAQ
            </a>
          </nav>

          <div className="pt-4 border-t border-border-hairline flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-status-pulse"></span>
              <span>14 Enterprise VPCs Live</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded bg-brand-primary text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Book Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
