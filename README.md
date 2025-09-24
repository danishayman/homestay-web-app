# 🏡 Tuah Suci Homestay Website

## ✨ Overview

This is a modern, responsive website for Tuah Suci Homestay, a beautiful homestay in Kedah, Malaysia. The website is designed to showcase the homestay's amenities, nearby attractions, and provide easy booking options for potential guests.

**🔗 Live Website: [https://tuahsuci.vercel.app/](https://tuahsuci.vercel.app/)**

## 🚀 Features

- 🌅 **Beautiful Hero Section** - Captivating header with striking visuals
- 🖼️ **Interactive Gallery** - Showcasing the homestay's rooms and facilities
- 🛋️ **Facilities Showcase** - Highlighting all available amenities
- 📍 **Location Information** - Easy-to-find address and map integration
- 🏞️ **Nearby Attractions** - Information about interesting places to visit
- 📅 **Availability Calendar** - Real-time booking status with Google Calendar integration
- ❓ **FAQ Section** - Answering common questions about the homestay
- 📱 **Mobile-Friendly Design** - Fully responsive for all device sizes
- 💬 **WhatsApp Integration** - Quick booking through WhatsApp

## 🛠️ Tech Stack

- **Next.js** - React framework for production
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS** - For responsive and customizable styling
- **React Hooks** - For interactive UI components

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/danishayman/homestay-web-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd homestay-web-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Project Structure

```
📦 
├─ .gitignore
├─ README.md
├─ app
│  ├─ components
│  │  ├─ Facilities.tsx
│  │  ├─ Faq.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Gallery.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Location.tsx
│  │  ├─ NearbyAttractions.tsx
│  │  ├─ ScrollArrow.tsx
│  │  └─ WhatsAppButton.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ attractions
│  │  └─ images for attraction section
│  ├─ facilities
│  │  └─ images for facility section
│  ├─ file.svg
│  ├─ gallery
│  │  └─ images for  gallery section
│  ├─ globe.svg
│  ├─ hero-img.jpg
│  ├─ next.svg
│  ├─ vercel.svg
│  ├─ waze-logo.png
│  └─ window.svg
└─ tsconfig.json
```

## 📅 Availability Calendar

The availability calendar is a key feature that provides real-time booking status for the homestay:

- **Google Calendar Integration** - Syncs directly with a Google Calendar to show booked dates
- **Color-Coded Dates** - Green for available dates, red for booked dates
- **Month Navigation** - Easy browsing through different months
- **Visual Indicators** - Current day highlighting and responsive design
- **Automatic Updates** - Calendar refreshes when bookings are added/removed in Google Calendar
- **Multiple Language Support** - Interface in Bahasa Malaysia for local users

The implementation uses the Google Calendar API with a service account for secure, read-only access to the booking calendar. Events with "BOOKED" or "TEMPAHAN" in the title automatically appear as unavailable dates in the calendar.

## 📱 Mobile Optimization

This website is fully optimized for mobile devices with:
- Touch-friendly navigation
- Responsive layouts that adapt to screen size
- Optimized images and performance
- Easy-to-tap buttons and links

## 🔄 Deployment
<br>
The website is deployed using <a href="https://vercel.com/">Vercel</a> for continuous integration and delivery.

<br>

---
Made with ❤️ for Tuah Suci Homestay
