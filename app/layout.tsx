import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  title: "Tuah Suci Homestay Kedah - Homestay Terbaik di Pokok Sena",
  description: "Homestay mewah di Kedah dengan 3 bilik tidur, kolam renang, dan pemandangan indah. Lokasi strategik di Pokok Sena, berhampiran tarikan popular. Tempah sekarang!",
  keywords: [
    "homestay kedah", "homestay pokok sena", "penginapan kedah", 
    "homestay kolam renang", "homestay keluarga kedah", "Tuah Suci Homestay",
    "homestay alor setar", "penginapan murah kedah", "homestay swimming pool kedah"
  ],
  authors: [{ name: "Tuah Suci Homestay" }],
  creator: "Tuah Suci Homestay",
  publisher: "Tuah Suci Homestay",
  metadataBase: new URL("https://tuahcemerlang.vercel.app"),
  alternates: {
    canonical: "https://tuahcemerlang.vercel.app"
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: "https://tuahcemerlang.vercel.app",
    title: "Tuah Suci Homestay Kedah - Homestay Terbaik di Pokok Sena",
    description: "Homestay mewah dengan 3 bilik tidur, kolam renang dan pemandangan indah di Kedah. Lokasi strategik di Pokok Sena dengan kemudahan moden.",
    siteName: "Tuah Suci Homestay",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Tuah Suci Homestay - Homestay mewah dengan kolam renang di Kedah"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuah Suci Homestay Kedah - Homestay Terbaik di Pokok Sena",
    description: "Homestay mewah dengan 3 bilik tidur, kolam renang dan pemandangan indah di Kedah",
    images: ["/hero-image.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-site-verification-code-here"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="Homestay" />
        <meta name="theme-color" content="#27548A" />
        <meta name="msapplication-TileColor" content="#27548A" />
        <link rel="canonical" href="https://tuahcemerlang.vercel.app" />
        <StructuredData type="homepage" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
