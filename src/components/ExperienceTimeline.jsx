// -----------------------------------------------------------
// ExperienceTimeline.jsx — Responsive + Animated version
// -----------------------------------------------------------
import React from "react";
import { motion } from "framer-motion";
import "./ExperienceTimeline.css";

export default function ExperienceTimeline({ items }) {
  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="timeline-left">
            <span className="timeline-dot" />
            <div className="timeline-line" />
          </div>

          <div className="timeline-content">
            <h3>{item.role}</h3>
            <h4>{item.company}</h4>
            <p className="timeline-year">{item.year}</p>
            <ul>
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="tech-tags">
              {item.tech.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
