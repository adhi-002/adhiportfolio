import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { HeroParallax } from "@/components/hero-parallax"
import { projects } from "@/lib/projects-data"

export default function Home() {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "Adithyan",
      className: "text-primary",
    },
    {
      text: "LS,",
    },
    {
      text: "Cybersecurity",
    },
    {
      text: "Specialist.",
      className: "text-primary",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="h-16 sm:h-20">
                  <TypewriterEffect words={words} />
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Securing digital landscapes through innovative solutions and ethical hacking. Passionate about
                  cybersecurity education and building robust defense systems.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/projects">
                  <Button className="group">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Contact Me</Button>
                </Link>
              </div>
              <div className="flex justify-center space-x-4 mt-8">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:contact@example.com">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore some of my recent cybersecurity projects and research
                </p>
              </div>
            </div>
          </div>
          <HeroParallax products={projects} />
          <div className="container px-4 md:px-6 mt-8 text-center">
            <Link href="/projects">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Blog Posts</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Insights and thoughts on cybersecurity trends and technologies
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                {[1, 2, 3].map((i) => (
                  <Link key={i} href={`/blog/post-${i}`} className="group">
                    <div className="overflow-hidden rounded-lg border bg-background p-4 transition-all hover:shadow-lg">
                      <div className="h-40 w-full overflow-hidden rounded-md bg-muted">
                        <img
                          src={`/placeholder.svg?height=160&width=320`}
                          alt="Blog post thumbnail"
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="pt-4">
                        <h3 className="font-semibold">Cybersecurity Blog Post {i}</h3>
                        <p className="text-sm text-muted-foreground">
                          A brief overview of the latest cybersecurity trends and best practices.
                        </p>
                        <div className="mt-2 flex items-center text-sm text-muted-foreground">
                          <span>March {i + 10}, 2023</span>
                          <span className="mx-2">•</span>
                          <span>5 min read</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/blog">
                <Button variant="outline" className="group">
                  Read All Posts
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

