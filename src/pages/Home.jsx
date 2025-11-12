import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const grid = document.querySelector(".grid-bg");
    const stars = document.querySelector(".stars-bg");
    const handleScroll = () => {
      const offset = window.scrollY * 0.15;
      if (grid) grid.style.transform = `translateY(${offset}px)`;
      if (stars) stars.style.transform = `translateY(${offset * 0.6}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Go to Resume.jsx
  const goToContact = () => navigate("/resume");

  const openChat = () => window.dispatchEvent(new Event("open-chat"));

  return (
    <div className="home-wrapper">
      <div className="background-layers">
        <div className="particles-layer">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${4 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="stars-bg"></div>
        <div className="grid-bg"></div>
      </div>

      <section className="hero-left">
        <h1 className="hero-title">RADHIKA <br /> MANGROLIYA</h1>
        <h2 className="hero-subtitle">AI Engineer · Full-Stack Developer</h2>
        <p className="hero-tagline">
          Building intelligent systems & human-centered experiences.
        </p>
        <button className="contact-btn" onClick={goToContact}>
          Contact Me →
        </button>
      </section>

      <section className="hero-ai-card">
        <h3 className="ai-title">RADHIKA 2.0</h3>
        <img src="/ai-avatar.png" alt="AI Avatar" className="ai-avatar" />
        <p className="ai-desc">
          Hi! I’m your AI guide — ask me anything about Radhika.
        </p>
        <button className="ai-ask-btn" onClick={openChat}>
          Ask Me Anything →
        </button>
      </section>
    </div>
  );
}



