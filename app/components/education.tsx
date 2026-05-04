import { Calendar, GraduationCap, MapPin } from "lucide-react"
import type { EducationEntry } from "@/lib/portfolio-content"

interface EducationProps {
  entries: EducationEntry[]
}

export default function Education({ entries }: EducationProps) {
  return (
    <div className="space-y-12">
      {entries.map((entry) => (
        <div
          key={`${entry.title}-${entry.period}`}
          className="relative border-l border-muted-foreground/20 pl-8 before:absolute before:left-[-8px] before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-['']"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-semibold">{entry.title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{entry.period}</span>
            </div>
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4" />
            <span>{entry.school}</span>
            <span className="mx-1">•</span>
            <MapPin className="h-4 w-4" />
            <span>{entry.location}</span>
          </div>
          <div className="mt-4 space-y-2 text-muted-foreground">
            {entry.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
