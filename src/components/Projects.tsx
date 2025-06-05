
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Lock, ExternalLink } from "lucide-react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      title: "Digital Assembly Platform",
      description: "A SaaS-based field service CRM and digital manual builder for furniture manufacturers.",
      highlights: [
        "Admin, Visitor, Client Panels",
        "Custom video player with subtitles",
        "AI chatbot with context menus",
        "PDF-to-image with clickable plotting",
        "Multi-file upload manager"
      ],
      tech: ["React.js", "Reactstrap", "Context API"],
      isPrivate: true
    },
    {
      title: "On-Demand Service Connection",
      description: "B2B platform for factories, schools, clinics to hire service providers.",
      highlights: [
        "Quotation system, Firebase notifications",
        "Google Maps integration",
        "RTL design, reusable components"
      ],
      tech: ["React.js", "Redux", "Reactstrap"],
      isPrivate: true
    },
    {
      title: "Smart Recruitment and Matching Tool",
      description: "A job-matching platform for companies and job seekers.",
      highlights: [
        "Real-time chat with Socket.io",
        "Role-based access control",
        "SEO optimization, Mixpanel analytics"
      ],
      tech: ["Next.js", "Reactstrap", "Firebase", "React Context"],
      isPrivate: true
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card 
                  className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-card/50 backdrop-blur-sm cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      {project.isPrivate && (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button 
                        disabled={project.isPrivate}
                        className="w-full"
                        variant={project.isPrivate ? "secondary" : "default"}
                      >
                        {project.isPrivate ? (
                          <>
                            <Lock className="mr-2 h-4 w-4" />
                            Private Project
                          </>
                        ) : (
                          <>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Project
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-2">
                  {selectedProject.title}
                  {selectedProject.isPrivate && (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  )}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <p className="text-muted-foreground text-lg">
                  {selectedProject.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  disabled={selectedProject.isPrivate}
                  className="w-full"
                  size="lg"
                  variant={selectedProject.isPrivate ? "secondary" : "default"}
                >
                  {selectedProject.isPrivate ? (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      🔒 Private Project
                    </>
                  ) : (
                    <>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
