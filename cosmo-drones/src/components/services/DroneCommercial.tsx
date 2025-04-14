'use client'

import Image from 'next/image'
import styles from '@/styles/droneService.module.css'

export default function DroneCommercial() {
    return (
        <section className={styles.section}>
            {/* Картинка слева */}
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/commercial-drone.webp"
                    alt="Commercial Drone Services"
                    fill
                    className={styles.image}
                />
            </div>

            {/* Текст */}
            <div className={styles.textBlock}>
                <h1 className={styles.title}>Commercial Drone Services</h1>
                <blockquote className={styles.quote}>
                    In today’s fast-paced, visually driven world, drones have revolutionised how businesses operate, market, and grow.
                </blockquote>
                <p>
                    From stunning aerial photography to streamlining complex operations,
                    drones bring unparalleled efficiency, creativity, and insight to commercials.
                </p>
            </div>
        </section>
    )
}
