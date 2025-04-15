'use client'

import { useRef, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import FAQ from '@/components/FAQ'
import LicenseSection from '@/components/LicenseSection'

export default function Home() {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [muted, setMuted] = useState(true)

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            setMuted(videoRef.current.muted)
        }
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true
        }
    }, [])

    return (
        <>
            {/* Видео секция */}
            <div className={styles.pageWrapper}>
                <div className={styles.videoWrapper}>
                    <video
                        ref={videoRef}
                        className={styles.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/videos/hero-video.mp4" type="video/mp4"/>
                    </video>

                    <button
                        onClick={toggleMute}
                        className={styles.muteButton}
                    >
                        {muted ? 'Unmute' : 'Mute'}
                    </button>
                </div>
            </div>

            {/* FAQ секция отдельно под видео */}
            <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">

                {/* Правая часть — License + Contact */}
                <div className="space-y-6">
                    <LicenseSection/>
                </div>
                {/* Левая часть — FAQ (занимает 2/3) */}
                <div className="md:col-span-2">
                    <FAQ/>
                </div>

            </section>
        </>
    )
}