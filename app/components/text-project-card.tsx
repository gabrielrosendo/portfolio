import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"

interface TextProjectCardProps {
  title: string
  description: string
  link?: string
  tags: string[]
  ctaLabel: string
}

export default function TextProjectCard({
  title,
  description,
  link,
  tags,
  ctaLabel,
}: TextProjectCardProps) {
  return (
    <Card className="surface-panel h-full rounded-[28px] border-0">
      <CardContent className="p-6">
        <div className="mb-4 h-px w-20 bg-gradient-to-r from-primary via-accent to-transparent" />
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
      {link && (
        <CardFooter className="p-6 pt-0">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform duration-300 hover:translate-x-1"
          >
            <Github className="h-4 w-4" />
            {ctaLabel}
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}
