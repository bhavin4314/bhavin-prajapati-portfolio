
"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float, Environment, OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"
import * as THREE from "three"

// Floating Code Symbols Component
function FloatingCode() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  const codeSymbols = ['<>', '{}', '[]', '()']
  
  return (
    <group ref={groupRef}>
      {codeSymbols.map((symbol, index) => (
        <Float
          key={index}
          speed={1 + index * 0.2}
          rotationIntensity={0.3}
          floatIntensity={0.5}
        >
          <Text
            position={[
              Math.cos((index / codeSymbols.length) * Math.PI * 2) * 3,
              Math.sin(index * 0.5) * 2,
              Math.sin((index / codeSymbols.length) * Math.PI * 2) * 3
            ]}
            fontSize={0.8}
            color="#3b82f6"
            anchorX="center"
            anchorY="middle"
            font="/fonts/JetBrainsMono-Bold.ttf"
          >
            {symbol}
          </Text>
        </Float>
      ))}
    </group>
  )
}

// Rotating Wireframe Cube Component
function CodeCube() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial wireframe color="#8b5cf6" />
    </mesh>
  )
}

// Animated Particles Component
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#06b6d4" />
    </points>
  )
}

// Main Three.js Scene Component
function Scene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <FloatingCode />
      <CodeCube />
      <ParticleField />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export function ThreeJSHero() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
