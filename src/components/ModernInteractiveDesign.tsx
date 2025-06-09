
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, Palette, Zap, Layers, Cpu, Globe } from "lucide-react";

export function ModernInteractiveDesign() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const rect = e.currentTarget?.getBoundingClientRect?.() || { left: 0, top: 0 };
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = document.getElementById("interactive-design");
    container?.addEventListener("mousemove", updateMousePosition);

    return () => {
      container?.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const floatingElements = [
    {
      id: "code",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      size: "w-16 h-16",
      position: { x: 100, y: 80 },
      delay: 0,
    },
    {
      id: "palette",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      size: "w-20 h-20",
      position: { x: 300, y: 150 },
      delay: 0.5,
    },
    {
      id: "zap",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      size: "w-14 h-14",
      position: { x: 200, y: 280 },
      delay: 1,
    },
    {
      id: "layers",
      icon: Layers,
      color: "from-green-500 to-emerald-500",
      size: "w-18 h-18",
      position: { x: 400, y: 100 },
      delay: 1.5,
    },
    {
      id: "cpu",
      icon: Cpu,
      color: "from-red-500 to-pink-500",
      size: "w-16 h-16",
      position: { x: 120, y: 220 },
      delay: 2,
    },
    {
      id: "globe",
      icon: Globe,
      color: "from-indigo-500 to-blue-500",
      size: "w-22 h-22",
      position: { x: 350, y: 250 },
      delay: 2.5,
    },
  ];

  const geometricShapes = [
    {
      id: "circle1",
      type: "circle",
      size: 120,
      position: { x: 150, y: 100 },
      color: "bg-gradient-to-br from-primary/20 to-purple-500/20",
    },
    {
      id: "circle2",
      type: "circle",
      size: 80,
      position: { x: 320, y: 200 },
      color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "square1",
      type: "square",
      size: 100,
      position: { x: 250, y: 80 },
      color: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
    },
  ];

  return (
    <div 
      id="interactive-design"
      className="relative w-full max-w-3xl mx-auto h-[500px] overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 rounded-3xl"
        animate={{
          background: [
            "linear-gradient(to bottom right, hsl(var(--primary) / 0.1), rgb(168 85 247 / 0.1), rgb(59 130 246 / 0.1))",
            "linear-gradient(to bottom right, rgb(59 130 246 / 0.1), hsl(var(--primary) / 0.1), rgb(168 85 247 / 0.1))",
            "linear-gradient(to bottom right, rgb(168 85 247 / 0.1), rgb(59 130 246 / 0.1), hsl(var(--primary) / 0.1))",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric Background Shapes */}
      {geometricShapes.map((shape, index) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.color} backdrop-blur-sm border border-white/10`}
          style={{
            left: shape.position.x,
            top: shape.position.y,
            width: shape.size,
            height: shape.size,
            borderRadius: shape.type === "circle" ? "50%" : "20%",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 360],
            x: [0, 20, -20, 0],
            y: [0, -10, 10, 0],
          }}
          transition={{
            opacity: { delay: index * 0.3, duration: 1 },
            scale: { delay: index * 0.3, duration: 1 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: index },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
          }}
        />
      ))}

      {/* Interactive Floating Elements */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - element.position.x, 2) +
          Math.pow(mousePosition.y - element.position.y, 2)
        );
        const isNear = distance < 100;

        return (
          <motion.div
            key={element.id}
            className="absolute cursor-pointer"
            style={{
              left: element.position.x,
              top: element.position.y,
            }}
            initial={{ opacity: 0, y: 50, scale: 0 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              x: isNear ? (mousePosition.x - element.position.x) * 0.1 : 0,
              y: isNear ? (mousePosition.y - element.position.y) * 0.1 : 0,
            }}
            transition={{
              delay: element.delay,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              x: { duration: 0.3 },
              y: { duration: 0.3 },
            }}
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, 0],
            }}
            onHoverStart={() => setHoveredElement(element.id)}
            onHoverEnd={() => setHoveredElement(null)}
          >
            <motion.div
              className={`${element.size} bg-gradient-to-br ${element.color} rounded-2xl p-4 shadow-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden`}
              animate={{
                y: [0, -10, 0],
                boxShadow: [
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  "0 20px 40px -10px rgba(0, 0, 0, 0.2)",
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                ],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
              }}
            >
              {/* Glow effect */}
              {hoveredElement === element.id && (
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              
              <Icon 
                className="w-8 h-8 text-white drop-shadow-lg" 
                strokeWidth={2}
              />
              
              {/* Sparkle effect */}
              <motion.div
                className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Floating Particles */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Interactive Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {floatingElements.map((element, index) => {
          if (index === floatingElements.length - 1) return null;
          const nextElement = floatingElements[index + 1];
          
          return (
            <motion.line
              key={`connection-${index}`}
              x1={element.position.x + 40}
              y1={element.position.y + 40}
              x2={nextElement.position.x + 40}
              y2={nextElement.position.y + 40}
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ delay: 3 + index * 0.5, duration: 2 }}
            />
          );
        })}
        
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(168 85 247)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central Pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          className="w-32 h-32 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-full backdrop-blur-sm border border-white/20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />
        <motion.div
          className="absolute inset-4 bg-gradient-to-br from-white/20 to-primary/20 rounded-full"
          animate={{
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </div>
  );
}
