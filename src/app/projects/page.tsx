'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/projectCard/ProjectCard'
import Link from 'next/link'
import projects from '../../../public/data/projects'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 px-8">
                <motion.div
                    className="container mx-auto"
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    <Tabs defaultValue="All Projects" className="mb-12">
                        <div className='text-center'>
                            <TabsList className="lg:flex mx-auto lg:flex-row lg:max-w-[640px] flex-col space-y-1 lg:space-y-0 lg:border rounded-full">
                                {categories.map((category) => (
                                    <TabsTrigger
                                        className='w-[160px]'
                                        key={category}
                                        value={category}
                                        onClick={() => setActiveCategory(category)}
                                    >
                                        {category}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>
                    </Tabs>
                    <AnimatePresence>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                            variants={staggerContainer}
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
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}