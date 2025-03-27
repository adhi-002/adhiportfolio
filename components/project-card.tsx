import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Github, Globe } from "lucide-react"

interface Project {
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  githubUrl?: string
  demoUrl?: string
  slug: string
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="h-48 w-full bg-muted">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="h-full w-full object-cover" />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{project.title}</CardTitle>
          <Badge>{project.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="line-clamp-3 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3}</Badge>}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between mt-auto">
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Github className="h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
          {project.demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Globe className="h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
        </div>
        <Button size="sm" asChild>
          <Link href="/" className="flex items-center gap-1">
            Details
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

