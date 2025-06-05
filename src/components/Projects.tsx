
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, Globe, Zap, Database, Code, Palette } from "lucide-react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      title: "Digital Assembly Platform",
      description: "A SaaS-based field service CRM and digital manual builder for furniture manufacturers.",
      highlights: [
        "Admin, Visitor, Client Panels with role-based access",
        "Custom video player with multi-language subtitles",
        "AI chatbot with context-aware menus",
        "PDF-to-image converter with interactive plotting",
        "Advanced multi-file upload manager with progress tracking"
      ],
      tech: ["React.js", "Reactstrap", "Context API", "Firebase", "PDF.js"],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      icon: Database,
      category: "SaaS Platform"
    },
    {
      title: "On-Demand Service Connection",
      description: "B2B platform for factories, schools, clinics to hire service providers.",
      highlights: [
        "Real-time quotation system with instant notifications",
        "Advanced Google Maps integration with geolocation",
        "RTL (Right-to-Left) language support",
        "Modular, reusable component architecture",
        "Firebase real-time notifications and messaging"
      ],
      tech: ["React.js", "Redux", "Reactstrap", "Google Maps API", "Firebase"],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      icon: Globe,
      category: "B2B Platform"
    },
    {
      title: "Smart Recruitment and Matching Tool",
      description: "A job-matching platform for companies and job seekers.",
      highlights: [
        "Real-time chat system using Socket.io",
        "Advanced role-based access control (RBAC)",
        "SEO optimization for better search visibility",
        "Mixpanel analytics integration for user behavior tracking",
        "Smart matching algorithm for job recommendations"
      ],
      tech: ["Next.js", "Reactstrap", "Firebase", "React Context", "Socket.io", "Mixpanel"],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      icon: Zap,
      category: "Recruitment Platform"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="text-center mb-16"
            variants={cardVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions built with modern technologies
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => {
              const Icon = project.icon
              
              return (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card 
                    className={`h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg ${project.bgColor} backdrop-blur-sm cursor-pointer overflow-hidden group relative`}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <CardHeader className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary" className="text-xs font-medium">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="relative">
                      <div className="space-y-6">
                        {/* Tech Stack */}
                        <div>
                          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                            <Code className="h-4 w-4" />
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.slice(0, 3).map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="outline" 
                                className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
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
                        </div>
                        
                        {/* CTA Button */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Project
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${selectedProject.gradient} text-white shadow-lg`}>
                      <selectedProject.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <DialogTitle className="text-3xl font-bold mb-2">
                        {selectedProject.title}
                      </DialogTitle>
                      <Badge variant="secondary" className="text-sm">
                        {selectedProject.category}
                      </Badge>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-8">
                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </motion.div>
                  
                  {/* Key Highlights */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.highlights.map((highlight: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border/50"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech: string, index: number) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                        >
                          <Badge 
                            variant="secondary"
                            className="text-sm px-4 py-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button 
                        className={`w-full bg-gradient-to-r ${selectedProject.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                        size="lg"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Live Project
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline"
                        size="lg"
                        className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Github className="mr-2 h-5 w-5" />
                        Source Code
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}
