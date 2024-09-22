"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import Image from 'next/image';

const blogPosts = [
    {
        title: "Do Coders Make Good Money?",
        date: "29/FEB/2022",
        author: "Ahsen",
        image: "/posts/post-4.png",
        category: 'Programming'
    },
    {
        title: "The Future of AI Robots",
        date: "29/FEB/2022",
        author: "Ahsen",
        image: "/posts/post-6.png",
        category: 'Arificial Intelligence'
    },
    {
        title: "Aritficial Intelligence in Health",
        date: "29/FEB/2022",
        author: "Ahsen",
        image: "/posts/post-7.png",
        category: 'Arificial Intelligence'
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const fadeIn = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export default function Blog() {
    return (
        <motion.section
            id='blog'
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="py-24"
        >
            <div className="container mx-auto px-8">
                <motion.h2
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                >
                    Latest Blog Posts
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group h-full cursor-pointer rounded-t overflow-hidden transition-transform transform hover:-translate-y-2"
                        >
                            <div className="overflow-hidden relative">
                                <div className="relative aspect-video">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className='transition-transform transform group-hover:scale-110 duration-500'
                                    />
                                </div>
                                <div className="absolute top-4 right-4">
                                    <Badge variant={'secondary'}>{post.category}</Badge>
                                </div>
                            </div>
                            <div className="p-6 rounded-b bg-secondary/30">
                                <div className='flex items-center mb-3'>
                                    <Clock size={14} className="text-muted-foreground mr-2 mb-[1px]" />
                                    <span className='text-xs text-muted-foreground'>{post.date}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4 transition-colors group-hover:text-primary line-clamp-2 overflow-hidden text-ellipsis">
                                    {post.title}
                                </h3>
                                <Button variant="link" className="p-0 group-hover:underline">
                                    Read More <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="mt-12 text-center"
                >
                    <Button size="lg" className='bg-transparent shadow-none' variant="outline">
                        View All Posts
                    </Button>
                </motion.div>
            </div>
        </motion.section >
    );
}
