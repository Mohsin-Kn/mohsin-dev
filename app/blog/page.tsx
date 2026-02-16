import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/blog"

export default function BlogPage() {
  const blogPosts = getAllPosts()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  <span className="gradient-text">Blog</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Thoughts on software development, AI/ML, and building great products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 pb-24 md:pb-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <Card
                    key={post.slug}
                    className="glass border-border/50 flex flex-col card-hover shine group"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col pt-0">
                      <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full glass border-primary/30 hover:border-primary hover:glow-sm transition-all group/btn"
                        >
                          <span>Read Article</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
