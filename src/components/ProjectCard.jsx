// ----------------------------------------------------------------------
// ProjectCard.jsx
// Clean neon AI-themed project card used inside Projects.jsx.
// Human-written ✨
// ----------------------------------------------------------------------

import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ title, description, tags = [], link = "#" }) {
  return (
    <div className="project-card">

      {/* TITLE */}
      <h3 className="project-title">{title}</h3>

      {/* DESCRIPTION */}
      <p className="project-desc">{description}</p>

      {/* TAGS */}
      <div className="project-tags">
        {tags.map((tag, idx) => (
          <span key={idx} className="project-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* LINK BUTTON */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-btn"
      >
        View Project →
      </a>
    </div>
  );
}
