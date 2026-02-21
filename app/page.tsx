'use client';
import { PricingTable } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import PricingLoader from "@/components/ui/PricingLoader";
export default function Home() {
  const[showLoader,setShowLoader]= useState(true);
  useEffect(()=>{
      const timer= setTimeout(()=>{
        setShowLoader(false);
      },1500)
      return ()=>clearTimeout(timer)
  },[])

  return (
    <div className="">
      <h1>hello miyu</h1>
         {showLoader?<PricingLoader/>:<PricingTable/>}
    </div>
  );
}
