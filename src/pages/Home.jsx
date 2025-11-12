import React, { useEffect } from "react";
import "./Home.css";

export default function Home() {

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

  // ✅ Open Resume page safely (works on Vercel & localhost)
  const goToContact = () => {
    window.open("/resume", "_self"); // open Resume.jsx in same tab
  };

  // ✅ Trigger chat widget
  const openChat = () => {
    window.dispatchEvent(new Event("open-chat"));
  };

  return (
    <div className="home-wrapper">
      {/* BACKGROUND */}
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

      {/* LEFT HERO */}
      <section className="hero-left">
        <h1 className="hero-title">
          RADHIKA <br /> MANGROLIYA
        </h1>

        <h2 className="hero-subtitle">
          AI Engineer · Full-Stack Developer
        </h2>

        <p className="hero-tagline">
          Building intelligent systems & human-centered experiences.
        </p>

        {/* ✅ Smooth and safe link */}
        <button className="contact-btn" onClick={goToContact}>
          Contact Me →
        </button>
      </section>

      {/* RIGHT AI CARD */}
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
