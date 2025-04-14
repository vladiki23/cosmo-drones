'use client'

import Image from 'next/image'
import styles from '@/styles/droneService.module.css'

export default function DroneSurvey() {
    return (
        <section className={styles.section}>
            {/* Картинка слева */}
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/drone-survey.webp"
                    alt="Drone Survey"
                    fill
                    className={styles.image}
                />
            </div>

            {/* Текст */}
            <div className={styles.textBlock}>
                <h1 className={styles.title}>Drone Survey</h1>
                <blockquote className={styles.quote}>
                    Drones are especially beneficial for constructions and roof inspections,
                    providing a safer, faster, more efficient, and cost-effective alternative to traditional methods.
                </blockquote>

                <p className="font-medium">Key benefits:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Minimized Risk</li>
                    <li>High-Resolution Imagery</li>
                    <li>Reduced Labor Costs</li>
                </ul>
            </div>
        </section>
    )
}
