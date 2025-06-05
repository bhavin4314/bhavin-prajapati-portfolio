
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>

          <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <motion.p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I'm a frontend developer based in{" "}
                <span className="text-primary font-semibold">Gandhinagar, India</span>{" "}
                with over{" "}
                <span className="text-primary font-semibold">3 years of experience</span>{" "}
                working on scalable React/Next.js applications. I specialize in modern UIs with{" "}
                <span className="text-primary font-semibold">Tailwind, MUI, and Reactstrap</span>.
                I have strong communication and problem-solving skills and a passion for creating{" "}
                <span className="text-primary font-semibold">intuitive web interfaces</span>{" "}
                that provide exceptional user experiences.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
