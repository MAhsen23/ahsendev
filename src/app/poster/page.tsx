import { Check, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingSection() {
    const websiteTypes = [
        "Company Website", "Online Store", "Restaurant Website", "Portfolio Showcase",
        "News/Blog Site", "Educational Platform", "Real Estate Listings",
        "Travel and Tourism Site", "Health and Wellness Portal", "Non-Profit Organization Site",
    ]

    const plans = [
        {
            name: "Starter",
            price: "PKR 29,999",
            discountedPrice: "PKR 24,999",
            features: [
                "4 pages static website",
                "5-day delivery",
                "Responsive design",
                "Basic SEO",
                "Contact form",
            ],
            badge: "Popular",
        },
        {
            name: "Growth",
            price: "PKR 54,999",
            discountedPrice: "PKR 45,999",
            features: [
                "8 pages dynamic website",
                "7-day delivery",
                "Advanced SEO",
                "Custom functionality",
                "1 month maintenance",
            ],
        },
        {
            name: "Premium",
            price: "PKR 99,999",
            discountedPrice: "PKR 79,999",
            features: [
                "15 pages full website/app",
                "14-day delivery",
                "E-commerce (if needed)",
                "Multi-language support",
                "3 months maintenance",
                "Admin Panel",
                "UI Design",
            ],
            badge: "Best Value",
        },
    ]

    return (
        <section className="w-full py-6 bg-white text-black">
            <div className="px-8">
                <h2 className="text-3xl font-bold text-center mb-4 tracking-wide">Boost Your Business with a Custom Website!</h2>
                <p className="text-center mb-6 text-gray-600">Boost your online presence today!</p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {plans.map((plan) => (
                        <Card key={plan.name} className="flex flex-col border-2 shadow-none border-black">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-xl">{plan.name}</CardTitle>
                                <div className="text-2xl font-bold">{plan.discountedPrice}</div>
                                <div className="text-sm line-through text-gray-400">{plan.price}</div>
                            </CardHeader>
                            <CardContent className="flex-grow pt-0">
                                <ul className="space-y-1 text-sm mb-2">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <Check className="mr-1 h-3 w-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 text-sm">
                    <div className="flex-1">
                        <h3 className="font-bold mb-2">Why Choose Us?</h3>
                        <ul className="grid grid-cols-2 gap-x-4">
                            {websiteTypes.map((type) => (
                                <li key={type} className="flex mb-1 items-center">
                                    <Check className="mr-1 h-3 w-3" />
                                    {type}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-end text-right">
                        <div className="bg-gray-100 p-3 rounded-lg shadow-sm mb-3">
                            <div className="flex items-center justify-end space-x-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="font-semibold text-gray-800">4.9/5 Client Satisfaction</p>
                            <p className="text-xs text-gray-600">Based on 100+ reviews</p>
                        </div>
                        <div className="space-y-2">
                            <Button className="bg-green-600 hover:bg-green-700 text-white text-sm w-full" size="sm">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Contact: +92 305 5701828
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}