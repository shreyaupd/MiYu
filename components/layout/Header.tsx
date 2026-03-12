'use client';
import {
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import logo from "@/image/logo.png"
import Link from 'next/link';
import { useUser } from '@clerk/nextjs'
import { Badge } from "../ui/badge";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Trophy, Users, MessageCircle } from 'lucide-react'; // Change this import
const Header = ({isPro}:{isPro:boolean}) => {
    const { isSignedIn } = useUser();
    const headerRef = useRef<HTMLDivElement>(null);
    const lastDirection = useRef("up");
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(headerRef.current,{
            y:0,
            opacity:1,
        })

        ScrollTrigger.create({
            trigger:document.body,
            start:'top top',
            end:'bottom bottom',
            onUpdate:(self)=>{
                const direction = self.direction===1?'down':'up';
                const scrollY=window.scrollY;
                    if (direction === 'down' && scrollY > 100 && lastDirection.current !== 'down') {
          // Scrolling down - hide navbar
          gsap.to(headerRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.inOut'
          });
          lastDirection.current = 'down';
        } 
        else if (direction === 'up' && lastDirection.current !== 'up') {
          // Scrolling up - show navbar
          gsap.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
          });
          lastDirection.current = 'up';
        }
      }
    }); 
      ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: '+=1',
      onEnter: () => {
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.3
        });
      }
    });
          return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    },[])

    return (
        <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 px-4 py-3 w-full bg-orange-50">
            <nav className='flex justify-between items-center bg-transparent'>
                <div>
                    <Link href="/"><img src={logo.src} alt="Miyu Logo" className="h-18 w-19" /></Link>
                </div>
                {isSignedIn && (
                    <nav className='md:flex flex-1 px-9 gap-3 hidden'>
                        <Button variant="ghost">
                            <Link href="/" className='text-gray-600 hover:text-gray-800  text-[15px]'>Dashboard</Link>
                        </Button>
                        <Button variant="ghost">
                            <Users className="h-4 w-4 text-orange-700" />
                            <Link href="/communities" className='text-gray-600 hover:text-gray-800  text-[15px]'>Communities</Link>
                        </Button>
                        <Button variant="ghost">
                            <MessageCircle className="h-4 w-4 -mr-0.9 text-orange-700" />
                            <Link href="/events" className='text-gray-600 hover:text-gray-800 text-[15px]'>Chat</Link>
                            </Button>
                    </nav>
                )}

                {isSignedIn ? (
                    <>
                        {isPro ? (
                            <Badge className='flex items-center text-[15px] h-9 w-20 gap-2 mx-4 bg-slate-50 text-black' variant={"outline"}>
                                <Trophy className=' text-yellow-500 mb-1' style={{ height: '18px', width: '16px' }} />
                                Pro
                            </Badge>) : (
                            <Badge className='flex items-center text-[15px] h-9 w-20 gap-2 bg-slate-50 text-black' variant={"outline"}>
                                Free
                            </Badge>
                        )}
                        
                          <SignedIn>
                                <UserButton />
                            </SignedIn>
                    </>

                ) : (
                    <>
                        <div className='flex items-center space-x-4 px-4'>
                            {/* Show the sign-in and sign-up buttons when the user is signed out */}
                             <SignedOut>
                            <Link href="/sign-in">
                                <Button variant="ghost">Sign In</Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button>Sign Up</Button>
                            </Link>
                        </SignedOut>
                        </div>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header