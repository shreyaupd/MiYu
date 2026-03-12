'use client';
import { PricingTable } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import PricingLoader from "@/components/ui/PricingLoader";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { CtaSection } from "@/components/landing/cta-section";
import { Pricing } from "@/components/landing/pricing";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen">
      <StarsBackground
        backgroundColor="bg-[radial-gradient(ellipse_at_bottom,_#fed7aa_0%,_#fff7ed_100%)]"
        starColor="#f97316"
      >
        <Hero />
      </StarsBackground>
      <Features />
      <HowItWorks />
      <Pricing />
      <CtaSection />
      {showLoader ? <PricingLoader /> : <PricingTable />}
    </div>
  );
}
