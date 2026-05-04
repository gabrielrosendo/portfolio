"use client"

import { useEffect, useLayoutEffect, useState } from "react"
import { Button } from "@/components/ui/button"
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
const resumeUrl =
  "https://o4oavsqloi7a95at.public.blob.vercel-storage.com/RESUME_GMARCELINO.pdf"

const heroSignals: Record<Locale, Array<{ title: string; detail: string }>> = {
  en: [
    {
      title: "U.S. education",
      detail: "Computer Science foundation built in Phoenix, Arizona.",
    },
    {
      title: "Enterprise AI",
      detail: "Hands-on work across internal AI initiatives and production systems.",
    },
    {
      title: "Bilingual edge",
      detail: "Portuguese and English communication for global teams.",
    },
  ],
  pt: [
    {
      title: "Formacao nos EUA",
      detail: "Base em Computer Science construida em Phoenix, Arizona.",
    },
    {
      title: "IA enterprise",
      detail: "Atuacao pratica em iniciativas internas de IA e sistemas de producao.",
    },
    {
      title: "Vantagem bilingue",
      detail: "Comunicacao em portugues e ingles para times globais.",
    },
  ],
}

const sectionHeadingClass =
  "max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-[3.35rem]"

function resetScrollToTop() {
  const root = document.documentElement
  const previousBehavior = root.style.scrollBehavior

  root.style.scrollBehavior = "auto"
  window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  root.style.scrollBehavior = previousBehavior
}

