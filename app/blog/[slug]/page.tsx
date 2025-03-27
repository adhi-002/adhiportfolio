import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This would normally fetch the post data based on the slug
  const post = {
    title: "Understanding Zero-Day Vulnerabilities",
    excerpt: "An in-depth look at zero-day vulnerabilities, how they're discovered, and their impact on cybersecurity.",
    date: "March 15, 2023",
    readTime: "8 min read",
    author: "Adithyan LS",
    authorRole: "Cybersecurity Specialist",
    category: "Research",
    content: `
      <p>Zero-day vulnerabilities represent one of the most significant threats in the cybersecurity landscape. These vulnerabilities are unknown to those who would be interested in mitigating the vulnerability, including the vendor of the target software.</p>
      
      <h2>What Makes Zero-Days So Dangerous?</h2>
      
      <p>The term "zero-day" refers to the fact that developers have had zero days to address and patch the vulnerability. This means that hackers can exploit the vulnerability before a fix becomes available, leaving users completely exposed.</p>
      
      <p>Zero-day attacks are particularly dangerous because:</p>
      
      <ul>
        <li>They exploit unknown vulnerabilities, making traditional security measures ineffective</li>
        <li>There are no patches available at the time of discovery</li>
        <li>They often remain undetected for extended periods</li>
        <li>They can be used in targeted attacks against high-value targets</li>
      </ul>
      
      <h2>The Lifecycle of a Zero-Day Vulnerability</h2>
      
      <p>Understanding the lifecycle of a zero-day vulnerability helps in appreciating the complexity of the issue:</p>
      
      <ol>
        <li><strong>Discovery:</strong> A vulnerability is discovered, either by security researchers, the software vendor, or malicious actors.</li>
        <li><strong>Exploitation:</strong> If discovered by attackers, they develop and deploy exploits before a patch is available.</li>
        <li><strong>Disclosure:</strong> The vulnerability is eventually disclosed to the vendor or publicly announced.</li>
        <li><strong>Patching:</strong> The vendor develops and releases a patch to fix the vulnerability.</li>
        <li><strong>Deployment:</strong> Users and organizations apply the patch to protect their systems.</li>
      </ol>
      
      <h2>Notable Zero-Day Attacks</h2>
      
      <p>Several high-profile cyber attacks have leveraged zero-day vulnerabilities:</p>
      
      <ul>
        <li><strong>Stuxnet:</strong> Used multiple zero-day vulnerabilities to target Iranian nuclear facilities</li>
        <li><strong>Sony Pictures Hack:</strong> Exploited unknown vulnerabilities to breach Sony's network</li>
        <li><strong>EternalBlue:</strong> The vulnerability behind the WannaCry ransomware attack</li>
      </ul>
      
      <h2>Protecting Against Zero-Day Threats</h2>
      
      <p>While it's impossible to completely eliminate the risk of zero-day attacks, organizations can implement several measures to reduce their exposure:</p>
      
      <ul>
        <li><strong>Defense in Depth:</strong> Implement multiple layers of security controls</li>
        <li><strong>Behavior-Based Detection:</strong> Use security solutions that can detect unusual behavior</li>
        <li><strong>Timely Patching:</strong> Maintain a robust patch management process</li>
        <li><strong>Network Segmentation:</strong> Limit the potential spread of an attack</li>
        <li><strong>Principle of Least Privilege:</strong> Restrict user permissions to the minimum necessary</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Zero-day vulnerabilities remain one of the most challenging aspects of cybersecurity. By understanding their nature and implementing comprehensive security measures, organizations can better protect themselves against these elusive threats.</p>
      
      <p>The cybersecurity community continues to work collaboratively to discover and address zero-day vulnerabilities before they can be widely exploited, highlighting the importance of responsible disclosure and coordinated response efforts.</p>
    `,
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/blog" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge>{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt={post.author} />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{post.author}</div>
              <div className="text-sm text-muted-foreground">{post.authorRole}</div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted mb-8">
          <img src="/placeholder.svg?height=400&width=800" alt={post.title} className="h-full w-full object-cover" />
        </div>

        <article className="prose prose-gray max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <Separator className="my-8" />

        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Related Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <Link key={i} href={`/blog/post-${i}`} className="group">
                <div className="overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                  <div className="h-40 w-full overflow-hidden bg-muted">
                    <img
                      src={`/placeholder.svg?height=160&width=320`}
                      alt="Related post thumbnail"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Related Cybersecurity Article {i}</h3>
                    <p className="text-sm text-muted-foreground">
                      Another interesting article about cybersecurity topics and trends.
                    </p>
                    <div className="mt-2 flex items-center text-xs text-muted-foreground">
                      <span>March {i + 10}, 2023</span>
                      <span className="mx-2">•</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

