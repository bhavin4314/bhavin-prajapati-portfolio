
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    "Frontend Web Developer",
    "React Specialist", 
    "UI/UX Enthusiast",
    "JavaScript Expert"
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const text = texts[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === text) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      } else {
        setCurrentText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : text.slice(0, prev.length + 1)
        )
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background with Canvas-like Effect */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Animated geometric shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={200 + i * 120}
              cy={150 + (i % 2) * 300}
              r={30 + i * 5}
              fill="url(#gradient1)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 20, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
          
          {/* Floating lines */}
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={`line-${i}`}
              d={`M${100 + i * 200},${200 + i * 100} Q${300 + i * 150},${100 + i * 80} ${500 + i * 100},${250 + i * 120}`}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Enhanced Animated SVG Illustration */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotateY: -90 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            className="mx-auto mb-8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Laptop with glowing effect */}
            <motion.g
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Laptop Screen with glow */}
              <motion.rect
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                x="60"
                y="80"
                width="180"
                height="120"
                rx="12"
                className="stroke-primary stroke-3 fill-background"
                style={{ filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.3))" }}
              />
              
              {/* Screen content */}
              <motion.rect
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
                x="70"
                y="90"
                width="160"
                height="100"
                rx="8"
                className="fill-primary/10"
              />
              
              {/* Code Lines with typing effect */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.line
                  key={i}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 2 + i * 0.3 }}
                  x1="80"
                  y1={105 + i * 15}
                  x2={120 + i * 20}
                  y2={105 + i * 15}
                  className="stroke-primary stroke-2"
                />
              ))}
              
              {/* Laptop Base */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.7 }}
                d="M45 200 L255 200 L240 220 L60 220 Z"
                className="stroke-primary stroke-3 fill-muted"
              />
            </motion.g>
            
            {/* Floating Elements */}
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={`float-${i}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                  x: [0, 10, 0],
                  y: [0, -8, 0]
                }}
                transition={{ 
                  duration: 2 + i * 0.5, 
                  repeat: Infinity,
                  delay: 3 + i * 0.2
                }}
                cx={50 + i * 40}
                cy={40 + (i % 2) * 30}
                r={4 + i}
                className="fill-primary/30"
              />
            ))}
            
            {/* Orbiting elements */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "150px 150px" }}
            >
              <circle cx="270" cy="150" r="6" className="fill-purple-500/60" />
              <circle cx="30" cy="150" r="4" className="fill-blue-500/60" />
            </motion.g>
          </svg>
        </motion.div>

        {/* Main Content with Enhanced Animations */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Bhavin Prajapati
            </motion.span>
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-4 h-12 md:h-14"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="inline-block">
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-primary"
              >
                |
              </motion.span>
            </span>
            <div className="text-lg md:text-xl mt-2">3+ Years Experience</div>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Crafting intuitive, scalable user interfaces that bring ideas to life
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg px-8 py-6"
              >
                View Projects
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-muted-foreground">Scroll Down</span>
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
