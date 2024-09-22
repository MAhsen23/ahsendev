"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import 'swiper/css'
import 'swiper/css/pagination'

interface Review {
    name: string
    position: string
    rating: number
    review: string
}

const reviews: Review[] = [
    {
        name: 'John Doe',
        position: 'CEO, Tech Innovators',
        rating: 5,
        review: 'Innovative web development exceeded our expectations and boosted our online presence significantly.',
    },
    {
        name: 'Jane Smith',
        position: 'Marketing Director, Solutions',
        rating: 5,
        review: 'Outstanding professionalism. They transformed complex technical concepts into user-friendly designs.',
    },
    {
        name: 'Mike Johnson',
        position: 'Founder, StartUp Ventures',
        rating: 5,
        review: 'Delivered a scalable, high-performing website that aligns perfectly with our brand vision.',
    },
    {
        name: 'Emily Brown',
        position: 'UX Director, Creative Designs Co.',
        rating: 5,
        review: 'Excellent UX design with responsive implementation across devices, showing a deep understanding of user behavior.',
    },
]

const ReviewCard = ({ name, position, rating, review }: Review) => (
    <Card className="h-72 shadow-none bg-secondary/20 flex flex-col">
        <CardHeader className="pb-2">
            <div className="flex items-center pb-6">
                <div className="min-w-12 min-h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-semibold mr-4">
                    {name.charAt(0)}
                </div>
                <div>
                    <h3 className="font-semibold text-base">{name}</h3>
                    <p className="text-sm text-muted-foreground">{position}</p>
                </div>
            </div>
            <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
            </div>
        </CardHeader>
        <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">{review}</p>
        </CardContent>
    </Card>
)

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}

export default function Reviews() {
    return (
        <section className="md:py-28 py-20">
            <div className="container mx-auto lg:px-16 px-8">
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
                        Client Testimonials
                    </motion.h2>
                    <div className="relative">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="!pb-20"
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide key={index} className="h-auto">
                                    <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="h-full px-[2px]">
                                        <ReviewCard {...review} />
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}