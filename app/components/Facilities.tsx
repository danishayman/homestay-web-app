import Image from "next/image";

type FacilityProps = {
    title: string;
    description: string;
    imagePath: string;
};

const Facility = ({ title, description, imagePath }: FacilityProps) => {
    return (
        <div className="flex flex-col items-center p-4 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-[#F5EEDC]/50 flex items-center justify-center">
                    <p className="text-[#183B4E] text-sm font-medium">Image placeholder: {title}</p>
                </div>
                {/* Image component with hover effect */}
                {<Image
                    src={imagePath}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                />}
            </div>
            <h3 className="text-xl font-playfair font-semibold text-[#27548A] mb-2">{title}</h3>
            <p className="text-center text-[#183B4E] font-montserrat text-sm">{description}</p>
        </div>
    );
};

export default function Facilities() {
    const facilitiesList = [
        {
            title: "Kolam Renang",
            description: "Nikmati masa santai berenang di kolam renang untuk dewasa dan kanak-kanak.",
            imagePath: "/facilities/kolam.jpg"
        },
        // {
        //     title: "ATV",
        //     description: "Jelajahi kawasan sekitar dengan menaiki ATV melalui trek yang menarik.",
        //     imagePath: "/facilities/atv.jpg"
        // },
        // {
        //     title: "Dusun Buah",
        //     description: "Nikmati pengalaman unik dengan pemandangan dusun buah-buahan yang menghijau di sekeliling homestay.",
        //     imagePath: "/facilities/dusun.jpg"
        // },
        // {
        //     title: "WiFi Percuma",
        //     description: "Kekal berhubung dengan WiFi berkelajuan tinggi yang tersedia di seluruh homestay.",
        //     imagePath: "/facilities/wifi.jpg"
        // },
        {
            title: "Dapur Memasak",
            description: "Dapur memasak yang lengkap untuk memudahkan tetamu menyediakan hidangan sendiri.",
            imagePath: "/facilities/dapur.jpg"
        },
        {
            title: "Kawasan Sawah Padi",
            description: "Nikmati pengalaman unik dengan pemandangan sawah padi yang menghijau di sekeliling homestay.",
            imagePath: "/facilities/padi.jpg"
        },
        {
            title: "Ruang Santai",
            description: "Ruang istirehat yang selesa untuk menikmati suasana kampung dan pemandangan kolam.",
            imagePath: "/facilities/santai.jpg"
        }
    ];

    return (
        <section id="facilities" className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#F5EEDC]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold text-[#183B4E] mb-4">Kemudahan & Fasiliti</h2>
                    <p className="text-[#183B4E] font-montserrat max-w-2xl mx-auto font-bold">
                        Nikmati pelbagai kemudahan dan fasiliti yang disediakan untuk memastikan penginapan anda selesa dan menyeronokkan.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {facilitiesList.map((facility, index) => (
                        <Facility
                            key={index}
                            title={facility.title}
                            description={facility.description}
                            imagePath={facility.imagePath}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}