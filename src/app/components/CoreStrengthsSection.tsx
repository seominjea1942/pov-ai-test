import { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { useRive } from '@rive-app/react-canvas'; // Use the hook for Rive
import strength1MotionUrl from '/motion/strength1_motion.riv?url'; // Import the .riv file as a URL
import strength2MotionUrl from '/motion/strength2_motion.riv?url'; // Import the .riv file for strength2
import strength3MotionUrl from '/motion/strength3_motion.riv?url'; // Import the .riv file for strength3
import strength4MotionUrl from '/motion/strength4_motion.riv?url'; // Import the .riv file for strength4

const STRENGTHS = [
  {
    title: 'Scalability Without Architectural Tradeoffs',
    description: 'TiDB X scales as a single logical system, removing the need for manual sharding or application-level complexity. Growth happens transparently beneath the workflow, preserving ACID guarantees while allowing systems to expand without redesign.',
    result: 'The system scales itself—so the workflow stays intact.',
  },
  {
    title: 'Schema Evolution Without Downtime',
    description: 'TiDB X treats schema change as a continuous operation, not a disruptive event. Online DDL runs alongside live traffic, enabling teams to evolve data models as part of normal development without blocking reads or writes.',
    result: 'Change the system while it’s running.',
  },
  {
    title: 'True Isolation Without Fragmentation',
    description: 'Each agent operates with its own isolated database environment while remaining part of a unified system. TiDB X enables independent schema evolution and instant branching without multiplying operational overhead.',
    result: 'Autonomy without operational sprawl.',
  },
  {
    title: 'Context as a First-Class Data Type',
    description: 'TiDB X treats context as durable, queryable data rather than ephemeral memory. By unifying SQL and vector storage, it allows systems to reason over history, state, and embeddings within a single transactional foundation.',
    result: 'When context becomes data, the database must evolve.',
  },
];

export function CoreStrengthsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const { RiveComponent: RiveComponent1 } = useRive({
    src: strength1MotionUrl,
    stateMachines: ['State Machine 1'],
    autoplay: true,
  });

  const { RiveComponent: RiveComponent2 } = useRive({
    src: strength2MotionUrl,
    stateMachines: ['State Machine 1'],
    autoplay: true,
  });

  const { RiveComponent: RiveComponent3 } = useRive({
    src: strength3MotionUrl,
    stateMachines: ['State Machine 1'],
    autoplay: true,
  });

  const { RiveComponent: RiveComponent4 } = useRive({
    src: strength4MotionUrl,
    stateMachines: ['State Machine 1'],
    autoplay: true,
  });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const step = Math.min(Math.floor(latest * 4), 3);
      setActiveStep(step);
    });
  }, [scrollYProgress]);

  return (
    <div
      className="h-[500vh] relative"
      ref={sectionRef}
    >
      <div className="sticky top-[var(--header-height)] h-[calc(100vh-var(--header-height))] flex flex-col lg:flex-row bg-[#0a0a0a] px-0">
        {/* Left Content Side */}
        <div className="flex-1 flex flex-col border-b lg:border-b-0 lg:border-r border-[#1f2426]">
          {/* Top Section - Indicators and Content */}
          <div className="bg-[#0F0F0F] px-16 py-20 flex flex-col flex-1 border-b border-[#1f2426]">
            {/* Step Indicators */}
            <div className="flex gap-2 mb-12">
              {STRENGTHS.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 transition-colors duration-300 ${index === activeStep
                    ? 'bg-[#fb655d]'
                    : 'bg-[#1f2426]'
                    }`}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative flex-1 flex flex-col justify-center">
              {STRENGTHS.map((strength, index) => (
                <div
                  key={index}
                  className={index === activeStep ? 'block w-full' : 'absolute inset-0 pointer-events-none w-full opacity-0'}
                >
                  {/* Header Mask */}
                  <div className="overflow-hidden mb-6">
                    <motion.h2
                      initial={{ y: '100%' }}
                      animate={{ y: index === activeStep ? 0 : '100%' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="text-5xl text-[#dae2e5] leading-tight"
                    >
                      <span className="text-[#fb655d]">{strength.title.split(' ')[0]}</span>
                      <span className="text-[#FFFFFF]">{strength.title.substring(strength.title.indexOf(' '))}</span>
                    </motion.h2>
                  </div>
                  {/* Description Mask */}
                  <div className="overflow-hidden">
                    <motion.p
                      initial={{ y: '100%' }}
                      animate={{ y: index === activeStep ? 0 : '100%' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                      className="text-xl text-[#dae2e5]/80 leading-relaxed max-w-lg"
                    >
                      {strength.description}
                    </motion.p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Benefit Statement (Red Background) */}
          <div className="bg-[#fb655d] px-16 py-12 flex items-center min-h-[160px]">
            <div className="relative overflow-hidden w-full">
              {STRENGTHS.map((strength, index) => (
                <div
                  key={index}
                  className={index === activeStep ? 'block w-full' : 'absolute inset-0 pointer-events-none w-full opacity-0'}
                >
                  <div className="overflow-hidden">
                    <motion.p
                      initial={{ y: '100%' }}
                      animate={{ y: index === activeStep ? 0 : '100%' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="text-2xl leading-snug text-[#0F0F0F]"
                    >
                      {strength.result}
                    </motion.p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Visual Side */}
        <div className="flex-1 bg-[#0a0a0a] flex items-center justify-center p-20">
          <div className="relative aspect-square w-full flex items-center justify-center">
            {/* Conditional Rendering for Strengths */}
            {activeStep === 0 && <RiveComponent1 />}
            {activeStep === 1 && <RiveComponent2 />}
            {activeStep === 2 && <RiveComponent3 />}
            {activeStep === 3 && <RiveComponent4 />}
            {activeStep !== 0 && activeStep !== 1 && activeStep !== 2 && activeStep !== 3 && (
              <div className="w-full h-full border border-[#1f2426] rounded-sm bg-[#0f0f0f] flex items-center justify-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fb655d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Visual placeholder */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 border border-[#fb655d]/30 rounded-full mb-4 mx-auto flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#fb655d] rounded-full animate-pulse" />
                  </div>
                  <p className="text-sm text-[#dae2e5]/40 uppercase tracking-widest">
                    *Image placeholder
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}