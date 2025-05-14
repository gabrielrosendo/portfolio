import { Calendar, GraduationCap, MapPin, Users } from "lucide-react"

export default function Education() {
  return (
    <div className="space-y-12">
      {/* GCU Education */}
      <div className="relative border-l border-muted-foreground/20 pl-8 before:absolute before:left-[-8px] before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-['']">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold">
            Bachelor of Science: Computer Science with an Emphasis in Big Data Analytics
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>2021 - 2025</span>
          </div>
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCap className="h-4 w-4" />
          <span>Grand Canyon University</span>
          <span className="mx-1">•</span>
          <MapPin className="h-4 w-4" />
          <span>Phoenix, AZ</span>
        </div>
        <div className="mt-4 space-y-2 text-muted-foreground">
          <p>Cumulative GPA: 3.70</p>
          <p>Honors and Awards: Provost Scholarship, Dean's list</p>
          <div className="flex items-start gap-2 mt-4">
            <Users className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-foreground">Student Leader at the Multicultural Office</p>
              <p>
                Promoting cultural diversity and inclusion through campus events and initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Taiwan Exchange */}
      <div className="relative border-l border-muted-foreground/20 pl-8 before:absolute before:left-[-8px] before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-['']">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold">Rotary Youth Exchange</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>2019 - 2020</span>
          </div>
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCap className="h-4 w-4" />
          <span>Youth Senior High School (青年高中)</span>
          <span className="mx-1">•</span>
          <MapPin className="h-4 w-4" />
          <span>Taichung, Taiwan</span>
        </div>
        <div className="mt-4 space-y-2 text-muted-foreground">
          <p>Lived in Taiwan for a year, attended classes in a Taiwanese high school, and studied Chinese.</p>
          <p>Presented about cultural differences at schools and community events.</p>
        </div>
      </div>
    </div>
  )
}
