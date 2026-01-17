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
    <section className="bg-[rgb(0,0,0)] p-[8px]">
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-[8px] p-[32px] border border-[#1f2426] bg-black">
          <h2 className="text-5xl font-['Moderat:Medium',sans-serif] text-[#dae2e5]">
            Download
          </h2>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[8px] flex-1">
          {DOWNLOADS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-[#1f2426] p-8 bg-black hover:bg-[#1a1a1a] transition-colors cursor-pointer group h-full"
            >
              <h3 className="text-2xl font-['Moderat:Medium',sans-serif] text-[#dae2e5] mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-[#acb9bf] leading-relaxed mb-6">
                {item.description}
              </p>
              <button className="flex items-center gap-2 text-[#fb655d] font-['Moderat:Medium',sans-serif] group-hover:gap-3 transition-all">
                <Download className="w-5 h-5" />
                Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}