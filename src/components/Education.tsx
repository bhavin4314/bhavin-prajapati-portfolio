
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, MapPin, Calendar, Award, ChevronRight, Trophy, Book, Users } from "lucide-react"

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isExpanded, setIsExpanded] = useState(false)

  const achievements = [
    { icon: Trophy, title: "First Class Honors", description: "Graduated with distinction" },
    { icon: Book, title: "Dean's List", description: "Academic excellence recognition" },
    { icon: Users, title: "Technical Society", description: "Active member of coding clubs" }
  ]

  const subjects = [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Management",
    "Computer Networks",
    "Web Technologies",
    "Object-Oriented Programming"
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎓 Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the foundation for excellence in computer engineering
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-card/70 backdrop-blur-sm overflow-hidden group">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 p-1">
                  <CardHeader className="pb-6 bg-card/90 backdrop-blur-sm rounded-t-lg">
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="p-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                          B.E. in Computer Engineering
                        </CardTitle>
                        <p className="text-xl text-primary font-semibold mb-4">
                          Government Engineering College, Gandhinagar
                        </p>
                        
                        <div className="flex flex-col lg:flex-row gap-4 text-muted-foreground mb-6">
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <MapPin className="h-4 w-4" />
                            <span>Gandhinagar, India</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="h-4 w-4" />
                            <span>2018 – 2022</span>
                          </motion.div>
                        </div>

                        <motion.div 
                          className="flex flex-wrap items-center gap-3"
                          initial={{ y: 20, opacity: 0 }}
                          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                        >
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-yellow-600" />
                            <span className="font-semibold text-foreground text-lg">CGPA: 8.91 / 10</span>
                          </div>
                          <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 border-green-500/30 px-3 py-1 text-sm font-medium">
                            🏆 Distinction
                          </Badge>
                        </motion.div>
                      </div>
                    </div>
                  </CardHeader>
                </div>

                <CardContent className="p-6">
                  <motion.p
                    className="text-muted-foreground leading-relaxed mb-6 text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    Completed Bachelor's degree in Computer Engineering with distinction, 
                    gaining strong foundation in software development, algorithms, data structures, 
                    and modern web technologies that form the basis of my professional career.
                  </motion.p>

                  {/* Achievements Grid */}
                  <motion.div 
                    className="grid md:grid-cols-3 gap-4 mb-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group/item"
                        whileHover={{ scale: 1.05, y: -5 }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      >
                        <achievement.icon className="h-6 w-6 text-primary mb-2 group-hover/item:scale-110 transition-transform" />
                        <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Expandable Section */}
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border/50 pt-6">
                      <h4 className="font-semibold mb-4 text-lg">Key Subjects Studied</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {subjects.map((subject, index) => (
                          <motion.div
                            key={index}
                            className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isExpanded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <span className="text-sm font-medium">{subject}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Toggle Button */}
                  <motion.div 
                    className="flex justify-center mt-6"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="group hover:bg-primary/10 transition-all duration-300"
                    >
                      <span className="mr-2">
                        {isExpanded ? "Show Less" : "Show More Details"}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
