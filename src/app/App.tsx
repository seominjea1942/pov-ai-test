import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { SocialProofSection } from '@/app/components/SocialProofSection';
import { CoreStrengthsSection } from '@/app/components/CoreStrengthsSection';
import { WithoutTiDBSection } from '@/app/components/WithoutTiDBSection';
import { FitCheckSection } from '@/app/components/FitCheckSection';
import { DownloadSection } from '@/app/components/DownloadSection';
import { Footer } from '@/app/components/Footer';
import { UpsellBanner } from '@/app/components/UpsellBanner';
import { SmoothScrollProvider } from '@/app/components/SmoothScrollProvider';
import { TwoColumnSection } from '@/app/components/TwoColumnSection';

export default function App() {
  return (
    <SmoothScrollProvider>
      <div className="bg-[#000000] text-white relative">
        <Header />
        <div className="relative z-0">
          <HeroSection />
          <SocialProofSection />
        </div>

        {/* Below-hero section */}
        <div className="relative z-10 bg-[#000000]">
          
          <TwoColumnSection />
          <CoreStrengthsSection />
          <WithoutTiDBSection />
          <FitCheckSection />
          <DownloadSection />
          <UpsellBanner />
          <Footer />
        </div>
      </div>
    </SmoothScrollProvider>
  );
}