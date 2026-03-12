'use client'
import { useRef, useEffect } from 'react';
import { Brain, MessageSquareText, Users, Target } from 'lucide-react';
import gsap from 'gsap';

export const Features = () => {
    // Create refs for each card
    const cardRef1 = useRef<HTMLDivElement>(null);
    const cardRef2 = useRef<HTMLDivElement>(null);
    const cardRef3 = useRef<HTMLDivElement>(null);
    const cardRef4 = useRef<HTMLDivElement>(null);

    // Function to setup hover animations for a card
    const setupHoverAnimation = (card: HTMLDivElement | null) => {
        if (!card) return;

        const onMouseEnter = () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out',
                boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.5)", // orange shadow
                borderColor: "#f97316", // orange-500
            });
        };

        const onMouseLeave = () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", // original shadow
                borderColor: "#ffedd5", // orange-100
            });
        };

        card.addEventListener('mouseenter', onMouseEnter);
        card.addEventListener('mouseleave', onMouseLeave);

        // Return cleanup function
        return () => {
            card.removeEventListener('mouseenter', onMouseEnter);
            card.removeEventListener('mouseleave', onMouseLeave);
        };
    };

    useEffect(() => {
        // Setup animations for all cards
        const cleanups = [
            setupHoverAnimation(cardRef1.current),
            setupHoverAnimation(cardRef2.current),
            setupHoverAnimation(cardRef3.current),
            setupHoverAnimation(cardRef4.current)
        ];

        // Cleanup all event listeners
        return () => {
            cleanups.forEach(cleanup => cleanup && cleanup());
        };
    }, []);

    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-6xl font-bold mb-16 text-orange-600">Features</h2>
            <div className="min-h-screen p-8 min-w-full flex justify-center items-center">
                
                <div className="max-w-7xl mx-auto">

                    {/* Top row - 2 boxes on right */}
                    <div className="flex justify-end gap-36 mb-16">
                        {/* Card 1 */}
                        <div 
                            ref={cardRef1}
                            className="w-[480px] h-64 bg-white p-8 rounded-2xl shadow-lg border border-orange-100 flex flex-col items-start transition-colors"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                <Brain className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-orange-950">Smart Work Matching</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our AI intelligently matches you with the specific tasks and projects you need to complete to reach your goals.
                            </p>
                        </div>
                        
                        {/* Card 2 */}
                        <div 
                            ref={cardRef2}
                            className="w-[480px] h-64 bg-white p-8 rounded-2xl shadow-lg border border-orange-100 flex flex-col items-start transition-colors"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                <MessageSquareText className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-orange-950">AI Chat Insights</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get instant, automated summaries after every chat session, highlighting key takeaways and suggesting your next steps.
                            </p>
                        </div>
                    </div>

                    {/* Bottom row - 2 boxes */}
                    <div className="flex gap-36">
                        {/* Card 3 */}
                        <div 
                            ref={cardRef3}
                            className="w-[480px] h-64 bg-white p-8 rounded-2xl shadow-lg border border-orange-100 flex flex-col items-start transition-colors"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                <Users className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-orange-950">Study Buddy Connect</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Connect and message your study buddy matches directly within the app to collaborate and learn together.
                            </p>
                        </div>
                        
                        {/* Card 4 */}
                        <div 
                            ref={cardRef4}
                            className="w-[480px] h-64 bg-white p-8 rounded-2xl shadow-lg border border-orange-100 flex flex-col items-start transition-colors"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                <Target className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-orange-950">Progress Tracking</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Visualize your journey and track your personal learning goals with our comprehensive progress dashboard.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};