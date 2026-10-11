import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Calendar, Sparkles } from 'lucide-react';
import heroImage from '@/src/assets/images/hero_barber_styling_1791722413951.jpg';
import { SALON_CONFIG } from '@/src/config/salonConfig';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Master barber styling a client at CSC Men Salon"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-none opacity-45 sm:opacity-50"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic multi-stop gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-[#080808]/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#080808]/40 to-[#080808]" />
      </div>

      {/* Decorative Gold Light Accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Subtle Luxury Pre-Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D4AF37]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Premier Barber & Grooming Studio · {SALON_CONFIG.city}, {SALON_CONFIG.country}</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F1E8] mb-6 font-display uppercase leading-[1.05]"
        >
          Your Style. <br />
          <span className="gold-gradient-text">Our Masterpiece.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-base sm:text-xl text-[#F5F1E8]/85 font-normal tracking-wide leading-relaxed mb-10"
        >
          Experience Premium Men's Grooming at CSC Men Salon.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <button
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#080808] bg-[#D4AF37] hover:bg-[#E5C358] rounded-md shadow-xl shadow-[#D4AF37]/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Appointment</span>
          </button>

          <button
            type="button"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-wider text-[#F5F1E8] bg-transparent hover:bg-[#171717]/80 border border-[#D4AF37]/50 hover:border-[#D4AF37] rounded-md transition-all duration-300"
          >
            <span>Explore Our Services</span>
          </button>
        </motion.div>

        {/* Refined Quick Trust Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 pt-8 border-t border-[#252525]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#F5F1E8]/70"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>Bespoke Haircuts & Styling</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>Artisanal Beard Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>Skin & Follicle Therapy</span>
          </div>
        </motion.div>
      </div>

      {/* Smooth Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <button
          type="button"
          onClick={onExploreClick}
          aria-label="Scroll to services"
          className="group flex flex-col items-center gap-1.5 text-xs uppercase tracking-widest text-[#F5F1E8]/60 hover:text-[#D4AF37] transition-colors"
        >
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
