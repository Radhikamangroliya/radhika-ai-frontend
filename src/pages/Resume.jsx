// -------------------------------------------------------------
// Contact.jsx — Contact Card + Neon Buttons (Dark Theme)
// Includes View PDF, Download PDF, and PDF Viewer
// -------------------------------------------------------------

import React from "react";
import "./Resume.css";

import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub 
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* Title */}
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-sub">Let’s connect — I’d love to hear from you.</p>

      {/* ✅ Contact Card (same glass style as Resume card) */}
      <div className="contact-card">

        {/* LEFT INFO SECTION */}
        <div className="contact-left">
          <h2 className="contact-name">Radhika Mangroliya</h2>
          <p className="contact-role">AI Engineer • Full-Stack Developer</p>

          <ul className="contact-list">
            <li><FaPhone /> (+1) 312-874-9134</li>
            <li><FaEnvelope /> radhikamangroliya0@gmail.com</li>
            <li><FaMapMarkerAlt /> New York, USA</li>
          </ul>

          {/* ✅ SOCIAL ICONS */}
          <div className="social-row">
            <a 
              href="https://www.linkedin.com/in/radhika-mangroliya-87aa75214/" 
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a 
              href="https://github.com/radhikamangroliya" 
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="contact-right">
          <form className="contact-form">

            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>

            <input type="text" placeholder="Subject / Project" className="full-width" />

            <textarea placeholder="Message" rows="6"></textarea>

            <button type="submit" className="btn send">Send Message</button>
          </form>
        </div>
      </div>

      {/* ✅ Buttons (same as Resume.jsx) */}
      <div className="resume-buttons">
        <a href="/resume.pdf" target="_blank" className="btn view">View PDF</a>
        <a href="/resume.pdf" download className="btn download">Download PDF</a>
      </div>

      {/* ✅ PDF viewer below */}
      <iframe
        src="/resume.pdf"
        className="resume-viewer"
        title="Resume PDF"
      ></iframe>

    </div>
  );
}
