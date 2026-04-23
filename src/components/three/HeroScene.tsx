import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const FloatingObject = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={ref} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial color={color} distort={0.45} speed={2} roughness={0.1} metalness={0.8} />
      </Sphere>
    </Float>
  );
};

const SpinTorus = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.getElapsedTime() * 0.4;
      ref.current.rotation.y = s.clock.getElapsedTime() * 0.6;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={1.5}>
      <Torus ref={ref} args={[1.2, 0.25, 32, 100]} position={[2.5, -0.5, -2]}>
        <meshStandardMaterial color="#ff2e2e" emissive="#ff2e2e" emissiveIntensity={0.4} metalness={0.9} roughness={0.2} />
      </Torus>
    </Float>
  );
};

export const HeroScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff2e2e" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        <FloatingObject position={[-2.5, 0.5, 0]} color="#ff2e2e" scale={1.2} />
        <FloatingObject position={[2, 1, -1]} color="#1a1a1a" scale={0.9} />
        <SpinTorus />
      </Suspense>
    </Canvas>
  );
};
