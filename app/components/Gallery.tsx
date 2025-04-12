"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
    { src: '/gallery/image1.jpg', alt: 'Ruang Tamu' },
    { src: '/gallery/image2.jpg', alt: 'Dapur Memasak' },
    { src: '/gallery/image3.jpg', alt: 'Ruang Tamu' },
    { src: '/gallery/image4.jpg', alt: 'Bilik Tidur' },
    { src: '/gallery/image5.jpg', alt: 'Kolam Renang' },
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % galleryImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="gallery" className="w-full py-16 bg-[#F5EEDC]/90">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-center mb-10 text-[#183B4E] select-none">
                    Galeri
                </h2>
                <p className="text-[#183B4E] font-montserrat max-w-2xl mx-auto font-bold text-center">
                    Lihat keindahan homestay kami melalui gambar-gambar yang memukau. Setiap sudut mempunyai cerita tersendiri.
                </p>

                <div className="relative w-full max-w-4xl mx-auto min-h-[450px] sm:min-h-[550px] flex items-center justify-center overflow-hidden">
                    <AnimatePresence initial={false}>
                        {galleryImages.map((image, index) => (
                            index === currentIndex && (
                                <motion.div
                                    key={index}
                                    className="absolute w-[280px] sm:w-[400px] h-[400px] sm:h-[500px] overflow-hidden rounded-xl border-4 border-white bg-white shadow-2xl"
                                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                >
                                    <div className="relative w-full h-[85%] overflow-hidden">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="h-[15%] bg-white p-3 flex items-center justify-center">
                                        <p className="text-center font-medium text-[#27548A] truncate">
                                            {image.alt}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>

                {/* Image Indicators/Dots */}
                <div className="mt-8 flex justify-center space-x-3 select-none">
                    {galleryImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/40'}`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
