import Link from 'next/link'

const footerLinks = [
    { href: '/drone-services', label: 'Drone Services' },
    { href: '/editing', label: 'Editing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
]

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-neutral-800 mt-24 py-8 px-4 text-sm text-gray-500 dark:text-neutral-400">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-6">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-black dark:hover:text-white font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="text-center md:text-right">
                    © {new Date().getFullYear()} drone-pilot.co.uk All rights reserved.
                </div>
            </div>
        </footer>
    )
}
