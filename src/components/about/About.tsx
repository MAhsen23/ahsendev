"use client"
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Globe, Zap, Layers, Cpu, User2, PhoneCall, MailIcon, Calendar, GraduationCap, MapPin, Briefcase, Code2, Database, Terminal, Server, Award, Coffee, Book, Headphones, Gamepad, Github, Instagram, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "../ui/progress";

const infoData = [
    { icon: <User2 size={20} />, text: 'Muhammad Ahsen' },
    { icon: <PhoneCall size={20} />, text: '+92 336 0906030' },
    { icon: <MailIcon size={20} />, text: 'ahsan.shiekh@outlook.com' },
    { icon: <MapPin size={20} />, text: 'Rawalpindi, Pakistan' },
];

const interests = [
    { icon: <Coffee size={20} />, text: 'Coffee Enthusiast' },
    { icon: <Book size={20} />, text: 'Avid Reader' },
    { icon: <Headphones size={20} />, text: 'Music Lover' },
    { icon: <Gamepad size={20} />, text: 'Casual Gamer' },
];

const skills = [
    { name: "React / React Native", icon: <Code size={20} />, level: 90 },
    { name: "JavaScript / TypeScript", icon: <Code2 size={20} />, level: 85 },
    { name: "Mern", icon: <Server size={20} />, level: 80 },
    { name: "Next Js", icon: <Zap size={20} />, level: 75 },
    { name: "SQL", icon: <Database size={20} />, level: 70 },
    { name: "Python", icon: <Terminal size={20} />, level: 65 },
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
    { icon: <Github size={20} />, url: "https://github.com/yourusername" },
    { icon: <Instagram size={20} />, url: "https://linkedin.com/in/yourusername" },
    { icon: <Youtube size={20} />, url: "https://twitter.com/yourusername" },
    { icon: <Linkedin size={20} />, url: "mailto:your.email@example.com" },
];

const experiences = [
    {
        company: "Enabling Systems",
        role: "React Native Developer",
        duration: "2024 Mar - July",
    },
    {
        company: "Sprinsoft",
        role: "Full Stack Developer",
        duration: "2024 July - Present",
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
                                    src="/me.jpg"
                                    alt="Muhammad Ahsen"
                                    width={300}
                                    height={300}
                                    className="rounded-full mx-auto mb-6 border-4 border-primary/20"
                                />
                                <h3 className="text-2xl font-bold text-center mb-4">Full Stack Developer</h3>
                                <div className="text-center mb-6">
                                    <p className="text-sm text-muted-foreground">BSCS Computer Science, Arid University</p>
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
                                <div className="text-center lg:text-start">
                                    <TabsList className="lg:flex lg:flex-row lg:max-w-[480px] flex-col space-y-1 lg:space-y-0 mb-12 lg:border rounded-full">
                                        <TabsTrigger className="w-[160px]" value="personal">Personal Info</TabsTrigger>
                                        <TabsTrigger className="w-[160px]" value="qualifications">Experience</TabsTrigger>
                                        <TabsTrigger className="w-[160px]" value="skills">Skills</TabsTrigger>
                                    </TabsList>
                                </div>
                                <div>
                                    <TabsContent value="personal">
                                        <div className="text-center lg:text-start">
                                            <h3 className="text-xl md:text-2xl font-bold mb-4">More Than Just Code</h3>
                                            <p className="text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">I'm passionate about creating digital experiences that make a difference.</p>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                                                {infoData.map((item, index) => (
                                                    <div key={index} className="flex items-center gap-x-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/40 transition-all duration-300">
                                                        <div className="bg-primary text-primary-foreground p-2 rounded-full">{item.icon}</div>
                                                        <div>
                                                            <div className="text-sm text-muted-foreground">{item.text}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-muted-foreground mb-8 border-b pb-2">Interests & Hobbies</p>
                                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                                {interests.map((interest, index) => (
                                                    <Badge key={index} variant="outline" className="flex md:w-40 items-center gap-2">
                                                        {interest.icon}
                                                        <span>{interest.text}</span>
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="qualifications">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center lg:text-start">My Awesome Journey</h3>
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-base">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">Professional Experience</h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {experiences.map((experience, index) => (
                                                        <div key={index} className="flex gap-x-8 group">
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-base leading-none mb-2">{experience.company}</div>
                                                                <div className="text-sm text-muted-foreground mb-4">{experience.role}</div>
                                                                <div className="text-sm font-medium">{experience.duration}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="skills">
                                        <div className="text-center lg:text-start">
                                            <h3 className="text-xl md:text-2xl font-bold mb-4">Expertise Overview</h3>
                                            <p className="text-muted-foreground mb-8 border-b pb-2">Skills</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                                {skills.map((skill, index) => (
                                                    <div key={index}>
                                                        <div className="flex justify-between mb-1">
                                                            <div className="flex gap-2">
                                                                <div>{skill.icon}</div>
                                                                <span className="text-sm">{skill.name}</span>
                                                            </div>
                                                            <span className="text-sm">{skill.level}%</span>
                                                        </div>
                                                        <Progress value={skill.level} className="w-full h-1 rounded-full" />
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-muted-foreground mb-8 border-b pb-2">Tools</p>
                                            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                                                {tools.map((tool, index) => (
                                                    <div key={index} className="flex justify-center">
                                                        <Image src={tool.svg} alt={tool.name} width={40} height={40} className="w-10 h-10 object-contain" />
                                                    </div>
                                                ))}
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