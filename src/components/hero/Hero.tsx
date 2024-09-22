"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function Hero() {
    return (
        <motion.section
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="container mx-auto flex flex-col items-center md:py-28 py-20 px-8 justify-center text-center"
        >
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            >
                Hi, I'm &nbsp; M. Ahsen
            </motion.h1>
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="max-w-[700px] text-lg text-muted-foreground sm:text-xl mt-4"
            >
                A passionate web developer creating beautiful and functional websites.
            </motion.p>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mt-8"
            >
                <Button size="lg">
                    <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
                <Button size="lg" className="shadow-none" variant="outline">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
            </motion.div>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex gap-4 mt-8"
            >
                <a href="#" className="text-muted-foreground hover:text-foreground">
                    <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                    <Twitter className="h-6 w-6" />
                </a>
            </motion.div>
        </motion.section>
    )
}