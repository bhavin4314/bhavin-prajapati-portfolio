
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Junior Frontend Developer",
      company: "Zignuts Technolab",
      duration: "Oct 2022 – Present",
      location: "Gandhinagar, India",
      description: "Worked on several production-level React/Next.js projects, focusing on UI architecture and optimization.",
      current: true
    },
    {
      title: "Frontend Developer Intern",
      company: "Zignuts Technolab",
      duration: "Apr 2022 – Sep 2022",
      location: "Gandhinagar, India",
      description: "Gained real-world experience developing UIs using React.js and integrating live project features.",
      current: false
    }
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
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
            Work Experience
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-600"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className={`absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-background ${
                        exp.current ? 'bg-primary' : 'bg-muted-foreground'
                      }`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    />

                    <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <p className="text-lg text-primary font-semibold">{exp.company}</p>
                          </div>
                          <div className="flex flex-col md:items-end gap-1">
                            {exp.current && (
                              <Badge className="bg-green-500/10 text-green-600 border-green-500/20 w-fit">
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
