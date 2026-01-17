import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TextReveal } from './ui/TextReveal';

const PROBLEMS = [
  {
    title: 'The Sharding Tax',
    problem: 'Manual sharding forces architectural complexity early. You write application logic around database boundaries, coupling business rules to infrastructure decisions that become impossible to reverse.',
    solution: 'TiDB X scales horizontally without application awareness. Add capacity by provisioning nodes—no resharding, no data migration, no rewrite.',
  },
  {
    title: 'The Downtime Tax',
    problem: 'Schema changes require maintenance windows. Each migration is a gamble: lock the table, block writes, hope nothing breaks. Teams delay necessary changes to avoid the operational risk.',
    solution: 'Online DDL operates without blocking. Modify schemas during peak traffic without coordination overhead or service disruption.',
  },
  {
    title: 'The Stranding Tax',
    problem: 'AI workloads require flexible iteration, but legacy databases force schema rigidity. Adding new fields or changing data models cascades into weeks of migration planning and execution risk.',
    solution: 'Schema evolution happens inline. Add columns, refactor tables, and adjust indexes while agents continue executing—no downtime, no staged rollouts.',
  },
  {
    title: 'The Sharding Tax',
    problem: 'Cross-shard queries degrade into application-layer joins. Performance collapses as relationships span partitions, forcing denormalization and eventual consistency tradeoffs.',
    solution: 'Query any data from a unified namespace. TiDB X maintains ACID guarantees across distributed nodes without exposing sharding to the query layer.',
  },
];

export function WithoutTiDBSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="bg-[rgb(0,0,0)] h-screen w-screen pt-[var(--header-height)]">
      <div className="w-full h-full px-[8px] py-[8px] flex flex-col gap-[8px]">
        {/* Header */}
        <div className="border border-[#1f2426] p-[48px]">
          <h2 className="text-5xl font-['Moderat:Medium',sans-serif] text-[#dae2e5] text-center max-w-4xl mx-auto leading-tight">
            In summary, with TiDB X you don't need to suffer problems below anymore
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] flex-1">
          {PROBLEMS.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`relative border border-[#1f2426] p-12 cursor-pointer overflow-hidden transition-all duration-300 h-full ${activeCard === index ? 'bg-[#fb655d]' : 'bg-black'
                }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
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
                    <TextReveal textClassName="text-3xl font-['Moderat:Medium',sans-serif] text-[#dae2e5] mb-6">
                      {item.title}
                    </TextReveal>
                    <TextReveal
                      textClassName="text-lg text-[#acb9bf] leading-relaxed mb-6"
                      delay={0.1}
                    >
                      {item.problem}
                    </TextReveal>
                    <TextReveal
                      textClassName="text-xl font-['Moderat:Medium',sans-serif] text-[#dae2e5]"
                      delay={0.2}
                    >
                      Read more &gt;&gt;
                    </TextReveal>
                  </motion.div>
                ) : (
                  <motion.div
                    key="solution"
                    initial={{ opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                    animate={{
                      opacity: 1,
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeInOut',
                    }}
                  >
                    <TextReveal textClassName="text-3xl font-['Moderat:Medium',sans-serif] text-[#0a0a0a] mb-6">
                      How TiDB X Solves This
                    </TextReveal>
                    <TextReveal
                      textClassName="text-lg text-[#0a0a0a] leading-relaxed"
                      delay={0.1}
                    >
                      {item.solution}
                    </TextReveal>
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