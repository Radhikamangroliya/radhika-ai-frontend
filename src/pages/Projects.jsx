// -------------------------------------------------------------
// Projects.jsx — Category Sections + 3D Image Hover
// -------------------------------------------------------------

import React from "react";
import "./Projects.css";

const categories = [
  {
    name: "🧠 AI Projects",
    projects: [
      
      {
        title: "Agent Chatbot — Portfolio Assistant",
        desc: "AI chatbot with RAG and custom prompt chaining built into portfolio.",
        img: "/projects/agent.png",
        tags: ["Agents", "LLMs", "RAG", "AI Assistant"],
        github: "https://github.com/Radhikamangroliya/portfolio-Radhika-AI",
      },

      {
        title: "CareerFit AI — Resume & Job Match Assistant",
        desc: "AI-powered platform that generates resumes and finds matching jobs using NLP, embeddings, and vector search.",
        img: "/projects/careerfit.png",
        tags: ["AI", "NLP", "Vector DB", "Fullstack"],
        github: "https://github.com/Radhikamangroliya/careerfit-ai",
      },

      {
        title: "MARS — Multi-Agent Recommender System",
        desc: "AI multi-agent chatbot for movie recommendations using Gemini LLMs, FAISS vector search, and RAG pipeline.",
        img: "/projects/mars.png",
        tags: ["Python", "FAISS", "LLMs", "RAG", "GCP"],
        github: "https://github.com/Radhikamangroliya/portfolio-Radhika-AI",
      },
      {
        title: "WhatsApp Chat Analyzer",
        desc: "Sentiment analyzer using NLTK + VADER with Streamlit dashboards.",
        img: "/projects/whatsapp.png",
        tags: ["Python", "NLP", "Streamlit"],
        github: "https://github.com/Radhikamangroliya",
      },
    
      
    ],
  },

  {
    name: "⚙️ DevOps Projects",
    projects: [
      {
        title: "Azure CI/CD Web App Deployment",
        desc: "Full DevOps pipeline deploying Flask app using Terraform + GitHub Actions + Azure App Service.",
        img: "/projects/azure.png",
        tags: ["Azure", "Terraform", "CI/CD", "Flask"],
        github: "https://github.com/Radhikamangroliya/flask-azure-deployment",
      },
    ],
  },

  {
    name: "🏗️ Full-Stack Projects",
    projects: [
      {
        title: "Fullstack To-Do List Web App",
        desc: "Full MERN-stack To-Do app with authentication, task categories, filtering, and responsive UI.",
        img: "/projects/todo.png",
        tags: ["React", "Node.js", "MongoDB", "Fullstack"],
        github: "https://github.com/Radhikamangroliya/todo-fullstack",
      },
      {
        title: "Book Library API (.NET Core)",
        desc: "CRUD API with JWT authentication using .NET Core, EF, SQL Server, and Swagger.",
        img: "/projects/dotnet.png",
        tags: [".NET", "EF Core", "SQL Server", "Azure"],
        github: "https://github.com/Radhikamangroliya/Book-Library-API",
      },
    ],
  },

  {
    name: "📱 iOS Apps",
    projects: [
      {
        title: "Home Cooking iOS App",
        desc: "Recipe browsing + meal planner iOS app built with Swift & custom UI components.",
        img: "/projects/homecooking.png",
        tags: ["iOS", "Swift", "Mobile App"],
        github: "https://github.com/Radhikamangroliya/home-cooking-app",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-sub">
        AI, GenAI, ML, DevOps, full-stack, and iOS applications I’ve built.
      </p>

      {categories.map((category, idx) => (
        <div className="project-category" key={idx}>
          <h2 className="category-title">{category.name}</h2>

          <div className="projects-list">
            {category.projects.map((p, i) => (
              <section className="project-section" key={i}>
                <div className="project-left">
                  <h3>{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>

                  <div className="project-tags">
                    {p.tags.map((t, tagIndex) => (
                      <span className="tag" key={tagIndex}>{t}</span>
                    ))}
                  </div>

                  <a className="project-btn" href={p.github} target="_blank">
                    View Project →
                  </a>
                </div>

                <div className="project-right">
                  <div className="img-tilt">
                    <img src={p.img} alt={p.title} />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
