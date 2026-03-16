import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center bg-linear-to-br from-pink-50 via-orange-50 to-pink-100 justify-center pt-7">
      <SignIn />
    </div>
  );
}