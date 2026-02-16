import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import CodeBlock from "@/app/components/code-block"

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

// Define components to pass to MDXRemote
const components = {
    CodeBlock,
    // Add other components here if needed in MDX
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 md:px-6 py-8">
                <div className="mx-auto max-w-4xl">
                    <Link
                        href="/blog"
                        className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Blog
                    </Link>

                    <article className="mx-auto max-w-3xl">
                        <header className="mb-12 border-b border-border/50 pb-8">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/10 hover:border-primary/30"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
                                    <span className="font-medium text-foreground">Mohsin Khan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </header>

                        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold prose-code:text-primary prose-code:bg-primary/10 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:before:content-none prose-code:after:content-none">
                            <MDXRemote source={post.content} components={components} />
                        </div>
                    </article>
                </div>
            </main>

            <div className="mt-16">
                <Footer />
            </div>
        </div>
    )
}
