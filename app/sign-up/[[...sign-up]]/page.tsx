import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen min-w-screen mt-20 items-center bg-linear-to-br from-pink-50 via-orange-50 to-pink-100 justify-center">
      <SignUp/>
    </div>
  );
}