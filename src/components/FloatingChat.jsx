import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./FloatingChat.css";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm **Radhika AI**, ask me anything about Radhika’s skills, experience, or projects! 💫",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:8000/ask", {
        question: userMsg.text,
      });

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: res.data.answer },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Backend offline. Start FastAPI." },
      ]);
    }
  };

  return (
    <>
      {/* Floating bubble */}
      {!open && (
        <div className="chat-bubble" onClick={() => setOpen(true)}>
          💬
        </div>
      )}

      {/* Floating Chat Window */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Chat with AI</h4>
            <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`bubble ${m.sender}`}>
                <ReactMarkdown>{m.text}</ReactMarkdown>
              </div>
            ))}
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
