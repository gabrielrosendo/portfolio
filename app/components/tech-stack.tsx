import { Card } from "@/components/ui/card"
import type { TechnologyCategory } from "@/lib/portfolio-content"

interface TechStackProps {
  categories: TechnologyCategory[]
}

export default function TechStack({ categories }: TechStackProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {categories.map((tech) => (
        <Card key={tech.category} className="surface-panel rounded-[28px] border-0 p-6 md:p-7">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold md:text-xl">{tech.category}</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-border via-border/40 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
