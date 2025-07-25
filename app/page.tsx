import { Montserrat, Playfair_Display } from 'next/font/google';
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import Location from "./components/Location";
import NearbyAttractions from "./components/NearbyAttractions";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AvailabilityCalendar from "./components/AvailabilityCalendar";
import { Analytics } from "@vercel/analytics/next"

// Font configuration
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  return (
    <div className={`${montserrat.variable} ${playfair.variable} font-sans`}>
      {/* Hero Section */}
      <Hero />

      {/* Analytics Component */}
      <Analytics />

      {/* Gallery Section */}
      <Gallery />

      {/* Facilities Section */}
      <Facilities />

      {/* Location Section */}
      <Location />

      {/* Nearby Attractions Section */}
      <NearbyAttractions />
      
      {/* Availability Calendar Section */}
      <AvailabilityCalendar />

      {/* FAQ Section */}
      <Faq />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}

