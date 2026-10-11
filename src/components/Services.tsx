import React from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowUpRight, Check, HelpCircle } from 'lucide-react';
import { SALON_SERVICES, ServiceItem } from '@/src/data/salonData';
import { SALON_CONFIG } from '@/src/config/salonConfig';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            <span>Our Service Menu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] mb-4 font-display uppercase">
            Curated Grooming <span className="gold-gradient-text">Experiences</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F1E8]/75 leading-relaxed font-light">
            Every service is executed with bespoke care, specialized products, and surgical attention to detail.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SALON_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#080808] border border-[#252525] hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Subtle Zoom on Hover */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-[#252525]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] bg-[#080808]/90 backdrop-blur-md px-3 py-1 rounded-md border border-[#D4AF37]/30">
                      {service.category}
                    </span>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-[#F5F1E8]/90 bg-[#080808]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#252525]">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#F5F1E8] group-hover:text-[#D4AF37] transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37]/90 mt-1 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-[#F5F1E8]/70 leading-relaxed font-light mb-5">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 border-t border-[#252525] pt-4 mb-4">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#F5F1E8]/80">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Pricing and Book Now Action */}
              <div className="p-6 pt-0 border-t border-[#252525]/80 mt-auto flex items-center justify-between gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-[#F5F1E8]/50">
                    Pricing ({SALON_CONFIG.currency})
                  </span>
                  <div className="inline-flex items-center gap-1 text-sm font-semibold text-[#D4AF37]">
                    <span>Ask for Price</span>
                    <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]/70" />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#080808] bg-[#D4AF37] group-hover:bg-[#E5C358] rounded-md transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                >
                  <span>Book Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note Regarding Pricing */}
        <div className="mt-12 text-center text-xs text-[#F5F1E8]/50 max-w-xl mx-auto">
          Rates in Pakistani Rupees (PKR) are provided upon personal consultation depending on hair length, texture, and selected grooming rituals.
        </div>

      </div>
    </section>
  );
};
