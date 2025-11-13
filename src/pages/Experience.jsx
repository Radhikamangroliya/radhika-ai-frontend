// -----------------------------------------------------------
// Experience.jsx — Dual Layout (Timeline + Details)
// -----------------------------------------------------------
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./Experience.css";

const experienceTimeline = [
  { company: "Bluesap Solutions Inc, New York, USA", date: "June 2024 – Present" },
  { company: "Cerebulb, Gift City, India", date: "Jan 2021 – Nov 2023" },
];

const educationTimeline = [
  { company: "DePaul University, Chicago, IL", date: "Jan 2024 – Aug 2025" },
  { company: "Gujarat Technological University, India", date: "June 2018 – June 2022" },
];

const experienceDetails = [
  {
    title: "AI & Data Automation Engineer",
    company: "Bluesap Solutions Inc, New York, USA",
    desc: "Built AI-driven analytics pipelines, recommendation systems, and cloud automation workflows improving forecasting and efficiency.",
    tech: ["Python", "NLP", "Generative AI", "SQL", "AWS Lambda", "Docker", "CI/CD"],
  },
  {
    title: "Data Science Intern",
    company: "Cerebulb, Gift City, India",
    desc: "Developed deep-learning and forecasting systems using CNN, LSTM, and IoT analytics for real-time operational insights.",
    tech: ["Deep Learning", "CNN", "LSTM", "Forecasting", "IoT Analytics", "Python"],
  },
];

const educationDetails = [
  {
    title: "M.S. Computer Science (GPA 3.5/4)",
    company: "DePaul University, Chicago, IL",
    desc: "Graduate coursework in AI, ML, Cloud, Distributed Systems, and Software Engineering with projects on RAG, agents, and AI deployment.",
    tech: ["AI", "ML", "Cloud", "Python", "Distributed Systems"],
  },
  {
    title: "B.E. Information Technology (GPA 3.8/4)",
    company: "Gujarat Technological University, India",
    desc: "Foundation in algorithms, databases, and full-stack development with automation and analysis projects.",
    tech: ["Algorithms", "Databases", "Software Engineering"],
  },
];

// Timeline component
function MiniTimeline({ items }) {
  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mini-content">
            <h4>{item.company}</h4>
            <p>{item.date}</p>
          </div>
          <span className="circle"></span>
        </motion.div>
      ))}
    </div>
  );
}

// Detailed cards component
function DetailSection({ items }) {
  return (
    <div className="detail-section">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="detail-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>{item.title}</h3>
          <h4>{item.company}</h4>
          <p>{item.desc}</p>
          <div className="tags">
            {item.tech.map((tech, t) => (
              <span key={t}>{tech}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <div className="experience-wrapper">
      <section className="experience-header">
        <h1 className="experience-title">Experience</h1>
        <p className="experience-subtitle">
          A blend of AI engineering, automation, and data science applied to real-world problems.
        </p>
      </section>

      {/* ---------- WORK TIMELINE ---------- */}
      <h2 className="section-label">
        <FaBriefcase className="section-icon" /> Work Experience
      </h2>
      <MiniTimeline items={experienceTimeline} />
      <DetailSection items={experienceDetails} />

      {/* ---------- EDUCATION TIMELINE ---------- */}
      <h2 className="section-label">
        <FaGraduationCap className="section-icon" /> Education
      </h2>
      <MiniTimeline items={educationTimeline} />
      <DetailSection items={educationDetails} />
    </div>
  );
}
