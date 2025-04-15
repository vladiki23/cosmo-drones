'use client'

import Image from 'next/image'
import { Mail, Phone, Instagram } from 'lucide-react'

const logos = [
    '/images/uk-flag.webp',
    '/images/eu-flag.png',
    '/images/easa-logo.jpg',
    '/images/images.webp',
]

export default function LicenseSection() {
    return (
        <section className="py-10 px-4 max-w-4xl mx-auto mt-12">
            <div className="flex flex-col gap-4 justify-center">
                {/* Лицензии */}
                <div className="w-full md:w-[270px] border border-neutral-700 rounded-xl p-4">
                    <h2 className=" font-semibold mb-1 text-sm">Fully Licensed Pilot</h2>
                    <p className="text-xs text-gray-400 mb-3 ">
                        Based in London. Licensed in the UK and EU.
                    </p>

                    <div className="grid grid-cols-2 justify-items-center">
                        {logos.map((src, index) => (
                            <div key={index} className="w-[100px] h-[70px]">
                                <Image
                                    src={src}
                                    alt={`License ${index}`}
                                    width={100}
                                    height={70}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Контакты */}
                <div className="align-items-center w-full md:w-[270px] border border-neutral-700 rounded-xl p-4 flex flex-col align-imtems-center">
                    <h3 className="text-base font-semibold mb-6">Contact</h3>

                    <div className="text-sm space-y-2">
                        <a
                            href="https://wa.me/447493912469"
                            className="flex items-center gap-2 hover:text-green-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Phone size={16} /> +4474 939 12 469
                        </a>
                        <a
                            href="mailto:pro.dronepilot.uk@gmail.com"
                            className="flex items-center gap-2 hover:text-blue-400"
                        >
                            <Mail size={16} /> pro.dronepilot.uk@gmail.com
                        </a>
                        <a
                            href="https://www.instagram.com/dronefromlife?igsh=MTd0MncxM3RuOTlnMA%3D%3D&utm_source=qr"
                            className="flex items-center gap-2 hover:text-pink-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram size={16} /> @dronefromlife
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}













