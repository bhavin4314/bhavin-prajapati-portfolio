
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Laptop } from "lucide-react";

export function InteractiveTechEcosystem() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    {
      id: "react",
      name: "React",
      x: 300,
      y: 150,
      color: "#61DAFB",
      orbitRadius: 120,
      orbitSpeed: 20,
      size: 35,
      svg: (
        <g>
          <circle cx="0" cy="0" r="12" fill="none" stroke="#61DAFB" strokeWidth="2" />
          <ellipse cx="0" cy="0" rx="20" ry="8" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60)" />
          <ellipse cx="0" cy="0" rx="20" ry="8" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(-60)" />
          <ellipse cx="0" cy="0" rx="20" ry="8" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="3" fill="#61DAFB" />
        </g>
      ),
    },
    {
      id: "nextjs",
      name: "Next.js",
      x: 400,
      y: 200,
      color: "#000000",
      orbitRadius: 100,
      orbitSpeed: 25,
      size: 35,
      svg: (
        <g>
          <rect x="-15" y="-15" width="30" height="30" rx="4" fill="#000000" />
          <text x="0" y="5" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">N</text>
        </g>
      ),
    },
    {
      id: "javascript",
      name: "JavaScript",
      x: 200,
      y: 250,
      color: "#F7DF1E",
      orbitRadius: 90,
      orbitSpeed: 30,
      size: 35,
      svg: (
        <g>
          <rect x="-15" y="-15" width="30" height="30" rx="4" fill="#F7DF1E" />
          <text x="0" y="5" textAnchor="middle" fill="#000" fontSize="14" fontWeight="bold">JS</text>
        </g>
      ),
    },
    {
      id: "typescript",
      name: "TypeScript",
      x: 350,
      y: 300,
      color: "#3178C6",
      orbitRadius: 110,
      orbitSpeed: 22,
      size: 35,
      svg: (
        <g>
          <rect x="-15" y="-15" width="30" height="30" rx="4" fill="#3178C6" />
          <text x="0" y="5" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">TS</text>
        </g>
      ),
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      x: 450,
      y: 120,
      color: "#06B6D4",
      orbitRadius: 95,
      orbitSpeed: 28,
      size: 35,
      svg: (
        <g>
          <path d="M-20 -8 Q-10 -15 0 -8 Q10 -1 0 6 Q-10 13 -20 6 Q-30 -1 -20 -8 Z" fill="#06B6D4" />
          <path d="M-15 -3 Q-8 -6 -1 -3 Q6 0 -1 3 Q-8 6 -15 3 Q-22 0 -15 -3 Z" fill="#0EA5E9" />
        </g>
      ),
    },
    {
      id: "mui",
      name: "Material-UI",
      x: 150,
      y: 180,
      color: "#007FFF",
      orbitRadius: 85,
      orbitSpeed: 32,
      size: 35,
      svg: (
        <g>
          <circle cx="0" cy="0" r="15" fill="#007FFF" />
          <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">MUI</text>
        </g>
      ),
    },
    {
      id: "html",
      name: "HTML5",
      x: 120,
      y: 320,
      color: "#E34F26",
      orbitRadius: 105,
      orbitSpeed: 26,
      size: 35,
      svg: (
        <g>
          <polygon points="-15,-12 -10,12 10,12 15,-12" fill="#E34F26" />
          <polygon points="-8,-2 8,-2 6,6 -6,6" fill="#F16529" />
        </g>
      ),
    },
    {
      id: "css",
      name: "CSS3",
      x: 250,
      y: 350,
      color: "#1572B6",
      orbitRadius: 115,
      orbitSpeed: 24,
      size: 35,
      svg: (
        <g>
          <polygon points="-15,-12 -10,12 10,12 15,-12" fill="#1572B6" />
          <polygon points="-8,-2 8,-2 6,6 -6,6" fill="#33A9DC" />
        </g>
      ),
    },
    {
      id: "git",
      name: "Git",
      x: 420,
      y: 350,
      color: "#F05032",
      orbitRadius: 88,
      orbitSpeed: 35,
      size: 35,
      svg: (
        <g>
          <circle cx="0" cy="0" r="15" fill="#F05032" />
          <path d="M-8 -5 L0 -12 L8 -5 L5 0 L-5 0 Z" fill="white" />
          <circle cx="-5" cy="-2" r="2" fill="#F05032" />
          <circle cx="5" cy="-2" r="2" fill="#F05032" />
        </g>
      ),
    },
  ];

  const centerX = 250;
  const centerY = 200;

  // Background particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 500,
    y: Math.random() * 400,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <motion.svg
        width="500"
        height="400"
        viewBox="0 0 500 400"
        className="w-full h-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Background Gradients */}
        <defs>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="purple" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background Particles */}
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="hsl(var(--primary))"
            fillOpacity="0.1"
            initial={{ opacity: 0, y: particle.y + 20 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [particle.y + 20, particle.y - 20, particle.y + 20],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central Hub */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.circle
            cx={centerX}
            cy={centerY}
            r="40"
            fill="url(#centerGradient)"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeOpacity="0.3"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx={centerX}
            cy={centerY}
            r="25"
            fill="hsl(var(--primary))"
            fillOpacity="0.1"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <foreignObject x={centerX - 15} y={centerY - 15} width="30" height="30">
            <div className="flex items-center justify-center h-full">
              <Laptop className="h-8 w-8 text-primary" />
            </div>
          </foreignObject>
        </motion.g>

        {/* Orbital Rings */}
        {[80, 100, 120].map((radius, index) => (
          <motion.circle
            key={radius}
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeOpacity="0.1"
            strokeDasharray="5,5"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 15 + index * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Technology Icons */}
        {technologies.map((tech, index) => {
          const angle = (index / technologies.length) * 360;
          const orbitX = centerX + Math.cos((angle * Math.PI) / 180) * tech.orbitRadius;
          const orbitY = centerY + Math.sin((angle * Math.PI) / 180) * tech.orbitRadius;

          return (
            <g key={tech.id}>
              {/* Connection Line */}
              <motion.line
                x1={centerX}
                y1={centerY}
                x2={orbitX}
                y2={orbitY}
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                strokeDasharray="3,3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ delay: index * 0.2 + 1.5, duration: 1 }}
              />

              {/* Technology Icon */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                }}
                transition={{ 
                  delay: index * 0.2 + 1.5, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.2 }}
                onHoverStart={() => setHoveredTech(tech.id)}
                onHoverEnd={() => setHoveredTech(null)}
                style={{ cursor: "pointer" }}
              >
                <motion.g
                  animate={{
                    x: orbitX,
                    y: orbitY,
                    rotate: 360,
                  }}
                  transition={{
                    x: { duration: 0 },
                    y: { duration: 0 },
                    rotate: { duration: tech.orbitSpeed, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <motion.g
                    animate={{
                      y: [0, -5, 0],
                      scale: hoveredTech === tech.id ? 1.3 : 1,
                    }}
                    transition={{
                      y: { 
                        duration: 2 + index * 0.3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.2,
                      },
                      scale: { duration: 0.2 }
                    }}
                  >
                    {tech.svg}
                    {hoveredTech === tech.id && (
                      <motion.circle
                        cx="0"
                        cy="0"
                        r="25"
                        fill={tech.color}
                        fillOpacity="0.1"
                        stroke={tech.color}
                        strokeWidth="2"
                        filter="url(#glow)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      />
                    )}
                  </motion.g>
                </motion.g>
              </motion.g>
            </g>
          );
        })}

        {/* Dynamic Connection Network */}
        {technologies.map((tech1, i) => 
          technologies.slice(i + 1).map((tech2, j) => {
            const actualJ = i + 1 + j;
            if (Math.random() > 0.7) {
              const angle1 = (i / technologies.length) * 360;
              const angle2 = (actualJ / technologies.length) * 360;
              const x1 = centerX + Math.cos((angle1 * Math.PI) / 180) * tech1.orbitRadius;
              const y1 = centerY + Math.sin((angle1 * Math.PI) / 180) * tech1.orbitRadius;
              const x2 = centerX + Math.cos((angle2 * Math.PI) / 180) * tech2.orbitRadius;
              const y2 = centerY + Math.sin((angle2 * Math.PI) / 180) * tech2.orbitRadius;

              return (
                <motion.line
                  key={`${tech1.id}-${tech2.id}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  strokeDasharray="2,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    delay: (i + actualJ) * 0.5 + 2,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                />
              );
            }
            return null;
          })
        )}
      </motion.svg>

      {/* Technology Tooltip */}
      {hoveredTech && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg"
        >
          <p className="text-sm font-medium text-foreground">
            {technologies.find(tech => tech.id === hoveredTech)?.name}
          </p>
        </motion.div>
      )}
    </div>
  );
}
