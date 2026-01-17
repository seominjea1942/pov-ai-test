import { motion } from 'motion/react';
import React from 'react';

interface TextRevealProps {
    children: string;
    className?: string; // Class for the wrapper
    textClassName?: string; // Class for the text itself
    delay?: number;
    duration?: number;
}

export function TextReveal({
    children,
    className = "",
    textClassName = "",
    delay = 0,
    duration = 0.8
}: TextRevealProps) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "110%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                    duration: duration,
                    delay: delay,
                    ease: [0.16, 1, 0.3, 1], // Custom smooth easing (Apple/Dashline feel)
                }}
                className={textClassName}
            >
                {children}
            </motion.div>
        </div>
    );
}

// Version that splits text into words for better wrapping support
export function TextRevealByWord({
    children,
    className = "",
    textClassName = "",
    delay = 0,
    duration = 0.8
}: TextRevealProps) {
    const words = children.split(" ");

    return (
        <div className={`flex flex-wrap gap-x-[0.25em] ${className}`}>
            {words.map((word, i) => (
                <div key={i} className="overflow-hidden">
                    <motion.div
                        initial={{ y: "110%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{
                            duration: duration,
                            delay: delay + (i * 0.03), // Slight stagger per word
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className={textClassName}
                    >
                        {word}
                    </motion.div>
                </div>
            ))}
        </div>
    );
}
