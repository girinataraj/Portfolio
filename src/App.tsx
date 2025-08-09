import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function RotatingStars() {
  const starsRef = useRef<any>();
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
    }
  });
  return (
    <Stars
      ref={starsRef}
      radius={150}
      depth={80}
      count={8000}
      factor={4}
      fade
      speed={1}
    />
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      {/* Fixed Background Stars */}
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
        camera={{ position: [0, 0, 1] }}
      >
        <RotatingStars />
      </Canvas>

      {/* Content Sections */}
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Contact />
    </>
  );
}
