export function UpsellBanner() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/output.mp4"
        autoPlay
        loop
        muted
      />
      {/* Content */}
      <div className="relative z-10 text-center px-48">
        <h2 className="text-[48px] mb-4 leading-[1.1] text-[#ffffff]">
          Ready to take your AI systems to the next level?
        </h2>
        <p className="text-xl lg:text-2xl mb-6 leading-relaxed text-[#A2ADB9]">
          Discover how TiDB X can help you scale effortlessly while maintaining reliability.
        </p>
        <button className="px-8 py-4 bg-[#FFFFFF] text-[#0a0a0a] hover:bg-[#c48ae0] transition-colors">
          Try Essential 101
        </button>
      </div>
    </div>
  );
}
