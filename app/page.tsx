import { Montserrat, Playfair_Display } from 'next/font/google';
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Facilities from "./components/Facilities";

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

      {/* Gallery Section */}
      <Gallery />

      {/* Facilities Section */}
      <Facilities />
    </div>
  );
}

