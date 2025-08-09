import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        color: "white",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.2rem",
          fontWeight: "bold",
          position: "relative",
          display: "inline-block",
        }}
      >
        About Me
        {/* Accent underline */}
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
          style={{
            position: "absolute",
            left: "20%",
            bottom: "-8px",
            height: "3px",
            background: "#00e5ff",
            borderRadius: "2px",
          }}
        />
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          marginTop: "20px",
          lineHeight: "1.8",
          fontSize: "1.05rem",
          maxWidth: "700px",
          marginInline: "auto",
          opacity: 0.9,
        }}
      >
        I am <b style={{ color: "#00e5ff" }}>Giri N S</b>, a passionate{" "}
        <b>Fullstack Developer</b> and <b>React Specialist</b>. I craft
        efficient, scalable, and visually appealing applications that
        combine strong backend logic with polished frontend design. My goal
        is to turn ideas into seamless digital experiences.
      </motion.p>

      {/* Optional background card for contrast */}
      <style>
        {`
          @media (max-width: 768px) {
            section {
              padding: 60px 15px;
            }
            h2 {
              font-size: 1.8rem;
            }
            p {
              font-size: 0.95rem;
            }
          }
        `}
      </style>
    </section>
  );
}
