import Link from "next/link";
import Image from "next/image";

export default function Location() {
  return (
    <section id="location" className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#F5EEDC]/90">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#183B4E] mb-4">Alamat & Lokasi</h2>
          <p className="text-[#27548A] font-montserrat max-w-2xl mx-auto">
            Mudah untuk dicari, senang untuk sampai. Lokasi strategik dengan pemandangan indah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Map Section */}
          <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-lg border-4 border-white">
            <div className="absolute inset-0 bg-[#F5EEDC]/30 flex items-center justify-center">
              <p className="text-[#183B4E] text-sm font-medium">Map placeholder - Akan dimuat dengan Google Maps</p>
            </div>
            
            {/* Google Maps Embed */}
            { 
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.5019550207128!2d100.45104873829598!3d6.130174798464183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b4f3817f2bc89%3A0x171f1f16f7a2f057!2sKampung%20Telok%20Jamat!5e0!3m2!1sen!2smy!4v1743237281150!5m2!1sen!2smy" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Tuah Cemerlang Homestay Location"
              className="absolute inset-0"
            ></iframe> 
            }
          </div>

          {/* Contact Info */}
          <div className="bg-white/90 p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-playfair font-semibold text-[#27548A] mb-6">Maklumat Perhubungan</h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-[#F5EEDC] p-3 rounded-full mr-4">
                  <div className="w-6 h-6 flex items-center justify-center text-[#27548A]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-[#183B4E]">Alamat</h4>
                  <p className="mt-1 text-[#183B4E]/80 font-montserrat">
                    Tuah Cemerlang Homestay<br />
                    No 124<br />
                    Kampung Teluk Jamat<br />
                    06400 Pokok Sena<br/>
                    Kedah Darul Aman<br/>

                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#F5EEDC] p-3 rounded-full mr-4">
                  <div className="w-6 h-6 flex items-center justify-center text-[#27548A]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-[#183B4E]">Telefon</h4>
                  <p className="mt-1">
                    <Link href="tel:+60174156105" className="text-[#27548A] hover:text-[#183B4E] transition-colors duration-300 font-montserrat">
                      +6017-415 6105
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#F5EEDC] p-3 rounded-full mr-4">
                  <div className="w-6 h-6 flex items-center justify-center text-[#27548A]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-[#183B4E]">Email</h4>
                  <p className="mt-1">
                    <Link href="mailto:info@tuahcemerlang@gmail.com" className="text-[#27548A] hover:text-[#183B4E] transition-colors duration-300 font-montserrat">
                      tuahcemerlang@gmail.com
                    </Link>
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <Link 
                  href="https://www.waze.com/en/live-map/directions/my/kedah/pokok-sena/kampung-telok-jamat?place=ChIJibzyFzhPSzARV_Ci9xYfHxc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 font-montserrat text-sm font-semibold text-white bg-[#27548A] rounded-lg shadow-md hover:bg-[#183B4E] transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19.39 10.74C19 6.38 15.71 3 11.87 3S4.1 6.63 4.1 11.24c0 4.24 2.71 7.97 6.14 9.33 1.43.57 3 .57 4.43 0 3.43-1.36 6.14-5.09 6.14-9.33 0-.18 0-.34-.02-.5z" fill="#1CABE2"></path>
                    <path d="M13.52 14.92c-.14.18-.36.28-.6.28s-.46-.1-.6-.28l-1.21-1.45c-.14-.16-.21-.37-.21-.59 0-.22.07-.42.21-.59l1.21-1.45c.14-.18.36-.28.6-.28s.46.1.6.28c.33.4.28.99-.12 1.32l-.7.84.7.84c.31.38.3 1.03-.08 1.35zm-4.03 2.35c-.4.16-.87-.03-1.03-.43l-1.77-4.26c-.14-.34-.08-.73.15-1.01.4-.48 1.11-.55 1.58-.14.21.17.35.42.39.7l1.77 4.26c.17.4-.03.87-.43 1.03l-.34-.15zm7.85-4.69l-1.77 4.26c-.16.4-.64.59-1.03.43-.4-.17-.6-.64-.43-1.03l1.77-4.26c.04-.28.18-.53.39-.7.48-.4 1.19-.33 1.58.14.24.28.29.67.15 1.01l-.34.15z" fill="#FFF"></path>
                  </svg>
                  Waze
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 