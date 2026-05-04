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
          className="surface-panel relative rounded-[28px] border-0 p-7 pl-10 before:absolute before:bottom-7 before:left-[18px] before:top-7 before:w-px before:bg-gradient-to-b before:from-primary before:via-border before:to-transparent before:content-[''] after:absolute after:left-[13px] after:top-8 after:h-3 after:w-3 after:rounded-full after:border-2 after:border-primary after:bg-background after:content-[''] md:p-8 md:pl-12"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="max-w-2xl text-xl font-semibold leading-snug md:text-2xl">
              {entry.title}
            </h3>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{entry.period}</span>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4" />
            <span>{entry.school}</span>
            <span className="mx-1">•</span>
            <MapPin className="h-4 w-4" />
            <span>{entry.location}</span>
          </div>
          <div className="mt-5 space-y-2 text-sm leading-7 text-muted-foreground">
            {entry.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
