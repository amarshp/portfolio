import React, { useEffect, useRef } from 'react';
import './PacmanGame.css';

// Patch image paths for local import
const imageMap = {
  './img/pipeHorizontal.png': require('./img/pipeHorizontal.png'),
  './img/pipeVertical.png': require('./img/pipeVertical.png'),
  './img/pipeCorner1.png': require('./img/pipeCorner1.png'),
  './img/pipeCorner2.png': require('./img/pipeCorner2.png'),
  './img/pipeCorner3.png': require('./img/pipeCorner3.png'),
  './img/pipeCorner4.png': require('./img/pipeCorner4.png'),
  './img/block.png': require('./img/block.png'),
  './img/capBottom.png': require('./img/capBottom.png'),
  './img/capLeft.png': require('./img/capLeft.png'),
  './img/capRight.png': require('./img/capRight.png'),
  './img/capTop.png': require('./img/capTop.png'),
  './img/pipeConnectorDown.png': require('./img/pipeConnectorDown.png'),
  './img/pipeConnectorLeft.png': require('./img/pipeConnectorLeft.png'),
  './img/pipeConnectorRight.png': require('./img/pipeConnectorRight.png'),
  './img/pipeConnectorUp.png': require('./img/pipeConnectorUp.png'),
  './img/pellet.png': require('./img/pellet.png'),
  './img/powerUp.png': require('./img/powerUp.png'),
  './img/ghost.png': require('./img/ghost.png'),
};

const PacmanGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scoreRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Patch window.require for image loading
    window.require = (path: string) => imageMap[path] || path;
    // Dynamically import the Pacman JS logic
    const script = document.createElement('script');
    script.src = require('./PacmanGame.js');
    script.async = true;
    document.body.appendChild(script);
    // Patch DOM for vanilla JS
    (window as any).document.getElementById = (id: string) => {
      if (id === 'game') return canvasRef.current;
      if (id === 'score') return scoreRef.current;
      return document.querySelector(`#${id}`);
    };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ background: 'black', padding: 10, color: 'white', width: '100%', height: '100%' }}>
      <p><span>Score:</span><span id="score" ref={scoreRef}>0</span></p>
      <canvas id="game" ref={canvasRef} width={440} height={520} style={{ display: 'block', margin: '0 auto', background: 'black' }} />
    </div>
  );
};

export default PacmanGame; 