import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Armchair, Crown } from 'lucide-react';
import { WHY_CHOOSE_FEATURES } from '@/src/data/salonData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'Armchair':
        return <Armchair className="w-6 h-6 text-[#D4AF37]" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            <span>The CSC Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] mb-4 font-display uppercase">
            Why Choose <span className="gold-gradient-text">CSC Men Salon</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F1E8]/75 leading-relaxed font-light">
            Crafted for the modern gentleman who refuses to compromise on grooming standards and personal confidence.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 rounded-2xl bg-[#080808] border border-[#252525] hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#171717] border border-[#252525] group-hover:border-[#D4AF37]/40 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105">
                  {getIcon(feature.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F5F1E8] group-hover:text-[#D4AF37] transition-colors font-display mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#F5F1E8]/70 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>

              {/* Subtle Bottom Accent Indicator */}
              <div className="w-8 h-0.5 bg-[#252525] group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-300 mt-6" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
