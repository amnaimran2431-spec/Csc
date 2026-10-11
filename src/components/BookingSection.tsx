import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Calendar, User, Phone, Clock, FileText, CheckCircle, AlertCircle, Copy, Check, Settings, ExternalLink } from 'lucide-react';
import { SALON_CONFIG, isConfigured, generateWhatsAppBookingUrl } from '@/src/config/salonConfig';
import { SALON_SERVICES } from '@/src/data/salonData';

interface BookingSectionProps {
  preselectedService?: string;
  onOpenOwnerGuide?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService,
  onOpenOwnerGuide,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceTitle, setServiceTitle] = useState(preselectedService || SALON_SERVICES[0].title);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Form error state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // WhatsApp unconfigured dialog state
  const [showConfigNoticeModal, setShowConfigNoticeModal] = useState(false);
  const [generatedMessagePreview, setGeneratedMessagePreview] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Synchronize when preselectedService changes
  useEffect(() => {
    if (preselectedService) {
      setServiceTitle(preselectedService);
    }
  }, [preselectedService]);

  // Set default minimum date as today in YYYY-MM-DD
  const todayString = new Date().toISOString().split('T')[0];

  const timeOptions = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '08:00 PM',
    '09:00 PM',
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!customerName.trim()) {
      newErrors.customerName = 'Please enter your name.';
    } else if (customerName.trim().length < 2) {
      newErrors.customerName = 'Name must be at least 2 characters.';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your contact phone number.';
    } else if (phoneNumber.trim().length < 7) {
      newErrors.phoneNumber = 'Please enter a valid phone number (e.g. 0300-1234567).';
    }

    if (!preferredDate) {
      newErrors.preferredDate = 'Please select your preferred date.';
    }

    if (!preferredTime) {
      newErrors.preferredTime = 'Please select your preferred time.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { url, isReady, rawMessage } = generateWhatsAppBookingUrl({
      customerName,
      phoneNumber,
      serviceTitle,
      preferredDate,
      preferredTime,
      additionalNotes,
    });

    if (isReady && url) {
      // Direct to WhatsApp
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Salon WhatsApp number not configured yet -> Show friendly guidance dialog
      setGeneratedMessagePreview(rawMessage);
      setShowConfigNoticeModal(true);
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessagePreview);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 3000);
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#080808] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            <span>Direct WhatsApp Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8] mb-4 font-display uppercase">
            Reserve Your <span className="gold-gradient-text">Appointment</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F1E8]/75 leading-relaxed font-light">
            Fill in your preferred date and grooming service to generate an instant, formatted WhatsApp booking request for our salon desk.
          </p>
        </div>

        {/* Booking Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#171717] rounded-3xl p-6 sm:p-10 border border-[#252525] shadow-2xl relative"
        >
          {/* Subtle Top Gold Accent */}
          <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Customer Name */}
              <div>
                <label
                  htmlFor="customerName"
                  className="block text-xs uppercase tracking-wider text-[#F5F1E8]/80 font-medium mb-2"
                >
                  Full Name <span className="text-[#D4AF37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#F5F1E8]/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="customerName"
                    type="text"
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (errors.customerName) setErrors({ ...errors, customerName: '' });
                    }}
                    placeholder="e.g. Daniyal Khan"
                    className={`w-full pl-10 pr-4 py-3 bg-[#080808] border ${
                      errors.customerName ? 'border-red-500/80 focus:border-red-500' : 'border-[#252525] focus:border-[#D4AF37]'
                    } rounded-xl text-sm text-[#F5F1E8] placeholder-[#F5F1E8]/30 focus:outline-none transition-colors`}
                  />
                </div>
                {errors.customerName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.customerName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-xs uppercase tracking-wider text-[#F5F1E8]/80 font-medium mb-2"
                >
                  Contact Number <span className="text-[#D4AF37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#F5F1E8]/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                    }}
                    placeholder="e.g. 0300-1234567"
                    className={`w-full pl-10 pr-4 py-3 bg-[#080808] border ${
                      errors.phoneNumber ? 'border-red-500/80 focus:border-red-500' : 'border-[#252525] focus:border-[#D4AF37]'
                    } rounded-xl text-sm text-[#F5F1E8] placeholder-[#F5F1E8]/30 focus:outline-none transition-colors`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label
                htmlFor="serviceTitle"
                className="block text-xs uppercase tracking-wider text-[#F5F1E8]/80 font-medium mb-2"
              >
                Grooming Service <span className="text-[#D4AF37]">*</span>
              </label>
              <select
                id="serviceTitle"
                value={serviceTitle}
                onChange={(e) => setServiceTitle(e.target.value)}
                className="w-full px-4 py-3 bg-[#080808] border border-[#252525] focus:border-[#D4AF37] rounded-xl text-sm text-[#F5F1E8] focus:outline-none transition-colors"
              >
                {SALON_SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} — {s.subtitle}
                  </option>
                ))}
                <option value="Consultation & Custom Styling">Consultation & Custom Styling</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-xs uppercase tracking-wider text-[#F5F1E8]/80 font-medium mb-2"
                >
                  Preferred Date <span className="text-[#D4AF37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#F5F1E8]/40">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    id="preferredDate"
                    type="date"
                    min={todayString}
                    value={preferredDate}
                    onChange={(e) => {
                      setPreferredDate(e.target.value);
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-[#080808] border ${
                      errors.preferredDate ? 'border-red-500/80 focus:border-red-500' : 'border-[#252525] focus:border-[#D4AF37]'
                    } rounded-xl text-sm text-[#F5F1E8] placeholder-[#F5F1E8]/30 focus:outline-none transition-colors`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              {/* Preferred Time */}
              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-xs uppercase tracking-wider text-[#F5F1E8]/80 font-medium mb-2"
                >
                  Preferred Time Slot <span className="text-[#D4AF37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#F5F1E8]/40">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    id="preferredTime"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#080808] border border-[#252525] focus:border-[#D4AF37] rounded-xl text-sm text-[#F5F1E8] focus:outline-none transition-colors"
                  >
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label
                htmlFor="additionalNotes"
                className="block text-xs uppercase tracking-wider text-[#F5F1E8]/80 font-medium mb-2"
              >
                Special Requests or Notes <span className="text-[#F5F1E8]/40 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#F5F1E8]/40">
                  <FileText className="w-4 h-4" />
                </div>
                <textarea
                  id="additionalNotes"
                  rows={3}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="e.g. Beard trim with clean razor lines, or preparing for an upcoming wedding."
                  className="w-full pl-10 pr-4 py-3 bg-[#080808] border border-[#252525] focus:border-[#D4AF37] rounded-xl text-sm text-[#F5F1E8] placeholder-[#F5F1E8]/30 focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl text-sm font-semibold uppercase tracking-wider text-[#080808] bg-[#D4AF37] hover:bg-[#E5C358] transition-all duration-300 shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book via WhatsApp</span>
              </button>
            </div>

            {/* Explanatory disclaimer */}
            <div className="text-center pt-2">
              <p className="text-xs text-[#F5F1E8]/50 leading-relaxed">
                Clicking opens WhatsApp with your pre-formatted appointment request.
                <br />
                <span className="text-[#F5F1E8]/70">Please note:</span> Booking is subject to final confirmation by the CSC Men Salon desk upon response.
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      {/* WhatsApp Setup Notice Modal (When owner hasn't yet put their number) */}
      <AnimatePresence>
        {showConfigNoticeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/90 backdrop-blur-md"
            onClick={() => setShowConfigNoticeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#171717] rounded-2xl border border-[#D4AF37]/40 shadow-2xl max-w-lg w-full p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#080808] text-[#D4AF37] border border-[#D4AF37]/30">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F1E8] font-display">
                    Salon WhatsApp Setup Notice
                  </h3>
                  <p className="text-xs text-[#D4AF37]">
                    Placeholder Active · Awaiting Salon Owner Number
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#F5F1E8]/80 leading-relaxed mb-4">
                The salon owner has not yet configured their official WhatsApp phone number in the application configuration (<code className="text-xs text-[#D4AF37] bg-[#080808] px-1.5 py-0.5 rounded">src/config/salonConfig.ts</code>).
              </p>

              <div className="p-4 rounded-xl bg-[#080808] border border-[#252525] mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#F5F1E8]/70 uppercase tracking-wider">
                    Generated Booking Text Preview
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-1 text-xs text-[#D4AF37] hover:underline"
                  >
                    {copiedMessage ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedMessage ? 'Copied' : 'Copy Text'}</span>
                  </button>
                </div>
                <pre className="text-xs text-[#F5F1E8]/90 font-mono whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                  {generatedMessagePreview}
                </pre>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                {onOpenOwnerGuide && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowConfigNoticeModal(false);
                      onOpenOwnerGuide();
                    }}
                    className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080808] bg-[#D4AF37] hover:bg-[#E5C358] transition-colors"
                  >
                    View Owner Setup Guide
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowConfigNoticeModal(false)}
                  className="w-full sm:w-auto py-2.5 px-5 rounded-lg text-xs font-medium text-[#F5F1E8]/70 hover:text-[#F5F1E8] bg-[#252525] hover:bg-[#252525]/80 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
