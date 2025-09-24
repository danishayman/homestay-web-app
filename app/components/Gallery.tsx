"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const galleryImages = [
    {
        src: '/gallery/image1.jpg',
        alt: 'Ruang tamu luas dan selesa di Tuah Suci Homestay Kedah dengan kerusi empuk dan hiasan moden',
    },
    {
        src: '/gallery/image2.jpg',
        alt: 'Dapur lengkap dengan kemudahan memasak moden di homestay keluarga Pokok Sena Kedah',
    },
    {
        src: '/gallery/image3.jpg',
        alt: 'Ruang tamu homestay dengan pemandangan indah dan suasana kampung yang nyaman di Kedah',
    },
    {
        src: '/gallery/image4.jpg',
        alt: 'Bilik tidur utama dengan katil queen size dan penghawa dingin di homestay kolam renang Kedah',
    },
    {
        src: '/gallery/image5.jpg',
        alt: 'Kolam renang peribadi yang bersih dan selamat untuk keluarga di Tuah Suci Homestay',
    },
        {
        src: '/gallery/image6.jpg',
        alt: 'Ruang makan keluarga yang luas dengan meja besar di homestay Pokok Sena Kedah',
    },
        {
        src: '/gallery/image7.jpg',
        alt: 'Bilik tidur kedua dengan katil single dan kemudahan lengkap di homestay murah Kedah',
    },
        {
        src: '/gallery/image8.jpg',
        alt: 'Bilik tidur ketiga yang selesa dengan pemandangan sawah padi di homestay kampung Kedah',
    },
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setStartX(e.clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        handleSwipe(currentX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        handleSwipe(currentX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleSwipe = (currentX: number) => {
        const diffX = startX - currentX;
        const threshold = 50; // Minimum distance to register a swipe

        if (diffX > threshold) {
            // Swipe left
            setCurrentIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
            setIsDragging(false);
        } else if (diffX < -threshold) {
            // Swipe right
            setCurrentIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
            setIsDragging(false);
        }
    };

    useEffect(() => {
        // Add event listeners to handle swipes even when cursor is outside the component
        const handleGlobalMouseUp = () => {
            setIsDragging(false);
        };

        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
        };
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

                <div
                    className={`relative w-full max-w-4xl mx-auto overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
                    style={{
                        perspective: '1000px',
                        WebkitTapHighlightColor: 'transparent',
                        WebkitTouchCallout: 'none',
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                        userSelect: 'none',
                    }}
                    ref={cardsContainerRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <div className="flex justify-center items-center min-h-[600px] sm:min-h-[750px] relative select-none">
                        {galleryImages.map((image, index) => {
                            // Calculate distance from the current index
                            const distance = (index - currentIndex + galleryImages.length) % galleryImages.length;
                            const normalizedDistance = distance > galleryImages.length / 2
                                ? distance - galleryImages.length
                                : distance;

                            // Apply different styles based on position
                            const isActive = distance === 0;
                            const zIndex = 10 - Math.abs(normalizedDistance);

                            // Determine blur and darkness based on distance
                            const blurAmount = Math.abs(normalizedDistance) * 3; // px
                            const darknessAmount = 0.6 + (Math.abs(normalizedDistance) * 0.15); // 0.6 to 0.9

                            // Only render cards that are visible (current, prev, next)
                            if (Math.abs(normalizedDistance) > 2) return null;

                            return (
                                <div
                                    key={index}
                                    className={`absolute rounded-xl shadow-2xl transition-all duration-300 ease-out ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
                                    style={{
                                        zIndex,
                                        transform: `translateX(${normalizedDistance * 80}px) 
                                scale(${1 - Math.abs(normalizedDistance) * 0.12}) 
                                rotateY(${normalizedDistance * -5}deg)`,
                                        opacity: 1 - Math.abs(normalizedDistance) * 0.3,
                                        filter: !isActive ? `brightness(${1 - Math.abs(normalizedDistance) * 0.3})` : 'none',
                                        WebkitTapHighlightColor: 'transparent',
                                        WebkitTouchCallout: 'none',
                                    }}
                                >
                                    <div className="relative w-[350px] sm:w-[500px] h-[500px] sm:h-[650px] overflow-hidden rounded-xl border-4 border-white bg-white select-none">
                                        {/* Card top part with image */}
                                        <div className={`relative w-full h-[85%] overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}>
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className={`object-cover transition-all duration-300 ${!isActive ? 'blur-[1px]' : ''} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
                                                priority={isActive}
                                                style={{
                                                    filter: !isActive ? `blur(${blurAmount}px)` : 'none',
                                                    pointerEvents: 'none',
                                                }}
                                                draggable="false"
                                                unselectable="on"
                                            />
                                            {/* Image overlay for non-active cards */}
                                            {!isActive && (
                                                <div
                                                    className="absolute inset-0 bg-black transition-opacity duration-300 select-none"
                                                    style={{ opacity: darknessAmount }}
                                                />
                                            )}
                                        </div>

                                        {/* Card bottom part with caption */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-[15%] bg-white p-3 flex items-center justify-center transition-colors duration-300 ${!isActive ? 'bg-gray-100' : ''} select-none`}>
                                            <p className={`text-center font-medium truncate transition-colors duration-300 ${isActive ? 'text-[#27548A]' : 'text-gray-500'} select-none`}>
                                                {image.alt}
                                            </p>
                                        </div>

                                        {/* Card border effect */}
                                        <div className={`absolute inset-0 rounded-xl border pointer-events-none transition-colors duration-300 ${isActive ? 'border-gray-200' : 'border-gray-300'} select-none`} />

                                        {/* Card shadow */}
                                        <div
                                            className="absolute -bottom-6 left-4 right-4 h-4 bg-black/20 blur-md rounded-full z-[-1] select-none"
                                            style={{
                                                opacity: isActive ? 0.5 : 0.2,
                                                transform: `scaleX(${isActive ? 0.9 : 0.7})`
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Swipe indicator */}
                    <div className="mt-8 text-center text-[#183B4E]/80 text-sm select-none">
                        <span>← Swipe to navigate →</span>
                    </div>

                    {/* Image Indicators/Dots */}
                    <div className="mt-4 flex justify-center space-x-4 px-4 py-2 select-none">
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/40'
                                    } select-none`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 