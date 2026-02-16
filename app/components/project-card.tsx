import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link?: string
  company?: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, company, tags }: ProjectCardProps) {
  return (
    <Card className="glass border-border/50 overflow-hidden card-hover group">
      {/* Image container */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/assets/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on hover - only show if link exists */}
        {link && (
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link
              href={link}
              target="_blank"
              className="p-3 rounded-full gradient-bg glow text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        )}
        {/* Gradient border at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <CardContent className="p-5">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
          >
            <Github className="h-4 w-4" />
            <span className="nav-link">View on GitHub</span>
          </Link>
        ) : company ? (
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <span>Project associated with {company}</span>
          </span>
        ) : null}
      </CardFooter>
    </Card>
  )
}
