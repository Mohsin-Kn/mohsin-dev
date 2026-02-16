import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="relative border-t border-border/50">
            {/* Gradient top border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto py-12 px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo and copyright */}
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <Link href="/" className="font-bold text-lg">
                            Mohsin<span className="text-primary">.dev</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="https://github.com/Mohsin-Kn"
                            target="_blank"
                            className="p-2 rounded-full glass hover:glow-sm transition-all text-muted-foreground hover:text-primary"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/mohsin-khan-565a73174/"
                            target="_blank"
                            className="p-2 rounded-full glass hover:glow-sm transition-all text-muted-foreground hover:text-primary"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            className="p-2 rounded-full glass hover:glow-sm transition-all text-muted-foreground hover:text-primary"
                        >
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link
                            href="mailto:mohsinknofficial@gmail.com"
                            className="p-2 rounded-full glass hover:glow-sm transition-all text-muted-foreground hover:text-primary"
                        >
                            <Mail className="h-5 w-5" />
                        </Link>
                    </div>

                    {/* Links */}
                    <nav className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <Link href="/projects" className="hover:text-primary transition-colors">
                            Projects
                        </Link>
                        <Link href="/blog" className="hover:text-primary transition-colors">
                            Blog
                        </Link>
                        <Link href="/#contact" className="hover:text-primary transition-colors">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
