
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Eye, Mail, Github, Linkedin, Code, Palette, Zap } from "lucide-react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    "Frontend Web Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let charIndex = 0;

    const typeWriter = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resumeDownloadHandler = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Bhavin_Prajapati_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background -z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5 -z-10" />

      {/* Animated Background Elements - More Distributed */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-500/6 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-green-500/6 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/6 opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code className="h-16 w-16 text-primary" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/6 opacity-10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Palette className="h-12 w-12 text-purple-500" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/5 opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Zap className="h-14 w-14 text-blue-500" />
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.h1
                className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6"
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
                className="text-xl md:text-2xl xl:text-3xl font-semibold mb-6 h-12 flex items-center justify-center lg:justify-start"
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
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                3+ Years Experience crafting intuitive, scalable user interfaces
                with modern technologies and best practices. Passionate about creating
                exceptional digital experiences that users love.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
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
                    onClick={resumeDownloadHandler}
                    className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    My Resume
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
                    className="px-8 py-6 text-lg font-medium rounded-xl border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 group"
                  >
                    <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.a
                  href="https://github.com/bhavin4314"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-muted/50 hover:bg-foreground hover:text-background transition-all duration-300 backdrop-blur-sm border border-border/50"
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/bhavin-prajapati-2477b5213"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-muted/50 hover:bg-blue-600 hover:text-white transition-all duration-300 backdrop-blur-sm border border-border/50"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Stats/Skills Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Central Circle */}
                <motion.div
                  className="relative w-80 h-80 mx-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-xl" />
                  <div className="relative w-full h-full bg-gradient-to-br from-muted/80 to-muted/40 rounded-full backdrop-blur-sm border border-border/50 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="text-4xl font-bold text-primary mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                      >
                        3+
                      </motion.div>
                      <motion.div
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.7 }}
                      >
                        Years Experience
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Skill Bubbles */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-medium">React</span>
                </motion.div>

                <motion.div
                  className="absolute -top-8 right-8 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-medium">TypeScript</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 -left-8 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-medium">Tailwind</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 right-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-medium">Next.js</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="pb-8 flex items-center justify-center">
        <motion.div
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
  );
}
