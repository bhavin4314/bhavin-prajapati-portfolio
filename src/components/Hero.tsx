
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute w-${4 + i * 2} h-${4 + i * 2} bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-sm`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Animated SVG Illustration */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="mx-auto mb-8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Laptop Screen */}
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              x="40"
              y="60"
              width="120"
              height="80"
              rx="8"
              className="stroke-primary stroke-2 fill-background"
            />
            
            {/* Laptop Base */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
              d="M30 140 L170 140 L160 150 L40 150 Z"
              className="stroke-primary stroke-2 fill-muted"
            />
            
            {/* Code Lines */}
            {[0, 1, 2, 3].map((i) => (
              <motion.line
                key={i}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 + i * 0.2 }}
                x1="50"
                y1={75 + i * 12}
                x2={90 + i * 15}
                y2={75 + i * 12}
                className="stroke-primary stroke-2"
              />
            ))}
            
            {/* Coffee Cup */}
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              cx="180"
              cy="100"
              r="8"
              className="fill-primary"
            />
          </svg>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Bhavin Prajapati
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Frontend Web Developer | 3+ Years Experience
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Crafting intuitive, scalable user interfaces that bring ideas to life
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Projects
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  )
}
