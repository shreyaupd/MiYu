'use client';
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import logo from "@/image/logo.png"
import Link from 'next/link';
import { useUser } from '@clerk/nextjs'
import { Badge } from "../ui/badge";
import { Trophy, Users, MessageCircle } from 'lucide-react'; // Change this import
const Header = ({isPro}:{isPro:boolean}) => {
    const { isSignedIn } = useUser();
    return (
        <header className="px-4 py-3 w-full bg-white">
            <nav className='flex justify-between items-center'>
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
                                <SignInButton />
                                <SignUpButton>
                                    <Button>
                                        Sign Up
                                    </Button>
                                </SignUpButton>
                            </SignedOut>
                        </div>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header