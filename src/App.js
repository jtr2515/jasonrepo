import React, { useEffect, useState } from "react";

function getRandomPosition() {
  const top = Math.floor(Math.random() * 80) + 10; // % from top
  const left = Math.floor(Math.random() * 80) + 10; // % from left
  return { top, left };
}

function App() {
  const [position, setPosition] = useState(getRandomPosition());
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [timer, setTimer] = useState(null);

  const moveTarget = () => {
    clearTimeout(timer);
    const timeout = setTimeout(() => {
      setMisses(m => m + 1);
      setPosition(getRandomPosition());
    }, 1200); // Timeout to click
    setTimer(timeout);
    setPosition(getRandomPosition());
  };

  const handleClick = () => {
    setScore(s => s + 1);
    moveTarget();
  };

  useEffect(() => {
    moveTarget();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#1e1e2f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h1>🎯 Click the Circle</h1>
      <p>Score: {score} | Misses: {misses}</p>

      <div
        onClick={handleClick}
        style={{
          position: "absolute",
          top: `${position.top}%`,
          left: `${position.left}%`,
          width: "60px",
          height: "60px",
          backgroundColor: "#00FFC6",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: "0 0 20px #00FFC6",
          transition: "top 0.3s, left 0.3s",
        }}
      ></div>
    </div>
  );
}

export default App;
