import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Sparkles } from "lucide-react"
import Link from "next/link"
import Header from "./components/header"
import Footer from "./components/footer"
import ContactForm from "./components/contact-form"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section id="about" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col items-center justify-center space-y-8 text-center">
                {/* Name and title */}
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Hi, I'm{" "}
                    <span className="gradient-text">Mohsin Khan</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                    <span className="text-primary font-medium">AI/ML Engineer</span> building intelligent systems and digital experiences with modern technologies. Focused on creating elegant solutions to complex, data-driven problems.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="#contact">
                    <Button size="lg" className="gradient-bg glow hover:glow-lg transition-all text-white font-medium px-8">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get in Touch
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button size="lg" variant="outline" className="glass border-primary/30 hover:border-primary hover:glow-sm transition-all px-8">
                      View Projects
                    </Button>
                  </Link>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 pt-4">
                  <Link href="https://github.com/Mohsin-Kn" target="_blank">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/mohsin-khan-565a73174/" target="_blank">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="mailto:mohsinknofficial@gmail.com">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="relative py-24 md:py-32">
          {/* Section background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                  Tech <span className="gradient-text">Stack</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  The tools and technologies I use to bring ideas to life
                </p>
              </div>
              <TechStack />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                  Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Have a project in mind or want to collaborate? Let's talk!
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
