"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, Menu, X, Home, User, Code, Briefcase, FolderOpen, Mail } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: "Home", id: "hero", icon: Home },
    { label: "About", id: "about", icon: User },
    { label: "Skills", id: "skills", icon: Code },
    { label: "Experience", id: "experience", icon: Briefcase },
    { label: "Projects", id: "projects", icon: FolderOpen },
    { label: "Contact", id: "contact", icon: Mail },
  ]

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-2xl" 
          : "bg-background/20 backdrop-blur-sm"
      }`}
      style={{
        background: isScrolled 
          ? "rgba(255, 255, 255, 0.1)" 
          : "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none"
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced animation */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              BP
            </div>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg blur opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Navigation with glassmorphism */}
          <div className="hidden md:flex items-center space-x-2 bg-background/20 backdrop-blur-lg rounded-full px-6 py-3 border border-border/30">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? "text-primary bg-primary/10" 
                        : "hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Button>
                </motion.div>
              )
            })}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Theme Toggle */}
            <motion.div 
              className="flex items-center space-x-2 bg-background/20 backdrop-blur-lg rounded-full px-4 py-2 border border-border/30"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                <Sun className="h-4 w-4 text-yellow-500" />
              </motion.div>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="data-[state=checked]:bg-primary"
              />
              <motion.div
                animate={{ rotate: theme === "dark" ? 0 : -180 }}
                transition={{ duration: 0.5 }}
              >
                <Moon className="h-4 w-4 text-blue-500" />
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden bg-background/20 backdrop-blur-lg border border-border/30"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden mt-4 p-6 bg-background/40 backdrop-blur-2xl rounded-2xl border border-border/30 shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full justify-start space-x-3 p-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? "bg-primary/20 text-primary border border-primary/30" 
                            : "hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Button>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
