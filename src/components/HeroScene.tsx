import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function HoneyJar() {
  const jarRef = useRef<THREE.Group>(null)
  const lidRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (jarRef.current) {
      jarRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={jarRef}>
        {/* Jar body */}
        <mesh position={[0, 0.2, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.55, 1.2, 64, 1, true]} />
          <meshPhysicalMaterial
            color="#d4940b"
            metalness={0}
            roughness={0.1}
            transmission={0.6}
            thickness={0.1}
            ior={1.5}
            clearcoat={0.3}
          />
        </mesh>
        {/* Honey inside */}
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.47, 0.47, 1.1, 64]} />
          <meshStandardMaterial color="#c47f17" roughness={0.3} />
        </mesh>
        {/* Glass top rim */}
        <mesh position={[0, 0.85, 0]}>
          <torusGeometry args={[0.5, 0.03, 16, 64]} />
          <meshStandardMaterial color="#e8d5a3" metalness={0.4} roughness={0.3} />
        </mesh>
        {/* Bottom */}
        <mesh position={[0, -0.4, 0]} rotation={[Math.PI, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.55, 0.05, 64]} />
          <meshStandardMaterial color="#e8d5a3" metalness={0.4} roughness={0.3} />
        </mesh>
        {/* Wooden lid */}
        <group ref={lidRef} position={[0, 0.92, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.52, 0.54, 0.15, 32]} />
            <meshStandardMaterial color="#5c3a1e" roughness={0.7} metalness={0.1} />
          </mesh>
          <mesh position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.52, 0.52, 0.03, 32]} />
            <meshStandardMaterial color="#4a2e14" roughness={0.5} />
          </mesh>
        </group>
      </group>
    </Float>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 200
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8
    positions[i * 3 + 1] = Math.random() * 6 - 1
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6
    sizes[i] = Math.random() * 0.03 + 0.01
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
      const pos = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] += 0.002
        if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -1
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#e8c547" transparent opacity={0.6} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}

export function HeroScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0.5, 3.5]} fov={45} />
        <ambientLight intensity={0.4} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.5} castShadow color="#fff8e7" />
        <pointLight position={[-3, 2, 2]} intensity={0.8} color="#e8c547" />
        <pointLight position={[3, -1, 3]} intensity={0.4} color="#8b6914" />
        <HoneyJar />
        <Particles />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}