"use client"
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, User2, PhoneCall, MailIcon, MapPin, Briefcase, Code2, Database, Terminal, Server, Coffee, Book, Headphones, Gamepad, Github, Instagram, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const infoData = [
    { icon: <User2 size={20} />, text: 'Muhammad Ahsen', label: 'Name' },
    { icon: <PhoneCall size={20} />, text: '+92 336 0906030', label: 'Phone' },
    { icon: <MailIcon size={20} />, text: 'ahsan.shiekh@outlook.com', label: 'Email' },
    { icon: <MapPin size={20} />, text: 'Rawalpindi, Pakistan', label: 'Location' },
];

const interests = [
    { icon: <Coffee size={20} />, text: 'Coffee Enthusiast' },
    { icon: <Book size={20} />, text: 'Avid Reader' },
    { icon: <Headphones size={20} />, text: 'Music Lover' },
    { icon: <Gamepad size={20} />, text: 'Casual Gamer' },
];

const skills = [
    { name: "React Native", icon: <Code size={20} />, level: 95 },
    { name: "React & Next.js", icon: <Zap size={20} />, level: 90 },
    { name: "JavaScript / TypeScript", icon: <Code2 size={20} />, level: 92 },
    { name: "Node.js & Express", icon: <Server size={20} />, level: 88 },
    { name: "MongoDB & SQL", icon: <Database size={20} />, level: 85 },
    { name: "RESTful APIs / Git", icon: <Briefcase size={20} />, level: 90 },
];

const tools = [
    { name: "Git", svg: "/svgs/git.svg" },
    { name: "Visual Studio Code", svg: "/svgs/visualstudio.svg" },
    { name: "Postman", svg: "/svgs/postman.svg" },
    { name: "Slack", svg: "/svgs/slack.svg" },
    { name: "GitHub", svg: "/svgs/github.svg" },
    { name: "Pycharm", svg: "/svgs/pycharm.svg" },
];

const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/MAhsen23" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/ahsenshiekh_ak/" },
    { icon: <Youtube size={20} />, url: "https://www.youtube.com/@codingiva" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/m-ahsen/" },
];

