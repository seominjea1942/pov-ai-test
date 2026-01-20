import { motion } from 'motion/react';

const LOGOS = [
  { name: 'TechCorp', src: '/logo/logoipsum-419.svg' },
  { name: 'DataFlow', src: '/logo/logoipsum-418.svg' },
  { name: 'CloudBase', src: '/logo/logoipsum-415.svg' },
  { name: 'AI Nexus', src: '/logo/logoipsum-409.svg' },
  { name: 'GreenCompute', src: '/logo/logoipsum-392.svg' },
];

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  const logos = reverse ? [...LOGOS].reverse() : LOGOS;

  return (
    <div className="overflow-hidden relative flex box-border border-b border-[#1f2426]">
      <motion.div
        className="flex"
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
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="border-r border-[#1f2426] h-32 sm:h-40 min-w-[33vw] md:min-w-[25vw] flex items-center justify-center bg-[#000000]"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-8 sm:h-12 w-auto filter opacity-35 px-2 sm:px-4"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section className="relative z-20 py-0">
      <div className="w-full border-[#1f2426]">
        {/* Header */}
        <div className="border-b border-[#1f2426] py-6 sm:py-10 flex items-center justify-center bg-[#000000] px-4">
          <h2 className="text-lg sm:text-2xl text-[#dae2e5] text-center opacity-60">
            Trusted by leading companies in AI
          </h2>
        </div>

        {/* Logo Rows */}
        <div className="flex flex-col">
          <LogoRow reverse={true} /> {/* Top Row: Moving Right, Reversed Order */}
          <LogoRow reverse={false} /> {/* Bottom Row: Moving Left */}
        </div>
      </div>
    </section>
  );
}