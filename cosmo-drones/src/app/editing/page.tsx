'use client'

export default function EditingPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-[0.7fr_1fr] gap-12 items-start">

            {/* Левая колонка — видео */}
            <div className="space-y-8">
                <iframe
                    src="https://player.vimeo.com/video/1070117589"
                    className="w-full aspect-video rounded-xl"
                    allow="autoplay; fullscreen"
                    loading="lazy"
                />
                <iframe
                    src="https://player.vimeo.com/video/1070441544"
                    className="w-full aspect-video rounded-xl"
                    allow="autoplay; fullscreen"
                    loading="lazy"
                />
                <iframe
                    src="https://player.vimeo.com/video/1070439941"
                    className="w-full aspect-video rounded-xl"
                    allow="autoplay; fullscreen"
                    loading="lazy"
                />
            </div>

            {/* Правая колонка — текст */}
            <div className="text-base leading-relaxed text-gray-800 dark:text-gray-300 space-y-6">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Bringing Your Story to Life with Colour, Sound & Emotion
                </h1>
                <p>
                    Editing is where the magic happens—it’s the process that transforms raw footage into a compelling
                    story. Every cut, transition, and frame shapes the narrative, creates rhythm, and keeps the audience
                    engaged.
                </p>
                <p>
                    Great editing isn’t just about seamless cuts; it’s about storytelling. I craft each moment with
                    precision, ensuring the pacing flows naturally, emotions land at the right time, and every shot
                    serves a purpose.
                </p>
                <p>
                    Colour grading enhances this by setting the tone—whether it’s a warm, nostalgic glow or a bold,
                    cinematic look, it brings cohesion and depth to every frame. Meanwhile, sound design ties everything
                    together, refining dialogue, balancing music, and adding the subtle details that make any project
                    feel truly immersive.
                </p>
                <p>
                    With a sharp eye for detail and a passion for storytelling, I bring footage to life—turning ideas
                    into powerful, polished visuals that leave a lasting impact.
                </p>

                <h2 className="text-2xl font-semibold pt-8">Experience & Workflow</h2>
                <p>
                    With over 10 years of experience in video editing and colour grading, I’ve worked on music videos,
                    documentary projects, and TV commercials.
                </p>
                <p>
                    I work remotely, making the process seamless—simply upload your high-res footage, and I’ll handle
                    the rest. My efficient workflow ensures your project stays on time and within budget.
                </p>
                <p>
                    I’m flexible and customer-focused, so feel free to reach out to discuss projects of any scale. I’ll
                    provide an immediate quote and a clear breakdown of the workflow.
                </p>
                <p>More references by request.</p>
            </div>
        </div>
    )
}

