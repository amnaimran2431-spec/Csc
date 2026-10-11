/**
 * CSC Men Salon - Master Salon Configuration
 * 
 * NOTE FOR THE SALON OWNER:
 * To customize your salon contact details, simply edit the values below.
 * Once you provide your real WhatsApp number, phone, address, and Google Maps embed,
 * all booking buttons, call buttons, and map widgets will instantly become live!
 */

export interface SalonConfiguration {
  salonName: string;
  tagline: string;
  city: string;
  country: string;
  currency: string;
  
  // Contact details - placeholders until supplied by the owner
  exactAddress: string;
  phone: string;
  whatsappNumber: string; // e.g. "923001234567" (country code without + or leading zero for wa.me)
  openingHours: string;
  
  // Google Maps Embed URL or Link (empty or placeholder until provided)
  googleMapsEmbedUrl: string;
  googleMapsShareUrl: string;

  // Social links (empty until configured)
  instagramUrl: string;
  facebookUrl: string;

  // Pricing configuration: set to true once official prices in PKR are provided
  hasOfficialPriceList: boolean;
}

export const SALON_CONFIG: SalonConfiguration = {
  salonName: "CSC Men Salon",
  tagline: "Your Style. Our Masterpiece.",
  city: "Lahore",
  country: "Pakistan",
  currency: "PKR",

  // Clear placeholders as instructed - Owner to configure
  exactAddress: "[OWNER TO PROVIDE]",
  phone: "[OWNER TO PROVIDE]",
  whatsappNumber: "[OWNER TO PROVIDE]", // Example once configured: "923001234567"
  openingHours: "[OWNER TO PROVIDE]",

  googleMapsEmbedUrl: "", // Provide Google Maps iframe embed src here
  googleMapsShareUrl: "", // Provide Google Maps location link here

  instagramUrl: "",
  facebookUrl: "",

  hasOfficialPriceList: false, // Remains false until salon owner enters their official rate card
};

/**
 * Checks whether a given configuration field has been provided or is still a placeholder.
 */
export function isConfigured(value: string | undefined | null): boolean {
  if (!value) return false;
  const trimmed = value.trim();
  if (trimmed === "" || trimmed.startsWith("[OWNER TO PROVIDE]") || trimmed.includes("OWNER TO PROVIDE")) {
    return false;
  }
  return true;
}

/**
 * Generates an encoded WhatsApp URL for an appointment request.
 * Returns null if the WhatsApp number is not yet configured.
 */
export function generateWhatsAppBookingUrl(booking: {
  customerName: string;
  phoneNumber: string;
  serviceTitle: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes?: string;
}): { url: string | null; isReady: boolean; rawMessage: string } {
  const lines = [
    `*Appointment Request - ${SALON_CONFIG.salonName}*`,
    ``,
    `Hello CSC Men Salon, I would like to book a grooming appointment:`,
    ``,
    `👤 *Name:* ${booking.customerName.trim()}`,
    `📞 *Client Phone:* ${booking.phoneNumber.trim()}`,
    `✂️ *Service:* ${booking.serviceTitle}`,
    `📅 *Preferred Date:* ${booking.preferredDate}`,
    `⏰ *Preferred Time:* ${booking.preferredTime}`,
  ];

  if (booking.additionalNotes && booking.additionalNotes.trim()) {
    lines.push(`📝 *Notes:* ${booking.additionalNotes.trim()}`);
  }

  lines.push(``);
  lines.push(`_Sent via CSC Men Salon Web Booking (Awaiting confirmation from salon desk)_`);

  const rawMessage = lines.join("\n");
  const encodedText = encodeURIComponent(rawMessage);

  if (!isConfigured(SALON_CONFIG.whatsappNumber)) {
    return {
      url: null,
      isReady: false,
      rawMessage,
    };
  }

  // Clean WhatsApp number (remove +, spaces, hyphens)
  const sanitizedNumber = SALON_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  return {
    url: `https://wa.me/${sanitizedNumber}?text=${encodedText}`,
    isReady: true,
    rawMessage,
  };
}
