
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 bg-background">
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
            🎓 Education
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-3 bg-primary/10 rounded-full"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl mb-2">
                        B.E. in Computer Engineering
                      </CardTitle>
                      <p className="text-lg text-primary font-semibold mb-3">
                        Government Engineering College, Gandhinagar
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-3 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Gandhinagar, India</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>2018 – 2022</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-yellow-600" />
                        <span className="font-semibold text-foreground">CGPA: 8.91 / 10</span>
                        <Badge className="bg-green-500/10 text-green-600 border-green-500/20 ml-2">
                          Distinction
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Completed Bachelor's degree in Computer Engineering with distinction, 
                    gaining strong foundation in software development, algorithms, data structures, 
                    and modern web technologies that form the basis of my professional career.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
