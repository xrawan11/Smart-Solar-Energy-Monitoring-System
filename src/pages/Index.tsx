import { useState } from "react";
import LogoIntro from "@/components/LogoIntro";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <LogoIntro onComplete={() => setIntroComplete(true)} />}
      {introComplete && (
        <>
          <Navbar />
          <HeroSection />
          <ServicesSection />
          <FooterSection />
        </>
      )}
    </>
  );
};

export default Index;
