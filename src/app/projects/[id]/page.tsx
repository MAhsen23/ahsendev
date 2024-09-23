"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, Github, ExternalLink, Calendar, Clock, User, Tag, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import projects from '../../../../public/data/projects'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export default function ProjectPage() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        notFound();
    }

    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)

    const openLightbox = (index: number) => {
        setCurrentImage(index)
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
    }

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % project.images.length)
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-8 py-12">
                <motion.div {...fadeInUp} className="mb-8 max-w-4xl mx-auto">
                    <Link href="/projects" passHref>
                        <Button variant="link" className="pl-0">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                        </Button>
                    </Link>
                </motion.div>

                <motion.article {...fadeInUp} className="max-w-4xl mx-auto">
                    <header className="mb-8">
                        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
                            {project.title}
                        </motion.h1>
                        <motion.p {...fadeInUp} className="text-xl text-muted-foreground mb-6">
                            {project.description}
                        </motion.p>
                        <motion.div {...fadeInUp} className="flex flex-wrap gap-4 mb-6">
                            {project.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary">
                                    <Tag className="w-3 h-3 mr-1" />
                                    {tag}
                                </Badge>
                            ))}
                        </motion.div>
                        <motion.div {...fadeInUp} className="flex flex-wrap items-center text-muted-foreground mb-6 gap-6">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{project.date}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                <span>{project.client}</span>
                            </div>
                        </motion.div>
                        <motion.div {...fadeInUp} className="flex gap-4">
                            <Button asChild>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" /> View Live
                                </a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                                </a>
                            </Button>
                        </motion.div>
                    </header>

                    <motion.section {...fadeInUp} className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {project.images.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="cursor-pointer overflow-hidden border rounded-xl"
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => openLightbox(index)}
                                >
                                    <Image
                                        src={image}
                                        alt={`${project.title} - Image ${index + 1}`}
                                        width={400}
                                        height={300}
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section {...fadeInUp} className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Features</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.div {...fadeInUp} className="text-center">
                        <h2 className="text-3xl border-t pt-8 font-bold mb-6">Interested in working together?</h2>
                        <Button size="lg" asChild>
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </motion.div>
                </motion.article>
            </main>
            <Footer />
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 text-white"
                            onClick={closeLightbox}
                        >
                            <X className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
                            onClick={(e) => {
                                e.stopPropagation()
                                prevImage()
                            }}
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
                            onClick={(e) => {
                                e.stopPropagation()
                                nextImage()
                            }}
                        >
                            <ArrowLeft className="h-6 w-6 rotate-180" />
                        </Button>
                        <Image
                            src={project.images[currentImage]}
                            alt={`${project.title} - Image ${currentImage + 1}`}
                            width={1200}
                            height={800}
                            objectFit="contain"
                            className="max-h-[90vh] w-auto"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}