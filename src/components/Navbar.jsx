// -------------------------------------------------------------------
// Navbar.jsx — Transparent on Home, Solid on Others + Mobile Menu
// -------------------------------------------------------------------

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const containerClass = isHome
    ? "nav-container nav-transparent"
    : "nav-container nav-solid";

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav className={containerClass}>
      <div className="nav-left">
        <Link to="/" className="logo">
          Radhika <span className="accent">AI</span>
        </Link>
      </div>

      {/* Toggle button (visible on phones) */}
      <div
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </div>

      {/* Links */}
      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <Link onClick={() => setMenuOpen(false)} className={isActive("/about")} to="/about">About</Link>
        <Link onClick={() => setMenuOpen(false)} className={isActive("/projects")} to="/projects">Projects</Link>
        <Link onClick={() => setMenuOpen(false)} className={isActive("/experience")} to="/experience">Experience</Link>
        <Link onClick={() => setMenuOpen(false)} className={isActive("/services")} to="/services">Services</Link>
        <Link onClick={() => setMenuOpen(false)} className={isActive("/contact")} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
