import { motion } from "framer-motion";

const projects = [
  {
    title: "TurfTech Automation",
    subtitle: "Turf Management System",
    description:
      "Smart turf monitoring and maintenance system improving efficiency by 45%.",
  },
  {
    title: "HOD Digital Command Center",
    subtitle: "Data Dashboard",
    description:
      "Real-time data dashboard for department performance tracking.",
  },
  {
    title: "Eco-Friendly Turf Initiative",
    subtitle: "Sustainability Project",
    description:
      "Sustainability project reducing water usage by 30%.",
  },
  {
    title: "Reactify Pro",
    subtitle: "Reusable UI Library",
    description:
      "Custom React component library for blazing-fast development.",
  },
  {
    title: "StackMaster API",
    subtitle: "Fullstack Backend Service",
    description:
      "High-performance API for seamless integration between apps.",
  },
];

export default function Projects() {
  return (
    <section
      style={{
        padding: "60px 20px",
        color: "white",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "15px 20px",
            borderRadius: "10px",
            marginTop: "15px",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>{p.title}</h3>
          <h4 style={{ fontSize: "1rem", color: "#bbb" }}>{p.subtitle}</h4>
          <p style={{ fontSize: "0.9rem", marginTop: "5px" }}>{p.description}</p>
        </motion.div>
      ))}
    </section>
  );
}
