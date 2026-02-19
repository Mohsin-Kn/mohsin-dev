"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
    { href: "/#about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
]

export default function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full glass">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container mx-auto h-16">
                <div className="flex items-center justify-between h-full px-4 md:px-6">
                    {/* Logo */}
                    <Link
                        className="flex items-center space-x-2 group"
                        href="/"
                    >
                        <span className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                            Mohsin<span className="text-primary">.dev</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`nav-link text-sm font-medium transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-muted-foreground"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="outline"
                                className="glass border-primary/30 hover:border-primary hover:glow-sm transition-all"
                            >
                                Resume
                            </Button>
                        </Link>
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border/50">
                        <nav className="flex flex-col p-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-muted-foreground"
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="flex items-center space-x-4 pt-2 border-t border-border/50">
                                <Link href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="glass border-primary/30"
                                    >
                                        Resume
                                    </Button>
                                </Link>
                                <ThemeToggle />
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
