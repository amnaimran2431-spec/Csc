import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Copy, Settings, ShieldCheck, MapPin, Phone, MessageSquare, Globe, ExternalLink } from 'lucide-react';

interface OwnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerGuideModal: React.FC<OwnerGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const sampleSnippet = `// Located at: src/config/salonConfig.ts

export const SALON_CONFIG: SalonConfiguration = {
  salonName: "CSC Men Salon",
  tagline: "Your Style. Our Masterpiece.",
  city: "Lahore",
  country: "Pakistan",
  currency: "PKR",

  // 1. Enter your exact address in Lahore:
  exactAddress: "Shop #4, Main Boulevard, Gulberg III, Lahore",

  // 2. Enter your reception phone number:
  phone: "+92 42 35789000",

  // 3. Enter your WhatsApp number in international format (without +):
  whatsappNumber: "923001234567",

  // 4. Enter your operational hours:
  openingHours: "Mon - Sun: 11:00 AM – 10:00 PM",

  // 5. Google Maps iframe embed src (from Google Maps -> Share -> Embed a map):
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=...",
  googleMapsShareUrl: "https://maps.app.goo.gl/...",

  instagramUrl: "https://instagram.com/cscmensalon",
  facebookUrl: "https://facebook.com/cscmensalon",

  hasOfficialPriceList: false, // Set to true once official prices are set
};`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/90 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-[#171717] rounded-3xl border border-[#D4AF37]/40 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#252525] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#080808] text-[#D4AF37] border border-[#D4AF37]/30">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#F5F1E8] font-display">
                  Salon Owner Configuration Guide
                </h3>
                <p className="text-xs text-[#D4AF37]">
                  Customize your Lahore salon details in under 2 minutes
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#F5F1E8]/70 hover:text-[#F5F1E8] rounded-lg hover:bg-[#252525]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#F5F1E8]/80">
            <div className="p-4 rounded-xl bg-[#080808] border border-[#252525] space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Centralized Configuration File</span>
              </h4>
              <p className="text-xs text-[#F5F1E8]/70 leading-relaxed">
                All salon details (WhatsApp number, phone, exact address, hours, and map) are managed in a single, safe file:
                <code className="text-[#D4AF37] bg-[#171717] px-2 py-0.5 rounded mx-1 font-mono">
                  src/config/salonConfig.ts
                </code>
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8] font-semibold">
                Quick Setup Steps:
              </h4>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#080808] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shrink-0 font-bold">1</span>
                  <p><strong>Add your WhatsApp Number:</strong> Set <code className="text-[#D4AF37]">whatsappNumber</code> to your Pakistani number (e.g. <code>"923001234567"</code>). Once set, all WhatsApp booking and chat buttons become active immediately.</p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#080808] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shrink-0 font-bold">2</span>
                  <p><strong>Set Exact Address & Phone:</strong> Update <code className="text-[#D4AF37]">exactAddress</code> (e.g. Gulberg, DHA, MM Alam Road) and <code className="text-[#D4AF37]">phone</code>.</p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#080808] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shrink-0 font-bold">3</span>
                  <p><strong>Add Google Maps:</strong> Go to Google Maps for your salon location, click <em>Share &rarr; Embed a map</em>, and paste the iframe URL into <code className="text-[#D4AF37]">googleMapsEmbedUrl</code>.</p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#080808] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shrink-0 font-bold">4</span>
                  <p><strong>Deploying to Netlify:</strong> The codebase already contains <code className="text-[#D4AF37]">netlify.toml</code> configured for instant GitHub-to-Netlify deployment with standard production build.</p>
                </div>
              </div>
            </div>

            {/* Code Snippet */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#F5F1E8]/60 font-mono">
                  Sample Configuration Example
                </span>
                <button
                  type="button"
                  onClick={handleCopySnippet}
                  className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline"
                >
                  {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSnippet ? 'Copied to Clipboard' : 'Copy Example'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-[#080808] border border-[#252525] text-xs text-[#F5F1E8]/90 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                {sampleSnippet}
              </pre>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-6 border-t border-[#252525] flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#080808] bg-[#D4AF37] hover:bg-[#E5C358] transition-colors"
            >
              Close Guide
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
