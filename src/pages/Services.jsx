import React from "react";
import "./Services.css";

// ✅ Icons
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaServer, 
  FaBrain, 
  FaTools,
  FaChartLine 
} from "react-icons/fa";

export default function Services() {
  return (
    <div className="services-container">

      <h1 className="services-title">My Services</h1>
      <p className="services-sub">AI • LLMs • Full-Stack • Cloud • DevOps • Analytics</p>

      <div className="services-grid">

        {/* ✅ Web App Development */}
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h2>Web Application Development</h2>
          <p>
            Modern, responsive applications using React, Node.js, cloud APIs, and clean UI/UX principles.
          </p>
        </div>

        {/* ✅ Mobile App Development */}
        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h2>Mobile Application Development</h2>
          <p>
            High-performance Android/iOS apps with authentication, databases, and optimized UI.
          </p>
        </div>

        {/* ✅ Backend / API Development */}
        <div className="service-card">
          <FaServer className="service-icon" />
          <h2>Backend & API Development</h2>
          <p>
            Secure, optimized APIs using Node.js, Python, FastAPI, with full cloud integration.
          </p>
        </div>

        {/* ✅ AI & ML */}
        <div className="service-card">
          <FaBrain className="service-icon" />
          <h2>AI & Machine Learning</h2>
          <p>
            RAG pipelines, embeddings, vector search, LLM agents, ML models, and automation workflows.
          </p>
        </div>

        {/* ✅ DevOps / CI/CD */}
        <div className="service-card">
          <FaTools className="service-icon" />
          <h2>DevOps & CI/CD Automation</h2>
          <p>
            Dockerization, GitHub Actions CI/CD pipelines, cloud deployments, monitoring, and scaling.
          </p>
        </div>

        {/* ✅ NEW — Data Analytics & BI */}
        <div className="service-card">
          <FaChartLine className="service-icon" />
          <h2>Data Analytics & Business Intelligence</h2>
          <p>
            Power BI, Tableau, SQL analytics, dashboards, KPI tracking, insights, and data-driven decision making.
          </p>
        </div>

      </div>
    </div>
  );
}
