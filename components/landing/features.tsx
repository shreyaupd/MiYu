'use client'
import { useRef, useEffect } from 'react';
import { Brain, MessageSquareText, Users, Target } from 'lucide-react';
import gsap from 'gsap';

export const Features = () => {
        const features = [
        {
            icon: <Brain className="w-7 h-7 text-orange-600" />,
            title: "Smart Work Matching",
            description: "Our AI intelligently matches you with the specific tasks and projects you need to complete to reach your goals.",
        },
        {
            icon: <MessageSquareText className="w-7 h-7 text-orange-600" />,
            title: "AI Chat Insights",
            description: "Get instant, automated summaries after every chat session, highlighting key takeaways and suggesting your next steps.",
        },
        {
            icon: <Users className="w-7 h-7 text-orange-600" />,
            title: "Study Buddy Connect",
            description: "Connect and message your study buddy matches directly within the app to collaborate and learn together.",
        },
        {
            icon: <Target className="w-7 h-7 text-orange-600" />,
            title: "Progress Tracking",
            description: "Visualize your journey and track your personal learning goals with our comprehensive progress dashboard.",
        }
    ];
    const cardRefs= useRef<(HTMLDivElement | null)[]>([]);
    const setHoverAnimation = (card: HTMLDivElement |null)=>{
         if(!card) return;

         const onMouseEnter =()=>{
            gsap.to(card,{
                scale:1.05,
                duration:0.3,
                ease:'power2.out',
                borderColor: "#f97316",
            })
         }

         const onMouseLeave=()=>{
            gsap.to(card,{
                scale:1,
                duration:0.3,
                ease:'power2.out',
                borderColor: "#ffedd5",
            })
         }

         card.addEventListener('mouseenter',onMouseEnter);
         card.addEventListener('mouseleave',onMouseLeave);

         return()=>{
            card.removeEventListener('mouseenter',onMouseEnter);
            card.removeEventListener('mouseleave',onMouseLeave);
         }
    }
    useEffect(()=>{
        const cleanups = cardRefs.current.map(card=>setHoverAnimation(card));
        return () => cleanups.forEach(cleanup => cleanup && cleanup());
    }
    ,[]);

    return(
        <div  className='flex flex-col bg-transparent items-center pt-10'>
            <h2 className='text-6xl font-bold mb-16 text-orange-600'>Features</h2>
            <div className='min-h-screen min-w-full p-8 flex justify-center items-center'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-26 place-items-end'>
                        {features.map((features, index)=>(
                            <div
                            key={index}
                            ref={el=>{cardRefs.current[index]=el}}
                            className="w-[480px] h-64 bg-white p-8 rounded-2xl shadow-lg border border-orange-100 flex flex-col items-start transition-colors"
                            >
                                <div className='w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-8 shadow-sm'>
                                    {features.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-orange-950 mb-4">
                                    {features.title}
                                </h3>
                                <p className='leading-relaxed'>
                                    {features.description}
                                </p>

                             

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
};