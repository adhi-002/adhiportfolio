import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Clock, Search, User } from "lucide-react"

export default function BlogPage() {
  const categories = ["All", "Tutorials", "Research", "News", "Opinion"]

  const posts = [
    {
      id: 1,
      title: "Understanding Zero-Day Vulnerabilities",
      excerpt:
        "An in-depth look at zero-day vulnerabilities, how they're discovered, and their impact on cybersecurity.",
      date: "March 15, 2023",
      readTime: "8 min read",
      author: "Adithyan LS",
      category: "Research",
      featured: true,
    },
    {
      id: 2,
      title: "Setting Up a Home Security Lab",
      excerpt: "A step-by-step guide to creating your own cybersecurity testing environment using virtualization.",
      date: "February 28, 2023",
      readTime: "12 min read",
      author: "Adithyan LS",
      category: "Tutorials",
    },
    {
      id: 3,
      title: "The Rise of Ransomware-as-a-Service",
      excerpt: "Exploring how ransomware has evolved into a service-based model and what it means for organizations.",
      date: "February 10, 2023",
      readTime: "6 min read",
      author: "Adithyan LS",
      category: "News",
    },
    {
      id: 4,
      title: "Web Application Security Best Practices",
      excerpt:
        "Essential security measures every web developer should implement to protect applications from common attacks.",
      date: "January 25, 2023",
      readTime: "10 min read",
      author: "Adithyan LS",
      category: "Tutorials",
    },
    {
      id: 5,
      title: "The Ethics of Penetration Testing",
      excerpt:
        "Discussing the ethical considerations and responsibilities of security professionals in penetration testing.",
      date: "January 12, 2023",
      readTime: "7 min read",
      author: "Adithyan LS",
      category: "Opinion",
    },
    {
      id: 6,
      title: "Analyzing the Latest CVEs",
      excerpt: "Breaking down recent critical vulnerabilities and what they mean for your security posture.",
      date: "December 30, 2022",
      readTime: "9 min read",
      author: "Adithyan LS",
      category: "Research",
    },
  ]

  const featuredPost = posts.find((post) => post.featured)
  const regularPosts = posts.filter((post) => !post.featured)

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on cybersecurity, ethical hacking, and digital defense
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search articles..." className="w-full pl-8" />
          </div>
          <Button variant="outline">Search</Button>
        </div>

        {featuredPost && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="h-64 w-full bg-muted">
                <img
                  src="/placeholder.svg?height=256&width=768"
                  alt="Featured article"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{featuredPost.title}</CardTitle>
                  <Badge>{featuredPost.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/blog/post-${featuredPost.id}`} className="group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

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
                {regularPosts
                  .filter((post) => category === "All" || post.category === category)
                  .map((post) => (
                    <Link key={post.id} href={`/blog/post-${post.id}`} className="group">
                      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                        <div className="h-40 w-full bg-muted">
                          <img
                            src="/placeholder.svg?height=160&width=320"
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="line-clamp-1">{post.title}</CardTitle>
                            <Badge variant="outline" className="ml-2 shrink-0">
                              {post.category}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              {post.readTime}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center">
          <Button variant="outline">Load More Articles</Button>
        </div>
      </div>
    </div>
  )
}

