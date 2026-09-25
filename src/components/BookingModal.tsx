import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '$50M - $250M',
    bottleneck: 'Manual Process & Document Extraction',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-xl border border-border-hairline bg-white shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-muted hover:text-slate-primary p-1.5 rounded-full hover:bg-canvas-subtle transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Screen */
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-brand-tint border border-brand-primary/20 text-brand-primary flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-primary mb-2">
              Architecture Review Scheduled
            </h3>
            <p className="text-sm text-slate-secondary mb-6 leading-relaxed">
              We have received your briefing. A systems architect from our San Jose team will review your technical parameters and send calendar invitations and our mutual NDA within 24 hours.
            </p>
            <div className="p-4 rounded-lg bg-canvas-subtle border border-border-hairline text-left text-xs font-mono text-slate-secondary mb-6 space-y-1">
              <div><strong className="text-slate-primary">Contact:</strong> {formData.email}</div>
              <div><strong className="text-slate-primary">Company:</strong> {formData.company || 'Enterprise Partner'}</div>
              <div><strong className="text-slate-primary">Direct Escalation:</strong> talent@trao.ai</div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded bg-brand-primary text-white text-xs font-mono font-semibold hover:bg-brand-hover transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-primary font-semibold uppercase mb-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Direct Engineering Review</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-primary">
                Book a 30-Minute Architecture Review
              </h3>
              <p className="text-xs sm:text-sm text-slate-muted mt-1 leading-relaxed">
                Connect directly with a Trao systems engineer. Mutual NDA executed prior to discovery.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-slate-primary font-semibold mb-1 uppercase">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Dr. Alex Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded border border-border-hairline bg-canvas-subtle text-slate-primary focus:bg-white focus:outline-none focus:border-brand-primary text-xs font-sans"
                />
              </div>

              <div>
                <label className="block text-slate-primary font-semibold mb-1 uppercase">Work Email</label>
                <input
                  required
                  type="email"
                  placeholder="alex@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded border border-border-hairline bg-canvas-subtle text-slate-primary focus:bg-white focus:outline-none focus:border-brand-primary text-xs font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-primary font-semibold mb-1 uppercase">Company / Org</label>
                  <input
                    required
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-border-hairline bg-canvas-subtle text-slate-primary focus:bg-white focus:outline-none focus:border-brand-primary text-xs font-sans"
                  />
                </div>

                <div>
                  <label className="block text-slate-primary font-semibold mb-1 uppercase">Annual Scale</label>
                  <select
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full px-3 py-2.5 rounded border border-border-hairline bg-canvas-subtle text-slate-primary focus:bg-white focus:outline-none focus:border-brand-primary text-xs font-sans"
                  >
                    <option>$10M – $50M</option>
                    <option>$50M – $250M</option>
                    <option>$250M – $1B+</option>
                    <option>Single-Family Office / Fund</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-primary font-semibold mb-1 uppercase">Primary Operational Bottleneck</label>
                <select
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full px-3 py-2.5 rounded border border-border-hairline bg-canvas-subtle text-slate-primary focus:bg-white focus:outline-none focus:border-brand-primary text-xs font-sans"
                >
                  <option>Manual Process & Document Extraction</option>
                  <option>Multi-Agent Operational Automation</option>
                  <option>Private Enterprise RAG & Knowledge Base</option>
                  <option>Legacy ERP / Internal System Re-engineering</option>
                  <option>Custom Architectural Research</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded bg-brand-primary text-white text-xs font-mono font-semibold hover:bg-brand-hover transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Confirm Architecture Review Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-1.5 text-[10px] text-slate-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                <span>Strict Non-Disclosure Guarantee • No Sales Spam</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
