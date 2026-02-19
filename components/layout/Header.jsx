import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import logo from "@/image/logo.png"
const Header = () => {
  return (
     <header className="px-4 py-3 w-full bg-white">
         <nav className='flex justify-between items-center'>
              <div>
               <img 
            src={logo.src}
            alt="Miyu Logo" 
            className="h-18 w-19"
          />
            </div>

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
              {/* Show the user button when the user is signed in */}
              <SignedIn>
                <UserButton />
              </SignedIn>
        </div>
         </nav>
    </header> 
  )
}

export default Header