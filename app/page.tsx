"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ArrowRight, Code, Database, Server, Calendar, Building, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ProjectCard from "./components/project-card"
import TextProjectCard from "./components/text-project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import Education from "./components/education"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                GM
              </div>
              <span className="hidden font-bold sm:inline-block">Gabriel Marcelino</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="#experience" className="transition-colors hover:text-primary">
                Experience
              </Link>
              <Link href="#skills" className="transition-colors hover:text-primary">
                Skills
              </Link>
              <Link href="#education" className="transition-colors hover:text-primary">
                Education
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="https://o4oavsqloi7a95at.public.blob.vercel-storage.com/RESUME_GMARCELINO-ZlztUzFKjyLWFlSZ84ZSG74LJ6iwnM.pdf"
              target="_blank"
            >
              <Button variant="outline" className="gap-2">
                <ArrowRight className="h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="flex flex-col space-y-6">
                <div>
                  <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                    Software Developer
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                    Gabriel <span className="text-primary">Marcelino</span>
                  </h1>
                  <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                    Coding, learning, and making data work smarter.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>Phoenix, AZ 85017</span>
                    <span className="mx-2">•</span>
                    <Phone className="h-4 w-4" />
                    <span>+1 (623) 287-8628</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="https://github.com/gabrielrosendo" target="_blank">
                    <Button variant="outline" size="lg" className="gap-2">
                      <Github className="h-5 w-5" />
                      GitHub
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/gabriel-marcelino-887766243/" target="_blank">
                    <Button variant="outline" size="lg" className="gap-2">
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href="mailto:gabrielrosendo72@gmail.com">
                    <Button variant="outline" size="lg" className="gap-2">
                      <Mail className="h-5 w-5" />
                      Email
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[280px]">
                <div className="relative aspect-square w-full overflow-hidden rounded-full border-2 border-muted-foreground/10 bg-background">
                  <Image
                    src="/images/profile.png"
                    alt="Gabriel Marcelino"
                    fill
                    className="object-cover scale-100"
                    style={{ objectPosition: "60% 40%" }}
                  />
                </div>
                <div className="absolute -right-4 top-1/4 rounded-full bg-background p-2 shadow-lg">
                  <div className="rounded-full bg-primary p-2">
                    <Code className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute -left-4 top-2/3 rounded-full bg-background p-2 shadow-lg">
                  <div className="rounded-full bg-secondary p-2">
                    <Database className="h-4 w-4 text-secondary-foreground" />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/3 rounded-full bg-background p-2 shadow-lg">
                  <div className="rounded-full bg-muted p-2">
                    <Server className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                About Me
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey in Tech</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                As a senior Computer Science student at Grand Canyon University, specializing in Big Data Analytics, I
                have developed a strong foundation in software development, data analysis, and machine learning.
                Graduating in April 2025, I am looking for an entry-level software developer role where I can apply my
                skills to build intelligent, data-driven solutions.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Card className="overflow-hidden border-none bg-muted/50 shadow-sm transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Programming Languages</h3>
                  <p className="mt-2 text-muted-foreground">
                    Proficient in Python, Java, C++, JavaScript, HTML/CSS, React.js, and Swift for software development.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none bg-muted/50 shadow-sm transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Server className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Machine Learning & Data</h3>
                  <p className="mt-2 text-muted-foreground">
                    Experience with TensorFlow, SQL, MongoDB, and cloud services like AWS and Azure.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none bg-muted/50 shadow-sm transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Certifications & Tools</h3>
                  <p className="mt-2 text-muted-foreground">
                    AWS Certified Cloud Practitioner. Proficient with Git, Linux, Django, and Jira for project
                    management.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section - Now before Experience */}
        <section id="projects" className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                My Work
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                A collection of my recent work showcasing my skills and experience in various technologies.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Living Application Documentation"
                description="An AI-powered documentation retrieval system developed for Paychex that provides conversational access to internal documentation. The solution streamlines information discovery and improves documentation accessibility for team members."
                image="/images/living-doc-app.png"
                link="https://github.com/paychex/Living-Application-Documentation"
                tags={["React", "Azure AI", "Python", "Agile"]}
              />
              <ProjectCard
                title="Cryptocurrency Trading Simulator"
                description="A comprehensive platform that allows users to simulate cryptocurrency trading without risking real money. Features include real-time price tracking, portfolio management, and performance analytics."
                image="/images/crypto.png"
                link="https://github.com/gabrielrosendo/CRYPTO50"
                tags={["Python", "Flask", "SQLite", "API Integration"]}
              />
              <ProjectCard
                title="Calorie Tracking App"
                description="An iOS application for tracking daily calorie intake and macronutrients."
                image="/images/caltrack.png"
                link="https://github.com/gabrielrosendo/CalTrack?tab=readme-ov-file"
                tags={["Swift"]}
              />
              <ProjectCard
                title="Bookstore Web Application"
                description="A web application that allows users to search for books in a database and view their details."
                image="/images/bookstore.png"
                link="https://github.com/gabrielrosendo/sortedTale"
                tags={["MongoDB", "Python", "Flask", "CSS", "JavaScript"]}
              />
              <TextProjectCard
                title="C-Like Language Compiler"
                description="A compiler for a C-like programming language built from scratch. Implements lexical analysis, syntax analysis, semantic analysis, optimization, and MIPS code generation. Designed and tested grammar rules to support while loops, variable/array declarations, function calls, and conditional statements."
                link="https://github.com/gabrielrosendo/my-compiler"
                tags={["C", "Yacc", "Lex", "Compiler Design", "AST"]}
              />
              <TextProjectCard
                title="AI-Powered Flashcard Generator"
                description="An intelligent tool that extracts key information from PowerPoint presentations and automatically generates study flashcards using OpenAI's language model."
                link="https://github.com/gabrielrosendo/flashcard-generator"
                tags={["Python", "OpenAI API", "ML"]}
              />
            </div>
          </div>
        </section>

        {/* Experience Section - Now after Projects */}
        <section id="experience" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                Work History
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                My professional journey and the experience I've gained along the way.
              </p>
            </div>

            <div className="mt-16 space-y-12">
              {/* Paychex Experience */}
              <div className="relative border-l border-muted-foreground/20 pl-8 before:absolute before:left-[-8px] before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-['']">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold">Software Engineer Apprenticeship</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>August 2024 - April 2025</span>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>Paychex | Phoenix, AZ</span>
                </div>
                <div className="mt-4">
                  <p className="font-medium">AI-Driven Documentation Retrieval System</p>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Collaborated with Paychex to develop an AI-driven solution for retrieving project documentation.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Developed an AI chatbot using Azure AI Services and React for the front end to provide users
                        with precise, conversational access to internal documentation.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Gained hands-on experience with Agile methodology, and utilized Jira for project management.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* BrandSafway Experience */}
              <div className="relative border-l border-muted-foreground/20 pl-8 before:absolute before:left-[-8px] before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-['']">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold">Project Controls Coordinator</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>August 2024 - March 2025</span>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>BrandSafway | Tempe, AZ</span>
                </div>
                <div className="mt-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Documented, analyzed, and reported project data to track progress.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Assisted in planning and managing project workflows by maintaining accurate data records and
                        identifying trends to improve efficiency.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Project Controls Intern */}
              <div className="relative border-l border-muted-foreground/20 pl-8 before:absolute before:left-[-8px] before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-['']">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold">Project Controls Intern</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>May 2024 - August 2024</span>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>BrandSafway | Tempe, AZ</span>
                </div>
              </div>

              {/* GCE Experience */}
              <div className="relative border-l border-muted-foreground/20 pl-8 before:absolute before:left-[-8px] before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-['']">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold">IT Support Representative</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>September 2022 - May 2024</span>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>Grand Canyon Education | Phoenix, AZ</span>
                </div>
                <div className="mt-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Resolved a diverse range of technical issues across multiple systems and applications for
                        students.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Maintained detailed documentation of requests and resolutions, adhering to established
                        guidelines.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                Expertise
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                A comprehensive overview of my technical expertise and tools I work with.
              </p>
            </div>

            <div className="mt-16">
              <TechStack />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                Learning Journey
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                My academic background and educational experiences.
              </p>
            </div>

            <div className="mt-16">
              <Education />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                Get In Touch
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Connect</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Open to new opportunities in software development, data analysis, and machine learning.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Card className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="mt-2 text-muted-foreground">gabrielrosendo72@gmail.com</p>
                <Link href="mailto:gabrielrosendo72@gmail.com" className="mt-4">
                  <Button variant="outline" size="sm">
                    Send Email
                  </Button>
                </Link>
              </Card>

              <Card className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="mt-2 text-muted-foreground">+1 (623) 287-8628</p>
                <Link href="tel:+16232878628" className="mt-4">
                  <Button variant="outline" size="sm">
                    Call Me
                  </Button>
                </Link>
              </Card>

              <Card className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Linkedin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <p className="mt-2 text-muted-foreground">Connect with me on LinkedIn</p>
                <Link href="https://www.linkedin.com/in/gabriel-marcelino-887766243/" target="_blank" className="mt-4">
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                GM
              </div>
              <p className="text-sm font-medium">Gabriel Marcelino</p>
            </div>

            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2024 Gabriel Marcelino. All rights reserved.
            </p>

            <div className="flex gap-4">
              <Link
                href="https://github.com/gabrielrosendo"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/gabriel-marcelino-887766243/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:gabrielrosendo72@gmail.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
