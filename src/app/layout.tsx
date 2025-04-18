import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Drone Pilot UK – Aerial Filming, Real Estate, and Event Drone Services',
    description: 'Professional drone services and editing',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <meta
                name="google-site-verification"
                content="-Vk_-62e3r-OfrvCc_bG0e0g9-LYtfJawHUmWrY1p7w"
            />
        </head>
        <body
            className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-neutral-900 dark:text-white`}
        >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow pt-8">{children}</main>
                <Footer />
                <Analytics />
                <SpeedInsights />
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}



