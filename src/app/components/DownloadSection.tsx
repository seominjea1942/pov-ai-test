import { motion } from 'motion/react';
import { Download } from 'lucide-react';

const DOWNLOADS = [
  {
    title: 'AI Agent Architecture POV (PDF)',
    description: 'Learn design patterns and architecture principles for building AI agent systems that scale from prototype to production.',
  },
  {
    title: 'Cost & Complexity Comparison',
    description: 'Side-by-side analysis of cloud database options for AI workloads, including TCO projections and operational overhead metrics.',
  },
  {
    title: 'Evolution Path from MVP to Scale',
    description: 'Step-by-step playbook for growing AI systems from initial launch through $100M+ scale without architectural rewrites.',
  },
];

export function DownloadSection() {
  return (
    <section className="bg-[rgb(0,0,0)]">
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="border-b border-t border-[#1f2426] py-6 sm:py-10 flex items-center justify-center bg-[#000000] px-4">
          <h2 className="text-[28px] leading-[1.1] text-[#acb9bf] text-center">
            Are you looking for more resources?
          </h2>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 flex-1">
          {DOWNLOADS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="outline outline-1 outline-[#1f2426] p-4 sm:p-8 bg-black hover:bg-[#1a1a1a] transition-colors cursor-pointer group h-full flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl text-[#FFFFFF] mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-[#acb9bf] leading-relaxed mb-3 sm:mb-4">
                  {item.description}
                </p>
              </div>
              <div className="mt-auto">
                <button className="flex items-center gap-2 text-[#fb655d] transition-all">
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}