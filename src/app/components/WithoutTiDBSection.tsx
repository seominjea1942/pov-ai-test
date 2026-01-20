import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const PROBLEMS = [
  {
    title: 'Manual Sharding',
    problem: 'Manual sharding forces architectural complexity early. You write application logic around database boundaries, coupling business rules to infrastructure decisions that become impossible to reverse.',
    solution: 'Early sharding decisions introduce architectural complexity. Application logic becomes tightly coupled to data boundaries, making systems hard to evolve and costly to scale.',
    illustrationBefore: '/illustration/manual_sharding.svg',
    illustrationAfter: '/illustration/auto_sharding.svg',
  },
  {
    title: 'Operational Downtime',
    problem: 'Schema changes require maintenance windows. Each migration is a gamble: lock the table, block writes, hope nothing breaks. Teams delay necessary changes to avoid the operational risk.',
    solution: 'Schema changes require maintenance windows and operational risk. Teams delay necessary evolution to avoid locked tables, blocked writes, and production failures.',
    illustrationBefore: '/illustration/down_time.svg',
    illustrationAfter: '/illustration/no_down_time.svg',
  },
  {
    title: 'Schema Rigidity',
    problem: 'AI workloads require flexible iteration, but legacy databases force schema rigidity. Adding new fields or changing data models cascades into weeks of migration planning and execution risk.',
    solution: 'AI workloads evolve rapidly, but legacy databases resist change. Simple model updates turn into risky migrations that slow iteration and increase failure rates.',
    illustrationBefore: '/illustration/locked.svg',
    illustrationAfter: '/illustration/unlocked.svg',
  },
  {
    title: 'Distributed Query Pain',
    problem: 'As data spans partitions, queries degrade into application-layer joins. Performance collapses, forcing denormalization and consistency tradeoffs.',
    solution: 'Query any data from a unified namespace. TiDB X maintains ACID guarantees across distributed nodes without exposing sharding to the query layer.',
    illustrationBefore: '/illustration/query_pain.svg',
    illustrationAfter: '/illustration/no_query_pain.svg',
  },
];

export function WithoutTiDBSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="bg-[rgb(0,0,0)] w-screen border-b border-[#1f2426]">
      <div className="w-full h-full px-0 py-0 flex flex-col">
        {/* Header */}
        <div className="border-t border-[#1f2426] py-16 sm:py-28 flex flex-col justify-center items-center relative z-10 px-4">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] text-[#dae2e5] text-center max-w-4xl mx-auto">
            In summary, with TiDB X you don't need to suffer problems below anymore
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-0">
          {PROBLEMS.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`relative outline outline-1 outline-[#1f2426] p-6 sm:p-12 cursor-pointer overflow-hidden transition-all duration-300 h-full ${activeCard === index ? 'bg-[#FB655D]' : 'bg-black'
                }`}
              transition={{ duration: 0.2 }}
            >
              {/* Icon in the top-right corner */}
              <span
                className={`material-symbols-outlined absolute top-4 right-4 text-3xl transition-colors ${activeCard === index ? 'text-[#0a0a0a]' : 'text-[#acb9bf]'
                  }`}
              >
                flip
              </span>

              {/* Illustration */}
              <div className="w-20 h-20 sm:w-30 sm:h-30 mb-4 sm:mb-6 flex items-center justify-center">
                <img
                  src={activeCard === index ? item.illustrationAfter : item.illustrationBefore}
                  alt={item.title}
                  className={`w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] transition-all duration-300 ${activeCard === index ? 'filter invert' : ''
                    }`}
                />
              </div>

              {/* Default Content */}
              <AnimatePresence mode="wait">
                {activeCard !== index ? (
                  <motion.div
                    key="problem"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl sm:text-3xl text-[#dae2e5] mb-4 sm:mb-6">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg text-[#acb9bf] leading-relaxed mb-4 sm:mb-6">
                      {item.problem}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="solution"
                    initial={{ opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                    animate={{
                      opacity: 1,
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeInOut',
                    }}
                  >
                    <h3 className="text-xl sm:text-3xl text-[#0a0a0a] mb-4 sm:mb-6">
                      How TiDB X Solves This
                    </h3>
                    <p className="text-base sm:text-lg text-[#0a0a0a] leading-relaxed">
                      {item.solution}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}