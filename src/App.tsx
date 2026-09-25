import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { LogoWall } from './components/LogoWall';
import { ProblemSection } from './components/ProblemSection';
import { Capabilities } from './components/Capabilities';
import { ArchitectureSimulator } from './components/ArchitectureSimulator';
import { CaseStudies } from './components/CaseStudies';
import { EmbeddedModel } from './components/EmbeddedModel';
import { SecuritySection } from './components/SecuritySection';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { TelemetryDrawer } from './components/TelemetryDrawer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => setBookingOpen(true);
  const handleCloseBooking = () => setBookingOpen(false);

  return (
    <div className="min-h-screen bg-canvas-base text-slate-primary flex flex-col font-sans selection:bg-brand-tint selection:text-brand-dark">
      {/* Top Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <MetricsBar />
        <LogoWall />
        <ProblemSection />
        <Capabilities />
        <ArchitectureSimulator />
        <CaseStudies />
        <EmbeddedModel />
        <SecuritySection />
        <FAQ />
        <CTASection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Global Enterprise Footer */}
      <Footer />

      {/* "One Last Thing": 3:00 AM Production Telemetry Terminal */}
      <TelemetryDrawer />

      {/* Architecture Review Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
    </div>
  );
};

export default App;
