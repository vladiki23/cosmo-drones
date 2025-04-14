'use client'

import Image from 'next/image'
import styles from '@/styles/droneService.module.css'

export default function RealEstateDrone() {
    return (
        <section className={styles.section}>
            {/* Картинка слева */}
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/real-estate.webp"
                    alt="Real Estate Drone Photography"
                    fill
                    className={styles.image}
                />
            </div>

            {/* Текст */}
            <div className={styles.textBlock}>
                <h1 className={styles.title}>Real Estate Drone Photography</h1>
                <blockquote className={styles.quote}>
                    Drones have become an invaluable tool in the real estate industry, revolutionizing the way properties are marketed, evaluated, and managed.
                </blockquote>

                <p className="font-medium">Enhanced Property Marketing</p>
                <p>
                    From capturing stunning aerial imagery to providing detailed property assessments, drones offer several benefits for real estate professionals.
                </p>

                <p className="font-medium">Stunning Aerial Photography and Videography</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong>High-Quality Visuals:</strong> Drones provide breathtaking aerial footage and high-resolution images, which can showcase a property from unique angles and perspectives that traditional photography can't match. This is especially beneficial for large estates, commercial properties, or developments with expansive outdoor areas.
                    </li>
                    <li>
                        <strong>Visual Appeal:</strong> Aerial shots highlight the property's location, surrounding areas, and landscaping, helping potential buyers see the full context and value of the property. It can also show proximity to landmarks, parks, schools, or key amenities.
                    </li>
                    <li>
                        <strong>Virtual Tours:</strong> Drones can be used to create interactive virtual tours, giving potential buyers or tenants an immersive experience of the property. This can be particularly valuable for remote buyers or those unable to visit the property in person.
                    </li>
                    <li>
                        <strong>Live Streaming:</strong> Offers real estate professionals a dynamic way to showcase properties from unique aerial perspectives. It enhances listings with high-quality, real-time video, allowing potential buyers to experience the property remotely and gain a comprehensive view of the surrounding area.
                    </li>
                </ul>
            </div>
        </section>
    )
}
