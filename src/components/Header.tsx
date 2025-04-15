'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { Menu, X, Clapperboard, Home as HomeIcon, SquareScissors, User, Mail } from 'lucide-react'

const navLinks = [
    { href: '/', label: 'Home', icon: <HomeIcon size={18} /> },
    { href: '/drone-services', label: 'Drone Services', icon: <Clapperboard size={18} /> },
    { href: '/editing', label: 'Editing', icon: <SquareScissors size={18} /> },
    { href: '/about', label: 'About', icon: <User size={18} /> },
    { href: '/contact', label: 'Contact', icon: <Mail size={18} /> },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed top-4 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-4">
            <div className="relative flex items-center justify-center">
                {/* Название отдельно — десктоп */}
                <Link href="/" className="absolute left-0 hidden md:block font-bold text-sm tracking-widest">
                    DRONE-PILOT.CO.UK
                </Link>

                {/* Капсула навигации — центрированная */}
                <nav className="flex items-center justify-between w-full md:w-auto rounded-full border border-gray-200 bg-white/80 px-6 py-2 shadow-lg backdrop-blur dark:border-gray-700 dark:bg-gray-900/80">
                    {/* Название — только мобилка */}
                    <Link href="/" className="block md:hidden font-bold text-sm tracking-widest">
                        DRONE-PILOT.CO.UK
                    </Link>

                    {/* Ссылки — только десктоп */}
                    <div className="hidden md:flex items-center gap-4 ml-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Theme и бургер */}
                    <div className="flex items-center gap-2 ml-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5 text-gray-800 dark:text-white" />
                            ) : (
                                <Menu className="w-5 h-5 text-gray-800 dark:text-white" />
                            )}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Выпадающее мобильное меню */}
            {mobileMenuOpen && (
                <div className="mt-2 rounded-xl bg-white/90 dark:bg-gray-900/90 shadow-md px-6 py-4 flex flex-col gap-3 md:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white"
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}










