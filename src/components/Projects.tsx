
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ExternalLink, Github, Eye, X } from "lucide-react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      id: 1,
      title: "Digital Assembly Platform",
      description: "A SaaS-based field service CRM and digital manual builder for furniture manufacturers.",
      fullDescription: "Complete digital transformation solution for furniture manufacturers, featuring advanced CRM capabilities, interactive manual creation tools, and comprehensive field service management. The platform revolutionizes how manufacturers create, distribute, and maintain their assembly documentation.",
      highlights: [
        "Admin, Visitor, Client Panels",
        "Custom video player with subtitles",
        "AI chatbot with context menus",
        "PDF-to-image with clickable plotting",
        "Multi-file upload manager"
      ],
      tech: ["React.js", "Reactstrap", "Context API", "Firebase", "AI Integration"],
      gradient: "from-blue-500 to-cyan-500",
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      id: 2,
      title: "On-Demand Service Connection",
      description: "B2B platform for factories, schools, clinics to hire service providers.",
      fullDescription: "Comprehensive B2B marketplace connecting service providers with institutions. Features advanced quotation systems, real-time notifications, and seamless integration with mapping services for location-based matching.",
      highlights: [
        "Quotation system with approval workflows",
        "Firebase real-time notifications",
        "Google Maps integration",
        "RTL design support",
        "Reusable component library"
      ],
      tech: ["React.js", "Redux", "Reactstrap", "Google Maps API", "Firebase"],
      gradient: "from-green-500 to-emerald-500",
      color: "bg-green-500/10 text-green-600 border-green-500/20"
    },
    {
      id: 3,
      title: "Smart Recruitment Platform",
      description: "A job-matching platform for companies and job seekers with AI-powered matching.",
      fullDescription: "Intelligent recruitment platform leveraging AI for optimal job-candidate matching. Features real-time communication, comprehensive analytics, and advanced role-based access control for streamlined hiring processes.",
      highlights: [
        "Real-time chat with Socket.io",
        "AI-powered job matching",
        "Role-based access control",
        "SEO optimization",
        "Mixpanel analytics integration"
      ],
      tech: ["Next.js", "Reactstrap", "Firebase", "React Context", "Socket.io", "Mixpanel"],
      gradient: "from-purple-500 to-pink-500",
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
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
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <CardHeader className="relative">
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-full opacity-20`} />
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className={`${project.color} text-xs`}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <Button
                      onClick={() => setSelectedProject(project)}
                      className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white group-hover:scale-105 transition-all duration-300`}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              {selectedProject && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <DialogHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <DialogTitle className="text-2xl md:text-3xl font-bold">
                          {selectedProject.title}
                        </DialogTitle>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${selectedProject.gradient} text-white`}>
                          Featured Project
                        </div>
                      </div>
                    </div>
                  </DialogHeader>
                  
                  <DialogDescription asChild>
                    <div className="space-y-6 mt-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedProject.highlights.map((highlight: string, index: number) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center space-x-2 text-muted-foreground"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.gradient}`} />
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech: string) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className={`${selectedProject.color}`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground italic">
                          🔒 This is a private/confidential project. Source code and live demo are not publicly available.
                        </p>
                      </div>
                    </div>
                  </DialogDescription>
                </motion.div>
              )}
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  )
}
