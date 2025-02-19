import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MouseBackground from "./MouseBackground";
import DeepSeekChat from "./DeepSeekChat";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <MouseBackground />
        <header className="header">
          <h1>Welcome to AI Hub</h1>
          <p>Explore AI chatbots, problem-solving tools, and interactive games!</p>
        </header>

        <div className="features">
          <FeatureCard title="DeepSeek Chatbot" description="Chat with our AI-powered assistant." link="/deepseek-chat" />
          <FeatureCard title="AI Problem Solver" description="Let AI help you solve complex problems." />
          <FeatureCard title="AI-Powered Games" description="Play and compete against AI opponents." />
          <FeatureCard title="Computer Vision" description="Explore real-time image recognition." />
          <FeatureCard title="AI History" description="Learn about the evolution of AI." />
        </div>

        <Routes>
          <Route path="/deepseek-chat" element={<DeepSeekChat />} />
        </Routes>
      </div>
    </Router>
  );
}

function FeatureCard({ title, description, link }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      {link ? <Link to={link}><button>Explore</button></Link> : <button>Explore</button>}
    </div>
  );
}

export default App;
