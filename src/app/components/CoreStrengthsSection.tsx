import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';


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
      <div className="sticky top-[var(--header-height)] h-[calc(100vh-var(--header-height))] flex items-center justify-center bg-[#0a0a0a] px-[8px]">
        <div className="w-full h-full flex gap-[11px]">
          {/* Left Content Side */}
          <div className="flex-1 flex flex-col gap-[10px]">
            {/* Top Section - Indicators and Content */}
            <div className="bg-[rgb(15,15,15)] px-[32px] py-[30px] flex flex-col gap-[16px] flex-1">
              {/* Step Indicators */}
              <div className="flex gap-[11px]">
                {STRENGTHS.map((_, index) => (
                  <div
                    key={index}
                    className={`w-[16px] h-[16px] transition-colors duration-300 ${index === activeStep
                      ? 'bg-[#fb655d]'
                      : 'bg-[#313638]'
                      }`}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative flex-1 flex items-end">
                {STRENGTHS.map((strength, index) => (
                  <div
                    key={index}
                    className={index === activeStep ? 'block w-full' : 'absolute bottom-0 pointer-events-none w-full'}
                  >
                    {/* Header Mask */}
                    <div className="overflow-hidden mb-[16px]">
                      <motion.h2
                        initial={{ y: '100%' }}
                        animate={{ y: index === activeStep ? 0 : '100%' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[40px] font-['Moderat:Medium',sans-serif] text-[#dae2e5] leading-normal"
                      >
                        <span className="text-[#fb655d]">{strength.title.split(' ')[0]}</span>
                        <span className="text-[#dae2e5]">{strength.title.substring(strength.title.indexOf(' '))}</span>
                      </motion.h2>
                    </div>
                    {/* Description Mask */}
                    <div className="overflow-hidden">
                      <motion.p
                        initial={{ y: '100%' }}
                        animate={{ y: index === activeStep ? 0 : '100%' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                        className="text-[24px] text-[#dae2e5] leading-[1.5] font-['Moderat:Regular',sans-serif] max-w-[473px]"
                      >
                        {strength.description}
                      </motion.p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section - Benefit Statement */}
            <div className="bg-[#fb655d] px-[56px] py-[65px] flex items-center justify-center">
              <div className="relative overflow-hidden w-full max-w-[619px]">
                {STRENGTHS.map((strength, index) => (
                  <div
                    key={index}
                    className={index === activeStep ? 'block w-full' : 'absolute top-0 pointer-events-none w-full'}
                  >
                    <div className="overflow-hidden">
                      <motion.p
                        initial={{ y: '100%' }}
                        animate={{ y: index === activeStep ? 0 : '100%' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[24px] font-['Moderat:Medium',sans-serif] leading-normal text-[#0a0a0a]"
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
          <div className="flex-1 bg-[rgb(15,15,15)] flex items-center justify-center">
            <div className="relative w-[419px] h-[419px]">
              {/* Circle */}
              <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 419 419">
                <circle cx="209.5" cy="209.5" r="209" stroke="white" fill="none" />
              </svg>

              {/* Ellipse Placeholder */}
              <div className="absolute left-[47px] top-[177px] w-[324px] h-[78px]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 324 78">
                  <ellipse cx="162" cy="39" rx="162" ry="39" fill="#D9D9D9" />
                </svg>
                <p className="absolute top-[24px] left-1/2 -translate-x-1/2 text-[24px] font-['Moderat:Regular',sans-serif] text-black leading-normal whitespace-nowrap">
                  *Image place holder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}