import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, BriefcaseBusiness, Code, GraduationCap, ShieldCheck, Terminal } from "lucide-react"

export default function AboutPage() {
  const skills = [
    { name: "Penetration Testing", level: 90 },
    { name: "Network Security", level: 85 },
    { name: "Malware Analysis", level: 80 },
    { name: "Security Auditing", level: 85 },
    { name: "Incident Response", level: 75 },
    { name: "Cloud Security", level: 80 },
    { name: "Python", level: 85 },
    { name: "Bash Scripting", level: 80 },
  ]

  const certifications = [
    { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "2022" },
    { name: "Certified Information Systems Security Professional (CISSP)", issuer: "ISC²", year: "2023" },
    { name: "Offensive Security Certified Professional (OSCP)", issuer: "Offensive Security", year: "2022" },
    { name: "CompTIA Security+", issuer: "CompTIA", year: "2021" },
  ]

  const education = [
    {
      degree: "Master of Science in Cybersecurity",
      institution: "University of Technology",
      year: "2020-2022",
      description: "Specialized in advanced penetration testing and security architecture.",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "National Institute of Technology",
      year: "2016-2020",
      description: "Focused on computer networks and information security.",
    },
  ]

  const experience = [
    {
      position: "Security Analyst",
      company: "CyberDefend Solutions",
      year: "2022-Present",
      description:
        "Conducting vulnerability assessments, penetration testing, and security audits for enterprise clients.",
    },
    {
      position: "Security Researcher Intern",
      company: "SecureTech Labs",
      year: "2021-2022",
      description: "Researched emerging threats and contributed to developing security tools.",
    },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20">
            <Image src="/placeholder.svg?height=256&width=256" alt="Adithyan LS" fill className="object-cover" />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-xl text-muted-foreground">
              I'm Adithyan LS, a passionate cybersecurity specialist with expertise in penetration testing,
              vulnerability assessment, and security architecture. I'm dedicated to making the digital world safer
              through innovative security solutions and continuous learning.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="outline" className="text-sm py-1">
                Penetration Testing
              </Badge>
              <Badge variant="outline" className="text-sm py-1">
                Ethical Hacking
              </Badge>
              <Badge variant="outline" className="text-sm py-1">
                Security Research
              </Badge>
              <Badge variant="outline" className="text-sm py-1">
                Vulnerability Assessment
              </Badge>
              <Badge variant="outline" className="text-sm py-1">
                Security Architecture
              </Badge>
            </div>
          </div>
        </div>

        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Skills</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <BriefcaseBusiness className="h-4 w-4" />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Certifications</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="mt-6 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experience" className="mt-6 space-y-6">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <BriefcaseBusiness className="mr-2 h-4 w-4" />
                        {exp.company}
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.year}
                    </Badge>
                  </div>
                  <p className="mt-4">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="mt-6 space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <GraduationCap className="mr-2 h-4 w-4" />
                        {edu.institution}
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {edu.year}
                    </Badge>
                  </div>
                  <p className="mt-4">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">My Approach to Cybersecurity</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <ShieldCheck className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Proactive Defense</h3>
                <p className="text-muted-foreground">
                  I believe in anticipating threats before they materialize, implementing robust security measures that
                  prevent breaches.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Terminal className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  The cybersecurity landscape evolves rapidly. I stay updated with the latest threats, tools, and
                  defense mechanisms.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <BookOpen className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Knowledge Sharing</h3>
                <p className="text-muted-foreground">
                  I'm passionate about educating others on cybersecurity best practices through my blog, workshops, and
                  community engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

