'use client'

import Image from 'next/image'
import styles from '@/styles/droneService.module.css'

export default function DroneFilming() {
    return (
        <section className={styles.section}>
            {/* Картинка слева */}
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/drone-filming.webp"
                    alt="Drone Filming"
                    fill
                    className={styles.image}
                />
            </div>

            {/* Текст */}
            <div className={styles.textBlock}>
                <h1 className={styles.title}>Drone Filming</h1>
                <blockquote className={styles.quote}>
                    As a MA in filmmaking, I have the necessary knowledge and familiarity with all aspects and standards of work on a film set.
                </blockquote>
                <p>
                    Drones reduce costs by replacing traditional methods such as helicopters or scaffolding,
                    saving both time and money while delivering high-quality results.
                </p>
                <p>
                    For filmmakers and content creators, drones offer unmatched versatility:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Smooth, cinematic shots that elevate storytelling.</li>
                    <li>Access to perspectives that were once impossible or expensive to achieve.</li>
                </ul>
                <p>
                    I use a <strong>DJI Mavic 3 Pro Cine</strong>, which supports <em>Apple ProRes 422 HQ</em>,
                    <em> Apple ProRes 422</em>, and <em>Apple ProRes 422 LT</em>. Apple ProRes is an industry
                    standard high-quality video codec.
                </p>
            </div>
        </section>
    )
}