const experiences = [
    {
        company: "Galore, Malaysia",
        role: "Senior React Native Developer",
        duration: "2025 Feb – Present",
        description: [
            "Developed and improved Galore service apps (User, Rider, Merchant) using React Native, focusing on performance.",
            "Built real-time features like live chat, order updates, and location tracking using Firebase and Sockets.",
            "Integrated Google Authentication, push notifications, and secure payment gateways."
        ]
    },
    {
        company: "Hiebuzz, Pakistan",
        role: "Full-Stack Developer",
        duration: "2024 July – 2025 Aug",
        description: [
            "Led the full development lifecycle of a live-streaming application using Node.js and React Native.",
            "Implemented real-time audio/video features and PK battles using Zego and Agora SDKs.",
            "Managed VPS server deployments and optimized system stability for high-traffic streaming."
        ]
    },
    {
        company: "Enabling Systems, Rawalpindi",
        role: "React Native Developer",
        duration: "2024 Mar - 2024 July",
        description: [
            "Developed and optimized cross-platform mobile applications (Xave and xPal Mac).",
            "Implemented native modules for iOS and Android, improving app performance.",
            "Optimized encryption algorithms and integrated SQLite for local data storage."
        ]
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function About() {
    return (
        <section id="about" className="md:py-28 py-20">
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
                        About me
                    </motion.h2>
                    <div className="flex flex-col lg:flex-row gap-8">
                        <motion.div className="lg:w-[40%]" variants={fadeInUp}>
                            <div className="p-6">
                                <Image
                                    src="/me.png"
                                    alt="Muhammad Ahsen"
                                    width={300}
                                    height={300}
                                    className="rounded-full mx-auto mb-6 border-4 border-primary/20"
                                />
                                <h3 className="text-2xl font-bold text-center mb-4">Lead Full Stack Developer</h3>
                                <div className="text-center mb-6">
                                    <p className="text-sm text-muted-foreground">BSCS, BIIT (Arid University) | CGPA: 3.94</p>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    {socialLinks.map((link, index) => (
                                        <div key={index} className="bg-primary text-primary-foreground p-2 rounded-full">
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary-foreground hover:text-muted-foreground transition-colors duration-200"
                                            >
                                                {link.icon}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="flex-1" variants={fadeInUp}>
                            <Tabs defaultValue="personal" className="w-full">
                                <div className="flex justify-center lg:justify-start">
                                    <TabsList className="flex h-auto p-1 bg-secondary/30 rounded-full border border-secondary/50 mb-12 w-full max-w-fit overflow-x-auto scrollbar-hide">
                                        <TabsTrigger className="w-[120px] md:w-[160px] py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 whitespace-nowrap text-xs md:text-sm" value="personal">Personal Info</TabsTrigger>
                                        <TabsTrigger className="w-[120px] md:w-[160px] py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 whitespace-nowrap text-xs md:text-sm" value="qualifications">Experience</TabsTrigger>
                                        <TabsTrigger className="w-[120px] md:w-[160px] py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 whitespace-nowrap text-xs md:text-sm" value="skills">Skills</TabsTrigger>
                                    </TabsList>
                                </div>
                                <div>
                                    <TabsContent value="personal">
                                        <div className="text-center lg:text-start">
                                            <h3 className="text-2xl font-bold mb-6 text-primary">Professional Profile</h3>
                                            <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                                                I am a results-driven Lead Full Stack Developer with a deep passion for building high-performance applications.
                                                My expertise lies in bridge-building between complex backend architectures and intuitive mobile/web interfaces.
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-10 gap-x-12 mb-12">
                                                {infoData.map((item, index) => (
                                                    <div key={index} className="flex flex-col gap-y-1.5 md:gap-y-2 relative group text-start">
                                                        <div className="flex items-center gap-x-3 text-primary/70">
                                                            <div className="bg-primary/10 p-1.5 md:p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                                                                {React.cloneElement(item.icon as React.ReactElement, { size: 16 })}
                                                            </div>
                                                            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                                                                {item.label}
                                                            </span>
                                                        </div>
                                                        <div className="text-sm md:text-lg font-semibold tracking-tight border-b border-secondary/30 pb-2 md:pb-3 group-hover:border-primary/50 transition-all duration-300 break-words">
                                                            {item.text}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-6">
                                                <h4 className="text-lg font-semibold border-l-4 border-primary pl-4">Interests & Hobbies</h4>
                                                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                                    {interests.map((interest, index) => (
                                                        <Badge key={index} variant="secondary" className="px-4 py-2 flex items-center gap-2 rounded-full border-none bg-secondary/40 hover:bg-primary/20 transition-colors">
                                                            <span className="text-primary">{interest.icon}</span>
                                                            <span className="font-medium">{interest.text}</span>
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="qualifications">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-8 text-primary text-center lg:text-start">Professional Journey</h3>
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-lg font-semibold mb-4 text-muted-foreground">
                                                    <Briefcase className="text-primary" />
                                                    <h4>Work Experience</h4>
                                                </div>
                                                <div className="flex flex-col gap-y-10 relative before:absolute before:left-[13px] before:top-2 before:bottom-2 before:w-[2px] before:bg-secondary/50">
                                                    {experiences.map((experience, index) => (
                                                        <div key={index} className="flex gap-x-10 group relative">
                                                            <div className="w-[28px] h-[28px] rounded-full bg-background border-4 border-primary z-10 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                                                            <div className="pb-2">
                                                                <div className="font-bold text-xl leading-none mb-2 group-hover:text-primary transition-colors duration-300">{experience.company}</div>
                                                                <div className="text-sm font-semibold text-primary/80 mb-2 uppercase tracking-wider">{experience.role}</div>
                                                                <div className="text-xs font-medium text-muted-foreground mb-4 px-2 py-1 bg-secondary/30 rounded-md inline-block">{experience.duration}</div>
                                                                <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-2 max-w-xl">
                                                                    {experience.description.map((item, i) => (
                                                                        <li key={i} className="leading-relaxed">{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="skills">
                                        <div className="text-center lg:text-start">
                                            <h3 className="text-2xl font-bold mb-8 text-primary">Technical Expertise</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
                                                {skills.map((skill, index) => (
                                                    <div key={index} className="space-y-3">
                                                        <div className="flex justify-between items-end">
                                                            <div className="flex items-center gap-3">
                                                                <div className="text-primary">{skill.icon}</div>
                                                                <span className="text-sm font-bold uppercase tracking-wider">{skill.name}</span>
                                                            </div>
                                                            <span className="text-xs font-bold text-muted-foreground">{skill.level}%</span>
                                                        </div>
                                                        <div className="relative h-2 w-full bg-secondary/30 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                whileInView={{ width: `${skill.level}%` }}
                                                                transition={{ duration: 1, delay: 0.2 }}
                                                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-8">
                                                <h4 className="text-lg font-semibold border-l-4 border-primary pl-4">Tools & Environment</h4>
                                                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                                                    {tools.map((tool, index) => (
                                                        <motion.div
                                                            key={index}
                                                            whileHover={{ y: -5 }}
                                                            className="p-4 rounded-2xl bg-secondary/20 border border-secondary/30 hover:border-primary/30 transition-all duration-300"
                                                        >
                                                            <Image src={tool.svg} alt={tool.name} width={40} height={40} className="w-10 h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </motion.div>
                    </div>
                </motion.div >
            </div >
        </section >
    );
}