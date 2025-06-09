
import { motion } from "framer-motion";
import { Laptop } from "lucide-react";

export function TechIconsAnimation() {
  const techIcons = [
    // React
    { 
      id: 'react', 
      x: 120, 
      y: 80, 
      color: '#61DAFB',
      delay: 0,
      svg: (
        <circle cx="120" cy="80" r="25" fill="none" stroke="#61DAFB" strokeWidth="2">
          <ellipse cx="120" cy="80" rx="35" ry="15" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 120 80)" />
          <ellipse cx="120" cy="80" rx="35" ry="15" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(-60 120 80)" />
          <ellipse cx="120" cy="80" rx="35" ry="15" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="120" cy="80" r="4" fill="#61DAFB" />
        </circle>
      )
    },
    // Next.js
    { 
      id: 'nextjs', 
      x: 200, 
      y: 120, 
      color: '#000000',
      delay: 0.2,
      svg: (
        <g>
          <rect x="185" y="105" width="30" height="30" rx="4" fill="#000000" />
          <text x="200" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">N</text>
        </g>
      )
    },
    // JavaScript
    { 
      id: 'js', 
      x: 80, 
      y: 150, 
      color: '#F7DF1E',
      delay: 0.4,
      svg: (
        <g>
          <rect x="65" y="135" width="30" height="30" rx="4" fill="#F7DF1E" />
          <text x="80" y="155" textAnchor="middle" fill="#000" fontSize="14" fontWeight="bold">JS</text>
        </g>
      )
    },
    // TypeScript
    { 
      id: 'ts', 
      x: 180, 
      y: 200, 
      color: '#3178C6',
      delay: 0.6,
      svg: (
        <g>
          <rect x="165" y="185" width="30" height="30" rx="4" fill="#3178C6" />
          <text x="180" y="205" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">TS</text>
        </g>
      )
    },
    // Tailwind CSS
    { 
      id: 'tailwind', 
      x: 250, 
      y: 160, 
      color: '#06B6D4',
      delay: 0.8,
      svg: (
        <g>
          <path d="M235 145 Q245 140 255 145 Q265 150 255 155 Q245 160 235 155 Q225 150 235 145 Z" fill="#06B6D4" />
          <path d="M240 150 Q247 147 254 150 Q261 153 254 156 Q247 159 240 156 Q233 153 240 150 Z" fill="#0EA5E9" />
        </g>
      )
    },
    // HTML
    { 
      id: 'html', 
      x: 60, 
      y: 220, 
      color: '#E34F26',
      delay: 1.0,
      svg: (
        <g>
          <polygon points="45,205 55,235 85,235 75,205" fill="#E34F26" />
          <polygon points="55,215 75,215 73,225 57,225" fill="#F16529" />
          <text x="65" y="225" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">HTML</text>
        </g>
      )
    },
    // CSS
    { 
      id: 'css', 
      x: 140, 
      y: 240, 
      color: '#1572B6',
      delay: 1.2,
      svg: (
        <g>
          <polygon points="125,225 135,255 165,255 155,225" fill="#1572B6" />
          <polygon points="135,235 155,235 153,245 137,245" fill="#33A9DC" />
          <text x="145" y="245" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">CSS</text>
        </g>
      )
    },
    // Git
    { 
      id: 'git', 
      x: 220, 
      y: 250, 
      color: '#F05032',
      delay: 1.4,
      svg: (
        <g>
          <circle cx="220" cy="250" r="15" fill="#F05032" />
          <path d="M210 245 L220 235 L230 245 L225 250 L215 250 Z" fill="white" />
          <circle cx="217" cy="247" r="2" fill="#F05032" />
          <circle cx="223" cy="247" r="2" fill="#F05032" />
        </g>
      )
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        width="320"
        height="300"
        viewBox="0 0 320 300"
        className="w-full h-auto max-w-md"
      >
        {/* Background circles */}
        <motion.circle
          cx="160"
          cy="150"
          r="120"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="160"
          cy="150"
          r="80"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="1"
          strokeDasharray="3,3"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="purple" stopOpacity="0.2" />
            <stop offset="100%" stopColor="blue" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Tech Icons */}
        {techIcons.map((icon, index) => (
          <motion.g
            key={icon.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{ 
              opacity: { delay: icon.delay, duration: 0.5 },
              scale: { delay: icon.delay, duration: 0.5 },
              y: { 
                delay: icon.delay + 1, 
                duration: 2 + index * 0.2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          >
            {icon.svg}
          </motion.g>
        ))}

        {/* Central Laptop Icon */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <motion.circle
            cx="160"
            cy="150"
            r="25"
            fill="hsl(var(--primary))"
            fillOpacity="0.1"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <foreignObject x="145" y="135" width="30" height="30">
            <div className="flex items-center justify-center h-full">
              <Laptop className="h-6 w-6 text-primary" />
            </div>
          </foreignObject>
        </motion.g>

        {/* Connecting lines */}
        {techIcons.map((icon, index) => (
          <motion.line
            key={`line-${icon.id}`}
            x1="160"
            y1="150"
            x2={icon.x}
            y2={icon.y}
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeOpacity="0.2"
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: icon.delay + 0.5, duration: 1 }}
          />
        ))}
      </svg>
    </div>
  );
}
