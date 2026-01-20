import { useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from '@/imports/svg-jonfsug1mj';

const QUESTIONS = [
  'Does your AI system require real-time transactional consistency?',
  'Are you planning to scale beyond 1TB of data?',
  'Do you need to change your schema while in production?',
  'Are you running multiple AI agents that need isolated data access?',
];

export function FitCheckSection() {
  const [answers, setAnswers] = useState<{ [key: number]: boolean | null }>({});

  const handleToggle = (index: number, value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [index]: prev[index] === value ? null : value,
    }));
  };

  const allAnswered = Object.keys(answers).length === QUESTIONS.length;
  const allYes = allAnswered && Object.values(answers).every(answer => answer === true);
  const hasNo = Object.values(answers).some(answer => answer === false);

  return (
    <section className="bg-[#000000] py-16 sm:py-32 flex items-center">
      <div className="max-w-[912px] mx-auto px-4 sm:px-8 w-full">
        {/* Header */}
        <div className="mb-12 sm:mb-[64px] text-center">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] text-[#dae2e5] mb-4 text-center">
            Choose What Fits Your Stage Today
          </h2>
          <p className="text-base sm:text-[20px] text-[#acb9bf] leading-normal px-0 sm:px-16">
            We value transparency. TiDB X is designed for teams pushing beyond traditional limits. If you’re still validating your MVP, stay focused—we’ll be ready when scaling becomes real.
          </p>
        </div>

        {/* Questions */}
        <div className="flex flex-col gap-[8px] mb-[8px]">
          {QUESTIONS.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0F0F0F] p-4 sm:p-[24px]"
            >
              <div className="flex items-center justify-between gap-8 ">
                <p className="text-base sm:text-[20px] text-[#dae2e5] flex-1 leading-tight sm:leading-[20px]">
                  {question}
                </p>
                <div className="flex gap-[8px]">
                  <button
                    onClick={() => handleToggle(index, true)}
                    className={`h-[40px] w-[50px] sm:w-[60px] px-[8px] sm:px-[12px] py-[8px] text-[12px] sm:text-[14px] leading-[20px] transition-colors ${answers[index] === true
                      ? 'bg-[#50dbd9] text-[#14181a]'
                      : 'bg-[#1f2426] text-[#50585c] hover:bg-[#313638]'
                      }`}
                  >
                    YES
                  </button>
                  <button
                    onClick={() => handleToggle(index, false)}
                    className={`h-[40px] w-[50px] sm:w-[60px] px-[8px] sm:px-[12px] py-[8px] text-[12px] sm:text-[14px] leading-[20px] transition-colors ${answers[index] === false
                      ? 'bg-[#50dbd9] text-[#14181a]'
                      : 'bg-[#1f2426] text-[#50585c] hover:bg-[#313638]'
                      }`}
                  >
                    No
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[88px]"
        >
          {!allAnswered && (
            <div className="bg-[#0A0A0A] p-[24px] h-full flex items-center justify-center">
              <p className="text-[16px] text-[#acb9bf] leading-normal text-center">
                Please answer all questions to see your recommendation.
              </p>
            </div>
          )}
          {allYes && (
            <div className="bg-[#50dbd9] p-[24px] flex items-center justify-between h-full">
              <div className="flex items-center gap-[8px]">
                <div className="bg-[#030303] rounded-full size-[32px] flex items-center justify-center">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p1e137a00} stroke="#50DBD9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
                <p className="text-[20px] text-[#14181a] leading-[20px]">
                  You are ready to adopt TiDB X
                </p>
              </div>
              <button className="bg-[#14181a] h-[40px] px-[12px] py-[8px] text-[14px] text-[#dae2e5] leading-[20px] hover:bg-[#1f2426] transition-colors flex items-center gap-[4px]">
                Get Demo Account
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d="M4.66667 11.3333L11.3333 4.66667M11.3333 4.66667H4.66667M11.3333 4.66667V11.3333" stroke="#DAE2E5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          )}
          {hasNo && (
            <div className="bg-[#000000] p-[24px] h-full flex items-center justify-center">
              <p className="text-[16px] text-[#acb9bf] leading-normal text-center">
                You may not be ready yet. Revisit when your system grows.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}