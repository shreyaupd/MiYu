'use client'
import { useEffect, useRef } from 'react';
import { UserPlus, Search, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        icon: <UserPlus className="w-8 h-8 text-orange-600" />,
        title: "Create Your Profile",
        description: "Set up your learning goals and preferences so our AI can understand your unique needs.",
        color: "bg-orange-50"
    },
    {
        icon: <Search className="w-8 h-8 text-orange-600" />,
        title: "Find Your Match",
        description: "Our algorithm connects you with perfect study buddies or tailored learning resources.",
        color: "bg-orange-100/50"
    },
    {
        icon: <Sparkles className="w-8 h-8 text-orange-600" />,
        title: "Achieve Your Goals",
        description: "Follow your personalized roadmap and track your progress as you master new skills.",
        color: "bg-orange-100"
    }
];

export const HowItWorks = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            stepsRef.current.forEach((step, index) => {
                if (!step) return;
                gsap.fromTo(step, 
                    { opacity: 0, y: 50 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8, 
                        delay: index * 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: step,
                            start: "top 85%",
                        }
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-4">How it works</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Miyu simplifies your learning journey with a streamlined, AI-powered process designed for pairup learning.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div 
                                key={index}
                                ref={el => { stepsRef.current[index] = el }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-orange-100`}>
                                    {step.icon}
                                </div>
                                <div className="absolute top-0 left-1/2 -ml-4 -mt-4 w-8 h-8 bg-orange-600 text-white rounded-full hidden lg:flex items-center justify-center font-bold text-sm shadow-md">
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl font-bold text-orange-950 mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed max-w-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
