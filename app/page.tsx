"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code,
  Database,
  Server,
  Calendar,
  Building,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ProjectCard from "./components/project-card"
import TextProjectCard from "./components/text-project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import Education from "./components/education"
import { portfolioContent, type Locale } from "@/lib/portfolio-content"

const locales: Locale[] = ["en", "pt"]

export default function Page() {
  const [locale, setLocale] = useState<Locale>("en")
  const copy = portfolioContent[locale]
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("portfolio-locale")
    if (savedLocale === "en" || savedLocale === "pt") {
      setLocale(savedLocale)
    }

    // Always start the one-page portfolio at the hero on a fresh load.
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.localStorage.setItem("portfolio-locale", locale)
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en"
    document.title = copy.meta.title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute("content", copy.meta.description)
    }
  }, [copy.meta.description, copy.meta.title, locale])

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                GM
              </div>
              <span className="hidden font-bold sm:inline-block">Gabriel Marcelino</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary">
                {copy.nav.about}
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary">
                {copy.nav.projects}
              </Link>
              <Link href="#experience" className="transition-colors hover:text-primary">
                {copy.nav.experience}
              </Link>
              <Link href="#skills" className="transition-colors hover:text-primary">
                {copy.nav.skills}
              </Link>
              <Link href="#education" className="transition-colors hover:text-primary">
                {copy.nav.education}
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                {copy.nav.contact}
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div
              aria-label={copy.controls.localeLabel}
              className="flex items-center rounded-full border bg-background p-1"
              role="group"
            >
              {locales.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={locale === option}
                  onClick={() => setLocale(option)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    locale === option
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>
            <ThemeToggle />
            <Link href="/Gabriel-Marcelino-Resume.docx" download target="_blank">
              <Button variant="outline" className="gap-2">
                <ArrowRight className="h-4 w-4" />
                {copy.controls.resume}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute -left-24 top-1/2 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="flex flex-col space-y-6">
                <div>
                  <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                    {copy.hero.badge}
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                    Gabriel <span className="text-primary">Marcelino</span>
                  </h1>
                  <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                    {copy.hero.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{copy.hero.location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {copy.hero.tags.map((item) => (
                    <Badge key={item} variant="secondary" className="px-3 py-1">
                      {item}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="https://github.com/gabrielrosendo" target="_blank">
                    <Button variant="outline" size="lg" className="gap-2">
                      <Github className="h-5 w-5" />
                      {copy.controls.github}
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/gabriel-marcelino-887766243/" target="_blank">
                    <Button variant="outline" size="lg" className="gap-2">
                      <Linkedin className="h-5 w-5" />
                      {copy.controls.linkedin}
                    </Button>
                  </Link>
                  <Link href="mailto:gabrielrosendo72@gmail.com">
                    <Button variant="outline" size="lg" className="gap-2">
                      <Mail className="h-5 w-5" />
                      {copy.controls.email}
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

        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                {copy.about.badge}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {copy.about.title}
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                {copy.about.description}
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {copy.about.cards.map((card, index) => {
                const Icon = [Code, Server, Database][index]

                return (
                  <Card
                    key={card.title}
                    className="overflow-hidden border-none bg-muted/50 shadow-sm transition-all hover:shadow-md"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                      <p className="mt-2 text-muted-foreground">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                {copy.experience.badge}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {copy.experience.title}
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                {copy.experience.description}
              </p>
            </div>

            <div className="mt-16 space-y-12">
              {copy.experience.items.map((item) => (
                <div
                  key={`${item.title}-${item.period}`}
                  className="relative border-l border-muted-foreground/20 pl-8 before:absolute before:left-[-8px] before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-['']"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{item.company}</span>
                  </div>
                  <div className="mt-4">
                    {item.summaryTitle ? (
                      <p className="font-medium">{item.summaryTitle}</p>
                    ) : null}
                    <ul className="mt-2 space-y-2 text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                {copy.projects.badge}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {copy.projects.title}
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                {copy.projects.description}
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {copy.projects.imageItems.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image || "/placeholder.svg"}
                  link={project.link}
                  tags={project.tags}
                  ctaLabel={copy.controls.viewOnGithub}
                />
              ))}
              {copy.projects.textItems.map((project) => (
                <TextProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  tags={project.tags}
                  ctaLabel={copy.controls.viewOnGithub}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                {copy.skills.badge}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {copy.skills.title}
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                {copy.skills.description}
              </p>
            </div>

            <div className="mt-16">
              <TechStack categories={copy.skills.categories} />
            </div>
          </div>
        </section>

        <section id="education" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                {copy.education.badge}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {copy.education.title}
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                {copy.education.description}
              </p>
            </div>

            <div className="mt-16">
              <Education entries={copy.education.entries} />
            </div>
          </div>
        </section>

        <section id="contact" className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="outline">
                {copy.contact.badge}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {copy.contact.title}
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                {copy.contact.description}
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <Card className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{copy.controls.email}</h3>
                <p className="mt-2 text-muted-foreground">gabrielrosendo72@gmail.com</p>
                <Link href="mailto:gabrielrosendo72@gmail.com" className="mt-4">
                  <Button variant="outline" size="sm">
                    {copy.controls.sendEmail}
                  </Button>
                </Link>
              </Card>

              <Card className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Linkedin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{copy.controls.linkedin}</h3>
                <p className="mt-2 text-muted-foreground">{copy.contact.linkedinDescription}</p>
                <Link
                  href="https://www.linkedin.com/in/gabriel-marcelino-887766243/"
                  target="_blank"
                  className="mt-4"
                >
                  <Button variant="outline" size="sm">
                    {copy.controls.viewProfile}
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
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                GM
              </div>
              <p className="text-sm font-medium">Gabriel Marcelino</p>
            </div>

            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {currentYear} Gabriel Marcelino. {copy.footer.rights}
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
              <Link
                href="mailto:gabrielrosendo72@gmail.com"
                className="text-muted-foreground hover:text-foreground"
              >
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
