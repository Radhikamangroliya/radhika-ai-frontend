// -------------------------------------------------------------------
// Navbar.jsx — Auto Transparent on Home, Solid on Other Pages
// -------------------------------------------------------------------

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  // ✅ Transparent ONLY on home page
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

      <div className="nav-right">
        <Link className={isActive("/about")} to="/about">About</Link>
        <Link className={isActive("/projects")} to="/projects">Projects</Link>
        <Link className={isActive("/experience")} to="/experience">Experience</Link>
        <Link className={isActive("/services")} to="/services">Services</Link>
        <Link className={isActive("/resume")} to="/resume">Resume</Link>

        {/* ❌ REMOVED CHAT BUTTON */}
      </div>
    </nav>
  );
}
