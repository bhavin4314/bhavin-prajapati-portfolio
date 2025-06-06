
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Eye, Mail } from "lucide-react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const texts = [
    "Frontend Web Developer",
    "React Specialist", 
    "UI/UX Enthusiast",
    "Problem Solver"
  ]

  useEffect(() => {
    const currentText = texts[currentIndex]
    let charIndex = 0
    
    const typeWriter = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayText(currentText.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeWriter)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeWriter)
  }, [currentIndex])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Bhavin Prajapati
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-muted-foreground">{displayText}</span>
            <motion.span
              className="ml-1 text-primary"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            3+ Years Experience crafting intuitive, scalable user interfaces
            with modern technologies and best practices.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Projects
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-6 text-lg font-medium rounded-xl border-2 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer p-2"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
