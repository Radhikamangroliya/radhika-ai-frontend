// -------------------------------------------------------------
// Resume.jsx — Contact + Resume Page (Neon Dark Theme)
// Integrated with Formspree for Contact Form Submission
// -------------------------------------------------------------

import React from "react";
import "./Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Title */}
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-sub">
        Let’s connect — I’d love to hear from you.
      </p>

      {/* ✅ Contact Card (Glassmorphism style) */}
      <div className="contact-card">
        {/* LEFT INFO SECTION */}
        <div className="contact-left">
          <h2 className="contact-name">Radhika Mangroliya</h2>
          <p className="contact-role">AI Engineer • Full-Stack Developer</p>

          <ul className="contact-list">
            <li>
              <FaPhone /> (+1) 312-874-9134
            </li>
            <li>
              <FaEnvelope /> radhikamangroliya0@gmail.com
            </li>
            <li>
              <FaMapMarkerAlt /> New York, USA
            </li>
          </ul>

          {/* ✅ Social Icons */}
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

        {/* RIGHT SECTION — Contact Form (Formspree) */}
        <div className="contact-right">
          <form
            action="https://formspree.io/f/xeovoqpy" // ✅ your unique Formspree endpoint
            method="POST"
            className="contact-form"
          >
            <div className="form-row">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject / Project"
              className="full-width"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              required
            ></textarea>

            <button type="submit" className="btn send">
              Send Message
            </button>
          </form>
        </div>
      </div>

    
    </div>
  );
}
