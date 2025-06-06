
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Github, Linkedin, Heart, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function Footer() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Made with love */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>by Bhavin Prajapati</span>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button size="icon" variant="ghost" asChild>
                <a 
                  href="https://github.com/bhavin4314" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button size="icon" variant="ghost" asChild>
                <a 
                  href="https://www.linkedin.com/in/bhavin-prajapati-2477b5213" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-2 ml-4">
              <Sun className="h-4 w-4" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
              <Moon className="h-4 w-4" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-6 pt-6 border-t border-border text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} Bhavin Prajapati. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}
