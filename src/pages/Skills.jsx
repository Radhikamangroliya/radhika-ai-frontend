// --------------------------------------------------------------------
// Skills.jsx
// Shows categorized AI/ML/Cloud skills + animated circular meters.
// Uses <SkillMeter /> for visual % indicators.
// --------------------------------------------------------------------

import React from "react";
import SkillMeter from "../components/SkillMeter.jsx";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills-wrapper">

      {/* ------------------------------
          PAGE HEADER
      ------------------------------- */}
      <section className="skills-header">
        <h1 className="skills-title">Skills & Expertise</h1>
        <p className="skills-subtitle">
          A blend of AI engineering, data science, machine learning, GenAI, and cloud.
        </p>
      </section>

      {/* ------------------------------
          GENAI + LLM ENGINEERING
      ------------------------------- */}
      <section className="skills-section">
        <h2 className="skills-category-title">GenAI & LLM Engineering</h2>

        <div className="skills-grid">
          <SkillMeter label="LangChain / RAG" percent={90} />
          <SkillMeter label="Prompt Engineering" percent={88} />
          <SkillMeter label="Google ADK" percent={82} />
          <SkillMeter label="FAISS / Vector DBs" percent={84} />
          <SkillMeter label="Claude / Gemini / GPT" percent={92} />
        </div>
      </section>

      {/* ------------------------------
          MACHINE LEARNING
      ------------------------------- */}
      <section className="skills-section">
        <h2 className="skills-category-title">Machine Learning</h2>

        <div className="skills-grid">
          <SkillMeter label="XGBoost / LightGBM" percent={91} />
          <SkillMeter label="Scikit-learn" percent={89} />
          <SkillMeter label="Feature Engineering" percent={87} />
          <SkillMeter label="Time-Series Forecasting" percent={83} />
          <SkillMeter label="Recommender Systems" percent={86} />
        </div>
      </section>

      {/* ------------------------------
          DEEP LEARNING
      ------------------------------- */}
      <section className="skills-section">
        <h2 className="skills-category-title">Deep Learning</h2>

        <div className="skills-grid">
          <SkillMeter label="PyTorch" percent={83} />
          <SkillMeter label="TensorFlow" percent={79} />
          <SkillMeter label="Keras" percent={81} />
          <SkillMeter label="CNN / LSTM / Attention" percent={85} />
        </div>
      </section>

      {/* ------------------------------
          CLOUD & MLOPS
      ------------------------------- */}
      <section className="skills-section">
        <h2 className="skills-category-title">Cloud & MLOps</h2>

        <div className="skills-grid">
          <SkillMeter label="AWS" percent={85} />
          <SkillMeter label="GCP" percent={83} />
          <SkillMeter label="Docker" percent={90} />
          <SkillMeter label="GitHub Actions" percent={88} />
          <SkillMeter label="MLflow / Hydra" percent={80} />
          <SkillMeter label="CI/CD Pipelines" percent={87} />
        </div>
      </section>

      {/* ------------------------------
          DATA & DATABASES
      ------------------------------- */}
      <section className="skills-section">
        <h2 className="skills-category-title">Data & Databases</h2>

        <div className="skills-grid">
          <SkillMeter label="SQL" percent={89} />
          <SkillMeter label="BigQuery" percent={82} />
          <SkillMeter label="MongoDB" percent={78} />
          <SkillMeter label="Data Modeling" percent={80} />
        </div>
      </section>

      {/* ------------------------------
          PROGRAMMING LANGUAGES
      ------------------------------- */}
      <section className="skills-section">
        <h2 className="skills-category-title">Programming</h2>

        <div className="skills-grid">
          <SkillMeter label="Python" percent={94} />
          <SkillMeter label="JavaScript" percent={75} />
          <SkillMeter label="React.js" percent={78} />
          <SkillMeter label="FastAPI / Flask" percent={86} />
        </div>
      </section>

    </div>
  );
}
