import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const navStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "12px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    zIndex: 1000,
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={navStyles}
      >
        {/* Logo */}
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "1.3rem",
            color: "#00e5ff",
            textShadow: "0 0 8px rgba(0, 229, 255, 0.7)",
            cursor: "pointer",
          }}
          onClick={() =>
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Giri N S
        </h2>

        {/* Desktop Links */}
        <div className="desktop-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(link.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                color: active === link.id ? "#00e5ff" : "white",
                fontWeight: active === link.id ? "bold" : "normal",
                textDecoration: "none",
                position: "relative",
                paddingBottom: "4px",
                transition: "color 0.3s ease",
              }}
            >
              {link.name}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: "2px",
                  width: active === link.id ? "100%" : "0%",
                  background: "#00e5ff",
                  borderRadius: "2px",
                  transition: "width 0.3s ease-in-out",
                }}
                className="nav-underline"
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FiX size={26} color="#00e5ff" />
          ) : (
            <FiMenu size={26} color="#00e5ff" />
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "70%",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(8px)",
              padding: "80px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              zIndex: 9999,
            }}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
                style={{
                  color: active === link.id ? "#00e5ff" : "white",
                  fontWeight: active === link.id ? "bold" : "normal",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: "4px",
                  transition: "color 0.3s ease",
                }}
              >
                {link.name}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    width: active === link.id ? "100%" : "0%",
                    background: "#00e5ff",
                    borderRadius: "2px",
                    transition: "width 0.3s ease-in-out",
                  }}
                  className="nav-underline"
                ></span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS */}
      <style>
        {`
          .desktop-links {
            display: flex;
            gap: 24px;
          }
          .mobile-menu-btn {
            display: none;
            cursor: pointer;
          }
          @media (max-width: 768px) {
            .desktop-links {
              display: none;
            }
            .mobile-menu-btn {
              display: block;
            }
          }
          a:hover {
            color: #00e5ff !important;
          }
          a:hover .nav-underline {
            width: 100% !important;
          }
        `}
      </style>
    </>
  );
}
