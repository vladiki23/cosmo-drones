'use client'

import { useState, useEffect } from 'react'

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')
    const [showToast, setShowToast] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('sending')

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            })

            if (res.ok) {
                form.reset()
                setStatus('success')
                setShowToast(true)
            } else {
                setStatus('idle')
                alert('Something went wrong. Please try again.')
            }
        } catch {
            setStatus('idle')
            alert('Error sending message.')
        }
    }

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 5000)
            return () => clearTimeout(timer)
        }
    }, [showToast])

    return (
        <div className="max-w-xl mx-auto px-4 py-24">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center md:text-left">
                LET’S CREATE ONE MORE MASTERPIECE!
            </h1>

            <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/ajax/pro.dronepilot.uk@gmail.com"
                method="POST"
                className="space-y-6"
            >
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-2 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-2 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-2 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-md hover:opacity-90 transition disabled:opacity-50 w-full md:w-auto"
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            {/* ✅ Toast Notification */}
            {showToast && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit bg-green-500 text-white text-sm px-6 py-3 rounded-md shadow-md animate-fade-in-out">
                    <div className="relative">
                        <span>Message sent successfully!</span>
                        {/* Прогресс-линия */}
                        <span className="absolute bottom-0 left-0 h-1 bg-white w-full animate-toast-bar"></span>
                    </div>
                </div>
            )}
        </div>
    )
}


