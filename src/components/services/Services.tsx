"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Layers, Cpu, Smartphone, Headphones } from "lucide-react";

const services = [
    {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "Web Development",
        description:
            "Building responsive and dynamic web applications using modern frameworks and technologies.",
        tags: ["React", "Next.js", "Tailwind"],
    },
    {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: "App Development",
        description:
            "Creating engaging and high performance mobile applications for iOS and Android platforms.",
        tags: ["React Native", "SQLite", "Redux"],
    },
    {
        icon: <Cpu className="h-8 w-8 text-primary" />,
        title: "API Development",
        description: "Creating robust and scalable APIs to power your web and mobile applications.",
        tags: ["RESTful", "GraphQL", "Microservices"],
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Performance Optimization",
        description:
            "Enhancing website speed and efficiency for better user satisfaction and conversion rates.",
        tags: ["Lazy Loading", "Code Splitting", "Caching"],
    },
    {
        icon: <Layers className="h-8 w-8 text-primary" />,
        title: "Full-Stack Solutions",
        description:
            "Developing full stack web solutions from database design to front end implementation.",
        tags: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
        icon: <Headphones className="h-8 w-8 text-primary" />,
        title: "Technical Support",
        description: "Providing 24/7 technical support to ensure your applications run smoothly.",
        tags: ["Customer Service", "Troubleshooting", "Maintenance"],
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function Services() {
    return (
        <section id="services" className="md:py-24 py-20">
            <div className="container mx-auto px-8">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={{
                        animate: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    <motion.h2
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-12"
                    >
                        Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                transition={{ duration: 0.5 }}
                            >
                                <Card className="h-full overflow-hidden transition-all duration-300 shadow-none border border-primary/10 hover:border-primary">
                                    <CardHeader className="p-6">
                                        <div className="mb-6 flex justify-center">{service.icon}</div>
                                        <CardTitle className="text-xl uppercase tracking-wide font-semibold text-center">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground text-center mb-6">
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {service.tags.map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="outline">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
