'use client'

import Image from 'next/image'
import { Mail, Instagram, Phone } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 pt-28 pb-16 grid gap-16 md:gap-24 md:grid-cols-2">
            {/* Text */}
            <div className="text-base leading-relaxed space-y-6">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    I’m a freelance drone operator, video editor, and colourist based in London.
                </h1>
                <p>
                    Practice makes perfect! This saying couldn’t be more fitting for the filmmaking industry, where
                    every project is a unique challenge that demands creativity, precision, and a fresh perspective to
                    achieve the best results.
                </p>
                <p>
                    I hold a master’s degree in filmmaking from Goldsmiths, University of London, but my journey as a
                    filmmaker truly began in 2018 when drones revolutionised aerial cinematography. What started as a
                    fascination quickly grew into a passion, shaping my career.
                </p>
                <p>
                    As a professional filmmaker, I’ve worked on a wide range of projects, from YouTube content and TV
                    series to producing my own short films in London. My most notable work, Romchyk,
                    has received critical acclaim.
                </p>
                <p>
                    I’m well-versed in every stage of production, from initial planning to the final polished product.
                </p>
                <p>
                    With my expertise in drone operation, editing, and colour grading, I help creators and businesses
                    elevate their content.
                </p>
            </div>

            {/* Image + Contacts */}
            <div className="flex flex-col items-center md:items-start">
                <div className="relative w-full max-w-[400px]">
                    <Image
                        src="/images/about-photo.webp"
                        alt="Profile"
                        width={400}
                        height={500}
                        className="rounded-2xl object-cover w-full h-auto"
                    />

                    <div className="mt-6 w-full text-sm text-gray-700 dark:text-gray-300 space-y-4">
                        {/* Соцсети */}
                        <div className="space-y-3">
                            <a
                                href="https://www.instagram.com/dronefromlife?igsh=MTd0MncxM3RuOTlnMA%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-pink-500"
                            >
                                <Instagram size={18}/> @dronefromlife
                            </a>
                        </div>

                        <hr className="my-4 w-1/2 border-t border-gray-300 dark:border-gray-700"/>

                        {/* Почта и WhatsApp */}
                        <div className="space-y-3">
                            <a href="mailto:pro.dronepilot.uk@gmail.com"
                               className="flex items-center gap-2 hover:text-blue-500">
                                <Mail size={18}/> pro.dronepilot.uk@gmail.com
                            </a>
                            <a href="https://wa.me/447493912469"
                               className="flex items-center gap-2 hover:text-green-500">
                                <Phone size={18}/> +4474 939 12 469
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


