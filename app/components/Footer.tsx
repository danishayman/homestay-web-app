import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#183B4E] text-white py-8 sm:py-12 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Mobile Footer Logo - Visible only on small screens */}
                <div className="text-center mb-8 sm:hidden">
                    <h3 className="font-playfair text-3xl font-bold text-[#DDA853] mb-2">Tuah Cemerlang</h3>
                    <h4 className="font-montserrat text-xl text-white/90">Homestay</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Column 1: Logo and About */}
                    <div className="hidden sm:block">
                        <div className="mb-4">
                            <h3 className="font-playfair text-2xl font-bold text-[#DDA853] mb-2">Tuah Cemerlang</h3>
                            <h4 className="font-montserrat text-lg text-white/90">Homestay</h4>
                        </div>
                        <p className="text-white/80 text-sm mb-4 font-montserrat">
                            Nikmati penginapan yang selesa dengan pemandangan indah di kawasan kampung. Sesuai untuk percutian keluarga dan kumpulan.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-montserrat font-semibold text-lg mb-4 text-[#F5EEDC] text-center sm:text-left">Pautan Pantas</h3>
                        <nav>
                            <ul className="flex flex-wrap justify-center sm:justify-start gap-3 sm:block sm:space-y-2 font-montserrat">
                                <li className="inline-block sm:block">
                                    <Link href="#gallery" className="text-white/80 hover:text-white text-sm transition-colors duration-300 py-2 px-3 sm:px-0 sm:py-1 block">
                                        Galeri
                                    </Link>
                                </li>
                                <li className="inline-block sm:block">
                                    <Link href="#facilities" className="text-white/80 hover:text-white text-sm transition-colors duration-300 py-2 px-3 sm:px-0 sm:py-1 block">
                                        Kemudahan
                                    </Link>
                                </li>
                                <li className="inline-block sm:block">
                                    <Link href="#location" className="text-white/80 hover:text-white text-sm transition-colors duration-300 py-2 px-3 sm:px-0 sm:py-1 block">
                                        Lokasi
                                    </Link>
                                </li>
                                <li className="inline-block sm:block">
                                    <Link href="#nearby" className="text-white/80 hover:text-white text-sm transition-colors duration-300 py-2 px-3 sm:px-0 sm:py-1 block">
                                        Kawasan Sekitar
                                    </Link>
                                </li>
                                <li className="inline-block sm:block">
                                    <Link href="#faq" className="text-white/80 hover:text-white text-sm transition-colors duration-300 py-2 px-3 sm:px-0 sm:py-1 block">
                                        Soalan Lazim
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="mt-4 sm:mt-0">
                        <h3 className="font-montserrat font-semibold text-lg mb-4 text-[#F5EEDC] text-center sm:text-left">Hubungi Kami</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 justify-center sm:justify-start">
                                <div className="text-[#DDA853] mt-1 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <address className="text-white/80 text-sm not-italic font-montserrat">
                                    Kampung Paya, Jalan Kuala Sungai<br />
                                    Kuala Sungai, 34850 Trong<br />
                                    Perak Darul Ridzuan
                                </address>
                            </div>

                            <div className="flex items-center space-x-3 justify-center sm:justify-start">
                                <div className="text-[#DDA853] flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <Link href="tel:+60174156105" className="text-white/80 hover:text-white text-sm transition-colors duration-300 font-montserrat">
                                    +6017-415 6105
                                </Link>
                            </div>

                            <div className="flex items-center space-x-3 justify-center sm:justify-start">
                                <div className="text-[#DDA853] flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <Link href="mailto:info@tuahcemerlanghomestay.com" className="text-white/80 hover:text-white text-sm transition-colors duration-300 font-montserrat">
                                    info@tuahcemerlanghomestay.com
                                </Link>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="mt-6 text-center sm:text-left">
                            <h4 className="font-montserrat text-sm font-semibold mb-3 text-[#F5EEDC]">Ikuti Kami</h4>
                            <div className="flex space-x-6 justify-center sm:justify-start">
                                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#DDA853] transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </Link>
                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#DDA853] transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </Link>
                                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#DDA853] transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </Link>
                                <Link href="https://wa.me/60174156105?text=Tuah%20Cemerlang%20Homestay%20-%20Saya%20berminat%20untuk%20tempah%20homestay." target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#DDA853] transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 text-center">
                    <p className="text-white/60 text-xs font-montserrat">
                        © {currentYear} Tuah Cemerlang Homestay. Hak Cipta Terpelihara.
                    </p>
                </div>
            </div>
        </footer>
    );
} 