import React, { useState } from 'react';
import { Navbar } from '@/src/components/Navbar';
import { Hero } from '@/src/components/Hero';
import { About } from '@/src/components/About';
import { Services } from '@/src/components/Services';
import { Gallery } from '@/src/components/Gallery';
import { WhyChooseUs } from '@/src/components/WhyChooseUs';
import { BookingSection } from '@/src/components/BookingSection';
import { ContactSection } from '@/src/components/ContactSection';
import { Footer } from '@/src/components/Footer';
import { OwnerGuideModal } from '@/src/components/OwnerGuideModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Signature Haircut');
  const [isOwnerGuideOpen, setIsOwnerGuideOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('#booking');
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F1E8] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#F5F1E8]">
      {/* Navigation Bar */}
      <Navbar onBookClick={() => scrollToSection('#booking')} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <Hero
          onBookClick={() => scrollToSection('#booking')}
          onExploreClick={() => scrollToSection('#services')}
        />

        {/* About Section */}
        <About />

        {/* Curated Grooming Services */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* Visual Portfolio Gallery */}
        <Gallery />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* WhatsApp Appointment Booking */}
        <BookingSection
          preselectedService={selectedService}
          onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
        />

        {/* Contact & Location */}
        <ContactSection onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />
      </main>

      {/* Professional Footer */}
      <Footer
        onNavClick={scrollToSection}
        onSelectService={handleSelectServiceFromCard}
        onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
      />

      {/* Owner Setup Guide Modal */}
      <OwnerGuideModal
        isOpen={isOwnerGuideOpen}
        onClose={() => setIsOwnerGuideOpen(false)}
      />
    </div>
  );
}
