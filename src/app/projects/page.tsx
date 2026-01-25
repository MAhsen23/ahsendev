'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/projectCard/ProjectCard'
import projects from '../../../public/data/projects'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function AllProjects() {
    const [activeCategory, setActiveCategory] = useState('All Projects')
    const categories = ['All Projects', ...Array.from(new Set(projects.map(project => project.category)))]

    const filteredProjects = activeCategory === 'All Projects'
        ? projects
        : projects.filter(project => project.category === activeCategory)

    return (
        <div className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
            <Header />
            <main className="flex-1 py-24 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-8">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Archive</span>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Projects</span>
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            A comprehensive collection of my professional work, research projects, and creative experiments.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                    >
                        <div className="flex justify-center mb-16">
                            <Tabs defaultValue="All Projects" className="w-full max-w-4xl">
                                <TabsList className="flex flex-wrap h-auto gap-2 bg-secondary/20 p-2 rounded-2xl border border-secondary/30 backdrop-blur-sm justify-center">
                                    {categories.map((category) => (
                                        <TabsTrigger
                                            key={category}
                                            value={category}
                                            onClick={() => setActiveCategory(category)}
                                            className="rounded-xl px-6 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300"
                                        >
                                            {category}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </Tabs>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                            >
                                {filteredProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        variants={fadeInUp}
                                        layout
                                    >
                                        <ProjectCard project={project} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-muted-foreground text-xl">No projects found in this category.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    )
}