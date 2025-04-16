'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        title: 'Drone Filming',
        image: '/images/drone-filming.webp',
        href: '/drone-services/filming',
    },
    {
        title: 'Commercial Drone Services',
        image: '/images/commercial-drone.webp',
        href: '/drone-services/commercial',
    },
    {
        title: 'Drone Survey',
        image: '/images/drone-survey.webp',
        href: '/drone-services/survey',
    },
    {
        title: 'Real Estate Drone Photography',
        image: '/images/real-estate.webp',
        href: '/drone-services/real-estate',
    },
]

export default function DroneServicesPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-20 grid gap-12 sm:grid-cols-2">
            {services.map((service, index) => (
                <Link
                    key={index}
                    href={service.href}
                    className="group block text-center"
                >
                    <div className="overflow-hidden rounded-xl shadow-lg">
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={600}
                            height={400}
                            priority
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg tracking-tight">
                        {service.title}
                    </h3>
                </Link>
            ))}
        </div>
    )
}
