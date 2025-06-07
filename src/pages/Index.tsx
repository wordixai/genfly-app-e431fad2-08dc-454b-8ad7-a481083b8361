import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { GetStartedSection } from "@/components/GetStartedSection";
import { FeatureCards } from "@/components/FeatureCards";
import { TopApps } from "@/components/TopApps";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="tabular-nums">
        <HeroSection />
        <div className="flex flex-col gap-8 md:gap-12 px-6 max-w-7xl mx-auto">
          <StatsSection />
          <GetStartedSection />
          <FeatureCards />
          <TopApps />
        </div>
      </main>
    </div>
  );
};

export default Index;