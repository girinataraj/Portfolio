import React from "react";
import { FaTimes } from "react-icons/fa";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ProjectModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        <button onClick={onClose} style={closeBtn}><FaTimes /></button>
        <h3 style={{ marginBottom: 8 }}>Turf Management — Demo</h3>
        <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 12 }}>
          This is a demo hotspot — show screenshots, a short description, and links here.
        </p>

        <div style={{ display: "flex", gap: 10 }}>
          <a style={linkBtn} href="#" target="_blank" rel="noreferrer">Live Demo</a>
          <a style={linkBtn} href="#" target="_blank" rel="noreferrer">Source</a>
        </div>
      </div>
    </div>
  );
}

const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0,0,0,0.6)",
  zIndex: 60,
};

const modal: React.CSSProperties = {
  width: 760,
  maxWidth: "94%",
  padding: 22,
  borderRadius: 12,
  background: "linear-gradient(180deg, rgba(20,20,20,0.95), rgba(12,12,12,0.95))",
  boxShadow: "0 12px 40px rgba(0,0,0,0.7)",
  position: "relative",
  color: "white",
};

const closeBtn: React.CSSProperties = {
  position: "absolute",
  right: 12,
  top: 12,
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: 18,
};

const linkBtn: React.CSSProperties = {
  padding: "10px 14px",
  background: "linear-gradient(90deg,#ff007f,#ff6600)",
  color: "white",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 600,
};
