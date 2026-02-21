import { SignUp } from "@clerk/nextjs";
export const SignUpPage=()=>{
return(
    <div className="flex justify-center items-baseline-last min-h-screen">
        <SignUp/>
    </div>
)
}