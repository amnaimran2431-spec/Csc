import heroBarberImg from '@/src/assets/images/hero_barber_styling_1791722413951.jpg';
import aboutBarberImg from '@/src/assets/images/about_barber_craft_1791722433054.jpg';
import haircutImg from '@/src/assets/images/service_haircut_styling_1791722449032.jpg';
import beardImg from '@/src/assets/images/service_beard_grooming_1791722465035.jpg';
import facialImg from '@/src/assets/images/service_facial_treatment_1791722479542.jpg';
import hairTreatmentImg from '@/src/assets/images/service_hair_treatment_1791722526747.jpg';
import packageImg from '@/src/assets/images/service_grooming_package_1791722540018.jpg';
import barberToolsImg from '@/src/assets/images/gallery_barber_tools_1791722559442.jpg';

export {
  heroBarberImg,
  aboutBarberImg,
  haircutImg,
  beardImg,
  facialImg,
  hairTreatmentImg,
  packageImg,
  barberToolsImg,
};

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  image: string;
  category: string;
  highlights: string[];
}

export const SALON_SERVICES: ServiceItem[] = [
  {
    id: "signature-haircut",
    title: "Signature Haircut",
    subtitle: "Precision Tailored Cuts",
    description: "A comprehensive haircut crafted to complement your facial structure, finished with neck taper, hot lather razor cleanup, and bespoke texturizing.",
    duration: "45 mins",
    image: haircutImg,
    category: "Hair",
    highlights: ["Custom Consultation", "Precision Scissor & Clipper Fade", "Hot Lather Neck Shave", "Matte Finish Styling"],
  },
  {
    id: "beard-styling-trimming",
    title: "Beard Styling & Trimming",
    subtitle: "Artisanal Facial Hair Architecture",
    description: "Expert beard sculpting, razor cheek line-up, moustache tapering, and soothing hot towel conditioning infused with essential beard tonics.",
    duration: "35 mins",
    image: beardImg,
    category: "Beard",
    highlights: ["Symmetry Consultation", "Hot Towel Steam", "Straight Razor Detailing", "Botanical Beard Balm"],
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    subtitle: "Event & Everyday Polished Looks",
    description: "Professional blow-dry, volume sculpting, and styling with premium water-soluble pomades, clays, or sea-salt sprays for modern, natural texture.",
    duration: "30 mins",
    image: aboutBarberImg,
    category: "Styling",
    highlights: ["Hair Type Analysis", "Thermal Blow-Dry Sculpting", "Matte or High-Shine Finish", "Longevity Hold Technique"],
  },
  {
    id: "mens-facial",
    title: "Men's Facial",
    subtitle: "Deep Pore Clarifying & Refresh",
    description: "Tailored facial therapy targeting male skin concerns: ultrasonic pore cleansing, exfoliating scrub, blackhead extraction, and relaxing acupressure massage.",
    duration: "50 mins",
    image: facialImg,
    category: "Skin",
    highlights: ["Pore Steam Therapy", "Gentle Micro-Exfoliation", "Clay & Hydrating Mask", "Cooling Calming Mist"],
  },
  {
    id: "hair-treatment",
    title: "Hair Treatment",
    subtitle: "Scalp Renewal & Follicle Therapy",
    description: "Deep restorative scalp therapies, anti-dandruff detox washes, protein keratin conditioning, and invigorating pressure-point scalp stimulation.",
    duration: "45 mins",
    image: hairTreatmentImg,
    category: "Hair Care",
    highlights: ["Scalp Health Evaluation", "Deep Keratin Infusion", "Extended Basin Scalp Massage", "Follicle Strengthening Tonic"],
  },
  {
    id: "grooming-packages",
    title: "Grooming Packages",
    subtitle: "The Complete Gentleman's Ritual",
    description: "Curated multi-service packages including Signature Haircut, Beard Architecture, Detox Facial, and Scalp Care for weddings, milestones, or monthly resets.",
    duration: "90 - 120 mins",
    image: packageImg,
    category: "VIP Rituals",
    highlights: ["Full Signature Cut & Beard Trim", "Express Revitalizing Facial", "Scalp Wash & Deep Conditioning", "Complimentary Refreshment"],
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Haircuts" | "Beard Transformations" | "Barber Tools" | "Salon Interiors" | "Grooming Looks";
  image: string;
  description: string;
}

export const SALON_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Executive Low-Taper Fade",
    category: "Haircuts",
    image: haircutImg,
    description: "A refined side-part fade with seamless transition, styled for modern boardroom and evening elegance.",
  },
  {
    id: "gal-2",
    title: "Sculpted Beard & Sharp Contours",
    category: "Beard Transformations",
    image: beardImg,
    description: "Sharp straight-razor cheek alignment and graduated density fade blending smoothly into sideburns.",
  },
  {
    id: "gal-3",
    title: "Artisanal Grooming Tools & Steels",
    category: "Barber Tools",
    image: barberToolsImg,
    description: "High-grade Japanese convex shears, traditional straight razors, and badger hair shaving brushes.",
  },
  {
    id: "gal-4",
    title: "The Master Cutting Station",
    category: "Salon Interiors",
    image: heroBarberImg,
    description: "Vintage brass mirrors, ergonomic leather recliner chairs, and warm ambient salon lighting.",
  },
  {
    id: "gal-5",
    title: "Relaxation Scalp & Wash Lounge",
    category: "Salon Interiors",
    image: hairTreatmentImg,
    description: "Quiet marble wash basins designed for restorative hair treatments and pressure point therapy.",
  },
  {
    id: "gal-6",
    title: "VIP Executive Styling Experience",
    category: "Grooming Looks",
    image: packageImg,
    description: "Complete personal styling transformation showcasing crisp tailoring and pristine facial hair grooming.",
  },
  {
    id: "gal-7",
    title: "Classic Textured Crop & Scissor Work",
    category: "Haircuts",
    image: aboutBarberImg,
    description: "Hand-crafted scissor-over-comb texturizing for effortlessly stylish movement and daily versatility.",
  },
  {
    id: "gal-8",
    title: "Purifying Skin Therapy & Steam",
    category: "Grooming Looks",
    image: facialImg,
    description: "Gentle male skincare treatments designed to relieve fatigue and restore natural radiance.",
  },
];

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "Sparkles" | "Compass" | "Armchair" | "Crown";
}

export const WHY_CHOOSE_FEATURES: FeatureItem[] = [
  {
    id: "personalized-grooming",
    title: "Personalized Grooming",
    description: "Every cut, trim, and treatment begins with an individual consultation tailored to your unique facial contours, hair texture, and daily lifestyle.",
    iconName: "Compass",
  },
  {
    id: "attention-to-detail",
    title: "Attention to Detail",
    description: "From micro-fade transitions to sharp razor outlines and tailored beard symmetry, we uphold exacting standards of precision in every stroke.",
    iconName: "Sparkles",
  },
  {
    id: "comfortable-experience",
    title: "Comfortable Experience",
    description: "Step into an inviting, premium masculine haven where relaxed hospitality, ergonomic seating, and discreet personal care define your visit.",
    iconName: "Armchair",
  },
  {
    id: "modern-styling",
    title: "Modern Styling",
    description: "Blending timeless traditional barbering techniques with current international styling trends to ensure your look stays effortlessly sharp.",
    iconName: "Crown",
  },
];
