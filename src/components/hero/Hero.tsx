"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, Instagram, Sparkles, Smartphone, Globe, Database } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
}

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-secondary/20">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full opacity-50" />
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
                    >
                        <Sparkles size={14} className="animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest leading-none">Available for new opportunities</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] mb-6"
                    >
                        Muhammad <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40">Ahsen</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
                    >
                        Innovative Full Stack Developer specializing in Node.js, React Native, and Next.js. Focused on creating cross-platform mobile apps and responsive web applications.
                    </motion.p>

                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mb-12 opacity-80"
                    >
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <Smartphone size={18} className="text-primary" />
                            <span>Mobile Apps</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <Globe size={18} className="text-primary" />
                            <span>Web Systems</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <Database size={18} className="text-primary" />
                            <span>Backend Architecture</span>
                        </div>
                    </motion.div> */}

                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                    >
                        <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                            <Download className="mr-2 h-4 w-4" /> Download Resume
                        </Button>
                        <Link href="#contact" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full rounded-full px-8 h-12 text-base font-semibold bg-background/50 backdrop-blur-sm border-secondary/50 hover:bg-secondary/20 transition-all duration-300">
                                <Mail className="mr-2 h-4 w-4" /> Let's Talk
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="flex items-center gap-6 mt-16"
                    >
                        {[
                            { icon: <Github size={22} />, url: "https://github.com/MAhsen23" },
                            { icon: <Linkedin size={22} />, url: "https://www.linkedin.com/in/m-ahsen/" },
                            { icon: <Instagram size={22} />, url: "https://www.instagram.com/ahsenshiekh_ak/" },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
