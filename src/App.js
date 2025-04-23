import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setScore(score + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 150);
  };

  return (
    <div className="App">
      <div className="game-box">
        <h1 className="title">🎯 Click Challenge</h1>
        <p className={`score ${animate ? 'pulse' : ''}`}>Score: {score}</p>
        <button className="game-button" onClick={handleClick}>
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default App;

