import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Scissors, ShieldCheck, HeartHandshake } from 'lucide-react';
import { aboutBarberImg } from '@/src/data/salonData';
import { SALON_CONFIG } from '@/src/config/salonConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div
        className="absolute top-1/2 -left-48 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Editorial Image with Gold Border Accents */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#252525] group">
              <img
                src={aboutBarberImg}
                alt="Professional barber sculpting hair with precision at CSC Men Salon"
                className="w-full h-[450px] sm:h-[550px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              
              {/* Subtle illustrative badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#171717]/90 backdrop-blur-md border border-[#252525]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#080808] text-[#D4AF37] border border-[#D4AF37]/30">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F1E8] tracking-wide">
                      Dedicated Grooming Sanctum
                    </h4>
                    <p className="text-xs text-[#F5F1E8]/70 mt-0.5">
                      Tailored hair design & beard architecture in {SALON_CONFIG.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Frame Offset */}
            <div
              className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[#D4AF37]/25 rounded-2xl -z-10 pointer-events-none"
              aria-hidden="true"
            />
          </motion.div>

          {/* Column 2: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              <span>About CSC Men Salon</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] mb-6 font-display uppercase leading-tight">
              Where Style <br />
              <span className="gold-gradient-text">Meets Precision</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#F5F1E8]/80 leading-relaxed font-light">
              <p>
                Welcome to <strong className="text-[#F5F1E8] font-medium">CSC Men Salon</strong>, Lahore’s dedicated destination for refined men's grooming. We believe that true grooming is not simply an everyday maintenance routine, but an essential expression of character, confidence, and individuality.
              </p>
              <p>
                From classic scissor cuts and modern low-tapers to sculpted beard profiles and invigorating skincare treatments, our chairs are reserved for gentlemen who value sharp precision, clean aesthetics, and unmatched personal care.
              </p>
              <p>
                Every appointment is approached with attentive listening, personalized consultation, and an unhurried, comfortable atmosphere designed to leave you looking immaculate and feeling renewed.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#252525]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F1E8]">Bespoke Consultation</h4>
                  <p className="text-xs text-[#F5F1E8]/70 mt-1">
                    Cuts and trims shaped around your face structure and natural hair flow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F1E8]">Hygienic Standards</h4>
                  <p className="text-xs text-[#F5F1E8]/70 mt-1">
                    Fresh blades, sanitized tools, and clean single-use linen protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F1E8]">Relaxed Hospitality</h4>
                  <p className="text-xs text-[#F5F1E8]/70 mt-1">
                    An unhurried space tailored for relaxation and revitalizing care.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Scissors className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F1E8]">Contemporary Craft</h4>
                  <p className="text-xs text-[#F5F1E8]/70 mt-1">
                    Combining traditional barbering mastery with modern trends.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
