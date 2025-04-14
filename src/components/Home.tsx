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
            <div className="px-4 max-w-5xl mx-auto">
                <LicenseSection />
            </div>
            <div className="px-4 max-w-5xl mx-auto">
                <FAQ/>
            </div>
        </>
    )
}