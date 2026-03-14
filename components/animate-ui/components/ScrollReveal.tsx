'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);


export const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%", 
          end:"bottom 15%",
          toggleActions: "play reverse play reverse",
        }
      });
    }, element);

    return () => ctx.revert(); 
  }, []);

  return (
    <div ref={sectionRef} className="opacity-0 translate-y-12">
      {children}
    </div>
  );
};
