import Image from "next/image";
import Link from "next/link";

type AttractionProps = {
  title: string;
  description: string;
  distance: string;
  imagePath: string;
  linkUrl?: string;
};

const Attraction = ({ title, description, distance, imagePath, linkUrl }: AttractionProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 w-full">
        <div className="absolute inset-0 bg-[#F5EEDC]/50 flex items-center justify-center">
          <p className="text-[#183B4E] text-sm font-medium">Image placeholder: {title}</p>
        </div>
        {/* Uncomment when images are available */}
        {/* <Image 
          src={imagePath} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 hover:scale-110" 
        /> */}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-playfair font-semibold text-[#27548A]">{title}</h3>
          <span className="text-xs bg-[#F5EEDC] text-[#183B4E] px-2 py-1 rounded-full font-montserrat font-medium">
            {distance}
          </span>
        </div>
        <p className="text-[#183B4E]/80 text-sm font-montserrat mb-4">{description}</p>
        
        {linkUrl && (
          <Link 
            href={linkUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#27548A] text-sm font-semibold hover:text-[#183B4E] transition-colors duration-300 flex items-center"
          >
            Lihat di Maps
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default function NearbyAttractions() {
  const attractions = [
    {
      title: "Muzium Padi",
      description: "Menghormati warisan padi Malaysia dengan pameran interaktif mengenai penanaman dan pemprosesan padi.",
      distance: "15 min",
      imagePath: "/attractions/muzium-padi.jpg",
      linkUrl: "https://maps.app.goo.gl/WrV9QKc1xdoVgQ5n7"
    },
    {
      title: "Menara Alor Setar",
      description: "Menara telekomunikasi dan pelancongan setinggi 165.5 meter dengan pemandangan panoramik bandar Alor Setar.",
      distance: "25 min",
      imagePath: "/attractions/menara-alor-setar.jpg",
      linkUrl: "https://maps.app.goo.gl/HHeLyXpf5Rv31iUG9"
    },
    {
      title: "Masjid Zahir",
      description: "Salah satu masjid tertua dan terindah di Malaysia dengan seni bina Islam yang menakjubkan.",
      distance: "25 min",
      imagePath: "/attractions/masjid-zahir.jpg",
      linkUrl: "https://maps.app.goo.gl/88D1MiFZ94rrnFXX8"
    },
    {
      title: "Wat Nikrodharam",
      description: "Kuil Buddha Siam yang indah dengan patung Buddha besar dan seni bina Thai tradisional.",
      distance: "20 min",
      imagePath: "/attractions/wat-nikrodharam.jpg",
      linkUrl: "https://maps.app.goo.gl/HMBbvJYVVzMCBhpH8"
    },
    {
      title: "Dataran Balai Besar",
      description: "Kawasan bersejarah dan pusat aktiviti budaya di jantung bandar Alor Setar.",
      distance: "25 min",
      imagePath: "/attractions/dataran-balai-besar.jpg",
      linkUrl: "https://maps.app.goo.gl/vUwzRXgXxrVHrfRXA"
    },
    {
      title: "Pekan Rabu",
      description: "Pasar tradisional ikonik dengan pelbagai barangan tempatan, kraftangan dan makanan tradisional.",
      distance: "25 min",
      imagePath: "/attractions/pekan-rabu.jpg",
      linkUrl: "https://maps.app.goo.gl/kF6sLGMPPisMX3fv5"
    },
  ];

  return (
    <section id="nearby" className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#F5EEDC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#183B4E] mb-4">Kawasan Sekitar</h2>
          <p className="text-[#27548A] font-montserrat max-w-2xl mx-auto">
            Jelajahi tempat menarik berhampiran Pokok Sena dan Alor Setar yang boleh dilawati semasa menginap di Tuah Cemerlang Homestay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {attractions.map((attraction, index) => (
            <Attraction
              key={index}
              title={attraction.title}
              description={attraction.description}
              distance={attraction.distance}
              imagePath={attraction.imagePath}
              linkUrl={attraction.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 