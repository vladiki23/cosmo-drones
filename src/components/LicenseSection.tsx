'use client'

import Image from 'next/image'
import { Mail, Phone, Instagram } from 'lucide-react'

export default function LicenseSection() {
    const licenseLogos = [
        '/images/uk-flag.png',
        '/images/eu-flag.png',
        '/images/images.webp',
        '/images/easa-logo.jpg',
    ]

    return (
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-2">Fully Licensed Pilot</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Based in London. Licensed in the UK and EU.
                </p>
            </div>

            {/* Логотипы лицензий */}
            <div className="flex justify-center items-center flex-wrap gap-6 mb-8">
                {licenseLogos.map((src, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-md flex items-center justify-center w-[100px] h-[70px] transition-transform hover:scale-105"
                    >
                        <Image
                            src={src}
                            alt={`License ${index}`}
                            width={100}
                            height={70}
                            className="object-contain max-w-full max-h-full"
                        />
                    </div>
                ))}
            </div>

            {/* Контакты */}
            <div
                className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-xl max-w-sm mx-auto text-sm text-left space-y-4 shadow-sm"
            >
                <h3 className="font-semibold text-lg mb-2">Contact Me</h3>

                <a
                    href="https://wa.me/447493912469"
                    className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-green-600"
                >
                    <Phone size={16} />
                    +4474 939 12 469
                </a>

                <a
                    href="mailto:pro.dronepilot.uk@gmail.com"
                    className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-500"
                >
                    <Mail size={16} />
                    pro.dronepilot.uk@gmail.com
                </a>

                <a
                    href="https://www.instagram.com/dronefromlife?igsh=MTd0MncxM3RuOTlnMA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-pink-500"
                >
                    <Instagram size={16} />
                    @dronefromlife
                </a>
            </div>
        </section>
    )
}


