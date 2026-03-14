'use client'
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from 'lucide-react';
import PricingLoader from "@/components/ui/PricingLoader";
import { PricingTable } from "@clerk/nextjs";
export const Pricing = () => {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <section className="py-32 min-h-screen flex items-center bg-orange-50/50">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the plan that fits your learning journey. No hidden fees, ever.
                    </p>
                </div>

                {showLoader ? <PricingLoader /> : <PricingTable />}
            </div>

        </section>
    );
};

