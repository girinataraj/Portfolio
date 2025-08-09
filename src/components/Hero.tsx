import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        color: "white",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", fontWeight: "bold" }}
      >
        GIRI N S
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          fontSize: "1.5rem",
          marginTop: "10px",
          fontWeight: "bold",
          color: "#00e5ff",
        }}
      >
        <Typewriter
          options={{
            strings: [
              "🚀 Fullstack Developer",
              "⚛ React Specialist",
              "📱 Mobile App Builder",
              "🛠 API Integrator",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </motion.div>
    </section>
  );
}
