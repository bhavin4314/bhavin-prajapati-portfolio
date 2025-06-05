
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { LoadingSpinner } from "@/components/LoadingSpinner"

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Enhanced loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }

  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingSpinner key="loading" />
        ) : (
          <motion.div
            key="content"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            className="relative"
          >
            {/* Background decoration */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <Navbar />
            
            <main className="relative">
              <motion.div variants={sectionVariants}>
                <Hero />
              </motion.div>
              
              <motion.div variants={sectionVariants}>
                <About />
              </motion.div>
              
              <motion.div variants={sectionVariants}>
                <Skills />
              </motion.div>
              
              <motion.div variants={sectionVariants}>
                <Experience />
              </motion.div>
              
              <motion.div variants={sectionVariants}>
                <Projects />
              </motion.div>
              
              <motion.div variants={sectionVariants}>
                <Contact />
              </motion.div>
            </main>
            
            <motion.div variants={sectionVariants}>
              <Footer />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Index
