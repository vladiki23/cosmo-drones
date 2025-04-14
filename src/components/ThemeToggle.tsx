'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    const isDark = theme === 'dark'

    return (
        <>
            {/* ПК: иконка только */}
            <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="hidden md:inline-flex items-center justify-center p-2 rounded-full transition bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-black dark:text-white"
                aria-label="Toggle theme"
            >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Мобилка: иконка + текст */}
            <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="flex md:hidden items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                {isDark ? 'Light' : 'Dark'}
            </button>
        </>
    )
}

