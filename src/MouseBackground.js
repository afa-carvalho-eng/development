import React, { useState, useEffect } from "react";
import "./MouseBackground.css";

const MouseBackground = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="mouse-background"
      style={{
        background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(0, 255, 255, 0.3), rgba(0, 0, 0, 0.9))`
      }}
    />
  );
};

export default MouseBackground;
