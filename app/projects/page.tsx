import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Github, Globe } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects-data"

export default function ProjectsPage() {
  const categories = ["All", "Penetration Testing", "Security Tools", "Research", "Web Security"]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my cybersecurity projects, tools, and research. Each project represents my commitment to improving
            digital security.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => category === "All" || project.category === category)
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Featured Project</h2>
          <Card className="overflow-hidden">
            <div className="h-64 w-full bg-muted">
              <img
                src="/placeholder.svg?height=256&width=768"
                alt="Featured project"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Network Vulnerability Scanner</CardTitle>
                <Badge>Security Tools</Badge>
              </div>
              <CardDescription>
                A comprehensive tool for identifying and assessing network vulnerabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This advanced network vulnerability scanner automates the process of identifying security weaknesses in
                network infrastructure. It performs port scanning, service enumeration, vulnerability detection, and
                generates detailed reports with remediation recommendations.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Nmap</Badge>
                <Badge variant="outline">Network Security</Badge>
                <Badge variant="outline">Vulnerability Assessment</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </div>
              <Button size="sm" asChild>
                <Link href="/projects/network-scanner" className="flex items-center gap-1">
                  View Details
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

