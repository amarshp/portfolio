
import { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visible, setVisible] = useState(true);

  const bootSteps = [
    { text: ">> Boot Sequence Initiated", type: "normal", delay: 300 },
    { text: ">> Initializing Neural Lattice [██████        ] 60%", type: "normal", delay: 500 },
    { text: ">> Activating NLP Engine v4.2", type: "normal", delay: 400 },
    { text: ">> WARNING: High processing load detected", type: "warning", delay: 300 },
    { text: ">> STATUS: ONLINE", type: "success", delay: 800 }
  ];

  useEffect(() => {
    if (currentStep < bootSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, bootSteps[currentStep]?.delay || 500);
      return () => clearTimeout(timer);
    } else {
      // Start shutdown sequence
      const shutdownTimer = setTimeout(() => {
        setVisible(false);
        setTimeout(onComplete, 500);
      }, 1000);
      return () => clearTimeout(shutdownTimer);
    }
  }, [currentStep, onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-boot-bg flex flex-col items-center justify-center">
      {/* Star field background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Reduced size neural core section */}
      <div className="relative z-10 flex flex-col items-center mb-8">
        {/* Neural Core - Smaller size */}
        <div className="relative mx-auto mb-8">
          {/* Outer rings - Reduced size */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="280" height="280" className="absolute">
              {/* Outer ring - Security Layers */}
              <circle
                cx="140"
                cy="140"
                r="130"
                fill="none"
                stroke="hsl(var(--neon-violet))"
                strokeWidth="2"
                strokeDasharray="816"
                strokeDashoffset={currentStep >= 7 ? "0" : "816"}
                className="transition-all duration-1000 ease-out opacity-60"
                style={{ animation: 'boot-ring-fill 2s ease-out forwards' }}
              />
              <text x="140" y="25" textAnchor="middle" fill="hsl(var(--neon-violet))" className="text-xs font-mono">
                Security Layers
              </text>
            </svg>
            
            <svg width="220" height="220" className="absolute">
              {/* Middle ring - Data Streams */}
              <circle
                cx="110"
                cy="110"
                r="100"
                fill="none"
                stroke="hsl(var(--neon-magenta))"
                strokeWidth="2"
                strokeDasharray="628"
                strokeDashoffset={currentStep >= 4 ? "0" : "628"}
                className="transition-all duration-1000 ease-out opacity-80"
                style={{ animation: 'boot-ring-fill 1.5s ease-out forwards', animationDelay: '0.5s' }}
              />
              <text x="110" y="25" textAnchor="middle" fill="hsl(var(--neon-magenta))" className="text-xs font-mono">
                Data Streams
              </text>
            </svg>
            
            <svg width="160" height="160" className="absolute">
              {/* Inner ring - Cognition Modules */}
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="hsl(var(--neon-cyan))"
                strokeWidth="3"
                strokeDasharray="440"
                strokeDashoffset={currentStep >= 2 ? "0" : "440"}
                className="transition-all duration-1000 ease-out"
                style={{ animation: 'boot-ring-fill 1s ease-out forwards', animationDelay: '1s' }}
              />
              <text x="80" y="20" textAnchor="middle" fill="hsl(var(--neon-cyan))" className="text-xs font-mono">
                Cognition Modules
              </text>
            </svg>
          </div>

          {/* Central Sphere - Smaller size */}
          <div className="w-24 h-24 mx-auto neural-core relative overflow-hidden">
            <div 
              className="absolute inset-2 rounded-full border-2 border-neon-cyan"
              style={{ 
                animation: 'boot-sphere-scale 3s ease-out forwards',
                boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.6), inset 0 0 30px hsl(var(--neon-cyan) / 0.3)'
              }}
            >
              {/* Wireframe pattern */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--neon-cyan))" strokeWidth="0.5" opacity="0.6"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
                
                {/* Circuit lines */}
                <path d="M20,20 Q50,10 80,20 T80,50 Q70,80 50,80 T20,50 Z" 
                      fill="none" 
                      stroke="hsl(var(--neon-magenta))" 
                      strokeWidth="1" 
                      opacity="0.8"
                      className="animate-pulse" />
                
                <circle cx="50" cy="50" r="15" 
                        fill="none" 
                        stroke="hsl(var(--neon-violet))" 
                        strokeWidth="1" 
                        opacity="0.9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Final status */}
        {currentStep >= bootSteps.length && (
          <div className="mb-8 text-neon-green font-mono text-xl animate-pulse">
            SYSTEM READY
          </div>
        )}
      </div>

      {/* Console Output - With proper padding from neural core */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
        <div className="bg-black/50 border border-neon-green/30 rounded-lg p-6 text-left">
          <div className="space-y-2">
            {bootSteps.slice(0, currentStep).map((step, index) => (
              <div
                key={index}
                className={`font-mono text-xs ${
                  step.type === 'warning' ? 'boot-warning' : 
                  step.type === 'success' ? 'text-neon-green' : 'boot-text'
                } ${index === currentStep - 1 ? 'typewriter' : ''}`}
              >
                {step.text}
              </div>
            ))}
            {currentStep < bootSteps.length && (
              <div className="font-mono text-xs boot-text">
                <span className="animate-pulse">█</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;
