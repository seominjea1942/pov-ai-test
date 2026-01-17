import { motion } from 'motion/react';

const LOGOS = ['OpenAI', 'Anthropic', 'Cohere', 'Hugging Face', 'Stability AI', 'Midjourney'];

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden relative flex">
      <motion.div
        className="flex gap-2"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 120, // Slower for larger cards
            ease: "linear",
          },
        }}
        style={{ width: "fit-content", display: "flex" }}
      >
        {/* Quadruple set to ensure seamless loop with large widths on all screen sizes */}
        {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="border border-[#1f2426] h-40 min-w-[25vw] flex items-center justify-center bg-[#0a0a0a]"
          >
            <p className="text-2xl font-['Moderat:Bold',sans-serif] text-[#dae2e5]">
              {logo}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-2">
      <div className="w-full">
        {/* Header */}
        <div className="border border-[#1f2426] mb-2 py-8 flex items-center justify-center mx-2">
          <h2 className="text-2xl font-['Moderat:Bold',sans-serif] text-[#dae2e5] text-center">
            Trusted by leading companies in AI
          </h2>
        </div>

        {/* Logo Rows */}
        <div className="flex flex-col gap-2">
          <LogoRow reverse={true} /> {/* Top Row: Moving Right */}
          <LogoRow reverse={false} /> {/* Bottom Row: Moving Left (as requested) */}
        </div>
      </div>
    </section>
  );
}