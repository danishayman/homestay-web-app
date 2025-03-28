import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melah Inn Homestay",
  description: "Experience the perfect blend of modern comfort and traditional charm at our homestay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
    
  );
}
