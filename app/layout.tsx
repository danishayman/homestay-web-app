import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tuah Cemerlang Homestay",
  description: "Nikmati pengalaman menginap yang unik di Tuah Cemerlang Homestay, Kedah. Dikelilingi oleh pemandangan indah dan kemudahan moden.",
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
