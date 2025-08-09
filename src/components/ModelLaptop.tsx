// src/components/ModelLaptop.tsx
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useRef } from "react";

export default function ModelLaptop() {
  const meshRef = useRef<Mesh>(null);

  // Animate rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Screen */}
      <boxGeometry args={[2, 1.2, 0.1]} />
      <meshStandardMaterial color="#2a2a2a" />

      {/* Base */}
      <mesh position={[0, -0.75, -0.5]}>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </mesh>
  );
}
