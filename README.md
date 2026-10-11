# CSC Men Salon — Luxury Men's Grooming & Barber Website

A luxury, fully responsive, production-ready website for **CSC Men Salon**, an artisanal men's grooming and barber salon in **Lahore, Pakistan**.

Built with React, Vite, Tailwind CSS, Lucide icons, and Motion, with seamless **GitHub** and **Netlify** deployment support.

---

## 🌟 Key Features

- **Cinematic Luxury Visual Design**: Deep Black (`#080808`), Charcoal (`#171717`), Luxury Gold (`#D4AF37`), and Cream White (`#F5F1E8`) aesthetic tailored for high-end gentlemen's grooming.
- **Sticky Frosted Header**: Elegant 3-zone navigation bar that transitions from transparent to dark on scroll, with a dedicated mobile drawer menu.
- **Cinematic Hero**: Full-screen visual entrance with high-definition barber styling photography, smooth text entrance animations, and dual CTAs.
- **About CSC Men Salon**: Story of bespoke styling, precision scissor-work, and unhurried hospitality in Lahore.
- **6 Signature Grooming Services**:
  1. Signature Haircut
  2. Beard Styling & Trimming
  3. Hair Styling
  4. Men's Facial
  5. Hair Treatment
  6. Grooming Packages
  - Transparent "Ask for Price (PKR)" designation until official price lists are supplied.
- **Interactive Photo Gallery**: Category filtering (Haircuts, Beard Transformations, Barber Tools, Salon Interiors, Grooming Looks) with zoom effects and a full-screen Lightbox with keyboard navigation.
- **Why Choose CSC Men Salon**: 4 feature pillars (Personalized Grooming, Attention to Detail, Comfortable Experience, Modern Styling).
- **Direct WhatsApp Booking Engine**: Validated booking form that generates an appointment request message formatted for WhatsApp.
  - Safe placeholder fallback: If the owner has not yet entered their WhatsApp number, a friendly configuration dialog appears instead of opening an invalid link.
- **Location & Inquiries**: Lahore location showcase with conditional Google Maps embedding and quick-call actions.
- **Owner Setup Guide Modal**: Built-in guide for the salon owner to customize contact details in under 2 minutes.

---

## ⚙️ Salon Owner Quick Configuration

All salon contact details, phone numbers, WhatsApp, and Google Maps links are stored in a single centralized file:

👉 **`src/config/salonConfig.ts`**

```typescript
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

  // 5. Google Maps iframe embed src:
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=...",
  googleMapsShareUrl: "https://maps.app.goo.gl/...",

  instagramUrl: "https://instagram.com/cscmensalon",
  facebookUrl: "https://facebook.com/cscmensalon",

  hasOfficialPriceList: false, // Set to true once official prices are set
};
```

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to view the website.

3. **Compile and build for production:**
   ```bash
   npm run build
   ```
   The compiled assets will be output to the `dist/` folder.

---

## 🌐 Netlify Deployment

This repository is pre-configured for Netlify deployment via `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Steps to Deploy:
1. Push this project to your GitHub repository.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site" &rarr; "Import an existing project"**.
4. Choose **GitHub** and select your repository.
5. Netlify will auto-detect:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy**. Your luxury salon website will be live in seconds!
