import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// Replace these with your own EmailJS details!
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const USER_ID = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const [notification, setNotification] = useState(false);

  // You can add loading/error states if desired
  interface EmailJSResult {
    text: string;
    status: number;
  }

  interface EmailJSError {
    text: string;
    status: number;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send form via EmailJS
    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      e.target as HTMLFormElement,
      USER_ID
    )
      .then((result: EmailJSResult) => {
        // Success: show notification
        setNotification(true);
        setTimeout(() => setNotification(false), 3000);

        // Optionally: reset form
        (e.target as HTMLFormElement).reset();
      }, (error: EmailJSError) => {
        // Error: show notification (customize as needed)
        setNotification(true);
        setTimeout(() => setNotification(false), 4000);
        // You could show an error message here if you want
      });
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        color: "white",
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative"
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2rem", marginBottom: "20px" }}
      >
        Contact Me
      </motion.h2>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          textAlign: "left",
        }}
        onSubmit={handleSubmit}
      >
        <input
          name="name" // needed for EmailJS
          type="text"
          placeholder="Your Name"
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            outline: "none",
          }}
        />
        <input
          name="email" // needed for EmailJS
          type="email"
          placeholder="Your Email"
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            outline: "none",
          }}
        />
        <textarea
          name="message" // needed for EmailJS
          placeholder="Your Message"
          rows={4}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            outline: "none",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            background: "#00e5ff",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#00b8cc")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#00e5ff")
          }
        >
          Send Message
        </button>
      </motion.form>

      {/* Notification Popup */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "#fff",
            color: "#222",
            padding: "18px 30px",
            borderRadius: "10px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
            zIndex: 10000,
            fontWeight: "500",
          }}
        >
          <strong>Message Sent!</strong>
          <div>Thank you for your message. I'll get back to you soon!</div>
        </motion.div>
      )}

      {/* Direct Contact Info */}
      <div style={{ marginTop: "20px", fontSize: "0.95rem", lineHeight: "1.6" }}>
        Or reach me directly:{" "}
        <a
          href="mailto:Girinataraj765@gmail.com"
          style={{ color: "#00e5ff", textDecoration: "none" }}
        >
          Girinataraj765@gmail.com
        </a>{" "}
        |{" "}
        <a
          href="tel:+919965413137"
          style={{ color: "#00e5ff", textDecoration: "none" }}
        >
          +91 99654 13137
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/giri765/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#00e5ff", textDecoration: "none" }}
        >
          LinkedIn
        </a>
      </div>
      {/* Mobile styles */}
      <style>
        {`
          a:hover {
            text-decoration: underline;
          }
          @media (max-width: 768px) {
            section {
              padding: 60px 15px;
            }
            h2 {
              font-size: 1.8rem;
            }
          }
        `}
      </style>
    </section>
  );
}
