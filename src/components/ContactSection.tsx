import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, AlertCircle, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { SALON_CONFIG, isConfigured } from '@/src/config/salonConfig';

interface ContactSectionProps {
  onOpenOwnerGuide?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenOwnerGuide }) => {
  const [actionAlert, setActionAlert] = useState<string | null>(null);

  const hasRealPhone = isConfigured(SALON_CONFIG.phone);
  const hasRealWhatsApp = isConfigured(SALON_CONFIG.whatsappNumber);
  const hasRealAddress = isConfigured(SALON_CONFIG.exactAddress);
  const hasRealHours = isConfigured(SALON_CONFIG.openingHours);
  const hasRealMap = isConfigured(SALON_CONFIG.googleMapsEmbedUrl);

  const handleCallClick = (e: React.MouseEvent) => {
    if (!hasRealPhone) {
      e.preventDefault();
      setActionAlert("Direct phone number is pending configuration by the salon owner in src/config/salonConfig.ts.");
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!hasRealWhatsApp) {
      e.preventDefault();
      setActionAlert("Official WhatsApp number is pending configuration by the salon owner in src/config/salonConfig.ts.");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            <span>Location & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] mb-4 font-display uppercase">
            Visit CSC <span className="gold-gradient-text">Men Salon</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F1E8]/75 leading-relaxed font-light">
            Conveniently positioned in Lahore, Pakistan. We welcome both reserved appointments and inquiries.
          </p>
        </div>

        {/* Action Alert Banner (if placeholder clicked) */}
        {actionAlert && (
          <div className="max-w-2xl mx-auto mb-8 p-4 rounded-xl bg-[#080808] border border-[#D4AF37]/50 flex items-center justify-between gap-3 text-xs text-[#F5F1E8]">
            <div className="flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{actionAlert}</span>
            </div>
            <button
              type="button"
              onClick={() => setActionAlert(null)}
              className="text-[#D4AF37] hover:underline font-medium shrink-0 ml-2"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Contact Information Cards */}
          <div className="space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#080808] border border-[#252525] hover:border-[#D4AF37]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#171717] text-[#D4AF37] border border-[#252525] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Studio Location
                  </span>
                  <h3 className="text-lg font-bold text-[#F5F1E8] font-display mt-1">
                    {SALON_CONFIG.salonName}
                  </h3>
                  <p className="text-sm text-[#F5F1E8]/90 mt-1 font-medium">
                    {SALON_CONFIG.city}, {SALON_CONFIG.country}
                  </p>
                  <p className="text-xs text-[#F5F1E8]/60 mt-1 font-mono">
                    Exact Address: {SALON_CONFIG.exactAddress}
                  </p>
                  {!hasRealAddress && (
                    <span className="inline-block mt-2 text-[11px] text-[#D4AF37]/80 bg-[#171717] px-2 py-0.5 rounded border border-[#252525]">
                      Editable in src/config/salonConfig.ts
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Direct Lines & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Call Reception */}
              <div className="p-6 rounded-2xl bg-[#080808] border border-[#252525] hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="p-2.5 w-fit rounded-xl bg-[#171717] text-[#D4AF37] border border-[#252525] mb-4">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Phone Reception
                  </span>
                  <p className="text-sm font-semibold text-[#F5F1E8] mt-1 font-mono">
                    {SALON_CONFIG.phone}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#252525]">
                  {hasRealPhone ? (
                    <a
                      href={`tel:${SALON_CONFIG.phone}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-medium hover:underline"
                    >
                      <span>Call Now</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={handleCallClick}
                      className="text-xs text-[#F5F1E8]/50 hover:text-[#D4AF37] transition-colors"
                    >
                      Awaiting phone configuration
                    </button>
                  )}
                </div>
              </div>

              {/* WhatsApp Desk */}
              <div className="p-6 rounded-2xl bg-[#080808] border border-[#252525] hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="p-2.5 w-fit rounded-xl bg-[#171717] text-[#D4AF37] border border-[#252525] mb-4">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                    WhatsApp Desk
                  </span>
                  <p className="text-sm font-semibold text-[#F5F1E8] mt-1 font-mono">
                    {SALON_CONFIG.whatsappNumber}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#252525]">
                  {hasRealWhatsApp ? (
                    <a
                      href={`https://wa.me/${SALON_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-medium hover:underline"
                    >
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="text-xs text-[#F5F1E8]/50 hover:text-[#D4AF37] transition-colors"
                    >
                      Awaiting WhatsApp configuration
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Opening Hours */}
            <div className="p-6 rounded-2xl bg-[#080808] border border-[#252525]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#171717] text-[#D4AF37] border border-[#252525] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Operating Schedule
                  </span>
                  <h4 className="text-base font-bold text-[#F5F1E8] mt-1 font-display">
                    Opening Hours
                  </h4>
                  <p className="text-sm text-[#F5F1E8]/80 mt-1 font-mono">
                    {SALON_CONFIG.openingHours}
                  </p>
                  {!hasRealHours && (
                    <p className="text-xs text-[#F5F1E8]/50 mt-1">
                      Salon schedule will be published once officially designated by the owner.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Owner setup helper link */}
            {onOpenOwnerGuide && (
              <div className="p-4 rounded-xl bg-[#080808]/60 border border-[#252525] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs text-[#F5F1E8]/70">Salon Owner? Configure contact details easily</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenOwnerGuide}
                  className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:underline whitespace-nowrap"
                >
                  Setup Guide
                </button>
              </div>
            )}

          </div>

          {/* Column 2: Google Maps Section */}
          <div className="bg-[#080808] rounded-2xl border border-[#252525] overflow-hidden p-2 sm:p-3 min-h-[420px] flex flex-col">
            {hasRealMap ? (
              <iframe
                title="CSC Men Salon Lahore Location"
                src={SALON_CONFIG.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[400px] rounded-xl border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              /* High-End Lahore Map Placeholder Card */
              <div className="w-full h-full min-h-[400px] rounded-xl bg-[#171717] border border-[#252525] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080808] border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-medium mb-4">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Lahore, Punjab, Pakistan</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F1E8] font-display">
                    Interactive Map Container
                  </h3>
                  <p className="text-xs text-[#F5F1E8]/70 mt-2 leading-relaxed max-w-sm">
                    This interactive Google Maps frame will automatically activate once the salon owner inserts their Google Maps embed URL into <code className="text-[#D4AF37]">SALON_CONFIG.googleMapsEmbedUrl</code>.
                  </p>
                </div>

                <div className="relative z-10 pt-8 border-t border-[#252525] space-y-3">
                  <div className="text-xs text-[#F5F1E8]/60 space-y-1">
                    <div>• <strong>City:</strong> Lahore, Pakistan</div>
                    <div>• <strong>Target District:</strong> [OWNER TO PROVIDE]</div>
                    <div>• <strong>Map Link:</strong> [OWNER TO PROVIDE]</div>
                  </div>

                  {onOpenOwnerGuide && (
                    <button
                      type="button"
                      onClick={onOpenOwnerGuide}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#080808] bg-[#D4AF37] hover:bg-[#E5C358] rounded-lg transition-colors"
                    >
                      <span>How to Add Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
