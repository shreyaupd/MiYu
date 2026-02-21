import { SignIn } from "@clerk/nextjs";
export const SignInPage=()=>{
return(
    <div className="flex justify-center items-baseline-last min-h-screen">
        <SignIn/>
    </div>
)
}