import React from 'react';
import { ArrowUp, MapPin, Phone, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { SALON_CONFIG, isConfigured } from '@/src/config/salonConfig';
import { SALON_SERVICES } from '@/src/data/salonData';

interface FooterProps {
  onNavClick: (href: string) => void;
  onSelectService: (serviceTitle: string) => void;
  onOpenOwnerGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onSelectService,
  onOpenOwnerGuide,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
    { label: 'Book Appointment', href: '#booking' },
  ];

  const hasInstagram = isConfigured(SALON_CONFIG.instagramUrl);
  const hasFacebook = isConfigured(SALON_CONFIG.facebookUrl);

  return (
    <footer className="bg-[#080808] border-t border-[#252525] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#252525]">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-[0.2em] text-[#F5F1E8] font-luxury block">
              CSC MEN SALON
            </span>
            <p className="text-xs text-[#D4AF37] uppercase tracking-[0.2em] font-medium">
              {SALON_CONFIG.city}, {SALON_CONFIG.country}
            </p>
            <p className="text-sm text-[#F5F1E8]/70 leading-relaxed font-light">
              A bespoke grooming haven for men who appreciate surgical barber precision, tailored scissor styling, and restorative personal care.
            </p>

            {/* Social links (only if configured) */}
            {(hasInstagram || hasFacebook) && (
              <div className="flex items-center gap-3 pt-2">
                {hasInstagram && (
                  <a
                    href={SALON_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#171717] text-[#F5F1E8]/70 hover:text-[#D4AF37] hover:bg-[#252525] border border-[#252525] transition-colors"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                )}
                {hasFacebook && (
                  <a
                    href={SALON_CONFIG.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#171717] text-[#F5F1E8]/70 hover:text-[#D4AF37] hover:bg-[#252525] border border-[#252525] transition-colors"
                    aria-label="Facebook"
                  >
                    Facebook
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-5 font-luxury">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.href);
                    }}
                    className="text-sm text-[#F5F1E8]/75 hover:text-[#D4AF37] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Grooming Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-5 font-luxury">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SALON_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(s.title)}
                    className="text-sm text-[#F5F1E8]/75 hover:text-[#D4AF37] transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Summary */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-5 font-luxury">
              Salon Desk
            </h4>
            
            <div className="flex items-start gap-3 text-sm text-[#F5F1E8]/75">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                {SALON_CONFIG.city}, {SALON_CONFIG.country}
                <br />
                <span className="text-xs text-[#F5F1E8]/50 font-mono">{SALON_CONFIG.exactAddress}</span>
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#F5F1E8]/75">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-mono">{SALON_CONFIG.phone}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#F5F1E8]/75">
              <MessageSquare className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-mono">WhatsApp: {SALON_CONFIG.whatsappNumber}</span>
            </div>

            {onOpenOwnerGuide && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenOwnerGuide}
                  className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Salon Owner Settings Guide</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F1E8]/50">
          <p>
            Copyright © 2026 {SALON_CONFIG.salonName}. All rights reserved. Lahore, Pakistan.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#F5F1E8]/70 hover:text-[#D4AF37] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
