export function TwoColumnSection() {
  return (
    <div className="flex flex-col xl:h-[100vh] lg:flex-row bg-black border-b border-[#1f2426]">
      {/* First Column */}
      <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-16 py-16 text-white">
        <h2 className="text-[36px] md:text-[48px] leading-[1.1] mb-4">
          One Logical Database for AI Agents That Scale and Evolve
        </h2>
        <p className="text-xl lg:text-2xl text-[#acb9bf] leading-relaxed mb-12">
          AI agents are long-running, stateful systems. TiDB X provides a single logical database that scales transparently, adapts to change without downtime, and keeps workflows reliable.
        </p>
        <p className="text-lg text-[#ffffff] mb-4">We’re built for</p>
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-2 px-4 py-2 bg-[#0F0F0F] text-sm rounded-full hover:bg-[#141414] transition-colors">
            <span className="material-symbols-outlined">memory</span> Stateful Agents
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-[#0F0F0F] text-sm rounded-full hover:bg-[#141414] transition-colors">
            <span className="material-symbols-outlined">schema</span> Schema Evolution
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-[#0F0F0F] text-sm rounded-full hover:bg-[#141414] transition-colors">
            <span className="material-symbols-outlined">shield</span> Transactional Safety
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-[#0F0F0F] text-sm rounded-full hover:bg-[#141414] transition-colors">
            <span className="material-symbols-outlined">arrow_outward</span> Horizontal Scale
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px bg-[#1f2426]" />

      {/* Second Column */}
      <div className="flex-1 relative min-h-[800px] border-t border-[#1f2426] lg:border-t-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/pov_ai_hero2.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}

