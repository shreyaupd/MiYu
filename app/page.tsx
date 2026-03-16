import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { CtaSection } from "@/components/landing/cta-section";
import { Pricing } from "@/components/landing/pricing";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { ScrollReveal } from "@/components/animate-ui/components/ScrollReveal";
import { WaveDivider } from "@/components/animate-ui/components/WaveDivider";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-pink-50 via-orange-50 to-pink-100 pt-20 flex flex-col">
      <div className="relative z-0">
        <StarsBackground
          backgroundColor="bg-transparent"
          starColor="#f97316"
        >
          <Hero />
        </StarsBackground>
      </div>

      <WaveDivider fill="#fcfcfc" />

      {/* Starting the continuous gradient flow */}
      <div className="flex-1 relative z-10 w-full flex flex-col -mt-1">
        
        {/* Features: Starts at wave color (#fcfcfc), ends at light purple (#f4edfe) */}
        <div className="bg-linear-to-b from-[#fcfcfc] to-[#f4edfe] pb-10">
          <ScrollReveal>
            <Features />
          </ScrollReveal>
        </div>

          <ScrollReveal>
            <HowItWorks />
          </ScrollReveal>
       

  
          <ScrollReveal>
            <Pricing />
          </ScrollReveal>
      


          <ScrollReveal>
            <CtaSection />
          </ScrollReveal>
       

      </div>
    </div>
  );
}
