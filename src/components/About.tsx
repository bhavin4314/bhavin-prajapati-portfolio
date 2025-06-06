
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Coffee, Code } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { label: "Years Experience", value: "3+", icon: Calendar },
    { label: "Projects Completed", value: "6", icon: Coffee },
    { label: "Tech Stack", value: "React+", icon: Code },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="border-0 shadow-2xl bg-card/60 backdrop-blur-lg">
                <CardContent className="p-8 md:p-12">
                  <motion.div
                    className="space-y-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-3 text-primary mb-6">
                      <MapPin className="h-5 w-5" />
                      <span className="font-semibold">Gandhinagar, India</span>
                    </div>
                    
                    <motion.p
                      className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      I'm a frontend developer with over{" "}
                      <motion.span 
                        className="text-primary font-semibold inline-block"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        3 years of experience
                      </motion.span>{" "}
                      working on scalable React/Next.js applications. I specialize in modern UIs with{" "}
                      <span className="text-primary font-semibold">
                        Tailwind, MUI, and Reactstrap
                      </span>.
                    </motion.p>
                    
                    <motion.p
                      className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      I have strong communication and problem-solving skills and a passion for creating{" "}
                      <span className="text-primary font-semibold">
                        intuitive web interfaces
                      </span>{" "}
                      that provide exceptional user experiences.
                    </motion.p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="space-y-6"
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <motion.div 
                          className="text-3xl font-bold text-primary"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ duration: 0.5, delay: 0.9 + index * 0.1, type: "spring" }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
