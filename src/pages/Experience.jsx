// --------------------------------------------------------------------
// Experience.jsx — Work + Education Timeline
// Clean layout with section icons, ATS-friendly bullets
// --------------------------------------------------------------------

import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import ExperienceTimeline from "../components/ExperienceTimeline.jsx";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience-wrapper">

      {/* ------------------------------
          PAGE HEADER
      ------------------------------- */}
      <section className="experience-header">
        <h1 className="experience-title">Experience</h1>
        <p className="experience-subtitle">
          A blend of AI engineering, automation, data science, and full-stack development
          applied to real business problems and real-world engineering environments.
        </p>
      </section>



      {/* ============================================================
           WORK EXPERIENCE
      ============================================================ */}
      <h2 className="section-label">
        <FaBriefcase className="section-icon" /> Work Experience
      </h2>

      <div className="experience-timeline-section">
        <ExperienceTimeline
          items={[
            {
              year: "June 2024 – Present",
              role: "AI & Data Automation Engineer",
              company: "Bluesap Solutions Inc, New York, USA",
              icon: <FaBriefcase />,
              bullets: [
                "I build AI-driven analytics pipelines, recommendation systems, and cloud-based automation workflows that improve sales forecasting, optimize inventory, and reduce manual processing for retail and e-commerce clients."
              ],
              tech: [
                "Python", "NLP", "Generative AI", "SQL",
                "AWS Lambda", "Serverless", "Docker", "CI/CD"
              ]
            },

            {
              year: "Jan 2021 – Nov 2023",
              role: "Data Science Intern",
              company: "Cerebulb, Gift City, India",
              icon: <FaBriefcase />,
              bullets: [
                "Worked on deep-learning and forecasting systems including CNN object detection, LSTM captioning, industry forecasting models, and IoT dashboards used for real-time operational insights in chemical and mining industries."
              ],
              tech: [
                "Deep Learning", "CNN", "LSTM",
                "Forecasting", "IoT Analytics", "Python"
              ]
            }
          ]}
        />
      </div>



      {/* ============================================================
           EDUCATION
      ============================================================ */}
      <h2 className="section-label">
        <FaGraduationCap className="section-icon" /> Education
      </h2>

      <div className="experience-timeline-section">
        <ExperienceTimeline
          items={[
            {
              year: "Jan 2024 – Aug 2025",
              role: "M.S. Computer Science (GPA: 3.5/4)",
              company: "DePaul University, Chicago, IL",
              icon: <FaGraduationCap />,
              bullets: [
                "Graduate coursework focused on AI, Machine Learning, Distributed Systems, Cloud Computing, and Software Engineering with multiple hands-on projects deploying RAG, agents, and cloud-native AI systems."
              ],
              tech: ["AI", "ML", "Cloud", "Distributed Systems", "Python"]
            },

            {
              year: "June 2018 – June 2022",
              role: "B.E. Information Technology (GPA: 3.8/4)",
              company: "Gujarat Technological University, India",
              icon: <FaGraduationCap />,
              bullets: [
                "Bachelor’s foundation in algorithms, databases, software engineering, networks, and full-stack development with early projects in automation, analysis, and web development."
              ],
              tech: ["Algorithms", "Databases", "Software Engineering"]
            }
          ]}
        />
      </div>
    </div>
  );
}
