import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { SocialProofSection } from '@/app/components/SocialProofSection';
import { CoreStrengthsSection } from '@/app/components/CoreStrengthsSection';
import { WithoutTiDBSection } from '@/app/components/WithoutTiDBSection';
import { FitCheckSection } from '@/app/components/FitCheckSection';
import { DownloadSection } from '@/app/components/DownloadSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white relative">
      <Header />
      <div className="relative z-0">
        <HeroSection />
      </div>

      {/* Below-hero section */}
      <div className="relative z-10 bg-[#0a0a0a] rounded-t-3xl border-t border-white/10 shadow-2xl">
        <SocialProofSection />
        <CoreStrengthsSection />
        <WithoutTiDBSection />
        <FitCheckSection />
        <DownloadSection />
        <Footer />
      </div>
    </div>
  );
}