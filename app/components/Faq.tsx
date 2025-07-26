"use client";

import { useState } from 'react';

type FaqItemProps = {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleOpen: () => void;
};

const FaqItem = ({ question, answer, isOpen, toggleOpen }: FaqItemProps) => {
    return (
        <div className="border-b border-[#27548A]/20 last:border-b-0">
            <button
                className="w-full text-left py-4 px-2 flex justify-between items-center focus:outline-none"
                onClick={toggleOpen}
                aria-expanded={isOpen}
            >
                <h3 className="font-montserrat font-semibold text-[#183B4E] text-base sm:text-lg">{question}</h3>
                <svg
                    className={`w-5 h-5 text-[#27548A] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-4 px-2' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-[#183B4E]/80 font-montserrat text-sm sm:text-base">{answer}</p>
            </div>
        </div>
    );
};

export default function Faq() {
    const faqItems = [
        {
            question: " Waktu Check-In / Check-Out?",
            answer: "🕒 Masa Check in 3.00pm / 🕛 Masa Check out 12.00pm"
        },
        {
            question: "Berapa jumlah bilik dan katil yang tersedia?",
            answer: "Tuah Cemerlang Homestay menawarkan 3 bilik tidur dengan kapasiti maksimum 12 orang. Terdapat 2 bilik mandi untuk keselesaan tetamu."
        },
        {
            question: "Adakah tempat ini sesuai untuk keluarga dengan anak-anak?",
            answer: "Ya, homestay kami sangat sesuai untuk keluarga. Kami menyediakan kawasan luas untuk anak-anak bermain, termasuk kawasan kolam renang yang diawasi. Lokasi yang berhampiran sawah padi dan dusun juga menawarkan pengalaman pendidikan untuk anak-anak."
        },
        {
            question: "Berapa kadar sewa untuk satu malam?",
            answer: "Kadar sewa bermula dari RM300 semalam. Hubungi kami melalui WhatsApp untuk mendapatkan harga berdasarkan keperluan anda."
        },
        {
            question: "Adakah tetamu boleh menggunakan kolam renang?",
            answer: "Ya, tetamu boleh menggunakan kolam renang yang terletak di kawasan homestay."
        },
        {
            question: "Apakah kemudahan yang disediakan dalam homestay?",
            answer: "Homestay kami dilengkapi dengan WiFi percuma, TV, penghawa dingin di semua bilik, dapur lengkap, mesin basuh, ruang BBQ, tempat letak kereta dan aksesori asas seperti tuala dan kelengkapan mandian."
        },
        {
            question: "Adakah aktiviti yang boleh dilakukan di sekitar homestay?",
            answer: "Terdapat pelbagai aktiviti di sekitar homestay termasuk naik ATV, lawatan ke sawah padi dan dusun, aktiviti dalam kolam renang, serta lawatan ke tempat-tempat menarik berhampiran seperti Muzium Padi."
        },
        {
            question: "Bagaimana saya boleh menempah homestay?",
            answer: "Penempahan boleh dibuat melalui WhatsApp kami di +6017-415 6105. Deposit sebanyak 50% diperlukan untuk mengesahkan tempahan, dan baki perlu dijelaskan semasa daftar masuk."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#F5EEDC]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold text-[#183B4E] mb-4">Soalan Lazim</h2>
                    <p className="text-[#183B4E] font-montserrat max-w-2xl mx-auto font-bold">
                        Jawapan kepada pertanyaan yang sering ditanya mengenai Tuah Cemerlang Homestay.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {faqItems.map((item, index) => (
                        <FaqItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            toggleOpen={() => toggleFaq(index)}
                        />
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-[#183B4E]/90 font-montserrat text-sm">
                        Mempunyai pertanyaan lain? Hubungi kami di <br/>{' '}
                        <a
                            href="tel:+60175240056"
                            className="text-[#27548A] font-semibold hover:text-[#183B4E] transition-colors duration-300"
                        >
                            +6017-415 6105
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
} 