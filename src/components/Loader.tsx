import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center>
      <div style={{
        minWidth: 260,
        padding: 18,
        background: "rgba(0,0,0,0.6)",
        color: "white",
        borderRadius: 12,
        textAlign: "center",
        boxShadow: "0 6px 24px rgba(0,0,0,0.6)"
      }}>
        <div style={{ fontWeight: 700, marginBottom: 6 }}>Loading 3D assets</div>
        <div style={{ height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 8, overflow: "hidden" }}>
          <div style={{
            width: `${Math.min(100, Math.round(progress))}%`,
            height: "100%",
            background: "linear-gradient(90deg,#ff007f,#ff6600)"
          }} />
        </div>
        <div style={{ marginTop: 8, fontSize: 13 }}>{Math.round(progress)}%</div>
      </div>
    </Html>
  );
}
