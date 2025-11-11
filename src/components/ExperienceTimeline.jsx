// -----------------------------------------------------------------------------
// ExperienceTimeline.jsx — Alternating Left/Right Connected Timeline
// -----------------------------------------------------------------------------

import React from "react";
import "./ExperienceTimeline.css";

export default function ExperienceTimeline({ items = [] }) {
  return (
    <div className="alt-timeline-container">

      {/* Center line */}
      <div className="alt-timeline-line"></div>

      {items.map((exp, idx) => (
        <div key={idx} className={`alt-timeline-item ${idx % 2 === 0 ? "left" : "right"}`}>

          {/* CONTENT BOX */}
          <div className="alt-content-box">
            <h3 className="timeline-role">{exp.role}</h3>
            <h4 className="timeline-company">{exp.company}</h4>

            <ul className="timeline-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            {/* Tags */}
            <div className="timeline-tags">
              {exp.tech.map((t, i) => (
                <span key={i} className="timeline-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* DOT */}
          <div className="alt-dot"></div>

          {/* YEAR */}
          <div className="alt-year">{exp.year}</div>
        </div>
      ))}

    </div>
  );
}
