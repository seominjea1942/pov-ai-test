export function HeroSection() {
    const HERO_CONTENT = {
        header: 'AI Agents Thrive on Strong Foundations, Not Just Models',
        body: 'AI agents are long-running, stateful systems. Without a foundation built for change and scale, even the best models break under real workloads.',
    };

    return (
        <div className="relative h-[100vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    style={{ objectPosition: 'right center' }} // Adjusted to show the right part more prominently
                >
                    <source src="/pov_ai_hero.mp4" type="video/mp4" />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />

                {/* Content */}
                <div className="relative z-10 w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-20 mx-auto">
                    <div className="max-w-[640px] w-full">
                        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] text-[#FFFFFF] mb-6 sm:mb-8 text-left">
                            {HERO_CONTENT.header}
                        </h1>
                        <p className="text-base sm:text-xl lg:text-2xl text-[#acb9bf] leading-relaxed max-w-2xl text-left">
                            {HERO_CONTENT.body}
                        </p>

                        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black hover:bg-white/90 transition-colors text-sm sm:text-base">
                                Get Started
                            </button>
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white border border-white/10 hover:bg-white/5 transition-colors text-sm sm:text-base">
                                Talk With Expert
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative divider at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-[2]" />
            </div>
        </div>
    );
}


