'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProjectCard from '@/components/projectCard/ProjectCard'
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import projects from '../../../public/data/projects'

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}

export default function Projects() {
    return (
        <section id='projects' className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-[35%] text-center lg:text-start">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                                Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Projects</span>
                            </h2>
                            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                                A selection of my most impactful works, ranging from complex mobile ecosystems to high-performance web applications.
                            </p>
                            <Link href="/projects">
                                <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                                    Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="lg:w-[65%] w-full">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Swiper
                                modules={[Pagination]}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                spaceBetween={40}
                                slidesPerView={1}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                }}
                                className='!pb-20 !px-4'
                            >
                                {projects.map((project) => (
                                    <SwiperSlide key={project.id} className="h-full">
                                        <ProjectCard project={project} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}