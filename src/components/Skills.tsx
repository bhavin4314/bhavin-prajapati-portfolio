
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript"],
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js"],
      color: "bg-green-500/10 text-green-600 border-green-500/20"
    },
    {
      title: "UI Libraries",
      skills: ["Tailwind CSS", "MUI", "Reactstrap"],
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
    {
      title: "State Management",
      skills: ["Redux", "React Context"],
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
    },
    {
      title: "Tools & Services",
      skills: ["Git", "Firebase", "Google Maps", "Mixpanel"],
      color: "bg-pink-500/10 text-pink-600 border-pink-500/20"
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Problem Solving"],
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20"
    }
  ]

  return (
    <section id="skills" className="py-20">
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
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.5 + index * 0.1 + skillIndex * 0.05 
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className={`${category.color} hover:scale-105 transition-transform duration-200`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
