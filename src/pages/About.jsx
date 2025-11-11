import React from "react";
import "./About.css";
import about3D from "../assets/about-3d.png";

// ✅ React Icons (Original Logos)
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiPython
} from "react-icons/si";

export default function About() {
  return (
    <div className="about-container">

      {/* ==== TITLE ==== */}
      <h1 className="about-title">About Me</h1>
      <p className="about-sub">
        A builder at heart — I use AI, data, and code to create powerful, human-centered digital experiences.
      </p>

      {/* ==== TWO COLUMN SECTION ==== */}
      <section className="about-section">
        
        {/* LEFT CONTENT */}
        <div className="about-left">
          <h2 className="section-title">Who I Am</h2>

          <p className="about-text">
            I’m <strong>Radhika Mangroliya</strong>, an AI/ML engineer and full-stack developer
            who loves turning ideas into real, scalable applications.
          </p>

          <p className="about-text">
            Passionate about <strong>AI, automation, UX, and cloud engineering</strong> — I enjoy
            building intelligent systems that solve business problems.
          </p>

          <p className="about-text">
            Whether it's <strong>RAG systems</strong>, deploying apps with <strong>CI/CD</strong>, or 
            designing clean front-end experiences — I thrive where creativity meets engineering.
          </p>

          <p className="about-text">
            My mission: <strong>use AI to make digital experiences smarter, faster, and more personal.</strong>
          </p>

          <a href="/resume.pdf" target="_blank" className="resume-button">
            Download Resume →
          </a>
        </div>

        {/* RIGHT 3D IMAGE */}
        <div className="about-right">
          <img src={about3D} alt="Radhika 3D Illustration" className="about-3d-img" />
        </div>

      </section>

      {/* ==== STATS ==== */}
      <div className="stats-row">
        <div className="stat-box"><h3>20+ Projects</h3><p>AI · ML · Full-Stack</p></div>
        <div className="stat-box"><h3>5+ Years</h3><p>Hands-on development</p></div>
        <div className="stat-box"><h3>5+ AI Apps</h3><p>RAG · CV · LLM · NLP</p></div>
      </div>

      {/* =================================================== */}
      {/* ✅ SKILLS SECTION — WITHOUT HEADINGS */}
      {/* =================================================== */}

      <h2 className="skills-title">Technologies & Tools</h2>

      <div className="skills-grid">

        {/* Frontend */}
        <SkillCard icon={<FaReact />} label="React.js" />
        <SkillCard icon={<SiTypescript />} label="TypeScript" />
        <SkillCard icon={<SiJavascript />} label="JavaScript" />
        <SkillCard icon={<SiHtml5 />} label="HTML5" />
        <SkillCard icon={<SiCss3 />} label="CSS3 / Tailwind" />
        <SkillCard icon={<SiTailwindcss />} label="Tailwind CSS" />
        <SkillCard icon={<SiRedux />} label="Redux" />

        {/* Backend */}
        <SkillCard icon={<FaNodeJs />} label="Node.js" />
        <SkillCard icon={<SiExpress />} label="Express.js" />
        <SkillCard icon={<SiPython />} label="Python / FastAPI / Flask" />

        {/* Databases */}
        <SkillCard icon={<SiMongodb />} label="MongoDB" />
        <SkillCard icon={<SiPostgresql />} label="PostgreSQL" />
        <SkillCard icon={<SiFirebase />} label="Firebase" />

        {/* Cloud & DevOps */}
        <SkillCard icon={<FaAws />} label="AWS · Lambda · Bedrock" />
        <SkillCard icon={<FaDocker />} label="Docker" />
        <SkillCard icon={<FaGitAlt />} label="Git · Version Control" />
        <SkillCard icon={<SiVercel />} label="Vercel Deployments" />

      </div>

    </div>
  );
}

/* ✅ Reusable Card Component */
function SkillCard({ icon, label }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <p>{label}</p>
    </div>
  );
}
