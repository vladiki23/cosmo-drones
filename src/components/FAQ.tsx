'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqData = [
    {
        category: 'General',
        questions: [
            {
                question: 'Do you have the legal requirements?',
                answer: 'Yes, I am a fully CAA licensed, commercially insured pilot in the UK and EU.',
            },
            {
                question: 'Can you send me an accurate quote?',
                answer: 'Yes, I will email a form requesting details about the site, the project and the time and travel needed.',
            },
        ],
    },
    {
        category: 'Service Info',
        questions: [
            {
                question: 'Do you have any conditions?',
                answer: 'Only related to weather. If booked in good conditions and it changes, I can rebook.',
            },
            {
                question: 'How long does a shoot take?',
                answer: 'Usually 2–4 hours depending on the project, with time allowed for review and re-takes.',
            },
            {
                question: 'Can you do the video editing?',
                answer: 'Yes, I’m a seasoned editor and can edit and color grade as needed with fair pricing.',
            },
        ],
    },
    {
        category: 'Technical',
        questions: [
            {
                question: 'What equipment do I use?',
                answer: 'I operate a DJI Mavic 3 Pro Cine supporting Apple ProRes formats.',
            },
            {
                question: 'Can you film in Central London?',
                answer: 'Yes, including submitting applications to authorities if needed.',
            },
            {
                question: 'Do you shoot internationally?',
                answer: 'Yes, I can travel where drone regulations and insurance apply.',
            },
            {
                question: 'Can you film indoors?',
                answer: 'Yes, where space is available—conference rooms, warehouses, museums, hotels, etc.',
            },
        ],
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<[string, number] | null>(null)

    const toggle = (cat: string, index: number) => {
        if (openIndex?.[0] === cat && openIndex?.[1] === index) {
            setOpenIndex(null)
        } else {
            setOpenIndex([cat, index])
        }
    }

    return (
        <section className="max-w-2xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-10 leading-snug">
                <span className="font-bold text-xl">Everything you need to know</span>
            </h2>

            <div className="space-y-8">
                {faqData.map((section, sIndex) => (
                    <div key={sIndex}>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                            {section.category}
                        </h3>
                        <div className="space-y-1">
                            {section.questions.map((item, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-200 dark:border-gray-700"
                                >
                                    <button
                                        onClick={() => toggle(section.category, index)}
                                        className="w-full flex justify-between items-center py-3 text-left text-sm text-gray-900 dark:text-white font-medium"
                                    >
                                        {item.question}
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform ${
                                                openIndex?.[0] === section.category && openIndex?.[1] === index
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </button>
                                    {openIndex?.[0] === section.category && openIndex?.[1] === index && (
                                        <p className="pb-3 text-xs text-gray-700 dark:text-gray-300">{item.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>


    )
}

