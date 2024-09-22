import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 shadow-none border">
                <CardHeader className="p-0">
                    <div className="relative aspect-video">
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.shortDescription}</p>
                    <div className="flex gap-4">
                        <Link href={`/projects/${project.id}`}>
                            <Button variant="link" className="p-0 group-hover:underline">
                                Learn More <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
export default ProjectCard