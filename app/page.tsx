import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { CtaSection } from "@/components/landing/cta-section";
import { Pricing } from "@/components/landing/pricing";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { ScrollReveal } from "@/components/animate-ui/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-pink-50 via-orange-50 to-pink-100 pt-20">
      <StarsBackground
        backgroundColor="bg-transparent"
        starColor="#f97316"
      >
        <Hero />
      </StarsBackground>
      
      <ScrollReveal>
        <Features />
      </ScrollReveal>
      
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>
      
      <ScrollReveal>
        <Pricing />
      </ScrollReveal>
      
      <ScrollReveal>
        <CtaSection  />
      </ScrollReveal>
    </div>
  );
}
