import HeroSection from "@/../components/HeroSection";
import HowItWorks from "@/../components/HowItWorks";
import Portfolio from "@/../components/Portfolio";
import WhyRevoa from "@/../components/WhyRevoa";
import Pricing from "@/../components/Pricing";
import CTASection from "@/../components/CTASection";
import Footer from "@/../components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white font-sans overflow-x-hidden">
      <HeroSection />
      <HowItWorks />
      <Portfolio />
      <WhyRevoa />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}