export default function Page() {
  const [locale, setLocale] = useState<Locale>("en")
  const copy = portfolioContent[locale]
  const currentYear = new Date().getFullYear()
  const signals = heroSignals[locale]

  useLayoutEffect(() => {
    const savedLocale = window.localStorage.getItem("portfolio-locale")
    if (savedLocale === "en" || savedLocale === "pt") {
      setLocale(savedLocale)
    }

    if (window.location.hash) {
      return
    }

    const previousRestoration = window.history.scrollRestoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    const restorePosition = () => {
      resetScrollToTop()
    }

    restorePosition()

    const rafId = window.requestAnimationFrame(restorePosition)
    const timeoutId = window.setTimeout(restorePosition, 150)

    window.addEventListener("pageshow", restorePosition)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.clearTimeout(timeoutId)
      window.removeEventListener("pageshow", restorePosition)

      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = previousRestoration
      }
    }
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
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="grid-fade absolute inset-0 opacity-50" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-[18rem] h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 px-4 py-4">
        <div className="container mx-auto">
          <div className="surface-panel flex h-16 items-center rounded-full px-4 md:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <Link className="flex items-center gap-3" href="/">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20">
                  GM
                </div>
                <span className="truncate text-sm font-semibold tracking-[0.01em] sm:text-base">
                  Gabriel Marcelino
                </span>
              </Link>
            </div>

            <nav className="mx-8 hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
              <Link href="#about" className="transition-colors hover:text-foreground">
                {copy.nav.about}
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground">
                {copy.nav.experience}
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground">
                {copy.nav.projects}
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground">
                {copy.nav.skills}
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground">
                {copy.nav.education}
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground">
                {copy.nav.contact}
              </Link>
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <div
                aria-label={copy.controls.localeLabel}
                className="flex items-center rounded-full border border-border/70 bg-background/80 p-1"
                role="group"
              >
                {locales.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={locale === option}
                    onClick={() => setLocale(option)}
                    className={`rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.18em] transition-colors ${
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
              <Link href={resumeUrl} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="hidden rounded-full border-border/70 bg-background/70 px-5 md:inline-flex"
                >
                  {copy.controls.resume}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="pb-16">
        <section className="relative pb-20 pt-8 md:pb-28 md:pt-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <div className="space-y-8">
                <div className="space-y-5">
                  <p className="section-eyebrow text-xs text-primary/75">
                    {copy.hero.badge}
                  </p>
                  <h1 className="max-w-4xl text-[clamp(3.2rem,7.2vw,7rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                    Gabriel <span className="text-primary">Marcelino</span>
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                    {copy.hero.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Building className="h-4 w-4 text-primary" />
                    <span>{copy.hero.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href={resumeUrl} target="_blank" rel="noreferrer">
                    <Button className="h-12 rounded-full px-6 text-sm shadow-lg shadow-primary/20">
                      {copy.controls.resume}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/gabriel-marcelino-887766243/" target="_blank">
                    <Button
                      variant="outline"
                      className="h-12 rounded-full border-border/70 bg-background/70 px-6 text-sm"
                    >
                      <Linkedin className="h-4 w-4" />
                      {copy.controls.linkedin}
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3">
                  {copy.hero.tags.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-border/70 bg-background/70 px-4 py-2 text-xs font-medium tracking-[0.12em] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                  <Link
                    href="https://github.com/gabrielrosendo"
                    target="_blank"
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4 text-primary" />
                    {copy.controls.github}
                  </Link>
                  <Link
                    href="mailto:gabrielrosendo72@gmail.com"
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    {copy.controls.email}
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-4 rounded-[34px] bg-primary/10 blur-2xl" />
                <div className="relative ml-auto w-full max-w-[26rem] p-2 md:p-3">
                  <div className="overflow-hidden rounded-[36px] border border-black/10 bg-gradient-to-br from-slate-200/70 via-white/55 to-slate-300/45 p-3 shadow-[0_35px_90px_-38px_rgba(15,23,42,0.35)]">
                    <div className="relative aspect-[0.82] w-full overflow-hidden rounded-[28px]">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                      <Image
                        src="/images/profile.png"
                        alt="Gabriel Marcelino"
                        fill
                        className="object-cover"
                        style={{ objectPosition: "54% 34%" }}
                        priority
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {signals.map((signal, index) => (
                      <div
                        key={signal.title}
                        className={`surface-panel rounded-[24px] border-0 p-4 ${
                          index === 0 ? "sm:col-span-2" : ""
                        }`}
                      >
                        <p className="section-eyebrow text-[10px] text-primary/80">
                          {signal.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {signal.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-10 md:py-14">
          <div className="container mx-auto px-4 md:px-6">
            <div className="surface-panel rounded-[36px] p-8 md:p-12">
              <div className="max-w-3xl">
                <p className="section-eyebrow text-xs text-primary/75">
                  {copy.about.badge}
                </p>
                <h2 className={`${sectionHeadingClass} mt-4`}>
                  {copy.about.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  {copy.about.description}
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {copy.about.cards.map((card, index) => {
                  const Icon = [Code, Server, Database][index]

                  return (
                    <Card
                      key={card.title}
                      className="surface-panel rounded-[28px] border-0 bg-transparent p-0"
                    >
                      <CardContent className="p-6 md:p-7">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold md:text-2xl">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {card.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-10 md:py-14">
          <div className="container mx-auto px-4 md:px-6">
            <div className="surface-panel rounded-[36px] p-8 md:p-12">
              <div className="max-w-3xl">
                <p className="section-eyebrow text-xs text-primary/75">
                  {copy.experience.badge}
                </p>
                <h2 className={`${sectionHeadingClass} mt-4`}>
                  {copy.experience.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  {copy.experience.description}
                </p>
              </div>

              <div className="mt-12 grid gap-6">
                {copy.experience.items.map((item, index) => (
                  <div
                    key={`${item.title}-${item.period}`}
                    className="surface-panel relative rounded-[28px] border-0 p-7 before:absolute before:bottom-7 before:left-5 before:top-7 before:w-px before:bg-gradient-to-b before:from-primary before:via-border before:to-transparent before:content-[''] after:absolute after:left-[15px] after:top-8 after:h-4 after:w-4 after:rounded-full after:border-4 after:border-primary after:bg-background after:content-[''] md:p-8 md:pl-12"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-3xl">
                        <h3 className="text-2xl font-semibold leading-snug md:text-[2rem]">
                          {item.title}
                        </h3>
                        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary" />
                            {item.company}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {item.summaryTitle ? (
                      <p className="mt-5 text-sm font-medium tracking-[0.02em] text-primary">
                        {item.summaryTitle}
                      </p>
                    ) : null}

                    <ul className="mt-5 grid gap-3 text-sm leading-7 text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-10 md:py-14">
          <div className="container mx-auto px-4 md:px-6">
            <div className="surface-panel rounded-[36px] p-8 md:p-12">
              <div className="max-w-3xl">
                <p className="section-eyebrow text-xs text-primary/75">
                  {copy.projects.badge}
                </p>
                <h2 className={`${sectionHeadingClass} mt-4`}>
                  {copy.projects.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  {copy.projects.description}
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
          </div>
        </section>

        <section id="skills" className="py-10 md:py-14">
          <div className="container mx-auto px-4 md:px-6">
            <div className="surface-panel rounded-[36px] p-8 md:p-12">
              <div className="max-w-3xl">
                <p className="section-eyebrow text-xs text-primary/75">
                  {copy.skills.badge}
                </p>
                <h2 className={`${sectionHeadingClass} mt-4`}>
                  {copy.skills.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  {copy.skills.description}
                </p>
              </div>

              <div className="mt-12">
                <TechStack categories={copy.skills.categories} />
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-10 md:py-14">
          <div className="container mx-auto px-4 md:px-6">
            <div className="surface-panel rounded-[36px] p-8 md:p-12">
              <div className="max-w-3xl">
                <p className="section-eyebrow text-xs text-primary/75">
                  {copy.education.badge}
                </p>
                <h2 className={`${sectionHeadingClass} mt-4`}>
                  {copy.education.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  {copy.education.description}
                </p>
              </div>

              <div className="mt-12">
                <Education entries={copy.education.entries} />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-10 md:py-14">
          <div className="container mx-auto px-4 md:px-6">
            <div className="surface-panel rounded-[36px] p-8 md:p-12">
              <div className="max-w-3xl">
                <p className="section-eyebrow text-xs text-primary/75">
                  {copy.contact.badge}
                </p>
                <h2 className={`${sectionHeadingClass} mt-4`}>
                  {copy.contact.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  {copy.contact.description}
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <Card className="surface-panel rounded-[28px] border-0 p-0">
                  <CardContent className="p-7 md:p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {copy.controls.email}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      gabrielrosendo72@gmail.com
                    </p>
                    <Link href="mailto:gabrielrosendo72@gmail.com" className="mt-6 inline-flex">
                      <Button className="rounded-full px-5">
                        {copy.controls.sendEmail}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="surface-panel rounded-[28px] border-0 p-0">
                  <CardContent className="p-7 md:p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {copy.controls.linkedin}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {copy.contact.linkedinDescription}
                    </p>
                    <Link
                      href="https://www.linkedin.com/in/gabriel-marcelino-887766243/"
                      target="_blank"
                      className="mt-6 inline-flex"
                    >
                      <Button variant="outline" className="rounded-full px-5">
                        {copy.controls.viewProfile}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-8 pt-6">
        <div className="container mx-auto">
          <div className="surface-panel flex flex-col items-center justify-between gap-4 rounded-full px-6 py-4 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                GM
              </div>
              <p className="text-sm font-medium tracking-[0.02em]">
                Gabriel Marcelino
              </p>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              © {currentYear} Gabriel Marcelino. {copy.footer.rights}
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/gabrielrosendo"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/gabriel-marcelino-887766243/"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:gabrielrosendo72@gmail.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
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
