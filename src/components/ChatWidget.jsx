import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import avatar from "../assets/ai-avatar.png";

import "./ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm **Radhika AI**, your assistant. Ask me anything about Radhika’s skills, projects, internships!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  // ✅ Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ Listen for open-chat event
  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-chat", openChat);
    return () => window.removeEventListener("open-chat", openChat);
  }, []);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await axios.post("https://radhika-ai-backend.onrender.com/ask", {
        question: userMessage.text,
      });

      const aiMessage = {
        sender: "ai",
        text: res.data.answer || "I'm not sure — try another question!",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠ Backend offline — start FastAPI server!" },
      ]);
    }

    setIsLoading(false);
  }

  return (
    <>
      {/* ✅ Floating Bubble */}
      <div className="chat-bubble" onClick={() => setOpen(true)}>
        <img src={avatar} className="bubble-avatar" alt="AI Avatar" />
      </div>

      {/* ✅ Popup Chat Window */}
      {open && (
        <div className="chat-popup">
          <div className="chat-header">
            <div className="header-left">
              <img src={avatar} alt="AI Avatar" className="header-avatar" />
              <h3>Radhika AI</h3>
            </div>
            <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}>
                {/* ✅ AI avatar next to AI messages */}
                {m.sender === "ai" && (
                  <img src={avatar} className="msg-avatar" alt="AI" />
                )}

                {/* ✅ Markdown text */}
                <ReactMarkdown>{m.text}</ReactMarkdown>
              </div>
            ))}

            {isLoading && <div className="typing">• • •</div>}
            <div ref={bottomRef} />
          </div>

          <form className="chat-input" onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
