import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  ctaLabel: string
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  ctaLabel,
}: ProjectCardProps) {
  return (
    <Card className="surface-panel group h-full overflow-hidden rounded-[28px] border-0">
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-90" />
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-3 text-xl font-semibold leading-snug text-balance md:text-2xl">
          {title}
        </h3>
        <p className="mb-5 text-sm leading-7 text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1"
        >
          <Github className="h-4 w-4" />
          {ctaLabel}
        </Link>
      </CardFooter>
    </Card>
  )
}
