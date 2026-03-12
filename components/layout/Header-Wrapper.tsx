import { auth } from '@clerk/nextjs/server'
import Header from "./Header";

export const HeaderWrapper = async () => {
  const { has } = await auth();
  
  // Check for pro_plan (based on your Clerk plan keys)
  const isPro = has({ plan: "pro_plan" });
  
  return (
    <Header isPro={isPro} />   
  );
};