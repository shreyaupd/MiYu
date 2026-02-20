import { auth } from '@clerk/nextjs/server'
import Header from "./Header";

export const HeaderWrapper = async () => {
      const {has}= await auth();
      const isPro = has({plan:"pro"})
  return (
      <Header isPro={isPro} />   
  )
}