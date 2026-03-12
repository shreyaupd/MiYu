'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Play, Sparkles, Users } from 'lucide-react';
import heroimg from "@/image/heroimg.png";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation for content
            const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

            if (contentRef.current) {
                timeline.from(contentRef.current.children, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.15, //stagger means
                }); 
            }

            // Entrance for image
            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 1.5,
                    ease: 'expo.out',
                    delay: 0.5
                });
            }

            // Parallax effect on mouse move
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const moveX = (clientX - window.innerWidth / 2) * 0.01;
                const moveY = (clientY - window.innerHeight / 2) * 0.01;

                if (imageRef.current) {
                    gsap.to(imageRef.current, {
                        x: moveX * 2,
                        y: moveY * 2,
                        duration: 1,
                        ease: 'power2.out'
                    });
                }
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] w-full flex items-center justify-center py-12 px-6 lg:px-12 overflow-hidden">
            <div className="container mx-auto flex-1 grid lg:grid-cols-2 items-center">
                {/* Text Content */}
                <div ref={contentRef} className="flex flex-col items-start space-y-8 z-10 max-w-2xl">
                    <div className="flex items-center space-x-2 bg-orange-200/40 border border-orange-300/50 px-4 py-2 rounded-full text-orange-950 font-semibold text-sm backdrop-blur-sm self-start">
                        <Sparkles className="w-4 h-4 text-orange-600 animate-pulse" />
                        <span>Empowering Learners Worldwide</span>
                    </div>

                    <h1 className="text-5xl lg:text-8xl font-black tracking-tight text-orange-950 leading-[0.95]">
                        Level Up Your <br />
                        <span className="text-orange-600 text-6xl italic">
                            Learning Journey
                        </span>
                    </h1>

                    <p className="text-orange-900/90 text-xl lg:text-2xl font-medium max-w-lg leading-relaxed text-left">
                        MiYu combines cutting-edge AI with a supportive community to help you bridge knowledge gaps and achieve your goals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                        <button className="group flex items-center justify-center space-x-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_10px_30px_-10px_rgba(234,88,12,0.5)] hover:shadow-[0_15px_35px_-10px_rgba(234,88,12,0.6)] hover:-translate-y-1 active:translate-y-0">
                            <span>Join the Community</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                        </button>

                        {/* <button className="flex items-center justify-center space-x-3 bg-white/60 hover:bg-white/80 backdrop-blur-md border border-orange-200 text-orange-950 px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:border-orange-300 hover:-translate-y-1 active:translate-y-0">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shadow-inner">
                                <Play className="w-5 h-5 fill-orange-600 text-orange-600 ml-1" />
                            </div>
                            <span>How it Works</span>
                        </button> */}
                    </div>
                </div>

                {/* Visual / Image Side */}
                <div ref={imageRef} className="relative aspect-square flex items-center justify-center">
                    {/* Background Blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 group-hover:rotate-12 transition-transform duration-1000">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-400/20 blur-[100px] rounded-full animate-pulse"></div>
                        <div className="absolute bottom-10 left-0 w-64 h-64 bg-amber-300/30 blur-[80px] rounded-full delay-700 animate-pulse"></div>
                    </div>

                    {/* Main Image Container */}
                    <div className="relative w-full">
                        <div className="absolute inset-0 bg-linear-to-tr from-orange-400/20 to-transparent rounded-[3rem] -rotate-3 scale-105 blur-sm -z-10"></div>
                        <div className="relative p-2 bg-linear-to-tr from-white/40 to-white/10 backdrop-blur-2xl border border-white/50 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(234,88,12,0.25)] overflow-hidden">
                            <img
                                src={heroimg.src}
                                alt="MiYu Experience"
                                className="rounded-[2.5rem] w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                            />
                        </div>

                        {/* Floating Badge on Image */}
                        <div className="absolute -bottom-6 -right-6 lg:-left-6 lg:right-auto bg-white p-5 rounded-3xl shadow-xl border border-orange-100 flex items-center space-x-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                                <Users className="w-7 h-7 text-orange-600" />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-wider text-orange-600 font-bold">Active Now</div>
                                <div className="text-lg font-bold text-orange-950">Online</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
