import Home from '@/components/Home'

export const metadata = {
    title: 'Drone Pilot UK – Aerial Filming, Real Estate, and Event Drone Services',
    description:
        'Offering professional drone services for real estate, events, film productions, and inspections - with stunning aerial visuals and full editing support.',
    keywords: [
        'Drone services UK',
        'aerial filming',
        'drone photography',
        'real estate drone',
        'event drone footage',
        'drone pilot',
        'drone video editing',
        'DJI Mavic filming',
    ],
    openGraph: {
        title: 'Drone Pilot UK – Aerial Filming, Real Estate, and Event Drone Services',
        description:
            'Offering professional drone services for real estate, events, film productions, and inspections - with stunning aerial visuals and full editing support.',
        url: 'https://www.drone-pilot.co.uk/',
        type: 'website',
        images: [
            {
                url: 'https://www.drone-pilot.co.uk/social-preview.png',
                width: 1200,
                height: 630,
                alt: 'Drone Pilot UK Preview',
            },
        ],
        siteName: 'Drone Pilot UK',
    },
}

export const revalidate = 3600

export default function Page() {
    return <Home />
}













