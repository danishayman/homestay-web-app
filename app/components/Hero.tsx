import Image from "next/image";
import Link from "next/link";
import ScrollArrow from "./ScrollArrow";

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-img.jpg"
                    alt="Tuah Cemerlang Homestay"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better readability */}
            </div>

            {/* Hero Content - Left Aligned */}
            <div className="relative z-10 flex h-screen px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="flex flex-col justify-center w-full max-w-xl py-12 md:py-20">
                    <div>
                        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight text-shadow select-none cursor-default">
                            <span className="block relative overflow-visible pb-2 hover:text-[#F5EEDC] transition-colors duration-300">Tuah Cemerlang</span>
                            <span className="block text-[#DDA853] relative overflow-visible hover:text-white transition-colors duration-300">Homestay</span>
                        </h1>
                    </div>

                    <div className="flex flex-wrap mt-4 md:mt-6 text-[#F5EEDC] font-semibold tracking-wide font-montserrat select-none cursor-default">
                        <p className="flex items-center text-sm sm:text-base">
                            <span className="mr-2 text-lg">•</span> 3 Bilik Tidur, 2 Bilik Mandi
                        </p>
                    </div>

                    <div className="flex flex-wrap mt-2 text-[#F5EEDC] font-semibold tracking-wide font-montserrat select-none cursor-default">
                        <p className="flex items-center text-sm sm:text-base">
                            <span className="mr-2 text-lg">•</span> Kolam Renang, ATV, Sawah Padi, Dusun
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 w-full sm:w-auto">
                        <Link
                            href="https://wa.me/60174156105?text=Tuah%20Cemerlang%20Homestay%20-%20Saya%20berminat%20untuk%20tempah%20homestay."
                            className="font-montserrat px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-widest text-white bg-[#27548A] rounded-lg shadow-lg hover:bg-[#183B4E] transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0 select-none w-full sm:w-auto text-center cursor-pointer z-10 touch-manipulation"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Tempah Sekarang melalui WhatsApp"
                            role="button"
                        >
                            Tempah Sekarang
                        </Link>
                    </div>

                    {/* Feature highlights */}
                    <div className="flex flex-wrap justify-center max-w-xl gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-10 md:mt-12">
                        {["Pemandangan Indah", "Kemudahan Moden", "Suasana Kampung"].map((feature) => (
                            <div key={feature} className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium tracking-wide bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 font-montserrat select-none cursor-default">
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Arrow Component */}
            <ScrollArrow targetId="gallery" />
        </section>
    );
} 