import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Editing Services | Drone Pilot UK',
    description:
        'Professional video editing services to transform raw aerial footage into polished, cinematic content with colour grading, music, and motion graphics.',
    keywords: ['drone editing', 'video editing', 'color grading', 'post production', 'cinematic drone footage'],
    openGraph: {
        title: 'Editing Services | Drone Pilot UK',
        description: 'Bring your footage to life with cinematic editing, color grading, and sound.',
        url: 'https://www.drone-pilot.co.uk/editing',
        type: 'website',
        images: [
            {
                url: 'https://www.drone-pilot.co.uk/social-preview.png',
                width: 1200,
                height: 630,
                alt: 'Editing Service Preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Editing Services | Drone Pilot UK',
        description: 'Professional editing and color grading for your drone footage.',
        images: ['https://www.drone-pilot.co.uk/social-preview.png'],
    },
}

