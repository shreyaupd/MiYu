'use client'
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Free",
        price: "0",
        description: "Perfect for getting started and exploring the platform.",
        features: [
            "Basic AI Matching",
            "Up to 3 Study Buddies",
            "Public Roadmap Access",
            "Community Support"
        ],
        buttonText: "Start for Free",
        popular: false
    },
    {
        name: "Pro",
        price: "19",
        description: "Unlock advanced features and accelerate your learning.",
        features: [
            "Advanced Smart Matching",
            "Unlimited Study Buddies",
            "Detailed Progress Analytics",
            "Priority AI Chat Support",
            "Custom Learning Paths"
        ],
        buttonText: "Get Pro Now",
        popular: true
    },
    {
        name: "Team",
        price: "49",
        description: "Best for study groups and small educational teams.",
        features: [
            "Everything in Pro",
            "Group Analytics",
            "Shared Resources",
            "Admin Dashboard",
            "Dedicated Support"
        ],
        buttonText: "Contact Sales",
        popular: false
    }
];

export const Pricing = () => {
    return (
        <section className="py-24 bg-orange-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the plan that fits your learning journey. No hidden fees, ever.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`relative p-8 rounded-3xl border bg-white shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                                plan.popular ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-orange-100'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-8 -translate-y-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-orange-950 mb-2">{plan.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                            </div>
                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-bold text-orange-950">${plan.price}</span>
                                <span className="text-gray-500 ml-2">/month</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center text-gray-600 text-sm">
                                        <Check className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                                plan.popular 
                                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25' 
                                : 'bg-orange-50 text-orange-950 hover:bg-orange-100'
                            }`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};