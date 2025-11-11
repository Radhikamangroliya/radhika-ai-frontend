// ------------------------------------------------------------
// Footer.jsx
// Minimal neon footer for Radhika’s brand identity
// ------------------------------------------------------------

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Radhika Mangroliya · AI Portfolio</p>
      <p className="sub">Built with ❤️ using React, FastAPI & Anthropic Claude</p>
    </footer>
  );
}
