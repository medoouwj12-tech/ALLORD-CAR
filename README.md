# ALLORD CAR - Luxury Limousine Booking Platform 👑🚗

> **الفخامة والراحة في كل رحلة | The Pinnacle of Luxury & Comfort**

A modern, responsive, and luxury limousine and chauffeur booking web platform designed for **ALLORD CAR** (+201114085092) in Egypt.

---

## ✨ Features & Highlights

- **Obsidian & Metallic Gold Theme:** Deep obsidian blacks (`#080808`, `#0D0D0D`), dark charcoal cards, metallic gold gradients, glassmorphism (`backdrop-blur`), and gold glow micro-interactions.
- **Bilingual Support (Arabic & English):**
  - Instant one-click language switcher in navbar and mobile drawer.
  - Native RTL (Right-to-Left) layout for Arabic and LTR for English.
  - Complete translation dictionary covering 140+ UI labels, specs, and form elements.
  - Font switching: `Cairo` & `Tajawal` for Arabic, `Cinzel` & `Outfit` for English.
- **WhatsApp Direct Booking Engine:**
  - Automated ticket formatter compiling trip data (passenger name, phone, service, vehicle, pickup, drop-off, date/time, VIP notes) into an organized WhatsApp message.
  - Directly opens the official contact number: **`+201114085092`** (`https://wa.me/201114085092`).
  - Floating WhatsApp action button with an animated gold halo glow.
- **Core Transport Services:**
  - ✈️ **Airport VIP Transfers (استقبال وتوديع المطارات):** Real-time flight tracking, terminal meet & greet with nameplate.
  - 🛣️ **Intercity Travel (سفريات بين المحافظات):** Cairo, Alexandria, North Coast, Red Sea, Upper Egypt.
  - 💍 **VIP Weddings & Galas (زفاف العرسان والمناسبات):** Floral decoration, chauffeur in formal attire, stretch limousines.
  - 💼 **Corporate Chauffeurs (تأجير لرجال الأعمال):** Flexible hourly or full-day reservations, Wi-Fi, executive privacy.
- **Interactive Fleet Showcase:**
  - Filter by category (**All**, **Sedans**, **VIP SUVs**, **Limousines**).
  - High-res photography, passenger and luggage capacities, and luxury amenity checklists.
  - *"Reserve This Vehicle"* triggers auto-selection in the booking form with smooth scroll.

---

## 📱 Mobile App (PWA & Android APK)

ALLORD CAR is fully configured as an installable mobile application:

1. **Installable PWA (Progressive Web App):**
   - **Android / Chrome / Edge:** Click the **"تثبيت التطبيق 📲 / Install App"** button in the navbar or tap the 3-dot menu and select **"Install App"**. It installs with an app icon on your home screen and launches in full-screen standalone mode without browser URL bars.
   - **iPhone / iPad (iOS Safari):** Tap the **Share** button at the bottom of Safari, scroll down, and tap **"Add to Home Screen"** (إضافة إلى الشاشة الرئيسية).
   - **Offline Mode:** Powered by a Service Worker (`sw.js`) caching assets for lightning-fast launch times.

2. **Automated Android APK Cloud Builder (GitHub Actions):**
   - Every push to this repository triggers `.github/workflows/build-apk.yml`.
   - The workflow compiles a native Android debug APK (`ALLORD-CAR.apk`) on GitHub's cloud runners.
   - Download the APK anytime from the **Actions** tab on GitHub under **Artifacts**!

---

## 🚀 Live Preview & Local Run

Simply open `index.html` in any modern web browser or run a local HTTP server:

```bash
# Python 3
python -m http.server 8000 --directory .
```

Then navigate to `http://localhost:8000`.

---

## 🛠️ Technology Stack

- **Markup:** HTML5 (Semantic, Accessible, SEO-optimized)
- **Styling:** Tailwind CSS (CDN) + Custom Modern CSS3 (`css/style.css`)
- **Typography:** Google Fonts (`Cairo`, `Tajawal`, `Cinzel`, `Outfit`)
- **Icons:** Font Awesome 6.5.1
- **Scripts:** Pure Vanilla JavaScript (`js/translations.js`, `js/app.js`) - No heavy frameworks required.

---

## 📞 Contact ALLORD CAR

- **Phone & WhatsApp:** [+20 111 408 5092](https://wa.me/201114085092)
- **Coverage:** Cairo, Alexandria, North Coast, Sharm El Sheikh, Hurghada, and all Egyptian governorates.
- **Availability:** 24/7 Concierge & Dispatch.

---

© 2025 ALLORD CAR Limousine & VIP Services. All rights reserved.
