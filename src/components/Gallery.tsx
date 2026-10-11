import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { SALON_GALLERY, GalleryItem } from '@/src/data/salonData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Haircuts',
    'Beard Transformations',
    'Barber Tools',
    'Salon Interiors',
    'Grooming Looks',
  ];

  const filteredItems = activeCategory === 'All'
    ? SALON_GALLERY
    : SALON_GALLERY.filter((item) => item.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;

      if (e.key === 'Escape') {
        setSelectedItemIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedItemIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedItemIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, filteredItems.length]);

  const currentItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            <span>Visual Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] mb-4 font-display uppercase">
            Craftsmanship in <span className="gold-gradient-text">Focus</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F1E8]/75 leading-relaxed font-light">
            A visual showcase of tailored cuts, artisanal beard detailing, and the refined ambiance of modern men's barbering.
          </p>

          {/* Illustrative Notice Pill */}
          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#252525] text-xs text-[#F5F1E8]/60">
            <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Illustrative styling showcase · Actual salon portfolio updates periodically</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium tracking-wider rounded-lg transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-[#080808] font-semibold shadow-md shadow-[#D4AF37]/20'
                  : 'bg-[#171717] text-[#F5F1E8]/70 hover:text-[#F5F1E8] hover:bg-[#252525] border border-[#252525]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-xl overflow-hidden bg-[#171717] border border-[#252525] hover:border-[#D4AF37]/60 cursor-pointer transition-all duration-300 aspect-[4/3] sm:aspect-[3/4]"
              onClick={() => setSelectedItemIndex(idx)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-[#F5F1E8] font-display">
                  {item.title}
                </h4>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#D4AF37]">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/95 backdrop-blur-xl"
            onClick={() => setSelectedItemIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-6 right-6 z-10 p-2 text-[#F5F1E8]/80 hover:text-[#D4AF37] bg-[#171717]/80 hover:bg-[#252525] rounded-full border border-[#252525] transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItemIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
              }}
              className="absolute left-4 sm:left-8 z-10 p-3 text-[#F5F1E8]/80 hover:text-[#D4AF37] bg-[#171717]/80 hover:bg-[#252525] rounded-full border border-[#252525] transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItemIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
              }}
              className="absolute right-4 sm:right-8 z-10 p-3 text-[#F5F1E8]/80 hover:text-[#D4AF37] bg-[#171717]/80 hover:bg-[#252525] rounded-full border border-[#252525] transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full max-h-[85vh] bg-[#171717] rounded-2xl overflow-hidden border border-[#252525] shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-2/3 max-h-[50vh] md:max-h-[80vh] bg-[#080808] flex items-center justify-center overflow-hidden">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:w-1/3 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#252525]">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {currentItem.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#F5F1E8] font-display mt-2 mb-4">
                    {currentItem.title}
                  </h3>
                  <p className="text-sm text-[#F5F1E8]/75 leading-relaxed font-light">
                    {currentItem.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#252525] mt-6">
                  <div className="text-xs text-[#F5F1E8]/50 flex items-center justify-between">
                    <span>{selectedItemIndex! + 1} of {filteredItems.length}</span>
                    <span>CSC Men Salon Collection</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
