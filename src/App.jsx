// -------------------------------------------------------------
// App.jsx — Root of Radhika's AI Portfolio
// -------------------------------------------------------------

import React from "react";

// ✅ Global theme + animation styles
import "./styles/global.css";
import "./styles/theme.css";
import "./styles/animations.css";

// ✅ Routing system (contains Navbar + all pages)
import AppRouter from "./router.jsx";

// ✅ Floating Chat Assistant (always visible)
import ChatWidget from "./components/ChatWidget.jsx";

export default function App() {
  return (
    <>
      {/* Main Route System */}
      <AppRouter />

      {/* ✅ Floating Chat Assistant on every page */}
      <ChatWidget />
    </>
  );
}
