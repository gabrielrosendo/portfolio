import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "Java", "C++"],
  },
  {
    category: "AI & LLM Systems",
    skills: [
      "LangGraph",
      "LLM Tool-Calling",
      "MCP Servers",
      "Model Abstraction Layers",
      "Azure AI Services",
      "TensorFlow",
      "RAG",
    ],
  },
  {
    category: "Frontend & Data",
    skills: ["React", "SQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Microsoft Azure",
      "Terraform",
      "CI/CD",
      "Git",
      "Linux",
      "Jira",
    ],
  },
  {
    category: "Certifications",
    skills: ["AWS Certified Cloud Practitioner"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
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
