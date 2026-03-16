'use client'
import { ArrowRight, Sparkles } from 'lucide-react';

export const CtaSection = () => {
    return (
        <section className="py-24 bg-whitepx-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="relative overflow-hidden rounded-[3rem] bg-orange-500/50 px-8 py-20 text-center shadow-2xl sm:px-16">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-30" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/30 text-orange-100 text-sm font-medium mb-8 backdrop-blur-md border border-orange-400/30">
                            <Sparkles className="w-4 h-4" />
                            <span>Join 1,000+ learners today</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Ready to accelerate your <br className="hidden md:block" /> learning journey?
                        </h2>
                        
                        <p className="text-xl text-orange-100 max-w-2xl mb-10 leading-relaxed">
                            Stop scrolling and start achieving. Get personalized matches, AI-powered insights, 
                            and a roadmap tailored just for you.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-white text-orange-600 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-orange-900/20">
                                Get Started Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-orange-700/30 text-white rounded-2xl font-bold text-lg hover:bg-orange-700/50 transition-all duration-300 backdrop-blur-md border border-orange-500/30">
                                View Demo
                            </button>
                        </div>
                        
                        <p className="mt-8 text-orange-200/80 text-sm">
                            No credit card required • Free forever version • Instant access
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

