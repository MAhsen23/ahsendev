import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}

interface Project {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    image: string;
    images: string[];
    tags: string[];
    githubLink: string;
    liveLink: string;
    category: string;
    features: string[];
    date: string;
    duration: string;
    client: string;
    role: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="group"
        >
            <Card className="h-full flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-secondary/30 hover:border-primary/50 transition-all duration-500 shadow-sm">
                <CardHeader className="p-0 overflow-hidden relative">
                    <div className="relative aspect-video overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <div className="flex flex-wrap gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                {project.tags.slice(0, 3).map((tag, index) => (
                                    <Badge key={index} variant="secondary" className="bg-primary/20 text-primary border-none backdrop-blur-md">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-8 flex flex-col flex-1">
                    <div className="mb-4">
                        <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">{project.category}</span>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-8 leading-relaxed line-clamp-3 text-sm flex-1">
                        {project.shortDescription}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-secondary/30">
                        <Link href={`/projects/${project.id}`} className="w-full">
                            <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-primary-foreground border-primary/20 transition-all duration-300">
                                View Details
                                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
export default ProjectCard
