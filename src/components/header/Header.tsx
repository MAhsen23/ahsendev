"use client"
import * as React from "react"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import ThemeToggle from "../toggle/ThemeToggle"

const navItems = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#services", label: "Services", id: "services" },
    { href: "#projects", label: "My Projects", id: "projects" },
    { href: "#blog", label: "Blog", id: "blog" },
    { href: "#contact", label: "Contact", id: "contact" },
]

export default function Header() {
    const { theme, setTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100
            for (const item of navItems) {
                const element = document.getElementById(item.id)
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(item.id)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
        setIsMenuOpen(false)
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    }, [isMenuOpen])

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
                <div className="container mx-auto px-4 md:px-8 flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="inline-block font-bold text-2xl">AS</span>
                    </Link>
                    <nav className="hidden md:flex space-x-6">
                        <NavLinks activeSection={activeSection} scrollToSection={scrollToSection} />
                        <ThemeToggle theme={theme as "dark" | "light"} toggleTheme={toggleTheme} />
                    </nav>
                    <div className="md:hidden flex items-center">
                        <ThemeToggle theme={theme as "dark" | "light"} toggleTheme={toggleTheme} />
                        <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={toggleMenu}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-64 bg-background z-50 overflow-y-auto"
                        >
                            <div className="flex justify-between items-center h-20 px-4 mb-8">
                                <Link href="#home" onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
                                    <span className="inline-block font-bold text-2xl">AS</span>
                                </Link>
                                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                                    <X className="h-6 w-6" />
                                    <span className="sr-only">Close menu</span>
                                </Button>
                            </div>
                            <nav className="flex flex-col items-center space-y-4">
                                <NavLinks activeSection={activeSection} scrollToSection={scrollToSection} />
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

function NavLinks({ activeSection, scrollToSection }: { activeSection: string, scrollToSection: (sectionId: string) => void }) {
    return (
        <>
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.id)
                    }}
                    className={`flex items-center text-sm font-medium transition-colors hover:text-primary relative ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                        }`}
                >
                    {item.label}
                </button>
            ))}
        </>
    )
}