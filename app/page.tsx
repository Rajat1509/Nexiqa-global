import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import CtaBand from "@/components/CtaBand";
import Clientexp from "@/components/Clientexp"; 
import Wherewework from "@/components/Wherewework";
import WhyNexiq from "@/components/WhyNexiq";
import SelectedWork from "@/components/Selectedwork";
import Whatbuild from "@/components/Whatbuild";
import BenefitsSection from "@/components/Benifitsection";

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsSection />
      <Whatbuild />
      <SelectedWork />
      <WhyNexiq />
      <Wherewework />
      <Approach />
      <Clientexp />
      <CtaBand />
    </>
  );
}
