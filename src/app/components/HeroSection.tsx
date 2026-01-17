import { useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import Spline from '@splinetool/react-spline';

const HERO_CONTENT = {
    header: 'AI Agents Thrive on Strong Foundations, Not Just Models',
    body: 'While reasoning happens in the model, reliability happens in the database.',
};

export function HeroSection() {
    const splineRef = useRef<any>(null);
    const isScrolledRef = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const cameraToStateValue = useRef(false);
    const cameraToBaseStateValue = useRef(false);
    const isScrollLocked = useRef(false);
    const scrollLockTimeout = useRef<number | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const lockScroll = () => {
        if (isScrollLocked.current) return;

        isScrollLocked.current = true;
        document.body.style.overflow = 'hidden';
        console.log('Scroll locked for 2 seconds');

        // Clear any existing timeout
        if (scrollLockTimeout.current) {
            clearTimeout(scrollLockTimeout.current);
        }

        // Unlock after 2 seconds
        scrollLockTimeout.current = setTimeout(() => {
            document.body.style.overflow = '';
            isScrollLocked.current = false;
            console.log('Scroll unlocked');
        }, 2000);
    };

    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        if (!splineRef.current || isScrollLocked.current) return;

        // Trigger 'cameraToState' toggle when scrolled 100vh (progress ~0.5 of 200vh container)
        if (progress > 0.5 && !isScrolledRef.current) {
            isScrolledRef.current = true;
            cameraToStateValue.current = !cameraToStateValue.current;
            console.log('Toggling cameraToState to:', cameraToStateValue.current);

            lockScroll();

            try {
                splineRef.current.setVariable('cameraToState', cameraToStateValue.current);
            } catch (e) {
                console.warn("Could not set Spline variable:", e);
            }
        }
        // Trigger 'cameraToBaseState' toggle when scrolling back up
        else if (progress <= 0.5 && isScrolledRef.current) {
            isScrolledRef.current = false;
            cameraToBaseStateValue.current = !cameraToBaseStateValue.current;
            console.log('Toggling cameraToBaseState to:', cameraToBaseStateValue.current);

            lockScroll();

            try {
                splineRef.current.setVariable('cameraToBaseState', cameraToBaseStateValue.current);
            } catch (e) {
                console.warn("Could not set Spline variable:", e);
            }
        }
    });

    function onLoad(splineApp: any) {
        splineRef.current = splineApp;
    }

    return (
        <div ref={containerRef} className="relative h-[300vh]">
            <div className="sticky top-[var(--header-height)] h-[calc(100vh-var(--header-height))] bg-[#0a0a0a] flex items-center overflow-hidden">
                {/* Background Spline */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <Spline
                        scene="/scene.splinecode"
                        className="w-full h-full opacity-60"
                        onLoad={onLoad}
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            className="text-5xl lg:text-7xl font-['Moderat:Medium',sans-serif] leading-[1.1] text-[#dae2e5] mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {HERO_CONTENT.header}
                        </motion.h1>
                        <motion.p
                            className="text-xl lg:text-2xl text-[#acb9bf] leading-relaxed max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {HERO_CONTENT.body}
                        </motion.p>

                        <motion.div
                            className="mt-12 flex items-center justify-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors">
                                Get Started
                            </button>
                            <button className="px-8 py-4 text-white font-medium rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                                View Architecture
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative divider at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
        </div>
    );
}

